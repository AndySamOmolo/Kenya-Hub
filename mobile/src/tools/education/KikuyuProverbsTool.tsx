import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles } from "./shared";
import proverbsData from "../../shared/data/kikuyu-proverbs.json";

/** 3. Kikuyu Proverbs (Thimo cia Gĩkũyũ) */
interface ProverbCategory {
  id: string;
  label: string;
  keywords: string[];
}

const PROVERB_CATEGORIES: ProverbCategory[] = [
  { id: "all", label: "All Themes", keywords: [] },
  {
    id: "wisdom",
    label: "Wisdom & Character",
    keywords: ["wisdom", "wise", "fool", "know", "learn", "advice", "truth", "lie", "word", "tongue", "mouth", "speak", "talk", "ear", "eye", "heart", "mind", "patience", "hurry", "haste", "pride", "humble", "old", "elder", "age"],
  },
  {
    id: "family",
    label: "Family & Kinship",
    keywords: ["child", "mother", "father", "son", "daughter", "wife", "husband", "marry", "marriage", "home", "house", "family", "born", "birth", "woman", "man", "girl", "boy", "parent", "brother", "sister", "in-law", "womb"],
  },
  {
    id: "work",
    label: "Farming & Wealth",
    keywords: ["work", "wealth", "rich", "poor", "poverty", "cultivat", "dig", "plant", "harvest", "garden", "field", "cattle", "cow", "goat", "sheep", "property", "debt", "borrow", "buy", "sell", "market", "food", "eat", "hunger", "belly", "stomach", "hand", "sweat"],
  },
  {
    id: "community",
    label: "Community & Friends",
    keywords: ["friend", "neighbour", "neighbor", "guest", "stranger", "help", "share", "give", "together", "alone", "one", "two", "many", "people", "village", "path", "road", "visit", "generous", "mean", "selfish", "peace", "quarrel"],
  },
  {
    id: "caution",
    label: "Caution & Danger",
    keywords: ["danger", "fear", "careful", "warn", "trap", "snake", "hyena", "leopard", "lion", "thief", "steal", "war", "fight", "spear", "shield", "sword", "club", "death", "die", "sick", "disease", "fire", "water", "river", "night", "dark", "run", "hide"],
  },
  {
    id: "nature",
    label: "Nature & Animals",
    keywords: ["tree", "forest", "bird", "monkey", "elephant", "dog", "frog", "bee", "honey", "rain", "sun", "wind", "mountain", "hill", "stone", "earth", "grass", "leaf", "fruit", "seed", "banana", "millet", "maize", "gourd"],
  },
  {
    id: "justice",
    label: "Justice & Truth",
    keywords: ["law", "court", "judge", "case", "elder", "council", "kiama", "right", "wrong", "guilt", "innocent", "punish", "pay", "fine", "oath", "witness", "god", "ngai", "curse", "bless"],
  },
];

