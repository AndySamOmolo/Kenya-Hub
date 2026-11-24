import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { DynamicIcon } from "../components/DynamicIcon";
import React, { useState, useMemo, useCallback, useEffect, useDeferredValue, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
  Linking,
  KeyboardAvoidingView,
  Platform,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useDynamicStyles,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../theme";

import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  TOTAL_DICTIONARY_ENTRIES,
  INITIAL_RANDOM_WORDS,
  type DictMeta,
  type DictEntry,
  type Dictionary,
} from "../shared/data/language-sources";
import {
  FAMILY_COLORS,
  POPULAR_COMPARE_WORDS,
  runTranslatorSearch,
  getFuzzySuggestions,
  type TranslationResultItem,
} from "../shared/lib/dictionary-search";

import {
  CATEGORY_PAGE_SIZE,
  SEARCH_PAGE_SIZE,
  LOADED_DICTS_CACHE,
  loadDictionary,
  searchAcrossAllDictionaries,
} from "./translator/loader";
import { createStyles } from "./translator/styles";
import { playVerifiedAudio, hasVerifiedAudio } from "../lib/mobile-audio";
import { WebView, type WebViewMessageEvent } from "react-native-webview";
import {
  getBundledAudioPreview,
  loadMobileAudioShard,
  type MobileAudioShardClip,
} from "../lib/mobile-learning-shards";
import {
  getCachedUser,
  submitContributionToAppwrite,
  uploadContributionAudioMobile,
} from "../lib/appwrite-auth";

const EMERGING_KENYAN_LANGUAGES = [
  "Kuria",
  "Maay",
  "Kinubi",
  "Yaaku",
  "Suba",
  "Taveta",
  "Ogiek",
  "El Molo",
  "Sengwer",
  "Dahalo",
  "Orma",
  "Waata",
  "Burji",
  "Gabra",
  "Daasanach",
] as const;

const OTHER_KENYAN_LANGUAGE_VALUE = "__other__";

function buildAudioRecorderHtml(bgColor: string, cardColor: string, textColor: string, goldColor: string): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
  body { background: ${bgColor}; color: ${textColor}; padding: 10px; }
  .box { background: ${cardColor}; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 8px; }
  .row { display: flex; align-items: center; gap: 8px; }
  button { border: none; border-radius: 8px; padding: 8px 14px; font-weight: 700; font-size: 13px; cursor: pointer; }
  #recBtn { background: ${goldColor}; color: #1A1108; flex: 1; }
  #recBtn.recording { background: #dc2626; color: #ffffff; }
  .status { font-size: 12px; opacity: 0.85; }
  audio { width: 100%; height: 34px; display: none; }
</style>
</head>
<body>
<div class="box">
  <div class="row">
    <button id="recBtn" type="button">Tap to Record (Max 30s)</button>
    <span id="timer" class="status">0:00</span>
  </div>
  <div id="status" class="status">Speak the native word or phrase clearly.</div>
  <audio id="preview" controls></audio>
</div>
<script>
  var mediaRecorder = null;
  var chunks = [];
  var streamRef = null;
  var timerId = null;
  var seconds = 0;
  var recBtn = document.getElementById('recBtn');
  var timerEl = document.getElementById('timer');
  var statusEl = document.getElementById('status');
  var previewEl = document.getElementById('preview');

  function post(obj) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(obj));
    }
  }

  function stopTracks() {
    if (streamRef) {
      streamRef.getTracks().forEach(function(t) { t.stop(); });
      streamRef = null;
    }
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  recBtn.addEventListener('click', function() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
      statusEl.textContent = 'Microphone recording is not supported in this WebView. You can paste an audio URL below instead.';
      post({ type: 'error', message: 'Microphone recording unavailable in WebView.' });
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
      streamRef = stream;
      chunks = [];
      seconds = 0;
      var mime = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : (MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4');
      try {
        mediaRecorder = new MediaRecorder(stream, { mimeType: mime });
      } catch (e) {
        mediaRecorder = new MediaRecorder(stream);
        mime = mediaRecorder.mimeType || 'audio/webm';
      }
      mediaRecorder.ondataavailable = function(ev) {
        if (ev.data && ev.data.size > 0) chunks.push(ev.data);
      };
      mediaRecorder.onstop = function() {
        stopTracks();
        recBtn.className = '';
        recBtn.textContent = 'Re-record Audio';
        var cleanMime = (mime || 'audio/webm').split(';')[0];
        var ext = cleanMime.indexOf('mp4') !== -1 ? 'm4a' : (cleanMime.indexOf('ogg') !== -1 ? 'ogg' : 'webm');
        var blob = new Blob(chunks, { type: cleanMime });
        previewEl.src = URL.createObjectURL(blob);
        previewEl.style.display = 'block';
        statusEl.textContent = 'Recording ready and attached.';
        var reader = new FileReader();
        reader.onloadend = function() {
          post({
            type: 'audio',
            base64: reader.result,
            mimeType: cleanMime,
            filename: 'pronunciation_' + Date.now() + '.' + ext
          });
        };
        reader.readAsDataURL(blob);
      };
      mediaRecorder.start();
      recBtn.className = 'recording';
      recBtn.textContent = 'Stop Recording';
      statusEl.textContent = 'Recording... tap Stop when done.';
      timerEl.textContent = '0:00';
      timerId = setInterval(function() {
        seconds++;
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (seconds >= 30 && mediaRecorder && mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
        }
      }, 1000);
    }).catch(function(err) {
      stopTracks();
      statusEl.textContent = 'Microphone permission denied. You can paste an audio URL below instead.';
      post({ type: 'error', message: (err && err.message) ? err.message : 'Microphone permission denied.' });
    });
  });
