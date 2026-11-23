import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  Pressable,
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
  type LayoutChangeEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, androidRipple, triggerHaptic } from "../theme";
import { hexToRgba, resolveScrollbarThicknessPx } from "../lib/theme-engine";

function countPillChildren(children: React.ReactNode): number {
  let count = 0;
  React.Children.forEach(children, (child) => {
    if (child === null || child === undefined || typeof child === "boolean") return;
    if (React.isValidElement(child) && child.type === React.Fragment) {
      count += countPillChildren(
        (child.props as { children?: React.ReactNode }).children
      );
    } else {
      count += 1;
    }
  });
  return count;
}

function resolveBaseStyle(styleProp: any): any {
  if (typeof styleProp === "function") {
    try {
      return styleProp({ pressed: false });
    } catch {
      return undefined;
    }
  }
  return styleProp;
}

function isPillMarkedActive(
  props: any,
  goldColor?: string,
  primaryContainer?: string,
  secondaryContainer?: string
): boolean {
  if (!props) return false;
  if (
    props["data-active"] === true ||
    props["data-active"] === "true" ||
    props.accessibilityState?.selected === true ||
    props.accessibilityState?.checked === true
  ) {
    return true;
  }
  const flat = StyleSheet.flatten(resolveBaseStyle(props.style)) || {};
  if (goldColor && (flat.borderColor === goldColor || flat.backgroundColor === goldColor)) {
    return true;
  }
  if (
    (primaryContainer && flat.backgroundColor === primaryContainer) ||
    (secondaryContainer && flat.backgroundColor === secondaryContainer)
  ) {
    return true;
  }
  return false;
}

function extractNodeText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    return node.map(extractNodeText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }
  if (React.isValidElement(node)) {
    return extractNodeText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

interface ExtractedOption {
  key: string;
  label: string;
  active: boolean;
  disabled: boolean;
  onPress?: () => void;
}

function extractPillOptions(
  nodes: React.ReactNode,
  goldColor: string | undefined,
  primaryContainer?: string,
  secondaryContainer?: string,
  acc: ExtractedOption[] = []
): ExtractedOption[] {
  React.Children.forEach(nodes, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === React.Fragment) {
      extractPillOptions(
        (child.props as { children?: React.ReactNode }).children,
        goldColor,
        primaryContainer,
        secondaryContainer,
        acc
      );
      return;
    }
    const props = child.props as any;
    const rawLabel =
      extractNodeText(props.children) ||
      (typeof props.accessibilityLabel === "string" ? props.accessibilityLabel : "") ||
      `Option ${acc.length + 1}`;
    acc.push({
      key: String(child.key ?? `opt-${acc.length}`),
      label: rawLabel.trim(),
      active: isPillMarkedActive(props, goldColor, primaryContainer, secondaryContainer),
      disabled: Boolean(props.disabled),
      onPress: typeof props.onPress === "function" ? props.onPress : undefined,
    });
  });
  return acc;
}

// Gentle 8-step feather alpha progression for edge fade without harsh vertical lines
const FADE_STEPS = [0.0, 0.06, 0.16, 0.3, 0.47, 0.65, 0.81, 0.94];
const LEFT_FADE_STEPS = [...FADE_STEPS].reverse();

const EdgePocketShadow = React.memo(function EdgePocketShadow({
  side,
  bgColor,
}: {
  side: "left" | "right";
  bgColor: string;
}) {
  const orderedSteps = side === "right" ? FADE_STEPS : LEFT_FADE_STEPS;

  return (
    <View
      pointerEvents="none"
      style={[
        rowStyles.edgeShadowContainer,
        side === "left" ? rowStyles.edgeShadowLeft : rowStyles.edgeShadowRight,
      ]}
    >
      <View style={rowStyles.gradientStripRow}>
        {orderedSteps.map((alpha, idx) => (
          <View
            key={`fade-${idx}`}
            style={{
              flex: 1,
              backgroundColor: bgColor,
              opacity: alpha,
            }}
          />
        ))}
      </View>
    </View>
  );
});

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  threshold?: number;
  showExpandButton?: boolean;
  fadeColor?: string;
}

