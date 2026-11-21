import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { registerAudioPlaybackHandler } from "../lib/mobile-audio";

const AUDIO_HOST_HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <audio id="kh-verified-audio" preload="none" playsinline></audio>
  </body>
</html>`;

/**
 * Hidden 0x0 HTML5 audio host mounted once in RootLayout.
 * Plays verified HTTPS native-speaker recordings (.mp3 / .opus / .wav)
 * without requiring extra native Expo audio modules and with zero TTS fallback.
 */
export function VerifiedAudioPlayer() {
  const webViewRef = useRef<WebView | null>(null);

  useEffect(() => {
    registerAudioPlaybackHandler({
      play: (url: string) => {
        const serializedUrl = JSON.stringify(url);
        webViewRef.current?.injectJavaScript(`
          (function() {
            try {
              var el = document.getElementById('kh-verified-audio');
              if (!el) return;
              el.pause();
              el.currentTime = 0;
              el.src = ${serializedUrl};
              var p = el.play();
              if (p && typeof p.catch === 'function') { p.catch(function(){}); }
            } catch (e) {}
          })();
          true;
        `);
      },
      stop: () => {
        webViewRef.current?.injectJavaScript(`
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
