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

const SHADOW_STEPS_DARK = [
  "rgba(8, 6, 4, 0.56)",
  "rgba(8, 6, 4, 0.42)",
  "rgba(8, 6, 4, 0.29)",
  "rgba(8, 6, 4, 0.18)",
  "rgba(8, 6, 4, 0.10)",
  "rgba(8, 6, 4, 0.04)",
];

const SHADOW_STEPS_LIGHT = [
  "rgba(26, 17, 8, 0.18)",
  "rgba(26, 17, 8, 0.13)",
  "rgba(26, 17, 8, 0.09)",
  "rgba(26, 17, 8, 0.055)",
  "rgba(26, 17, 8, 0.03)",
  "rgba(26, 17, 8, 0.01)",
];

function EdgeScrollShadow({
  side,
  isDark,
}: {
  side: "left" | "right";
  isDark: boolean;
}) {
  const steps = isDark ? SHADOW_STEPS_DARK : SHADOW_STEPS_LIGHT;
  const ordered = side === "left" ? steps : [...steps].reverse();
  const creaseColor = isDark
    ? "rgba(0, 0, 0, 0.65)"
    : "rgba(26, 17, 8, 0.22)";

  return (
    <View
      pointerEvents="none"
      style={[
        shadowStyles.edgeWrap,
        side === "left" ? shadowStyles.leftEdge : shadowStyles.rightEdge,
      ]}
    >
      {side === "left" && (
        <View
          style={[shadowStyles.creaseLine, { backgroundColor: creaseColor }]}
        />
      )}
      {ordered.map((color, idx) => (
        <View
          key={idx}
          style={[shadowStyles.stepStrip, { backgroundColor: color }]}
        />
      ))}
      {side === "right" && (
        <View
          style={[shadowStyles.creaseLine, { backgroundColor: creaseColor }]}
        />
      )}
    </View>
  );
}

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  threshold?: number;
}

/**
 * Renders a single-row horizontal scrolling pill bar on mobile with subtle
 * left/right inset edge shadows indicating scrollable overflow.
 * When there are more than `threshold` (default 5) pills, renders a dropdown icon button
 * on the right that toggles displaying all pills vertically (wrapped) without edge clipping.
 */
export function ExpandablePillRow({
  children,
  style,
  contentContainerStyle,
  threshold = 5,
}: ExpandablePillRowProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const count = countPillChildren(children);

  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const layoutWidthRef = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > 3);

  const updateShadows = useCallback(() => {
    const x = scrollXRef.current;
    const cw = contentWidthRef.current;
    const lw = layoutWidthRef.current;
    if (lw <= 0 || cw <= 0) return;
    setCanScrollLeft(x > 2);
    setCanScrollRight(cw - lw - x > 2);
  }, []);

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      layoutWidthRef.current = e.nativeEvent.layout.width;
      updateShadows();
    },
    [updateShadows]
  );

  const handleContentSizeChange = useCallback(
    (w: number) => {
      contentWidthRef.current = w;
      updateShadows();
    },
    [updateShadows]
  );

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollXRef.current = e.nativeEvent.contentOffset.x;
      updateShadows();
    },
    [updateShadows]
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

  if (count <= threshold) {
    return (
      <View
        style={[
          shadowStyles.viewportWrap,
          outerSpacing,
          style,
        ]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          fadingEdgeLength={28}
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
            },
            innerContentStyle,
          ]}
        >
          {children}
        </ScrollView>
        {canScrollLeft && <EdgeScrollShadow side="left" isDark={theme.isDark} />}
        {canScrollRight && <EdgeScrollShadow side="right" isDark={theme.isDark} />}
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
        },
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
        <View style={[shadowStyles.viewportWrap, { flex: 1, minWidth: 0 }]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            fadingEdgeLength={28}
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
              },
              innerContentStyle,
            ]}
          >
            {children}
          </ScrollView>
          {canScrollLeft && (
            <EdgeScrollShadow side="left" isDark={theme.isDark} />
          )}
          {canScrollRight && (
            <EdgeScrollShadow side="right" isDark={theme.isDark} />
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
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: expanded ? theme.gold : theme.outlineVariant,
          backgroundColor: expanded
            ? theme.primaryContainer
            : theme.surfaceContainerHigh,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
          flexShrink: 0,
        }}
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

const shadowStyles = StyleSheet.create({
  viewportWrap: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 999,
  },
  edgeWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    flexDirection: "row",
    zIndex: 10,
  },
  leftEdge: {
    left: 0,
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    overflow: "hidden",
  },
  rightEdge: {
    right: 0,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    overflow: "hidden",
  },
  creaseLine: {
    width: 1.5,
    height: "100%",
  },
  stepStrip: {
    width: 3,
    height: "100%",
  },
});

export default ExpandablePillRow;
