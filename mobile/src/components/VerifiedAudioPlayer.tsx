import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { WebView, type WebViewMessageEvent } from "react-native-webview";
import {
  emitMobileAudioState,
  registerAudioPlaybackHandler,
} from "../lib/mobile-audio";

const AUDIO_HOST_HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <audio id="kh-verified-audio" preload="metadata" playsinline></audio>
    <script>
      (function() {
        var el = document.getElementById('kh-verified-audio');
        if (!el) return;
        var lastSent = 0;
        function post(force) {
          var now = Date.now();
          if (!force && now - lastSent < 250) return;
          lastSent = now;
          try {
            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                url: el.currentSrc || el.src || null,
                playing: !el.paused && !el.ended,
                loading: el.readyState < 2 && !el.paused,
                currentTime: Number.isFinite(el.currentTime) ? el.currentTime : 0,
                duration: Number.isFinite(el.duration) ? el.duration : 0,
                rate: Number.isFinite(el.playbackRate) ? el.playbackRate : 1
              }));
            }
          } catch (e) {}
        }
        el.addEventListener('loadedmetadata', function() { post(true); });
        el.addEventListener('playing', function() { post(true); });
        el.addEventListener('play', function() { post(true); });
        el.addEventListener('pause', function() { post(true); });
        el.addEventListener('ended', function() { post(true); });
        el.addEventListener('waiting', function() { post(true); });
        el.addEventListener('seeked', function() { post(true); });
        el.addEventListener('ratechange', function() { post(true); });
        el.addEventListener('timeupdate', function() { post(false); });
        el.addEventListener('error', function() {
          try {
            if (window.ReactNativeWebView) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'state', playing: false, loading: false,
                position: 0, duration: 0, rate: 1
              }));
            }
          } catch (e) {}
        });
      })();
    </script>
  </body>
</html>`;

/**
 * Hidden 0x0 HTML5 audio host mounted once in RootLayout.
 * Lazy-mounts the underlying WebView only on the first playback command to avoid
 * Android cold-start WebView inflation and idle RAM overhead.
 * Plays verified HTTPS native-speaker recordings (.mp3 / .opus / .wav)
 * with live playback state, seeking, speed control, and zero TTS fallback.
 */
export function VerifiedAudioPlayer() {
  const webViewRef = useRef<WebView | null>(null);
  const webViewMountedRef = useRef(false);
  const webViewLoadedRef = useRef(false);
  const pendingScriptsRef = useRef<string[]>([]);
  const [webViewMounted, setWebViewMounted] = useState(false);

  const handleMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data || "{}");
      if (data && typeof data === "object") {
        emitMobileAudioState({
          url: typeof data.url === "string" && data.url ? data.url : null,
          playing: Boolean(data.playing),
          loading: Boolean(data.loading),
          currentTime: typeof data.currentTime === "number" ? data.currentTime : 0,
          duration: typeof data.duration === "number" ? data.duration : 0,
          rate: typeof data.rate === "number" ? data.rate : 1,
        });
      }
    } catch {
      // ignore malformed messages
    }
  }, []);

  const handleLoadEnd = useCallback(() => {
    webViewLoadedRef.current = true;
    if (pendingScriptsRef.current.length > 0 && webViewRef.current) {
      const queued = pendingScriptsRef.current.splice(0);
      for (const script of queued) {
        webViewRef.current.injectJavaScript(script);
      }
    }
  }, []);

  useEffect(() => {
    const runOrQueue = (script: string, mountIfNeeded = false) => {
      if (webViewLoadedRef.current && webViewRef.current) {
        webViewRef.current.injectJavaScript(script);
        return;
      }
      if (mountIfNeeded) {
        pendingScriptsRef.current.push(script);
        if (!webViewMountedRef.current) {
          webViewMountedRef.current = true;
          setWebViewMounted(true);
        }
        return;
      }
      if (webViewMountedRef.current) {
        pendingScriptsRef.current.push(script);
      }
    };

    registerAudioPlaybackHandler({
      play: (url: string, rate = 1) => {
        const serializedUrl = JSON.stringify(url);
        const safeRate = Number.isFinite(rate) ? Math.max(0.5, Math.min(2, rate)) : 1;
        runOrQueue(
          `
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (!el) return;
              if (el.src !== ${serializedUrl}) {
                el.pause();
                el.currentTime = 0;
                el.src = ${serializedUrl};
              }
              el.playbackRate = ${safeRate};
              var p = el.play();
              if (p && typeof p.catch === 'function') { p.catch(function(){}); }
            } catch (e) {}
          })();
          true;
        `,
          true
        );
      },
      pause: () => {
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (el) el.pause();
            } catch (e) {}
          })();
          true;
        `);
      },
      resume: () => {
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (el && el.src) {
                var p = el.play();
                if (p && typeof p.catch === 'function') { p.catch(function(){}); }
              }
            } catch (e) {}
          })();
          true;
        `);
      },
      seek: (seconds: number) => {
        const safeSec = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (!el) return;
              var dur = Number.isFinite(el.duration) && el.duration > 0 ? el.duration : ${safeSec};
              el.currentTime = Math.max(0, Math.min(dur, ${safeSec}));
            } catch (e) {}
          })();
          true;
        `);
      },
      skip: (deltaSeconds: number) => {
        const delta = Number.isFinite(deltaSeconds) ? deltaSeconds : 0;
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (!el) return;
              var dur = Number.isFinite(el.duration) && el.duration > 0 ? el.duration : (el.currentTime + ${delta});
              el.currentTime = Math.max(0, Math.min(dur, el.currentTime + ${delta}));
            } catch (e) {}
          })();
          true;
        `);
      },
      setRate: (rate: number) => {
        const safeRate = Number.isFinite(rate) ? Math.max(0.5, Math.min(2, rate)) : 1;
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (el) el.playbackRate = ${safeRate};
            } catch (e) {}
          })();
          true;
        `);
      },
      stop: () => {
        runOrQueue(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (!el) return;
              el.pause();
              el.currentTime = 0;
            } catch (e) {}
          })();
          true;
        `);
      },
    });

    return () => {
      registerAudioPlaybackHandler(null);
    };
  }, []);

  if (!webViewMounted) {
    return null;
  }

  return (
    <View
      style={styles.hiddenHost}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <WebView
        ref={webViewRef}
        source={{ html: AUDIO_HOST_HTML, baseUrl: "https://audio.kenyahub.me/" }}
        onMessage={handleMessage}
        onLoadEnd={handleLoadEnd}
        javaScriptEnabled
        domStorageEnabled={false}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback
        mixedContentMode="never"
        originWhitelist={["https://*", "about:blank"]}
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hiddenHost: {
    position: "absolute",
    width: 0,
    height: 0,
    opacity: 0,
    overflow: "hidden",
  },
  webView: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
  },
});
