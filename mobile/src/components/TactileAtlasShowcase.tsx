import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  useTheme,
  getContrastInk,
  hexToRgba,
  triggerHaptic,
} from "../theme";

const MONO_FONT = Platform.OS === "ios" ? "Menlo" : "monospace";
const SERIF_FONT = Platform.OS === "ios" ? "Georgia" : "serif";

interface CraftSystemMeta {
  presetId: string;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  accentLight: string;
  accentDark: string;
  material: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const CRAFT_SYSTEMS: readonly CraftSystemMeta[] = [
  {
    presetId: "braun-industrial",
    index: "01",
    name: "Braun Industrial",
    shortName: "Braun",
    tagline: "Dieter Rams matte ABS hardware, recessed pilot LEDs, and detented step meters.",
    accentLight: "#E05A2B",
    accentDark: "#F06A3B",
    material: "Matte ABS · Recessed LED",
    icon: "radio-outline",
  },
  {
    presetId: "swiss-grid",
    index: "02",
    name: "Swiss Grid",
    shortName: "Swiss",
    tagline: "Vignelli hairline-ruled layouts, zero-radius blocks, and instant black/crimson inversion.",
    accentLight: "#D92B2B",
    accentDark: "#EF4444",
    material: "1.5px Rule · Tabular Index",
    icon: "grid-outline",
  },
  {
    presetId: "eink-newsprint",
    index: "03",
    name: "E-Ink Newsprint",
    shortName: "E-Ink",
    tagline: "1-bit electrophoretic paper contrast with authentic refresh flashes and dog-ear folds.",
    accentLight: "#1B1917",
    accentDark: "#E7E2D7",
    material: "Matte Paper · 1-Bit Ink",
    icon: "newspaper-outline",
  },
  {
    presetId: "teenage-engineering",
    index: "04",
    name: "Teenage Engineering",
    shortName: "TE Field",
    tagline: "Anodized field-synth faceplates, circular step triggers, and rotary frequency encoders.",
    accentLight: "#FF521B",
    accentDark: "#FF6633",
    material: "Anodized Alloy · OLED",
    icon: "hardware-chip-outline",
  },
  {
    presetId: "risograph-print",
    index: "05",
    name: "Risograph Print",
    shortName: "Riso",
    tagline: "Uncoated zine stock, perforated tear stubs, and offset soy-ink overprint shadows.",
    accentLight: "#E6482E",
    accentDark: "#F2644B",
    material: "Soy Ink · Perforated Stub",
    icon: "ticket-outline",
  },
  {
    presetId: "mechanical-horology",
    index: "06",
    name: "Mechanical Horology",
    shortName: "Horology",
    tagline: "Gunmetal chronograph bezels, knurled brass side-pushers, and torque reserve drums.",
    accentLight: "#C9A659",
    accentDark: "#DFBE72",
    material: "Gunmetal · Knurled Brass",
    icon: "stopwatch-outline",
  },
  {
    presetId: "japanese-washi",
    index: "07",
    name: "Japanese Washi",
    shortName: "Washi",
    tagline: "Unbleached kozo stationery, vermilion hanko approval seals, and tear-off day pads.",
    accentLight: "#C23B22",
    accentDark: "#DF573D",
    material: "Kozo Paper · Vermilion Seal",
    icon: "bookmark-outline",
  },
  {
    presetId: "architectural-brutalism",
    index: "08",
    name: "Architectural Brutalism",
    shortName: "Brutalist",
    tagline: "Cast-concrete chisel blocks, hard ink offset shadows, and monolithic floor steppers.",
    accentLight: "#B84C2A",
    accentDark: "#D46442",
    material: "Cast Concrete · Hard Shadow",
    icon: "cube-outline",
  },
  {
    presetId: "vintage-avionics",
    index: "09",
    name: "Vintage Avionics",
    shortName: "Avionics",
    tagline: "Riveted cockpit bezels, hazard-guarded launch switches, and Solari split-flap tiles.",
    accentLight: "#F5A623",
    accentDark: "#FBBF24",
    material: "Cockpit Steel · Amber CRT",
    icon: "airplane-outline",
  },
  {
    presetId: "ceramic-tactile",
    index: "10",
    name: "Ceramic Tactile",
    shortName: "Ceramic",
    tagline: "Kiln-glazed stoneware basins, terracotta pebble switches, and tactile bead abacus KPIs.",
    accentLight: "#B85334",
    accentDark: "#D16B4C",
    material: "Stoneware · Celadon Glaze",
    icon: "ellipse-outline",
  },
] as const;

interface SpecimenProps {
  isDark: boolean;
}

/* ============================================================================
 * 01. BRAUN INDUSTRIAL — SK4 Keycap with LED Latch + 8-LED Step Meter
 * ========================================================================== */
const BraunSpecimens = React.memo(function BraunSpecimens({ isDark }: SpecimenProps) {
  const [latched, setLatched] = useState(false);
  const [step, setStep] = useState(5);

  const chassisBg = isDark ? "#262522" : "#E5E4DF";
  const housingBg = isDark ? "#1B1A18" : "#D2D0C8";
  const keyBg = latched
    ? isDark
      ? "#302E2A"
      : "#EBE7DD"
    : isDark
    ? "#3A3833"
    : "#F5F3EC";
  const border = isDark ? "#4A4842" : "#B5B3AA";
  const ink = isDark ? "#F2EFE8" : "#1E1E1C";
  const muted = isDark ? "#A9A59B" : "#5A5852";
  const orange = "#E05A2B";

  const dbReadout = `${step >= 4 ? "+" : ""}${(step - 4) * 3} dB`;

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Braun SK4 Tactile Keycap */}
      <View
        style={[
          styles.stageBox,
          { backgroundColor: chassisBg, borderColor: border, borderRadius: 6 },
        ]}
      >
        <View style={styles.specimenHeaderRow}>
          <Text
            style={[styles.specimenLabel, { color: muted, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            SK4 TACTILE KEYCAP
          </Text>
          <View style={styles.dotGrille}>
            {[0, 1, 2, 3, 4].map((d) => (
              <View
                key={d}
                style={[styles.grilleDot, { backgroundColor: muted }]}
              />
            ))}
          </View>
        </View>

        <View
          style={[
            styles.braunHousing,
            { backgroundColor: housingBg, borderColor: border },
          ]}
        >
          <Pressable
            onPress={() => {
              triggerHaptic(10);
              setLatched((prev) => !prev);
            }}
            accessibilityRole="switch"
            accessibilityState={{ checked: latched }}
            style={[
              styles.braunKeycap,
              {
                backgroundColor: keyBg,
                borderColor: border,
                borderBottomWidth: latched ? 1.5 : 4,
                transform: [{ translateY: latched ? 2 : 0 }],
              },
            ]}
          >
            <View
              style={[
                styles.ledDot,
                {
                  backgroundColor: latched ? orange : isDark ? "#525049" : "#7A776E",
                  borderColor: latched ? "#B8431B" : border,
                },
              ]}
            />
            <Text
              style={[
                styles.braunKeyText,
                { color: ink, fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              {latched ? "ENGAGED · ACTIVE" : "POWER ON"}
            </Text>
            <Feather
              name="power"
              size={14}
              color={latched ? orange : muted}
            />
          </Pressable>
        </View>
      </View>

      {/* Specimen B: Braun 8-LED Step Meter */}
      <View
        style={[
          styles.stageBox,
          { backgroundColor: chassisBg, borderColor: border, borderRadius: 6 },
        ]}
      >
        <View style={styles.specimenHeaderRow}>
          <Text
            style={[styles.specimenLabel, { color: muted, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            CH-01 STEP METER
          </Text>
          <Text
            style={[
              styles.specimenValue,
              { color: orange, fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            {dbReadout}
          </Text>
        </View>

        <View
          style={[
            styles.braunMeterTrack,
            { backgroundColor: housingBg, borderColor: border },
          ]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
            const active = idx <= step;
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setStep(idx);
                }}
                style={styles.braunLedHit}
                accessibilityRole="button"
                accessibilityLabel={`Set level ${idx} of 8`}
              >
                <View
                  style={[
                    styles.braunLedCell,
                    {
                      backgroundColor: active
                        ? idx >= 7
                          ? "#C83219"
                          : orange
                        : isDark
                        ? "#3B3934"
                        : "#B5B3AA",
                    },
                  ]}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
});

/* ============================================================================
 * 02. SWISS GRID — Vignelli Split Action Bar + Numbered Index Tabs
 * ========================================================================== */
const SwissSpecimens = React.memo(function SwissSpecimens({ isDark }: SpecimenProps) {
  const [fired, setFired] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [actionLabel, setActionLabel] = useState("PUBLISH ISSUE");
  const [activeTab, setActiveTab] = useState(0);

  const paper = isDark ? "#171717" : "#FFFFFF";
  const ink = isDark ? "#F5F5F2" : "#111111";
  const red = "#D92B2B";
  const subBg = isDark ? "#222220" : "#F7F7F5";

  const tabs = [
    { num: "01", label: "ALL" },
    { num: "02", label: "OPEN" },
    { num: "03", label: "DONE" },
  ];

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Vignelli Hairline Split Action Bar */}
      <View
        style={[
          styles.swissWrap,
          { backgroundColor: paper, borderColor: ink },
        ]}
      >
        <View style={styles.rowFull}>
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setFired((prev) => {
                const next = !prev;
                setActionLabel(next ? "PUBLISHED" : "PUBLISH ISSUE");
                return next;
              });
            }}
            style={[
              styles.swissMainBtn,
              { backgroundColor: fired ? ink : paper },
            ]}
          >
            <Text
              style={[
                styles.swissBtnText,
                { color: fired ? paper : ink },
              ]}
              numberOfLines={1}
            >
              {actionLabel}
            </Text>
            <Text
              style={[
                styles.swissIdxText,
                { color: fired ? paper : ink, fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              01
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setMenuOpen((prev) => !prev);
            }}
            style={[
              styles.swissSplitBtn,
              { backgroundColor: red, borderLeftColor: ink },
            ]}
            accessibilityLabel="Toggle secondary actions"
          >
            <Ionicons
              name={menuOpen ? "chevron-up" : "chevron-down"}
              size={15}
              color={getContrastInk(red)}
            />
          </Pressable>
        </View>

        {menuOpen ? (
          <View
            style={[
              styles.swissDropdown,
              { borderTopColor: ink, backgroundColor: subBg },
            ]}
          >
            <Pressable
              onPress={() => {
                triggerHaptic(6);
                setActionLabel("SCHEDULED");
                setFired(true);
                setMenuOpen(false);
              }}
              style={[styles.swissDropItem, { borderRightColor: ink }]}
            >
              <Text
                style={[styles.swissDropText, { color: ink, fontFamily: MONO_FONT }]}
                numberOfLines={1}
              >
                02 SCHEDULE
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                triggerHaptic(6);
                setActionLabel("DRAFT SAVED");
                setFired(false);
                setMenuOpen(false);
              }}
              style={styles.swissDropItemLast}
            >
              <Text
                style={[styles.swissDropText, { color: ink, fontFamily: MONO_FONT }]}
                numberOfLines={1}
              >
                03 DRAFT
              </Text>
            </Pressable>
          </View>
        ) : null}
      </View>

      {/* Specimen B: Numbered Index Tabs */}
      <View
        style={[
          styles.swissTabs,
          { backgroundColor: paper, borderColor: ink },
        ]}
      >
        {tabs.map((tab, idx) => {
          const on = activeTab === idx;
          return (
            <Pressable
              key={tab.num}
              onPress={() => {
                triggerHaptic(6);
                setActiveTab(idx);
              }}
              style={[
                styles.swissTabCell,
                {
                  backgroundColor: on ? ink : paper,
                  borderRightColor: ink,
                  borderRightWidth: idx < tabs.length - 1 ? 1.5 : 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.swissTabNum,
                  { color: on ? red : ink, fontFamily: MONO_FONT },
                ]}
                numberOfLines={1}
              >
                {tab.num}
              </Text>
              <Text
                style={[
                  styles.swissTabLabel,
                  { color: on ? paper : ink },
                ]}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
});

/* ============================================================================
 * 03. E-INK NEWSPRINT — Monochrome Flash Action + Dog-Ear Clipping
 * ========================================================================== */
const EinkSpecimens = React.memo(function EinkSpecimens({ isDark }: SpecimenProps) {
  const [synced, setSynced] = useState(false);
  const [flashingBtn, setFlashingBtn] = useState(false);
  const [clipped, setClipped] = useState(false);
  const [flashingCard, setFlashingCard] = useState(false);

  const btnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (btnTimer.current) clearTimeout(btnTimer.current);
      if (cardTimer.current) clearTimeout(cardTimer.current);
    };
  }, []);

  const paper = isDark ? "#1C1B19" : "#F4EFE4";
  const ink = isDark ? "#EFECE4" : "#181817";
  const muted = isDark ? "#B0AAA0" : "#57534E";

  const btnInverted = flashingBtn || synced;
  const cardBg = flashingCard ? ink : paper;
  const cardInk = flashingCard ? paper : ink;

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: E-Ink Monochrome Flash Action */}
      <Pressable
        onPress={() => {
          triggerHaptic(6);
          if (btnTimer.current) clearTimeout(btnTimer.current);
          setFlashingBtn(true);
          btnTimer.current = setTimeout(() => {
            setFlashingBtn(false);
            setSynced((prev) => !prev);
          }, 95);
        }}
        style={[
          styles.einkBtn,
          {
            backgroundColor: btnInverted ? ink : paper,
            borderColor: ink,
          },
        ]}
      >
        <View
          style={[
            styles.einkCheckBox,
            { borderColor: btnInverted ? paper : ink },
          ]}
        >
          <Text
            style={[
              styles.einkCheckText,
              { color: btnInverted ? paper : ink, fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            {synced ? "✓" : "+"}
          </Text>
        </View>
        <Text
          style={[
            styles.einkBtnLabel,
            { color: btnInverted ? paper : ink, fontFamily: MONO_FONT },
          ]}
          numberOfLines={1}
        >
          {synced ? "SYNCED TO FOLIO" : "SYNC READING LIST"}
        </Text>
      </Pressable>

      {/* Specimen B: E-Ink Broadsheet Dog-Ear Clipping */}
      <Pressable
        onPress={() => {
          triggerHaptic(6);
          if (cardTimer.current) clearTimeout(cardTimer.current);
          setFlashingCard(true);
          cardTimer.current = setTimeout(() => {
            setFlashingCard(false);
            setClipped((prev) => !prev);
          }, 110);
        }}
        style={[
          styles.einkClipping,
          { backgroundColor: cardBg, borderColor: ink },
        ]}
      >
        {clipped ? (
          <View
            style={[
              styles.einkDogEar,
              {
                borderTopColor: isDark ? "#0E0D0B" : "#FAF7F2",
                borderLeftColor: ink,
                borderRightColor: isDark ? "#0E0D0B" : "#FAF7F2",
                borderBottomColor: ink,
              },
            ]}
          />
        ) : null}

        <View
          style={[
            styles.einkRuleBar,
            { borderTopColor: cardInk, borderBottomColor: cardInk },
          ]}
        >
          <Text
            style={[styles.einkMetaText, { color: cardInk, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            DISPATCH · VOL. IV
          </Text>
          <Text
            style={[styles.einkMetaRight, { color: cardInk, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            4 MIN READ
          </Text>
        </View>

        <Text
          style={[styles.einkHeadline, { color: cardInk, fontFamily: SERIF_FONT }]}
          numberOfLines={2}
        >
          Why Quiet Interfaces Outlast Loud Trends
        </Text>

        <Text
          style={[
            styles.einkFooter,
            { color: flashingCard ? paper : muted, fontFamily: MONO_FONT },
          ]}
          numberOfLines={1}
        >
          {clipped ? "■ CLIPPED TO ARCHIVE (TAP TO UNCLIP)" : "□ TAP TO DOG-EAR CLIP"}
        </Text>
      </Pressable>
    </View>
  );
});

/* ============================================================================
 * 04. TEENAGE ENGINEERING — 3-Step Sequencer + Rotary Encoder +/-
 * ========================================================================== */
const TeenageSpecimens = React.memo(function TeenageSpecimens({ isDark }: SpecimenProps) {
  const [step, setStep] = useState(1);
  const [freq, setFreq] = useState(440);

  const deckBg = isDark ? "#272826" : "#D6D7D2";
  const deckBorder = isDark ? "#4A4C48" : "#9FA19B";
  const ink = isDark ? "#F0F1EC" : "#1D1E20";
  const muted = isDark ? "#A6A8A2" : "#5D6066";
  const orange = "#FF521B";

  const knobAngle = `${Math.round((freq - 440) * 0.4)}deg`;

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: 3-Step Sequencer Trigger */}
      <View
        style={[
          styles.teUnit,
          { backgroundColor: deckBg, borderColor: deckBorder },
        ]}
      >
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setStep((prev) => (prev + 1) % 4);
          }}
          style={[
            styles.teDomeBtn,
            { borderColor: isDark ? "#5E605B" : "#B5B7B1" },
          ]}
        >
          <Text style={[styles.teDomeText, { fontFamily: MONO_FONT }]} numberOfLines={1}>
            REC
          </Text>
        </Pressable>

        <View style={styles.teSeqMeta}>
          <Text
            style={[styles.teSeqLabel, { color: ink, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            STEP 0{step} / 03
          </Text>
          <View style={styles.teLedRow}>
            {[1, 2, 3].map((idx) => (
              <View
                key={idx}
                style={[
                  styles.teLedDot,
                  {
                    backgroundColor:
                      step >= idx ? orange : isDark ? "#454743" : "#B5B6B0",
                  },
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.teOledMini}>
          <Text style={[styles.teOledText, { fontFamily: MONO_FONT }]} numberOfLines={1}>
            {step === 0 ? "IDLE" : `TRK-0${step}`}
          </Text>
        </View>
      </View>

      {/* Specimen B: Field Synth Rotary Encoder +/- */}
      <View
        style={[
          styles.teUnit,
          { backgroundColor: deckBg, borderColor: deckBorder },
        ]}
      >
        <View
          style={[
            styles.teKnob,
            {
              backgroundColor: isDark ? "#383A37" : "#F4F5F6",
              borderColor: isDark ? "#666964" : "#8E9196",
              transform: [{ rotate: knobAngle }],
            },
          ]}
        >
          <View style={[styles.teNeedle, { backgroundColor: orange }]} />
        </View>

        <View style={styles.teEncoderInfo}>
          <Text
            style={[styles.teHzText, { color: ink, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            {freq} Hz
          </Text>
          <Text
            style={[styles.teSubText, { color: muted, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            FILTER CUTOFF
          </Text>
        </View>

        <View style={styles.teStepBtns}>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setFreq((v) => Math.max(120, v - 40));
            }}
            style={styles.teMiniKey}
            accessibilityLabel="Decrease frequency"
          >
            <Text style={[styles.teMiniKeyText, { fontFamily: MONO_FONT }]} numberOfLines={1}>
              −
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setFreq((v) => Math.min(760, v + 40));
            }}
            style={[styles.teMiniKey, { backgroundColor: orange }]}
            accessibilityLabel="Increase frequency"
          >
            <Text
              style={[
                styles.teMiniKeyText,
                { color: getContrastInk(orange), fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              +
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

/* ============================================================================
 * 05. RISOGRAPH PRINT — Tearable Ticket Stub + Overprint Stamp Chips
 * ========================================================================== */
const RisographSpecimens = React.memo(function RisographSpecimens({ isDark }: SpecimenProps) {
  const [torn, setTorn] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>(["#ZINE", "#LIMITED"]);

  const paper = isDark ? "#23201A" : "#FAF3E3";
  const stubBg = torn
    ? isDark
      ? "#2E2920"
      : "#EFE4CC"
    : paper;
  const cobalt = isDark ? "#7EA6F2" : "#164496";
  const vermilion = "#E6482E";
  const yellow = "#F4C430";

  const tags = ["#ZINE", "#SOY-INK", "#LIMITED"];

  const toggleTag = (tag: string) => {
    triggerHaptic(6);
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Tearable Risograph Ticket Stub */}
      <Pressable
        onPress={() => {
          triggerHaptic(10);
          setTorn((prev) => !prev);
        }}
        style={styles.risoTicketRow}
      >
        <View
          style={[
            styles.risoTicketMain,
            { backgroundColor: paper, borderColor: cobalt },
          ]}
        >
          <View style={styles.specimenHeaderRow}>
            <Text
              style={[
                styles.risoKicker,
                { color: vermilion, fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              RISO ED. 04 · NAIROBI
            </Text>
            {torn ? (
              <View style={[styles.risoStamp, { borderColor: vermilion }]}>
                <Text
                  style={[
                    styles.risoStampText,
                    { color: vermilion, fontFamily: MONO_FONT },
                  ]}
                  numberOfLines={1}
                >
                  ADMITTED
                </Text>
              </View>
            ) : null}
          </View>

          <Text
            style={[
              styles.risoTitle,
              { color: cobalt, fontFamily: SERIF_FONT },
            ]}
            numberOfLines={1}
          >
            Printmakers Night Market
          </Text>

          <View style={[styles.risoMetaRow, { borderTopColor: cobalt }]}>
            <Text
              style={[styles.risoMetaText, { color: cobalt, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              NOV 28 · 19:00
            </Text>
            <Text
              style={[styles.risoMetaRight, { color: cobalt, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              ROW B · 14
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.risoStub,
            {
              backgroundColor: stubBg,
              borderColor: cobalt,
              borderLeftColor: vermilion,
              transform: torn
                ? [{ translateX: 4 }, { translateY: 3 }, { rotate: "5deg" }]
                : [],
            },
          ]}
        >
          <Text
            style={[styles.risoStubText, { color: vermilion, fontFamily: MONO_FONT }]}
            numberOfLines={2}
          >
            {torn ? "TORN\nSTUB" : "TEAR\nSTUB"}
          </Text>
        </View>
      </Pressable>

      {/* Specimen B: Overprint Soy-Ink Stamp Chips */}
      <View style={styles.chipWrapRow}>
        {tags.map((tag) => {
          const on = selectedTags.includes(tag);
          return (
            <Pressable
              key={tag}
              onPress={() => toggleTag(tag)}
              style={[
                styles.risoChip,
                {
                  backgroundColor: on ? yellow : paper,
                  borderColor: on ? vermilion : cobalt,
                },
              ]}
            >
              <Text
                style={[
                  styles.risoChipText,
                  {
                    color: on ? "#164496" : cobalt,
                    fontFamily: MONO_FONT,
                  },
                ]}
                numberOfLines={1}
              >
                {tag}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
});

/* ============================================================================
 * 06. MECHANICAL HOROLOGY — Chronograph Lap Pusher + Torque Reserve Drum
 * ========================================================================== */
const HorologySpecimens = React.memo(function HorologySpecimens({ isDark }: SpecimenProps) {
  const [laps, setLaps] = useState(0);
  const [reserveHrs, setReserveHrs] = useState(42);

  const gunmetal = isDark ? "#1B1E21" : "#24272A";
  const border = isDark ? "#4D5258" : "#595D62";
  const gold = "#C9A659";
  const cream = "#ECE4CF";
  const muted = "#A4AAB2";

  const mins = Math.floor((laps * 15) / 60);
  const secs = (laps * 15) % 60;
  const lapText = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Chronograph Split Lap Pusher */}
      <View style={styles.horologyPusherRow}>
        <View
          style={[
            styles.horologyCase,
            { backgroundColor: gunmetal, borderColor: border },
          ]}
        >
          <View style={styles.horologyCaseLeft}>
            <Text
              style={[styles.horologyKicker, { color: muted, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              CAL. 321 · SPLIT
            </Text>
            <Text
              style={[styles.horologyReadout, { color: gold, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              {lapText}
            </Text>
          </View>
          {laps > 0 ? (
            <Pressable
              onPress={() => {
                triggerHaptic(6);
                setLaps(0);
              }}
              style={[styles.horologyResetBtn, { borderColor: border }]}
            >
              <Text
                style={[styles.horologyResetText, { color: cream, fontFamily: MONO_FONT }]}
                numberOfLines={1}
              >
                RST
              </Text>
            </Pressable>
          ) : null}
        </View>

        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setLaps((n) => n + 1);
          }}
          style={[
            styles.horologyPusherBtn,
            { backgroundColor: gold, borderColor: "#7D642A" },
          ]}
          accessibilityLabel="Record chronograph split lap"
        >
          <Ionicons name="play" size={14} color={getContrastInk(gold)} />
        </Pressable>
      </View>

      {/* Specimen B: Torque Power Reserve Drum */}
      <View
        style={[
          styles.horologyDrum,
          { backgroundColor: gunmetal, borderColor: border },
        ]}
      >
        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setReserveHrs((h) => Math.max(0, h - 6));
          }}
          style={[styles.horologyDrumBtn, { backgroundColor: gold }]}
          accessibilityLabel="Decrease power reserve"
        >
          <Text
            style={[
              styles.horologyDrumBtnText,
              { color: getContrastInk(gold), fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            −
          </Text>
        </Pressable>

        <View style={styles.horologyDrumMid}>
          <Text
            style={[styles.horologyDrumVal, { color: cream, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            {reserveHrs} HRS
          </Text>
          <Text
            style={[styles.horologyDrumSub, { color: muted, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            POWER RESERVE
          </Text>
        </View>

        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setReserveHrs((h) => Math.min(72, h + 6));
          }}
          style={[styles.horologyDrumBtn, { backgroundColor: gold }]}
          accessibilityLabel="Increase power reserve"
        >
          <Text
            style={[
              styles.horologyDrumBtnText,
              { color: getContrastInk(gold), fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
});

/* ============================================================================
 * 07. JAPANESE WASHI — Hanko Seal Approver + Tear-Off Day Pad
 * ========================================================================== */
const WashiSpecimens = React.memo(function WashiSpecimens({ isDark }: SpecimenProps) {
  const [stamped, setStamped] = useState(false);
  const [day, setDay] = useState(24);

  const paper = isDark ? "#231F1A" : "#F7F2E7";
  const border = isDark ? "#5A5144" : "#C9BFA9";
  const ink = isDark ? "#EFE9DC" : "#26211C";
  const muted = isDark ? "#A99F8E" : "#6E6558";
  const vermilion = "#C23B22";

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Hanko Vermilion Seal Approver */}
      <Pressable
        onPress={() => {
          triggerHaptic(10);
          setStamped((prev) => !prev);
        }}
        style={[
          styles.washiApproveRow,
          {
            backgroundColor: paper,
            borderColor: stamped ? vermilion : border,
          },
        ]}
      >
        <View style={styles.washiTextCol}>
          <Text
            style={[styles.washiTitle, { color: ink, fontFamily: SERIF_FONT }]}
            numberOfLines={1}
          >
            Approve Ledger
          </Text>
          <Text
            style={[styles.washiSub, { color: muted, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            {stamped ? "SEALED · 承認済" : "TAP TO STAMP HANKO"}
          </Text>
        </View>

        <View
          style={[
            styles.washiSealCircle,
            {
              borderColor: stamped ? vermilion : border,
              borderStyle: stamped ? "solid" : "dashed",
              backgroundColor: stamped ? hexToRgba(vermilion, 0.12) : "transparent",
              transform: [{ rotate: stamped ? "-8deg" : "0deg" }],
            },
          ]}
        >
          <Text
            style={[
              styles.washiSealGlyph,
              { color: stamped ? vermilion : muted, fontFamily: SERIF_FONT },
            ]}
            numberOfLines={1}
          >
            印
          </Text>
        </View>
      </Pressable>

      {/* Specimen B: Tear-Off Day Calendar Pad */}
      <Pressable
        onPress={() => {
          triggerHaptic(6);
          setDay((d) => (d % 30) + 1);
        }}
        style={[
          styles.washiTearPad,
          {
            backgroundColor: paper,
            borderColor: border,
            borderTopColor: vermilion,
          },
        ]}
      >
        <View style={styles.washiPadLeft}>
          <Text
            style={[styles.washiMonth, { color: vermilion, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            NOVEMBER · 2026
          </Text>
          <Text
            style={[styles.washiPadHint, { color: muted, fontFamily: SERIF_FONT }]}
            numberOfLines={1}
          >
            Tap sheet to tear next day
          </Text>
        </View>
        <Text
          style={[styles.washiDayNum, { color: ink, fontFamily: SERIF_FONT }]}
          numberOfLines={1}
        >
          {String(day).padStart(2, "0")}
        </Text>
      </Pressable>
    </View>
  );
});

/* ============================================================================
 * 08. ARCHITECTURAL BRUTALISM — Concrete Chisel Block + Elevation Stepper
 * ========================================================================== */
const BrutalistSpecimens = React.memo(function BrutalistSpecimens({ isDark }: SpecimenProps) {
  const [castCount, setCastCount] = useState(0);
  const [pressedBlock, setPressedBlock] = useState(false);
  const [floor, setFloor] = useState(5);

  const concrete = isDark ? "#33312C" : "#CBC7BE";
  const slab = isDark ? "#434039" : "#E6DFD3";
  const ink = isDark ? "#F2EFE8" : "#161616";
  const shadowColor = isDark ? "#0A0A09" : "#161616";
  const terracotta = "#B84C2A";

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Concrete Chisel Block Counter */}
      <View
        style={[
          styles.brutalistCavity,
          { backgroundColor: shadowColor },
        ]}
      >
        <Pressable
          onPressIn={() => setPressedBlock(true)}
          onPressOut={() => setPressedBlock(false)}
          onPress={() => {
            triggerHaptic(10);
            setCastCount((c) => (c + 1) % 100);
          }}
          style={[
            styles.brutalistBlock,
            {
              backgroundColor: slab,
              borderColor: ink,
              transform: pressedBlock
                ? [{ translateX: 0 }, { translateY: 0 }]
                : [{ translateX: -3 }, { translateY: -3 }],
            },
          ]}
        >
          <Text
            style={[styles.brutalistBtnText, { color: ink, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            CAST CONCRETE BLOCK
          </Text>
          <View style={[styles.brutalistBadge, { backgroundColor: terracotta }]}>
            <Text
              style={[
                styles.brutalistBadgeText,
                { color: getContrastInk(terracotta), fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              {String(castCount).padStart(2, "0")}
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Specimen B: Monolithic Floor Elevation Stepper */}
      <View
        style={[
          styles.brutalistStepperBox,
          { backgroundColor: concrete, borderColor: ink },
        ]}
      >
        <View style={styles.brutalistStepRow}>
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setFloor((f) => Math.max(1, f - 1));
            }}
            style={[
              styles.brutalistStepBtn,
              { backgroundColor: slab, borderColor: ink },
            ]}
            accessibilityLabel="Decrease floor"
          >
            <Text
              style={[styles.brutalistStepBtnText, { color: ink, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              −
            </Text>
          </Pressable>

          <View style={[styles.brutalistReadout, { backgroundColor: ink }]}>
            <Text
              style={[
                styles.brutalistReadoutText,
                { color: isDark ? "#161616" : "#EFEAE0", fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              FL 0{floor} / 08
            </Text>
          </View>

          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setFloor((f) => Math.min(8, f + 1));
            }}
            style={[
              styles.brutalistStepBtn,
              { backgroundColor: slab, borderColor: ink },
            ]}
            accessibilityLabel="Increase floor"
          >
            <Text
              style={[styles.brutalistStepBtnText, { color: ink, fontFamily: MONO_FONT }]}
              numberOfLines={1}
            >
              +
            </Text>
          </Pressable>
        </View>

        <View style={styles.brutalistBarsRow}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((b) => (
            <View
              key={b}
              style={[
                styles.brutalistBar,
                {
                  borderColor: ink,
                  backgroundColor: b <= floor ? terracotta : "transparent",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
});

/* ============================================================================
 * 09. VINTAGE AVIONICS — Guarded Launch Trigger + Split-Flap Counter
 * ========================================================================== */
const AVIONICS_COUNTER_STATES = [
  { digits: "2849", label: "ORDERS FULFILLED" },
  { digits: "0914", label: "ACTIVE COURIERS" },
  { digits: "0037", label: "BACKLOG QUEUE" },
] as const;

const AvionicsSpecimens = React.memo(function AvionicsSpecimens({ isDark }: SpecimenProps) {
  const [guardOpen, setGuardOpen] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [flapIdx, setFlapIdx] = useState(0);

  const deployTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (deployTimer.current) clearTimeout(deployTimer.current);
    };
  }, []);

  const panelBg = isDark ? "#151815" : "#1C1F1B";
  const border = "#3C4239";
  const amber = "#F5A623";
  const crimson = "#B8251E";
  const currentFlap = AVIONICS_COUNTER_STATES[flapIdx];

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Two-Stage Guarded Launch Trigger */}
      <View
        style={[
          styles.avionicsBezel,
          { backgroundColor: panelBg, borderColor: border },
        ]}
      >
        {!guardOpen ? (
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setGuardOpen(true);
            }}
            style={styles.avionicsGuardCover}
          >
            <View style={styles.avionicsHazardTag}>
              <Ionicons name="warning-outline" size={13} color={amber} />
              <Text
                style={[styles.avionicsGuardText, { color: amber, fontFamily: MONO_FONT }]}
                numberOfLines={1}
              >
                LIFT SAFETY GUARD
              </Text>
            </View>
          </Pressable>
        ) : (
          <View style={styles.avionicsArmedRow}>
            <Pressable
              onPress={() => {
                triggerHaptic(12);
                setDeployed(true);
                if (deployTimer.current) clearTimeout(deployTimer.current);
                deployTimer.current = setTimeout(() => {
                  setDeployed(false);
                  setGuardOpen(false);
                }, 1100);
              }}
              style={[
                styles.avionicsExecuteBtn,
                { backgroundColor: deployed ? "#2D7A46" : crimson },
              ]}
            >
              <Text
                style={[
                  styles.avionicsExecText,
                  { color: "#FFF7E6", fontFamily: MONO_FONT },
                ]}
                numberOfLines={1}
              >
                {deployed ? "DEPLOYED ✓" : "EXECUTE LAUNCH"}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                triggerHaptic(6);
                setGuardOpen(false);
              }}
              style={[styles.avionicsCloseGuard, { borderColor: border }]}
              accessibilityLabel="Close safety guard"
            >
              <Ionicons name="lock-closed" size={14} color={amber} />
            </Pressable>
          </View>
        )}
      </View>

      {/* Specimen B: Solari Split-Flap Counter */}
      <View
        style={[
          styles.avionicsFlapBoard,
          { backgroundColor: panelBg, borderColor: border },
        ]}
      >
        <View style={styles.avionicsDigitsRow}>
          {currentFlap.digits.split("").map((char, idx) => (
            <View key={idx} style={styles.avionicsFlapTile}>
              <Text
                style={[styles.avionicsFlapDigit, { fontFamily: MONO_FONT }]}
                numberOfLines={1}
              >
                {char}
              </Text>
              <View style={styles.avionicsFlapSeam} />
            </View>
          ))}
        </View>

        <View style={styles.avionicsFlapFoot}>
          <Text
            style={[styles.avionicsFlapCap, { color: amber, fontFamily: MONO_FONT }]}
            numberOfLines={1}
          >
            {currentFlap.label}
          </Text>
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setFlapIdx((i) => (i + 1) % AVIONICS_COUNTER_STATES.length);
            }}
            style={[styles.avionicsFlipBtn, { backgroundColor: amber }]}
          >
            <Text
              style={[
                styles.avionicsFlipBtnText,
                { color: getContrastInk(amber), fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              FLIP
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

/* ============================================================================
 * 10. CERAMIC TACTILE — Glazed Pebble Toggle + Terracotta Bead Abacus
 * ========================================================================== */
const CeramicSpecimens = React.memo(function CeramicSpecimens({ isDark }: SpecimenProps) {
  const [quietOn, setQuietOn] = useState(true);
  const [rodA, setRodA] = useState(3);
  const [rodB, setRodB] = useState(3);

  const stoneware = isDark ? "#25221E" : "#EFEAE0";
  const border = isDark ? "#4A433A" : "#D5CCBC";
  const ink = isDark ? "#F0EAE0" : "#352E26";
  const muted = isDark ? "#ADA395" : "#6E6558";
  const terracotta = "#B85334";
  const celadonBg = isDark ? "#29392C" : "#CAD9C8";
  const celadonBorder = isDark ? "#4F7156" : "#8DA68A";
  const rodWood = isDark ? "#7E6248" : "#8C6A4A";

  const pct = Math.round(((rodA + rodB) / 10) * 100);

  return (
    <View style={styles.specimenStack}>
      {/* Specimen A: Kiln-Glazed Pebble Toggle */}
      <View
        style={[
          styles.ceramicCard,
          { backgroundColor: stoneware, borderColor: border },
        ]}
      >
        <View style={styles.ceramicToggleRow}>
          <View style={styles.ceramicTextCol}>
            <Text
              style={[styles.ceramicTitle, { color: ink, fontFamily: SERIF_FONT }]}
              numberOfLines={1}
            >
              Quiet Hours
            </Text>
            <Text
              style={[styles.ceramicSub, { color: muted }]}
              numberOfLines={1}
            >
              {quietOn ? "Celadon glaze · Active" : "Resting stoneware"}
            </Text>
          </View>

          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setQuietOn((prev) => !prev);
            }}
            accessibilityRole="switch"
            accessibilityState={{ checked: quietOn }}
            style={[
              styles.ceramicTrack,
              {
                backgroundColor: quietOn ? celadonBg : isDark ? "#35302A" : "#E2DBD0",
                borderColor: quietOn ? celadonBorder : border,
                justifyContent: quietOn ? "flex-end" : "flex-start",
              },
            ]}
          >
            <View
              style={[
                styles.ceramicPebble,
                {
                  backgroundColor: quietOn ? terracotta : isDark ? "#665E53" : "#FAF7F0",
                  borderColor: quietOn ? "#8C3A20" : border,
                },
              ]}
            />
          </Pressable>
        </View>
      </View>

      {/* Specimen B: Terracotta Bead Abacus KPI */}
      <View
        style={[
          styles.ceramicCard,
          { backgroundColor: stoneware, borderColor: border },
        ]}
      >
        <View style={styles.specimenHeaderRow}>
          <Text
            style={[styles.ceramicTitle, { color: ink, fontFamily: SERIF_FONT }]}
            numberOfLines={1}
          >
            Weekly Craft Rituals
          </Text>
          <Text
            style={[
              styles.ceramicPct,
              { color: terracotta, fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            {pct}%
          </Text>
        </View>

        {[
          { count: rodA, setter: setRodA, id: "A" },
          { count: rodB, setter: setRodB, id: "B" },
        ].map((rod) => (
          <Pressable
            key={rod.id}
            onPress={() => {
              triggerHaptic(6);
              rod.setter((c) => (c >= 5 ? 1 : c + 1));
            }}
            style={styles.abacusRodHit}
            accessibilityLabel={`Slide beads on rod ${rod.id}`}
          >
            <View style={[styles.abacusWoodBar, { backgroundColor: rodWood }]} />
            <View style={styles.abacusBeadsRow}>
              <View style={styles.abacusGroup}>
                {Array.from({ length: rod.count }).map((_, i) => (
                  <View
                    key={`on-${i}`}
                    style={[
                      styles.abacusBead,
                      { backgroundColor: terracotta, borderColor: "#8C3A20" },
                    ]}
                  />
                ))}
              </View>
              <View style={styles.abacusGroup}>
                {Array.from({ length: 5 - rod.count }).map((_, i) => (
                  <View
                    key={`off-${i}`}
                    style={[
                      styles.abacusBead,
                      {
                        backgroundColor: isDark ? "#526351" : "#8B9B88",
                        borderColor: isDark ? "#384637" : "#5D6F5A",
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
});

/* ============================================================================
 * CRAFT CARD WRAPPER
 * ========================================================================== */
const CraftSystemCard = React.memo(function CraftSystemCard({
  craft,
  isDark,
  onApplyPreset,
}: {
  craft: CraftSystemMeta;
  isDark: boolean;
  onApplyPreset?: (presetId: string) => void;
}) {
  const { theme } = useTheme();
  const [applied, setApplied] = useState(false);
  const appliedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (appliedTimer.current) clearTimeout(appliedTimer.current);
    };
  }, []);

  const accent = isDark ? craft.accentDark : craft.accentLight;
  const accentInk = getContrastInk(accent);

  const handleApply = useCallback(() => {
    triggerHaptic(8);
    onApplyPreset?.(craft.presetId);
    setApplied(true);
    if (appliedTimer.current) clearTimeout(appliedTimer.current);
    appliedTimer.current = setTimeout(() => setApplied(false), 1200);
  }, [craft.presetId, onApplyPreset]);

  const renderSpecimens = () => {
    switch (craft.presetId) {
      case "braun-industrial":
        return <BraunSpecimens isDark={isDark} />;
      case "swiss-grid":
        return <SwissSpecimens isDark={isDark} />;
      case "eink-newsprint":
        return <EinkSpecimens isDark={isDark} />;
      case "teenage-engineering":
        return <TeenageSpecimens isDark={isDark} />;
      case "risograph-print":
        return <RisographSpecimens isDark={isDark} />;
      case "mechanical-horology":
        return <HorologySpecimens isDark={isDark} />;
      case "japanese-washi":
        return <WashiSpecimens isDark={isDark} />;
      case "architectural-brutalism":
        return <BrutalistSpecimens isDark={isDark} />;
      case "vintage-avionics":
        return <AvionicsSpecimens isDark={isDark} />;
      case "ceramic-tactile":
        return <CeramicSpecimens isDark={isDark} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        styles.craftCard,
        {
          backgroundColor: theme.bgCard,
          borderColor: hexToRgba(theme.border, isDark ? 0.55 : 0.4),
        },
      ]}
    >
      {/* Top Accent Bar */}
      <View style={[styles.craftAccentRule, { backgroundColor: accent }]} />

      {/* Header */}
      <View style={styles.craftCardHeader}>
        <View
          style={[
            styles.craftIconBadge,
            {
              backgroundColor: hexToRgba(accent, isDark ? 0.2 : 0.12),
              borderColor: hexToRgba(accent, 0.4),
            },
          ]}
        >
          <Ionicons name={craft.icon} size={17} color={accent} />
        </View>

        <View style={styles.craftHeaderTextCol}>
          <View style={styles.craftTitleRow}>
            <Text
              style={[
                styles.craftIndexTag,
                { color: accent, fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              {craft.index}
            </Text>
            <Text
              style={[styles.craftName, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {craft.name}
            </Text>
          </View>
          <Text
            style={[
              styles.craftMaterial,
              { color: theme.textMuted, fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            {craft.material}
          </Text>
        </View>
      </View>

      <Text
        style={[styles.craftTagline, { color: theme.textSecondary }]}
        numberOfLines={2}
      >
        {craft.tagline}
      </Text>

      {/* Interactive Specimens Stage */}
      <View
        style={[
          styles.stageContainer,
          {
            backgroundColor: isDark
              ? theme.surfaceContainerLowest
              : theme.surfaceContainerLow,
            borderColor: hexToRgba(theme.border, 0.35),
          },
        ]}
      >
        {renderSpecimens()}
      </View>

      {/* Apply Craft Theme Button */}
      <Pressable
        onPress={handleApply}
        accessibilityRole="button"
        accessibilityLabel={`Apply ${craft.name} theme`}
        style={[
          styles.applyBtn,
          {
            backgroundColor: accent,
          },
        ]}
      >
        <Ionicons
          name={applied ? "checkmark-circle" : "color-palette-outline"}
          size={16}
          color={accentInk}
        />
        <Text
          style={[styles.applyBtnText, { color: accentInk }]}
          numberOfLines={1}
        >
          {applied ? `Applied ${craft.shortName} Theme` : "Apply Craft Theme"}
        </Text>
      </Pressable>
    </View>
  );
});

/* ============================================================================
 * MAIN EXPORT — TactileAtlasShowcase
 * ========================================================================== */
export const TactileAtlasShowcase = React.memo(function TactileAtlasShowcase({
  onApplyPreset,
}: {
  onApplyPreset?: (presetId: string) => void;
}) {
  const { theme, isDark } = useTheme();
  const [selectedCraft, setSelectedCraft] = useState<string>("all");

  const visibleCrafts = useMemo(() => {
    if (selectedCraft === "all") return CRAFT_SYSTEMS;
    return CRAFT_SYSTEMS.filter((c) => c.presetId === selectedCraft);
  }, [selectedCraft]);

  const activePillBg = theme.gold;
  const activePillInk = getContrastInk(activePillBg);

  return (
    <View style={styles.root}>
      {/* Atlas Header */}
      <View
        style={[
          styles.atlasHeader,
          {
            backgroundColor: theme.bgCard,
            borderColor: hexToRgba(theme.border, isDark ? 0.5 : 0.38),
          },
        ]}
      >
        <View style={styles.atlasHeaderTop}>
          <View
            style={[
              styles.atlasBadge,
              { backgroundColor: activePillBg },
            ]}
          >
            <Text
              style={[
                styles.atlasBadgeText,
                { color: activePillInk, fontFamily: MONO_FONT },
              ]}
              numberOfLines={1}
            >
              ATLAS · 10 CRAFT SYSTEMS
            </Text>
          </View>
          <Text
            style={[
              styles.atlasCountText,
              { color: theme.textMuted, fontFamily: MONO_FONT },
            ]}
            numberOfLines={1}
          >
            20 LIVE SPECIMENS
          </Text>
        </View>

        <Text
          style={[styles.atlasTitle, { color: theme.textPrimary }]}
          numberOfLines={2}
        >
          Tactile Craft Component Atlas
        </Text>
        <Text
          style={[styles.atlasSubtitle, { color: theme.textSecondary }]}
          numberOfLines={3}
        >
          Tap, flip, stamp, and dial live hardware-inspired controls below, or apply any craft system as your active KenyaHub theme.
        </Text>
      </View>

      {/* Filter Pill Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRowContent}
        style={styles.filterScroll}
      >
        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setSelectedCraft("all");
          }}
          style={[
            styles.filterPill,
            {
              backgroundColor:
                selectedCraft === "all" ? activePillBg : theme.bgCard,
              borderColor:
                selectedCraft === "all"
                  ? activePillBg
                  : hexToRgba(theme.border, 0.5),
            },
          ]}
        >
          <Text
            style={[
              styles.filterPillText,
              {
                color:
                  selectedCraft === "all" ? activePillInk : theme.textPrimary,
                fontFamily: MONO_FONT,
              },
            ]}
            numberOfLines={1}
          >
            ALL (10)
          </Text>
        </Pressable>

        {CRAFT_SYSTEMS.map((craft) => {
          const active = selectedCraft === craft.presetId;
          const swatch = isDark ? craft.accentDark : craft.accentLight;
          const activeInk = getContrastInk(swatch);
          return (
            <Pressable
              key={craft.presetId}
              onPress={() => {
                triggerHaptic(6);
                setSelectedCraft(craft.presetId);
              }}
              style={[
                styles.filterPill,
                {
                  backgroundColor: active ? swatch : theme.bgCard,
                  borderColor: active
                    ? swatch
                    : hexToRgba(theme.border, 0.5),
                },
              ]}
            >
              <View
                style={[
                  styles.filterDot,
                  { backgroundColor: active ? activeInk : swatch },
                ]}
              />
              <Text
                style={[
                  styles.filterPillText,
                  {
                    color: active ? activeInk : theme.textPrimary,
                    fontFamily: MONO_FONT,
                  },
                ]}
                numberOfLines={1}
              >
                {craft.index} · {craft.shortName.toUpperCase()}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Craft System Cards */}
      <View style={styles.cardsColumn}>
        {visibleCrafts.map((craft) => (
          <CraftSystemCard
            key={craft.presetId}
            craft={craft}
            isDark={isDark}
            onApplyPreset={onApplyPreset}
          />
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    gap: 12,
  },
  atlasHeader: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 6,
  },
  atlasHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  atlasBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    maxWidth: "100%",
    overflow: "hidden",
  },
  atlasBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
    flexShrink: 1,
  },
  atlasCountText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
    flexShrink: 1,
  },
  atlasTitle: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  atlasSubtitle: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
  filterScroll: {
    width: "100%",
    maxWidth: "100%",
  },
  filterRowContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 2,
    paddingRight: 8,
  },
  filterPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    maxWidth: "100%",
    overflow: "hidden",
  },
  filterDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  filterPillText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.4,
    flexShrink: 1,
  },
  cardsColumn: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    gap: 14,
  },
  craftCard: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 14,
  },
  craftAccentRule: {
    height: 4,
    width: "100%",
  },
  craftCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingTop: 12,
    maxWidth: "100%",
    overflow: "hidden",
  },
  craftIconBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  craftHeaderTextCol: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    gap: 2,
  },
  craftTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    maxWidth: "100%",
    overflow: "hidden",
  },
  craftIndexTag: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.6,
    flexShrink: 1,
  },
  craftName: {
    fontSize: 15,
    fontWeight: "800",
    flex: 1,
    flexShrink: 1,
  },
  craftMaterial: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.4,
    flexShrink: 1,
  },
  craftTagline: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 17,
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 10,
  },
  stageContainer: {
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    maxWidth: "100%",
    overflow: "hidden",
  },
  specimenStack: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    gap: 10,
  },
  stageBox: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderWidth: 1,
    padding: 10,
    gap: 8,
  },
  specimenHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  specimenLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.8,
    flex: 1,
    flexShrink: 1,
  },
  specimenValue: {
    fontSize: 11,
    fontWeight: "800",
    flexShrink: 1,
  },
  applyBtn: {
    margin: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  applyBtnText: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.3,
    flexShrink: 1,
  },

  /* 01. Braun Industrial */
  dotGrille: {
    flexDirection: "row",
    gap: 3,
    opacity: 0.55,
  },
  grilleDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
  },
  braunHousing: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    maxWidth: "100%",
    overflow: "hidden",
  },
  braunKeycap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    maxWidth: "100%",
    overflow: "hidden",
  },
  ledDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    borderWidth: 1,
  },
  braunKeyText: {
    flex: 1,
    flexShrink: 1,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  braunMeterTrack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    padding: 6,
    borderRadius: 4,
    borderWidth: 1,
    maxWidth: "100%",
    overflow: "hidden",
  },
  braunLedHit: {
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
  },
  braunLedCell: {
    width: "100%",
    height: 9,
    borderRadius: 4,
  },

  /* 02. Swiss Grid */
  swissWrap: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderWidth: 1.5,
  },
  rowFull: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  swissMainBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 12,
    maxWidth: "100%",
    overflow: "hidden",
  },
  swissBtnText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
    flex: 1,
    flexShrink: 1,
  },
  swissIdxText: {
    fontSize: 10,
    fontWeight: "700",
    opacity: 0.7,
    flexShrink: 1,
  },
  swissSplitBtn: {
    width: 40,
    borderLeftWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  swissDropdown: {
    flexDirection: "row",
    borderTopWidth: 1.5,
    maxWidth: "100%",
    overflow: "hidden",
  },
  swissDropItem: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    alignItems: "center",
  },
  swissDropItemLast: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  swissDropText: {
    fontSize: 10,
    fontWeight: "700",
    flexShrink: 1,
  },
  swissTabs: {
    flexDirection: "row",
    borderWidth: 1.5,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  swissTabCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    paddingVertical: 9,
    paddingHorizontal: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  swissTabNum: {
    fontSize: 10,
    fontWeight: "800",
    flexShrink: 1,
  },
  swissTabLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.4,
    flexShrink: 1,
  },

  /* 03. E-Ink Newsprint */
  einkBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  einkCheckBox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  einkCheckText: {
    fontSize: 11,
    fontWeight: "800",
    flexShrink: 1,
  },
  einkBtnLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.7,
    flexShrink: 1,
  },
  einkClipping: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderWidth: 1.5,
    padding: 12,
    gap: 6,
    position: "relative",
  },
  einkDogEar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderTopWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 11,
    borderLeftWidth: 11,
  },
  einkRuleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    borderTopWidth: 2,
    borderBottomWidth: 1,
    paddingVertical: 3,
    maxWidth: "100%",
    overflow: "hidden",
  },
  einkMetaText: {
    fontSize: 9,
    fontWeight: "700",
    flex: 1,
    flexShrink: 1,
  },
  einkMetaRight: {
    fontSize: 9,
    fontWeight: "700",
    flexShrink: 1,
  },
  einkHeadline: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19,
  },
  einkFooter: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  /* 04. Teenage Engineering */
  teUnit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  teDomeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#242523",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  teDomeText: {
    color: "#F5F3EE",
    fontSize: 10,
    fontWeight: "800",
    flexShrink: 1,
  },
  teSeqMeta: {
    flex: 1,
    gap: 6,
    maxWidth: "100%",
    overflow: "hidden",
  },
  teSeqLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
    flexShrink: 1,
  },
  teLedRow: {
    flexDirection: "row",
    gap: 7,
  },
  teLedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  teOledMini: {
    backgroundColor: "#1B1D1A",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    maxWidth: "100%",
    overflow: "hidden",
  },
  teOledText: {
    color: "#F2B632",
    fontSize: 10,
    fontWeight: "700",
    flexShrink: 1,
  },
  teKnob: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    alignItems: "center",
    paddingTop: 5,
  },
  teNeedle: {
    width: 3,
    height: 14,
    borderRadius: 2,
  },
  teEncoderInfo: {
    flex: 1,
    alignItems: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  teHzText: {
    fontSize: 15,
    fontWeight: "800",
    flexShrink: 1,
  },
  teSubText: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.6,
    flexShrink: 1,
  },
  teStepBtns: {
    flexDirection: "row",
    gap: 6,
  },
  teMiniKey: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: "#1D1E20",
    alignItems: "center",
    justifyContent: "center",
  },
  teMiniKeyText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    flexShrink: 1,
  },

  /* 05. Risograph Print */
  risoTicketRow: {
    flexDirection: "row",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  risoTicketMain: {
    flex: 1,
    borderWidth: 2,
    borderRightWidth: 0,
    padding: 10,
    gap: 5,
    maxWidth: "100%",
    overflow: "hidden",
  },
  risoKicker: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
    flex: 1,
    flexShrink: 1,
  },
  risoStamp: {
    borderWidth: 1.5,
    paddingHorizontal: 4,
    paddingVertical: 1,
    transform: [{ rotate: "-6deg" }],
  },
  risoStampText: {
    fontSize: 8,
    fontWeight: "900",
    flexShrink: 1,
  },
  risoTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  risoMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    borderTopWidth: 1,
    paddingTop: 5,
    maxWidth: "100%",
    overflow: "hidden",
  },
  risoMetaText: {
    fontSize: 9,
    fontWeight: "700",
    flex: 1,
    flexShrink: 1,
  },
  risoMetaRight: {
    fontSize: 9,
    fontWeight: "700",
    flexShrink: 1,
  },
  risoStub: {
    width: 54,
    borderWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  risoStubText: {
    fontSize: 9,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 0.6,
  },
  chipWrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  risoChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1.5,
    maxWidth: "100%",
    overflow: "hidden",
  },
  risoChipText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.5,
    flexShrink: 1,
  },

  /* 06. Mechanical Horology */
  horologyPusherRow: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  horologyCase: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderWidth: 1.5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    maxWidth: "100%",
    overflow: "hidden",
  },
  horologyCaseLeft: {
    flex: 1,
    gap: 2,
    maxWidth: "100%",
    overflow: "hidden",
  },
  horologyKicker: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    flexShrink: 1,
  },
  horologyReadout: {
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
    flexShrink: 1,
  },
  horologyResetBtn: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 3,
  },
  horologyResetText: {
    fontSize: 9,
    fontWeight: "700",
    flexShrink: 1,
  },
  horologyPusherBtn: {
    width: 42,
    borderWidth: 1.5,
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  horologyDrum: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 10,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  horologyDrumBtn: {
    width: 34,
    height: 34,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  horologyDrumBtnText: {
    fontSize: 16,
    fontWeight: "900",
    flexShrink: 1,
  },
  horologyDrumMid: {
    flex: 1,
    alignItems: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  horologyDrumVal: {
    fontSize: 16,
    fontWeight: "800",
    flexShrink: 1,
  },
  horologyDrumSub: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.8,
    flexShrink: 1,
  },

  /* 07. Japanese Washi */
  washiApproveRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  washiTextCol: {
    flex: 1,
    gap: 2,
    maxWidth: "100%",
    overflow: "hidden",
  },
  washiTitle: {
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 1,
  },
  washiSub: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
    flexShrink: 1,
  },
  washiSealCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  washiSealGlyph: {
    fontSize: 15,
    fontWeight: "800",
    flexShrink: 1,
  },
  washiTearPad: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderTopWidth: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  washiPadLeft: {
    flex: 1,
    gap: 3,
    maxWidth: "100%",
    overflow: "hidden",
  },
  washiMonth: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    flexShrink: 1,
  },
  washiPadHint: {
    fontSize: 11,
    fontWeight: "400",
    flexShrink: 1,
  },
  washiDayNum: {
    fontSize: 28,
    fontWeight: "700",
    flexShrink: 1,
  },

  /* 08. Architectural Brutalism */
  brutalistCavity: {
    paddingTop: 3,
    paddingLeft: 3,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 12,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistBtnText: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0.8,
    flex: 1,
    flexShrink: 1,
  },
  brutalistBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  brutalistBadgeText: {
    fontSize: 12,
    fontWeight: "900",
    flexShrink: 1,
  },
  brutalistStepperBox: {
    borderWidth: 2,
    padding: 10,
    gap: 8,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistStepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistStepBtn: {
    width: 36,
    height: 34,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  brutalistStepBtnText: {
    fontSize: 16,
    fontWeight: "900",
    flexShrink: 1,
  },
  brutalistReadout: {
    flex: 1,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistReadoutText: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
    flexShrink: 1,
  },
  brutalistBarsRow: {
    flexDirection: "row",
    gap: 4,
    height: 10,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  brutalistBar: {
    flex: 1,
    borderWidth: 1.5,
  },

  /* 09. Vintage Avionics */
  avionicsBezel: {
    borderWidth: 2,
    borderRadius: 4,
    padding: 6,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsGuardCover: {
    backgroundColor: "#2B2512",
    borderWidth: 1.5,
    borderColor: "#D9A520",
    borderStyle: "dashed",
    paddingVertical: 11,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsHazardTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1A1C19",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#D9A520",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsGuardText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    flexShrink: 1,
  },
  avionicsArmedRow: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 6,
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsExecuteBtn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsExecText: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.2,
    flexShrink: 1,
  },
  avionicsCloseGuard: {
    width: 40,
    borderWidth: 1.5,
    backgroundColor: "#262A24",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  avionicsFlapBoard: {
    borderWidth: 2,
    borderRadius: 4,
    padding: 10,
    gap: 8,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsDigitsRow: {
    flexDirection: "row",
    gap: 6,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsFlapTile: {
    flex: 1,
    height: 42,
    backgroundColor: "#2A2E28",
    borderWidth: 1,
    borderColor: "#0E100D",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  avionicsFlapDigit: {
    color: "#F6F1DE",
    fontSize: 22,
    fontWeight: "800",
    flexShrink: 1,
  },
  avionicsFlapSeam: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    height: 1.5,
    backgroundColor: "#0E100D",
  },
  avionicsFlapFoot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  avionicsFlapCap: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.7,
    flex: 1,
    flexShrink: 1,
  },
  avionicsFlipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 3,
  },
  avionicsFlipBtnText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.8,
    flexShrink: 1,
  },

  /* 10. Ceramic Tactile */
  ceramicCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 8,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ceramicToggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    maxWidth: "100%",
    overflow: "hidden",
  },
  ceramicTextCol: {
    flex: 1,
    gap: 2,
    maxWidth: "100%",
    overflow: "hidden",
  },
  ceramicTitle: {
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 1,
  },
  ceramicSub: {
    fontSize: 11,
    fontWeight: "400",
    flexShrink: 1,
  },
  ceramicTrack: {
    width: 54,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  ceramicPebble: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  ceramicPct: {
    fontSize: 16,
    fontWeight: "800",
    flexShrink: 1,
  },
  abacusRodHit: {
    height: 24,
    justifyContent: "center",
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  abacusWoodBar: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 3,
    borderRadius: 2,
  },
  abacusBeadsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  abacusGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  abacusBead: {
    width: 18,
    height: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
});
