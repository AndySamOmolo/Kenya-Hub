import React, { useState, useRef, useCallback } from "react";
import {
  View,
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

function prepareExpandedMobileChildren(
  children: React.ReactNode,
  isRootPill = true
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode };
      return <>{prepareExpandedMobileChildren(fragProps.children, isRootPill)}</>;
    }
    const props = child.props as {
      style?: StyleProp<any>;
      children?: React.ReactNode;
      numberOfLines?: number;
    };
    const nextChildren = props.children
      ? prepareExpandedMobileChildren(props.children, false)
      : props.children;

    if (isRootPill) {
      return React.cloneElement(
        child as React.ReactElement<any>,
        {
          style: [
            props.style,
            {
              maxWidth: "100%",
              flexShrink: 1,
            },
          ],
        },
        nextChildren
      );
    }

    return React.cloneElement(
      child as React.ReactElement<any>,
      {
        ...(props.numberOfLines === 1 ? { numberOfLines: undefined } : {}),
        style: [
          props.style,
          {
            flexShrink: 1,
          },
        ],
      },
      nextChildren
    );
  });
}

// 20-step smooth ease-in-out alpha progression for seamless sub-pixel surface dissolve
const FADE_STEPS = [
  0.01, 0.03, 0.06, 0.1, 0.15, 0.21, 0.28, 0.36, 0.45, 0.54,
  0.63, 0.72, 0.8, 0.86, 0.91, 0.95, 0.97, 0.99, 1.0, 1.0,
];

function EdgePocketShadow({
  side,
  isDark,
  bgColor,
  accentColor,
}: {
  side: "left" | "right";
  isDark: boolean;
  bgColor: string;
  accentColor: string;
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
      {/* Layer 1: Seamless 20-step surface dissolve matching the parent header/card surface */}
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

      {/* Layer 2: Subtle warm tonal pocket shading concentrated near the outer rim */}
      <View style={[rowStyles.gradientStripRow, StyleSheet.absoluteFillObject]}>
        {orderedSteps.map((alpha, idx) => {
          const rimCurve = alpha * alpha * alpha;
          return (
            <View
              key={`shade-${idx}`}
              style={{
                flex: 1,
                backgroundColor: isDark ? "#000000" : accentColor,
                opacity: isDark ? rimCurve * 0.38 : rimCurve * 0.1,
              }}
            />
          );
        })}
      </View>

      {/* Layer 3: Refined 1.5px warm gold-tinted pocket crease inset at the outer edge */}
      <View
        style={[
          rowStyles.pocketCrease,
          side === "left" ? { left: 0 } : { right: 0 },
          {
            backgroundColor: isDark
              ? "rgba(200, 150, 30, 0.34)"
              : "rgba(184, 134, 11, 0.26)",
          },
        ]}
      />
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
 * Renders a single-row horizontal scrolling pill bar on mobile with refined,
 * surface-matched left/right scroll-fade bars whenever pills overflow to either side.
 * When there are more than `threshold` (default 5) pills, renders a compact dropdown
 * icon button on the right that toggles displaying all pills in a wrapped grid.
 */
export function ExpandablePillRow({
  children,
  style,
  contentContainerStyle,
  threshold = 5,
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

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const x = scrollXRef.current;
    const cw = contentWidthRef.current;
    const lw = layoutWidthRef.current;
    if (lw <= 0 || cw <= 0) return;
    setCanScrollLeft(x > 4);
    setCanScrollRight(cw - lw - x > 4);
  }, []);

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

  const flatContent = StyleSheet.flatten(contentContainerStyle) || {};
  const {
    marginBottom,
    marginTop,
    marginVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    ...innerContentStyle
  } = flatContent;

  const outerSpacing: ViewStyle = {
    ...(marginBottom !== undefined ? { marginBottom } : {}),
    ...(marginTop !== undefined ? { marginTop } : {}),
    ...(marginVertical !== undefined ? { marginVertical } : {}),
    ...(paddingHorizontal !== undefined ? { paddingHorizontal } : {}),
    ...(paddingLeft !== undefined ? { paddingLeft } : {}),
    ...(paddingRight !== undefined ? { paddingRight } : {}),
  };

  const resolvedFadeColor = fadeColor || theme.surfaceContainerLow;
  const canExpand = showExpandButton && count > threshold;

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
                paddingVertical: 2,
                paddingRight: canScrollRight ? 16 : 2,
              },
              innerContentStyle,
            ]}
          >
            {children}
          </ScrollView>
          {canScrollLeft && (
            <EdgePocketShadow
              side="left"
              isDark={theme.isDark}
              bgColor={resolvedFadeColor}
              accentColor={theme.gold}
            />
          )}
          {canScrollRight && (
            <EdgePocketShadow
              side="right"
              isDark={theme.isDark}
              bgColor={resolvedFadeColor}
              accentColor={theme.gold}
            />
          )}
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        rowStyles.rowWrap,
        { alignItems: expanded ? "flex-start" : "center" },
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
              gap: innerContentStyle.gap ?? 8,
              paddingVertical: 2,
            },
          ]}
        >
          {prepareExpandedMobileChildren(children, true)}
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
                paddingVertical: 2,
                paddingRight: canScrollRight ? 16 : 2,
              },
              innerContentStyle,
            ]}
          >
            {children}
          </ScrollView>
          {canScrollLeft && (
            <EdgePocketShadow
              side="left"
              isDark={theme.isDark}
              bgColor={resolvedFadeColor}
              accentColor={theme.gold}
            />
          )}
          {canScrollRight && (
            <EdgePocketShadow
              side="right"
              isDark={theme.isDark}
              bgColor={resolvedFadeColor}
              accentColor={theme.gold}
            />
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
            marginTop: expanded ? 2 : 0,
            borderColor: expanded ? theme.gold : theme.outlineVariant,
            backgroundColor: expanded
              ? theme.primaryContainer
              : theme.surfaceContainerHigh,
          },
        ]}
      >
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={15}
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
  },
  viewportWrap: {
    flex: 1,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
  },
  edgeShadowContainer: {
    position: "absolute",
    top: 1,
    bottom: 1,
    width: 22,
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
  pocketCrease: {
    position: "absolute",
    top: 4,
    bottom: 4,
    width: 1.5,
    borderRadius: 1,
  },
  actionBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
});

export default ExpandablePillRow;