function normalizeKikuyuText(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getProverbCategories(p: any): string[] {
  const haystack = `${p.translation || ""} ${p.explanation || ""} ${p.englishEquivalent || ""}`.toLowerCase();
  const matched: string[] = [];
  for (const cat of PROVERB_CATEGORIES) {
    if (cat.id === "all") continue;
    if (cat.keywords.some((kw) => haystack.includes(kw))) {
      matched.push(cat.id);
    }
  }
  return matched;
}

export function KikuyuProverbsTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onlyWithEquivalent, setOnlyWithEquivalent] = useState(false);
  const [sortBy, setSortBy] = useState<"id-asc" | "id-desc" | "alpha">("id-asc");
  const [showGuide, setShowGuide] = useState(false);
  const [page, setPage] = useState(1);
  const _mountRef = useRef(false);
  useEffect(() => {
    if (!_mountRef.current) { _mountRef.current = true; return; }
    onScrollToTop?.();
  }, [page, onScrollToTop]);
  const pageSize = 25;

  const proverbs = Array.isArray(proverbsData) ? proverbsData : [];

  const proverbsWithMeta = useMemo(() => {
    return proverbs.map((p: any) => ({
      ...p,
      categories: getProverbCategories(p),
      normKikuyu: normalizeKikuyuText(p.kikuyu || ""),
      normTranslation: normalizeKikuyuText(p.translation || ""),
      normExplanation: normalizeKikuyuText(p.explanation || ""),
      normEquivalent: normalizeKikuyuText(p.englishEquivalent || ""),
    }));
  }, [proverbs]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: proverbsWithMeta.length };
    for (const cat of PROVERB_CATEGORIES) {
      if (cat.id !== "all") counts[cat.id] = 0;
    }
    for (const p of proverbsWithMeta) {
      for (const c of p.categories) {
        counts[c] = (counts[c] || 0) + 1;
      }
    }
    return counts;
  }, [proverbsWithMeta]);

  const [randomIdx, setRandomIdx] = useState(0);

  const filtered = useMemo(() => {
    const rawQ = q.trim().toLowerCase();
    const normQ = normalizeKikuyuText(rawQ);

    const result = proverbsWithMeta.filter((p) => {
      if (selectedCategory !== "all" && !p.categories.includes(selectedCategory)) {
        return false;
      }
      if (onlyWithEquivalent && !p.englishEquivalent) {
        return false;
      }
      if (!rawQ) return true;
      if (/^\d+$/.test(rawQ) && p.id === Number(rawQ)) return true;
      return (
        (p.kikuyu && p.kikuyu.toLowerCase().includes(rawQ)) ||
        p.normKikuyu.includes(normQ) ||
        p.normTranslation.includes(normQ) ||
        p.normExplanation.includes(normQ) ||
        p.normEquivalent.includes(normQ)
      );
    });

    const sorted = [...result];
    if (sortBy === "id-asc") sorted.sort((a, b) => (a.id || 0) - (b.id || 0));
    else if (sortBy === "id-desc") sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
    else if (sortBy === "alpha") sorted.sort((a, b) => (a.kikuyu || "").localeCompare(b.kikuyu || ""));
    return sorted;
  }, [q, selectedCategory, onlyWithEquivalent, sortBy, proverbsWithMeta]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const handleRandom = () => {
    if (proverbs.length > 0) {
      setRandomIdx(Math.floor(Math.random() * proverbs.length));
    }
  };

  const featured: any = proverbs[randomIdx] || proverbs[0];

  return (
    <View style={styles.toolWrap}>
      {/* Featured Proverb Card */}
      {featured && (
        <View style={styles.featuredCard}>
          <View style={styles.featuredTop}>
            <Text style={styles.featuredLabel}>
              THIMO YA UMŨTHĨ (#{featured.id || randomIdx + 1} OF {proverbs.length})
            </Text>
            <Pressable onPress={handleRandom} style={styles.randomBtn} hitSlop={8}>
              <Ionicons name="dice-outline" size={16} color={theme.gold} />
              <Text style={styles.randomBtnText}>Random</Text>
            </Pressable>
          </View>
          <Text style={styles.kikuyuText}>&ldquo;{featured.kikuyu}&rdquo;</Text>
          <Text style={styles.translationText}>{featured.translation}</Text>
          {featured.explanation ? (
            <Text style={styles.explanationText}>{featured.explanation}</Text>
          ) : null}
          {featured.englishEquivalent ? (
            <View style={{ marginTop: 8, backgroundColor: "rgba(47, 164, 99, 0.14)", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 11, fontWeight: "700", color: theme.kenyaGreenLight }}>
                English Equivalent: &ldquo;{featured.englishEquivalent}&rdquo;
              </Text>
            </View>
          ) : null}
        </View>
      )}

      {/* Collapsible Cultural & Vowel Pronunciation Guide */}
      <View style={styles.card}>
        <Pressable
          onPress={() => setShowGuide(!showGuide)}
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
            <Ionicons name="book-outline" size={16} color={theme.gold} />
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.textPrimary }}>
              Gĩkũyũ Pronunciation & Cultural Guide
            </Text>
          </View>
          <Ionicons
            name={showGuide ? "chevron-up" : "chevron-down"}
            size={18}
            color={theme.gold}
          />
        </Pressable>

        {showGuide && (
          <View style={{ marginTop: 12, gap: 10, borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10 }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                The 7 Vowels of Gĩkũyũ
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                Gĩkũyũ has 7 vowels: a, e, i, o, u plus two tilded vowels:{"\n"}
                • <Text style={{ fontWeight: "800", color: theme.textPrimary }}>ĩ</Text> — pronounced like &ldquo;e&rdquo; in &ldquo;they&rdquo; (closed mid-front vowel, e.g. Gĩkũyũ, tĩri).{"\n"}
                • <Text style={{ fontWeight: "800", color: theme.textPrimary }}>ũ</Text> — pronounced like &ldquo;o&rdquo; in &ldquo;go&rdquo; (closed mid-back vowel, e.g. mũndũ, nyũmba).{"\n"}
                Tip: Our search is diacritic-tolerant — typing &ldquo;mundu&rdquo; matches &ldquo;mũndũ&rdquo;.
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                Proverbs as Law & Precedent (Kĩama)
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                Among the Agĩkũyũ, proverbs (thimo) served as legal maxims in elders&apos; council (Kĩama) deliberations, moral instruction around the evening hearth (rũriĩ), and rhetorical shorthand in negotiations.
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                Common Cultural Terms in the Collection
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Ngai / Mwene-Nyaga</Text>: God, Creator dwelling on Mt. Kenya (Kĩrĩnyaga){"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Mũndũ / Andũ</Text>: Person / People{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Mũciĩ / Nyũmba</Text>: Homestead / Family house{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Kĩama</Text>: Council of Elders{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Hiti / Njogu / Ng&apos;ombe / Mbũri</Text>: Hyena / Elephant / Cattle / Goat
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={q}
          onChangeText={(val) => {
            setQ(val);
            setPage(1);
          }}
          placeholder="Search Gĩkũyũ proverbs or meaning..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {q.length > 0 && (
          <Pressable onPress={() => { setQ(""); setPage(1); }} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* Theme Category Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {PROVERB_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => {
                setSelectedCategory(cat.id);
                setPage(1);
              }}
              style={[
                styles.pillBtn,
                active && styles.pillBtnActive,
              ]}
            >
              <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                {cat.label} ({categoryCounts[cat.id] || 0})
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort & Equivalent Filter Controls */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {([
            { key: "id-asc", label: "# 1–1000" },
            { key: "id-desc", label: "# 1000–1" },
            { key: "alpha", label: "A–Z" },
          ] as const).map((opt) => (
            <Pressable
              key={opt.key}
              onPress={() => {
                setSortBy(opt.key);
                setPage(1);
              }}
              style={[
                styles.gradeChip,
                sortBy === opt.key && styles.gradeChipActive,
              ]}
            >
              <Text style={[styles.gradeChipText, sortBy === opt.key && styles.gradeChipTextActive]}>
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => {
            setOnlyWithEquivalent(!onlyWithEquivalent);
            setPage(1);
          }}
          style={[
            styles.gradeChip,
            onlyWithEquivalent && styles.gradeChipActive,
          ]}
        >
          <Text style={[styles.gradeChipText, onlyWithEquivalent && styles.gradeChipTextActive]}>
            ✓ With English Match
          </Text>
        </Pressable>
      </View>

      <Text style={styles.subHeading}>
        Showing {pageItems.length} of {filtered.length} Proverbs (Page {safePage} / {totalPages})
      </Text>

      {pageItems.map((item: any, i: number) => (
        <View key={item.id || i} style={styles.proverbCard}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>
              PROVERB #{item.id || i + 1}
            </Text>
            {item.englishEquivalent ? (
              <Text style={{ fontSize: 10, fontWeight: "700", color: theme.kenyaGreenLight }}>
                ≈ &ldquo;{item.englishEquivalent}&rdquo;
              </Text>
            ) : null}
          </View>
          <Text style={styles.cardKikuyu}>{item.kikuyu}</Text>
          <Text style={styles.cardTranslation}>{item.translation}</Text>
          {item.explanation ? (
            <Text style={styles.cardExplanation}>{item.explanation}</Text>
          ) : null}
        </View>
      ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
          <Pressable
            disabled={safePage <= 1}
            onPress={() => setPage((p) => Math.max(1, p - 1))}
            style={[
              styles.pillBtn,
              { opacity: safePage <= 1 ? 0.4 : 1 },
            ]}
          >
            <Text style={styles.pillBtnText}>← Prev 25</Text>
          </Pressable>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textSecondary }}>
            Page {safePage} of {totalPages}
          </Text>
          <Pressable
            disabled={safePage >= totalPages}
            onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
            style={[
              styles.pillBtn,
              { opacity: safePage >= totalPages ? 0.4 : 1 },
            ]}
          >
            <Text style={styles.pillBtnText}>Next 25 →</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

