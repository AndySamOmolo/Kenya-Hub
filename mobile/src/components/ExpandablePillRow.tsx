import React, { useState, useRef, useCallback } from "react";
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

function normalizePillChildren(
  children: React.ReactNode,
  expanded: boolean,
  isRootPill = true
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode };
      return <>{normalizePillChildren(fragProps.children, expanded, isRootPill)}</>;
    }
    const props = child.props as {
      style?: StyleProp<any>;
      children?: React.ReactNode;
      numberOfLines?: number;
    };
    const nextChildren = props.children
      ? normalizePillChildren(props.children, expanded, false)
      : props.children;

    if (isRootPill) {
      const flatPillStyle = StyleSheet.flatten(props.style) || {};
      const pv = typeof flatPillStyle.paddingVertical === "number"
        ? Math.max(7, Math.ceil(flatPillStyle.paddingVertical))
        : 7;
      return React.cloneElement(
        child as React.ReactElement<any>,
        {
          style: [
            props.style,
            {
              flexDirection: flatPillStyle.flexDirection || "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: pv,
              minHeight: Math.max(flatPillStyle.minHeight || 0, 34),
            },
            expanded
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

    // Normalize nested Text elements so descenders (g, y, p, q, ,) never clip at the bottom on Android
    const flatChildStyle = StyleSheet.flatten(props.style) || {};
    const isTextNode =
      child.type === Text ||
      typeof flatChildStyle.fontSize === "number" ||
      typeof flatChildStyle.fontFamily === "string" ||
      typeof flatChildStyle.fontWeight === "string";

    if (isTextNode) {
      const fontSize = typeof flatChildStyle.fontSize === "number" ? Math.ceil(flatChildStyle.fontSize) : 12;
      const lineHeight =
        typeof flatChildStyle.lineHeight === "number" && flatChildStyle.lineHeight >= fontSize + 5
          ? flatChildStyle.lineHeight
          : Math.max(fontSize + 6, Math.ceil(fontSize * 1.45));

      return React.cloneElement(
        child as React.ReactElement<any>,
        {
          ...(expanded && props.numberOfLines === 1 ? { numberOfLines: undefined } : {}),
          style: [
            props.style,
            {
              fontSize,
              lineHeight,
              paddingBottom: 1,
              includeFontPadding: false,
              textAlignVertical: "center",
            },
            expanded ? { flexShrink: 1 } : null,
          ],
        },
        nextChildren
      );
    }

    return React.cloneElement(
      child as React.ReactElement<any>,
      {
        ...(expanded && props.numberOfLines === 1 ? { numberOfLines: undefined } : {}),
        style: expanded ? [props.style, { flexShrink: 1 }] : props.style,
      },
      nextChildren
    );
  });
}

// Smooth 16-step alpha progression for surface dissolve without harsh vertical border lines
const FADE_STEPS = [
  0.0, 0.03, 0.07, 0.12, 0.19, 0.27, 0.36, 0.46,
  0.56, 0.66, 0.75, 0.83, 0.9, 0.95, 0.98, 1.0,
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
 * Renders a single-row horizontal scrolling pill bar on mobile with smooth,
 * surface-matched left/right scroll-fade dissolves whenever pills overflow.
 * When pills overflow or exceed `threshold` (default 4), renders a centered
 * circular chevron toggle button on the right that expands all pills into a wrapped grid.
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

  const resolvedFadeColor = fadeColor || theme.surfaceContainerLow;
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
                paddingVertical: 3,
                paddingRight: canScrollRight ? 16 : 2,
              },
              innerContentStyle,
            ]}
          >
            {normalizePillChildren(children, false, true)}
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
              gap: innerContentStyle.gap ?? 8,
              paddingVertical: 3,
            },
          ]}
        >
          {normalizePillChildren(children, true, true)}
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
                paddingVertical: 3,
                paddingRight: canScrollRight ? 18 : 2,
              },
              innerContentStyle,
            ]}
          >
            {normalizePillChildren(children, false, true)}
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
            alignSelf: expanded ? "flex-start" : "center",
            marginTop: expanded ? 3 : 0,
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
    width: 24,
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