export const ExpandablePillRow = React.memo(function ExpandablePillRow({
  children,
  style,
  contentContainerStyle,
  threshold = 4,
  showExpandButton = true,
  fadeColor,
}: ExpandablePillRowProps) {
  const { theme, themeConfig, themeMetrics, themeKey, resolvedFonts } = useTheme();
  const sbStyle = themeConfig?.horizontalScrollbarStyle || "subtle-bar";
  const pillSizePreset = themeConfig?.pillSize || "md";
  const isCustomPillSize = pillSizePreset !== "md";
  const pmMinH = themeMetrics?.pillMinHeightPx ?? 32;
  const pmPV = themeMetrics?.pillPaddingVPx ?? 6;
  const pmPH = themeMetrics?.pillPaddingHPx ?? 11;
  const iconScale = themeMetrics?.iconScale ?? 1.0;
  const lineHeightScale = themeMetrics?.lineHeightScale ?? 1.0;
  const letterSpacingOffset = themeMetrics?.letterSpacingOffset ?? 0;
  const showVertSb = themeConfig?.verticalScrollbarStyle !== "hidden";
  const hasCustomPillShape =
    Boolean(themeConfig?.pillShape) && themeConfig?.pillShape !== "pill";
  const customPillRadius =
    themeConfig?.pillShape === "square"
      ? 0
      : themeConfig?.pillShape === "sharp"
      ? 4
      : themeConfig?.pillShape === "subtle"
      ? 8
      : themeConfig?.pillShape === "rounded"
      ? 12
      : themeConfig?.pillShape === "soft"
      ? 18
      : undefined;
  const pillFontMult =
    pillSizePreset === "xs"
      ? 0.88
      : pillSizePreset === "sm"
      ? 0.94
      : pillSizePreset === "lg"
      ? 1.08
      : pillSizePreset === "xl"
      ? 1.16
      : 1.0;
  const pillLayoutMode = themeConfig?.pillBarLayout || "scroll-with-expand";
  const isWrapMode =
    pillLayoutMode === "always-wrap" ||
    pillLayoutMode === "centered-wrap" ||
    pillLayoutMode === "grid-pills" ||
    pillLayoutMode === "two-col-grid" ||
    pillLayoutMode === "three-col-tiles" ||
    pillLayoutMode === "vertical-list";

  const [expanded, setExpanded] = useState(isWrapMode);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setExpanded(isWrapMode);
    if (pillLayoutMode !== "dropdown" && pillLayoutMode !== "stepper") {
      setDropdownOpen(false);
    }
  }, [isWrapMode, pillLayoutMode]);

  const count = countPillChildren(children);

  const scrollViewRef = useRef<any>(null);
  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const layoutWidthRef = useRef(0);
  const pillLayoutsRef = useRef<Record<number, { x: number; width: number }>>({});

  // Native 60fps scroll offset & elastic edge bounce animation values
  const scrollXAnim = useRef(new Animated.Value(0)).current;
  const handleAnimatedScroll = useRef(
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollXAnim } } }],
      { useNativeDriver: true }
    )
  ).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const wasAtLeftRef = useRef(true);
  const wasAtRightRef = useRef(false);
  const didMountPeekRef = useRef(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > threshold);
  const [trackWidth, setTrackWidth] = useState(0);
  const [scrollDims, setScrollDims] = useState<{
    contentWidth: number;
    viewportWidth: number;
  }>({
    contentWidth: 0,
    viewportWidth: 0,
  });
  const [scrollMetrics, setScrollMetrics] = useState<{
    ratio: number;
    thumbFrac: number;
    scrollable: boolean;
  }>({
    ratio: 0,
    thumbFrac: 0.4,
    scrollable: false,
  });

  const triggerSpringBounce = useCallback(
    (direction: "left" | "right", peakAbs = 11) => {
      const peak = direction === "left" ? peakAbs : -peakAbs;
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: peak,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 0,
          friction: 5,
          tension: 150,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [bounceAnim]
  );

  const updateScrollState = useCallback(() => {
    if (expanded) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const x = scrollXRef.current;
    const cw = contentWidthRef.current;
    const lw = layoutWidthRef.current;
    if (lw <= 0 || cw <= 0) return;
    const maxScroll = Math.max(0, cw - lw);
    const hasLeft = x > 3;
    const hasRight = maxScroll - x > 3;

    if (sbStyle !== "hidden" && sbStyle !== "native-indicator") {
      const scrollable = maxScroll > 6;
      const ratio = maxScroll > 2 ? Math.min(1, Math.max(0, x / maxScroll)) : 0;
      const thumbFrac = cw > 0 ? Math.min(0.85, Math.max(0.18, lw / cw)) : 0.4;
      setScrollMetrics((prev) => {
        if (prev.scrollable !== scrollable) {
          return { ratio, thumbFrac, scrollable };
        }
        if (!scrollable) return prev;
        if (sbStyle === "dots") {
          const prevDot = Math.min(4, Math.round(prev.ratio * 4));
          const nextDot = Math.min(4, Math.round(ratio * 4));
          if (prevDot === nextDot) return prev;
          return { ratio, thumbFrac, scrollable };
        }
        if (
          Math.round(prev.ratio * 25) === Math.round(ratio * 25) &&
          Math.round(prev.thumbFrac * 25) === Math.round(thumbFrac * 25)
        ) {
          return prev;
        }
        return { ratio, thumbFrac, scrollable };
      });
    }
    if (maxScroll > 10 && themeConfig?.scrollBounceEnabled !== false) {
      if (!hasLeft && !wasAtLeftRef.current) {
        triggerSpringBounce("left", 11);
      } else if (!hasRight && !wasAtRightRef.current) {
        triggerSpringBounce("right", 11);
      }
      if (!didMountPeekRef.current && hasRight && x <= 2) {
        didMountPeekRef.current = true;
        triggerSpringBounce("right", 7);
      }
    }
    wasAtLeftRef.current = !hasLeft;
    wasAtRightRef.current = !hasRight;

    setCanScrollLeft(hasLeft);
    setCanScrollRight(hasRight);
  }, [expanded, sbStyle, themeConfig?.scrollBounceEnabled, triggerSpringBounce]);

  const handleScrollEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = e.nativeEvent.contentOffset.x;
      scrollXRef.current = x;
      updateScrollState();
      const cw = contentWidthRef.current;
      const lw = layoutWidthRef.current;
      const maxScroll = Math.max(0, cw - lw);
      if (maxScroll <= 8 || themeConfig?.scrollBounceEnabled === false) return;
      const vx = e.nativeEvent.velocity?.x ?? 0;
      if (x <= 2 && vx < -0.1) {
        triggerSpringBounce("left", 12);
      } else if (x >= maxScroll - 2 && vx > 0.1) {
        triggerSpringBounce("right", 12);
      }
    },
    [themeConfig?.scrollBounceEnabled, triggerSpringBounce, updateScrollState]
  );

  const handleMomentumScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollXRef.current = e.nativeEvent.contentOffset.x;
      updateScrollState();
    },
    [updateScrollState]
  );

  const centerActivePill = useCallback(
    (activeIndex: number) => {
      if (expanded || activeIndex < 0) return;
      const layout = pillLayoutsRef.current[activeIndex];
      const lw = layoutWidthRef.current;
      const cw = contentWidthRef.current;
      if (!layout || lw <= 0) return;
      const maxScroll = Math.max(0, cw - lw);
      const targetX = Math.min(
        maxScroll,
        Math.max(0, layout.x - lw / 2 + layout.width / 2)
      );
      const sv = scrollViewRef.current?.scrollTo
        ? scrollViewRef.current
        : scrollViewRef.current?.getNode?.();
      sv?.scrollTo?.({ x: targetX, animated: true });
    },
    [expanded]
  );

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const w = e.nativeEvent.layout.width;
      layoutWidthRef.current = w;
      setScrollDims((prev) =>
        Math.abs(prev.viewportWidth - w) > 1 ? { ...prev, viewportWidth: w } : prev
      );
      updateScrollState();
    },
    [updateScrollState]
  );

  const handleContentSizeChange = useCallback(
    (w: number) => {
      contentWidthRef.current = w;
      setScrollDims((prev) =>
        Math.abs(prev.contentWidth - w) > 1 ? { ...prev, contentWidth: w } : prev
      );
      updateScrollState();
    },
    [updateScrollState]
  );

  const handleTrackLayout = useCallback((e: LayoutChangeEvent) => {
    const w = Math.round(e.nativeEvent.layout.width);
    if (w > 0) {
      setTrackWidth((prev) => (Math.abs(prev - w) > 1 ? w : prev));
    }
  }, []);

  const handleToggleExpanded = useCallback(() => {
    triggerHaptic(8);
    if (!themeConfig?.reduceMotion) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setExpanded((prev) => !prev);
  }, [themeConfig?.reduceMotion]);

  let runningPillIdx = 0;
  let detectedActiveIdx = -1;

  const isUnderlineTabs = pillLayoutMode === "underline-tabs";
  const isSegmentedBar = pillLayoutMode === "segmented-bar";
  const isFloatingDock = pillLayoutMode === "floating-dock";
  const isSidebarChips = pillLayoutMode === "sidebar-chips" || pillLayoutMode === "index-tabs";
  const isTwoColGrid = pillLayoutMode === "two-col-grid";
  const isThreeColTiles = pillLayoutMode === "three-col-tiles";
  const isVerticalList = pillLayoutMode === "vertical-list";
  const isMinimalText = pillLayoutMode === "minimal-text";

  const renderNormalizedChildren = (
    nodes: React.ReactNode,
    isExpanded: boolean,
    isRootPill = true
  ): React.ReactNode => {
    return React.Children.map(nodes, (child) => {
      if (!React.isValidElement(child)) return child;
      if (child.type === React.Fragment) {
        const fragProps = child.props as { children?: React.ReactNode };
        return <>{renderNormalizedChildren(fragProps.children, isExpanded, isRootPill)}</>;
      }
      const props = child.props as {
        style?: StyleProp<any>;
        children?: React.ReactNode;
        numberOfLines?: number;
        onLayout?: (e: LayoutChangeEvent) => void;
      };
      const nextChildren = props.children
        ? renderNormalizedChildren(props.children, isExpanded, false)
        : props.children;

      if (isRootPill) {
        const pillIdx = runningPillIdx++;
        const isActive = isPillMarkedActive(
          props,
          theme.gold,
          theme.primaryContainer,
          theme.secondaryContainer
        );
        if (detectedActiveIdx === -1 && isActive) {
          detectedActiveIdx = pillIdx;
        }
        const origStyle = props.style;
        const flatPillStyle = StyleSheet.flatten(resolveBaseStyle(origStyle)) || {};
        const pv =
          typeof flatPillStyle.paddingVertical === "number"
            ? Math.max(4, Math.ceil(flatPillStyle.paddingVertical))
            : 5;
        const ph =
          typeof flatPillStyle.paddingHorizontal === "number"
            ? Math.max(9, Math.ceil(flatPillStyle.paddingHorizontal))
            : 10;
        const origOnLayout = props.onLayout;

        let modeOverride: ViewStyle | null = null;
        if (isUnderlineTabs) {
          modeOverride = {
            backgroundColor: "transparent",
            borderWidth: 0,
            borderRadius: 0,
            borderBottomWidth: isActive ? 2.5 : 0,
            borderBottomColor: isActive ? theme.gold : "transparent",
            paddingVertical: isCustomPillSize ? pmPV + 2 : 8,
            paddingHorizontal: isCustomPillSize ? pmPH : 10,
            minHeight: isCustomPillSize ? pmMinH : 32,
          };
        } else if (isMinimalText) {
          modeOverride = {
            backgroundColor: "transparent",
            borderWidth: 0,
            borderRadius: 0,
            paddingVertical: isCustomPillSize ? pmPV : 5,
            paddingHorizontal: isCustomPillSize ? Math.max(6, pmPH - 2) : 8,
            minHeight: isCustomPillSize ? pmMinH : 28,
            opacity: isActive ? 1 : 0.72,
          };
        } else if (isSegmentedBar) {
          modeOverride = {
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 9,
            borderWidth: 0,
            backgroundColor: isActive ? theme.primaryContainer : "transparent",
            paddingVertical: isCustomPillSize ? pmPV : 6,
            paddingHorizontal: isCustomPillSize ? pmPH : 9,
            minHeight: isCustomPillSize ? pmMinH : 32,
          };
        } else if (isFloatingDock) {
          modeOverride = {
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 999,
            borderWidth: isActive ? 1 : 0,
            borderColor: isActive ? theme.gold : "transparent",
            backgroundColor: isActive ? theme.primaryContainer : "transparent",
            paddingVertical: isCustomPillSize ? pmPV : 6,
            paddingHorizontal: isCustomPillSize ? pmPH : 10,
            minHeight: isCustomPillSize ? pmMinH : 32,
          };
        } else if (isSidebarChips) {
          modeOverride = {
            borderTopLeftRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 8,
            borderTopRightRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 8,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderWidth: 1,
            borderBottomWidth: isActive ? 2 : 1,
            borderColor: isActive ? theme.outline : theme.outlineVariant,
            borderBottomColor: isActive ? theme.gold : theme.outlineVariant,
            backgroundColor: isActive ? theme.bgCard : theme.surfaceContainerLow,
            paddingVertical: isCustomPillSize ? pmPV : 6,
            paddingHorizontal: isCustomPillSize ? pmPH : 10,
            minHeight: isCustomPillSize ? pmMinH : 32,
          };
        } else if (isTwoColGrid) {
          modeOverride = {
            flexBasis: "48%" as any,
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 10,
            paddingVertical: isCustomPillSize ? pmPV + 1 : 7,
            paddingHorizontal: isCustomPillSize ? Math.max(6, pmPH - 2) : 8,
            minHeight: isCustomPillSize ? pmMinH + 4 : 36,
            justifyContent: "center",
          };
        } else if (isThreeColTiles) {
          modeOverride = {
            flexBasis: "31.5%" as any,
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 9,
            paddingVertical: isCustomPillSize ? pmPV : 6,
            paddingHorizontal: isCustomPillSize ? Math.min(6, Math.max(4, pmPH - 5)) : 5,
            minHeight: isCustomPillSize ? pmMinH + 2 : 34,
            justifyContent: "center",
          };
        } else if (isVerticalList) {
          modeOverride = {
            width: "100%" as any,
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 10,
            paddingVertical: isCustomPillSize ? pmPV + 2 : 8,
            paddingHorizontal: isCustomPillSize ? pmPH : 11,
            minHeight: isCustomPillSize ? pmMinH + 4 : 36,
            justifyContent: "space-between",
          };
        }

        const normalizedPillExtra: ViewStyle = {
          flexDirection: flatPillStyle.flexDirection || "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: isCustomPillSize ? pmPV : pv,
          paddingHorizontal: isCustomPillSize ? pmPH : ph,
          minHeight: isCustomPillSize
            ? pmMinH
            : typeof flatPillStyle.minHeight === "number"
            ? Math.max(flatPillStyle.minHeight, 26)
            : 28,
          borderRadius:
            hasCustomPillShape && customPillRadius !== undefined
              ? customPillRadius
              : isExpanded
              ? 16
              : flatPillStyle.borderRadius ?? 999,
        };
        const resolvedMinHeight =
          typeof modeOverride?.minHeight === "number"
            ? modeOverride.minHeight
            : typeof normalizedPillExtra.minHeight === "number"
            ? normalizedPillExtra.minHeight
            : 28;
        const expandedExtra = isExpanded && !isTwoColGrid && !isThreeColTiles && !isVerticalList
          ? { maxWidth: "100%" as const, flexShrink: 1 }
          : null;
        const composedStyle =
          typeof origStyle === "function"
            ? (state: any) => [origStyle(state), normalizedPillExtra, expandedExtra, modeOverride]
            : [origStyle, normalizedPillExtra, expandedExtra, modeOverride];

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
            ...(resolvedMinHeight < 40
              ? { hitSlop: { top: 8, bottom: 8, left: 4, right: 4 } }
              : {}),
            onLayout: (e: LayoutChangeEvent) => {
              pillLayoutsRef.current[pillIdx] = {
                x: e.nativeEvent.layout.x,
                width: e.nativeEvent.layout.width,
              };
              if (origOnLayout) origOnLayout(e);
            },
            style: composedStyle,
          },
          nextChildren
        );
      }

      const flatChildStyle = StyleSheet.flatten(resolveBaseStyle(props.style)) || {};
      const isTextNode =
        child.type === Text ||
        typeof flatChildStyle.fontSize === "number" ||
        typeof flatChildStyle.fontFamily === "string" ||
        typeof flatChildStyle.fontWeight === "string";

      if (isTextNode) {
        const fontSize =
          typeof flatChildStyle.fontSize === "number"
            ? flatChildStyle.fontSize
            : 11.5;
        const lineHeight =
          typeof flatChildStyle.lineHeight === "number" &&
          flatChildStyle.lineHeight >= fontSize + 4
            ? flatChildStyle.lineHeight
            : Math.ceil(fontSize + 5);
        const baseLetterSpacing =
          typeof flatChildStyle.letterSpacing === "number"
            ? flatChildStyle.letterSpacing
            : 0;

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
            ...(isTwoColGrid || isThreeColTiles
              ? { numberOfLines: 2 }
              : isExpanded && props.numberOfLines === 1
              ? { numberOfLines: undefined }
              : {}),
            style: [
              props.style,
              {
                fontSize: Math.round((isThreeColTiles ? Math.min(fontSize, 10.5) : isTwoColGrid ? Math.min(fontSize, 11.5) : fontSize) * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                lineHeight: Math.round(lineHeight * pillFontMult * (themeConfig?.fontScale || 1) * lineHeightScale),
                ...(letterSpacingOffset !== 0
                  ? { letterSpacing: Number((baseLetterSpacing + letterSpacingOffset).toFixed(2)) }
                  : {}),
                includeFontPadding: true,
                textAlignVertical: "center",
                ...(themeConfig?.fontPair && themeConfig.fontPair !== "outfit-inter"
                  ? { fontFamily: resolvedFonts.bold }
                  : {}),
              },
              isExpanded ? { flexShrink: 1 } : null,
            ],
          },
          nextChildren
        );
      }

      return React.cloneElement(
        child as React.ReactElement<any>,
        {
          ...(isExpanded && props.numberOfLines === 1
            ? { numberOfLines: undefined }
            : {}),
          style: isExpanded
            ? typeof props.style === "function"
              ? (s: any) => [(props.style as any)(s), { flexShrink: 1 }]
              : [props.style, { flexShrink: 1 }]
            : props.style,
        },
        nextChildren
      );
    });
  };

  const renderedPills =
    (pillLayoutMode === "dropdown" || pillLayoutMode === "stepper") ? null : renderNormalizedChildren(children, expanded, true);

  useEffect(() => {
    if (detectedActiveIdx >= 0 && !expanded && pillLayoutMode !== "dropdown" && pillLayoutMode !== "stepper") {
      const timer = setTimeout(() => centerActivePill(detectedActiveIdx), 40);
      return () => clearTimeout(timer);
    }
  }, [detectedActiveIdx, expanded, pillLayoutMode, centerActivePill]);

  const flatContent = StyleSheet.flatten(contentContainerStyle) || {};
  const {
    marginBottom,
    marginTop,
    marginVertical,
    paddingBottom,
    paddingTop,
    paddingVertical: _ignoredPaddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    ...innerContentStyle
  } = flatContent;

  const outerSpacing: ViewStyle = {
    ...(marginBottom !== undefined ? { marginBottom } : {}),
    ...(marginTop !== undefined ? { marginTop } : {}),
    ...(marginVertical !== undefined ? { marginVertical } : {}),
    ...(paddingBottom !== undefined && marginBottom === undefined
      ? { marginBottom: paddingBottom }
      : {}),
    ...(paddingTop !== undefined && marginTop === undefined
      ? { marginTop: paddingTop }
      : {}),
    ...(paddingHorizontal !== undefined ? { paddingHorizontal } : {}),
    ...(paddingLeft !== undefined ? { paddingLeft } : {}),
    ...(paddingRight !== undefined ? { paddingRight } : {}),
  };

  // Alternatives 1 & 7: Dropdown Picker Modal & Prev/Next Carousel Stepper
  if (pillLayoutMode === "dropdown" || pillLayoutMode === "stepper") {
    const options = extractPillOptions(
      children,
      theme.gold,
      theme.primaryContainer,
      theme.secondaryContainer
    );
    const activeIdx = Math.max(0, options.findIndex((o) => o.active));
    const activeOpt = options[activeIdx] || options[0];
    const stepBtnDim = Math.max(34, pmMinH);
    const chevronSize = Math.round(16 * iconScale);
    const stepBy = (delta: number) => {
      if (options.length <= 1) return;
      const nextIdx = (activeIdx + delta + options.length) % options.length;
      const target = options[nextIdx];
      if (target && !target.disabled) {
        triggerHaptic(6);
        try {
          target.onPress?.();
        } catch {}
      }
    };
    return (
      <View key={`pill-row-${pillLayoutMode}-${themeKey}`} style={[outerSpacing, style]}>
        {pillLayoutMode === "stepper" ? (
          <View
            style={[
              rowStyles.dropdownBtn,
              {
                backgroundColor: theme.surfaceContainerLow,
                borderColor: theme.outlineVariant,
                minHeight: isCustomPillSize ? Math.max(42, pmMinH + 10) : undefined,
                paddingVertical: isCustomPillSize ? Math.max(4, pmPV) : 5,
                paddingHorizontal: isCustomPillSize ? Math.max(6, pmPH - 2) : 6,
                ...(hasCustomPillShape && customPillRadius !== undefined
                  ? { borderRadius: customPillRadius }
                  : {}),
              },
            ]}
          >
            <Pressable
              onPress={() => stepBy(-1)}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Previous option"
            >
              <View
                style={{
                  width: stepBtnDim,
                  height: stepBtnDim,
                  borderRadius:
                    hasCustomPillShape && customPillRadius !== undefined
                      ? Math.min(customPillRadius, Math.round(stepBtnDim / 2))
                      : 8,
                  backgroundColor: theme.surfaceContainerHigh,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="chevron-back" size={chevronSize} color={theme.gold} />
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                triggerHaptic(6);
                setDropdownOpen(true);
              }}
              style={{ flex: 1, minWidth: 0, alignItems: "center", paddingHorizontal: 6 }}
            >
              <Text
                style={{
                  fontFamily: resolvedFonts.bold,
                  fontSize: Math.round(12.5 * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                  lineHeight: Math.round(17 * pillFontMult * (themeConfig?.fontScale || 1) * lineHeightScale),
                  ...(letterSpacingOffset !== 0 ? { letterSpacing: letterSpacingOffset } : {}),
                  color: theme.textPrimary,
                }}
                numberOfLines={1}
              >
                {activeOpt?.label || "Select option"}
              </Text>
              <Text
                style={{
                  fontFamily: resolvedFonts.body,
                  fontSize: Math.round(10 * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                  lineHeight: Math.round(14 * pillFontMult * (themeConfig?.fontScale || 1) * lineHeightScale),
                  ...(letterSpacingOffset !== 0 ? { letterSpacing: letterSpacingOffset } : {}),
                  color: theme.textMuted,
                }}
              >
                {activeIdx + 1} / {Math.max(1, options.length)} · Tap for all
              </Text>
            </Pressable>
            <Pressable
              onPress={() => stepBy(1)}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Next option"
            >
              <View
                style={{
                  width: stepBtnDim,
                  height: stepBtnDim,
                  borderRadius:
                    hasCustomPillShape && customPillRadius !== undefined
                      ? Math.min(customPillRadius, Math.round(stepBtnDim / 2))
                      : 8,
                  backgroundColor: theme.surfaceContainerHigh,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="chevron-forward" size={chevronSize} color={theme.gold} />
              </View>
            </Pressable>
          </View>
        ) : (
        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setDropdownOpen(true);
          }}
          accessibilityRole="button"
          accessibilityLabel={`Select option: ${activeOpt?.label || "Menu"}`}
        >
          <View
            style={[
              rowStyles.dropdownBtn,
              {
                backgroundColor: theme.surfaceContainerLow,
                borderColor: theme.outlineVariant,
                minHeight: isCustomPillSize ? Math.max(34, pmMinH + 8) : undefined,
                paddingVertical: isCustomPillSize ? Math.max(5, pmPV + 2) : 10,
                paddingHorizontal: isCustomPillSize ? Math.max(9, pmPH + 2) : 13,
                ...(hasCustomPillShape && customPillRadius !== undefined
                  ? { borderRadius: customPillRadius }
                  : {}),
              },
            ]}
          >
            <View style={{ flex: 1, minWidth: 0 }}>
              <Text
                style={{
                  fontFamily: resolvedFonts.bold,
                  fontSize: Math.round(12.5 * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                  lineHeight: Math.round(17 * pillFontMult * (themeConfig?.fontScale || 1) * lineHeightScale),
                  ...(letterSpacingOffset !== 0 ? { letterSpacing: letterSpacingOffset } : {}),
                  color: theme.textPrimary,
                }}
                numberOfLines={1}
              >
                {activeOpt?.label || "Select option"}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 2,
                borderRadius: hasCustomPillShape && customPillRadius !== undefined ? Math.min(customPillRadius, 999) : 999,
                backgroundColor: theme.primaryContainer,
              }}
            >
              <Text
                style={{
                  fontFamily: resolvedFonts.bold,
                  fontSize: Math.round(10.5 * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                  color: theme.gold,
                }}
              >
                {options.length}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={chevronSize} color={theme.gold} />
          </View>
        </Pressable>
        )}

        <Modal
          visible={dropdownOpen}
          transparent
          animationType={themeConfig?.reduceMotion ? "none" : "fade"}
          onRequestClose={() => setDropdownOpen(false)}
        >
          <Pressable
            style={rowStyles.modalBackdrop}
            onPress={() => setDropdownOpen(false)}
          >
            <Pressable onPress={() => {}}>
              <View
                key={`dd-sheet-${themeKey}`}
                style={[
                  rowStyles.modalSheet,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <View style={rowStyles.modalHeader}>
                  <Text
                    style={{
                      fontFamily: resolvedFonts.heading,
                      fontSize: Math.round(15 * (themeConfig?.fontScale || 1)),
                      color: theme.textPrimary,
                    }}
                  >
                    Select Option ({options.length})
                  </Text>
                  <Pressable onPress={() => setDropdownOpen(false)} hitSlop={8}>
                    <Ionicons name="close" size={Math.round(20 * iconScale)} color={theme.textSecondary} />
                  </Pressable>
                </View>
                <ScrollView
                  style={{ maxHeight: 340 }}
                  contentContainerStyle={{ gap: 6 }}
                  showsVerticalScrollIndicator={showVertSb}
                >
                  {options.map((opt) => (
                    <Pressable
                      key={`${opt.key}-${themeKey}`}
                      disabled={opt.disabled}
                      onPress={() => {
                        triggerHaptic(6);
                        setDropdownOpen(false);
                        try {
                          opt.onPress?.();
                        } catch {}
                      }}
                    >
                      <View
                        style={[
                          rowStyles.modalOption,
                          {
                            backgroundColor: opt.active
                              ? theme.primaryContainer
                              : theme.surfaceContainerLow,
                            borderColor: opt.active ? theme.gold : theme.outlineVariant,
                            opacity: opt.disabled ? 0.45 : 1,
                            minHeight: isCustomPillSize ? Math.max(36, pmMinH + 8) : undefined,
                            paddingVertical: isCustomPillSize ? Math.max(6, pmPV + 4) : 11,
                            paddingHorizontal: isCustomPillSize ? Math.max(10, pmPH + 2) : 13,
                            ...(hasCustomPillShape && customPillRadius !== undefined
                              ? { borderRadius: customPillRadius }
                              : {}),
                          },
                        ]}
                      >
                        <Text
                          style={{
                            flex: 1,
                            fontFamily: opt.active ? resolvedFonts.bold : resolvedFonts.body,
                            fontSize: Math.round(13 * pillFontMult * (themeConfig?.fontScale || 1) * 10) / 10,
                            lineHeight: Math.round(18 * pillFontMult * (themeConfig?.fontScale || 1) * lineHeightScale),
                            ...(letterSpacingOffset !== 0 ? { letterSpacing: letterSpacingOffset } : {}),
                            color: opt.active ? theme.gold : theme.textPrimary,
                          }}
                          numberOfLines={2}
                        >
                          {opt.label}
                        </Text>
                        {opt.active && (
                          <Ionicons name="checkmark-circle" size={Math.round(18 * iconScale)} color={theme.gold} />
                        )}
                      </View>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>
    );
  }

  const resolvedFadeColor = fadeColor || theme.bgPrimary;
  const sbThickness = resolveScrollbarThicknessPx(
    themeConfig?.horizontalScrollbarThickness || "thin"
  );
  const sbColor = themeConfig?.customColors?.scrollbarColor || theme.gold;
  const showNativeSb = sbStyle === "native-indicator";
  const showEdgeFade = themeConfig?.edgeFadeEnabled !== false;
  const canExpand =
    pillLayoutMode !== "always-scroll" &&
    pillLayoutMode !== "always-wrap" &&
    pillLayoutMode !== "centered-wrap" &&
    pillLayoutMode !== "grid-pills" &&
    !isUnderlineTabs &&
    !isSegmentedBar &&
    !isFloatingDock &&
    !isSidebarChips &&
    !isMinimalText &&
    !isTwoColGrid &&
    !isThreeColTiles &&
    !isVerticalList &&
    showExpandButton &&
    (count > threshold || canScrollRight || canScrollLeft || expanded);

  const renderCustomScrollbar = () => {
    const maxScroll = Math.max(0, scrollDims.contentWidth - scrollDims.viewportWidth);
    const isScrollable = maxScroll > 6 || scrollMetrics.scrollable;
    if (
      expanded ||
      !isScrollable ||
      sbStyle === "hidden" ||
      sbStyle === "native-indicator"
    ) {
      return null;
    }

    const resolvedTrackWidth =
      trackWidth > 0
        ? trackWidth
        : scrollDims.viewportWidth > 0
        ? scrollDims.viewportWidth
        : 240;
    const thumbFrac =
      scrollDims.contentWidth > 0
        ? Math.min(0.85, Math.max(0.18, scrollDims.viewportWidth / scrollDims.contentWidth))
        : scrollMetrics.thumbFrac;

    if (sbStyle === "tick-ruler") {
      const tickCount = 9;
      const tickHeight = Math.max(8, sbThickness + 4);
      const tickThumbWidth = Math.max(6, sbThickness + 3);
      const tickInnerTrack = Math.max(24, resolvedTrackWidth - 16);
      const tickTranslateX = scrollXAnim.interpolate({
        inputRange: [0, Math.max(1, maxScroll)],
        outputRange: [0, Math.max(0, tickInnerTrack - tickThumbWidth)],
        extrapolate: "clamp",
      });
      return (
        <View
          onLayout={handleTrackLayout}
          style={{
            width: "100%",
            paddingHorizontal: 8,
            marginTop: 4,
            height: tickHeight,
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            {Array.from({ length: tickCount }).map((_, idx) => {
              const isMajor = idx === 0 || idx === 4 || idx === 8;
              return (
                <View
                  key={`tick-${idx}`}
                  style={{
                    width: 1.5,
                    height: isMajor ? 6 : 4,
                    borderRadius: 1,
                    backgroundColor: theme.outlineVariant,
                    opacity: 0.55,
                  }}
                />
              );
            })}
          </View>
          <Animated.View
            pointerEvents="none"
            style={{
              position: "absolute",
              left: 8,
              bottom: 0,
              width: tickThumbWidth,
              height: tickHeight,
              borderRadius: 2,
              backgroundColor: sbColor,
              transform: [{ translateX: tickTranslateX }],
            }}
          />
        </View>
      );
    }

    if (sbStyle === "dots") {
      const dotCount = 5;
      const activeDot = Math.min(
        dotCount - 1,
        Math.round(scrollMetrics.ratio * (dotCount - 1))
      );
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            marginTop: 4,
          }}
        >
          {Array.from({ length: dotCount }).map((_, idx) => (
            <View
              key={`dot-${idx}`}
              style={{
                width: idx === activeDot ? sbThickness * 3 : sbThickness * 1.5,
                height: sbThickness * 1.5,
                borderRadius: 999,
                backgroundColor: idx === activeDot ? sbColor : theme.outlineVariant,
                opacity: idx === activeDot ? 1 : 0.45,
              }}
            />
          ))}
        </View>
      );
    }

    const thumbWidth = Math.max(24, Math.round(resolvedTrackWidth * thumbFrac));
    const thumbTranslateX = scrollXAnim.interpolate({
      inputRange: [0, Math.max(1, maxScroll)],
      outputRange: [0, Math.max(0, resolvedTrackWidth - thumbWidth)],
      extrapolate: "clamp",
    });

    if (sbStyle === "glow-rail") {
      return (
        <View
          onLayout={handleTrackLayout}
          style={{
            height: Math.max(4, sbThickness + 1),
            width: "100%",
            borderRadius: 999,
            marginTop: 4,
            backgroundColor:
              themeConfig?.scrollbarTrackVisible !== false
                ? hexToRgba(sbColor, 0.16)
                : "transparent",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Animated.View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: thumbWidth,
              borderRadius: 999,
              backgroundColor: sbColor,
              shadowColor: sbColor,
              shadowOpacity: 0.75,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 0 },
              elevation: 2,
              transform: [{ translateX: thumbTranslateX }],
            }}
          />
        </View>
      );
    }

    return (
      <View
        onLayout={handleTrackLayout}
        style={{
          height: sbThickness,
          width: "100%",
          borderRadius: 999,
          marginTop: 4,
          backgroundColor:
            themeConfig?.scrollbarTrackVisible !== false
              ? hexToRgba(theme.outlineVariant, 0.25)
              : "transparent",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: thumbWidth,
            borderRadius: 999,
            backgroundColor: sbColor,
            opacity: sbStyle === "subtle-bar" ? 0.65 : 1,
            transform: [{ translateX: thumbTranslateX }],
          }}
        />
      </View>
    );
  };

  // Explicit Wrap Modes (Always Wrap, Centered Wrap, Grid Pills) — no redundant collapse chevron
  if (
    pillLayoutMode === "always-wrap" ||
    pillLayoutMode === "centered-wrap" ||
    pillLayoutMode === "grid-pills"
  ) {
    return (
      <View
        key={`pill-row-${pillLayoutMode}-${themeKey}`}
        style={[
          innerContentStyle,
          outerSpacing,
          style,
          {
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent:
              pillLayoutMode === "centered-wrap" ? "center" : "flex-start",
            gap: 6,
            paddingVertical: 2,
          },
        ]}
      >
        {renderedPills}
      </View>
    );
  }

  // Alternatives: 2-Col Grid, 3-Col Mini Tiles & Phone-Bounded Vertical List
  if (isTwoColGrid || isThreeColTiles || isVerticalList) {
    if (isVerticalList && count > 4) {
      return (
        <View
          key={`pill-row-${pillLayoutMode}-${themeKey}`}
          style={[
            outerSpacing,
            style,
            {
              maxHeight: Math.min(260, Math.round(Math.max(168, (pmMinH + 10) * 4))),
              borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 12,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: theme.outlineVariant,
              backgroundColor: theme.surfaceContainerLow,
              padding: 6,
            },
          ]}
        >
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={showVertSb} contentContainerStyle={{ gap: 5 }}>
            {renderedPills}
          </ScrollView>
        </View>
      );
    }
    if ((isTwoColGrid || isThreeColTiles) && count > 6) {
      return (
        <View
          key={`pill-row-${pillLayoutMode}-${themeKey}`}
          style={[
            outerSpacing,
            style,
            {
              maxHeight: 148,
              borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 12,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: theme.outlineVariant,
              backgroundColor: theme.surfaceContainerLow,
              padding: 6,
            },
          ]}
        >
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={showVertSb}
            contentContainerStyle={[
              innerContentStyle,
              {
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: isThreeColTiles ? 5 : 6,
              },
            ]}
          >
            {renderedPills}
          </ScrollView>
        </View>
      );
    }
    return (
      <View
        key={`pill-row-${pillLayoutMode}-${themeKey}`}
        style={[
          innerContentStyle,
          outerSpacing,
          style,
          {
            width: "100%",
            flexDirection: isVerticalList ? "column" : "row",
            flexWrap: isVerticalList ? "nowrap" : "wrap",
            justifyContent: "flex-start",
            gap: isThreeColTiles ? 5 : 6,
            paddingVertical: 2,
          },
        ]}
      >
        {renderedPills}
      </View>
    );
  }

  // Horizontal Scroll-based alternatives (Scroll+Expand, Always Scroll, Underline Tabs, Segmented Bar, Minimal Text)
  if (!canExpand) {
    return (
      <View
        key={`pill-row-${pillLayoutMode}-${themeKey}`}
        style={[
          rowStyles.rowWrap,
          outerSpacing,
          style,
          isUnderlineTabs && {
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.outlineVariant,
          },
          isSegmentedBar && {
            backgroundColor: theme.surfaceContainerLow,
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 12,
            borderWidth: 1,
            borderColor: theme.outlineVariant,
            padding: 3,
          },
          isFloatingDock && {
            backgroundColor: theme.surfaceContainerHigh,
            borderRadius: hasCustomPillShape && customPillRadius !== undefined ? customPillRadius : 999,
            borderWidth: 1,
            borderColor: theme.outlineVariant,
            paddingHorizontal: 5,
            paddingVertical: 3,
          },
        ]}
      >
        <View style={{ flex: 1, minWidth: 0 }}>
          <View style={rowStyles.viewportWrap}>
            <Animated.View
              style={{ flex: 1, transform: [{ translateX: bounceAnim }] }}
            >
              <Animated.ScrollView
                ref={scrollViewRef}
                horizontal
                nestedScrollEnabled
                decelerationRate="normal"
                bounces={true}
                alwaysBounceHorizontal={true}
                overScrollMode="always"
                showsHorizontalScrollIndicator={showNativeSb}
                scrollEventThrottle={16}
                onScroll={handleAnimatedScroll}
                onLayout={handleLayout}
                onContentSizeChange={handleContentSizeChange}
                onScrollEndDrag={handleScrollEndDrag}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                contentContainerStyle={[
                  innerContentStyle,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: isSegmentedBar ? 3 : isUnderlineTabs ? 4 : 6,
                    paddingVertical: isUnderlineTabs ? 0 : 2,
                    paddingRight: canScrollRight ? 12 : 2,
                  },
                ]}
              >
                {renderedPills}
              </Animated.ScrollView>
            </Animated.View>
            {showEdgeFade && canScrollLeft && !isSegmentedBar && !isFloatingDock && (
              <EdgePocketShadow side="left" bgColor={resolvedFadeColor} />
            )}
            {showEdgeFade && canScrollRight && !isSegmentedBar && !isFloatingDock && (
              <EdgePocketShadow side="right" bgColor={resolvedFadeColor} />
            )}
          </View>
          {renderCustomScrollbar()}
        </View>
      </View>
    );
  }

  const actionBtnDim = Math.round(28 * Math.max(0.85, Math.min(1.25, iconScale)));
  const actionBtnRadius = Math.round(14 * Math.max(0.85, Math.min(1.25, iconScale)));

  return (
    <View
      key={`pill-row-${pillLayoutMode}-${themeKey}`}
      style={[
        rowStyles.rowWrap,
        { alignItems: "center" },
        outerSpacing,
        style,
      ]}
    >
      {expanded ? (
        <View
          style={[
            innerContentStyle,
            {
              flex: 1,
              minWidth: 0,
              maxWidth: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent:
                pillLayoutMode === "centered-wrap" ? "center" : "flex-start",
              gap: 6,
              paddingVertical: 2,
            },
          ]}
        >
          {renderedPills}
        </View>
      ) : (
        <View style={{ flex: 1, minWidth: 0 }}>
          <View style={rowStyles.viewportWrap}>
            <Animated.View
              style={{ flex: 1, transform: [{ translateX: bounceAnim }] }}
            >
              <Animated.ScrollView
                ref={scrollViewRef}
                horizontal
                nestedScrollEnabled
                decelerationRate="normal"
                bounces={true}
                alwaysBounceHorizontal={true}
                overScrollMode="always"
                showsHorizontalScrollIndicator={showNativeSb}
                scrollEventThrottle={16}
                onScroll={handleAnimatedScroll}
                onLayout={handleLayout}
                onContentSizeChange={handleContentSizeChange}
                onScrollEndDrag={handleScrollEndDrag}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                contentContainerStyle={[
                  innerContentStyle,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    paddingVertical: 2,
                    paddingRight: canScrollRight ? 14 : 2,
                  },
                ]}
              >
                {renderedPills}
              </Animated.ScrollView>
            </Animated.View>
            {showEdgeFade && canScrollLeft && (
              <EdgePocketShadow side="left" bgColor={resolvedFadeColor} />
            )}
            {showEdgeFade && canScrollRight && (
              <EdgePocketShadow side="right" bgColor={resolvedFadeColor} />
            )}
          </View>
          {renderCustomScrollbar()}
        </View>
      )}

      <Pressable
        android_ripple={androidRipple(theme.rippleColor, true)}
        onPress={handleToggleExpanded}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={
          expanded ? "Collapse pills" : `Expand all ${count} pills vertically`
        }
        style={({ pressed }) => [
          {
            alignSelf: "center",
            flexShrink: 0,
            transform: [{ scale: pressed ? 0.92 : 1 }],
          },
        ]}
      >
        <View
          style={[
            rowStyles.actionBtn,
            {
              width: actionBtnDim,
              height: actionBtnDim,
              borderRadius: actionBtnRadius,
              borderColor: expanded ? theme.gold : theme.outlineVariant,
              backgroundColor: expanded
                ? hexToRgba(theme.gold, 0.15)
                : theme.surfaceContainerHigh,
            },
          ]}
        >
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={Math.round(14 * iconScale)}
            color={theme.gold}
          />
        </View>
      </Pressable>
    </View>
  );
});

const rowStyles = StyleSheet.create({
  rowWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minWidth: 0,
    maxWidth: "100%",
    minHeight: 34,
  },
  viewportWrap: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  edgeShadowContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 14,
    zIndex: 10,
  },
  edgeShadowLeft: {
    left: 0,
  },
  edgeShadowRight: {
    right: 0,
  },
  gradientStripRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  actionBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  dropdownBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.48)",
    justifyContent: "flex-end",
    padding: 16,
  },
  modalSheet: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    gap: 12,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 12,
    borderWidth: 1,
  },
});

export default ExpandablePillRow;