</script>
</body>
</html>`;
}

function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const TranslatorResultCard = React.memo(function TranslatorResultCard({
  item,
  isFav,
  isReverseToEnglish,
  sourceDictName,
  theme,
  styles,
  onPlayAudio,
  onShare,
  onToggleFavorite,
}: {
  item: TranslationResultItem;
  isFav: boolean;
  isReverseToEnglish: boolean;
  sourceDictName?: string;
  theme: any;
  styles: any;
  onPlayAudio: (entry: DictEntry) => void;
  onShare: (langName: string, english: string, translation: string, pronunciation?: string, context?: string) => void;
  onToggleFavorite: (wordKey: string) => void;
}) {
  const cleanLangName = item.languageName.split("(")[0].trim();
  const familyKey = item.family?.toLowerCase();
  const favKey = `${item.languageId}:${item.entry.english}`;

  return (
    <View style={styles.resultCard}>
      <View style={styles.resultHeader}>
        <View style={styles.resultTagRow}>
          <View style={styles.catBadge}>
            <Text style={styles.catBadgeText}>{item.categoryName}</Text>
          </View>
          <View
            style={[
              styles.familyBadge,
              { backgroundColor: `${FAMILY_COLORS[familyKey] || "#999"}20` },
            ]}
          >
            <Text
              style={[
                styles.familyBadgeText,
                { color: FAMILY_COLORS[familyKey] || theme.gold },
              ]}
            >
              {cleanLangName}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          {hasVerifiedAudio(item.entry) ? (
            <Pressable
              onPress={() => onPlayAudio(item.entry)}
              accessibilityRole="button"
              accessibilityLabel={`Play verified ${cleanLangName} recording`}
              hitSlop={8}
            >
              <Ionicons name="volume-high-outline" size={19} color={theme.gold} />
            </Pressable>
          ) : null}
          <Pressable
            onPress={() =>
              onShare(
                cleanLangName,
                item.entry.english,
                item.entry.translation,
                item.entry.pronunciation,
                item.entry.context
              )
            }
            accessibilityRole="button"
            accessibilityLabel={`Share ${cleanLangName} translation`}
            hitSlop={8}
          >
            <Ionicons name="share-social-outline" size={18} color={theme.textSecondary} />
          </Pressable>

          <Pressable
            onPress={() => onToggleFavorite(favKey)}
            accessibilityRole="button"
            accessibilityLabel={isFav ? "Remove from favorites" : "Save to favorites"}
            hitSlop={8}
          >
            <Ionicons
              name={isFav ? "star" : "star-outline"}
              size={20}
              color={isFav ? theme.gold : theme.textMuted}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.resultTranslation}>
        {item.missingTarget
          ? `Not yet recorded in ${cleanLangName}`
          : isReverseToEnglish
          ? item.entry.english
          : item.entry.translation}
      </Text>
      <Text style={styles.resultEnglish}>
        {item.sourceEntry && sourceDictName
          ? `${sourceDictName}: ${item.sourceEntry.translation} → English: "${item.pivotEnglish}"`
          : isReverseToEnglish
          ? item.entry.translation
          : item.entry.english}
      </Text>

      {item.entry.pronunciation ? (
        <View style={styles.pronounceRow}>
          <Ionicons name="chatbubble-ellipses-outline" size={14} color={theme.sky} />
          <Text style={styles.pronounceText}>
            Pronunciation: /{item.entry.pronunciation}/
          </Text>
        </View>
      ) : null}

      {item.entry.context ? (
        <Text style={styles.contextText}>
          {item.entry.context.replace(/\*\*([^*]+)\*\*/g, "$1")}
        </Text>
      ) : null}
    </View>
  );
});

const BrowseEntryCard = React.memo(function BrowseEntryCard({
  entry,
  langId,
  cleanLang,
  isFav,
  theme,
  styles,
  onPlayAudio,
  onShare,
  onToggleFavorite,
}: {
  entry: DictEntry;
  langId: string;
  cleanLang: string;
  isFav: boolean;
  theme: any;
  styles: any;
  onPlayAudio: (entry: DictEntry) => void;
  onShare: (langName: string, english: string, translation: string, pronunciation?: string, context?: string) => void;
  onToggleFavorite: (wordKey: string) => void;
}) {
  return (
    <View style={styles.resultCard}>
      <View style={styles.resultHeader}>
        <Text style={styles.resultEnglish}>{entry.english}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          {hasVerifiedAudio(entry) ? (
            <Pressable
              onPress={() => onPlayAudio(entry)}
              accessibilityRole="button"
              accessibilityLabel={`Play verified ${cleanLang} recording`}
              hitSlop={8}
            >
              <Ionicons name="volume-high-outline" size={18} color={theme.gold} />
            </Pressable>
          ) : null}
          <Pressable
            onPress={() =>
              onShare(
                cleanLang,
                entry.english,
                entry.translation,
                entry.pronunciation,
                entry.context
              )
            }
            accessibilityRole="button"
            accessibilityLabel="Share phrase"
            hitSlop={8}
          >
            <Ionicons name="share-social-outline" size={17} color={theme.textSecondary} />
          </Pressable>
          <Pressable
            onPress={() => onToggleFavorite(`${langId}:${entry.english}`)}
            accessibilityRole="button"
            accessibilityLabel={isFav ? "Remove from favorites" : "Save to favorites"}
            hitSlop={8}
          >
            <Ionicons
              name={isFav ? "star" : "star-outline"}
              size={18}
              color={isFav ? theme.gold : theme.textMuted}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.resultTranslation}>{entry.translation}</Text>

      {entry.pronunciation ? (
        <View style={styles.pronounceRow}>
          <Ionicons name="chatbubble-ellipses-outline" size={14} color={theme.sky} />
          <Text style={styles.pronounceText}>
            Pronunciation: /{entry.pronunciation}/
          </Text>
        </View>
      ) : null}

      {entry.context ? (
        <Text style={styles.contextText}>
          {entry.context.replace(/\*\*([^*]+)\*\*/g, "$1")}
        </Text>
      ) : null}
    </View>
  );
});

export function KenyanTranslatorTool({
  onScrollToTop,
}: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);

  const [viewMode, setViewMode] = useState<"translate" | "browse" | "favorites">(
    "translate"
  );
  const [sourceLanguage, setSourceLanguage] = useState<string>("english");
  const [targetLanguage, setTargetLanguage] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [activeCategory, setActiveCategory] = useState<string>("greetings");
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const deferredCategoryFilter = useDeferredValue(categoryFilter);
  const [searchPage, setSearchPage] = useState(1);
  const [audioOnly, setAudioOnly] = useState(false);

  useEffect(() => {
    setCategoryPage(1);
    setCategoryFilter("");
  }, [activeCategory, targetLanguage, sourceLanguage]);

  useEffect(() => {
    setSearchPage(1);
  }, [searchQuery, targetLanguage, sourceLanguage]);

  const [loadedDicts, setLoadedDicts] = useState<Record<string, Dictionary>>(
    () => ({ ...LOADED_DICTS_CACHE })
  );
  const [allLangSearchResults, setAllLangSearchResults] = useState<
    TranslationResultItem[]
  >([]);
  const [isSearchingAll, setIsSearchingAll] = useState(false);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const recentSearchesRef = useRef<string[]>(recentSearches);
  recentSearchesRef.current = recentSearches;
  const favoritesRef = useRef<string[]>(favorites);
  favoritesRef.current = favorites;
  const [userContributions, setUserContributions] = useState<{
    id: string;
    language: string;
    english: string;
    translation: string;
    pronunciation?: string;
    context?: string;
    contributor?: string;
    cloudSynced?: boolean;
    syncStatus?: string;
    audioAttached?: boolean;
  }[]>([]);
  const userContributionsCount = userContributions.length;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showSourcePicker, setShowSourcePicker] = useState(false);
  const [showTargetPicker, setShowTargetPicker] = useState(false);

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  // Date-seeded daily word (YYYY-MM-DD deterministic across all 23 Kenyan languages)
  const [randomWord, setRandomWord] = useState<{
    entry: DictEntry;
    langName: string;
    langId: string;
  } | null>(() => {
    if (INITIAL_RANDOM_WORDS.length === 0) return null;
    const now = new Date();
    const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    let hash = 0;
    for (let i = 0; i < dateKey.length; i++) {
      hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
    }
    const item = INITIAL_RANDOM_WORDS[hash % INITIAL_RANDOM_WORDS.length];
    return {
      entry: item.entry,
      langName: item.langName,
      langId: item.langId,
    };
  });

  // Load ONLY required active dictionaries on demand with LRU cap (MOB-1: never preload all 23 JSONs)
  useEffect(() => {
    let cancelled = false;
    const needed = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") needed.add(sourceLanguage);
    if (targetLanguage !== "english" && targetLanguage !== "all") {
      needed.add(targetLanguage);
    }
    if (viewMode === "favorites" && favorites.length > 0) {
      favorites.slice(0, 5).forEach((k) => {
        const lid = k.split(":")[0];
        if (lid) needed.add(lid);
      });
    }

    const missing = Array.from(needed).filter((id) => !LOADED_DICTS_CACHE[id]);
    if (missing.length > 0) {
      Promise.all(
        missing.map((id) =>
          loadDictionary(id, { retainInCache: true, pinnedIds: needed })
        )
      ).then(() => {
        if (!cancelled) setLoadedDicts({ ...LOADED_DICTS_CACHE });
      });
    } else {
      setLoadedDicts({ ...LOADED_DICTS_CACHE });
    }

    return () => {
      cancelled = true;
    };
  }, [sourceLanguage, targetLanguage, viewMode, favorites]);

  // Batched cross-language search when targetLanguage === "all" (MOB-1)
  useEffect(() => {
    if (targetLanguage !== "all" || !searchQuery.trim()) {
      setAllLangSearchResults([]);
      setIsSearchingAll(false);
      return;
    }

    let cancelled = false;
    setIsSearchingAll(true);

    const pinned = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") pinned.add(sourceLanguage);

    const runBatched = async () => {
      let sDict: Dictionary | null = null;
      if (sourceLanguage !== "english") {
        sDict = await loadDictionary(sourceLanguage, {
          retainInCache: true,
          pinnedIds: pinned,
        });
      }
      const finalResults = await searchAcrossAllDictionaries({
        query: searchQuery,
        sourceLanguage,
        sourceDict: sDict,
        pinnedIds: pinned,
        isCancelled: () => cancelled,
        onProgress: (partial) => {
          if (!cancelled) {
            setAllLangSearchResults(partial);
          }
        },
      });
      if (!cancelled) {
        setAllLangSearchResults(finalResults);
        setIsSearchingAll(false);
        setLoadedDicts({ ...LOADED_DICTS_CACHE });
      }
    };

    const debounceTimer = setTimeout(runBatched, 240);
    return () => {
      cancelled = true;
      clearTimeout(debounceTimer);
    };
  }, [searchQuery, sourceLanguage, targetLanguage]);

  // Contribute Modal
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [contribLang, setContribLang] = useState("Swahili");
  const [contribCustomLang, setContribCustomLang] = useState("");
  const [showContribLangPicker, setShowContribLangPicker] = useState(false);
  const [contribEnglish, setContribEnglish] = useState("");
  const [contribTranslation, setContribTranslation] = useState("");
  const [contribPronounce, setContribPronounce] = useState("");
  const [contribContext, setContribContext] = useState("");
  const [contribName, setContribName] = useState("");
  const [contribEmail, setContribEmail] = useState("");
  const [contribSubmitted, setContribSubmitted] = useState(false);
  const [contribSubmitting, setContribSubmitting] = useState(false);
  const [contribLastCloudSynced, setContribLastCloudSynced] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);
  const [contribAudioBase64, setContribAudioBase64] = useState<string | null>(null);
  const [contribAudioMime, setContribAudioMime] = useState("audio/webm");
  const [contribAudioFilename, setContribAudioFilename] = useState("");
  const [contribAudioUrl, setContribAudioUrl] = useState("");
  const [contribAudioError, setContribAudioError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    AsyncStorage.multiGet([
      "kh-translator-recent",
      "kh-translator-favs",
      "kh-user-contributions",
    ])
      .then((entries) => {
        if (!active) return;
        const map = new Map(entries);
        const recentRaw = map.get("kh-translator-recent");
        if (recentRaw) {
          try {
            const parsed = JSON.parse(recentRaw);
            if (Array.isArray(parsed)) {
              setRecentSearches(
                parsed.filter((x: unknown): x is string => typeof x === "string" && x.trim().length > 0)
              );
            }
          } catch {}
        }
        const favsRaw = map.get("kh-translator-favs");
        if (favsRaw) {
          try {
            const parsed = JSON.parse(favsRaw);
            if (Array.isArray(parsed)) {
              setFavorites(
                parsed.filter((x: unknown): x is string => typeof x === "string" && x.trim().length > 0)
              );
            }
          } catch {}
        }
        const contribRaw = map.get("kh-user-contributions");
        if (contribRaw) {
          try {
            const parsed = JSON.parse(contribRaw);
            if (Array.isArray(parsed)) {
              setUserContributions(
                parsed.filter(
                  (c: unknown) =>
                    Boolean(c) &&
                    typeof c === "object" &&
                    !Array.isArray(c) &&
                    typeof (c as any).english === "string" &&
                    typeof (c as any).translation === "string"
                )
              );
            }
          } catch {}
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contribTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (contribTimerRef.current) clearTimeout(contribTimerRef.current);
    };
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      toastTimerRef.current = null;
      setToastMessage(null);
    }, 2500);
  }, []);

  const addRecentSearch = useCallback((q: string) => {
    if (!q || q.length < 2) return;
    const prev = recentSearchesRef.current;
    const next = [
      q,
      ...prev.filter((s) => s.toLowerCase() !== q.toLowerCase()),
    ].slice(0, 6);
    recentSearchesRef.current = next;
    setRecentSearches(next);
    AsyncStorage.setItem("kh-translator-recent", JSON.stringify(next)).catch(() => {});
  }, []);

  const toggleFavorite = useCallback(
    (wordKey: string) => {
      triggerHaptic(10);
      const prev = favoritesRef.current;
      const isAdding = !prev.includes(wordKey);
      const next = isAdding
        ? [...prev, wordKey]
        : prev.filter((k) => k !== wordKey);
      favoritesRef.current = next;
      setFavorites(next);
      AsyncStorage.setItem("kh-translator-favs", JSON.stringify(next)).catch(() => {});
      showToast(isAdding ? "Saved to Favorites" : "Removed from Favorites");
    },
    [showToast]
  );

  const handlePlayAudio = useCallback((entry: DictEntry) => {
    triggerHaptic(8);
    playVerifiedAudio(entry);
  }, []);

  const handleShareEntry = useCallback(
    async (
      langName: string,
      english: string,
      translation: string,
      pronunciation?: string,
      context?: string
    ) => {
      triggerHaptic(10);
      const lines = [
        `${langName} ↔ English Translation`,
        `${langName}: ${translation}${pronunciation ? ` (/${pronunciation}/)` : ""}`,
        `English: ${english}`,
      ];
      if (context) {
        lines.push(`Context: ${context.replace(/\*\*([^*]+)\*\*/g, "$1")}`);
      }
      lines.push("", "— Shared via KenyaHub 23-Language Dictionary");
      try {
        await Share.share({
          title: `${translation} (${langName})`,
          message: lines.join("\n"),
        });
      } catch {}
    },
    []
  );

  const loadedDictList = useMemo(
    () =>
      ALL_DICT_METAS.map((m) => loadedDicts[m.languageId]).filter(
        Boolean
      ) as Dictionary[],
    [loadedDicts]
  );

  const rollRandomWord = useCallback(() => {
    triggerHaptic(8);
    if (INITIAL_RANDOM_WORDS.length > 0) {
      setRandomWord((prev) => {
        const candidates = INITIAL_RANDOM_WORDS.filter(
          (w) => w.langId !== prev?.langId
        );
        const pool = candidates.length > 0 ? candidates : INITIAL_RANDOM_WORDS;
        const pick = pool[Math.floor(Math.random() * pool.length)];
        return {
          entry: pick.entry,
          langName: pick.langName,
          langId: pick.langId,
        };
      });
      return;
    }
    const populatedDicts = loadedDictList.filter((d) =>
      d.categories.some((c: any) => c.entries.length > 0)
    );
    if (populatedDicts.length > 0) {
      const dict =
        populatedDicts[Math.floor(Math.random() * populatedDicts.length)];
      const cleanPool = dict.categories
        .filter((c: any) => c.id !== "culture-history" && c.entries.length > 0)
        .flatMap((c: any) => c.entries);
      if (cleanPool.length > 0) {
        const entry = cleanPool[Math.floor(Math.random() * cleanPool.length)];
        setRandomWord({
          entry,
          langName: dict.languageName.split("(")[0].trim(),
          langId: dict.languageId,
        });
      }
    }
  }, [loadedDictList]);

  const targetDict =
    targetLanguage !== "english" && targetLanguage !== "all"
      ? loadedDicts[targetLanguage] || null
      : null;
  const sourceDict =
    sourceLanguage !== "english" ? loadedDicts[sourceLanguage] || null : null;
  const browseDictId =
    targetLanguage !== "english" && targetLanguage !== "all"
      ? targetLanguage
      : sourceLanguage !== "english"
      ? sourceLanguage
      : "swahili";
  const browseDict = loadedDicts[browseDictId] || loadedDicts.swahili || null;
  const browseMeta: DictMeta =
    DICT_META_MAP[browseDictId] || DICT_META_MAP.swahili || ALL_DICT_METAS[0];

  // Unified Search Results (Single-pair synchronous index OR batched All-23-Languages stream + local custom words)
  const searchResults = useMemo(() => {
    const q = deferredSearchQuery.trim();
    if (!q) return [];
    const qNorm = stripDiacritics(q);
    const customMatches: TranslationResultItem[] = userContributions
      .filter((item) => {
        const langId = item.language.toLowerCase().trim();
        if (targetLanguage !== "all" && targetLanguage !== "english" && langId !== targetLanguage) {
          return false;
        }
        return stripDiacritics(item.english).includes(qNorm) || stripDiacritics(item.translation).includes(qNorm);
      })
      .map((item) => {
        const langId = item.language.toLowerCase().trim();
        const meta = DICT_META_MAP[langId];
        return {
          languageId: meta?.languageId || langId,
          languageName: meta?.languageName || item.language,
          family: meta?.family || "custom",
          categoryName: "My Device Dictionary",
          matchType: "exact",
          entry: {
            english: item.english,
            translation: item.translation,
            pronunciation: item.pronunciation || "",
            context: item.context ? `${item.context} (Added on this device)` : "Added on this device",
          },
        };
      });

    const baseResults =
      targetLanguage === "all"
        ? allLangSearchResults
        : runTranslatorSearch({
            query: deferredSearchQuery,
            sourceLanguage,
            targetLanguage,
            sourceDict,
            targetDict,
            activeDictList: loadedDictList,
            maxSingleDictResults: 100,
          }).searchResults;

    return [...customMatches, ...baseResults];
  }, [
    deferredSearchQuery,
    sourceLanguage,
    targetLanguage,
    targetDict,
    sourceDict,
    loadedDictList,
    allLangSearchResults,
    userContributions,
  ]);

  // Fuzzy "Did you mean?" suggestions when search returns 0 results
  const fuzzySuggestions = useMemo(() => {
    if (
      !deferredSearchQuery.trim() ||
      deferredSearchQuery.trim().length < 3 ||
      searchResults.length > 0 ||
      isSearchingAll
    )
      return [];
    const pool =
      sourceLanguage === "english"
        ? targetDict
          ? [targetDict]
          : loadedDictList
        : sourceDict
        ? [sourceDict]
        : loadedDictList;
    return getFuzzySuggestions(deferredSearchQuery, pool, sourceLanguage, 5);
  }, [
    deferredSearchQuery,
    searchResults.length,
    isSearchingAll,
    sourceLanguage,
    targetDict,
    sourceDict,
    loadedDictList,
  ]);

  // Swap languages while preserving or flipping the active query
  const swapLanguages = () => {
    triggerHaptic(10);
    const isReverseToEnglish =
      sourceLanguage !== "english" && targetLanguage === "english";
    const topMatch = searchResults.find((r) => !r.missingTarget);
    if (targetLanguage === "all") {
      const nextSource = topMatch?.languageId || "swahili";
      setSourceLanguage(nextSource);
      setTargetLanguage("english");
      if (topMatch && searchQuery.trim()) {
        setSearchQuery(topMatch.entry.translation.split(/[\/;(]/)[0].trim());
      }
    } else {
      const prevSource = sourceLanguage;
      setSourceLanguage(targetLanguage);
      setTargetLanguage(prevSource);
      if (topMatch && searchQuery.trim()) {
        const flipped = isReverseToEnglish
          ? topMatch.entry.english.split(/[\/;(]/)[0].trim()
          : topMatch.entry.translation.split(/[\/;(]/)[0].trim();
        if (flipped) setSearchQuery(flipped);
      }
    }
  };

  // Resolved Favorite Entries across loaded dictionaries
  const favoriteItems = useMemo(() => {
    const out: {
      favKey: string;
      languageId: string;
      languageName: string;
      family: string;
      categoryName: string;
      entry: DictEntry;
    }[] = [];
    for (const key of favorites) {
      const colonIdx = key.indexOf(":");
      if (colonIdx === -1) continue;
      const langId = key.slice(0, colonIdx);
      const eng = key.slice(colonIdx + 1);
      const dict = loadedDicts[langId];
      if (!dict) continue;
      let foundEntry: DictEntry | undefined;
      let foundCat = "Vocabulary";
      for (const cat of dict.categories) {
        const match = cat.entries.find((e) => e.english === eng);
        if (match) {
          foundEntry = match;
          foundCat = cat.name;
          break;
        }
      }
      if (foundEntry) {
        out.push({
          favKey: key,
          languageId: dict.languageId,
          languageName: dict.languageName,
          family: dict.family,
          categoryName: foundCat,
          entry: foundEntry,
        });
      }
    }
    return out;
  }, [favorites, loadedDicts]);

  const dedupedSearchResults = useMemo(() => {
    const seen = new Set<string>();
    return searchResults.filter((r) => {
      const k = `${r.languageId}|${r.entry.english.trim().toLowerCase()}|${r.entry.translation.trim().toLowerCase()}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [searchResults]);

  const audioSearchCount = useMemo(
    () => dedupedSearchResults.filter((r) => hasVerifiedAudio(r.entry)).length,
    [dedupedSearchResults]
  );

  const filteredSearchResults = useMemo(
    () => (audioOnly ? dedupedSearchResults.filter((r) => hasVerifiedAudio(r.entry)) : dedupedSearchResults),
    [dedupedSearchResults, audioOnly]
  );

  const visibleSearchResults = useMemo(
    () => filteredSearchResults.slice(0, searchPage * SEARCH_PAGE_SIZE),
    [filteredSearchResults, searchPage]
  );

  const totalEntriesCount = TOTAL_DICTIONARY_ENTRIES;

  const [browseAudioClips, setBrowseAudioClips] = useState<MobileAudioShardClip[]>(
    () => getBundledAudioPreview(browseMeta.languageId)
  );

  useEffect(() => {
    let active = true;
    const lid = browseMeta.languageId;
    setBrowseAudioClips(getBundledAudioPreview(lid));
    loadMobileAudioShard(lid).then((clips) => {
      if (active && clips.length > 0) {
        setBrowseAudioClips(clips);
      }
    });
    return () => {
      active = false;
    };
  }, [browseMeta.languageId]);

  const browseAudioEntries = useMemo(() => {
    const seen = new Set<string>();
    const seenUrls = new Set<string>();
    const list: DictEntry[] = [];
    if (browseDict) {
      for (const c of browseDict.categories) {
        for (const e of c.entries) {
          if (!hasVerifiedAudio(e)) continue;
          const k = `${e.english.trim().toLowerCase()}|${e.translation.trim().toLowerCase()}`;
          if (seen.has(k)) continue;
          seen.add(k);
          const af = (e as any).audioFile || (e as any).audioUrl;
          if (af) seenUrls.add(af);
          list.push(e);
        }
      }
    }
    for (const clip of browseAudioClips) {
      if (!clip.audioUrl || seenUrls.has(clip.audioUrl)) continue;
      const tr = (clip.transcript || clip.label || "").trim();
      if (!tr) continue;
      const en = (clip.english || "Spoken Native Recording").trim();
      const k = `${en.toLowerCase()}|${tr.toLowerCase()}`;
      if (seen.has(k)) continue;
      seen.add(k);
      seenUrls.add(clip.audioUrl);
      list.push({
        english: en,
        translation: tr,
        pronunciation: "",
        context: clip.english
          ? "Spoken Sentence Archive · Native Speaker Audio"
          : "Spoken Native Recording · Open-Access Audio Archive",
        audioFile: clip.audioUrl,
      } as DictEntry);
    }
    return list;
  }, [browseDict, browseAudioClips]);

  useEffect(() => {
    if (activeCategory === "__audio__") {
      if (browseDict && browseAudioEntries.length === 0 && browseDict.categories.length > 0) {
        setActiveCategory(browseDict.categories[0].id);
      }
      return;
    }
    if (browseDict && browseDict.categories.length > 0) {
      const exists = browseDict.categories.some(
        (c) => c.id === activeCategory && c.entries.length > 0
      );
      if (!exists) {
        setActiveCategory(browseDict.categories[0].id);
      }
    }
  }, [browseDict, activeCategory, browseAudioEntries.length]);

  const dedupedCategoryEntries = useMemo(() => {
    if (!browseDict) return [];
    if (activeCategory === "__audio__") {
      return browseAudioEntries;
    }
    const cat =
      browseDict.categories.find((c) => c.id === activeCategory) ||
      browseDict.categories[0];
    if (!cat) return [];
    const seen = new Set<string>();
    return cat.entries.filter((e) => {
      const k = `${e.english.trim().toLowerCase()}|${e.translation.trim().toLowerCase()}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [browseDict, activeCategory, browseAudioEntries]);

  const categoryEntries = useMemo(() => {
    const q = stripDiacritics(deferredCategoryFilter.trim());
    if (!q) return dedupedCategoryEntries;
    return dedupedCategoryEntries.filter(
      (e) =>
        stripDiacritics(e.english).includes(q) ||
        stripDiacritics(e.translation).includes(q) ||
        (e.context && stripDiacritics(e.context).includes(q))
    );
  }, [dedupedCategoryEntries, deferredCategoryFilter]);

  const visibleCategoryEntries = useMemo(
    () => categoryEntries.slice(0, categoryPage * CATEGORY_PAGE_SIZE),
    [categoryEntries, categoryPage]
  );

  const handleOpenContribute = (defaultEng?: string) => {
    triggerHaptic(8);
    setContribLang(
      browseDict?.languageName?.split("(")[0]?.trim() || "Swahili"
    );
    setContribCustomLang("");
    setShowContribLangPicker(false);
    setContribEnglish(defaultEng || searchQuery || "");
    setContribTranslation("");
    setContribPronounce("");
    setContribContext("");
    setContribSubmitted(false);
    setContribSubmitting(false);
    setContribLastCloudSynced(false);
    setShowAudioRecorder(false);
    setContribAudioBase64(null);
    setContribAudioMime("audio/webm");
    setContribAudioFilename("");
    setContribAudioUrl("");
    setContribAudioError(null);
    setIsContributeOpen(true);

    getCachedUser()
      .then((cached) => {
        if (!cached) return;
        setContribName((prev) => (prev.trim() ? prev : cached.name || ""));
        setContribEmail((prev) => (prev.trim() ? prev : cached.email || ""));
      })
      .catch(() => {});
  };

  const handleRecorderMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const payload = JSON.parse(event.nativeEvent.data);
      if (payload?.type === "audio" && typeof payload.base64 === "string" && payload.base64) {
        setContribAudioBase64(payload.base64);
        setContribAudioMime(typeof payload.mimeType === "string" ? payload.mimeType : "audio/webm");
        setContribAudioFilename(
          typeof payload.filename === "string" ? payload.filename : `pronunciation_${Date.now()}.webm`
        );
        setContribAudioError(null);
      } else if (payload?.type === "error" && typeof payload.message === "string") {
        setContribAudioError(payload.message);
      }
    } catch {
      // Ignore malformed bridge messages
    }
  }, []);

  const handleSubmitContribute = async () => {
    if (contribSubmitting) return;
    const isOtherLang = contribLang === OTHER_KENYAN_LANGUAGE_VALUE;
    const resolvedLanguage = isOtherLang ? contribCustomLang.trim() : contribLang.trim();
    if (!resolvedLanguage || !contribEnglish.trim() || !contribTranslation.trim()) return;
    triggerHaptic(12);
    setContribSubmitting(true);

    try {
      const submittedAt = new Date().toISOString();
      const isEmerging = (EMERGING_KENYAN_LANGUAGES as readonly string[]).includes(resolvedLanguage);
      const customLanguageName = isOtherLang || isEmerging ? resolvedLanguage : undefined;

      let uploadedAudio: { fileId: string; viewUrl: string } | null = null;
      if (contribAudioBase64) {
        uploadedAudio = await uploadContributionAudioMobile(
          contribAudioBase64,
          contribAudioMime,
          contribAudioFilename || `pronunciation_${Date.now()}.webm`
        );
      }

      const contextParts: string[] = [];
      if (contribContext.trim()) contextParts.push(contribContext.trim());
      if (contribAudioUrl.trim() && !uploadedAudio) {
        contextParts.push(`[Audio URL: ${contribAudioUrl.trim()}]`);
      }
      const combinedContext = contextParts.join(" ");

      const cloudRes = await submitContributionToAppwrite({
        language: resolvedLanguage,
        customLanguageName,
        type: "new_word",
        english: contribEnglish.trim(),
        translation: contribTranslation.trim(),
        pronunciation: contribPronounce.trim() || undefined,
        context: combinedContext || undefined,
        category: activeCategory || "phrases",
        contributorName: contribName.trim() || "Community Contributor",
        contributorEmail: contribEmail.trim() || undefined,
        audioFileId: uploadedAudio?.fileId,
        audioMimeType: uploadedAudio ? contribAudioMime : undefined,
        submittedAt,
      });

      const stored = await AsyncStorage.getItem("kh-user-contributions");
      const parsedStored = stored ? JSON.parse(stored) : [];
      const list = Array.isArray(parsedStored)
        ? parsedStored.filter(
            (c: unknown) => Boolean(c) && typeof c === "object" && !Array.isArray(c)
          )
        : [];
      const newEntry = {
        id: cloudRes.documentId || Date.now().toString(),
        language: resolvedLanguage,
        english: contribEnglish.trim(),
        translation: contribTranslation.trim(),
        pronunciation: contribPronounce.trim(),
        context: combinedContext,
        contributor: contribName.trim() || "Community Contributor",
        cloudSynced: cloudRes.synced,
        audioAttached: Boolean(uploadedAudio || contribAudioBase64 || contribAudioUrl.trim()),
        syncStatus: cloudRes.synced ? "submitted_for_review" : "saved_locally",
        timestamp: submittedAt,
      };
      const updatedList = [newEntry, ...list];
      await AsyncStorage.setItem(
        "kh-user-contributions",
        JSON.stringify(updatedList)
      );
      setUserContributions(updatedList);
      setContribLastCloudSynced(cloudRes.synced);
      setContribSubmitted(true);
      showToast(
        cloudRes.synced
          ? "Submitted for admin review!"
          : "Saved offline — will sync when online"
      );
      if (contribTimerRef.current) clearTimeout(contribTimerRef.current);
      contribTimerRef.current = setTimeout(() => {
        contribTimerRef.current = null;
        setIsContributeOpen(false);
      }, 1800);
    } catch {
      showToast("Saved offline — will sync when online");
    } finally {
      setContribSubmitting(false);
    }
  };

  return (
    <View style={styles.toolWrap}>
      {toastMessage && (
        <View style={styles.toastBox}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color={theme.kenyaGreenLight}
          />
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}

      {/* 1. Primary Mode Tabs Above the Fold (UX-9) */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          paddingVertical: 2,
        }}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6, flexShrink: 1 }}>
          {(
            [
              { id: "translate" as const, label: "Translate" },
              { id: "browse" as const, label: "Browse" },
              {
                id: "favorites" as const,
                label: `Saved (★ ${favorites.length})`,
              },
            ]
          ).map((tab) => {
            const active = viewMode === tab.id;
            return (
              <Pressable
                key={tab.id}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => {
                  triggerHaptic(8);
                  setViewMode(tab.id);
                }}
                style={pressableStyle({
                  paddingHorizontal: 14,
                  paddingVertical: 7,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                })}
              >
                <Text
                  style={{
                    fontSize: 12.5,
                    fontFamily: active ? "Outfit_800ExtraBold" : "Outfit_700Bold",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={() => handleOpenContribute()}
          accessibilityRole="button"
          accessibilityLabel="Add word to local dictionary"
          style={pressableStyle({
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: `${theme.gold}50`,
            backgroundColor: `${theme.gold}14`,
          })}
        >
          <Ionicons name="add-circle-outline" size={14} color={theme.gold} />
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Outfit_700Bold",
              color: theme.gold,
            }}
          >
            + Word
          </Text>
        </Pressable>
      </View>

      {/* ────────────────── 1. TRANSLATE MODE (ABOVE THE FOLD - UX-9) ────────────────── */}
      {viewMode === "translate" && (
        <View style={styles.modeWrap}>
          {/* Language Pair Selector */}
          <View style={styles.langPairRow}>
            {/* Source (Tap to change source language) */}
            <Pressable
              onPress={() => {
                triggerHaptic(8);
                setShowSourcePicker((v) => !v);
                setShowTargetPicker(false);
              }}
              accessibilityRole="button"
              accessibilityLabel="Select source language"
              style={pressableStyle(styles.langPickerBox)}
            >
              <Text style={styles.langPickerLabel}>From (Tap to change)</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 2,
                }}
              >
                <Text
                  style={[
                    styles.langPickerValue,
                    { marginTop: 0, flexShrink: 1 },
                  ]}
                >
                  {sourceLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[sourceLanguage]?.languageName
                        ?.split("(")[0]
                        ?.trim() || "English"}
                </Text>
                <Ionicons
                  name={showSourcePicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>

            {/* Swap Button */}
            <Pressable
              onPress={swapLanguages}
              accessibilityRole="button"
              accessibilityLabel="Swap source and target languages"
              style={pressableStyle(styles.swapBtn)}
              hitSlop={10}
            >
              <Ionicons name="swap-horizontal" size={20} color={theme.gold} />
            </Pressable>

            {/* Target (Tap to switch target language) */}
            <Pressable
              onPress={() => {
                triggerHaptic(8);
                setShowTargetPicker((v) => !v);
                setShowSourcePicker(false);
              }}
              accessibilityRole="button"
              accessibilityLabel="Select target language"
              style={pressableStyle(styles.langPickerBox)}
            >
              <Text style={styles.langPickerLabel}>To (Tap to change)</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 2,
                }}
              >
                <Text
                  style={[
                    styles.langPickerValue,
                    { marginTop: 0, flexShrink: 1 },
                  ]}
                >
                  {targetLanguage === "all"
                    ? `All (${ALL_DICT_METAS.length})`
                    : targetLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[targetLanguage]?.languageName
                        ?.split("(")[0]
                        ?.trim() || "Swahili"}
                </Text>
                <Ionicons
                  name={showTargetPicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>
          </View>

          {/* Source Language Selection Pills */}
          {showSourcePicker && (
            <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
              <Pressable
                onPress={() => {
                  setSourceLanguage("english");
                  setShowSourcePicker(false);
                }}
                style={[
                  styles.langChip,
                  sourceLanguage === "english" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    sourceLanguage === "english" && {
                      color: theme.kenyaBlack,
                      fontFamily: "Outfit_800ExtraBold",
                    },
                  ]}
                >
                  English
                </Text>
              </Pressable>
              {ALL_DICT_METAS.map((d) => {
                const active = d.languageId === sourceLanguage;
                return (
                  <Pressable
                    key={d.languageId}
                    onPress={() => {
                      setSourceLanguage(d.languageId);
                      setShowSourcePicker(false);
                    }}
                    style={[
                      styles.langChip,
                      active && {
                        backgroundColor: theme.gold,
                        borderColor: theme.gold,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
                      ]}
                    >
                      {d.languageName.split("(")[0].trim()}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Target Language Selection Pills */}
          {showTargetPicker && (
            <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
              <Pressable
                onPress={() => {
                  setTargetLanguage("all");
                  setShowTargetPicker(false);
                }}
                style={[
                  styles.langChip,
                  targetLanguage === "all" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    targetLanguage === "all" && {
                      color: theme.kenyaBlack,
                      fontFamily: "Outfit_800ExtraBold",
                    },
                  ]}
                >
                  All ({ALL_DICT_METAS.length})
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setTargetLanguage("english");
                  setShowTargetPicker(false);
                }}
                style={[
                  styles.langChip,
                  targetLanguage === "english" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    targetLanguage === "english" && {
                      color: theme.kenyaBlack,
                      fontFamily: "Outfit_800ExtraBold",
                    },
                  ]}
                >
                  English
                </Text>
              </Pressable>
              {ALL_DICT_METAS.map((d) => {
                const active = d.languageId === targetLanguage;
                return (
                  <Pressable
                    key={d.languageId}
                    onPress={() => {
                      setTargetLanguage(d.languageId);
                      setShowTargetPicker(false);
                    }}
                    style={[
                      styles.langChip,
                      active && {
                        backgroundColor: theme.gold,
                        borderColor: theme.gold,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
                      ]}
                    >
                      {d.languageName.split("(")[0].trim()}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Search Input (Stable key across theme switches - UX-5) */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.gold} />
            <TextInput
              multiline={false}
              numberOfLines={1}
              accessibilityLabel="Search word or phrase to translate"
              placeholder={`Type a word in ${
                sourceLanguage === "english"
                  ? "English"
                  : DICT_META_MAP[sourceLanguage]?.languageName
                      ?.split("(")[0]
                      ?.trim()
              }...`}
              placeholderTextColor={theme.textMuted}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={() => {
                const trimmed = searchQuery.trim();
                if (trimmed.length >= 2) addRecentSearch(trimmed);
              }}
              style={styles.searchInput}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <Pressable
                onPress={() => setSearchQuery("")}
                accessibilityRole="button"
                accessibilityLabel="Clear search query"
                hitSlop={8}
              >
                <Ionicons
                  name="close-circle"
                  size={18}
                  color={theme.textMuted}
                />
              </Pressable>
            )}
          </View>

          {/* Recent Searches */}
          {recentSearches.length > 0 && searchQuery.length === 0 && (
            <View style={styles.recentsBox}>
              <Text style={styles.recentsTitle}>Recent searches:</Text>
              <View style={styles.recentsRow}>
                {recentSearches.map((term, idx) => (
                  <Pressable
                    key={idx}
                    onPress={() => setSearchQuery(term)}
                    style={pressableStyle(styles.recentChip)}
                  >
                    <Ionicons
                      name="time-outline"
                      size={12}
                      color={theme.textMuted}
                    />
                    <Text style={styles.recentChipText}>{term}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* Search Results List (Paginated) */}
          {searchQuery.trim().length > 0 && (
            <View style={styles.resultsWrap}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <Text style={styles.resultsCount}>
                  {isSearchingAll && filteredSearchResults.length === 0
                    ? `Searching across ${ALL_DICT_METAS.length} Kenyan languages...`
                    : `Showing ${visibleSearchResults.length} of ${filteredSearchResults.length} translation${
                        filteredSearchResults.length !== 1 ? "s" : ""
                      }${isSearchingAll ? " (scanning remaining dictionaries...)" : ""}`}
                </Text>
                {audioSearchCount > 0 && (
                  <Pressable
                    onPress={() => { triggerHaptic(6); setAudioOnly((v) => !v); setSearchPage(1); }}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 999,
                      borderWidth: 1,
                      borderColor: audioOnly ? "#38BDF8" : theme.border,
                      backgroundColor: audioOnly ? "rgba(56,189,248,0.18)" : theme.bgCard,
                    }}
                  >
                    <Ionicons name="volume-high-outline" size={13} color={audioOnly ? "#38BDF8" : theme.textSecondary} />
                    <Text style={{ fontSize: 11.5, fontWeight: "700", color: audioOnly ? "#38BDF8" : theme.textSecondary }}>
                      With Audio ({audioSearchCount})
                    </Text>
                  </Pressable>
                )}
              </View>

              {visibleSearchResults.map((item, idx) => (
                <TranslatorResultCard
                  key={`${item.languageId}|${item.entry.english}|${item.entry.translation}|${idx}`}
                  item={item}
                  isFav={favoritesSet.has(`${item.languageId}:${item.entry.english}`)}
                  isReverseToEnglish={sourceLanguage !== "english" && targetLanguage === "english"}
                  sourceDictName={sourceDict ? sourceDict.languageName.split("(")[0].trim() : undefined}
                  theme={theme}
                  styles={styles}
                  onPlayAudio={handlePlayAudio}
                  onShare={handleShareEntry}
                  onToggleFavorite={toggleFavorite}
                />
              ))}

              {filteredSearchResults.length > visibleSearchResults.length && (
                <Pressable
                  onPress={() => setSearchPage((p) => p + 1)}
                  style={pressableStyle(styles.loadMoreBtn)}
                >
                  <Text style={styles.loadMoreBtnText}>
                    Load More Results (
                    {filteredSearchResults.length - visibleSearchResults.length}{" "}
                    remaining)
                  </Text>
                </Pressable>
              )}

              {!isSearchingAll && searchResults.length === 0 && (
                <View style={styles.emptyCard}>
                  <Ionicons
                    name="search-outline"
                    size={32}
                    color={theme.textMuted}
                  />
                  <Text style={styles.emptyTitle}>
                    No exact match found for &ldquo;{searchQuery}&rdquo;
                  </Text>
                  {fuzzySuggestions.length > 0 && (
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 6,
                        marginVertical: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: theme.textSecondary,
                          alignSelf: "center",
                        }}
                      >
                        Did you mean:
                      </Text>
                      {fuzzySuggestions.map((sug) => (
                        <Pressable
                          key={sug}
                          onPress={() => setSearchQuery(sug)}
                          style={[
                            styles.popularWordChip,
                            { borderColor: theme.gold },
                          ]}
                        >
                          <Text
                            style={[
                              styles.popularWordText,
                              {
                                color: theme.gold,
                                fontFamily: "Outfit_700Bold",
                              },
                            ]}
                          >
                            {sug}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                  <Text style={styles.emptyDesc}>
                    Kenyan languages have rich oral dialects. Add this word to
                    your personal device dictionary!
                  </Text>
                  <Pressable
                    onPress={() => handleOpenContribute(searchQuery)}
                    style={pressableStyle(styles.contributeBtn)}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={18}
                      color="#1A1108"
                    />
                    <Text style={styles.contributeBtnText}>
                      Add &ldquo;{searchQuery}&rdquo;
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {searchQuery.trim().length === 0 && (
            <>
              <View style={styles.quickPromptBox}>
                <Text style={styles.quickPromptTitle}>
                  Popular words to compare across {ALL_DICT_METAS.length}{" "}
                  languages:
                </Text>
                <View style={styles.popularRow}>
                  {POPULAR_COMPARE_WORDS.slice(0, 8).map((word) => (
                    <Pressable
                      key={word}
                      onPress={() => {
                        triggerHaptic(6);
                        setSearchQuery(word);
                      }}
                      style={pressableStyle(styles.popularWordChip)}
                    >
                      <Text style={styles.popularWordText}>{word}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Random Word of the Day (Placed below search bar when idle - UX-9) */}
              {randomWord && (
                <View style={styles.randomCard}>
                  <View style={styles.randomHeaderRow}>
                    <View style={styles.randomTag}>
                      <Ionicons name="sparkles" size={12} color={theme.gold} />
                      <Text style={styles.randomTagText}>Word of the Day</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      {hasVerifiedAudio(randomWord.entry) ? (
                        <Pressable
                          onPress={() => {
                            triggerHaptic(8);
                            playVerifiedAudio(randomWord.entry);
                          }}
                          accessibilityRole="button"
                          accessibilityLabel="Play verified pronunciation recording"
                          hitSlop={8}
                        >
                          <Ionicons
                            name="volume-high-outline"
                            size={16}
                            color={theme.gold}
                          />
                        </Pressable>
                      ) : null}
                      <Pressable
                        onPress={() =>
                          handleShareEntry(
                            randomWord.langName,
                            randomWord.entry.english,
                            randomWord.entry.translation,
                            randomWord.entry.pronunciation
                          )
                        }
                        accessibilityRole="button"
                        accessibilityLabel="Share Word of the Day"
                        hitSlop={8}
                      >
                        <Ionicons
                          name="share-social-outline"
                          size={15}
                          color={theme.gold}
                        />
                      </Pressable>
                      <Pressable
                        onPress={rollRandomWord}
                        accessibilityRole="button"
                        accessibilityLabel="Roll another random Kenyan word"
                        style={pressableStyle(styles.rollBtn)}
                        hitSlop={8}
                      >
                        <Ionicons
                          name="dice-outline"
                          size={16}
                          color={theme.gold}
                        />
                        <Text style={styles.rollBtnText}>Roll Another</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.randomBody}>
                    <Text style={styles.randomTranslation}>
                      {randomWord.entry.translation}
                    </Text>
                    <Text style={styles.randomEnglish}>
                      {randomWord.entry.english}
                    </Text>
                    {randomWord.entry.pronunciation ? (
                      <Text style={styles.randomPronounce}>
                        /{randomWord.entry.pronunciation}/
                      </Text>
                    ) : null}
                    <View style={styles.randomMetaRow}>
                      <View
                        style={[
                          styles.familyPill,
                          {
                            backgroundColor: `${
                              FAMILY_COLORS[
                                DICT_META_MAP[
                                  randomWord.langId
                                ]?.family?.toLowerCase() || "other"
                              ]
                            }20`,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.familyPillText,
                            {
                              color:
                                FAMILY_COLORS[
                                  DICT_META_MAP[
                                    randomWord.langId
                                  ]?.family?.toLowerCase() || "other"
                                ],
                            },
                          ]}
                        >
                          {randomWord.langName} •{" "}
                          {DICT_META_MAP[
                            randomWord.langId
                          ]?.family?.toUpperCase()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {/* Compact Corpus Stats Footer */}
              <View style={styles.statsBar}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>
                    {totalEntriesCount.toLocaleString("en-KE")}+
                  </Text>
                  <Text style={styles.statCaption}>Verified Phrases</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{ALL_DICT_METAS.length}</Text>
                  <Text style={styles.statCaption}>Kenyan Languages</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>Any ↔ Any</Text>
                  <Text style={styles.statCaption}>English Bridge</Text>
                </View>
              </View>
            </>
          )}
        </View>
      )}

      {/* ────────────────── 2. BROWSE BY CATEGORY ────────────────── */}
      {viewMode === "browse" && (
        <View style={styles.modeWrap}>
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {ALL_DICT_METAS.map((d) => {
              const active = d.languageId === browseMeta.languageId;
              return (
                <Pressable
                  key={d.languageId}
                  onPress={() => {
                    triggerHaptic(6);
                    setTargetLanguage(d.languageId);
                  }}
                  style={pressableStyle([
                    styles.langChip,
                    active && {
                      backgroundColor: theme.gold,
                      borderColor: theme.gold,
                    },
                  ])}
                >
                  <Text
                    style={[
                      styles.langChipText,
                      active && {
                        color: theme.kenyaBlack,
                        fontFamily: "Outfit_800ExtraBold",
                      },
                    ]}
                  >
                    {d.languageName.split("(")[0].trim()}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {browseAudioEntries.length > 0 && (
              <Pressable
                key="__audio__"
                onPress={() => {
                  triggerHaptic(6);
                  setActiveCategory("__audio__");
                  setCategoryPage(1);
                  onScrollToTop?.();
                }}
                style={pressableStyle([
                  styles.catPill,
                  {
                    borderColor: activeCategory === "__audio__" ? "#38BDF8" : "rgba(56,189,248,0.45)",
                    backgroundColor: activeCategory === "__audio__" ? "rgba(56,189,248,0.22)" : "rgba(56,189,248,0.10)",
                  },
                ])}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                  <Ionicons name="volume-high-outline" size={13} color="#38BDF8" />
                  <Text style={[styles.catPillText, { color: "#38BDF8", fontWeight: "700" }]}>
                    With Audio ({browseAudioEntries.length.toLocaleString("en-KE")})
                  </Text>
                </View>
              </Pressable>
            )}
            {(browseDict?.categories || browseMeta.categories).map((c: any) => {
              const active = c.id === activeCategory;
              return (
                <Pressable
                  key={c.id}
                  onPress={() => {
                    triggerHaptic(6);
                    setActiveCategory(c.id);
                    onScrollToTop?.();
                  }}
                  style={pressableStyle([
                    styles.catPill,
                    active && {
                      backgroundColor: theme.gold,
                      borderColor: theme.gold,
                    },
                  ])}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <DynamicIcon
                      emoji={c.icon}
                      size={13}
                      color={active ? theme.kenyaBlack : theme.gold}
                    />
                    <Text
                      style={[
                        styles.catPillText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
                      ]}
                    >
                      {c.name} ({c.entries ? c.entries.length : c.count})
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.textMuted} />
            <TextInput
              multiline={false}
              numberOfLines={1}
              placeholder={`Filter in ${browseMeta.languageName
                .split("(")[0]
                .trim()} category...`}
              placeholderTextColor={theme.textMuted}
              value={categoryFilter}
              onChangeText={(text) => {
                setCategoryFilter(text);
                setCategoryPage(1);
              }}
              style={styles.searchInput}
            />
            {categoryFilter.length > 0 && (
              <Pressable
                onPress={() => {
                  setCategoryFilter("");
                  setCategoryPage(1);
                }}
                hitSlop={8}
              >
                <Ionicons
                  name="close-circle"
                  size={18}
                  color={theme.textMuted}
                />
              </Pressable>
            )}
          </View>

          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Showing {visibleCategoryEntries.length} of{" "}
              {categoryEntries.length} phrases in{" "}
              {browseMeta.languageName.split("(")[0].trim()}
            </Text>

            {visibleCategoryEntries.map((e, idx) => (
              <BrowseEntryCard
                key={`${browseMeta.languageId}|${e.english}|${e.translation}|${idx}`}
                entry={e}
                langId={browseMeta.languageId}
                cleanLang={browseMeta.languageName.split("(")[0].trim()}
                isFav={favoritesSet.has(`${browseMeta.languageId}:${e.english}`)}
                theme={theme}
                styles={styles}
                onPlayAudio={handlePlayAudio}
                onShare={handleShareEntry}
                onToggleFavorite={toggleFavorite}
              />
            ))}

            {categoryEntries.length > visibleCategoryEntries.length && (
              <Pressable
                onPress={() => setCategoryPage((p) => p + 1)}
                style={pressableStyle(styles.loadMoreBtn)}
              >
                <Text style={styles.loadMoreBtnText}>
                  Load More Entries (
                  {categoryEntries.length - visibleCategoryEntries.length}{" "}
                  remaining)
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      {/* ────────────────── 3. SAVED FAVORITES ────────────────── */}
      {viewMode === "favorites" && (
        <View style={styles.modeWrap}>
          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Saved Favorites ({favorites.length})
            </Text>
            {favorites.length === 0 ? (
              <View style={styles.emptyCard}>
                <Ionicons
                  name="star-outline"
                  size={32}
                  color={theme.textMuted}
                />
                <Text style={styles.emptyTitle}>No Saved Favorites Yet</Text>
                <Text style={styles.emptyDesc}>
                  Tap the star icon on any translation card to save words for
                  quick offline reference.
                </Text>
              </View>
            ) : (
              favoriteItems.map((item) => {
                const cleanLang = item.languageName.split("(")[0].trim();
                return (
                  <View key={item.favKey} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <View style={styles.resultTagRow}>
                        <View style={styles.catBadge}>
                          <Text style={styles.catBadgeText}>
                            {item.categoryName}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.familyBadge,
                            {
                              backgroundColor: `${
                                FAMILY_COLORS[item.family?.toLowerCase()] ||
                                "#999"
                              }20`,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.familyBadgeText,
                              {
                                color:
                                  FAMILY_COLORS[item.family?.toLowerCase()] ||
                                  theme.gold,
                              },
                            ]}
                          >
                            {cleanLang}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        {hasVerifiedAudio(item.entry) ? (
                          <Pressable
                            onPress={() => {
                              triggerHaptic(8);
                              playVerifiedAudio(item.entry);
                            }}
                            accessibilityRole="button"
                            accessibilityLabel={`Play verified ${cleanLang} recording`}
                            hitSlop={8}
                          >
                            <Ionicons
                              name="volume-high-outline"
                              size={19}
                              color={theme.gold}
                            />
                          </Pressable>
                        ) : null}
                        <Pressable
                          onPress={() =>
                            handleShareEntry(
                              cleanLang,
                              item.entry.english,
                              item.entry.translation,
                              item.entry.pronunciation,
                              item.entry.context
                            )
                          }
                          hitSlop={8}
                        >
                          <Ionicons
                            name="share-social-outline"
                            size={18}
                            color={theme.textSecondary}
                          />
                        </Pressable>
                        <Pressable
                          onPress={() => toggleFavorite(item.favKey)}
                          hitSlop={8}
                        >
                          <Ionicons name="star" size={20} color={theme.gold} />
                        </Pressable>
                      </View>
                    </View>
                    <Text style={styles.resultTranslation}>
                      {item.entry.translation}
                    </Text>
                    <Text style={styles.resultEnglish}>
                      {item.entry.english}
                    </Text>
                    {item.entry.pronunciation ? (
                      <Text style={styles.pronounceText}>
                        Pronunciation: /{item.entry.pronunciation}/
                      </Text>
                    ) : null}
                  </View>
                );
              })
            )}

            {userContributions.length > 0 && (
              <View style={{ marginTop: 14, gap: 10 }}>
                <Text style={styles.resultsCount}>
                  My Added Device Words ({userContributions.length})
                </Text>
                {userContributions.map((uItem) => (
                  <View key={uItem.id} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <View style={styles.resultTagRow}>
                        <View style={styles.catBadge}>
                          <Text style={styles.catBadgeText}>
                            {uItem.cloudSynced ? "Submitted for Review" : "Saved Offline"}
                          </Text>
                        </View>
                        <View style={[styles.familyBadge, { backgroundColor: `${theme.gold}20` }]}>
                          <Text style={[styles.familyBadgeText, { color: theme.gold }]}>
                            {uItem.language}
                          </Text>
                        </View>
                      </View>
                      <Pressable
                        onPress={async () => {
                          const next = userContributions.filter((x) => x.id !== uItem.id);
                          setUserContributions(next);
                          await AsyncStorage.setItem("kh-user-contributions", JSON.stringify(next));
                          showToast("Removed from device dictionary");
                        }}
                        hitSlop={8}
                      >
                        <Ionicons name="trash-outline" size={18} color={theme.kenyaRedLight} />
                      </Pressable>
                    </View>
                    <Text style={styles.resultTranslation}>{uItem.translation}</Text>
                    <Text style={styles.resultEnglish}>{uItem.english}</Text>
                    {uItem.pronunciation ? (
                      <Text style={styles.pronounceText}>
                        Pronunciation: /{uItem.pronunciation}/
                      </Text>
                    ) : null}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      )}

      {/* ────────────────── CONTRIBUTE MODAL (APPWRITE CLOUD + ANY KENYAN LANGUAGE + AUDIO) ────────────────── */}
      <Modal
        visible={isContributeOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsContributeOpen(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Ionicons name="add-circle" size={24} color={theme.gold} />
                <Text style={styles.modalTitle}>Contribute a Word</Text>
              </View>
              <Pressable
                onPress={() => setIsContributeOpen(false)}
                accessibilityRole="button"
                accessibilityLabel="Close modal"
                hitSlop={10}
              >
                <Ionicons name="close" size={22} color={theme.textPrimary} />
              </Pressable>
            </View>

            {contribSubmitted ? (
              <View style={styles.successBox}>
                <Ionicons
                  name="checkmark-circle"
                  size={48}
                  color={theme.kenyaGreen}
                />
                <Text style={styles.successTitle}>Asante Sana!</Text>
                <Text style={styles.successDesc}>
                  {contribLastCloudSynced
                    ? `Submitted for admin review! A copy is also saved on your device (${userContributionsCount} total).`
                    : `Saved offline — will sync when online (${userContributionsCount} ${
                        userContributionsCount === 1 ? "entry" : "entries"
                      } stored on device).`}
                </Text>
              </View>
            ) : (
              <ScrollView
                style={{ maxHeight: 470 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                <Text style={styles.modalSub}>
                  Contribute words or phrases in any Kenyan language for admin
                  review and dictionary inclusion. A local receipt is also saved
                  on your device.
                </Text>

                <Text style={styles.inputLabel}>Kenyan Language *</Text>
                <Pressable
                  onPress={() => {
                    triggerHaptic(6);
                    setShowContribLangPicker((v) => !v);
                  }}
                  style={[
                    styles.modalInput,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: theme.textPrimary,
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                  >
                    {contribLang === OTHER_KENYAN_LANGUAGE_VALUE
                      ? "Other Kenyan Language (Specify)"
                      : contribLang}
                  </Text>
                  <Ionicons
                    name={showContribLangPicker ? "chevron-up" : "chevron-down"}
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>

                {showContribLangPicker && (
                  <View
                    style={{
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 10,
                      marginTop: 6,
                      gap: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: theme.gold,
                        fontSize: 11,
                        fontWeight: "700",
                        textTransform: "uppercase",
                      }}
                    >
                      23 KenyaHub Languages
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {ALL_DICT_METAS.map((meta) => {
                        const cleanName = meta.languageName.split("(")[0].trim();
                        const active = contribLang === cleanName;
                        return (
                          <Pressable
                            key={meta.languageId}
                            onPress={() => {
                              triggerHaptic(6);
                              setContribLang(cleanName);
                              setShowContribLangPicker(false);
                            }}
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 5,
                              borderRadius: 14,
                              backgroundColor: active
                                ? theme.gold
                                : theme.bgCard,
                              borderWidth: 1,
                              borderColor: active ? theme.gold : theme.border,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: active ? "#1A1108" : theme.textPrimary,
                              }}
                            >
                              {cleanName}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>

                    <Text
                      style={{
                        color: theme.sky,
                        fontSize: 11,
                        fontWeight: "700",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      Emerging / Unlisted Kenyan Languages
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {EMERGING_KENYAN_LANGUAGES.map((langName) => {
                        const active = contribLang === langName;
                        return (
                          <Pressable
                            key={langName}
                            onPress={() => {
                              triggerHaptic(6);
                              setContribLang(langName);
                              setShowContribLangPicker(false);
                            }}
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 5,
                              borderRadius: 14,
                              backgroundColor: active
                                ? theme.gold
                                : theme.bgCard,
                              borderWidth: 1,
                              borderColor: active ? theme.gold : theme.border,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: active ? "#1A1108" : theme.textPrimary,
                              }}
                            >
                              {langName}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>

                    <Pressable
                      onPress={() => {
                        triggerHaptic(6);
                        setContribLang(OTHER_KENYAN_LANGUAGE_VALUE);
                        setShowContribLangPicker(false);
                      }}
                      style={{
                        marginTop: 4,
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        borderRadius: 8,
                        backgroundColor:
                          contribLang === OTHER_KENYAN_LANGUAGE_VALUE
                            ? `${theme.gold}25`
                            : theme.bgCard,
                        borderWidth: 1,
                        borderColor:
                          contribLang === OTHER_KENYAN_LANGUAGE_VALUE
                            ? theme.gold
                            : theme.border,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Ionicons
                        name="create-outline"
                        size={15}
                        color={theme.gold}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: theme.gold,
                        }}
                      >
                        Other Kenyan Language (Specify)
                      </Text>
                    </Pressable>
                  </View>
                )}

                {contribLang === OTHER_KENYAN_LANGUAGE_VALUE && (
                  <View style={{ marginTop: 6 }}>
                    <Text style={styles.inputLabel}>
                      Specify Kenyan Language *
                    </Text>
                    <View
                      style={{ position: "relative", justifyContent: "center" }}
                    >
                      <TextInput
                        multiline={false}
                        numberOfLines={1}
                        value={contribCustomLang}
                        onChangeText={setContribCustomLang}
                        placeholder="e.g. Suba-Suna, Chonyi, Boni, Sakuye..."
                        placeholderTextColor={theme.textMuted}
                        style={[styles.modalInput, { paddingRight: 36 }]}
                      />
                      {contribCustomLang.length > 0 && (
                        <Pressable
                          onPress={() => setContribCustomLang("")}
                          hitSlop={8}
                          style={{ position: "absolute", right: 10 }}
                        >
                          <Ionicons
                            name="close-circle"
                            size={18}
                            color={theme.textMuted}
                          />
                        </Pressable>
                      )}
                    </View>
                  </View>
                )}

                <Text style={styles.inputLabel}>English Phrase / Term *</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribEnglish}
                    onChangeText={setContribEnglish}
                    placeholder="e.g. Good morning"
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribEnglish.length > 0 && (
                    <Pressable
                      onPress={() => setContribEnglish("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>Native Translation *</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribTranslation}
                    onChangeText={setContribTranslation}
                    placeholder="Native word or phrase..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribTranslation.length > 0 && (
                    <Pressable
                      onPress={() => setContribTranslation("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>
                  Pronunciation (approximate)
                </Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribPronounce}
                    onChangeText={setContribPronounce}
                    placeholder="Phonetic sounding guide..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribPronounce.length > 0 && (
                    <Pressable
                      onPress={() => setContribPronounce("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                {/* Optional Pronunciation Audio */}
                <Text style={styles.inputLabel}>
                  Optional Pronunciation Audio
                </Text>
                <View
                  style={{
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    gap: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        triggerHaptic(8);
                        setShowAudioRecorder((v) => !v);
                        setContribAudioError(null);
                      }}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                        backgroundColor: `${theme.gold}22`,
                        borderColor: `${theme.gold}55`,
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                      }}
                    >
                      <Ionicons
                        name={showAudioRecorder ? "mic-off-outline" : "mic-outline"}
                        size={15}
                        color={theme.gold}
                      />
                      <Text
                        style={{
                          color: theme.gold,
                          fontSize: 12,
                          fontWeight: "700",
                        }}
                      >
                        {showAudioRecorder ? "Hide Recorder" : "Record Audio"}
                      </Text>
                    </Pressable>

                    {(contribAudioBase64 || contribAudioUrl.trim().length > 0) && (
                      <Pressable
                        onPress={() => {
                          setContribAudioBase64(null);
                          setContribAudioFilename("");
                          setContribAudioUrl("");
                          setShowAudioRecorder(false);
                        }}
                        hitSlop={8}
                      >
                        <Text
                          style={{
                            color: theme.kenyaRedLight,
                            fontSize: 11,
                            fontWeight: "700",
                          }}
                        >
                          Remove Audio
                        </Text>
                      </Pressable>
                    )}
                  </View>

                  {showAudioRecorder && (
                    <View
                      style={{
                        height: 126,
                        borderRadius: 8,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: theme.border,
                      }}
                    >
                      <WebView
                        originWhitelist={["*"]}
                        javaScriptEnabled={true}
                        mediaPlaybackRequiresUserAction={false}
                        allowsInlineMediaPlayback={true}
                        onMessage={handleRecorderMessage}
                        source={{
                          html: buildAudioRecorderHtml(
                            theme.bgElevated,
                            theme.bgCard,
                            theme.textPrimary,
                            theme.gold
                          ),
                        }}
                        style={{ flex: 1, backgroundColor: theme.bgElevated }}
                      />
                    </View>
                  )}

                  {contribAudioError ? (
                    <Text
                      style={{
                        color: theme.kenyaRedLight,
                        fontSize: 11,
                      }}
                    >
                      {contribAudioError}
                    </Text>
                  ) : null}

                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    autoCapitalize="none"
                    keyboardType="url"
                    value={contribAudioUrl}
                    onChangeText={setContribAudioUrl}
                    placeholder="Or paste an optional audio URL (https://...)"
                    placeholderTextColor={theme.textMuted}
                    style={[
                      styles.modalInput,
                      { backgroundColor: theme.bgCard, fontSize: 12 },
                    ]}
                  />

                  {(contribAudioBase64 || contribAudioUrl.trim().length > 0) && (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                        backgroundColor: `${theme.kenyaGreen}22`,
                        borderColor: `${theme.kenyaGreen}55`,
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 8,
                        paddingVertical: 6,
                      }}
                    >
                      <Ionicons
                        name="checkmark-circle"
                        size={15}
                        color={theme.kenyaGreenLight}
                      />
                      <Text
                        style={{
                          color: theme.kenyaGreenLight,
                          fontSize: 11,
                          fontWeight: "600",
                          flex: 1,
                        }}
                      >
                        Audio attached (will be pushed to Cloudflare R2 upon
                        admin approval)
                      </Text>
                    </View>
                  )}
                </View>

                <Text style={styles.inputLabel}>
                  Dialect / Cultural Context
                </Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribContext}
                    onChangeText={setContribContext}
                    placeholder="e.g. Used in Nyeri dialect, spoken by elders..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribContext.length > 0 && (
                    <Pressable
                      onPress={() => setContribContext("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>Your Name (optional)</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribName}
                    onChangeText={setContribName}
                    placeholder="Your Name"
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribName.length > 0 && (
                    <Pressable
                      onPress={() => setContribName("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>Your Email (optional)</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={contribEmail}
                    onChangeText={setContribEmail}
                    placeholder="you@example.com"
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmitContribute}
                  />
                  {contribEmail.length > 0 && (
                    <Pressable
                      onPress={() => setContribEmail("")}
                      hitSlop={8}
                      style={{ position: "absolute", right: 10 }}
                    >
                      <Ionicons
                        name="close-circle"
                        size={18}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  )}
                </View>

                <Pressable
                  disabled={
                    contribSubmitting ||
                    !contribEnglish.trim() ||
                    !contribTranslation.trim() ||
                    (contribLang === OTHER_KENYAN_LANGUAGE_VALUE &&
                      !contribCustomLang.trim())
                  }
                  onPress={handleSubmitContribute}
                  style={[
                    pressableStyle(styles.submitBtn),
                    {
                      opacity:
                        contribSubmitting ||
                        !contribEnglish.trim() ||
                        !contribTranslation.trim() ||
                        (contribLang === OTHER_KENYAN_LANGUAGE_VALUE &&
                          !contribCustomLang.trim())
                          ? 0.55
                          : 1,
                    },
                  ]}
                >
                  <Text style={styles.submitBtnText}>
                    {contribSubmitting
                      ? "Submitting..."
                      : "Submit Contribution"}
                  </Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
