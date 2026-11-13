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

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  threshold?: number;
}

/**
 * Renders a single-row horizontal scrolling pill bar on mobile without any left-side
 * fade or shadow, and with a clear, high-contrast right-scroll chevron indicator
 * whenever additional pills overflow to the right.
 * When there are more than `threshold` (default 5) pills, also renders a dropdown icon
 * button on the right that toggles displaying all pills vertically (wrapped).
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

  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const layoutWidthRef = useRef(0);

  const [canScrollRight, setCanScrollRight] = useState(count > 3);

  const updateScrollState = useCallback(() => {
    const x = scrollXRef.current;
    const cw = contentWidthRef.current;
    const lw = layoutWidthRef.current;
    if (lw <= 0 || cw <= 0) return;
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

  const handleScrollRightPress = useCallback(() => {
    const step = Math.max(140, layoutWidthRef.current * 0.65);
    const maxOffset = Math.max(
      0,
      contentWidthRef.current - layoutWidthRef.current
    );
    const targetX = Math.min(scrollXRef.current + step, maxOffset);
    scrollViewRef.current?.scrollTo({ x: targetX, animated: true });
  }, []);

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
          rowStyles.rowWrap,
          outerSpacing,
          style,
        ]}
      >
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
              },
              innerContentStyle,
            ]}
          >
            {children}
          </ScrollView>
        </View>
        {canScrollRight && (
          <Pressable
            android_ripple={androidRipple(theme.rippleColor, true)}
            onPress={handleScrollRightPress}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Scroll right to see more options"
            style={[
              rowStyles.actionBtn,
              {
                borderColor: theme.gold,
                backgroundColor: theme.surfaceContainerHigh,
              },
            ]}
          >
            <Ionicons
              name="chevron-forward"
              size={15}
              color={theme.gold}
            />
          </Pressable>
        )}
      </View>
    );
  }

  return (
    <View
      style={[
        rowStyles.rowWrap,
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
              },
              innerContentStyle,
            ]}
          >
            {children}
          </ScrollView>
        </View>
      )}

      {!expanded && canScrollRight && (
        <Pressable
          android_ripple={androidRipple(theme.rippleColor, true)}
          onPress={handleScrollRightPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Scroll right to see more pills"
          style={[
            rowStyles.actionBtn,
            {
              borderColor: theme.gold,
              backgroundColor: theme.surfaceContainerHigh,
            },
          ]}
        >
          <Ionicons
            name="chevron-forward"
            size={15}
            color={theme.gold}
          />
        </Pressable>
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
    alignItems: "flex-start",
    gap: 6,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewportWrap: {
    flex: 1,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
  },
  actionBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    flexShrink: 0,
  },
});

export default ExpandablePillRow;
