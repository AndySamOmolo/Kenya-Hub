import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { DynamicIcon } from "../components/DynamicIcon";
import React, { useState, useEffect, useMemo, useCallback, useRef, useDeferredValue } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
  Modal,
  BackHandler,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import {
  playVerifiedAudio,
  hasVerifiedAudio,
  pauseVerifiedAudio,
  resumeVerifiedAudio,
  seekVerifiedAudio,
  skipVerifiedAudio,
  setVerifiedAudioRate,
  subscribeMobileAudioState,
  getMobileAudioState,
  type MobileAudioState,
} from '../lib/mobile-audio';
import { useTheme, androidRipple, KenyaStripe } from '../theme';
import { PUBLISHED_COURSE_SUMMARIES, hasCourseSummary, getCourseLazy, getGrammarSectionsLazy, getPlaceholderCourse, getCanonicalCourseCounts, buildDictUnit } from './language-course/courseLoader';
import { getLanguageIdentity } from '../shared/data/language-identity';
import type { Dictionary } from '../shared/data/language-sources';

let _languageSourcesMod: typeof import('../shared/data/language-sources') | null = null;
function getLanguageSourcesMod() {
  if (!_languageSourcesMod) {
    _languageSourcesMod = require('../shared/data/language-sources');
  }
  return _languageSourcesMod!;
}
import { loadDictionary, LOADED_DICTS_CACHE } from './translator/loader';
import kikuyuProverbsData from '../shared/data/kikuyu-proverbs.json';
let _openCorpusIndexCache: any = null;
function getOpenCorpusIndexData(): any {
  if (!_openCorpusIndexCache) {
    _openCorpusIndexCache = require('../shared/data/open-corpus-index.json');
  }
  return _openCorpusIndexCache;
}
import { loadMobileAudioShard, type MobileAudioShardClip } from '../lib/mobile-learning-shards';
import dholuoChaptersData from '../shared/data/dholuo-audio-chapters.json';

let _kslIndexCache: any = null;
function getKslIndexData(): any {
  if (!_kslIndexCache) {
    _kslIndexCache = require('../shared/data/ksl-index.json');
  }
  return _kslIndexCache;
}

let _learningReadersCache: Record<string, any> | null = null;
function getLearningReadersData(): Record<string, any> {
  if (!_learningReadersCache) {
    _learningReadersCache = require('../shared/data/learning-readers.json');
  }
  return _learningReadersCache!;
}

let _learningQuizzesCache: Record<string, any> | null = null;
function getLearningQuizzesData(): Record<string, any> {
  if (!_learningQuizzesCache) {
    _learningQuizzesCache = require('../shared/data/learning-quizzes.json');
  }
  return _learningQuizzesCache!;
}

