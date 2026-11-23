import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
  type LayoutChangeEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, androidRipple, triggerHaptic } from "../theme";
import { resolveScrollbarThicknessPx } from "../lib/theme-engine";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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

function isPillMarkedActive(props: any, goldColor?: string): boolean {
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
  return false;
}

// Gentle 16-step feather alpha progression for edge fade without harsh vertical lines
const FADE_STEPS = [
  0.0, 0.02, 0.05, 0.09, 0.14, 0.2, 0.27, 0.35,
  0.44, 0.53, 0.62, 0.71, 0.79, 0.85, 0.9, 0.94,
];

function EdgePocketShadow({
  side,
  bgColor,
}: {
  side: "left" | "right";
  bgColor: string;
}) {
  const orderedSteps =
    side === "right" ? FADE_STEPS : [...FADE_STEPS].reverse();

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
}

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  threshold?: number;
  showExpandButton?: boolean;
  fadeColor?: string;
}

export function ExpandablePillRow({
  children,
  style,
  contentContainerStyle,
  threshold = 4,
  showExpandButton = true,
  fadeColor,
}: ExpandablePillRowProps) {
  const { theme, themeConfig, resolvedFonts } = useTheme();
  const pillLayoutMode = themeConfig?.pillBarLayout || "scroll-with-expand";
  const [expanded, setExpanded] = useState(pillLayoutMode === "always-wrap" || pillLayoutMode === "centered-wrap" || pillLayoutMode === "grid-pills");
  useEffect(() => {
    if (pillLayoutMode === "always-wrap" || pillLayoutMode === "centered-wrap" || pillLayoutMode === "grid-pills") {
      setExpanded(true);
    } else if (pillLayoutMode === "always-scroll") {
      setExpanded(false);
    }
  }, [pillLayoutMode]);
  const count = countPillChildren(children);

  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const layoutWidthRef = useRef(0);
  const pillLayoutsRef = useRef<Record<number, { x: number; width: number }>>({});

  // Elastic edge bounce animation value
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const wasAtLeftRef = useRef(true);
  const wasAtRightRef = useRef(false);
  const didMountPeekRef = useRef(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > threshold);
  const [scrollMetrics, setScrollMetrics] = useState<{ ratio: number; thumbFrac: number; scrollable: boolean }>({
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

    const ratio = maxScroll > 2 ? Math.min(1, Math.max(0, x / maxScroll)) : 0;
    const thumbFrac = cw > 0 ? Math.min(0.85, Math.max(0.18, lw / cw)) : 0.4;
    setScrollMetrics({ ratio, thumbFrac, scrollable: maxScroll > 6 });
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
  }, [expanded, triggerSpringBounce]);

  const handleScrollEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = e.nativeEvent.contentOffset.x;
      const cw = contentWidthRef.current;
      const lw = layoutWidthRef.current;
      const maxScroll = Math.max(0, cw - lw);
      if (maxScroll <= 8) return;
      const vx = e.nativeEvent.velocity?.x ?? 0;
      if (x <= 2 && vx < -0.1) {
        triggerSpringBounce("left", 12);
      } else if (x >= maxScroll - 2 && vx > 0.1) {
        triggerSpringBounce("right", 12);
      }
    },
    [triggerSpringBounce]
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
      scrollViewRef.current?.scrollTo({ x: targetX, animated: true });
    },
    [expanded]
  );

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      layoutWidthRef.current = e.nativeEvent.layout.width;
      updateScrollState();
    },
    [updateScrollState]
  );

  const handleContentSizeChange = useCallback(
    (w: number) => {
      contentWidthRef.current = w;
      updateScrollState();
    },
    [updateScrollState]
  );

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollXRef.current = e.nativeEvent.contentOffset.x;
      updateScrollState();
    },
    [updateScrollState]
  );

  let runningPillIdx = 0;
  let detectedActiveIdx = -1;

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
        if (detectedActiveIdx === -1 && isPillMarkedActive(props, theme.gold)) {
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
        const normalizedPillExtra = {
          flexDirection: flatPillStyle.flexDirection || "row",
          alignItems: "center" as const,
          justifyContent: "center" as const,
          paddingVertical: pv,
          paddingHorizontal: ph,
          minHeight:
            typeof flatPillStyle.minHeight === "number"
              ? Math.max(flatPillStyle.minHeight, 26)
              : 28,
          borderRadius:
            themeConfig?.pillShape === "square" ? 0 :
            themeConfig?.pillShape === "sharp" ? 4 :
            themeConfig?.pillShape === "subtle" ? 8 :
            themeConfig?.pillShape === "rounded" ? 12 :
            themeConfig?.pillShape === "soft" ? 18 :
            isExpanded ? 16 : (flatPillStyle.borderRadius ?? 999),
        };
        const expandedExtra = isExpanded
          ? { maxWidth: "100%" as const, flexShrink: 1 }
          : null;
        const composedStyle =
          typeof origStyle === "function"
            ? (state: any) => [origStyle(state), normalizedPillExtra, expandedExtra]
            : [origStyle, normalizedPillExtra, expandedExtra];

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
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

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
            ...(isExpanded && props.numberOfLines === 1
              ? { numberOfLines: undefined }
              : {}),
            style: [
              props.style,
              {
                fontSize: Math.round(fontSize * (themeConfig?.fontScale || 1) * 10) / 10,
                lineHeight: Math.round(lineHeight * (themeConfig?.fontScale || 1)),
                includeFontPadding: true,
                textAlignVertical: "center",
                ...(themeConfig?.fontPair && themeConfig.fontPair !== "outfit-inter" ? { fontFamily: resolvedFonts.bold } : {}),
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
          style: isExpanded ? (typeof props.style === "function" ? (s: any) => [(props.style as any)(s), { flexShrink: 1 }] : [props.style, { flexShrink: 1 }]) : props.style,
        },
        nextChildren
      );
    });
  };

  const renderedPills = renderNormalizedChildren(children, expanded, true);

  useEffect(() => {
    if (detectedActiveIdx >= 0 && !expanded) {
      const timer = setTimeout(() => centerActivePill(detectedActiveIdx), 40);
      return () => clearTimeout(timer);
    }
  }, [detectedActiveIdx, expanded, centerActivePill]);

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

  const resolvedFadeColor = fadeColor || theme.bgPrimary;
  const sbStyle = themeConfig?.horizontalScrollbarStyle || "subtle-bar";
  const sbThickness = resolveScrollbarThicknessPx(themeConfig?.horizontalScrollbarThickness || "thin");
  const sbColor = themeConfig?.customColors?.scrollbarColor || theme.gold;
  const showNativeSb = sbStyle === "native-indicator";
  const showEdgeFade = themeConfig?.edgeFadeEnabled !== false;
  const canExpand =
    pillLayoutMode !== "always-scroll" &&
    showExpandButton &&
    (count > threshold || canScrollRight || canScrollLeft || expanded);

  const renderCustomScrollbar = () => {
    if (expanded || !scrollMetrics.scrollable || sbStyle === "hidden" || sbStyle === "native-indicator") {
      return null;
    }
    if (sbStyle === "dots") {
      const dotCount = 5;
      const activeDot = Math.min(dotCount - 1, Math.round(scrollMetrics.ratio * (dotCount - 1)));
      return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5, marginTop: 4 }}>
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
    const leftPct = Math.round(scrollMetrics.ratio * (1 - scrollMetrics.thumbFrac) * 100);
    const widthPct = Math.round(scrollMetrics.thumbFrac * 100);
    return (
      <View
        style={{
          height: sbThickness,
          width: "100%",
          borderRadius: 999,
          marginTop: 4,
          backgroundColor:
            themeConfig?.scrollbarTrackVisible !== false
              ? `${theme.outlineVariant}40`
              : "transparent",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${leftPct}%`,
            width: `${widthPct}%`,
            borderRadius: 999,
            backgroundColor: sbColor,
            opacity: sbStyle === "subtle-bar" ? 0.65 : 1,
          }}
        />
      </View>
    );
  };

  if (!canExpand) {
    return (
      <View style={[rowStyles.rowWrap, outerSpacing, style]}>
        <View style={{ flex: 1, minWidth: 0 }}>
        <View style={rowStyles.viewportWrap}>
          <Animated.View style={{ flex: 1, transform: [{ translateX: bounceAnim }] }}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              bounces={true}
              alwaysBounceHorizontal={true}
              overScrollMode="always"
              showsHorizontalScrollIndicator={showNativeSb}
              scrollEventThrottle={16}
              onLayout={handleLayout}
              onContentSizeChange={handleContentSizeChange}
              onScroll={handleScroll}
              onScrollEndDrag={handleScrollEndDrag}
              contentContainerStyle={[
                innerContentStyle,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  paddingVertical: 2,
                  paddingRight: canScrollRight ? 12 : 2,
                },
              ]}
            >
              {renderedPills}
            </ScrollView>
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
      </View>
    );
  }

  return (
    <View
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
              justifyContent: pillLayoutMode === "centered-wrap" ? "center" : "flex-start",
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
          <Animated.View style={{ flex: 1, transform: [{ translateX: bounceAnim }] }}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              bounces={true}
              alwaysBounceHorizontal={true}
              overScrollMode="always"
              showsHorizontalScrollIndicator={showNativeSb}
              scrollEventThrottle={16}
              onLayout={handleLayout}
              onContentSizeChange={handleContentSizeChange}
              onScroll={handleScroll}
              onScrollEndDrag={handleScrollEndDrag}
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
            </ScrollView>
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
        onPress={() => {
          triggerHaptic(8);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setExpanded((prev) => !prev);
        }}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={
          expanded ? "Collapse pills" : `Expand all ${count} pills vertically`
        }
        style={({ pressed }) => [
          rowStyles.actionBtn,
          {
            alignSelf: "center",
            borderColor: expanded ? theme.gold : theme.outlineVariant,
            backgroundColor: expanded
              ? `${theme.gold}26`
              : theme.surfaceContainerHigh,
            transform: [{ scale: pressed ? 0.92 : 1 }],
          },
        ]}
      >
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={14}
          color={theme.gold}
        />
      </Pressable>
    </View>
  );
}

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
});

export default ExpandablePillRow;
