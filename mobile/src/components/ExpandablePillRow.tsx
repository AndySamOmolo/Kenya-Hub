import React, { useState } from "react";
import {
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
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
 * Renders a single-row horizontal scrolling pill bar on mobile.
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style}
        contentContainerStyle={[
          {
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingVertical: 2,
          },
          contentContainerStyle,
        ]}
      >
        {children}
      </ScrollView>
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
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

export default ExpandablePillRow;