const KSL_PLAYER_STATIC_HTML = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><style>html,body{margin:0;padding:0;background:#000;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}video{width:100%;height:100%;object-fit:contain;background:#000}</style></head><body><video id="v" controls playsinline loop preload="auto"></video></body></html>`;
const KSL_QUIZ_STATIC_HTML = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><style>html,body{margin:0;padding:0;background:#000;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}video{width:100%;height:100%;object-fit:contain;background:#000}</style></head><body><video id="v" controls autoplay muted playsinline loop preload="auto"></video></body></html>`;

function ensureFullDurationKslUrl(v?: { category?: string; videoUrl?: string } | null): string {
  const url = String(v?.videoUrl || "");
  if (v?.category === "human-sign-bible" && url && !url.includes("?v=")) {
    return `${url}?v=2`;
  }
  return url;
}

const KslVideoWebView = React.memo(function KslVideoWebView({
  videoUrl,
  playbackRate = 1,
  autoPlay = false,
  muted = false,
  domStorageEnabled = false,
}: {
  videoUrl: string;
  playbackRate?: number;
  autoPlay?: boolean;
  muted?: boolean;
  domStorageEnabled?: boolean;
}) {
  const webViewRef = useRef<any>(null);
  const loadedRef = useRef(false);
  const lastUrlRef = useRef<string>('');
  const source = useMemo(
    () => ({
      html: muted ? KSL_QUIZ_STATIC_HTML : KSL_PLAYER_STATIC_HTML,
      baseUrl: 'https://audio.kenyahub.me',
    }),
    [muted]
  );

  const applyVideoState = useCallback(
    (forceLoad: boolean) => {
      const safeUrl = videoUrl.replace(/["'<>\\]/g, '');
      if (!safeUrl || !webViewRef.current) return;
      const urlChanged = forceLoad || lastUrlRef.current !== safeUrl;
      lastUrlRef.current = safeUrl;
      const js = urlChanged
        ? `(function(){var v=document.getElementById('v');if(!v)return;v.src=${JSON.stringify(safeUrl)};v.playbackRate=${playbackRate};v.load();${autoPlay || muted ? 'var pr=v.play();if(pr&&pr.catch){pr.catch(function(){});}' : ''}})();true;`
        : `(function(){var v=document.getElementById('v');if(!v)return;v.playbackRate=${playbackRate};})();true;`;
      try {
        webViewRef.current.injectJavaScript(js);
      } catch {}
    },
    [videoUrl, playbackRate, autoPlay, muted]
  );

  useEffect(() => {
    if (loadedRef.current) {
      applyVideoState(false);
    }
  }, [applyVideoState]);

  const handleLoadEnd = useCallback(() => {
    loadedRef.current = true;
    applyVideoState(true);
  }, [applyVideoState]);

  return (
    <WebView
      ref={webViewRef}
      source={source}
      onLoadEnd={handleLoadEnd}
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled
      domStorageEnabled={domStorageEnabled}
      originWhitelist={['https://*', 'about:blank']}
      style={{ flex: 1, backgroundColor: '#000000' }}
    />
  );
});

const ChapterAudioPlayerBar = React.memo(function ChapterAudioPlayerBar({
  audioUrl,
  title,
  colors,
}: {
  audioUrl: string;
  title: string;
  colors: any;
}) {
  const [audioState, setAudioState] = useState<MobileAudioState>(() => getMobileAudioState());
  const [chapterBarWidth, setChapterBarWidth] = useState<number>(240);

  useEffect(() => {
    setAudioState(getMobileAudioState());
    return subscribeMobileAudioState(setAudioState);
  }, []);

  const fmtTime = (sec: number) => {
    if (!Number.isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const ss = Math.floor(sec % 60);
    return `${m}:${ss < 10 ? '0' : ''}${ss}`;
  };

  const isChActiveUrl = Boolean(audioUrl && audioState.url === audioUrl);
  const chPlaying = isChActiveUrl && audioState.playing;
  const chLoading = isChActiveUrl && audioState.loading;
  const chCur = isChActiveUrl ? audioState.currentTime : 0;
  const chDur = isChActiveUrl ? audioState.duration : 0;
  const chPct = chDur > 0 ? Math.min(1, Math.max(0, chCur / chDur)) : 0;
  const chRate = audioState.rate || 1;

  return (
    <View style={{ backgroundColor: colors.surfaceContainerLow, borderRadius: 12, borderWidth: 1, borderColor: colors.outlineVariant, padding: 10, gap: 10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Pressable
            onPress={() => {
              if (chPlaying) {
                pauseVerifiedAudio();
              } else if (isChActiveUrl && chCur > 0) {
                resumeVerifiedAudio();
              } else {
                const ok = playVerifiedAudio({ translation: title, audioFile: audioUrl }, chRate);
                if (!ok) Linking.openURL(audioUrl).catch(() => {});
              }
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.gold,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name={chPlaying ? 'pause' : 'play'} size={18} color="#FFFFFF" />
          </Pressable>
          <Pressable
            onPress={() => isChActiveUrl && skipVerifiedAudio(-10)}
            style={{ paddingHorizontal: 9, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: colors.outlineVariant, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center', gap: 3, opacity: isChActiveUrl ? 1 : 0.5 }}
          >
            <Feather name="rotate-ccw" size={12} color={colors.textSecondary} />
            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.textSecondary }}>10s</Text>
          </Pressable>
          <Pressable
            onPress={() => isChActiveUrl && skipVerifiedAudio(10)}
            style={{ paddingHorizontal: 9, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: colors.outlineVariant, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center', gap: 3, opacity: isChActiveUrl ? 1 : 0.5 }}
          >
            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.textSecondary }}>10s</Text>
            <Feather name="rotate-cw" size={12} color={colors.textSecondary} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          {[0.75, 1, 1.25].map((r) => {
            const act = Math.abs(chRate - r) < 0.05;
            return (
              <Pressable
                key={r}
                onPress={() => setVerifiedAudioRate(r)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: act ? colors.gold : colors.outlineVariant,
                  backgroundColor: act ? `${colors.gold}20` : colors.surface,
                }}
              >
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: act ? colors.gold : colors.textMuted }}>
                  {r}x
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Interactive Tappable Progress Bar + Time Readout */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.textMuted, minWidth: 34 }}>
          {fmtTime(chCur)}
        </Text>
        <Pressable
          onLayout={(e) => setChapterBarWidth(Math.max(1, e.nativeEvent.layout.width))}
          onPress={(e) => {
            if (!isChActiveUrl || chDur <= 0) return;
            const ratio = Math.max(0, Math.min(1, e.nativeEvent.locationX / chapterBarWidth));
            seekVerifiedAudio(ratio * chDur);
          }}
          style={{ flex: 1, paddingVertical: 8, justifyContent: 'center' }}
        >
          <View style={{ height: 6, borderRadius: 999, backgroundColor: colors.outlineVariant, overflow: 'hidden' }}>
            <View style={{ height: '100%', width: `${Math.round(chPct * 100)}%`, backgroundColor: colors.gold, borderRadius: 999 }} />
          </View>
        </Pressable>
        <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.textMuted, minWidth: 34, textAlign: 'right' }}>
          {chLoading ? '…' : fmtTime(chDur)}
        </Text>
      </View>
    </View>
  );
});

const AudioClipList = React.memo(function AudioClipList({
  clips,
  slowMode,
  showEn,
  colors,
}: {
  clips: MobileAudioShardClip[];
  slowMode: boolean;
  showEn: boolean;
  colors: any;
}) {
  const [activeClip, setActiveClip] = useState<{ url: string | null; playing: boolean }>(() => {
    const s = getMobileAudioState();
    return { url: s.url, playing: s.playing };
  });

  useEffect(() => {
    const sync = (s: MobileAudioState) => {
      setActiveClip((prev) =>
        prev.url === s.url && prev.playing === s.playing
          ? prev
          : { url: s.url, playing: s.playing }
      );
    };
    sync(getMobileAudioState());
    return subscribeMobileAudioState(sync);
  }, []);

  return (
    <View style={{ gap: 8 }}>
      {clips.map((clip) => {
        const isPlayingClip = activeClip.url === clip.audioUrl && activeClip.playing;
        const fullText = clip.transcript || clip.label;
        return (
          <Pressable
            key={clip.slug}
            onPress={() => {
              if (isPlayingClip) {
                pauseVerifiedAudio();
              } else {
                playVerifiedAudio({ translation: fullText, audioFile: clip.audioUrl }, slowMode ? 0.75 : 1.0);
              }
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 10,
              paddingHorizontal: 12,
              paddingVertical: 11,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: isPlayingClip ? colors.kenyaGreen : colors.outlineVariant,
              backgroundColor: isPlayingClip ? `${colors.kenyaGreen}14` : colors.surface,
            }}
          >
            <View style={{ flex: 1, gap: 3 }}>
              <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 13, color: isPlayingClip ? colors.kenyaGreen : colors.text, lineHeight: 19 }}>
                {fullText}
              </Text>
              {showEn && Boolean(clip.english) && (
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>
                  {clip.english}
                </Text>
              )}
            </View>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isPlayingClip ? colors.kenyaGreen : colors.surfaceContainer,
                borderWidth: 1,
                borderColor: isPlayingClip ? colors.kenyaGreen : colors.outlineVariant,
                marginTop: 1,
              }}
            >
              <Feather name={isPlayingClip ? 'pause' : 'volume-2'} size={15} color={isPlayingClip ? '#FFFFFF' : colors.kenyaGreen} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
});
import { KSL_ALPHABET } from '../shared/data/ksl-starter';
import { luoProverbs } from '../shared/data/courses/luo/proverbs';
import { luoRiddles } from '../shared/data/courses/luo/riddles';
import { luoTongueTwisters } from '../shared/data/courses/luo/tongue-twisters';
import {
  getCulturalWisdomForLanguageLazy,
  getProverbsForLanguageLazy,
} from './language-course/proverbsLoader';
import type { CulturalWisdomItem } from '../shared/data/courses/proverbs/types';
import { getRiddlesForLanguage } from '../shared/data/courses/riddles-bank';
import { generateExercises, checkAnswer, checkAnswerWithFeedback, getLevelProfile, getTeachingDeckForLevel, getPrimaryForm, cleanExerciseText, isCleanLexicalWordPair, isSingleWordLexical, KENYAN_SPECIAL_CHARS } from '../shared/lib/learn-engine';
import {
  isSkillUnlocked,
  getXpLevel,
  minutesToNextHeart,
} from '../shared/lib/learn-progress';
import {
  LEVELS,
  ACHIEVEMENTS,
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  type CourseSkill,
  type CourseUnit,
  type Exercise,
  type GrammarSection,
  type WordPair,
} from '../shared/data/courses/types';

import {
  type Word,
  type SkillProgress,
  type LanguageProgress,
  type MainTab,
  type LessonStage,
  type ActiveGame,
  isExtraGame,
  STORAGE_KEY_V2,
  STORAGE_KEY_V1,
  HEART_REFILL_MS,
  createDefaultLanguageProgress,
  getLocalDateString,
  renderFormattedText,
  cleanQuizGloss,
  isValidQuizPair,
  pickBalancedDistractors,
} from "./language-course/types";
import { createStyles } from "./language-course/styles";
import ExtraMiniGames from "./language-course/ExtraMiniGames";

let _allKikuyuProverbsCache: any[] | null = null;
function getAllKikuyuProverbs(): any[] {
  if (!_allKikuyuProverbsCache) {
    _allKikuyuProverbsCache = [
      ...(Array.isArray(kikuyuProverbsData) ? (kikuyuProverbsData as any[]) : []),
      ...getProverbsForLanguageLazy("kikuyu").map((item, idx) => ({
        id: 1001 + idx,
        kikuyu: item.indigenous,
        translation: item.literalTranslation,
        explanation: item.meaning,
        englishEquivalent: item.englishEquivalent || null,
        category: item.theme || "wisdom",
      })),
    ];
  }
  return _allKikuyuProverbsCache;
}

let _allLuoProverbsCache: any[] | null = null;
function getAllLuoProverbs(): any[] {
  if (!_allLuoProverbsCache) {
    _allLuoProverbsCache = [
      ...luoProverbs,
      ...getProverbsForLanguageLazy("luo").map((item, idx) => ({
        id: 10000 + idx + 1,
        luo: item.indigenous,
        english: item.literalTranslation,
        meaning: item.meaning,
        explanation: item.englishEquivalent || item.meaning,
        category: (item.theme || "wisdom") as any,
      })),
    ];
  }
  return _allLuoProverbsCache;
}

const MENU_FAMILY_COUNTS: Record<string, number> = (() => {
  const counts: Record<string, number> = { All: PUBLISHED_COURSE_SUMMARIES.length };
  for (const c of PUBLISHED_COURSE_SUMMARIES) {
    if (c.config.family) {
      counts[c.config.family] = (counts[c.config.family] || 0) + 1;
    }
  }
  return counts;
})();

type StagedVarietyItem = {
  id: string;
  name: string;
  nativeName: string;
  family: string;
  counties: string[];
  totalEntries: number;
  sampleEntries: { english: string; translation: string; context?: string }[];
};
function getStagedVarieties(): StagedVarietyItem[] {
  return (getOpenCorpusIndexData() as any)?.stagedVarieties || [];
}

export interface CourseNavigationState {
  inCourse: boolean;
  courseName: string;
  backToMenu: () => void;
}

export const LanguageLearningTool = React.memo(function LanguageLearningTool({
  onScrollToTop,
  initialLanguageId,
  initialTab,
  onNavigationStateChange,
}: {
  onScrollToTop?: () => void;
  initialLanguageId?: string;
  initialTab?: MainTab;
  onNavigationStateChange?: (state: CourseNavigationState) => void;
} = {}) {
  return (
    <LanguageCourseTool
      onScrollToTop={onScrollToTop}
      initialLanguageId={initialLanguageId}
      initialTab={initialTab}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
});

export default function LanguageCourseTool({
  onScrollToTop,
  initialLanguageId,
  initialTab,
  onNavigationStateChange,
}: {
  onScrollToTop?: () => void;
  initialLanguageId?: string;
  initialTab?: MainTab;
  onNavigationStateChange?: (state: CourseNavigationState) => void;
} = {}) {
  const { colors, isDark, themeConfig, themeMetrics, themeKey } = useTheme();
  const styles = useMemo(() => createStyles(colors, themeMetrics), [colors, themeMetrics]);
  const ripple = useMemo(() => androidRipple(colors.rippleColor), [colors.rippleColor]);

  // ── Language Selection Menu & Active Course State ──
  const [showLanguageMenu, setShowLanguageMenu] = useState<boolean>(
    !(initialLanguageId && hasCourseSummary(initialLanguageId))
  );
  const [menuSearchQuery, setMenuSearchQuery] = useState<string>('');
  const deferredMenuSearchQuery = useDeferredValue(menuSearchQuery);
  const [menuFamilyFilter, setMenuFamilyFilter] = useState<string>('All');
  const [selectedEmergingId, setSelectedEmergingId] = useState<string>(
    'nubi'
  );
  const [kslTab, setKslTab] = useState<'all' | 'maseno-stickman' | 'human-sign-bible'>('all');
  const [kslSearchQuery, setKslSearchQuery] = useState<string>('');
  const deferredKslSearchQuery = useDeferredValue(kslSearchQuery);
  const [kslLetter, setKslLetter] = useState<string>('ALL');
  const [kslPage, setKslPage] = useState<number>(1);
  const allKslVideos = useMemo(() => {
    if (!showLanguageMenu) return [];
    const full = getKslIndexData()?.videos;
    const list: {
      id: string;
      title: string;
      gloss?: string;
      videoUrl: string;
      category?: string;
      source?: string;
      reference?: string;
      transcript?: string;
    }[] = Array.isArray(full) && full.length > 0 ? full : (getOpenCorpusIndexData()?.ksl?.videos || []);
    return list;
  }, [showLanguageMenu]);
  const kslCategoryCounts = useMemo(() => {
    let maseno = 0;
    let human = 0;
    for (const v of allKslVideos) {
      if (v.category === 'maseno-stickman') maseno++;
      else if (v.category === 'human-sign-bible') human++;
    }
    return { total: allKslVideos.length, maseno, human };
  }, [allKslVideos]);
  const kslAvailableLetters = useMemo(() => {
    const set = new Set<string>();
    for (const v of allKslVideos) {
      if (kslTab !== 'all' && v.category !== kslTab) continue;
      const ch = ((v.gloss || v.title || '').trim()[0] || '').toUpperCase();
      if (ch >= 'A' && ch <= 'Z') set.add(ch);
    }
    return Array.from(set).sort();
  }, [allKslVideos, kslTab]);
  const filteredKslVideos = useMemo(() => {
    const q = deferredKslSearchQuery.trim().toLowerCase();
    return allKslVideos.filter((v) => {
      if (kslTab !== 'all' && v.category !== kslTab) return false;
      if (kslLetter !== 'ALL') {
        const ch = ((v.gloss || v.title || '').trim()[0] || '').toUpperCase();
        if (ch !== kslLetter) return false;
      }
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        (v.gloss || '').toLowerCase().includes(q) ||
        (v.reference || '').toLowerCase().includes(q) ||
        (v.transcript || '').toLowerCase().includes(q)
      );
    });
  }, [allKslVideos, kslTab, kslLetter, deferredKslSearchQuery]);
  const [activeKslVideoId, setActiveKslVideoId] = useState<string>(
    ''
  );
  const [kslPlaybackRate, setKslPlaybackRate] = useState<number>(1);
  const [kslAutoPlay, setKslAutoPlay] = useState<boolean>(false);
  const [chapterSearchQuery, setChapterSearchQuery] = useState<string>('');
  const deferredChapterSearchQuery = useDeferredValue(chapterSearchQuery);
  const [lrAudioSearch, setLrAudioSearch] = useState<string>('');
  const deferredLrAudioSearch = useDeferredValue(lrAudioSearch);
  const [lrSlowMode, setLrSlowMode] = useState<boolean>(false);
  const [lrShowAudioEn, setLrShowAudioEn] = useState<boolean>(true);
  const [lrAudioClips, setLrAudioClips] = useState<MobileAudioShardClip[]>([]);
  const [lrAudioLimit, setLrAudioLimit] = useState<number>(36);

  const feedbackTimersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const clearFeedbackTimers = useCallback(() => {
    feedbackTimersRef.current.forEach((id) => clearTimeout(id));
    feedbackTimersRef.current.clear();
  }, []);
  const scheduleFeedbackTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      feedbackTimersRef.current.delete(id);
      fn();
    }, ms);
    feedbackTimersRef.current.add(id);
    return id;
  }, []);
  useEffect(() => clearFeedbackTimers, [clearFeedbackTimers]);
  const [kslStudioMode, setKslStudioMode] = useState<'browse' | 'quiz' | 'spell'>('browse');
  const [kslQuizIdx, setKslQuizIdx] = useState<number>(0);
  const [kslQuizPicked, setKslQuizPicked] = useState<string | null>(null);
  const [kslQuizScore, setKslQuizScore] = useState<{ right: number; total: number }>({ right: 0, total: 0 });
  const [kslSpellWord, setKslSpellWord] = useState<string>('JAMBO');
  const [kslSpellIdx, setKslSpellIdx] = useState<number>(0);
  const [dholuoTranscriptChapterId, setDholuoTranscriptChapterId] = useState<string | null>(null);
  const [dholuoTranscriptPage, setDholuoTranscriptPage] = useState<number>(1);
  const [dholuoShowEnglish, setDholuoShowEnglish] = useState<boolean>(true);
  const [lrSubTab, setLrSubTab] = useState<'listen' | 'read' | 'quiz'>('listen');
  const [lrQuizIdx, setLrQuizIdx] = useState<number>(0);
  const [lrQuizChoice, setLrQuizChoice] = useState<number | null>(null);
  const [lrQuizScore, setLrQuizScore] = useState<{ right: number; total: number }>({ right: 0, total: 0 });
  const [lrExpandedStory, setLrExpandedStory] = useState<number | null>(0);
  const [lrShowBiEn, setLrShowBiEn] = useState<boolean>(true);
  const [emergingSearchQuery, setEmergingSearchQuery] = useState<string>('');
  const deferredEmergingSearchQuery = useDeferredValue(emergingSearchQuery);
  const [emergingVisibleCount, setEmergingVisibleCount] = useState<number>(30);

  const [selectedLangId, setSelectedLangId] = useState<string>(
    initialLanguageId && hasCourseSummary(initialLanguageId)
      ? initialLanguageId
      : PUBLISHED_COURSE_SUMMARIES[0]?.config.id || 'swahili'
  );
  const [activeTab, setActiveTab] = useState<MainTab>(initialTab || 'learn');

  useEffect(() => {
    if (showLanguageMenu || activeTab !== 'listen-read') return;
    let active = true;
    setLrAudioClips([]);
    setLrAudioLimit(36);
    setLrAudioSearch('');
    loadMobileAudioShard(selectedLangId).then((clips) => {
      if (active && clips.length > 0) {
        setLrAudioClips(clips);
      }
    });
    return () => {
      active = false;
    };
  }, [selectedLangId, showLanguageMenu, activeTab]);

  useEffect(() => {
    if (initialLanguageId && hasCourseSummary(initialLanguageId)) {
      setSelectedLangId(initialLanguageId);
      setShowLanguageMenu(false);
    }
  }, [initialLanguageId]);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const cl = (getOpenCorpusIndexData()?.languages as Record<string, any>)?.[selectedLangId];
    const hasAud = Boolean((cl?.r2AudioClips || 0) > 0 || (cl?.nativeAudioSamples?.length || 0) > 0 || selectedLangId === 'luo');
    setLrSubTab(hasAud ? 'listen' : 'read');
    setLrQuizIdx(0);
    setLrQuizChoice(null);
  }, [selectedLangId]);
  const [showAchievements, setShowAchievements] = useState(false);

  // ── Progress Store (All Languages) ──
  const [allProgress, setAllProgress] = useState<Record<string, LanguageProgress>>({});
  const pendingProgressSaveRef = useRef(false);
  const [lastVisitedLangId, setLastVisitedLangId] = useState<string | null>(null);

  const sanitizeLanguageProgress = useCallback((lid: string, raw: unknown): LanguageProgress => {
    const base = createDefaultLanguageProgress(lid);
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return base;
    const r = raw as Record<string, any>;
    return {
      ...base,
      ...r,
      languageId: typeof r.languageId === 'string' && r.languageId ? r.languageId : lid,
      totalXP: Number.isFinite(Number(r.totalXP)) ? Number(r.totalXP) : base.totalXP,
      streak: Number.isFinite(Number(r.streak)) ? Number(r.streak) : base.streak,
      lastPracticeDate: typeof r.lastPracticeDate === 'string' ? r.lastPracticeDate : base.lastPracticeDate,
      dailyXP: Number.isFinite(Number(r.dailyXP)) ? Number(r.dailyXP) : base.dailyXP,
      dailyDate: typeof r.dailyDate === 'string' ? r.dailyDate : base.dailyDate,
      dailyGoal: Number.isFinite(Number(r.dailyGoal)) && Number(r.dailyGoal) > 0 ? Number(r.dailyGoal) : base.dailyGoal,
      hearts: Number.isFinite(Number(r.hearts)) ? Number(r.hearts) : base.hearts,
      heartsLastRefill: Number.isFinite(Number(r.heartsLastRefill)) ? Number(r.heartsLastRefill) : base.heartsLastRefill,
      perfectLessons: Number.isFinite(Number(r.perfectLessons)) ? Number(r.perfectLessons) : base.perfectLessons,
      gamesPlayed: Number.isFinite(Number(r.gamesPlayed)) ? Number(r.gamesPlayed) : base.gamesPlayed,
      skills: r.skills && typeof r.skills === 'object' && !Array.isArray(r.skills) ? r.skills : base.skills,
      wordStrengths: r.wordStrengths && typeof r.wordStrengths === 'object' && !Array.isArray(r.wordStrengths) ? r.wordStrengths : base.wordStrengths,
      unlockedAchievements: Array.isArray(r.unlockedAchievements)
        ? r.unlockedAchievements.filter((a: any) => typeof a === 'string')
        : base.unlockedAchievements,
    };
  }, []);

  // Persist progress outside React state updater
  useEffect(() => {
    if (!pendingProgressSaveRef.current) return;
    pendingProgressSaveRef.current = false;
    AsyncStorage.setItem(STORAGE_KEY_V2, JSON.stringify(allProgress)).catch(() => {});
  }, [allProgress]);

  // Load & migrate progress from AsyncStorage
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const entries = await AsyncStorage.multiGet([
          'kenyahub_last_visited_lang_v1',
          STORAGE_KEY_V2,
          STORAGE_KEY_V1,
        ]);
        if (!active) return;
        const map = new Map(entries);
        const savedLastVisited = map.get('kenyahub_last_visited_lang_v1');
        if (savedLastVisited && hasCourseSummary(savedLastVisited)) {
          setLastVisitedLangId(savedLastVisited);
        }
        const rawV2 = map.get(STORAGE_KEY_V2);
        if (rawV2) {
          const parsed = JSON.parse(rawV2);
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            const sanitized: Record<string, LanguageProgress> = {};
            for (const [lid, val] of Object.entries(parsed)) {
              if (typeof lid === 'string' && lid) {
                sanitized[lid] = sanitizeLanguageProgress(lid, val);
              }
            }
            setAllProgress(sanitized);
            return;
          }
        }
        // Migrate from v1 if present
        const rawV1 = map.get(STORAGE_KEY_V1);
        if (rawV1) {
          const v1 = JSON.parse(rawV1);
          if (v1 && typeof v1 === 'object' && !Array.isArray(v1)) {
            const migrated: Record<string, LanguageProgress> = {};
            for (const course of PUBLISHED_COURSE_SUMMARIES) {
              const lid = course.config.id;
              const base = createDefaultLanguageProgress(lid);
              base.totalXP = Number.isFinite(Number(v1.xp)) ? Number(v1.xp) : 0;
              base.streak = Number.isFinite(Number(v1.streak)) ? Number(v1.streak) : 0;
              base.lastPracticeDate = typeof v1.lastPracticeDate === 'string' ? v1.lastPracticeDate : '';
              const rawCompleted =
                v1.completedSkills && typeof v1.completedSkills === 'object' && !Array.isArray(v1.completedSkills)
                  ? v1.completedSkills[lid]
                  : [];
              const completedList: string[] = Array.isArray(rawCompleted)
                ? rawCompleted.filter((s: any) => typeof s === 'string')
                : [];
              for (const sid of completedList) {
                base.skills[sid] = {
                  skillId: sid,
                  level: 1,
                  lessonsCompleted: 1,
                  lastPracticed: Date.now(),
                  bestAccuracy: 100,
                };
              }
              migrated[lid] = base;
            }
            setAllProgress(migrated);
            await AsyncStorage.setItem(STORAGE_KEY_V2, JSON.stringify(migrated));
          }
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, [sanitizeLanguageProgress]);

  const currentCourse = useMemo(
    () =>
      showLanguageMenu
        ? getPlaceholderCourse(selectedLangId)
        : getCourseLazy(selectedLangId) || getCourseLazy('swahili') || getPlaceholderCourse(selectedLangId),
    [selectedLangId, showLanguageMenu]
  );

  const langColor = currentCourse?.config.color || colors.gold;
  const languageSources = useMemo(() => {
    if (showLanguageMenu) return [];
    const raw = getLanguageSourcesMod().getSourcesForLanguage(selectedLangId) || [];
    const target = selectedLangId.toLowerCase();
    return raw.filter((s: any) => {
      if (s.languageId && String(s.languageId).toLowerCase() !== target) return false;
      if (Array.isArray(s.languages) && s.languages.length > 0) {
        return s.languages.some((l: string) => String(l).toLowerCase() === target);
      }
      return true;
    });
  }, [selectedLangId, showLanguageMenu]);

  // Compute current language progress with automatic heart refills & daily reset
  const progress: LanguageProgress = useMemo(() => {
    const raw = allProgress[selectedLangId] || createDefaultLanguageProgress(selectedLangId);
    const today = getLocalDateString();
    let hearts = raw.hearts;
    let heartsLastRefill = raw.heartsLastRefill;
    if (hearts < MAX_HEARTS) {
      const elapsed = Date.now() - heartsLastRefill;
      const refills = Math.floor(elapsed / HEART_REFILL_MS);
      if (refills > 0) {
        hearts = Math.min(MAX_HEARTS, hearts + refills);
        heartsLastRefill = hearts >= MAX_HEARTS ? Date.now() : heartsLastRefill + refills * HEART_REFILL_MS;
      }
    }
    return {
      ...raw,
      dailyXP: raw.dailyDate === today ? raw.dailyXP : 0,
      dailyDate: today,
      hearts,
      heartsLastRefill,
    };
  }, [allProgress, selectedLangId]);

  const saveLanguageProgress = useCallback(
    async (updater: (prev: LanguageProgress) => LanguageProgress) => {
      setAllProgress((prevAll) => {
        const current = prevAll[selectedLangId] || createDefaultLanguageProgress(selectedLangId);
        const updated = updater(current);

        // Check all achievements (including cross-language Centurion, Polyglot & Gamer badges)
        const tempAll = { ...prevAll, [selectedLangId]: updated };
        const unlocked = new Set(updated.unlockedAchievements || []);
        const totalLessonsAll = Object.values(tempAll).reduce(
          (sum, lp) => sum + Object.values(lp.skills || {}).reduce((s, k) => s + k.lessonsCompleted, 0),
          0
        );
        const totalGamesAll = Object.values(tempAll).reduce((sum, lp) => sum + (lp.gamesPlayed || 0), 0);
        const skillLevelsRecord: Record<string, number> = {};
        for (const [lid, lp] of Object.entries(tempAll)) {
          for (const [k, v] of Object.entries(lp.skills || {})) {
            skillLevelsRecord[lid === selectedLangId ? k : `${lid}:${k}`] = v.level;
          }
        }
        const pseudoProgress = {
          version: 2,
          languageId: updated.languageId,
          skillLevels: skillLevelsRecord,
          unlockAll: updated.unlockAll,
          xp: updated.totalXP,
          streak: updated.streak,
          lastActiveDate: updated.lastPracticeDate,
          dailyGoal: updated.dailyGoal,
          todayXp: updated.dailyXP,
          hearts: updated.hearts,
          heartsLastRefill: updated.heartsLastRefill,
          achievements: Array.from(unlocked),
          wordsLearned: Object.keys(updated.wordStrengths || {}),
          lessonsCompleted: totalLessonsAll,
          perfectLessons: updated.perfectLessons,
          gamesPlayed: Math.max(updated.gamesPlayed, totalGamesAll),
          streakFreezes: updated.streakFreezes ?? 1,
          reviewQueue: [],
        };
        let bonusXp = 0;
        for (const ach of ACHIEVEMENTS) {
          if (!unlocked.has(ach.id) && ach.condition(pseudoProgress)) {
            unlocked.add(ach.id);
            bonusXp += ach.xpReward || 0;
          }
        }
        if (bonusXp > 0) {
          updated.totalXP += bonusXp;
          updated.dailyXP += bonusXp;
        }
        updated.unlockedAchievements = Array.from(unlocked);

        const nextAll = { ...prevAll, [selectedLangId]: updated };
        pendingProgressSaveRef.current = true;
        return nextAll;
      });
    },
    [selectedLangId]
  );

  // ── Skill Tree State ──
  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<string, boolean>>({});
  const [activeSkillId, setActiveSkillId] = useState<string>('');

  const [loadedDict, setLoadedDict] = useState<Dictionary | null>(
    () => LOADED_DICTS_CACHE[selectedLangId] || null
  );

  useEffect(() => {
    if (showLanguageMenu || (activeTab !== 'cards' && activeTab !== 'games')) {
      return;
    }
    let active = true;
    if (LOADED_DICTS_CACHE[selectedLangId]) {
      setLoadedDict(LOADED_DICTS_CACHE[selectedLangId]);
      return;
    }
    const timer = setTimeout(() => {
      loadDictionary(selectedLangId).then((d) => {
        if (active && d) setLoadedDict(d);
      });
    }, 60);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [selectedLangId, showLanguageMenu, activeTab]);

  const dictUnit: CourseUnit | null = useMemo(
    () => buildDictUnit(selectedLangId, currentCourse?.units || [], loadedDict),
    [selectedLangId, currentCourse, loadedDict]
  );

  const dictSkills: CourseSkill[] = useMemo(
    () => dictUnit?.skills || [],
    [dictUnit]
  );

  const combinedUnits: CourseUnit[] = useMemo(() => {
    if (!currentCourse) return [];
    return dictUnit ? [...currentCourse.units, dictUnit] : currentCourse.units;
  }, [currentCourse, dictUnit]);

  const allSkills = useMemo(
    () => combinedUnits.flatMap((u) => u.skills),
    [combinedUnits]
  );

  const activeCourseCounts = useMemo(() => {
    const summary = PUBLISHED_COURSE_SUMMARIES.find((c) => c.config.id === selectedLangId);
    if (summary) return getCanonicalCourseCounts(summary);
    return {
      totalUnits: combinedUnits.length,
      totalSkills: allSkills.length,
      totalWords: currentCourse?.wordCount || 0,
      dictCategoryCount: dictSkills.length,
      dictTotalEntries: 0,
    };
  }, [selectedLangId, combinedUnits.length, allSkills.length, currentCourse?.wordCount, dictSkills.length]);
  const allSkillIds = useMemo(() => allSkills.map((s) => s.id), [allSkills]);

  useEffect(() => {
    if (currentCourse?.units?.length) {
      const initialExpanded: Record<string, boolean> = {};
      const defaultExpandedIdx = new Set([0]);
      currentCourse.units.forEach((u, idx) => {
        initialExpanded[u.id] = defaultExpandedIdx.has(idx); // Collapse units 2+ by default for fast mobile render
      });
      setExpandedUnitIds(initialExpanded);
      if (currentCourse.units[0]?.skills[0]) {
        setActiveSkillId(currentCourse.units[0].skills[0].id);
      }
    }
  }, [selectedLangId, currentCourse]);

  const activeSkill: CourseSkill | undefined = useMemo(
    () => allSkills.find((s) => s.id === activeSkillId) || allSkills[0],
    [allSkills, activeSkillId]
  );

  // ── Lesson Player State (Matches Website LessonPlayer.tsx) ──
  const [lessonStage, setLessonStage] = useState<LessonStage>('idle');
  const [learnCardIdx, setLearnCardIdx] = useState(0);
  const [activeLessonLevel, setActiveLessonLevel] = useState(1);
  const [teachingDeck, setTeachingDeck] = useState<WordPair[]>([]);
  const [showTipsPanel, setShowTipsPanel] = useState(false);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exIndex, setExIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [wordBankSelected, setWordBankSelected] = useState<string[]>([]);
  const [wordBankRemaining, setWordBankRemaining] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [matchLeftIdx, setMatchLeftIdx] = useState<number | null>(null);
  const [matchRightOrder, setMatchRightOrder] = useState<number[]>([]);
  const [matchWrongFlash, setMatchWrongFlash] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [almostCorrect, setAlmostCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [streakCount, setStreakCount] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [missedItems, setMissedItems] = useState<{ prompt: string; correct: string }[]>([]);

  // ── Flashcards / Review Tab State ──
  const [cardMode, setCardMode] = useState<'skill' | 'review' | 'browse'>('skill');
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [vocabSearch, setVocabSearch] = useState('');
  const deferredVocabSearch = useDeferredValue(vocabSearch);
  const [modulesPage, setModulesPage] = useState(1);
  const [expandedVocabRows, setExpandedVocabRows] = useState<Record<string, number>>({});
  const MODULES_PAGE_SIZE = 6;
  const VOCAB_ROW_PAGE_SIZE = 25;

  useEffect(() => {
    setModulesPage(1);
    setVocabSearch('');
  }, [selectedLangId]);

  // ── Games Hub State (4 Games: Scramble, Speed Match, Memory, Wordle) ──
  const [activeGame, setActiveGame] = useState<ActiveGame>('menu');
  useEffect(() => {
    clearFeedbackTimers();
  }, [activeGame, activeTab, selectedLangId, clearFeedbackTimers]);
  const [gameScore, setGameScore] = useState(0);
  const [gameRound, setGameRound] = useState(0);
  // Scramble
  const [scrambleWord, setScrambleWord] = useState<Word | null>(null);
  const [scramblePicked, setScramblePicked] = useState<number[]>([]);
  const [scramblePool, setScramblePool] = useState<string[]>([]);
  const [scrambleDone, setScrambleDone] = useState<boolean | null>(null);
  // Speed Match
  const [speedQuestion, setSpeedQuestion] = useState<Word | null>(null);
  const [speedOptions, setSpeedOptions] = useState<string[]>([]);
  const [speedFeedback, setSpeedFeedback] = useState<string | null>(null);
  // Memory Match
  const [memoryCards, setMemoryCards] = useState<
    { id: string; text: string; pairId: number; type: 'target' | 'source'; matched: boolean }[]
  >([]);
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  // Wordle
  const [wordleTarget, setWordleTarget] = useState<Word | null>(null);
  const [wordleAnswer, setWordleAnswer] = useState('');
  const [wordleGuesses, setWordleGuesses] = useState<string[]>([]);
  const [wordleInput, setWordleInput] = useState('');
  const [wordleStatus, setWordleStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [riddleQuestion, setRiddleQuestion] = useState<{ riddle: string; answer: string; hint?: string; origin?: string } | null>(null);
  const [riddleOptions, setRiddleOptions] = useState<string[]>([]);
  const [riddleFeedback, setRiddleFeedback] = useState<string | null>(null);
  const [vocabQuestion, setVocabQuestion] = useState<{ prompt: string; oddWord: string } | null>(null);
  const [vocabOptions, setVocabOptions] = useState<string[]>([]);
  const [vocabFeedback, setVocabFeedback] = useState<string | null>(null);

  // ── Grammar Tab State ──
  const [grammarSearch, setGrammarSearch] = useState('');
  const deferredGrammarSearch = useDeferredValue(grammarSearch);
  const [expandedGrammarId, setExpandedGrammarId] = useState<string | null>(null);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);

  // ── Proverbs & Oral Wisdom Tab State ──
  const [luoSubTab, setLuoSubTab] = useState<'proverbs' | 'riddles' | 'twisters'>('proverbs');
  const [proverbSearch, setProverbSearch] = useState('');
  const deferredProverbSearch = useDeferredValue(proverbSearch);
  const [proverbCategory, setProverbCategory] = useState('All');
  const [proverbPage, setProverbPage] = useState(1);
  const [revealedRiddles, setRevealedRiddles] = useState<Record<number, boolean>>({});

  // ── Helper: Initialize Exercise State for Current Exercise ──
  const setupExerciseState = useCallback((ex: Exercise | undefined) => {
    setSelectedAnswer(null);
    setTypedAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setAlmostCorrect(false);
    setShowHint(false);
    setMatchedPairs(new Set());
    setMatchLeftIdx(null);
    setMatchWrongFlash(false);

    if (!ex) return;
    if (ex.type === 'word_bank' || ex.type === 'reorder') {
      setWordBankSelected([]);
      setWordBankRemaining([...(ex.wordTiles || ex.options || [])]);
    } else if (ex.type === 'match_pairs' && ex.pairs) {
      const indices = ex.pairs.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setMatchRightOrder(indices);
    }
  }, []);

  // ── Start a Skill Lesson (Stage 1: Learn First -> Stage 2: 15 Exercises) ──
  const startSkillLesson = useCallback(
    (skill: CourseSkill, skipLearn = false) => {
      if (skill.id.startsWith('dict-cat-') && skill.words.length === 0) {
        const catId = skill.id.replace('dict-cat-', '');
        loadDictionary(selectedLangId).then((dict) => {
          if (!dict) return;
          setLoadedDict(dict);
          const cat = dict.categories.find((c) => c.id === catId);
          if (!cat || !cat.entries.length) return;
          const hydratedWords: WordPair[] = [];
          for (const e of cat.entries) {
            const t = e.translation.trim();
            const s = e.english.trim();
            if (!t || !s) continue;
            hydratedWords.push({
              target: t,
              source: s,
              pronunciation: e.pronunciation || undefined,
              example: e.context || undefined,
              audioFile: e.audioFile || undefined,
            });
          }
          if (hydratedWords.length > 0) {
            startSkillLesson({ ...skill, words: hydratedWords }, skipLearn);
          }
        }).catch(() => {});
        return;
      }
      setActiveSkillId(skill.id);
      setLearnCardIdx(0);
      setShowTipsPanel(false);
      let effectiveSkill = skill;
      if (skill.words.length > 14) {
        const batchSize = 12;
        const maxStart = Math.max(0, skill.words.length - batchSize);
        const savedCursor = progress.dictCursors?.[skill.id] ?? 0;
        const offset = Math.min(maxStart, savedCursor);
        effectiveSkill = {
          ...skill,
          words: skill.words.slice(offset, offset + batchSize),
        };
      }
      const currentSkillLevel = progress.skills[skill.id]?.level || 0;
      const nextLevel = Math.min(5, currentSkillLevel + 1);
      setActiveLessonLevel(nextLevel);
      const deck = getTeachingDeckForLevel(effectiveSkill, nextLevel);
      setTeachingDeck(deck);
      const rawGenerated = generateExercises(effectiveSkill, 15, nextLevel);
      const lessonPoolWords = [
        ...effectiveSkill.words,
        ...(currentCourse?.units.flatMap((u) => u.skills.flatMap((sk) => sk.words)) || []),
      ];
      const cleanTargetPool = lessonPoolWords
        .filter((w) => isValidQuizPair(w.target, w.source))
        .map((w) => cleanQuizGloss(getPrimaryForm(w.target), 42))
        .filter(Boolean);
      const cleanSourcePool = lessonPoolWords
        .filter((w) => isValidQuizPair(w.target, w.source))
        .map((w) => cleanQuizGloss(getPrimaryForm(w.source), 56))
        .filter(Boolean);
      const generated = rawGenerated.map((ex) => {
        if ((ex.type === 'multiple_choice' || ex.type === 'fill_blank') && ex.options && ex.options.length > 1) {
          const cleanCorrect = cleanQuizGloss(ex.correctAnswer, 80) || ex.correctAnswer.trim();
          const sw = ex.sourceWord;
          const normCorrect = cleanCorrect.toLowerCase();
          const isTargetSide =
            ex.type === 'fill_blank' ||
            (sw
              ? cleanQuizGloss(getPrimaryForm(sw.target), 80).toLowerCase() === normCorrect ||
                sw.target.toLowerCase().includes(normCorrect)
              : false);
          const candidatePool = isTargetSide
            ? [...cleanTargetPool, ...ex.options]
            : [...cleanSourcePool, ...ex.options];
          const balanced = pickBalancedDistractors(cleanCorrect, candidatePool, 3);
          if (balanced.length >= 2) {
            const shuffledOpts = [cleanCorrect, ...balanced].sort(() => Math.random() - 0.5);
            return {
              ...ex,
              correctAnswer: cleanCorrect,
              options: shuffledOpts,
            };
          }
        }
        if (ex.type === 'match_pairs' && ex.pairs && ex.pairs.length >= 2) {
          const cleanedPairs = ex.pairs
            .map((pair) => ({
              left: cleanQuizGloss(pair.left, 42) || pair.left.trim(),
              right: cleanQuizGloss(pair.right, 56) || pair.right.trim(),
            }))
            .filter((pair) => pair.left && pair.right);
          if (cleanedPairs.length >= 2) {
            return { ...ex, pairs: cleanedPairs };
          }
        }
        return ex;
      });
      setExercises(generated);
      setExIndex(0);
      setCorrectCount(0);
      setStreakCount(0);
      setXpEarned(0);
      setMissedItems([]);
      setupExerciseState(generated[0]);
      setLessonStage(skipLearn || deck.length === 0 ? 'practice' : 'learn');
    },
    [setupExerciseState, onScrollToTop, progress.dictCursors, progress.skills, saveLanguageProgress, currentCourse]
  );

  const lessonScrollRef = useRef<ScrollView>(null);

  // Scroll lesson modal to top only when advancing lesson stage, learn card, or exercise
  useEffect(() => {
    lessonScrollRef.current?.scrollTo({ y: 0, animated: false });
    requestAnimationFrame(() => {
      lessonScrollRef.current?.scrollTo({ y: 0, animated: false });
    });
  }, [lessonStage, learnCardIdx, exIndex]);

  // ── Submit Current Exercise Answer ──
  const handleCheckExercise = useCallback(() => {
    const ex = exercises[exIndex];
    if (!ex || isSubmitted) return;

    let userAns = '';
    if (ex.type === 'multiple_choice' || (ex.type === 'fill_blank' && ex.options && ex.options.length > 0)) {
      if (!selectedAnswer) return;
      userAns = selectedAnswer;
    } else if (ex.type === 'fill_blank') {
      if (!typedAnswer.trim()) return;
      userAns = typedAnswer.trim();
    } else if (ex.type === 'word_bank' || ex.type === 'reorder') {
      if (wordBankSelected.length === 0) return;
      userAns = wordBankSelected.join(' ');
    } else if (ex.type === 'translate_to_english' || ex.type === 'translate_to_target') {
      if (!typedAnswer.trim()) return;
      userAns = typedAnswer.trim();
    }

    const result = checkAnswerWithFeedback(ex, userAns);
    setIsSubmitted(true);
    setIsCorrect(result.correct);
    setAlmostCorrect(result.almostCorrect);

    if (result.correct) {
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      setCorrectCount((c) => c + 1);
      const bonus = newStreak >= 5 ? 5 : newStreak >= 3 ? 2 : 0;
      setXpEarned((x) => x + 10 + bonus);
    } else {
      setStreakCount(0);
      setMissedItems((prev) => [...prev, { prompt: ex.prompt, correct: ex.correctAnswer }]);
    }

    // Update word strength if sourceWord present
    if (ex.sourceWord?.target) {
      const wKey = ex.sourceWord.target;
      saveLanguageProgress((prev) => {
        const existing = prev.wordStrengths[wKey] || {
          wordKey: wKey,
          strength: 3,
          lastSeen: Date.now(),
          correctStreak: 0,
          timesWrong: 0,
        };
        return {
          ...prev,
          wordStrengths: {
            ...prev.wordStrengths,
            [wKey]: {
              ...existing,
              strength: result.correct
                ? Math.min(5, existing.strength + 1)
                : Math.max(1, existing.strength - 1),
              lastSeen: Date.now(),
              correctStreak: result.correct ? existing.correctStreak + 1 : 0,
              timesWrong: result.correct ? existing.timesWrong : existing.timesWrong + 1,
            },
          },
        };
      });
    }
  }, [
    exercises,
    exIndex,
    isSubmitted,
    selectedAnswer,
    wordBankSelected,
    typedAnswer,
    streakCount,
    saveLanguageProgress,
  ]);

  // ── Handle Match Pairs Selection ──
  const handleMatchRightPress = useCallback(
    (pairIndex: number) => {
      const ex = exercises[exIndex];
      if (!ex || ex.type !== 'match_pairs' || !ex.pairs || matchLeftIdx === null) return;
      if (matchedPairs.has(pairIndex)) return;

      if (matchLeftIdx === pairIndex) {
        const nextMatched = new Set(matchedPairs);
        nextMatched.add(pairIndex);
        setMatchedPairs(nextMatched);
        setMatchLeftIdx(null);
        const pairObj = ex.pairs[pairIndex] as any;
        const wKey = pairObj?.target || pairObj?.left;
        if (wKey) {
          saveLanguageProgress((prev) => {
            const existing = prev.wordStrengths[wKey] || {
              wordKey: wKey,
              strength: 3,
              lastSeen: Date.now(),
              correctStreak: 0,
              timesWrong: 0,
            };
            return {
              ...prev,
              wordStrengths: {
                ...prev.wordStrengths,
                [wKey]: {
                  ...existing,
                  strength: Math.min(5, existing.strength + 1),
                  lastSeen: Date.now(),
                  correctStreak: existing.correctStreak + 1,
                },
              },
            };
          });
        }

        if (nextMatched.size === ex.pairs.length) {
          setIsSubmitted(true);
          setIsCorrect(true);
          setCorrectCount((c) => c + 1);
          setStreakCount((s) => s + 1);
          setXpEarned((x) => x + 15);
        }
      } else {
        setMatchWrongFlash(true);
        setStreakCount(0);
        const wrongPair = ex.pairs[matchLeftIdx] as any;
        if (wrongPair) {
          const leftTxt = wrongPair.target || wrongPair.left || '';
          const rightTxt = wrongPair.source || wrongPair.right || '';
          if (leftTxt && rightTxt) {
            setMissedItems((prev) => [...prev, { prompt: leftTxt, correct: rightTxt }]);
          }
        }
        scheduleFeedbackTimeout(() => {
          setMatchWrongFlash(false);
          setMatchLeftIdx(null);
        }, 500);
      }
    },
    [exercises, exIndex, matchLeftIdx, matchedPairs, saveLanguageProgress]
  );

  // ── Advance to Next Exercise or Complete Lesson ──
  const handleNextExercise = useCallback(() => {
    if (exIndex + 1 < exercises.length) {
      const nextIdx = exIndex + 1;
      setExIndex(nextIdx);
      setupExerciseState(exercises[nextIdx]);
    } else {
      // Complete Lesson & Persist Mastery
      const total = Math.max(1, exercises.length);
      const accuracy = Math.round((correctCount / total) * 100);
      const completionBonus = accuracy === 100 ? 50 : 20;
      const streakBonus = Math.min(Math.max(1, progress.streak), 7) * 5;
      const finalLessonXP = xpEarned + completionBonus + streakBonus;
      setXpEarned(finalLessonXP);

      if (activeSkill) {
        saveLanguageProgress((prev) => {
          const today = getLocalDateString();
          const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
          let newStreak = prev.streak;
          let streakFreezes = prev.streakFreezes ?? 1;
          if (prev.lastPracticeDate === today) {
            newStreak = Math.max(1, prev.streak);
          } else if (prev.lastPracticeDate === yesterday) {
            newStreak = prev.streak + 1;
          } else if (prev.lastPracticeDate && streakFreezes > 0 && prev.streak > 0) {
            const diffDays = Math.round(
              (new Date(today + "T00:00:00").getTime() - new Date(prev.lastPracticeDate + "T00:00:00").getTime()) / 86400000
            );
            if (diffDays === 2) {
              streakFreezes -= 1;
              newStreak = prev.streak + 1;
            } else {
              newStreak = 1;
            }
          } else {
            newStreak = 1;
          }

          const prevSkill: SkillProgress = prev.skills[activeSkill.id] || {
            skillId: activeSkill.id,
            level: 0,
            lessonsCompleted: 0,
            lastPracticed: 0,
            bestAccuracy: 0,
          };

          const newLessonsCompleted = prevSkill.lessonsCompleted + 1;
          const newLevel = Math.min(5, prevSkill.level + 1);
          let nextDictCursors = prev.dictCursors || {};
          if (activeSkill.words.length > 14) {
            const batchSize = 12;
            const maxStart = Math.max(0, activeSkill.words.length - batchSize);
            const savedCursor = nextDictCursors[activeSkill.id] ?? 0;
            const offset = Math.min(maxStart, savedCursor);
            const nextCursor = offset + batchSize <= maxStart ? offset + batchSize : 0;
            nextDictCursors = { ...nextDictCursors, [activeSkill.id]: nextCursor };
          }

          return {
            ...prev,
            dictCursors: nextDictCursors,
            totalXP: prev.totalXP + finalLessonXP,
            dailyXP: (prev.dailyDate === today ? prev.dailyXP : 0) + finalLessonXP,
            dailyDate: today,
            streak: newStreak,
            streakFreezes,
            lastPracticeDate: today,
            perfectLessons: accuracy === 100 ? prev.perfectLessons + 1 : prev.perfectLessons,
            skills: {
              ...prev.skills,
              [activeSkill.id]: {
                skillId: activeSkill.id,
                level: newLevel,
                lessonsCompleted: newLessonsCompleted,
                lastPracticed: Date.now(),
                bestAccuracy: Math.max(prevSkill.bestAccuracy, accuracy),
              },
            },
          };
        });
      }
      setLessonStage('complete');
    }
  }, [exIndex, exercises, setupExerciseState, correctCount, xpEarned, activeSkill, saveLanguageProgress]);

  // ── Skip Current Exercise ──
  const handleSkipExercise = useCallback(() => {
    const ex = exercises[exIndex];
    if (!ex || isSubmitted) return;
    setIsSubmitted(true);
    setIsCorrect(false);
    setStreakCount(0);
    setMissedItems((prev) => [...prev, { prompt: ex.prompt, correct: ex.correctAnswer }]);
  }, [exercises, exIndex, isSubmitted]);

  // ── Mini-Games Pool & Launchers (Fast curated pool + capped dictionary sample) ──
  const allCourseWords = useMemo(() => {
    if (showLanguageMenu) return [];
    const words: Word[] = [];
    const seenTargets = new Set<string>();
    const seenSources = new Set<string>();
    const courseSkills = currentCourse?.units.flatMap((u) => u.skills) || [];
    const addSkillWords = (skillsList: CourseSkill[], maxTotal: number) => {
      for (const sk of skillsList) {
        for (const w of sk.words) {
          if (words.length >= maxTotal) return;
          if (!isCleanLexicalWordPair(w.target, w.source)) continue;
          const target = cleanQuizGloss(getPrimaryForm(w.target), 42);
          const source = cleanQuizGloss(cleanExerciseText(getPrimaryForm(w.source)), 56);
          if (!isValidQuizPair(target, source)) continue;
          const tKey = target.toLowerCase();
          const sKey = source.toLowerCase();
          if (target && source && !seenTargets.has(tKey) && !seenSources.has(sKey)) {
            seenTargets.add(tKey);
            seenSources.add(sKey);
            words.push({ ...w, target, source });
          }
        }
      }
    };
    addSkillWords(courseSkills, 600);
    if (words.length < 400 && dictSkills.length > 0) {
      addSkillWords(dictSkills, 500);
    }
    return words.length >= 4 ? words : courseSkills.flatMap((sk) => sk.words).slice(0, 200);
  }, [showLanguageMenu, currentCourse, dictSkills]);

  const startScrambleRound = useCallback(() => {
    const eligible = allCourseWords
      .filter((w) => isSingleWordLexical(w.target) && isValidQuizPair(w.target, w.source))
      .map((w) => ({
        ...w,
        target: cleanQuizGloss(getPrimaryForm(w.target), 32).replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF']/g, ""),
        source: cleanQuizGloss(getPrimaryForm(w.source), 56),
      }))
      .filter((w) => w.target.length >= 3 && w.target.length <= 10 && w.source.length >= 2);
    if (eligible.length === 0) return;
    const chosen = eligible[Math.floor(Math.random() * eligible.length)];
    const origChars = chosen.target.split("");
    let chars = [...origChars];
    let attempts = 0;
    do {
      chars = [...origChars];
      for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
      attempts++;
    } while (chars.join("") === origChars.join("") && attempts < 10);
    setScrambleWord(chosen);
    setScramblePool(chars);
    setScramblePicked([]);
    setScrambleDone(null);
  }, [allCourseWords]);

  const startSpeedRound = useCallback(() => {
    const validPool = allCourseWords.filter((w) => isValidQuizPair(w.target, w.source));
    if (validPool.length < 4) return;
    const chosen = validPool[Math.floor(Math.random() * validPool.length)];
    const correctSource = cleanQuizGloss(chosen.source, 56) || chosen.source.trim();
    const candidateSources = validPool
      .filter((w) => w.target.toLowerCase() !== chosen.target.toLowerCase())
      .map((w) => {
        const cleanSrc = cleanQuizGloss(w.source || '', 56);
        if (!cleanSrc || cleanSrc.toLowerCase() === 'none' || cleanSrc.toLowerCase() === 'n/a') return '';
        return cleanSrc;
      })
      .filter(Boolean);
    const distractors = pickBalancedDistractors(correctSource, candidateSources, 3);
    const opts = [correctSource, ...distractors].sort(() => Math.random() - 0.5);
    setSpeedQuestion({ ...chosen, source: correctSource });
    setSpeedOptions(opts);
    setSpeedFeedback(null);
  }, [allCourseWords]);

  const startMemoryGame = useCallback(() => {
    const validPool = [...allCourseWords]
      .filter((w) => isValidQuizPair(w.target, w.source))
      .map((w) => ({
        ...w,
        target: cleanQuizGloss(getPrimaryForm(w.target), 36),
        source: cleanQuizGloss(getPrimaryForm(w.source), 44),
      }))
      .filter((w) => w.target && w.source)
      .sort(() => Math.random() - 0.5);
    if (validPool.length === 0) return;
    const anchor = validPool[0];
    const balancedTargets = pickBalancedDistractors(
      anchor.target,
      validPool.slice(1).map((w) => w.target),
      5
    );
    const seenTargets = new Set<string>([anchor.target.toLowerCase()]);
    const seenSources = new Set<string>([anchor.source.toLowerCase()]);
    const sample: Word[] = [anchor];
    for (const t of balancedTargets) {
      const match = validPool.find((w) => w.target === t);
      if (match && !seenTargets.has(match.target.toLowerCase()) && !seenSources.has(match.source.toLowerCase())) {
        seenTargets.add(match.target.toLowerCase());
        seenSources.add(match.source.toLowerCase());
        sample.push(match);
      }
    }
    for (const w of validPool) {
      if (sample.length >= 6) break;
      if (seenTargets.has(w.target.toLowerCase()) || seenSources.has(w.source.toLowerCase())) continue;
      seenTargets.add(w.target.toLowerCase());
      seenSources.add(w.source.toLowerCase());
      sample.push(w);
    }
    const deck: {
      id: string;
      text: string;
      pairId: number;
      type: 'target' | 'source';
      matched: boolean;
    }[] = [];
    sample.forEach((w, idx) => {
      deck.push({ id: `t-${idx}`, text: w.target, pairId: idx, type: "target", matched: false });
      deck.push({ id: `s-${idx}`, text: w.source, pairId: idx, type: "source", matched: false });
    });
    deck.sort(() => Math.random() - 0.5);
    setMemoryCards(deck);
    setMemoryFlipped([]);
  }, [allCourseWords]);

  const startWordleGame = useCallback(() => {
    const toAscii = (str: string) =>
      getPrimaryForm(str)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[ωΩ]/g, "o")
        .replace(/ñ/g, "ng")
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();

    const eligible = allCourseWords
      .filter((w) => isSingleWordLexical(w.target) && isValidQuizPair(w.target, w.source))
      .map((w) => ({
        ...w,
        target: cleanQuizGloss(getPrimaryForm(w.target), 32) || w.target,
        source: cleanQuizGloss(getPrimaryForm(w.source), 56) || w.source,
        asciiTarget: toAscii(w.target),
      }))
      .filter((w) => w.asciiTarget.length >= 4 && w.asciiTarget.length <= 7);
    if (eligible.length === 0) return;
    const chosen = eligible[Math.floor(Math.random() * eligible.length)];
    setWordleTarget(chosen);
    setWordleAnswer(chosen.asciiTarget);
    setWordleGuesses([]);
    setWordleInput('');
    setWordleStatus('playing');
  }, [allCourseWords]);

  const startRiddleRound = useCallback(() => {
    const pool = getRiddlesForLanguage(selectedLangId, currentCourse?.config.name);
    if (pool.length === 0) return;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    const cleanAnswer = cleanQuizGloss(chosen.answer, 64) || chosen.answer.trim();
    const candidateAnswers = pool
      .filter((r) => r.answer.toLowerCase() !== chosen.answer.toLowerCase())
      .map((r) => cleanQuizGloss(r.answer, 64) || r.answer.trim());
    const distractors = pickBalancedDistractors(cleanAnswer, candidateAnswers, 3);
    const opts = [cleanAnswer, ...distractors].sort(() => Math.random() - 0.5);
    setRiddleQuestion({
      riddle: chosen.riddle,
      answer: cleanAnswer,
      hint: chosen.translation,
      origin: chosen.origin,
    });
    setRiddleOptions(opts);
    setRiddleFeedback(null);
  }, [selectedLangId, currentCourse]);

  const startVocabQuizRound = useCallback(() => {
    const validPool = allCourseWords.filter((w) => isValidQuizPair(w.target, w.source));
    if (validPool.length < 4) return;
    const shuffled = [...validPool].sort(() => Math.random() - 0.5);
    const primary = shuffled[0];
    const cleanTarget = cleanQuizGloss(primary.target, 42) || primary.target.trim();
    const cleanSource = cleanQuizGloss(primary.source, 56) || primary.source.trim();
    const candidateTargets = shuffled
      .slice(1)
      .filter((w) => w.source.toLowerCase() !== primary.source.toLowerCase())
      .map((w) => cleanQuizGloss(w.target, 42))
      .filter(Boolean);
    const distractors = pickBalancedDistractors(cleanTarget, candidateTargets, 3);
    const promptText = `Which word means "${cleanSource}"?`;
    const opts = [cleanTarget, ...distractors].sort(() => Math.random() - 0.5);

    setVocabQuestion({ prompt: promptText, oddWord: cleanTarget });
    setVocabOptions(opts);
    setVocabFeedback(null);
  }, [allCourseWords]);

  const awardGameXP = useCallback(
    (points: number, sessionComplete = true) => {
      saveLanguageProgress((prev) => {
        const today = getLocalDateString();
        const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
        let newStreak = prev.streak;
        let streakFreezes = prev.streakFreezes ?? 1;
        if (prev.lastPracticeDate !== today) {
          if (prev.lastPracticeDate === yesterday) {
            newStreak = prev.streak + 1;
          } else if (prev.lastPracticeDate && streakFreezes > 0 && prev.streak > 0) {
            const diffDays = Math.round(
              (new Date(today + 'T00:00:00').getTime() - new Date(prev.lastPracticeDate + 'T00:00:00').getTime()) / 86400000
            );
            if (diffDays === 2) {
              streakFreezes -= 1;
              newStreak = prev.streak + 1;
            } else {
              newStreak = 1;
            }
          } else {
            newStreak = 1;
          }
        }
        const prevDaily = prev.dailyDate === today ? prev.dailyXP : 0;
        const wasBelowGoal = prevDaily < prev.dailyGoal;
        const goalBonus = wasBelowGoal && prevDaily + points >= prev.dailyGoal ? 25 : 0;
        const totalAdd = points + goalBonus;
        return {
          ...prev,
          totalXP: prev.totalXP + totalAdd,
          dailyXP: prevDaily + totalAdd,
          dailyDate: today,
          streak: newStreak,
          streakFreezes,
          lastPracticeDate: today,
          gamesPlayed: sessionComplete ? prev.gamesPlayed + 1 : prev.gamesPlayed,
        };
      });
    },
    [saveLanguageProgress]
  );

  // ── Derived Stats for Header & Skill Tree ──
  const xpLevelInfo = useMemo(() => getXpLevel(progress.totalXP), [progress.totalXP]);
  const currentLevel = xpLevelInfo.current;
  const nextLevel = xpLevelInfo.next;
  const reviewWordList = useMemo(
    () =>
      Object.values(progress.wordStrengths)
        .filter((w) => w.strength <= 3)
        .sort((a, b) => a.strength - b.strength)
        .map((w) => w.wordKey),
    [progress.wordStrengths]
  );
  const reviewDueCount = reviewWordList.length;
  const reviewWordKeys = useMemo(() => new Set(reviewWordList.slice(0, 20)), [reviewWordList]);

  const flashcardDeck: Word[] = useMemo(() => {
    if (cardMode === 'review' && reviewWordKeys.size > 0) {
      const matched = allCourseWords.filter((w) => reviewWordKeys.has(w.target));
      if (matched.length > 0) return matched;
    }
    return activeSkill?.words || [];
  }, [cardMode, reviewWordKeys, allCourseWords, activeSkill]);

  const currentFlashcard = flashcardDeck[cardIndex] || flashcardDeck[0];

  const grammarSections: GrammarSection[] = useMemo(
    () => (showLanguageMenu || activeTab !== 'grammar' ? [] : getGrammarSectionsLazy(selectedLangId)),
    [showLanguageMenu, activeTab, selectedLangId]
  );
  const filteredGrammar = useMemo(() => {
    const q = deferredGrammarSearch.trim().toLowerCase();
    if (!q) return grammarSections;
    return grammarSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q) ||
        sec.content.toLowerCase().includes(q) ||
        (sec.examples || []).some((ex) =>
          Object.values(ex).some((val) => (val || '').toLowerCase().includes(q))
        )
    );
  }, [grammarSections, deferredGrammarSearch]);

  // ============================================================================
  // ACTIVE LESSON PLAYER VIEW (FULL-SCREEN MATERIAL 3 MODAL EXPERIENCE)
  // ============================================================================
  const handleStepBack = useCallback(() => {
    if (lessonStage !== 'idle') {
      setLessonStage('idle');
      return true;
    }
    if (activeGame !== 'menu') {
      setActiveGame('menu');
      return true;
    }
    if (!showLanguageMenu && !initialLanguageId) {
      setShowLanguageMenu(true);
      onScrollToTop?.();
      return true;
    }
    return false;
  }, [lessonStage, activeGame, showLanguageMenu, initialLanguageId, onScrollToTop]);

  useFocusEffect(
    useCallback(() => {
      const sub = BackHandler.addEventListener('hardwareBackPress', handleStepBack);
      return () => sub.remove();
    }, [handleStepBack])
  );

  useEffect(() => {
    onNavigationStateChange?.({
      inCourse: !showLanguageMenu,
      courseName: currentCourse?.config.name || 'Kenyan Languages',
      backToMenu: () => {
        if (activeGame !== 'menu') {
          setActiveGame('menu');
        } else {
          setShowLanguageMenu(true);
          onScrollToTop?.();
        }
      },
    });
  }, [showLanguageMenu, currentCourse, activeGame, onNavigationStateChange, onScrollToTop]);

  // ── Derived Language Menu Data (All 23 Courses, Search, Family Filter & Overall Stats) ──
  const menuFamilies = useMemo(() => {
    const set = new Set<string>();
    PUBLISHED_COURSE_SUMMARIES.forEach((c) => {
      if (c.config.family) set.add(c.config.family);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMenuCourses = useMemo(() => {
    const normSearch = (s: string) =>
      s.normalize("NFD").replace(/[\u0300-\u036f'’]/g, "").toLowerCase();
    const q = normSearch(deferredMenuSearchQuery.trim());
    return PUBLISHED_COURSE_SUMMARIES.filter((c) => {
      if (menuFamilyFilter !== 'All' && c.config.family !== menuFamilyFilter) return false;
      if (!q) return true;
      return (
        normSearch(c.config.name).includes(q) ||
        normSearch(c.config.nativeName || '').includes(q) ||
        normSearch(c.config.description).includes(q) ||
        normSearch(c.config.family).includes(q) ||
        (c.config.counties || []).some((cnt) => normSearch(cnt).includes(q))
      );
    });
  }, [menuFamilyFilter, deferredMenuSearchQuery]);

  const overallMenuStats = useMemo(() => {
    let totalXp = 0;
    let bestStreak = 0;
    let totalWords = 0;
    let topLangId = PUBLISHED_COURSE_SUMMARIES[0]?.config.id || 'swahili';
    let topLangXp = -1;

    for (const course of PUBLISHED_COURSE_SUMMARIES) {
      const lid = course.config.id;
      const st = allProgress[lid];
      if (!st) continue;
      totalXp += st.totalXP || 0;
      totalWords += Object.keys(st.wordStrengths || {}).length;
      if ((st.streak || 0) > bestStreak) bestStreak = st.streak || 0;
      if ((st.totalXP || 0) > topLangXp) {
        topLangXp = st.totalXP || 0;
        topLangId = lid;
      }
    }
    const preferredId = lastVisitedLangId || topLangId;
    const resumeCourse =
      PUBLISHED_COURSE_SUMMARIES.find((c) => c.config.id === preferredId) ||
      PUBLISHED_COURSE_SUMMARIES.find((c) => c.config.id === topLangId) ||
      PUBLISHED_COURSE_SUMMARIES[0];
    return { totalXp, bestStreak, totalWords, resumeCourse };
  }, [allProgress, lastVisitedLangId]);

  const handleSelectLanguageFromMenu = useCallback(
    (langId: string) => {
      setSelectedLangId(langId);
      setLastVisitedLangId(langId);
      AsyncStorage.setItem('kenyahub_last_visited_lang_v1', langId).catch(() => {});
      setShowLanguageMenu(false);
      setProverbCategory('All');
      setProverbSearch('');
      setProverbPage(1);
      setCardIndex(0);
      setIsCardFlipped(false);
      setActiveGame('menu');
      onScrollToTop?.();
    },
    [onScrollToTop]
  );


  const activeEmergingVariety = useMemo(
    () => { const list = getStagedVarieties(); return list.find((v) => v.id === selectedEmergingId) || list[0] || null; },
    [selectedEmergingId]
  );

  const filteredEmergingEntries = useMemo(() => {
    if (!showLanguageMenu || !activeEmergingVariety) return [];
    const eq = deferredEmergingSearchQuery.trim().toLowerCase();
    const list = activeEmergingVariety.sampleEntries || [];
    if (!eq) return list;
    return list.filter(
      (ent) =>
        ent.translation.toLowerCase().includes(eq) ||
        ent.english.toLowerCase().includes(eq) ||
        (ent.context || '').toLowerCase().includes(eq)
    );
  }, [showLanguageMenu, activeEmergingVariety, deferredEmergingSearchQuery]);

  const filteredBrowseSkills = useMemo(() => {
    if (showLanguageMenu || activeTab !== 'cards' || cardMode !== 'browse') return [];
    const q = deferredVocabSearch.trim().toLowerCase();
    if (!q) return allSkills;
    return allSkills
      .map((sk) => ({
        ...sk,
        words: sk.words.filter(
          (w) =>
            w.target.toLowerCase().includes(q) ||
            w.source.toLowerCase().includes(q) ||
            sk.title.toLowerCase().includes(q)
        ),
      }))
      .filter((sk) => sk.words.length > 0);
  }, [showLanguageMenu, activeTab, cardMode, deferredVocabSearch, allSkills]);

  const filteredKikuyuProverbs = useMemo(() => {
    if (showLanguageMenu || activeTab !== 'proverbs' || selectedLangId !== 'kikuyu') return [];
    const q = deferredProverbSearch.trim().toLowerCase();
    return getAllKikuyuProverbs().filter((p: any) => {
      if (proverbCategory !== 'All' && p.category !== proverbCategory) return false;
      if (!q) return true;
      return (
        (p.kikuyu || '').toLowerCase().includes(q) ||
        (p.translation || '').toLowerCase().includes(q) ||
        (p.explanation || '').toLowerCase().includes(q) ||
        (p.englishEquivalent || '').toLowerCase().includes(q) ||
        String(p.id) === q
      );
    });
  }, [showLanguageMenu, activeTab, selectedLangId, proverbCategory, deferredProverbSearch]);

  const filteredLuoProverbs = useMemo(() => {
    if (showLanguageMenu || activeTab !== 'proverbs' || selectedLangId !== 'luo' || luoSubTab !== 'proverbs') return [];
    const q = deferredProverbSearch.trim().toLowerCase();
    return getAllLuoProverbs().filter((p) => {
      if (proverbCategory !== 'All' && p.category !== proverbCategory) return false;
      if (!q) return true;
      return (
        p.luo.toLowerCase().includes(q) ||
        (p.english || '').toLowerCase().includes(q) ||
        (p.meaning || '').toLowerCase().includes(q)
      );
    });
  }, [showLanguageMenu, activeTab, selectedLangId, luoSubTab, proverbCategory, deferredProverbSearch]);

  const filteredLuoRiddles = useMemo(() => {
    if (showLanguageMenu || activeTab !== 'proverbs' || selectedLangId !== 'luo' || luoSubTab !== 'riddles') return [];
    const q = deferredProverbSearch.trim().toLowerCase();
    if (!q) return luoRiddles;
    return luoRiddles.filter(
      (r) =>
        r.luo.toLowerCase().includes(q) ||
        r.english.toLowerCase().includes(q) ||
        r.answer.toLowerCase().includes(q)
    );
  }, [showLanguageMenu, activeTab, selectedLangId, luoSubTab, deferredProverbSearch]);

  const filteredCulturalWisdom = useMemo(() => {
    if (showLanguageMenu || activeTab !== 'proverbs' || selectedLangId === 'kikuyu' || selectedLangId === 'luo') return [];
    const q = deferredProverbSearch.trim().toLowerCase();
    const baseItems = getCulturalWisdomForLanguageLazy(selectedLangId);
    const noteItems: CulturalWisdomItem[] = [];
    if (currentCourse) {
      const seen = new Set<string>();
      currentCourse.units.forEach((u) => {
        u.skills.forEach((s) => {
          if (
            s.culturalNote &&
            !s.culturalNote.startsWith('Source attribution:') &&
            !seen.has(s.culturalNote)
          ) {
            seen.add(s.culturalNote);
            const w0 = s.words[0];
            noteItems.push({
              id: `${selectedLangId}-note-${s.id}`,
              languageId: selectedLangId,
              nativeText: w0 ? `${w0.target} — "${w0.source}"` : s.title,
              literalTranslation: s.title,
              meaning: s.culturalNote,
              category: 'tradition',
            });
          }
        });
      });
    }
    const combined = [...baseItems, ...noteItems];
    return combined.filter((item) => {
      if (proverbCategory !== 'All' && item.category !== proverbCategory) return false;
      if (!q) return true;
      return (
        item.nativeText.toLowerCase().includes(q) ||
        item.literalTranslation.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        (item.englishEquivalent || '').toLowerCase().includes(q)
      );
    });
  }, [showLanguageMenu, activeTab, selectedLangId, currentCourse, proverbCategory, deferredProverbSearch]);

  if (lessonStage !== 'idle' && activeSkill) {
    const currentEx = exercises[exIndex];
    const progressRatio =
      lessonStage === 'learn'
        ? (learnCardIdx + 1) / Math.max(1, (teachingDeck.length > 0 ? teachingDeck : activeSkill.words).length)
        : lessonStage === 'practice'
        ? (exIndex + (isSubmitted ? 1 : 0)) / Math.max(1, exercises.length)
        : 1;

    return (
      <Modal
        visible={true}
        animationType="fade"
        accessibilityViewIsModal={true}
        onRequestClose={() => setLessonStage('idle')}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgPrimary }} edges={['top', 'left', 'right', 'bottom']}>
          <KenyaStripe />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
          <ScrollView
            ref={lessonScrollRef}
            contentContainerStyle={{ padding: 14, paddingBottom: 36 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={[styles.lessonContainer, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
              {/* Top Lesson Bar */}
        <View style={styles.lessonTopBar}>
          <Pressable
            android_ripple={ripple}
            onPress={() => setLessonStage('idle')}
            style={[styles.iconCircleBtn, { backgroundColor: colors.surfaceContainerHigh }]}
          >
            <Feather name="x" size={18} color={colors.text} />
          </Pressable>

          <View style={styles.lessonProgressTrackWrap}>
            <View style={[styles.lessonProgressTrack, { backgroundColor: colors.surfaceContainerHighest }]}>
              <View
                style={[
                  styles.lessonProgressFill,
                  { width: `${Math.min(100, Math.round(progressRatio * 100))}%`, backgroundColor: langColor },
                ]}
              />
            </View>
            <Text style={[styles.lessonProgressLabel, { color: colors.textMuted }]}>
              {lessonStage === 'learn'
                ? `Level ${activeLessonLevel} • Card ${learnCardIdx + 1}/${(teachingDeck.length > 0 ? teachingDeck : activeSkill.words).length}`
                : lessonStage === 'practice'
                ? `Exercise ${exIndex + 1}/${exercises.length}`
                : 'Complete'}
            </Text>
          </View>
        </View>

        {/* STAGE 1: LEARN FIRST (TEACHING WALKTHROUGH + GRAMMAR TIPS) */}
        {lessonStage === 'learn' && (
          <View style={styles.stageBody}>
            <View style={styles.learnHeaderRow}>
              <View style={[styles.stagePill, { backgroundColor: `${langColor}20` }]}>
                <Feather name="book-open" size={13} color={langColor} />
                <Text style={[styles.stagePillText, { color: langColor }]}>
                  Step 1: Study New Words
                </Text>
              </View>

              {activeSkill.tips ? (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setShowTipsPanel((v) => !v)}
                  style={[
                    styles.tipsToggleBtn,
                    {
                      backgroundColor: showTipsPanel
                        ? colors.primaryContainer
                        : colors.surfaceContainerHigh,
                    },
                  ]}
                >
                  <Feather name="info" size={13} color={showTipsPanel ? colors.gold : colors.textSecondary} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '700',
                      color: showTipsPanel ? colors.gold : colors.textSecondary,
                    }}
                  >
                    {showTipsPanel ? 'Hide Grammar Tips' : 'Grammar Tips'}
                  </Text>
                </Pressable>
              ) : null}
            </View>

            {showTipsPanel && activeSkill.tips ? (
              <View
                style={[
                  styles.tipsDrawerCard,
                  { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.tipsDrawerTitle, { color: colors.gold }]}>
                  Grammar & Usage Notes
                </Text>
                <Text style={[styles.tipsDrawerBody, { color: colors.textSecondary }]}>
                  {activeSkill.tips}
                </Text>
              </View>
            ) : null}

            {/* Active Teaching Card */}
            {(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx] ? (
              <View
                style={[
                  styles.teachCard,
                  { backgroundColor: colors.surface, borderColor: langColor },
                ]}
              >
                {(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].partOfSpeech ? (
                  <View style={[styles.posTag, { backgroundColor: `${langColor}18` }]}>
                    <Text style={[styles.posTagText, { color: langColor }]}>
                      {(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].partOfSpeech}
                    </Text>
                  </View>
                ) : null}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <Text style={[styles.teachTargetWord, { color: colors.text }]}>
                    {(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].target}
                  </Text>
                  {hasVerifiedAudio({
                    translation: (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].target,
                    audioFile: (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].audioFile || (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].audio,
                  }) ? (
                    <Pressable
                      onPress={() =>
                        playVerifiedAudio({
                          translation: (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].target,
                          audioFile: (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].audioFile || (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].audio,
                        })
                      }
                      accessibilityRole="button"
                      accessibilityLabel={`Play verified recording for ${(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].target}`}
                      hitSlop={10}
                      style={{
                        padding: 6,
                        borderRadius: 999,
                        backgroundColor: `${langColor}18`,
                      }}
                    >
                      <Ionicons name="volume-high-outline" size={20} color={langColor} />
                    </Pressable>
                  ) : null}
                </View>

                {(() => {
                  const currentWord = (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx];
                  const pron = (currentWord.pronunciation || "").trim();
                  const isPosOnly = ["noun", "verb", "adjective", "adj", "adverb", "pronoun", "preposition", "conjunction", "interjection"].includes(
                    pron.toLowerCase()
                  );
                  if (isPosOnly || !pron) return null;
                  return (
                    <Text style={[styles.teachPronunciation, { color: langColor }]}>
                      [{pron}]
                    </Text>
                  );
                })()}

                <View style={[styles.teachDivider, { backgroundColor: colors.outlineVariant }]} />

                <Text style={[styles.teachSourceMeaning, { color: colors.text }]}>
                  {(teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx].source}
                </Text>

                {(() => {
                  const currentWord = (teachingDeck.length > 0 ? teachingDeck : activeSkill.words)[learnCardIdx];
                  if (!currentWord.example) return null;
                  const ex = currentWord.example.trim();
                  const targetNorm = currentWord.target.trim().toLowerCase();
                  const sourceNorm = currentWord.source.trim().toLowerCase();
                  const exNorm = ex.toLowerCase();
                  if (
                    exNorm === `${targetNorm} — ${sourceNorm}` ||
                    exNorm === `${targetNorm} - ${sourceNorm}` ||
                    exNorm === `${targetNorm}: ${sourceNorm}`
                  ) {
                    return null;
                  }
                  return (
                    <View
                      style={[
                        styles.teachExampleBox,
                        { backgroundColor: colors.surfaceContainerHigh },
                      ]}
                    >
                      <Text style={[styles.teachExampleLabel, { color: colors.textMuted }]}>
                        EXAMPLE IN CONTEXT
                      </Text>
                      <Text style={[styles.teachExampleText, { color: colors.textSecondary }]}>
                        {ex}
                      </Text>
                    </View>
                  );
                })()}
              </View>
            ) : null}

            {/* Navigation Row */}
              <View style={styles.learnNavRow}>
              <Pressable
                android_ripple={ripple}
                disabled={learnCardIdx === 0}
                onPress={() => setLearnCardIdx((i) => Math.max(0, i - 1))}
                style={[
                  styles.m3OutlinedBtn,
                  {
                    borderColor: colors.outlineVariant,
                    opacity: learnCardIdx === 0 ? 0.4 : 1,
                  },
                ]}
              >
                <Feather name="chevron-left" size={16} color={colors.text} />
                <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Prev</Text>
              </Pressable>

              <Pressable
                android_ripple={ripple}
                onPress={() => setLessonStage('practice')}
                style={[styles.m3TonalBtn, { backgroundColor: colors.surfaceContainerHighest }]}
              >
                <Text style={[styles.m3TonalBtnText, { color: colors.textSecondary }]}>
                  Skip to Quiz
                </Text>
              </Pressable>

              {learnCardIdx + 1 < (teachingDeck.length > 0 ? teachingDeck : activeSkill.words).length ? (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setLearnCardIdx((i) => i + 1)}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Next Word</Text>
                  <Feather name="chevron-right" size={16} color="#000" />
                </Pressable>
              ) : (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setLessonStage('practice')}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Start Practice</Text>
                  <Feather name="play" size={15} color="#000" />
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* STAGE 2: 15-EXERCISE INTERACTIVE PRACTICE LOOP */}
        {lessonStage === 'practice' && currentEx && (
          <View style={styles.stageBody}>
            <View style={styles.practiceMetaRow}>
              <View style={[styles.stagePill, { backgroundColor: `${langColor}18` }]}>
                <Feather name="zap" size={13} color={langColor} />
                <Text style={[styles.stagePillText, { color: langColor }]}>
                  {currentEx.type.replace(/_/g, ' ').toUpperCase()}
                </Text>
              </View>
              {streakCount >= 2 && (
                <View style={[styles.streakComboPill, { backgroundColor: 'rgba(245,158,11,0.16)' }]}>
                  <Text style={{ fontSize: 11, fontWeight: '800', color: '#F59E0B' }}>
                    {streakCount} in a row!
                  </Text>
                </View>
              )}
            </View>

            <Text style={[styles.quizPrompt, { color: colors.text }]}>{currentEx.prompt}</Text>
            {currentEx.sourceWord &&
            hasVerifiedAudio({
              translation: currentEx.sourceWord.target,
              audioFile: currentEx.sourceWord.audioFile || currentEx.sourceWord.audio,
            }) ? (
              <Pressable
                onPress={() =>
                  playVerifiedAudio({
                    translation: currentEx.sourceWord!.target,
                    audioFile: currentEx.sourceWord!.audioFile || currentEx.sourceWord!.audio,
                  })
                }
                accessibilityRole="button"
                accessibilityLabel="Play verified native-speaker recording"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  gap: 6,
                  marginTop: 8,
                  marginBottom: 4,
                  paddingHorizontal: 12,
                  paddingVertical: 7,
                  borderRadius: 999,
                  backgroundColor: `${langColor}18`,
                  borderWidth: 1,
                  borderColor: `${langColor}45`,
                }}
              >
                <Ionicons name="volume-high-outline" size={17} color={langColor} />
                <Text style={{ fontSize: 13, fontWeight: '700', color: langColor }}>
                  Play Native Audio
                </Text>
              </Pressable>
            ) : null}

            {currentEx.sourceWord &&
              (currentEx.type === 'translate_to_target' ||
                currentEx.type === 'translate_to_english' ||
                currentEx.type === 'word_bank') && (
                <View style={{ marginVertical: 8, paddingHorizontal: 2 }}>
                  <Text style={{ fontSize: 20, fontWeight: '800', color: colors.gold }}>
                    {currentEx.type === 'translate_to_target'
                      ? currentEx.sourceWord.source
                      : currentEx.sourceWord.target}
                  </Text>
                </View>
              )}

            {showHint && currentEx.hint ? (
              <View style={[styles.hintBanner, { backgroundColor: colors.surfaceContainerHigh }]}>
                <Feather name="help-circle" size={14} color={colors.gold} />
                <Text style={[styles.hintBannerText, { color: colors.textSecondary }]}>
                  Hint: {currentEx.hint}
                </Text>
              </View>
            ) : null}

            {/* 1. Multiple Choice & Fill Blank */}
            {(currentEx.type === 'multiple_choice' || currentEx.type === 'fill_blank') &&
              currentEx.options && (
                <View style={styles.optionsList}>
                  {currentEx.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isRightOption = opt.toLowerCase() === currentEx.correctAnswer.toLowerCase();
                    let bg = colors.surface;
                    let border = colors.outlineVariant;
                    if (isSubmitted) {
                      if (isRightOption) {
                        bg = 'rgba(16,185,129,0.16)';
                        border = '#10B981';
                      } else if (isSelected) {
                        bg = 'rgba(239,68,68,0.16)';
                        border = '#EF4444';
                      }
                    } else if (isSelected) {
                      bg = `${langColor}22`;
                      border = langColor;
                    }

                    return (
                      <Pressable
                        key={`${opt}-${idx}`}
                        android_ripple={ripple}
                        disabled={isSubmitted}
                        onPress={() => setSelectedAnswer(opt)}
                        style={[styles.optionButton, { backgroundColor: bg, borderColor: border }]}
                      >
                        <View
                          style={[
                            styles.optionNumberBadge,
                            {
                              backgroundColor: isSelected ? langColor : colors.surfaceContainerHigh,
                            },
                          ]}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '800',
                              color: isSelected ? '#000' : colors.textSecondary,
                            }}
                          >
                            {idx + 1}
                          </Text>
                        </View>
                        <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              )}

            {/* 2. Word Bank & Sentence Reorder */}
            {(currentEx.type === 'word_bank' || currentEx.type === 'reorder') && (
              <View style={{ gap: 14 }}>
                <View
                  style={[
                    styles.wordBankAnswerZone,
                    {
                      backgroundColor: colors.surface,
                      borderColor: isSubmitted
                        ? isCorrect
                          ? '#10B981'
                          : '#EF4444'
                        : colors.outlineVariant,
                    },
                  ]}
                >
                  {wordBankSelected.length === 0 ? (
                    <Text style={{ color: colors.textMuted, fontSize: 13 }}>
                      Tap words below to build your answer...
                    </Text>
                  ) : (
                    <View style={styles.wordChipsWrap}>
                      {wordBankSelected.map((word, idx) => (
                        <Pressable
                          key={`sel-${word}-${idx}`}
                          disabled={isSubmitted}
                          onPress={() => {
                            const nextSel = [...wordBankSelected];
                            nextSel.splice(idx, 1);
                            setWordBankSelected(nextSel);
                            setWordBankRemaining((prev) => [...prev, word]);
                          }}
                          style={[styles.wordTile, { backgroundColor: langColor }]}
                        >
                          <Text style={{ color: '#000', fontWeight: '700', fontSize: 14 }}>
                            {word}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>

                <View style={styles.wordChipsWrap}>
                  {wordBankRemaining.map((word, idx) => (
                    <Pressable
                      key={`rem-${word}-${idx}`}
                      disabled={isSubmitted}
                      onPress={() => {
                        const nextRem = [...wordBankRemaining];
                        nextRem.splice(idx, 1);
                        setWordBankRemaining(nextRem);
                        setWordBankSelected((prev) => [...prev, word]);
                      }}
                      style={[
                        styles.wordTile,
                        {
                          backgroundColor: colors.surfaceContainerHigh,
                          borderWidth: 1,
                          borderColor: colors.outlineVariant,
                        },
                      ]}
                    >
                      <Text style={{ color: colors.text, fontWeight: '600', fontSize: 14 }}>
                        {word}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            )}

            {/* 3. Match Pairs */}
            {currentEx.type === 'match_pairs' && currentEx.pairs && (
              <View style={styles.matchPairsGrid}>
                <View style={styles.matchColumn}>
                  <Text style={[styles.matchColumnHeader, { color: colors.textMuted }]}>
                    {currentCourse?.config.name}
                  </Text>
                  {currentEx.pairs.map((p, idx) => {
                    const isDone = matchedPairs.has(idx);
                    const isSelected = matchLeftIdx === idx;
                    return (
                      <Pressable
                        key={`left-${idx}`}
                        disabled={isDone}
                        onPress={() => setMatchLeftIdx(idx)}
                        style={[
                          styles.matchPairCard,
                          {
                            backgroundColor: isDone
                              ? 'rgba(16,185,129,0.14)'
                              : isSelected
                              ? `${langColor}26`
                              : colors.surface,
                            borderColor: isDone
                              ? '#10B981'
                              : isSelected
                              ? langColor
                              : colors.outlineVariant,
                            opacity: isDone ? 0.55 : 1,
                          },
                        ]}
                      >
                        <Text style={[styles.matchPairText, { color: colors.text }]}>
                          {(p as any).left || (p as any).target}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>

                <View style={styles.matchColumn}>
                  <Text style={[styles.matchColumnHeader, { color: colors.textMuted }]}>
                    English
                  </Text>
                  {matchRightOrder.map((pairIdx) => {
                    const pair = currentEx.pairs![pairIdx];
                    if (!pair) return null;
                    const isDone = matchedPairs.has(pairIdx);
                    return (
                      <Pressable
                        key={`right-${pairIdx}`}
                        disabled={isDone || matchLeftIdx === null}
                        onPress={() => handleMatchRightPress(pairIdx)}
                        style={[
                          styles.matchPairCard,
                          {
                            backgroundColor: isDone
                              ? 'rgba(16,185,129,0.14)'
                              : matchWrongFlash
                              ? 'rgba(239,68,68,0.15)'
                              : colors.surface,
                            borderColor: isDone ? '#10B981' : colors.outlineVariant,
                            opacity: isDone ? 0.55 : 1,
                          },
                        ]}
                      >
                        <Text style={[styles.matchPairText, { color: colors.text }]}>
                          {(pair as any).right || (pair as any).source}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            )}

            {/* 4. Free-Text Translation (translate_to_english / translate_to_target / optionless fill_blank) */}
            {(currentEx.type === "translate_to_english" ||
              currentEx.type === "translate_to_target" ||
              (currentEx.type === "fill_blank" && (!currentEx.options || currentEx.options.length === 0))) && (
              <View style={{ gap: 10 }}>
                {!isSubmitted && (
                  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                    {KENYAN_SPECIAL_CHARS.map((ch) => (
                      <Pressable
                        key={ch}
                        onPress={() => setTypedAnswer((prev) => prev + ch)}
                        style={{
                          paddingHorizontal: 9,
                          paddingVertical: 5,
                          borderRadius: 8,
                          borderWidth: 1,
                          borderColor: colors.outlineVariant,
                          backgroundColor: colors.surface,
                        }}
                      >
                        <Text style={{ fontSize: 12, fontWeight: "800", color: langColor }}>
                          {ch}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                )}
                <View style={{ position: 'relative', justifyContent: 'center' }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={typedAnswer}
                    onChangeText={setTypedAnswer}
                    editable={!isSubmitted}
                    placeholder={
                      currentEx.type === 'translate_to_target'
                        ? `Type in ${currentCourse?.config.name}...`
                        : 'Type in English...'
                    }
                    placeholderTextColor={colors.textMuted}
                    returnKeyType="done"
                    onSubmitEditing={() => {
                      if (!isSubmitted && typedAnswer.trim()) {
                        handleCheckExercise();
                      }
                    }}
                    style={[
                      styles.translationInput,
                      {
                        paddingRight: 38,
                        backgroundColor: colors.surface,
                        color: colors.text,
                        borderColor: isSubmitted
                          ? isCorrect
                            ? '#10B981'
                            : '#EF4444'
                          : colors.outlineVariant,
                      },
                    ]}
                  />
                  {typedAnswer.length > 0 && !isSubmitted && (
                    <Pressable
                      onPress={() => setTypedAnswer('')}
                      accessibilityRole="button"
                      accessibilityLabel="Clear answer"
                      hitSlop={8}
                      style={{ position: 'absolute', right: 12 }}
                    >
                      <Feather name="x-circle" size={16} color={colors.textMuted} />
                    </Pressable>
                  )}
                </View>
              </View>
            )}

            {/* Feedback Banner */}
            {isSubmitted && (
              <View
                style={[
                  styles.feedbackBanner,
                  {
                    backgroundColor: isCorrect
                      ? 'rgba(16,185,129,0.14)'
                      : 'rgba(239,68,68,0.14)',
                    borderColor: isCorrect ? '#10B981' : '#EF4444',
                  },
                ]}
              >
                <Feather
                  name={isCorrect ? 'check-circle' : 'alert-circle'}
                  size={18}
                  color={isCorrect ? '#10B981' : '#EF4444'}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 14,
                      color: isCorrect ? '#10B981' : '#EF4444',
                    }}
                  >
                    {isCorrect
                      ? almostCorrect
                        ? 'Correct! (Watch the spelling)'
                        : 'Spot on!'
                      : 'Not quite right'}
                  </Text>
                  {(!isCorrect || almostCorrect) && (
                    <Text style={{ fontSize: 13, color: colors.text, marginTop: 2 }}>
                      Answer: <Text style={{ fontWeight: '700' }}>{currentEx.correctAnswer}</Text>
                    </Text>
                  )}
                </View>
              </View>
            )}

            {/* Action Row: Hint / Skip / Check / Continue */}
            <View style={styles.practiceActionRow}>
              {!isSubmitted ? (
                <>
                  {currentEx.hint && !showHint ? (
                    <Pressable
                      android_ripple={ripple}
                      onPress={() => setShowHint(true)}
                      style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                    >
                      <Feather name="help-circle" size={15} color={colors.textSecondary} />
                      <Text style={[styles.m3OutlinedBtnText, { color: colors.textSecondary }]}>
                        Hint
                      </Text>
                    </Pressable>
                  ) : null}

                  <Pressable
                    android_ripple={ripple}
                    onPress={handleSkipExercise}
                    style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                  >
                    <Text style={[styles.m3OutlinedBtnText, { color: colors.textSecondary }]}>
                      Skip
                    </Text>
                  </Pressable>

                  {currentEx.type !== 'match_pairs' && (
                    <Pressable
                      android_ripple={ripple}
                      onPress={handleCheckExercise}
                      style={[
                        styles.m3FilledBtn,
                        { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                      ]}
                    >
                      <Text style={styles.m3FilledBtnText}>Check Answer</Text>
                    </Pressable>
                  )}
                </>
              ) : (
                <Pressable
                  android_ripple={ripple}
                  onPress={handleNextExercise}
                  style={[
                    styles.m3FilledBtn,
                    { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                  ]}
                >
                  <Text style={styles.m3FilledBtnText}>
                    {exIndex + 1 < exercises.length ? 'Continue' : 'Finish Lesson'}
                  </Text>
                  <Feather name="arrow-right" size={16} color="#000" />
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* STAGE 3: LESSON COMPLETE SUMMARY & CULTURAL NOTE */}
        {lessonStage === 'complete' && (
          <View style={styles.stageBody}>
            <View style={styles.completeHero}>
              <View style={[styles.completeBadgeCircle, { backgroundColor: `${langColor}22` }]}>
                <Feather name="award" size={36} color={langColor} />
              </View>
              <Text style={[styles.completeTitle, { color: colors.text }]}>Lesson Complete!</Text>
              <Text style={[styles.completeSubtitle, { color: colors.textSecondary }]}>
                {activeSkill.title}
              </Text>
            </View>

            <View style={styles.completeMetricsRow}>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: langColor }]}>+{xpEarned}</Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  XP EARNED
                </Text>
              </View>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: '#10B981' }]}>
                  {Math.round((correctCount / Math.max(1, exercises.length)) * 100)}%
                </Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  ACCURACY
                </Text>
              </View>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: '#F59E0B' }]}>
                  {progress.streak}
                </Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  DAY STREAK
                </Text>
              </View>
            </View>

            {activeSkill.culturalNote ? (
              <View
                style={[
                  styles.culturalNoteBox,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Feather name="compass" size={14} color={langColor} />
                  <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                    Cultural & Historical Context
                  </Text>
                </View>
                <Text style={{ fontSize: 13, lineHeight: 19, color: colors.textSecondary }}>
                  {activeSkill.culturalNote}
                </Text>
              </View>
            ) : null}

            {missedItems.length > 0 && (
              <View
                style={[
                  styles.missedReviewBox,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={{ fontSize: 12, fontWeight: '800', color: colors.text }}>
                  Review Missed Items ({missedItems.length})
                </Text>
                {missedItems.map((m, idx) => (
                  <View key={idx} style={{ marginTop: 4 }}>
                    <Text style={{ fontSize: 12, color: colors.textSecondary }}>{m.prompt}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: '#10B981' }}>
                      → {m.correct}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <View style={styles.learnNavRow}>
              <Pressable
                android_ripple={ripple}
                onPress={() => startSkillLesson(activeSkill, true)}
                style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
              >
                <Feather name="refresh-cw" size={15} color={colors.text} />
                <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Practice Again</Text>
              </Pressable>

              <Pressable
                android_ripple={ripple}
                onPress={() => setLessonStage('idle')}
                style={[
                  styles.m3FilledBtn,
                  { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                ]}
              >
                <Text style={styles.m3FilledBtnText}>Back to Course Path</Text>
              </Pressable>
            </View>
          </View>
        )}
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    );
  }

  // ============================================================================
  // LANGUAGE SELECTION MENU (FIRST VIEW IN MOBILE LEARN TAB)
  // ============================================================================
  if (showLanguageMenu) {
    return (
      <View style={styles.container}>
        {/* Learner Summary & Welcome Banner */}
        <View style={{ gap: 12 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 999,
                backgroundColor: `${colors.gold}20`,
                borderWidth: 1,
                borderColor: `${colors.gold}45`,
                flexShrink: 0,
              }}
            >
              <Feather name="globe" size={12} color={colors.gold} />
              <Text numberOfLines={1} style={{ fontSize: 11, fontWeight: '800', color: colors.gold }}>
                {PUBLISHED_COURSE_SUMMARIES.length} Courses
              </Text>
            </View>
            {overallMenuStats.totalXp > 0 && overallMenuStats.resumeCourse && (
              <Pressable
                android_ripple={ripple}
                onPress={() => handleSelectLanguageFromMenu(overallMenuStats.resumeCourse.config.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  paddingHorizontal: 11,
                  paddingVertical: 5,
                  borderRadius: 999,
                  backgroundColor: colors.gold,
                  flexShrink: 1,
                }}
              >
                <Text numberOfLines={1} style={{ fontSize: 11.5, fontWeight: '800', color: '#000', flexShrink: 1 }}>
                  Resume {overallMenuStats.resumeCourse.config.name}
                </Text>
                <Feather name="arrow-right" size={13} color="#000" />
              </Pressable>
            )}
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '800', color: colors.text, lineHeight: 24 }}>
              Choose a Kenyan Language to Learn
            </Text>
            <Text style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 19, marginTop: 4 }}>
              Select any of {PUBLISHED_COURSE_SUMMARIES.length} interactive courses below to unlock guided skill trees, flashcards, phonetic guides, grammar tables, mini-games, and oral proverbs.
            </Text>
          </View>

          {/* 3-Column Learner Summary (Compact) */}
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.surfaceContainerHigh,
                borderRadius: 10,
                paddingVertical: 5.5,
                paddingHorizontal: 6,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.outlineVariant,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Feather name="zap" size={11} color={colors.gold} />
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 13, fontWeight: '800', color: colors.gold }}>
                  {overallMenuStats.totalXp}
                </Text>
              </View>
              <Text numberOfLines={1} style={{ fontSize: 9.5, color: colors.textMuted, marginTop: 1, fontWeight: '700' }}>
                Total XP
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: colors.surfaceContainerHigh,
                borderRadius: 10,
                paddingVertical: 5.5,
                paddingHorizontal: 6,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.outlineVariant,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Feather name="trending-up" size={11} color="#F59E0B" />
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 13, fontWeight: '800', color: '#F59E0B' }}>
                  {overallMenuStats.bestStreak}d
                </Text>
              </View>
              <Text numberOfLines={1} style={{ fontSize: 9.5, color: colors.textMuted, marginTop: 1, fontWeight: '700' }}>
                Best Streak
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: colors.surfaceContainerHigh,
                borderRadius: 10,
                paddingVertical: 5.5,
                paddingHorizontal: 6,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.outlineVariant,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Feather name="award" size={11} color="#10B981" />
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 13, fontWeight: '800', color: '#10B981' }}>
                  {overallMenuStats.totalWords}
                </Text>
              </View>
              <Text numberOfLines={1} style={{ fontSize: 9.5, color: colors.textMuted, marginTop: 1, fontWeight: '700' }}>
                Words Learned
              </Text>
            </View>
          </View>
        </View>

        {/* Search & Language Family Filter Controls (Compact) */}
        <View style={{ gap: 7 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.surfaceContainerHigh,
              borderColor: colors.outlineVariant,
              borderWidth: 1,
              borderRadius: 999,
              paddingHorizontal: 12,
              minHeight: 38,
              gap: 7,
            }}
          >
            <Feather name="search" size={14} color={colors.gold} />
            <TextInput
              key={`menu-search-${themeKey}`}
              value={menuSearchQuery}
              onChangeText={setMenuSearchQuery}
              placeholder="Search language or county..."
              placeholderTextColor={colors.textMuted}
              style={{
                flex: 1,
                minWidth: 0,
                fontSize: 12.5,
                color: colors.text,
                paddingVertical: 6,
                paddingHorizontal: 0,
              }}
              autoCorrect={false}
            />
            {menuSearchQuery.length > 0 && (
              <Pressable onPress={() => setMenuSearchQuery('')} hitSlop={8}>
                <Feather name="x-circle" size={15} color={colors.textMuted} />
              </Pressable>
            )}
          </View>

          <ExpandablePillRow
            fadeColor={colors.bgPrimary}
            contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
          >
            {menuFamilies.map((fam) => {
              const active = menuFamilyFilter === fam;
              const count = MENU_FAMILY_COUNTS[fam] || 0;
              return (
                <Pressable
                  key={fam}
                  android_ripple={ripple}
                  accessibilityState={{ selected: active }}
                  onPress={() => setMenuFamilyFilter(fam)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    paddingHorizontal: 11,
                    paddingVertical: 5,
                    minHeight: 30,
                    borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: active
                      ? colors.primaryContainer
                      : colors.surfaceContainer,
                    borderColor: active ? colors.gold : colors.outlineVariant,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11.5,
                      fontWeight: active ? '800' : '600',
                      color: active ? colors.gold : colors.textSecondary,
                    }}
                  >
                    {fam === 'All' ? `All Families (${count})` : `${fam} (${count})`}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>
        </View>

        {/* Language Courses Directory Cards (Compact) */}
        <View style={{ gap: 9 }}>
          {filteredMenuCourses.map((course) => {
            const { config } = course;
            const iden = getLanguageIdentity(config.id);
            const canonical = getCanonicalCourseCounts(course);
            const unitsCount = canonical.totalUnits;
            const skillsCount = canonical.totalSkills;
            const wordsCount = canonical.totalWords;
            const courseProg = allProgress[config.id];
            const courseXp = courseProg?.totalXP || 0;
            const completedSkillsCount = courseProg
              ? Object.values(courseProg.skills || {}).filter((sk) => sk.level >= 1).length
              : 0;
            const showNative =
              config.nativeName &&
              !config.name.toLowerCase().includes(config.nativeName.toLowerCase());

            return (
              <Pressable
                key={config.id}
                android_ripple={ripple}
                onPress={() => handleSelectLanguageFromMenu(config.id)}
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderColor: courseXp > 0 ? `${config.color}88` : `${config.color}45`,
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 12,
                  gap: 7,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <View style={{ flex: 1, gap: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 5 }}>
                      <View
                        style={{
                          paddingHorizontal: 7.5,
                          paddingVertical: 2,
                          borderRadius: 999,
                          backgroundColor: `${config.color}20`,
                          borderWidth: 1,
                          borderColor: `${config.color}45`,
                        }}
                      >
                        <Text style={{ fontSize: 10, fontWeight: '800', color: config.color }}>
                          “{iden.greeting}”
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: 7,
                          paddingVertical: 2,
                          borderRadius: 999,
                          backgroundColor: colors.surfaceContainerHigh,
                          borderWidth: 1,
                          borderColor: colors.outlineVariant,
                        }}
                      >
                        <Text style={{ fontSize: 10, fontWeight: '600', color: colors.textSecondary }}>
                          {iden.region}
                        </Text>
                      </View>
                    </View>

                    <Text style={{ fontSize: 15.5, fontWeight: '800', color: colors.text, lineHeight: 20 }}>
                      {config.name}
                      {showNative ? (
                        <Text style={{ fontSize: 12.5, fontWeight: '500', color: colors.textMuted }}>
                          {` (${config.nativeName})`}
                        </Text>
                      ) : null}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                      paddingHorizontal: 10,
                      paddingVertical: 5.5,
                      borderRadius: 10,
                      backgroundColor: courseXp > 0 ? config.color : `${colors.gold}20`,
                      borderWidth: 1,
                      borderColor: courseXp > 0 ? config.color : `${colors.gold}45`,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11.5,
                        fontWeight: '800',
                        color: courseXp > 0 ? '#000' : colors.gold,
                      }}
                    >
                      {courseXp > 0 ? 'Continue' : 'Start'}
                    </Text>
                    <Feather
                      name="arrow-right"
                      size={12}
                      color={courseXp > 0 ? '#000' : colors.gold}
                    />
                  </View>
                </View>

                <Text numberOfLines={2} style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>
                  {config.description}
                </Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                      paddingHorizontal: 7.5,
                      paddingVertical: 3,
                      borderRadius: 999,
                      backgroundColor: colors.surfaceContainerHigh,
                      borderWidth: 1,
                      borderColor: colors.outlineVariant,
                    }}
                  >
                    <Feather name="book-open" size={10.5} color="#10B981" />
                    <Text style={{ fontSize: 10.5, fontWeight: '700', color: '#10B981' }}>
                      {unitsCount} units · {skillsCount} modules · {wordsCount.toLocaleString()} words
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                      paddingHorizontal: 7.5,
                      paddingVertical: 3,
                      borderRadius: 999,
                      backgroundColor: colors.surfaceContainerHigh,
                      borderWidth: 1,
                      borderColor: colors.outlineVariant,
                    }}
                  >
                    <Feather name="users" size={10.5} color={colors.gold} />
                    <Text style={{ fontSize: 10.5, fontWeight: '600', color: colors.textSecondary }}>
                      {config.speakers}
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingHorizontal: 7.5,
                      paddingVertical: 3,
                      borderRadius: 999,
                      backgroundColor: colors.surfaceContainerHigh,
                      borderWidth: 1,
                      borderColor: colors.outlineVariant,
                    }}
                  >
                    <Text style={{ fontSize: 10.5, fontWeight: '600', color: colors.textMuted }}>
                      {config.family}
                    </Text>
                  </View>
                </View>

                {courseXp > 0 && (
                  <View
                    style={{
                      marginTop: 2,
                      paddingTop: 7,
                      borderTopWidth: 1,
                      borderTopColor: colors.outlineVariant,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        height: 5.5,
                        borderRadius: 999,
                        backgroundColor: colors.surfaceContainerHighest,
                        overflow: 'hidden',
                      }}
                    >
                      <View
                        style={{
                          height: '100%',
                          borderRadius: 999,
                          backgroundColor: config.color,
                          width: `${Math.min(
                            100,
                            Math.max(8, Math.round((completedSkillsCount / Math.max(1, skillsCount)) * 100))
                          )}%`,
                        }}
                      />
                    </View>
                    <Text style={{ fontSize: 11, fontWeight: '800', color: colors.gold }}>
                      ⚡ {courseXp} XP
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Kenyan Sign Language (KSL) — Fast, Paginated In-App Video Studio */}
        {(() => {
          if (allKslVideos.length === 0) return null;
          const KSL_PAGE_SIZE = 15;
          const totalPages = Math.max(1, Math.ceil(filteredKslVideos.length / KSL_PAGE_SIZE));
          const safePage = Math.min(kslPage, totalPages);
          const pageStart = (safePage - 1) * KSL_PAGE_SIZE;
          const pageVideos = filteredKslVideos.slice(pageStart, pageStart + KSL_PAGE_SIZE);
          const activeIdx = filteredKslVideos.findIndex((v) => v.id === activeKslVideoId);
          const activeKsl = (activeIdx >= 0 ? filteredKslVideos[activeIdx] : filteredKslVideos[0]) || null;
          const handleSpeedChange = (spd: number) => {
            setKslPlaybackRate(spd);
          };

          return (
            <View
              style={{
                marginTop: 14,
                backgroundColor: colors.surfaceContainer,
                borderColor: `${colors.kenyaGreen}45`,
                borderWidth: 1,
                borderRadius: 16,
                padding: 14,
                gap: 10,
              }}
            >
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.kenyaGreen, letterSpacing: 0.6 }}>
                  KENYAN SIGN LANGUAGE (KSL)
                </Text>
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15, color: colors.text }}>
                  In-App KSL Video Studio ({kslCategoryCounts.total.toLocaleString()} signs)
                </Text>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>
                  Browse KSL signs by letter, category, or search with instant slow-motion playback.
                </Text>
              </View>

              {/* Web-Parity KSL Studio Mode Switcher */}
              <View style={{ flexDirection: 'row', gap: 6 }}>
                {(
                  [
                    { id: 'browse', label: 'Browse Signs' },
                    { id: 'quiz', label: 'Sign Quiz' },
                    { id: 'spell', label: 'A–Z Speller' },
                  ] as const
                ).map((md) => {
                  const act = kslStudioMode === md.id;
                  return (
                    <Pressable
                      key={md.id}
                      onPress={() => setKslStudioMode(md.id)}
                      style={{
                        flex: 1,
                        paddingVertical: 7,
                        borderRadius: 9,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: act ? colors.gold : colors.outlineVariant,
                        backgroundColor: act ? `${colors.gold}22` : colors.surface,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: act ? colors.gold : colors.textSecondary }}>
                        {md.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {kslStudioMode === 'quiz' && (() => {
                const vocabPool = allKslVideos.filter((v) => v.category === 'maseno-stickman' && v.videoUrl);
                const pool = vocabPool.length >= 4 ? vocabPool : allKslVideos;
                const qVid = pool[kslQuizIdx % Math.max(1, pool.length)];
                if (!qVid || pool.length < 4) return null;
                const qUrl = qVid.videoUrl;
                const targetLbl = (qVid.gloss || qVid.title).trim().toLowerCase();
                const others = pool.filter((v) => (v.gloss || v.title).trim().toLowerCase() !== targetLbl);
                const start = others.length > 3 ? (kslQuizIdx * 5) % (others.length - 3) : 0;
                const opts = [qVid, ...others.slice(start, start + 3)].sort((a, b) => (a.gloss || a.title).localeCompare(b.gloss || b.title));
                return (
                  <View style={{ gap: 8, backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.outlineVariant, padding: 10 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 6 }}>
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.gold }}>WATCH &amp; MATCH SIGN</Text>
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: colors.kenyaGreen }}>Score: {kslQuizScore.right}/{kslQuizScore.total}</Text>
                    </View>
                    <View style={{ height: 200, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000000' }}>
                      <KslVideoWebView
                        videoUrl={qUrl}
                        autoPlay
                        muted
                      />
                    </View>
                    <View style={{ gap: 6 }}>
                      {opts.map((opt) => {
                        const isCorrect = opt.id === qVid.id;
                        const isPicked = kslQuizPicked === opt.id;
                        const borderColor = kslQuizPicked
                          ? isCorrect ? colors.kenyaGreen : isPicked ? '#DC2626' : colors.outlineVariant
                          : colors.outlineVariant;
                        return (
                          <Pressable
                            key={opt.id}
                            disabled={Boolean(kslQuizPicked)}
                            onPress={() => {
                              setKslQuizPicked(opt.id);
                              setKslQuizScore((s) => ({ right: s.right + (isCorrect ? 1 : 0), total: s.total + 1 }));
                            }}
                            style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 10, borderWidth: 1, borderColor, backgroundColor: colors.surfaceContainer }}
                          >
                            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12.5, color: colors.text }} numberOfLines={1}>
                              {opt.gloss || opt.title}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                    {Boolean(kslQuizPicked) && (
                      <Pressable
                        onPress={() => { setKslQuizPicked(null); setKslQuizIdx((i) => i + 1); }}
                        style={{ backgroundColor: colors.gold, borderRadius: 10, paddingVertical: 10, alignItems: 'center' }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12.5, color: '#000000' }}>Next KSL Sign →</Text>
                      </Pressable>
                    )}
                  </View>
                );
              })()}

              {kslStudioMode === 'spell' && (() => {
                const letters = kslSpellWord.toUpperCase().split('').filter((c) => c >= 'A' && c <= 'Z');
                const safeI = letters.length > 0 ? Math.min(kslSpellIdx, letters.length - 1) : 0;
                const activeLtr = letters[safeI];
                const cueItem = KSL_ALPHABET.find((a) => a.letter === activeLtr);
                return (
                  <View style={{ gap: 8, backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.outlineVariant, padding: 10 }}>
                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.gold }}>FINGERSPELL ANY NAME OR WORD</Text>
                    <TextInput
                      value={kslSpellWord}
                      onChangeText={(t) => { setKslSpellWord(t.replace(/[^a-zA-Z\s]/g, '').slice(0, 20)); setKslSpellIdx(0); }}
                      placeholder="Type a word (e.g. NAIROBI)..."
                      placeholderTextColor={colors.textMuted}
                      style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 9, paddingHorizontal: 10, paddingVertical: 7, fontFamily: 'Inter_700Bold', fontSize: 13, color: colors.gold }}
                    />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                      {letters.map((ch, idx) => (
                        <Pressable
                          key={`${ch}-${idx}`}
                          onPress={() => setKslSpellIdx(idx)}
                          style={{ width: 34, height: 34, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: idx === safeI ? colors.gold : colors.outlineVariant, backgroundColor: idx === safeI ? colors.gold : colors.surfaceContainer }}
                        >
                          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13, color: idx === safeI ? '#000000' : colors.text }}>{ch}</Text>
                        </Pressable>
                      ))}
                    </View>
                    {cueItem && (
                      <View style={{ backgroundColor: colors.surfaceContainer, borderRadius: 9, padding: 10, gap: 4 }}>
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.gold }}>Letter {cueItem.letter}</Text>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>{cueItem.cue}</Text>
                      </View>
                    )}
                  </View>
                );
              })()}

              {kslStudioMode === 'browse' && (
              <>
              {/* Category Filter Tabs */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                {(
                  [
                    { id: 'all', label: `All (${kslCategoryCounts.total})` },
                    { id: 'maseno-stickman', label: `Sign Vocabulary (${kslCategoryCounts.maseno})` },
                    { id: 'human-sign-bible', label: `Signed Passages (${kslCategoryCounts.human})` },
                  ] as const
                ).map((t) => {
                  const isAct = kslTab === t.id;
                  return (
                    <Pressable
                      key={t.id}
                      onPress={() => {
                        setKslTab(t.id);
                        setKslLetter('ALL');
                        setKslPage(1);
                      }}
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        borderRadius: 9,
                        borderWidth: 1,
                        borderColor: isAct ? colors.kenyaGreen : colors.outlineVariant,
                        backgroundColor: isAct ? colors.kenyaGreen : colors.surface,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: isAct ? '#FFFFFF' : colors.text }}>
                        {t.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {/* Search KSL Signs (deferred for zero typing lag) */}
              <TextInput
                value={kslSearchQuery}
                onChangeText={(txt) => {
                  setKslSearchQuery(txt);
                  setKslPage(1);
                }}
                placeholder="Search KSL signs, words, or passages..."
                placeholderTextColor={colors.textMuted}
                style={{
                  backgroundColor: colors.surface,
                  borderWidth: 1,
                  borderColor: colors.outlineVariant,
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12.5,
                  color: colors.text,
                }}
              />

              {/* Horizontal A-Z Quick-Jump Bar */}
              {kslAvailableLetters.length > 1 && (
                <ScrollView horizontal showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"} contentContainerStyle={{ gap: 5, paddingVertical: 2 }}>
                  {['ALL', ...kslAvailableLetters].map((ltr) => {
                    const isAct = kslLetter === ltr;
                    return (
                      <Pressable
                        key={ltr}
                        onPress={() => {
                          setKslLetter(ltr);
                          setKslPage(1);
                        }}
                        style={{
                          minWidth: ltr === 'ALL' ? 40 : 28,
                          paddingHorizontal: 8,
                          paddingVertical: 5,
                          borderRadius: 8,
                          alignItems: 'center',
                          borderWidth: 1,
                          borderColor: isAct ? colors.gold : colors.outlineVariant,
                          backgroundColor: isAct ? `${colors.gold}22` : colors.surface,
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: isAct ? colors.gold : colors.textSecondary }}>
                          {ltr === 'ALL' ? 'All' : ltr}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              )}

              {/* In-App HTML5 Video Player (no WebView remount on speed change) */}
              {activeKsl && (
                <View style={{ gap: 8, backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.outlineVariant, padding: 10 }}>
                  <View style={{ height: 220, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000000' }}>
                    <KslVideoWebView
                      videoUrl={ensureFullDurationKslUrl(activeKsl)}
                      playbackRate={kslPlaybackRate}
                      autoPlay={kslAutoPlay}
                      domStorageEnabled
                    />
                  </View>

                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13.5, color: colors.text }} numberOfLines={2}>
                        {activeKsl.title}
                      </Text>
                      <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 11, color: colors.textMuted }}>
                        {activeKsl.source || (activeKsl.category === 'maseno-stickman' ? 'Maseno University KSL' : 'Signed Passages')}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 6 }}>
                      <Pressable
                        disabled={activeIdx <= 0}
                        onPress={() => {
                          if (activeIdx > 0) { setKslAutoPlay(true); setActiveKslVideoId(filteredKslVideos[activeIdx - 1].id); }
                        }}
                        style={{ paddingHorizontal: 8, paddingVertical: 5, borderRadius: 8, borderWidth: 1, borderColor: colors.outlineVariant, opacity: activeIdx <= 0 ? 0.4 : 1 }}
                      >
                        <Feather name="chevron-left" size={14} color={colors.text} />
                      </Pressable>
                      <Pressable
                        disabled={activeIdx < 0 || activeIdx + 1 >= filteredKslVideos.length}
                        onPress={() => {
                          if (activeIdx >= 0 && activeIdx + 1 < filteredKslVideos.length) {
                            setKslAutoPlay(true); setActiveKslVideoId(filteredKslVideos[activeIdx + 1].id);
                          }
                        }}
                        style={{ paddingHorizontal: 8, paddingVertical: 5, borderRadius: 8, borderWidth: 1, borderColor: colors.outlineVariant, opacity: activeIdx < 0 || activeIdx + 1 >= filteredKslVideos.length ? 0.4 : 1 }}
                      >
                        <Feather name="chevron-right" size={14} color={colors.text} />
                      </Pressable>
                    </View>
                  </View>

                  {/* Instant Playback Speed Pills */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.textMuted }}>Speed:</Text>
                    {[0.5, 0.75, 1].map((spd) => {
                      const act = kslPlaybackRate === spd;
                      return (
                        <Pressable
                          key={spd}
                          onPress={() => handleSpeedChange(spd)}
                          style={{
                            paddingHorizontal: 9,
                            paddingVertical: 4,
                            borderRadius: 7,
                            borderWidth: 1,
                            borderColor: act ? colors.kenyaGreen : colors.outlineVariant,
                            backgroundColor: act ? `${colors.kenyaGreen}20` : colors.surfaceContainer,
                          }}
                        >
                          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: act ? colors.kenyaGreen : colors.textSecondary }}>
                            {spd}x
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>

                  {(activeKsl.reference || activeKsl.transcript) && (
                    <View style={{ backgroundColor: colors.surfaceContainer, borderRadius: 8, padding: 9, gap: 3 }}>
                      {Boolean(activeKsl.reference) && (
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.kenyaGreen }}>
                          PASSAGE CONTEXT · {activeKsl.reference}
                        </Text>
                      )}
                      {Boolean(activeKsl.transcript) && (
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>
                          {activeKsl.transcript}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              )}

              {/* Fixed-Window Paginated KSL Video List (max 15 rows mounted -> 60fps zero lag) */}
              <View style={{ gap: 6 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.textMuted }}>
                    {filteredKslVideos.length === 0
                      ? '0 MATCHING SIGNS'
                      : `SHOWING ${pageStart + 1}–${Math.min(pageStart + KSL_PAGE_SIZE, filteredKslVideos.length)} OF ${filteredKslVideos.length}`}
                  </Text>
                  {totalPages > 1 && (
                    <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11, color: colors.gold }}>
                      Page {safePage} / {totalPages}
                    </Text>
                  )}
                </View>

                {pageVideos.map((vid) => {
                  const isPlaying = activeKsl?.id === vid.id;
                  return (
                    <Pressable
                      key={vid.id}
                      onPress={() => { setKslAutoPlay(true); setActiveKslVideoId(vid.id); }}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: isPlaying ? `${colors.kenyaGreen}15` : colors.surface,
                        borderWidth: 1,
                        borderColor: isPlaying ? colors.kenyaGreen : colors.outlineVariant,
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        gap: 8,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 12.5, color: colors.text }} numberOfLines={1}>
                          {vid.title}
                        </Text>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 10.5, color: colors.textMuted }}>
                          {vid.category === 'maseno-stickman' ? 'Sign Vocabulary' : (vid.reference ? `Signed Passage · ${vid.reference}` : 'Signed Passage')}
                        </Text>
                      </View>
                      <Feather name={isPlaying ? 'volume-2' : 'play-circle'} size={16} color={colors.kenyaGreen} />
                    </Pressable>
                  );
                })}

                {totalPages > 1 && (
                  <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
                    <Pressable
                      disabled={safePage <= 1}
                      onPress={() => setKslPage((p) => Math.max(1, p - 1))}
                      style={{
                        flex: 1,
                        paddingVertical: 9,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: colors.outlineVariant,
                        backgroundColor: colors.surface,
                        alignItems: 'center',
                        opacity: safePage <= 1 ? 0.4 : 1,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.text }}>← Previous</Text>
                    </Pressable>
                    <Pressable
                      disabled={safePage >= totalPages}
                      onPress={() => setKslPage((p) => Math.min(totalPages, p + 1))}
                      style={{
                        flex: 1,
                        paddingVertical: 9,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: colors.kenyaGreen,
                        backgroundColor: `${colors.kenyaGreen}18`,
                        alignItems: 'center',
                        opacity: safePage >= totalPages ? 0.4 : 1,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.kenyaGreen }}>Next Page →</Text>
                    </Pressable>
                  </View>
                )}
              </View>
              </>
              )}
            </View>
          );
        })()}

        {/* More Kenyan Languages — Starter Phrasebooks (Kinubi, Kuria, Kenyan Maay, Yaaku · 1:1 Web Parity) */}
        {(() => {
          const varieties = getStagedVarieties();
          if (varieties.length === 0 || !activeEmergingVariety) return null;
          const activeVar = activeEmergingVariety;
          const filteredEmerging = filteredEmergingEntries;
          return (
            <View
              style={{
                marginTop: 14,
                marginBottom: 16,
                backgroundColor: colors.surfaceContainer,
                borderColor: `${colors.gold}40`,
                borderWidth: 1,
                borderRadius: 16,
                padding: 14,
                gap: 10,
              }}
            >
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.gold, letterSpacing: 0.6 }}>
                  MORE KENYAN LANGUAGES
                </Text>
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15, color: colors.text }}>
                  Starter Phrasebooks
                </Text>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 17 }}>
                  Explore all everyday words and phrases in Kinubi, Kuria, Kenyan Maay, and Yaaku.
                </Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                {varieties.map((v) => {
                  const isAct = v.id === activeVar.id;
                  return (
                    <Pressable
                      key={v.id}
                      onPress={() => {
                        setSelectedEmergingId(v.id);
                        setEmergingSearchQuery('');
                        setEmergingVisibleCount(30);
                      }}
                      style={{
                        paddingHorizontal: 11,
                        paddingVertical: 6,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: isAct ? colors.gold : colors.outlineVariant,
                        backgroundColor: isAct ? `${colors.gold}20` : colors.surface,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: isAct ? colors.gold : colors.text }}>
                        {v.name} ({v.totalEntries})
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {activeVar && (
                <View style={{ gap: 8 }}>
                  <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 11.5, color: colors.textMuted }}>
                    {activeVar.family} · Spoken in {activeVar.counties.join(', ')}
                  </Text>
                  <TextInput
                    value={emergingSearchQuery}
                    onChangeText={(txt) => {
                      setEmergingSearchQuery(txt);
                      setEmergingVisibleCount(30);
                    }}
                    placeholder={`Search all ${activeVar.totalEntries} ${activeVar.name} phrases...`}
                    placeholderTextColor={colors.textMuted}
                    style={{
                      backgroundColor: colors.surface,
                      borderWidth: 1,
                      borderColor: colors.outlineVariant,
                      borderRadius: 10,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12.5,
                      color: colors.text,
                    }}
                  />
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.textMuted }}>
                    SHOWING {Math.min(emergingVisibleCount, filteredEmerging.length)} OF {filteredEmerging.length} PHRASES
                  </Text>
                  {filteredEmerging.slice(0, emergingVisibleCount).map((ent, idx) => (
                    <View
                      key={`${activeVar.id}-${idx}`}
                      style={{
                        backgroundColor: colors.surface,
                        borderWidth: 1,
                        borderColor: colors.outlineVariant,
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        gap: 2,
                      }}
                    >
                      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12.5, color: colors.text }}>
                        {ent.translation}
                      </Text>
                      <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 11.5, color: colors.textSecondary }}>
                        {ent.english}
                      </Text>
                    </View>
                  ))}

                  {emergingVisibleCount < filteredEmerging.length && (
                    <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
                      <Pressable
                        onPress={() => setEmergingVisibleCount((c) => c + 50)}
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          paddingVertical: 9,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: colors.gold,
                          backgroundColor: `${colors.gold}18`,
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.gold }}>
                          Load 50 More ({filteredEmerging.length - emergingVisibleCount} left)
                        </Text>
                      </Pressable>
                      <Pressable
                        onPress={() => setEmergingVisibleCount(filteredEmerging.length)}
                        style={{
                          paddingHorizontal: 14,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: 9,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: colors.outlineVariant,
                          backgroundColor: colors.surface,
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.text }}>
                          Show All
                        </Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        })()}
      </View>
    );
  }

  // ============================================================================
  // MAIN COURSE DASHBOARD (LANGUAGE SELECTOR + GAMIFICATION BAR + 4 TABS)
  // ============================================================================
  return (
    <View style={styles.container}>
      {/* Top Bar to Return to Full 23-Language Selection Menu */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <Pressable
          android_ripple={ripple}
          onPress={() => {
            setShowLanguageMenu(true);
            onScrollToTop?.();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 13,
            paddingVertical: 8,
            borderRadius: 999,
            backgroundColor: colors.surfaceContainerLow,
            borderWidth: 1,
            borderColor: `${colors.gold}55`,
          }}
        >
          <Feather name="grid" size={13} color={colors.gold} />
          <Text style={{ fontSize: 12, fontWeight: '800', color: colors.gold }}>
            All {PUBLISHED_COURSE_SUMMARIES.length} Languages
          </Text>
          <Feather name="chevron-down" size={13} color={colors.gold} />
        </Pressable>

        {currentCourse && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 999,
              backgroundColor: `${langColor}18`,
              borderWidth: 1,
              borderColor: `${langColor}45`,
            }}
          >
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: langColor }} />
            <Text style={{ fontSize: 12, fontWeight: '800', color: colors.text }}>
              {currentCourse.config.name}
            </Text>
          </View>
        )}
      </View>

      {/* 1. Material 3 Gamification & Level Status Card */}
      <View
        style={[
          styles.gamificationCard,
          { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
        ]}
      >
        <View style={styles.statsTopRow}>
          <View style={styles.levelBadgeWrap}>
            <DynamicIcon emoji={currentLevel.icon} size={20} color={langColor} />
            <View style={{ flex: 1, minWidth: 0 }}>
              <Text style={[styles.levelTitleText, { color: colors.text }]}>
                {currentLevel.name} • {progress.totalXP} XP
              </Text>
              <Text style={[styles.levelSubText, { color: colors.textMuted }]}>
                {nextLevel
                  ? `${nextLevel.minXp - progress.totalXP} XP to ${nextLevel.name}`
                  : 'Max Rank Achieved!'}
              </Text>
            </View>
          </View>

          <View style={styles.statsRightPills}>
            <View style={[styles.miniStatPill, { backgroundColor: colors.surfaceContainerHigh, flexDirection: "row", alignItems: "center", gap: 3 }]}>
              <Ionicons name="heart" size={12} color="#EF4444" />
              <Text style={{ fontSize: 12, color: colors.text, fontWeight: "700" }}>{progress.hearts}</Text>
            </View>
            <View style={[styles.miniStatPill, { backgroundColor: colors.surfaceContainerHigh, flexDirection: "row", alignItems: "center", gap: 3 }]}>
              <Feather name="zap" size={12} color="#F59E0B" />
              <Text style={{ fontSize: 12, color: colors.text, fontWeight: "700" }}>{progress.streak}d</Text>
            </View>
            <Pressable
              android_ripple={ripple}
              onPress={() => setShowAchievements((v) => !v)}
              style={[
                styles.miniStatPill,
                {
                  backgroundColor: showAchievements
                    ? colors.primaryContainer
                    : colors.surfaceContainerHigh,
                },
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <Feather name="award" size={12} color={colors.gold} />
                <Text style={{ fontSize: 12, color: colors.text, fontWeight: "700" }}>
                  {progress.unlockedAchievements.length}/{ACHIEVEMENTS.length}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Daily XP Progress Bar */}
        <View style={styles.dailyGoalRow}>
          <Text style={[styles.dailyGoalLabel, { color: colors.textSecondary }]}>
            Daily Goal ({Math.min(progress.dailyXP, progress.dailyGoal)}/{progress.dailyGoal} XP)
          </Text>
          <View style={[styles.dailyGoalTrack, { backgroundColor: colors.surfaceContainerHighest }]}>
            <View
              style={[
                styles.dailyGoalFill,
                {
                  width: `${Math.min(100, Math.round((progress.dailyXP / progress.dailyGoal) * 100))}%`,
                  backgroundColor: langColor,
                },
              ]}
            />
          </View>
        </View>

        {/* Expandable Achievements Drawer */}
        {showAchievements && (
          <View style={[styles.achievementsGrid, { borderTopColor: colors.outlineVariant }]}>
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = progress.unlockedAchievements.includes(ach.id);
              return (
                <View
                  key={ach.id}
                  style={[
                    styles.achievementChip,
                    {
                      backgroundColor: isUnlocked
                        ? `${langColor}18`
                        : colors.surfaceContainerHigh,
                      borderColor: isUnlocked ? langColor : colors.outlineVariant,
                      opacity: isUnlocked ? 1 : 0.55,
                    },
                  ]}
                >
                  <DynamicIcon emoji={ach.icon} size={18} color={isUnlocked ? langColor : colors.textMuted} />
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                      <Text style={{ fontSize: 11, fontWeight: '800', color: colors.text, flexGrow: 1, flexShrink: 1, minWidth: 120 }}>
                        {ach.name}
                      </Text>
                      <Text style={{ fontSize: 10, fontWeight: '800', color: isUnlocked ? '#10B981' : langColor }}>
                        +{ach.xpReward} XP
                      </Text>
                    </View>
                    <Text style={{ fontSize: 10, color: colors.textMuted }}>{ach.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>

      {/* 2. Primary Course Mode Navigation Tabs Above the Fold (Path | Listen & Read | Vocab | Games | Grammar | Wisdom - UX-9) */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 2 }}>
        {(
          [
            { id: 'learn', label: 'Path' },
            { id: 'listen-read', label: 'Listen & Read' },
            { id: 'cards', label: 'Vocab' },
            { id: 'games', label: 'Games' },
            { id: 'grammar', label: 'Grammar' },
            { id: 'proverbs', label: 'Wisdom' },
          ] as { id: MainTab; label: string }[]
        ).map((tab) => {
          const active = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              android_ripple={ripple}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}
              onPress={() => setActiveTab(tab.id)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 7,
                borderRadius: 999,
                borderWidth: 1,
                backgroundColor: active ? `${langColor}22` : colors.surfaceContainerLow,
                borderColor: active ? langColor : colors.outlineVariant,
              }}
            >
              <Text
                style={{
                  fontSize: 12.5,
                  fontFamily: active ? 'Outfit_800ExtraBold' : 'Outfit_700Bold',
                  fontWeight: active ? '800' : '600',
                  color: active ? langColor : colors.textSecondary,
                }}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* 3. Selected Language Banner + Verified Sources (Path tab only to maximize mobile viewport) */}
      {currentCourse && activeTab === 'learn' && (
        <View
          style={[
            styles.courseInfoCard,
            { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
          ]}
        >
          <View style={styles.courseInfoHeader}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.courseInfoTitle, { color: colors.text }]}>
                {currentCourse.config.nativeName && !currentCourse.config.name.toLowerCase().includes(currentCourse.config.nativeName.toLowerCase()) ? `${currentCourse.config.name} (${currentCourse.config.nativeName})` : currentCourse.config.name}
              </Text>
              <Text style={[styles.courseInfoMeta, { color: langColor }]}>
                {currentCourse.config.family} • {currentCourse.config.speakers} speakers •{' '}
                {activeCourseCounts.totalUnits} units • {activeCourseCounts.totalSkills} modules • {activeCourseCounts.totalWords.toLocaleString()} words
              </Text>
            </View>

            {reviewDueCount > 0 && (
              <Pressable
                android_ripple={ripple}
                onPress={() => {
                  const dueWords = allCourseWords.filter((w) => reviewWordKeys.has(w.target));
                  if (dueWords.length >= 4 && allSkills[0]) {
                    const reviewSkill: CourseSkill = {
                      ...allSkills[0],
                      id: 'srs-review-session',
                      title: 'Spaced Repetition Review',
                      words: dueWords.slice(0, 12),
                      sentences: [],
                    };
                    startSkillLesson(reviewSkill, true);
                  } else {
                    setCardMode('review');
                    setCardIndex(0);
                    setActiveTab('cards');
                  }
                }}
                style={[styles.reviewDueBadge, { backgroundColor: 'rgba(245,158,11,0.16)' }]}
              >
                <Feather name="rotate-cw" size={12} color="#F59E0B" />
                <Text style={{ fontSize: 11, fontFamily: 'Outfit_800ExtraBold', fontWeight: '800', color: '#F59E0B' }}>
                  {reviewDueCount} Due
                </Text>
              </Pressable>
            )}
          </View>

          {activeTab === 'learn' && (
            <Text style={[styles.courseInfoDesc, { color: colors.textSecondary }]}>
              {currentCourse.config.description}
            </Text>
          )}

          {languageSources.length > 0 && (
            <View style={{ marginTop: activeTab === 'learn' ? 8 : 4 }}>
              <Pressable
                onPress={() => setShowSourcesDropdown((prev) => !prev)}
                style={[styles.sourcesRow, { justifyContent: 'space-between', paddingVertical: 4 }]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flex: 1 }}>
                  <Feather name="book" size={11} color={colors.gold} />
                  <Text style={[styles.sourcesText, { color: colors.textSecondary, fontWeight: '600' }]}>
                    Built from {languageSources.length} historical & linguistic {languageSources.length === 1 ? 'source' : 'sources'}
                  </Text>
                </View>
                <Feather name={showSourcesDropdown ? 'chevron-up' : 'chevron-down'} size={13} color={colors.textMuted} />
              </Pressable>
              {showSourcesDropdown && (
                <View style={{ marginTop: 4, paddingLeft: 8, gap: 3 }}>
                  {languageSources.map((s) => (
                    <Text key={s.id} style={[styles.sourcesText, { color: colors.textMuted }]}>
                      • {s.title} ({s.published})
                    </Text>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>
      )}

      {/* ========================================================================
          TAB 1: SKILL TREE PATH (UNITS ACCORDION + 5-STAR MASTERY + LESSON LAUNCH)
         ======================================================================== */}
      {activeTab === 'learn' && currentCourse && (
        <View style={styles.unitListWrap}>
          {/* Progressive Path vs. Unlock All Modules Toggle */}
          <View
            style={[
              styles.unlockBannerCard,
              {
                backgroundColor: colors.surfaceContainerLow,
                borderColor: progress.unlockAll ? langColor : colors.outlineVariant,
              },
            ]}
          >
            <View style={{ flex: 1, minWidth: 170 }}>
              <Text style={{ fontSize: 13, fontWeight: '800', color: colors.text }}>
                {progress.unlockAll ? 'All Modules Unlocked' : 'Progressive Skill Path'}
              </Text>
              <Text style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>
                {progress.unlockAll
                  ? 'Jump into any unit or skill immediately.'
                  : 'Complete each skill to unlock the next, or unlock all at once.'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
              <Pressable
                android_ripple={ripple}
                onPress={() => {
                  const allOpen = combinedUnits.every((u) => expandedUnitIds[u.id]);
                  const next: Record<string, boolean> = {};
                  combinedUnits.forEach((u) => {
                    next[u.id] = !allOpen;
                  });
                  setExpandedUnitIds(next);
                }}
                style={[
                  styles.unlockToggleBtn,
                  {
                    backgroundColor: colors.surfaceContainerHigh,
                    borderColor: colors.outlineVariant,
                  },
                ]}
              >
                <Feather
                  name={
                    combinedUnits.every((u) => expandedUnitIds[u.id])
                      ? 'minimize-2'
                      : 'maximize-2'
                  }
                  size={12}
                  color={colors.textSecondary}
                />
                <Text style={{ fontSize: 11, fontWeight: '700', color: colors.textSecondary }}>
                  {combinedUnits.every((u) => expandedUnitIds[u.id])
                    ? 'Collapse'
                    : 'Expand All'}
                </Text>
              </Pressable>

              <Pressable
                android_ripple={ripple}
                onPress={() =>
                  saveLanguageProgress((prev) => ({
                    ...prev,
                    unlockAll: !prev.unlockAll,
                  }))
                }
                style={[
                  styles.unlockToggleBtn,
                  {
                    backgroundColor: progress.unlockAll
                      ? `${langColor}24`
                      : colors.surfaceContainerHigh,
                    borderColor: progress.unlockAll ? langColor : colors.outlineVariant,
                  },
                ]}
              >
                <Feather
                  name={progress.unlockAll ? 'lock' : 'unlock'}
                  size={13}
                  color={progress.unlockAll ? langColor : colors.text}
                />
                <Text
                  style={{
                    fontSize: 11.5,
                    fontWeight: '800',
                    color: progress.unlockAll ? langColor : colors.text,
                  }}
                >
                  {progress.unlockAll ? 'Lock Path' : 'Unlock All'}
                </Text>
              </Pressable>
            </View>
          </View>
          {combinedUnits.map((unit: CourseUnit, uIdx: number) => {
            const isExpanded = !!expandedUnitIds[unit.id];
            const completedInUnit = unit.skills.filter(
              (s) => (progress.skills[s.id]?.level || 0) >= 1
            ).length;

            return (
              <View
                key={unit.id}
                style={styles.unitSectionGroup}
              >
                <Pressable
                  android_ripple={ripple}
                  onPress={() =>
                    setExpandedUnitIds((prev) => ({ ...prev, [unit.id]: !prev[unit.id] }))
                  }
                  style={[
                    styles.unitHeaderCard,
                    {
                      backgroundColor: colors.surfaceContainerLow,
                      borderColor: colors.outlineVariant,
                    },
                  ]}
                >
                  <View style={[styles.unitNumberBadge, { backgroundColor: `${langColor}22` }]}>
                    <DynamicIcon emoji={unit.icon} size={18} color={langColor} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={[styles.unitTitleText, { color: colors.text }]}>{unit.title}</Text>
                    <Text style={[styles.unitDescText, { color: colors.textSecondary }]} >
                      {unit.description}
                    </Text>
                    <Text style={{ fontSize: 11, fontWeight: '700', color: langColor, marginTop: 4 }}>
                      {completedInUnit}/{unit.skills.length} skills practiced
                    </Text>
                  </View>

                  <Feather
                    name={isExpanded ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textSecondary}
                  />
                </Pressable>

                {isExpanded && (
                  <View style={styles.unitSkillsList}>
                    {unit.skills.map((skill: CourseSkill, sIdx: number) => {
                      const sp = progress.skills[skill.id];
                      const skillLevel = sp?.level || 0;
                      const skillLevelsMap: Record<string, number> = {};
                      for (const [k, v] of Object.entries(progress.skills)) {
                        skillLevelsMap[k] = v.level;
                      }
                      const unlocked =
                        skill.id.startsWith('dict-cat-') ||
                        isSkillUnlocked(
                          skill.id,
                          sIdx,
                          uIdx,
                          skillLevelsMap,
                          combinedUnits,
                          Boolean(progress.unlockAll)
                        );
                      const dictCatMeta = skill.id.startsWith('dict-cat-')
                        ? getLanguageSourcesMod().DICT_META_MAP[selectedLangId]?.categories.find(
                            (c) => `dict-cat-${c.id}` === skill.id
                          )
                        : undefined;
                      const skillCountDisplay =
                        skill.words.length > 0
                          ? `${skill.words.length.toLocaleString()} words`
                          : dictCatMeta
                          ? `${dictCatMeta.count.toLocaleString()} entries`
                          : '0 words';

                      return (
                        <View
                          key={skill.id}
                          style={[
                            styles.skillNodeCard,
                            {
                              backgroundColor: colors.surface,
                              borderColor:
                                skillLevel >= 5
                                  ? '#F59E0B'
                                  : skillLevel >= 1
                                  ? langColor
                                  : colors.outlineVariant,
                              opacity: 1,
                            },
                          ]}
                        >
                          <View style={styles.skillNodeTop}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                              {unlocked ? (
                                <DynamicIcon
                                  emoji={skill.icon}
                                  size={18}
                                  color={skillLevel >= 1 ? '#10B981' : langColor}
                                />
                              ) : (
                                <Feather name="lock" size={15} color={colors.textMuted} />
                              )}
                              <Text style={[styles.skillNodeTitle, { color: colors.text, flex: 1 }]}>
                                {skill.title}
                              </Text>
                            </View>

                            {/* 5-Star Mastery Row */}
                            <View style={styles.starsRow}>
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Feather
                                  key={star}
                                  name="star"
                                  size={12}
                                  color={star <= skillLevel ? "#F59E0B" : colors.textMuted}
                                  style={{ opacity: star <= skillLevel ? 1 : 0.3 }}
                                />
                              ))}
                            </View>
                          </View>
                          <Text
                            style={[styles.skillNodeDesc, { color: colors.textSecondary, marginTop: 4 }]}
                          >
                            {skill.description}
                          </Text>

                          <View style={styles.skillNodeFooter}>
                            <Text style={{ fontSize: 11, color: colors.textMuted }}>
                              {skillCountDisplay} •{' '}
                              {sp?.bestAccuracy ? `Best ${sp.bestAccuracy}%` : 'New'}
                            </Text>

                            <View style={{ flexDirection: 'row', gap: 8 }}>
                              <Pressable
                                android_ripple={ripple}
                                onPress={() => {
                                  setActiveSkillId(skill.id);
                                  setCardMode('skill');
                                  setCardIndex(0);
                                  setIsCardFlipped(false);
                                  setActiveTab('cards');
                                }}
                                style={[
                                  styles.skillSmallBtn,
                                  { backgroundColor: colors.surfaceContainerHigh },
                                ]}
                              >
                                <Feather name="layers" size={12} color={colors.textSecondary} />
                                <Text
                                  style={{
                                    fontSize: 11,
                                    fontWeight: '700',
                                    color: colors.textSecondary,
                                  }}
                                >
                                  Cards
                                </Text>
                              </Pressable>

                              <Pressable
                                android_ripple={ripple}
                                disabled={!unlocked}
                                onPress={() => startSkillLesson(skill, false)}
                                style={[
                                  styles.skillStartBtn,
                                  {
                                    backgroundColor: unlocked
                                      ? langColor
                                      : colors.surfaceContainerHighest,
                                  },
                                ]}
                              >
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: '800',
                                    color: unlocked ? '#000' : colors.textMuted,
                                  }}
                                >
                                  {!unlocked
                                    ? 'Locked'
                                    : skillLevel === 0
                                    ? 'Start Lesson'
                                    : skillLevel >= 5
                                    ? 'Mastered • Review'
                                    : `Level ${skillLevel} → ${skillLevel + 1}`}
                                </Text>
                                <Feather
                                  name={unlocked ? 'arrow-right' : 'lock'}
                                  size={13}
                                  color={unlocked ? '#000' : colors.textMuted}
                                />
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}

      {/* ========================================================================
          TAB 2: FLASHCARDS & SPACED REPETITION REVIEW DECK
         ======================================================================== */}
      {activeTab === 'cards' && (
        <View style={styles.cardsTabWrap}>
          {/* Mode Switcher: Skill Vocabulary vs. Spaced Repetition Review */}
          <View style={styles.cardModeRow}>
            <Pressable
              android_ripple={ripple}
              onPress={() => {
                setCardMode('skill');
                setCardIndex(0);
                setIsCardFlipped(false);
              }}
              style={[
                styles.cardModeChip,
                {
                  backgroundColor:
                    cardMode === 'skill' ? `${langColor}22` : colors.surfaceContainerLow,
                  borderColor: cardMode === 'skill' ? langColor : colors.outlineVariant,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: cardMode === 'skill' ? colors.text : colors.textSecondary,
                }}
              >
                Skill Deck ({activeSkill?.words.length || 0})
              </Text>
            </Pressable>

            <Pressable
              android_ripple={ripple}
              onPress={() => {
                setCardMode('review');
                setCardIndex(0);
                setIsCardFlipped(false);
              }}
              style={[
                styles.cardModeChip,
                {
                  backgroundColor:
                    cardMode === 'review' ? `${langColor}22` : colors.surfaceContainerLow,
                  borderColor: cardMode === 'review' ? langColor : colors.outlineVariant,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: cardMode === 'review' ? colors.text : colors.textSecondary,
                }}
              >
                Review ({reviewDueCount})
              </Text>
            </Pressable>

            <Pressable
              android_ripple={ripple}
              onPress={() => {
                setCardMode('browse');
              }}
              style={[
                styles.cardModeChip,
                {
                  backgroundColor:
                    cardMode === 'browse' ? `${langColor}22` : colors.surfaceContainerLow,
                  borderColor: cardMode === 'browse' ? langColor : colors.outlineVariant,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: cardMode === 'browse' ? colors.text : colors.textSecondary,
                }}
              >
                All Modules ({allSkills.length})
              </Text>
            </Pressable>
          </View>

          {cardMode === 'browse' ? (
            <View style={{ gap: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: colors.surfaceContainerLow,
                  borderColor: colors.outlineVariant,
                }}
              >
                <Feather name="search" size={16} color={colors.textMuted} />
                <TextInput
            multiline={false}
            numberOfLines={1}
                  value={vocabSearch}
                  onChangeText={(txt) => {
                    setVocabSearch(txt);
                    setModulesPage(1);
                  }}
                  placeholder="Search words or modules..."
                  placeholderTextColor={colors.textMuted}
                  style={{ flex: 1, minWidth: 0, fontSize: 13, color: colors.text, paddingVertical: 2, paddingHorizontal: 0 }}
                />
                {vocabSearch.length > 0 && (
                  <Pressable
                    onPress={() => {
                      setVocabSearch('');
                      setModulesPage(1);
                    }}
                  >
                    <Feather name="x-circle" size={16} color={colors.textMuted} />
                  </Pressable>
                )}
              </View>
              {(() => {
                const filteredSkills = filteredBrowseSkills;
                const visibleSkills = filteredSkills.slice(0, modulesPage * MODULES_PAGE_SIZE);
                return (
                  <>
                    <Text style={{ fontSize: 11, color: colors.textMuted }}>
                      Showing {visibleSkills.length} of {filteredSkills.length} vocabulary modules
                    </Text>
                    {visibleSkills.map((sk) => (
                      <View
                        key={sk.id}
                        style={[
                          styles.grammarAccordionCard,
                          {
                            backgroundColor: colors.surfaceContainerLow,
                            borderColor: colors.outlineVariant,
                            padding: 12,
                            gap: 8,
                          },
                        ]}
                      >
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                          <Text style={{ fontSize: 13.5, fontWeight: '800', color: colors.text, flexShrink: 1 }}>
                            {sk.title}
                          </Text>
                          <Pressable
                            onPress={() => {
                              setActiveSkillId(sk.id);
                              setCardMode('skill');
                              setCardIndex(0);
                              setIsCardFlipped(false);
                            }}
                            style={{
                              paddingHorizontal: 8,
                              paddingVertical: 4,
                              borderRadius: 999,
                              backgroundColor: `${langColor}22`,
                            }}
                          >
                            <Text style={{ fontSize: 11, fontWeight: '800', color: langColor }}>
                              Study Deck ({sk.words.length})
                            </Text>
                          </Pressable>
                        </View>
                        {sk.words.slice(0, expandedVocabRows[sk.id] || VOCAB_ROW_PAGE_SIZE).map((w, wIdx) => (
                          <View
                            key={w.id || wIdx}
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingVertical: 4,
                              borderTopWidth: wIdx === 0 ? 0 : 1,
                              borderTopColor: colors.outlineVariant,
                            }}
                          >
                            <Text style={{ fontSize: 12.5, fontWeight: '700', color: langColor, flex: 1 }}>
                              {w.target}
                            </Text>
                            <Text style={{ fontSize: 12.5, color: colors.textSecondary, flex: 1, textAlign: 'right' }}>
                              {w.source}
                            </Text>
                          </View>
                        ))}
                        {sk.words.length > (expandedVocabRows[sk.id] || VOCAB_ROW_PAGE_SIZE) && (
                          <Pressable
                            onPress={() =>
                              setExpandedVocabRows((prev) => ({
                                ...prev,
                                [sk.id]: (prev[sk.id] || VOCAB_ROW_PAGE_SIZE) + VOCAB_ROW_PAGE_SIZE,
                              }))
                            }
                            style={{ paddingVertical: 6, alignItems: 'center' }}
                          >
                            <Text style={{ fontSize: 11.5, fontWeight: '700', color: langColor }}>
                              Show more ({sk.words.length - (expandedVocabRows[sk.id] || VOCAB_ROW_PAGE_SIZE)} more words)
                            </Text>
                          </Pressable>
                        )}
                      </View>
                    ))}
                    {filteredSkills.length > visibleSkills.length && (
                      <Pressable
                        onPress={() => setModulesPage((p) => p + 1)}
                        style={[
                          styles.m3OutlinedBtn,
                          {
                            borderColor: langColor,
                            alignSelf: 'center',
                            marginTop: 4,
                          },
                        ]}
                      >
                        <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                          Load More Modules ({filteredSkills.length - visibleSkills.length} remaining)
                        </Text>
                      </Pressable>
                    )}
                  </>
                );
              })()}
            </View>
          ) : currentFlashcard ? (
            <>
              <Pressable
                android_ripple={ripple}
                onPress={() => setIsCardFlipped((f) => !f)}
                style={[
                  styles.flashcardSurface,
                  {
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: isCardFlipped ? langColor : colors.outlineVariant,
                  },
                ]}
              >
                <View style={styles.flashcardTopMeta}>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: colors.textMuted }}>
                    CARD {cardIndex + 1} OF {flashcardDeck.length}
                  </Text>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: langColor }}>
                    {isCardFlipped ? 'ENGLISH MEANING' : currentCourse?.config.name.toUpperCase()}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <Text style={[styles.flashcardMainWord, { color: colors.text }]}>
                    {isCardFlipped ? currentFlashcard.source : currentFlashcard.target}
                  </Text>
                  {!isCardFlipped &&
                  hasVerifiedAudio({
                    translation: currentFlashcard.target,
                    audioFile: currentFlashcard.audioFile || currentFlashcard.audio,
                  }) ? (
                    <Pressable
                      onPress={(ev) => {
                        ev.stopPropagation?.();
                        playVerifiedAudio({
                          translation: currentFlashcard.target,
                          audioFile: currentFlashcard.audioFile || currentFlashcard.audio,
                        });
                      }}
                      accessibilityRole="button"
                      accessibilityLabel={`Play verified recording for ${currentFlashcard.target}`}
                      hitSlop={10}
                      style={{
                        padding: 6,
                        borderRadius: 999,
                        backgroundColor: `${langColor}18`,
                      }}
                    >
                      <Ionicons name="volume-high-outline" size={20} color={langColor} />
                    </Pressable>
                  ) : null}
                </View>

                {!isCardFlipped && currentFlashcard.pronunciation ? (
                  <Text style={{ fontSize: 13, color: langColor, marginTop: 6 }}>
                    [{currentFlashcard.pronunciation}]
                  </Text>
                ) : null}

                {isCardFlipped && currentFlashcard.example ? (
                  <Text
                    style={{
                      fontSize: 13,
                      color: colors.textSecondary,
                      marginTop: 12,
                      textAlign: 'center',
                    }}
                  >
                    {currentFlashcard.example}
                  </Text>
                ) : null}

                <Text style={{ fontSize: 11, color: colors.textMuted, marginTop: 18 }}>
                  Tap card to flip
                </Text>
              </Pressable>

              <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                  }}
                  style={[styles.m3OutlinedBtn, { flex: 1, justifyContent: 'center', borderColor: '#F59E0B' }]}
                >
                  <Text style={[styles.m3OutlinedBtnText, { color: '#F59E0B' }]}>Still Learning ↻</Text>
                </Pressable>
                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    awardGameXP(2, false);
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                  }}
                  style={[styles.m3OutlinedBtn, { flex: 1, justifyContent: 'center', borderColor: '#10B981' }]}
                >
                  <Text style={[styles.m3OutlinedBtnText, { color: '#10B981' }]}>Got It (+2 XP) ✓</Text>
                </Pressable>
              </View>

              <View style={styles.learnNavRow}>
                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i > 0 ? i - 1 : flashcardDeck.length - 1));
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Feather name="chevron-left" size={16} color={colors.text} />
                  <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Previous</Text>
                </Pressable>

                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    if (activeSkill) startSkillLesson(activeSkill, false);
                  }}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Quiz This Skill</Text>
                </Pressable>

                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Next</Text>
                  <Feather name="chevron-right" size={16} color={colors.text} />
                </Pressable>
              </View>
            </>
          ) : null}
        </View>
      )}

      {/* ========================================================================
          TAB 3: GAMES HUB (12 MINI-GAMES — 100% WEB PARITY)
         ======================================================================== */}
      {activeTab === 'games' && (
        <View style={styles.gamesTabWrap}>
          {activeGame === 'menu' && (
            <View style={styles.gamesMenuGrid}>
              <View
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderColor: colors.outlineVariant,
                  borderWidth: 1,
                  borderRadius: 16,
                  padding: 13,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                }}
              >
                <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
                  <Text style={{ fontSize: 15, fontWeight: '800', color: colors.text }}>
                    {currentCourse?.config.name} Arcade
                  </Text>
                  <Text style={{ fontSize: 11.5, color: colors.textSecondary, marginTop: 2 }}>
                    Practice orthography, proverbs, grammar, and Kenyan culture for bonus XP.
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 999,
                    backgroundColor: `${langColor}20`,
                    borderWidth: 1,
                    borderColor: `${langColor}45`,
                  }}
                >
                  <Text style={{ fontSize: 11, fontWeight: '800', color: langColor }}>
                    12 Mini-Games
                  </Text>
                </View>
              </View>

              {[
                {
                  id: 'wordle' as ActiveGame,
                  title: `${currentCourse?.config.name} Wordle`,
                  desc: 'Guess the hidden word in 6 tries with color-coded letter hints.',
                  icon: 'hash' as const,
                  onStart: startWordleGame,
                },
                {
                  id: 'scramble' as ActiveGame,
                  title: 'Word Scramble Sprint',
                  desc: 'Unscramble letters to spell the target language word.',
                  icon: 'shuffle' as const,
                  onStart: startScrambleRound,
                },
                {
                  id: 'speed' as ActiveGame,
                  title: 'Speed Match Blitz',
                  desc: 'Rapid-fire vocabulary translation challenge.',
                  icon: 'zap' as const,
                  onStart: startSpeedRound,
                },
                {
                  id: 'memory' as ActiveGame,
                  title: 'Memory Cards',
                  desc: 'Flip and match pairs of words and their meanings.',
                  icon: 'grid' as const,
                  onStart: startMemoryGame,
                },
                {
                  id: 'riddles' as ActiveGame,
                  title: 'Riddle Master',
                  desc: 'Solve authentic oral literature riddles and proverbs.',
                  icon: 'help-circle' as const,
                  onStart: startRiddleRound,
                },
                {
                  id: 'vocabQuiz' as ActiveGame,
                  title: '3-Heart Survival Blitz',
                  desc: 'Rapid target word identification without leaked clues.',
                  icon: 'target' as const,
                  onStart: startVocabQuizRound,
                },
                {
                  id: 'methali' as ActiveGame,
                  title: 'Methali & Ngero Builder',
                  desc: 'Reconstruct traditional proverbs from tiles or finish the second half.',
                  icon: 'book-open' as const,
                },
                {
                  id: 'safari' as ActiveGame,
                  title: 'Sentence Safari (Cloze)',
                  desc: 'Fill in the missing word inside contextual sentences.',
                  icon: 'compass' as const,
                },
                {
                  id: 'nounClass' as ActiveGame,
                  title: 'Grammar & Class Sorter',
                  desc: 'Sort nouns and verbs into Bantu, Nilotic, or Cushitic classes.',
                  icon: 'layers' as const,
                },
                {
                  id: 'oddWord' as ActiveGame,
                  title: 'Semantic Odd-Word-Out',
                  desc: 'Spot which 1 of the 4 words belongs to a different category.',
                  icon: 'search' as const,
                },
                {
                  id: 'polyglot' as ActiveGame,
                  title: 'Kenyan Polyglot Bridge',
                  desc: 'Compare shared roots and sound shifts across Kenya’s 23 languages.',
                  icon: 'globe' as const,
                },
                {
                  id: 'twister' as ActiveGame,
                  title: 'Kikokotoo Tongue Twisters',
                  desc: 'Assemble and speed-read alliterating Kenyan tongue twisters.',
                  icon: 'mic' as const,
                },
              ].map((g) => (
                <Pressable
                  key={g.id}
                  android_ripple={ripple}
                  onPress={() => {
                    setGameScore(0);
                    setGameRound(1);
                    g.onStart?.();
                    setActiveGame(g.id);
                  }}
                  style={[
                    styles.gameMenuCard,
                    {
                      backgroundColor: colors.surfaceContainerLow,
                      borderColor: colors.outlineVariant,
                    },
                  ]}
                >
                  <View style={[styles.gameIconBox, { backgroundColor: `${langColor}22` }]}>
                    <Feather name={g.icon} size={19} color={langColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.gameCardTitle, { color: colors.text }]}>{g.title}</Text>
                    <Text style={[styles.gameCardDesc, { color: colors.textSecondary }]}>
                      {g.desc}
                    </Text>
                  </View>
                  <Feather name="chevron-right" size={18} color={colors.textMuted} />
                </Pressable>
              ))}
            </View>
          )}

          {/* GAMES 7–12: EXTRA MINI-GAMES (WEB PARITY) */}
          {isExtraGame(activeGame) && (
            <ExtraMiniGames
              activeGame={activeGame}
              languageId={selectedLangId}
              languageName={currentCourse?.config.name || 'Kenyan'}
              langColor={langColor}
              allWords={allCourseWords}
              courseUnits={currentCourse?.units || []}
              allUnits={combinedUnits}
              awardGameXP={awardGameXP}
              onBack={() => setActiveGame('menu')}
            />
          )}

          {/* GAME 1: WORD SCRAMBLE */}
          {activeGame === 'scramble' && scrambleWord && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={{ fontSize: 12, color: colors.textMuted, textAlign: 'center' }}>
                UNSCRAMBLE THE WORD FOR:
              </Text>
              <Text style={[styles.gamePromptWord, { color: colors.text }]}>
                "{scrambleWord.source}"
              </Text>

              <View
                style={[
                  styles.scrambleSlotsBox,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.outlineVariant,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 6,
                  },
                ]}
              >
                {scramblePicked.length > 0 ? (
                  scramblePicked.map((poolIdx, posIdx) => (
                    <Pressable
                      key={`picked-${posIdx}`}
                      disabled={scrambleDone !== null}
                      onPress={() => {
                        setScramblePicked((prev) => prev.filter((_, i) => i !== posIdx));
                        setScrambleDone(null);
                      }}
                      style={{
                        minWidth: 34,
                        height: 36,
                        paddingHorizontal: 8,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: langColor,
                        backgroundColor: `${langColor}1A`,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: '800', color: langColor }}>
                        {scramblePool[poolIdx]?.toUpperCase()}
                      </Text>
                    </Pressable>
                  ))
                ) : (
                  <Text style={{ fontSize: 14, fontStyle: 'italic', color: colors.textMuted }}>
                    Tap letters below...
                  </Text>
                )}
              </View>

              <View style={styles.wordChipsWrap}>
                {scramblePool.map((ch, idx) => {
                  const used = scramblePicked.includes(idx);
                  return (
                    <Pressable
                      key={`scr-${idx}`}
                      disabled={used || scrambleDone !== null}
                      onPress={() => {
                        const nextPicked = [...scramblePicked, idx];
                        setScramblePicked(nextPicked);
                        if (nextPicked.length === scramblePool.length) {
                          const attempt = nextPicked.map((i) => scramblePool[i]).join('');
                          const won =
                            attempt.toLowerCase() === scrambleWord.target.trim().toLowerCase();
                          setScrambleDone(won);
                          if (won) {
                            setGameScore((s) => s + 15);
                            awardGameXP(15, false);
                          }
                        }
                      }}
                      style={[
                        styles.letterBtn,
                        {
                          backgroundColor: used ? colors.surfaceContainerHighest : langColor,
                          opacity: used ? 0.35 : 1,
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 16, fontWeight: '800', color: '#000' }}>
                        {ch.toUpperCase()}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {scrambleDone !== null && (
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '800',
                    color: scrambleDone ? '#10B981' : '#EF4444',
                  }}
                >
                  {scrambleDone ? '✓ Correct! +15 XP' : `Answer: ${scrambleWord.target}`}
                </Text>
              )}

              <View style={styles.learnNavRow}>
                <Pressable
                  onPress={() => {
                    setScramblePicked([]);
                    setScrambleDone(null);
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Text style={{ color: colors.text, fontWeight: '700' }}>Reset</Text>
                </Pressable>
                <Pressable
                  onPress={startScrambleRound}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Next Word</Text>
                </Pressable>
              </View>
            </View>
          )}

          {activeGame !== 'menu' &&
            !isExtraGame(activeGame) &&
            ((activeGame === 'scramble' && !scrambleWord) ||
              (activeGame === 'speed' && !speedQuestion) ||
              (activeGame === 'memory' && memoryCards.length === 0) ||
              (activeGame === 'wordle' && !wordleTarget) ||
              (activeGame === 'riddles' && !riddleQuestion) ||
              (activeGame === 'vocabQuiz' && !vocabQuestion)) && (
              <View
                style={[
                  styles.gameBoardCard,
                  { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant, alignItems: 'center', paddingVertical: 28 },
                ]}
              >
                <Feather name="info" size={24} color={colors.textMuted} />
                <Text style={{ color: colors.text, fontWeight: '700', fontSize: 15, textAlign: 'center' }}>
                  No eligible words available for this mini-game yet
                </Text>
                <Pressable
                  onPress={() => setActiveGame('menu')}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant, marginTop: 8 }]}
                >
                  <Text style={{ color: colors.text, fontWeight: '700' }}>Back to Games Menu</Text>
                </Pressable>
              </View>
            )}

          {/* GAME 2: SPEED MATCH */}
          {activeGame === 'speed' && speedQuestion && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={[styles.gamePromptWord, { color: colors.text }]}>
                {speedQuestion.target}
              </Text>

              <View style={styles.optionsList}>
                {speedOptions.map((opt, idx) => (
                  <Pressable
                    key={`spd-${idx}`}
                    disabled={speedFeedback !== null}
                    onPress={() => {
                      const right = opt === speedQuestion.source;
                      setSpeedFeedback(opt);
                      if (right) {
                        setGameScore((s) => s + 10);
                        awardGameXP(10, false);
                      }
                      scheduleFeedbackTimeout(() => {
                        startSpeedRound();
                      }, 650);
                    }}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          speedFeedback === null
                            ? colors.surface
                            : opt === speedQuestion.source
                            ? 'rgba(16,185,129,0.2)'
                            : speedFeedback === opt
                            ? 'rgba(239,68,68,0.2)'
                            : colors.surface,
                        borderColor:
                          speedFeedback !== null && opt === speedQuestion.source
                            ? '#10B981'
                            : colors.outlineVariant,
                      },
                    ]}
                  >
                    <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* GAME 3: MEMORY CARDS */}
          {activeGame === 'memory' && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Pressable onPress={startMemoryGame}>
                  <Text style={{ fontWeight: '800', color: langColor }}>New Board</Text>
                </Pressable>
              </View>

              <View style={styles.memoryGrid}>
                {memoryCards.map((card, idx) => {
                  const isOpen = card.matched || memoryFlipped.includes(idx);
                  return (
                    <Pressable
                      key={card.id}
                      disabled={isOpen || memoryFlipped.length >= 2}
                      onPress={() => {
                        const nextFlip = [...memoryFlipped, idx];
                        setMemoryFlipped(nextFlip);
                        if (nextFlip.length === 2) {
                          const [a, b] = nextFlip;
                          if (
                            memoryCards[a].pairId === memoryCards[b].pairId &&
                            memoryCards[a].type !== memoryCards[b].type
                          ) {
                            const allNowMatched = memoryCards.every(
                              (c, i) => i === a || i === b || c.matched
                            );
                            setMemoryCards((prev) =>
                              prev.map((c, i) =>
                                i === a || i === b ? { ...c, matched: true } : c
                              )
                            );
                            setMemoryFlipped([]);
                            setGameScore((s) => s + (allNowMatched ? 25 : 10));
                            awardGameXP(allNowMatched ? 20 : 5, allNowMatched);
                          } else {
                            scheduleFeedbackTimeout(() => setMemoryFlipped([]), 650);
                          }
                        }
                      }}
                      style={[
                        styles.memoryTile,
                        {
                          backgroundColor: card.matched
                            ? 'rgba(16,185,129,0.16)'
                            : isOpen
                            ? `${langColor}24`
                            : colors.surface,
                          borderColor: card.matched
                            ? '#10B981'
                            : isOpen
                            ? langColor
                            : colors.outlineVariant,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '700',
                          color: isOpen ? colors.text : colors.textMuted,
                          textAlign: 'center',
                        }}
                        
                      >
                        {isOpen ? card.text : '?'}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          {/* GAME 4: WORDLE (MATCHES WEBSITE GAMESHUB WORDLE) */}
          {activeGame === 'wordle' && wordleTarget && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>
                  {wordleAnswer.length}-Letter Wordle
                </Text>
              </View>

              <Text style={{ fontSize: 12, color: colors.textSecondary, textAlign: 'center' }}>
                Clue (English meaning):{' '}
                <Text style={{ fontWeight: '800', color: colors.text }}>
                  "{wordleTarget.source}"
                </Text>
              </Text>

              {/* 6 Guess Rows */}
              <View style={{ gap: 6, alignItems: 'center', marginVertical: 8 }}>
                {Array.from({ length: 6 }).map((_, rowIdx) => {
                  const isCurrentRow = rowIdx === wordleGuesses.length && wordleStatus === 'playing';
                    const guess = wordleGuesses[rowIdx] || (isCurrentRow ? wordleInput : '');
                  const isSubmittedRow = rowIdx < wordleGuesses.length;
                  const rowStatuses: ('correct' | 'present' | 'absent')[] = Array(wordleAnswer.length).fill('absent');
                  if (isSubmittedRow) {
                    const targetChars = wordleAnswer.split('');
                    const guessChars = guess.toLowerCase().split('');
                    for (let i = 0; i < wordleAnswer.length; i++) {
                      if (guessChars[i] === targetChars[i]) {
                        rowStatuses[i] = 'correct';
                        targetChars[i] = '_';
                      }
                    }
                    for (let i = 0; i < wordleAnswer.length; i++) {
                      if (rowStatuses[i] === 'correct') continue;
                      const matchIdx = targetChars.indexOf(guessChars[i]);
                      if (matchIdx !== -1) {
                        rowStatuses[i] = 'present';
                        targetChars[matchIdx] = '_';
                      }
                    }
                  }
                  return (
                    <View key={`wrow-${rowIdx}`} style={{ flexDirection: 'row', gap: 6 }}>
                      {Array.from({ length: wordleAnswer.length }).map((__, colIdx) => {
                        const letter = guess[colIdx] || '';
                        let cellBg = colors.surface;
                        let cellBorder = colors.outlineVariant;
                        let textColor = colors.text;

                        if (isSubmittedRow) {
                          if (rowStatuses[colIdx] === 'correct') {
                            cellBg = '#10B981';
                            cellBorder = '#10B981';
                            textColor = '#000';
                          } else if (rowStatuses[colIdx] === 'present') {
                            cellBg = '#F59E0B';
                            cellBorder = '#F59E0B';
                            textColor = '#000';
                          } else {
                            cellBg = colors.surfaceContainerHighest;
                          }
                        }

                        return (
                          <View
                            key={`wcol-${colIdx}`}
                            style={[
                              styles.wordleCell,
                              { backgroundColor: cellBg, borderColor: cellBorder },
                            ]}
                          >
                            <Text style={{ fontSize: 15, fontWeight: '800', color: textColor }}>
                              {letter.toUpperCase()}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>

              {wordleStatus === 'playing' ? (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <View style={{ flex: 1, minWidth: 0, position: 'relative', justifyContent: 'center' }}>
                    <TextInput
                      multiline={false}
                      numberOfLines={1}
                      value={wordleInput}
                      onChangeText={(t) =>
                        setWordleInput(t.replace(/[^a-zA-Z]/g, '').slice(0, wordleAnswer.length))
                      }
                      placeholder={`Enter ${wordleAnswer.length} letters...`}
                      placeholderTextColor={colors.textMuted}
                      autoCapitalize="none"
                      style={[
                        styles.translationInput,
                        {
                          paddingRight: 36,
                          backgroundColor: colors.surface,
                          color: colors.text,
                          borderColor: colors.outlineVariant,
                        },
                      ]}
                    />
                    {wordleInput.length > 0 && (
                      <Pressable
                        onPress={() => setWordleInput('')}
                        accessibilityRole="button"
                        accessibilityLabel="Clear wordle input"
                        hitSlop={8}
                        style={{ position: 'absolute', right: 10 }}
                      >
                        <Feather name="x-circle" size={16} color={colors.textMuted} />
                      </Pressable>
                    )}
                  </View>
                  <Pressable
                    onPress={() => {
                      const clean = wordleInput.trim().toLowerCase();
                      if (clean.length !== wordleAnswer.length) return;
                      const nextGuesses = [...wordleGuesses, clean];
                      setWordleGuesses(nextGuesses);
                      setWordleInput('');
                      if (clean === wordleAnswer) {
                        setWordleStatus('won');
                        awardGameXP(25);
                      } else if (nextGuesses.length >= 6) {
                        setWordleStatus('lost');
                      }
                    }}
                    style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                  >
                    <Text style={styles.m3FilledBtnText}>Guess</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={{ alignItems: 'center', gap: 10 }}>
                  <Text
                    style={{
                      fontWeight: '800',
                      color: wordleStatus === 'won' ? '#10B981' : '#EF4444',
                    }}
                  >
                    {wordleStatus === 'won'
                      ? 'Solved! +25 XP'
                      : `Word was: ${wordleTarget.target} (${wordleAnswer.toUpperCase()})`}
                  </Text>
                  <Pressable
                    onPress={startWordleGame}
                    style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                  >
                    <Text style={styles.m3FilledBtnText}>Play Again</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {/* GAME 5: RIDDLE MASTER */}
          {activeGame === 'riddles' && riddleQuestion && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={{ fontSize: 12, fontWeight: '700', color: colors.gold, textAlign: 'center' }}>
                {riddleQuestion.origin || `${currentCourse?.config.name} — Traditional Riddle`}
              </Text>
              <Text style={[styles.gamePromptWord, { color: colors.text, fontSize: 18, lineHeight: 26 }]}>
                &ldquo;{riddleQuestion.riddle}&rdquo;
              </Text>
              {riddleQuestion.hint ? (
                <Text style={{ fontSize: 13, fontStyle: 'italic', color: colors.textSecondary, textAlign: 'center', marginBottom: 4 }}>
                  {riddleQuestion.hint}
                </Text>
              ) : null}

              <View style={styles.optionsList}>
                {riddleOptions.map((opt, idx) => (
                  <Pressable
                    key={`rd-${idx}`}
                    disabled={riddleFeedback !== null}
                    onPress={() => {
                      const right = opt === riddleQuestion.answer;
                      setRiddleFeedback(opt);
                      if (right) {
                        setGameScore((s) => s + 20);
                        awardGameXP(20, false);
                      }
                      scheduleFeedbackTimeout(() => {
                        startRiddleRound();
                      }, 900);
                    }}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          riddleFeedback === null
                            ? colors.surface
                            : opt === riddleQuestion.answer
                            ? 'rgba(16,185,129,0.2)'
                            : riddleFeedback === opt
                            ? 'rgba(239,68,68,0.2)'
                            : colors.surface,
                        borderColor:
                          riddleFeedback !== null && opt === riddleQuestion.answer
                            ? '#10B981'
                            : colors.outlineVariant,
                      },
                    ]}
                  >
                    <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* GAME 6: VOCABULARY BLITZ */}
          {activeGame === 'vocabQuiz' && vocabQuestion && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={{ fontSize: 12, color: colors.textMuted, textAlign: 'center' }}>
                VOCABULARY BLITZ:
              </Text>
              <Text style={[styles.gamePromptWord, { color: colors.text, fontSize: 18 }]}>
                {vocabQuestion.prompt}
              </Text>

              <View style={styles.optionsList}>
                {vocabOptions.map((opt, idx) => (
                  <Pressable
                    key={`vq-${idx}`}
                    disabled={vocabFeedback !== null}
                    onPress={() => {
                      const right = opt === vocabQuestion.oddWord;
                      setVocabFeedback(opt);
                      if (right) {
                        setGameScore((s) => s + 15);
                        awardGameXP(15, false);
                      }
                      scheduleFeedbackTimeout(() => {
                        startVocabQuizRound();
                      }, 700);
                    }}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          vocabFeedback === null
                            ? colors.surface
                            : opt === vocabQuestion.oddWord
                            ? 'rgba(16,185,129,0.2)'
                            : vocabFeedback === opt
                            ? 'rgba(239,68,68,0.2)'
                            : colors.surface,
                        borderColor:
                          vocabFeedback !== null && opt === vocabQuestion.oddWord
                            ? '#10B981'
                            : colors.outlineVariant,
                      },
                    ]}
                  >
                    <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      )}

      {/* ========================================================================
          TAB 1B: LISTEN & READ (1:1 WEB PARITY — AUDIO, STORIES & COMPREHENSION QUIZ)
         ======================================================================== */}
      {activeTab === 'listen-read' && (() => {
        const corpusLang = (getOpenCorpusIndexData()?.languages as Record<string, any>)?.[selectedLangId] || {};
        const readerShard = getLearningReadersData()[selectedLangId] || null;
        const quizShard = getLearningQuizzesData()[selectedLangId] || null;
        const samples: MobileAudioShardClip[] = lrAudioClips.length > 0 ? lrAudioClips : (corpusLang.nativeAudioSamples || []);
        const chapters: any[] = selectedLangId === 'luo' ? ((dholuoChaptersData as any)?.chapters || []) : (corpusLang.audioChapters || []);
        const stories: { title: string; text: string; wordCount?: number }[] = readerShard?.stories || [];
        const bilinguals: { title: string; englishTitle?: string; text: string; english: string }[] = readerShard?.bilingualReadings || [];
        const sentences: { text: string; english?: string }[] = readerShard?.sentences || corpusLang.sampleReadings || [];
        const questions: { type: string; passage?: string; subject?: string; question: string; choices: string[]; correctIndex: number }[] = quizShard?.questions || [];
        const currentQ = questions.length > 0 ? questions[lrQuizIdx % questions.length] : null;

        return (
          <View style={{ gap: 12, paddingBottom: 20 }}>
            {/* Sub-Tab Selector */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {(
                [
                  { id: 'listen', label: `Listening (${(corpusLang.r2AudioClips || samples.length).toLocaleString()})` },
                  { id: 'read', label: `Stories (${stories.length + bilinguals.length})` },
                  ...(questions.length > 0 ? [{ id: 'quiz', label: `Quiz (${questions.length})` }] : []),
                ] as { id: 'listen' | 'read' | 'quiz'; label: string }[]
              ).map((st) => {
                const act = lrSubTab === st.id;
                return (
                  <Pressable
                    key={st.id}
                    onPress={() => setLrSubTab(st.id)}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: 999,
                      borderWidth: 1,
                      borderColor: act ? colors.gold : colors.outlineVariant,
                      backgroundColor: act ? `${colors.gold}22` : colors.surfaceContainerLow,
                    }}
                  >
                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: act ? colors.gold : colors.textSecondary }}>
                      {st.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* 1. LISTENING */}
            {lrSubTab === 'listen' && (() => {
              const activeChMeta = chapters.find((c: any) => c.id === dholuoTranscriptChapterId) || chapters[0] || null;
              const fullChs = selectedLangId === 'luo' ? ((dholuoChaptersData as any)?.chapters || []) : [];
              const activeChData = activeChMeta
                ? fullChs.find((c: any) => c.id === activeChMeta.id) || fullChs[0] || null
                : null;

              const rawPhrases: { english: string; dholuo: string }[] = activeChData?.phrases || [];
              const chQ = deferredChapterSearchQuery.trim().toLowerCase();
              const filteredPhrases = chQ
                ? rawPhrases.filter(
                    (ph) =>
                      ph.dholuo.toLowerCase().includes(chQ) ||
                      ph.english.toLowerCase().includes(chQ)
                  )
                : rawPhrases;
              const TX_PAGE = 12;
              const txPages = Math.max(1, Math.ceil(filteredPhrases.length / TX_PAGE));
              const safeTxP = Math.min(dholuoTranscriptPage, txPages);
              const visiblePhrases = filteredPhrases.slice((safeTxP - 1) * TX_PAGE, safeTxP * TX_PAGE);

              const hasAnySampleEn = samples.some((s) => Boolean(s.english));
              const audQ = deferredLrAudioSearch.trim().toLowerCase();
              const filteredSamples = audQ
                ? samples.filter(
                    (s) =>
                      (s.transcript || s.label).toLowerCase().includes(audQ) ||
                      (s.english || '').toLowerCase().includes(audQ)
                  )
                : samples;

              return (
              <View style={{ gap: 12 }}>
                {chapters.length > 0 && activeChMeta && (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 16, padding: 14, gap: 10 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
                        <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15.5, color: colors.text }}>
                          Spoken Phrasebook
                        </Text>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 11.5, color: colors.textSecondary, marginTop: 1 }}>
                          Guided audio chapters with follow-along phrases.
                        </Text>
                      </View>
                      <View style={{ paddingHorizontal: 9, paddingVertical: 4, borderRadius: 999, backgroundColor: `${colors.gold}18`, borderWidth: 1, borderColor: `${colors.gold}45` }}>
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.gold }}>
                          {chapters.length} chapters
                        </Text>
                      </View>
                    </View>

                    {/* Compact Horizontal Chapter Selector */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"} contentContainerStyle={{ gap: 7, paddingVertical: 2 }}>
                      {chapters.map((ch: any) => {
                        const cleanT = String(ch.title || '').replace(/^\d+\s*[—–-]\s*/, '');
                        const isAct = ch.id === activeChMeta.id;
                        return (
                          <Pressable
                            key={ch.id}
                            onPress={() => {
                              setDholuoTranscriptChapterId(ch.id);
                              setDholuoTranscriptPage(1);
                              setChapterSearchQuery('');
                              const curAudio = getMobileAudioState();
                              if (curAudio.url && curAudio.url !== ch.audioUrl && curAudio.playing) {
                                pauseVerifiedAudio();
                              }
                            }}
                            style={{
                              maxWidth: 180,
                              paddingHorizontal: 11,
                              paddingVertical: 8,
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: isAct ? colors.gold : colors.outlineVariant,
                              backgroundColor: isAct ? `${colors.gold}1A` : colors.surface,
                            }}
                          >
                            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 10, color: isAct ? colors.gold : colors.textMuted, letterSpacing: 0.4 }}>
                              CHAPTER {ch.number}
                            </Text>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 12, color: colors.text, marginTop: 2 }} numberOfLines={1}>
                              {cleanT}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </ScrollView>

                    {/* Active Chapter Card + Full Audio Controls */}
                    <View style={{ backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: `${colors.gold}40`, padding: 12, gap: 10 }}>
                      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                        <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 14, color: colors.text, flexGrow: 1, flexShrink: 1, minWidth: 160, lineHeight: 19 }}>
                          Chapter {activeChMeta.number}: {String(activeChMeta.title || '').replace(/^\d+\s*[—–-]\s*/, '')}
                        </Text>
                        {Boolean(activeChMeta.sizeMb) && (
                          <View style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999, borderWidth: 1, borderColor: colors.outlineVariant, backgroundColor: colors.surfaceContainer }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 10.5, color: colors.textMuted }}>
                              {activeChMeta.sizeMb} MB
                            </Text>
                          </View>
                        )}
                      </View>

                      {Array.isArray(activeChMeta.topics) && activeChMeta.topics.length > 0 && (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                          {activeChMeta.topics.map((t: string, ti: number) => (
                            <View key={ti} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999, borderWidth: 1, borderColor: colors.outlineVariant, backgroundColor: colors.surfaceContainerLow }}>
                              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 10.5, color: colors.textSecondary }}>{t}</Text>
                            </View>
                          ))}
                        </View>
                      )}

                      {/* Custom Styled Audio Player Controls (isolated subscription so 250ms ticks never re-render root) */}
                      <ChapterAudioPlayerBar
                        audioUrl={activeChMeta.audioUrl}
                        title={activeChMeta.title}
                        colors={colors}
                      />

                      {/* Follow-Along Phrasebook inside Listen & Read */}
                      {rawPhrases.length > 0 && (
                        <View style={{ borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10, gap: 8 }}>
                          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: colors.gold, letterSpacing: 0.4, flexGrow: 1, flexShrink: 1, minWidth: 150 }}>
                              FOLLOW-ALONG PHRASEBOOK ({rawPhrases.length})
                            </Text>
                            <Pressable
                              onPress={() => setDholuoShowEnglish((v) => !v)}
                              style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999, borderWidth: 1, borderColor: `${colors.gold}55`, backgroundColor: `${colors.gold}15` }}
                            >
                              <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.gold }}>
                                {dholuoShowEnglish ? 'Hide English' : 'Show English'}
                              </Text>
                            </Pressable>
                          </View>

                          <TextInput
                            value={chapterSearchQuery}
                            onChangeText={(txt) => {
                              setChapterSearchQuery(txt);
                              setDholuoTranscriptPage(1);
                            }}
                            placeholder={`Search ${rawPhrases.length} phrases in Chapter ${activeChMeta.number}...`}
                            placeholderTextColor={colors.textMuted}
                            style={{
                              backgroundColor: colors.surfaceContainerLow,
                              borderWidth: 1,
                              borderColor: colors.outlineVariant,
                              borderRadius: 10,
                              paddingHorizontal: 11,
                              paddingVertical: 8,
                              fontFamily: 'Inter_400Regular',
                              fontSize: 12.5,
                              color: colors.text,
                            }}
                          />

                          <View style={{ gap: 7 }}>
                            {visiblePhrases.map((ph, idx) => {
                              const num = (safeTxP - 1) * TX_PAGE + idx + 1;
                              return (
                                <View
                                  key={`${activeChMeta.id}-${num}`}
                                  style={{
                                    backgroundColor: colors.surfaceContainerLow,
                                    borderRadius: 11,
                                    borderWidth: 1,
                                    borderColor: colors.outlineVariant,
                                    borderLeftWidth: 3,
                                    borderLeftColor: colors.gold,
                                    paddingHorizontal: 11,
                                    paddingVertical: 9,
                                    gap: 3,
                                  }}
                                >
                                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 7 }}>
                                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 10.5, color: colors.textMuted, marginTop: 1 }}>
                                      {String(num).padStart(2, '0')}
                                    </Text>
                                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13, color: colors.text, flex: 1, lineHeight: 18 }}>
                                      {ph.dholuo}
                                    </Text>
                                  </View>
                                  {dholuoShowEnglish && (
                                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, paddingLeft: 21, lineHeight: 17 }}>
                                      {ph.english}
                                    </Text>
                                  )}
                                </View>
                              );
                            })}
                          </View>

                          {txPages > 1 && (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 2 }}>
                              <Pressable
                                disabled={safeTxP <= 1}
                                onPress={() => setDholuoTranscriptPage((p) => Math.max(1, p - 1))}
                                style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: colors.outlineVariant, opacity: safeTxP <= 1 ? 0.4 : 1 }}
                              >
                                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: colors.text }}>← Prev</Text>
                              </Pressable>
                              <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 11.5, color: colors.textMuted }}>
                                Page {safeTxP} / {txPages}
                              </Text>
                              <Pressable
                                disabled={safeTxP >= txPages}
                                onPress={() => setDholuoTranscriptPage((p) => Math.min(txPages, p + 1))}
                                style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: colors.kenyaGreen, opacity: safeTxP >= txPages ? 0.4 : 1 }}
                              >
                                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11.5, color: colors.kenyaGreen }}>Next →</Text>
                              </Pressable>
                            </View>
                          )}
                        </View>
                      )}
                    </View>
                  </View>
                )}

                {samples.length > 0 ? (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 16, padding: 14, gap: 10 }}>
                    <View style={{ gap: 2 }}>
                      <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15.5, color: colors.text }}>
                        Native Speaker Listening Deck
                      </Text>
                      <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary }}>
                        Tap any recording to hear authentic pronunciation with full transcript.
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                      <Pressable
                        onPress={() => setLrSlowMode((v) => !v)}
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderRadius: 999,
                          borderWidth: 1,
                          borderColor: lrSlowMode ? colors.kenyaGreen : colors.outlineVariant,
                          backgroundColor: lrSlowMode ? `${colors.kenyaGreen}18` : colors.surface,
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: lrSlowMode ? colors.kenyaGreen : colors.textSecondary }}>
                          {lrSlowMode ? '0.75x Slow On' : '1.0x Normal Speed'}
                        </Text>
                      </Pressable>
                      {hasAnySampleEn && (
                        <Pressable
                          onPress={() => setLrShowAudioEn((v) => !v)}
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 999,
                            borderWidth: 1,
                            borderColor: lrShowAudioEn ? colors.gold : colors.outlineVariant,
                            backgroundColor: lrShowAudioEn ? `${colors.gold}18` : colors.surface,
                          }}
                        >
                          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: lrShowAudioEn ? colors.gold : colors.textSecondary }}>
                            {lrShowAudioEn ? 'Hide English' : 'Show English'}
                          </Text>
                        </Pressable>
                      )}
                    </View>

                    <TextInput
                      value={lrAudioSearch}
                      onChangeText={setLrAudioSearch}
                      placeholder="Search recordings & transcripts..."
                      placeholderTextColor={colors.textMuted}
                      style={{
                        backgroundColor: colors.surface,
                        borderWidth: 1,
                        borderColor: colors.outlineVariant,
                        borderRadius: 10,
                        paddingHorizontal: 11,
                        paddingVertical: 8,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12.5,
                        color: colors.text,
                      }}
                    />

                    <AudioClipList
                      clips={filteredSamples.slice(0, lrAudioLimit)}
                      slowMode={lrSlowMode}
                      showEn={lrShowAudioEn}
                      colors={colors}
                    />
                    {filteredSamples.length > lrAudioLimit && (
                      <Pressable
                        onPress={() => setLrAudioLimit((n) => n + 36)}
                        style={{
                          paddingVertical: 9,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: `${colors.kenyaGreen}55`,
                          backgroundColor: `${colors.kenyaGreen}14`,
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.kenyaGreen }}>
                          Show more recordings ({filteredSamples.length - lrAudioLimit} remaining)
                        </Text>
                      </Pressable>
                    )}
                  </View>
                ) : chapters.length === 0 ? (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderRadius: 14, padding: 16 }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12.5, color: colors.textSecondary }}>
                      Native listening recordings for this language are being prepared.
                    </Text>
                  </View>
                ) : null}
              </View>
              );
            })()}

            {/* 2. STORIES & BILINGUAL READINGS */}
            {lrSubTab === 'read' && (
              <View style={{ gap: 12 }}>
                {bilinguals.length > 0 && (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: `${colors.gold}45`, borderRadius: 16, padding: 14, gap: 8 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                      <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15, color: colors.text, flexGrow: 1, flexShrink: 1, minWidth: 150 }}>
                        Bilingual Readings ({bilinguals.length})
                      </Text>
                      <Pressable
                        onPress={() => setLrShowBiEn((v) => !v)}
                        style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}
                      >
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 11, color: colors.gold }}>
                          {lrShowBiEn ? 'Hide English' : 'Show English'}
                        </Text>
                      </Pressable>
                    </View>
                    {bilinguals.slice(0, 12).map((bi, idx) => (
                      <View key={idx} style={{ backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.outlineVariant, padding: 12, gap: 6 }}>
                        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13, color: colors.gold }}>{bi.title}</Text>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12.5, color: colors.text, lineHeight: 19 }}>{bi.text}</Text>
                        {lrShowBiEn && (
                          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.textSecondary, lineHeight: 18, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 6 }}>
                            {bi.english}
                          </Text>
                        )}
                      </View>
                    ))}
                  </View>
                )}

                {stories.length > 0 && (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 16, padding: 14, gap: 8 }}>
                    <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15, color: colors.text }}>
                      Short Stories ({stories.length})
                    </Text>
                    {stories.slice(0, 20).map((st, idx) => {
                      const open = lrExpandedStory === idx;
                      return (
                        <Pressable
                          key={idx}
                          onPress={() => setLrExpandedStory(open ? null : idx)}
                          style={{ backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: open ? colors.gold : colors.outlineVariant, padding: 12, gap: 6 }}
                        >
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13, color: colors.text, flex: 1 }}>{st.title}</Text>
                            <Feather name={open ? 'chevron-up' : 'chevron-down'} size={16} color={colors.gold} />
                          </View>
                          {open && (
                            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12.5, color: colors.textSecondary, lineHeight: 19 }}>
                              {st.text}
                            </Text>
                          )}
                        </Pressable>
                      );
                    })}
                  </View>
                )}

                {sentences.length > 0 && (
                  <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 16, padding: 14, gap: 6 }}>
                    <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15, color: colors.text }}>
                      Everyday Sentences
                    </Text>
                    {sentences.slice(0, 12).map((s, idx) => (
                      <View key={idx} style={{ backgroundColor: colors.surface, borderRadius: 10, borderWidth: 1, borderColor: colors.outlineVariant, padding: 10 }}>
                        <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12.5, color: colors.text }}>{s.text}</Text>
                        {Boolean(s.english) && (
                          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 11.5, color: colors.textSecondary, marginTop: 3 }}>{s.english}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            )}

            {/* 3. READING & KNOWLEDGE COMPREHENSION QUIZ */}
            {lrSubTab === 'quiz' && currentQ && (
              <View style={{ backgroundColor: colors.surfaceContainer, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 16, padding: 14, gap: 10 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 15, color: colors.text, flexShrink: 1 }}>
                    Reading &amp; Knowledge Quiz
                  </Text>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, color: colors.gold }}>
                    Score: {lrQuizScore.right} / {lrQuizScore.total}
                  </Text>
                </View>
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 11.5, color: colors.textMuted }}>
                  Question {(lrQuizIdx % questions.length) + 1} of {questions.length}
                </Text>
                {Boolean(currentQ.passage) && (
                  <View style={{ backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: `${colors.gold}40`, padding: 12 }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 13, color: colors.text, lineHeight: 20 }}>
                      {currentQ.passage}
                    </Text>
                  </View>
                )}
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13.5, color: colors.text }}>
                  {currentQ.question}
                </Text>
                <View style={{ gap: 8 }}>
                  {currentQ.choices.map((ch, idx) => {
                    const isPicked = lrQuizChoice === idx;
                    const isCorrect = idx === currentQ.correctIndex;
                    const bColor = lrQuizChoice !== null
                      ? isCorrect ? colors.kenyaGreen : isPicked ? '#DC2626' : colors.outlineVariant
                      : colors.outlineVariant;
                    return (
                      <Pressable
                        key={idx}
                        disabled={lrQuizChoice !== null}
                        onPress={() => {
                          setLrQuizChoice(idx);
                          setLrQuizScore((sc) => ({ right: sc.right + (isCorrect ? 1 : 0), total: sc.total + 1 }));
                        }}
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 10,
                          borderRadius: 11,
                          borderWidth: 1,
                          borderColor: bColor,
                          backgroundColor: colors.surface,
                        }}
                      >
                        <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 12.5, color: colors.text }}>
                          {ch}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
                {lrQuizChoice !== null && (
                  <Pressable
                    onPress={() => { setLrQuizChoice(null); setLrQuizIdx((i) => i + 1); }}
                    style={{ backgroundColor: colors.gold, borderRadius: 12, paddingVertical: 11, alignItems: 'center' }}
                  >
                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 13, color: '#000000' }}>Next Question →</Text>
                  </Pressable>
                )}
              </View>
            )}
          </View>
        );
      })()}

      {/* ========================================================================
          TAB 4: GRAMMAR REFERENCE (WITH MARKDOWN BOLD/ITALIC/BULLET FORMATTING)
         ======================================================================== */}
      {activeTab === 'grammar' && (
        <View style={styles.grammarTabWrap}>
          {(() => {
            const corpusLang = (
              (getOpenCorpusIndexData()?.languages || {}) as Record<
                string,
                {
                  r2AudioClips?: number;
                  nativeAudioSamples?: { slug: string; label: string; audioUrl: string }[];
                  typology?: { iso639_3?: string; glottocode?: string; familyPath?: string[] } | null;
                  cldr?: { locale?: string; months?: string[]; days?: string[] } | null;
                  sampleReadings?: { text: string; english?: string; source: string }[];
                  topFrequencyWords?: { word: string }[];
                  phonemes?: string[];
                  morphologySamples?: { lemma: string; form: string; features: string }[];
                  wikimediaArticles?: { title: string; url: string; source: string }[];
                  audioChapters?: { id: string; title: string; audioUrl: string; fallbackUrl?: string; license: string }[];
                }
              >
            )[selectedLangId];
            if (!corpusLang) return null;
            return (
              <View
                style={{
                  backgroundColor: colors.surfaceContainer,
                  borderColor: `${colors.gold}40`,
                  borderWidth: 1,
                  borderRadius: 14,
                  padding: 12,
                  marginBottom: 12,
                  gap: 6,
                }}
              >
                <View style={{ gap: 12 }}>
                  {/* Calendar: Days of the Week & Months */}
                  {corpusLang.cldr && ((corpusLang.cldr.days && corpusLang.cldr.days.length > 0) || (corpusLang.cldr.months && corpusLang.cldr.months.length > 0)) && (
                    <View style={{ gap: 10 }}>
                      <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                        <Text style={{ fontFamily: "Outfit_700Bold", fontSize: 14.5, color: colors.text, flexShrink: 1 }}>
                          Calendar &amp; Time Vocabulary
                        </Text>
                        <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.gold }}>
                          DAYS &amp; MONTHS
                        </Text>
                      </View>
                      {corpusLang.cldr.days && corpusLang.cldr.days.length > 0 && (
                        <View style={{ gap: 6 }}>
                          <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.textMuted, letterSpacing: 0.5 }}>
                            DAYS OF THE WEEK ({corpusLang.cldr.days.length})
                          </Text>
                          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                            {corpusLang.cldr.days.map((day, dIdx) => (
                              <View
                                key={`day-${dIdx}`}
                                style={{
                                  paddingHorizontal: 10,
                                  paddingVertical: 5,
                                  borderRadius: 999,
                                  borderWidth: 1,
                                  borderColor: `${colors.gold}45`,
                                  backgroundColor: colors.surface,
                                }}
                              >
                                <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: colors.text }}>
                                  {day}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      )}
                      {corpusLang.cldr.months && corpusLang.cldr.months.length > 0 && (
                        <View style={{ gap: 6 }}>
                          <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.textMuted, letterSpacing: 0.5 }}>
                            MONTHS ({Math.min(12, corpusLang.cldr.months.length)})
                          </Text>
                          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                            {corpusLang.cldr.months.slice(0, 12).map((mo, mIdx) => (
                              <View
                                key={`mo-${mIdx}`}
                                style={{
                                  paddingHorizontal: 9,
                                  paddingVertical: 5,
                                  borderRadius: 10,
                                  borderWidth: 1,
                                  borderColor: colors.outlineVariant,
                                  backgroundColor: colors.surface,
                                }}
                              >
                                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 11.5, color: colors.text }}>
                                  {mIdx + 1}. {mo}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      )}
                    </View>
                  )}

                  {/* Everyday High-Frequency Core Words */}
                  {corpusLang.topFrequencyWords && corpusLang.topFrequencyWords.length > 0 && (
                    <View style={{ gap: 6, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10 }}>
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.kenyaGreen, letterSpacing: 0.5 }}>
                          EVERYDAY CORE WORDS ({corpusLang.topFrequencyWords.length})
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                        {corpusLang.topFrequencyWords.slice(0, 24).map((w, wIdx) => (
                          <View
                            key={`fw-${wIdx}`}
                            style={{
                              paddingHorizontal: 9,
                              paddingVertical: 4,
                              borderRadius: 999,
                              borderWidth: 1,
                              borderColor: `${colors.kenyaGreen}35`,
                              backgroundColor: `${colors.kenyaGreen}10`,
                            }}
                          >
                            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: colors.text }}>
                              {w.word}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}

                  {/* Sound Inventory (IPA) */}
                  {corpusLang.phonemes && corpusLang.phonemes.length > 0 && (
                    <View style={{ gap: 6, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10 }}>
                      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.gold, letterSpacing: 0.5 }}>
                        SOUND INVENTORY (IPA · {corpusLang.phonemes.length})
                      </Text>
                      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
                        {corpusLang.phonemes.map((ph, pIdx) => (
                          <View
                            key={`ph-${pIdx}`}
                            style={{
                              paddingHorizontal: 8,
                              paddingVertical: 3,
                              borderRadius: 7,
                              borderWidth: 1,
                              borderColor: colors.outlineVariant,
                              backgroundColor: colors.surface,
                            }}
                          >
                            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: colors.text }}>
                              /{ph}/
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}

                  {/* Word Formation / Morphology */}
                  {corpusLang.morphologySamples && corpusLang.morphologySamples.length > 0 && (
                    <View style={{ gap: 6, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10 }}>
                      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.gold, letterSpacing: 0.5 }}>
                        WORD FORMATION PATTERNS
                      </Text>
                      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                        {corpusLang.morphologySamples.slice(0, 10).map((m, mIdx) => (
                          <View
                            key={`mf-${mIdx}`}
                            style={{
                              paddingHorizontal: 9,
                              paddingVertical: 4,
                              borderRadius: 8,
                              borderWidth: 1,
                              borderColor: colors.outlineVariant,
                              backgroundColor: colors.surface,
                            }}
                          >
                            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: colors.text }}>
                              {m.form} <Text style={{ fontFamily: "Inter_400Regular", color: colors.textSecondary }}>({m.lemma})</Text>
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}

                  {/* Reading Practice */}
                  {corpusLang.sampleReadings && corpusLang.sampleReadings.length > 0 && (
                    <View style={{ gap: 7, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10 }}>
                      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.kenyaGreen, letterSpacing: 0.5 }}>
                        READING EXCERPTS ({corpusLang.sampleReadings.length})
                      </Text>
                      {corpusLang.sampleReadings.slice(0, 4).map((rd, rIdx) => (
                        <View
                          key={`rd-${rIdx}`}
                          style={{
                            backgroundColor: colors.surface,
                            borderRadius: 11,
                            paddingHorizontal: 11,
                            paddingVertical: 9,
                            borderWidth: 1,
                            borderColor: colors.outlineVariant,
                            borderLeftWidth: 3,
                            borderLeftColor: colors.kenyaGreen,
                            gap: 4,
                          }}
                        >
                          <Text style={{ fontFamily: "Inter_500Medium", fontSize: 12, color: colors.text, lineHeight: 18 }}>
                            {rd.text}
                          </Text>
                          {Boolean(rd.english) && (
                            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 11.5, color: colors.textSecondary, lineHeight: 17 }}>
                              {rd.english}
                            </Text>
                          )}
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Open-Access Articles */}
                  {corpusLang.wikimediaArticles && corpusLang.wikimediaArticles.length > 0 && (
                    <View style={{ gap: 6, borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 10 }}>
                      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 10.5, color: colors.kenyaGreen, letterSpacing: 0.5 }}>
                        OPEN-ACCESS ARTICLES ({corpusLang.wikimediaArticles[0]?.source})
                      </Text>
                      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                        {corpusLang.wikimediaArticles.map((art, aIdx) => (
                          <Pressable
                            key={`wa-${aIdx}`}
                            onPress={() => Linking.openURL(art.url).catch(() => {})}
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 5,
                              borderRadius: 999,
                              borderWidth: 1,
                              borderColor: `${colors.kenyaGreen}45`,
                              backgroundColor: `${colors.kenyaGreen}12`,
                            }}
                          >
                            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: colors.kenyaGreen }}>
                              {art.title}
                            </Text>
                          </Pressable>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              </View>
            );
          })()}
          {/* M3 Search Input */}
          <View
            style={[
              styles.m3SearchBar,
              { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
            ]}
          >
            <Feather name="search" size={16} color={colors.textMuted} />
            <TextInput
            multiline={false}
            numberOfLines={1}
              value={grammarSearch}
              onChangeText={setGrammarSearch}
              placeholder="Search grammar rules or examples..."
              placeholderTextColor={colors.textMuted}
              style={{ flex: 1, minWidth: 0, fontSize: 13, color: colors.text, paddingVertical: 6, paddingHorizontal: 0 }}
            />
            {grammarSearch.length > 0 && (
              <Pressable onPress={() => setGrammarSearch('')}>
                <Feather name="x-circle" size={15} color={colors.textMuted} />
              </Pressable>
            )}
          </View>

          {filteredGrammar.map((section) => {
            const isOpen = expandedGrammarId === section.id;
            const lines = section.content.split('\n');

            return (
              <View
                key={section.id}
                style={[
                  styles.grammarAccordionCard,
                  {
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: isOpen ? langColor : colors.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setExpandedGrammarId(isOpen ? null : section.id)}
                  style={styles.grammarHeaderRow}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.grammarSectionTitle, { color: colors.text }]}>
                      {section.title}
                    </Text>
                    <Text
                      style={[styles.grammarSectionSummary, { color: colors.textSecondary }]}
                      
                    >
                      {section.summary}
                    </Text>
                  </View>
                  <Feather
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textSecondary}
                  />
                </Pressable>

                {isOpen && (
                  <View style={[styles.grammarBodyWrap, { borderTopColor: colors.outlineVariant }]}>
                    {lines.map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <View key={lIdx} style={{ height: 6 }} />;
                      const isBullet = trimmed.startsWith('- ');
                      const cleanLine = isBullet ? trimmed.slice(2) : trimmed;

                      return (
                        <View
                          key={lIdx}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            paddingLeft: isBullet ? 8 : 0,
                            marginBottom: 4,
                          }}
                        >
                          {isBullet && (
                            <Text style={{ color: langColor, fontWeight: '800', marginRight: 6 }}>
                              •
                            </Text>
                          )}
                          <View style={{ flex: 1 }}>
                            {renderFormattedText(
                              cleanLine,
                              { fontSize: 13, lineHeight: 20, color: colors.textSecondary },
                              colors.text,
                              langColor,
                              colors.surfaceContainerHigh
                            )}
                          </View>
                        </View>
                      );
                    })}

                    {section.examples && section.examples.length > 0 && (
                      <View style={styles.grammarExamplesBox}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontWeight: '800',
                            color: langColor,
                            marginBottom: 6,
                          }}
                        >
                          EXAMPLES ({section.examples.length})
                        </Text>
                        {section.examples.slice(0, 8).map((ex, eIdx) => {
                          const targetKey = Object.keys(ex).find(
                            (k) => k !== 'english' && k !== 'explanation'
                          );
                          const targetText = targetKey ? (ex as any)[targetKey] : '';
                          return (
                          <View
                            key={eIdx}
                            style={[
                              styles.grammarExampleItem,
                              {
                                backgroundColor: colors.surface,
                                borderColor: colors.outlineVariant,
                              },
                            ]}
                          >
                            <Text style={{ fontSize: 13, fontWeight: '800', color: colors.text }}>
                              {targetText}
                            </Text>
                            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                              {ex.english}
                            </Text>
                            {ex.explanation ? (
                              <Text style={{ fontSize: 11, color: langColor, marginTop: 2 }}>
                                {ex.explanation}
                              </Text>
                            ) : null}
                          </View>
                          );
                        })}
                      </View>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
      {/* ========================================================================
          TAB 5: PROVERBS, RIDDLES & ORAL WISDOM (LOCKED TO SELECTED LANGUAGE)
         ======================================================================== */}
      {activeTab === 'proverbs' && (
        <View style={styles.grammarTabWrap}>
          {/* Sub-Tabs for Dholuo only (Proverbs | Riddles | Twisters) */}
          {selectedLangId === 'luo' && (
            <ExpandablePillRow contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 2 }}>
              {[
                { id: 'proverbs' as const, label: `Proverbs (${luoProverbs.length})` },
                { id: 'riddles' as const, label: `Riddles (${luoRiddles.length})` },
                { id: 'twisters' as const, label: `Twisters (${luoTongueTwisters.length})` },
              ].map((sub) => {
                const active = luoSubTab === sub.id;
                return (
                  <Pressable
                    key={sub.id}
                    onPress={() => {
                      setLuoSubTab(sub.id);
                      setProverbPage(1);
                    }}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 999,
                      borderWidth: 1,
                      backgroundColor: active ? 'rgba(14,165,233,0.18)' : colors.surfaceContainerLow,
                      borderColor: active ? '#0EA5E9' : colors.outlineVariant,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: active ? '800' : '600',
                        color: active ? '#0EA5E9' : colors.textSecondary,
                      }}
                    >
                      {sub.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Search Input (with bottom spacing before theme pills) */}
          <View
            style={[
              styles.m3SearchBar,
              {
                backgroundColor: colors.surfaceContainerLow,
                borderColor: colors.outlineVariant,
                marginBottom: 4,
              },
            ]}
          >
            <Feather name="search" size={16} color={colors.textMuted} />
            <TextInput
            multiline={false}
            numberOfLines={1}
              value={proverbSearch}
              onChangeText={(t) => {
                setProverbSearch(t);
                setProverbPage(1);
              }}
              placeholder="Search proverbs or meanings..."
              placeholderTextColor={colors.textMuted}
              numberOfLines={1}
              style={{ flex: 1, minWidth: 0, fontSize: 13, color: colors.text, paddingVertical: 6, paddingHorizontal: 0 }}
            />
            {proverbSearch.length > 0 && (
              <Pressable onPress={() => setProverbSearch('')}>
                <Feather name="x-circle" size={15} color={colors.textMuted} />
              </Pressable>
            )}
          </View>

          {/* Horizontal Scrolling Pill Filter for Themes */}
          {(selectedLangId !== 'luo' || luoSubTab === 'proverbs') && (
            <ExpandablePillRow contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 2 }}>
              {(selectedLangId === 'kikuyu'
                ? [
                    'All',
                    ...Array.from(
                      new Set(
                        (Array.isArray(kikuyuProverbsData) ? kikuyuProverbsData : [])
                          .map((item: any) => item.category)
                          .filter(Boolean)
                      )
                    ),
                  ]
                : selectedLangId === 'luo'
                ? ['All', 'wisdom', 'warning', 'truth', 'patience', 'family', 'character', 'life']
                : [
                    'All',
                    ...Array.from(
                      new Set(
                        getCulturalWisdomForLanguageLazy(selectedLangId)
                          .map((item) => item.category)
                          .filter(Boolean)
                      )
                    ),
                    'tradition',
                  ]
              ).map((cat: string) => {
                const active = proverbCategory === cat;
                return (
                  <Pressable
                    key={cat}
                    onPress={() => {
                      setProverbCategory(cat);
                      setProverbPage(1);
                    }}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 999,
                      borderWidth: 1,
                      backgroundColor: active ? `${langColor}22` : colors.surfaceContainerLow,
                      borderColor: active ? langColor : colors.outlineVariant,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11.5,
                        fontWeight: active ? '800' : '600',
                        color: active ? langColor : colors.textSecondary,
                        textTransform: 'capitalize',
                      }}
                    >
                      {cat === 'All' ? 'All Themes' : cat}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* 1. Kikuyu Proverbs List */}
          {selectedLangId === 'kikuyu' &&
            (() => {
              const filtered = filteredKikuyuProverbs;
              const visible = filtered.slice(0, proverbPage * 20);
              return (
                <View style={{ gap: 10 }}>
                  <Text style={{ fontSize: 11, color: colors.textMuted }}>
                    Showing {visible.length} of {filtered.length} Gĩkũyũ proverbs
                  </Text>
                  {visible.map((p: any) => (
                    <View
                      key={p.id}
                      style={[
                        styles.grammarAccordionCard,
                        {
                          backgroundColor: colors.surfaceContainerLow,
                          borderColor: colors.outlineVariant,
                          padding: 14,
                          gap: 6,
                        },
                      ]}
                    >
                      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 6 }}>
                        <Text style={{ fontSize: 11, fontWeight: '800', color: '#10B981' }}>
                          Proverb #{p.id}
                        </Text>
                        <Text style={{ fontSize: 11, color: colors.textMuted }}>{p.category}</Text>
                      </View>
                      <Text style={{ fontSize: 15, fontWeight: '800', color: colors.text }}>
                        “{p.kikuyu}”
                      </Text>
                      <Text style={{ fontSize: 12.5, fontStyle: 'italic', color: colors.textSecondary }}>
                        Literal: {p.translation}
                      </Text>
                      {p.explanation
                        ? renderFormattedText(
                            p.explanation,
                            { fontSize: 12, color: colors.textMuted, marginTop: 2 },
                            colors.text,
                            colors.textSecondary,
                            colors.surfaceContainerHigh
                          )
                        : null}
                      {p.englishEquivalent ? (
                        <Text style={{ fontSize: 11.5, color: '#10B981', marginTop: 2 }}>
                          Equivalent: {p.englishEquivalent}
                        </Text>
                      ) : null}
                    </View>
                  ))}
                  {filtered.length > visible.length && (
                    <Pressable
                      onPress={() => setProverbPage((pg) => pg + 1)}
                      style={[
                        styles.m3OutlinedBtn,
                        { alignSelf: 'center', borderColor: langColor },
                      ]}
                    >
                      <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                        Load More ({filtered.length - visible.length} remaining)
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}

          {/* 2. Dholuo Proverbs / Riddles / Twisters */}
          {selectedLangId === 'luo' && luoSubTab === 'proverbs' &&
            (() => {
              const filtered = filteredLuoProverbs;
              const visible = filtered.slice(0, proverbPage * 20);
              return (
                <View style={{ gap: 10 }}>
                  <Text style={{ fontSize: 11, color: colors.textMuted }}>
                    Showing {visible.length} of {filtered.length} Dholuo proverbs
                  </Text>
                  {visible.map((p, idx) => (
                    <View
                      key={p.id || idx}
                      style={[
                        styles.grammarAccordionCard,
                        {
                          backgroundColor: colors.surfaceContainerLow,
                          borderColor: colors.outlineVariant,
                          padding: 14,
                          gap: 6,
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 15, fontWeight: '800', color: colors.text }}>
                        “{p.luo}”
                      </Text>
                      <Text style={{ fontSize: 12.5, fontStyle: 'italic', color: colors.textSecondary }}>
                        {p.english}
                      </Text>
                      {(p.meaning || p.explanation)
                        ? renderFormattedText(
                            p.meaning || p.explanation || "",
                            { fontSize: 12, color: colors.textMuted },
                            colors.text,
                            colors.textSecondary,
                            colors.surfaceContainerHigh
                          )
                        : null}
                    </View>
                  ))}
                  {filtered.length > visible.length && (
                    <Pressable
                      onPress={() => setProverbPage((pg) => pg + 1)}
                      style={[
                        styles.m3OutlinedBtn,
                        { alignSelf: 'center', borderColor: '#0EA5E9' },
                      ]}
                    >
                      <Text style={{ fontSize: 12, fontWeight: '800', color: '#0EA5E9' }}>
                        Load More ({filtered.length - visible.length} remaining)
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}

          {selectedLangId === 'luo' && luoSubTab === 'riddles' &&
            (() => {
              const filteredRiddles = filteredLuoRiddles;
              const visibleRiddles = filteredRiddles.slice(0, proverbPage * 20);
              return (
                <View style={{ gap: 10 }}>
                  {visibleRiddles.map((r) => {
                  const open = !!revealedRiddles[r.id];
                  return (
                    <View
                      key={r.id}
                      style={[
                        styles.grammarAccordionCard,
                        {
                          backgroundColor: colors.surfaceContainerLow,
                          borderColor: colors.outlineVariant,
                          padding: 14,
                          gap: 6,
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 14, fontWeight: '800', color: colors.text }}>
                        “{r.luo}”
                      </Text>
                      <Text style={{ fontSize: 12.5, color: colors.textSecondary }}>
                        {r.english}
                      </Text>
                      <Pressable
                        onPress={() =>
                          setRevealedRiddles((prev) => ({ ...prev, [r.id]: !prev[r.id] }))
                        }
                        style={{ alignSelf: 'flex-start', marginTop: 4 }}
                      >
                        <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                          {open ? 'Hide Answer' : 'Tap to Reveal Answer'}
                        </Text>
                      </Pressable>
                      {open && (
                        <Text style={{ fontSize: 12.5, fontWeight: '700', color: '#10B981' }}>
                          → {r.answer}
                        </Text>
                      )}
                    </View>
                  );
                })}
                  {filteredRiddles.length > visibleRiddles.length && (
                    <Pressable
                      onPress={() => setProverbPage((p) => p + 1)}
                      style={[
                        styles.m3OutlinedBtn,
                        { borderColor: langColor, alignSelf: 'center', marginTop: 6 },
                      ]}
                    >
                      <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                        Load More ({filteredRiddles.length - visibleRiddles.length} remaining)
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}

          {selectedLangId === 'luo' && luoSubTab === 'twisters' && (
            <View style={{ gap: 10 }}>
              {luoTongueTwisters.map((t) => (
                <View
                  key={t.id}
                  style={[
                    styles.grammarAccordionCard,
                    {
                      backgroundColor: colors.surfaceContainerLow,
                      borderColor: colors.outlineVariant,
                      padding: 14,
                      gap: 6,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 14, fontWeight: '800', color: colors.text }}>
                    “{t.luo}”
                  </Text>
                  <Text style={{ fontSize: 12.5, color: colors.textSecondary }}>{t.english}</Text>
                </View>
              ))}
            </View>
          )}

          {/* 3. Luhya, Kamba, Kisii, Maasai, Teso & Turkana Wisdom (Locked to selectedLangId) */}
          {selectedLangId !== 'kikuyu' && selectedLangId !== 'luo' &&
            (() => {
              const filtered = filteredCulturalWisdom;
              const visible = filtered.slice(0, proverbPage * 20);
              return (
                <View style={{ gap: 10 }}>
                  <Text style={{ fontSize: 11, color: colors.textMuted }}>
                    Showing {visible.length} of {filtered.length} {currentCourse?.config.name} proverbs & cultural wisdom entries
                  </Text>
                  {visible.map((item, idx) => (
                    <View
                      key={item.id}
                      style={[
                        styles.grammarAccordionCard,
                        {
                          backgroundColor: colors.surfaceContainerLow,
                          borderColor: colors.outlineVariant,
                          padding: 14,
                          gap: 6,
                        },
                      ]}
                    >
                      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 6 }}>
                        <Text style={{ fontSize: 11, fontWeight: '800', color: langColor }}>
                          {item.category === 'tradition' ? `Tradition #${idx + 1}` : `Proverb #${idx + 1}`}
                        </Text>
                        <Text style={{ fontSize: 11, color: colors.textMuted, textTransform: 'capitalize' }}>
                          {item.category}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 15, fontWeight: '800', color: colors.text }}>
                        “{item.nativeText}”
                      </Text>
                      {renderFormattedText(
                        `Literal: ${item.literalTranslation}`,
                        { fontSize: 12.5, fontStyle: 'italic', color: colors.textSecondary },
                        colors.text,
                        colors.textSecondary,
                        colors.surfaceContainerHigh
                      )}
                      {renderFormattedText(
                        item.meaning,
                        { fontSize: 12, color: colors.textMuted, marginTop: 2 },
                        colors.text,
                        colors.textSecondary,
                        colors.surfaceContainerHigh
                      )}
                      {item.englishEquivalent ? (
                        <Text style={{ fontSize: 11.5, color: langColor, marginTop: 2 }}>
                          Equivalent: {item.englishEquivalent}
                        </Text>
                      ) : null}
                    </View>
                  ))}
                  {filtered.length > visible.length && (
                    <Pressable
                      onPress={() => setProverbPage((p) => p + 1)}
                      style={[
                        styles.m3OutlinedBtn,
                        { borderColor: langColor, alignSelf: 'center', marginTop: 6 },
                      ]}
                    >
                      <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                        Load More ({filtered.length - visible.length} remaining)
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}
        </View>
      )}
    </View>
  );
}

