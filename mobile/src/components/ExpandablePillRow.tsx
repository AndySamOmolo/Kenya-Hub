import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
  type LayoutChangeEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, androidRipple } from "../theme";

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
  const flat = StyleSheet.flatten(props.style) || {};
  if (goldColor && (flat.borderColor === goldColor || flat.backgroundColor === goldColor)) {
    return true;
  }
  return false;
}

// Gentle 16-step feather alpha progression for edge fade without harsh vertical lines
const FADE_STEPS = [
  0.0, 0.02, 0.05, 0.09, 0.14, 0.2, 0.27, 0.35,
  0.44, 0.53, 0.62, 0.71, 0.79, 0.86, 0.92, 0.96,
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

/**
 * Unified ExpandablePillRow matching the web ExpandablePillRow component:
 * - Single-row horizontal scroll bar when collapsed (gap: 8, paddingVertical: 4)
 * - Automatically scrolls the active pill into the horizontal center of the viewport
 * - Subtle surface-matched edge dissolve when overflowing horizontally
 * - Centered 32x32 circular chevron toggle button on the right (expands into a wrapped grid)
 */
export function ExpandablePillRow({
  children,
  style,
  contentContainerStyle,
  threshold = 4,
  showExpandButton = true,
  fadeColor,
}: ExpandablePillRowProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const count = countPillChildren(children);

  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const layoutWidthRef = useRef(0);
  const pillLayoutsRef = useRef<Record<number, { x: number; width: number }>>({});

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > threshold);

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
    setCanScrollLeft(x > 3);
    setCanScrollRight(cw - lw - x > 3);
  }, [expanded]);

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

  // Flatten root pill children and find active index for auto-centering (matches web ExpandablePillRow)
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
        const flatPillStyle = StyleSheet.flatten(props.style) || {};
        const pv =
          typeof flatPillStyle.paddingVertical === "number"
            ? Math.max(7, Math.ceil(flatPillStyle.paddingVertical))
            : 7;
        const ph =
          typeof flatPillStyle.paddingHorizontal === "number"
            ? Math.max(13, Math.ceil(flatPillStyle.paddingHorizontal))
            : 14;
        const origOnLayout = props.onLayout;

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
            style: [
              props.style,
              {
                flexDirection: flatPillStyle.flexDirection || "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: pv,
                paddingHorizontal: ph,
                minHeight: Math.max(flatPillStyle.minHeight || 0, 34),
                borderRadius: isExpanded
                  ? 16
                  : flatPillStyle.borderRadius ?? 999,
              },
              isExpanded
                ? {
                    maxWidth: "100%",
                    flexShrink: 1,
                  }
                : null,
            ],
          },
          nextChildren
        );
      }

      // Normalize nested Text elements so descenders (g, y, p, q) never clip on Android
      const flatChildStyle = StyleSheet.flatten(props.style) || {};
      const isTextNode =
        child.type === Text ||
        typeof flatChildStyle.fontSize === "number" ||
        typeof flatChildStyle.fontFamily === "string" ||
        typeof flatChildStyle.fontWeight === "string";

      if (isTextNode) {
        const fontSize =
          typeof flatChildStyle.fontSize === "number"
            ? Math.ceil(flatChildStyle.fontSize)
            : 12;
        const lineHeight =
          typeof flatChildStyle.lineHeight === "number" &&
          flatChildStyle.lineHeight >= fontSize + 5
            ? flatChildStyle.lineHeight
            : Math.max(fontSize + 6, Math.ceil(fontSize * 1.45));

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
            ...(isExpanded && props.numberOfLines === 1
              ? { numberOfLines: undefined }
              : {}),
            style: [
              props.style,
              {
                fontSize,
                lineHeight,
                paddingBottom: 1,
                includeFontPadding: false,
                textAlignVertical: "center",
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
          style: isExpanded ? [props.style, { flexShrink: 1 }] : props.style,
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
  const canExpand =
    showExpandButton &&
    (count > threshold || canScrollRight || canScrollLeft || expanded);

  if (!canExpand) {
    return (
      <View style={[rowStyles.rowWrap, outerSpacing, style]}>
        <View style={rowStyles.viewportWrap}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onLayout={handleLayout}
            onContentSizeChange={handleContentSizeChange}
            onScroll={handleScroll}
            contentContainerStyle={[
              {
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 4,
                paddingRight: canScrollRight ? 12 : 2,
              },
              innerContentStyle,
            ]}
          >
            {renderedPills}
          </ScrollView>
          {canScrollLeft && (
            <EdgePocketShadow side="left" bgColor={resolvedFadeColor} />
          )}
          {canScrollRight && (
            <EdgePocketShadow side="right" bgColor={resolvedFadeColor} />
          )}
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
              gap: 8,
              paddingVertical: 4,
            },
          ]}
        >
          {renderedPills}
        </View>
      ) : (
        <View style={rowStyles.viewportWrap}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onLayout={handleLayout}
            onContentSizeChange={handleContentSizeChange}
            onScroll={handleScroll}
            style={{ flex: 1, minWidth: 0 }}
            contentContainerStyle={[
              {
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingVertical: 4,
                paddingRight: canScrollRight ? 12 : 2,
              },
              innerContentStyle,
            ]}
          >
            {renderedPills}
          </ScrollView>
          {canScrollLeft && (
            <EdgePocketShadow side="left" bgColor={resolvedFadeColor} />
          )}
          {canScrollRight && (
            <EdgePocketShadow side="right" bgColor={resolvedFadeColor} />
          )}
        </View>
      )}

      <Pressable
        android_ripple={androidRipple(theme.rippleColor, true)}
        onPress={() => setExpanded((prev) => !prev)}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={
          expanded ? "Collapse pills" : `Expand all ${count} pills vertically`
        }
        style={[
          rowStyles.actionBtn,
          {
            alignSelf: "center",
            borderColor: expanded ? theme.gold : theme.outlineVariant,
            backgroundColor: expanded
              ? `${theme.gold}26`
              : theme.surfaceContainerHigh,
          },
        ]}
      >
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={15}
          color={theme.gold}
          style={{
            includeFontPadding: false,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
      </Pressable>
    </View>
  );
}

const rowStyles = StyleSheet.create({
  rowWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minWidth: 0,
    maxWidth: "100%",
  },
  viewportWrap: {
    flex: 1,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
  },
  edgeShadowContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 16,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
});

export default ExpandablePillRow;
