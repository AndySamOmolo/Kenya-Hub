"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * Renders a single-row horizontal scrolling pill bar.
 * When there are more than `threshold` (default 5) pills, displays a dropdown icon button
 * pinned on the right that toggles displaying all pills vertically (wrapped).
 */
export default function ExpandablePillRow({
  children,
  className = "",
  threshold = 5,
}: ExpandablePillRowProps) {
  const [expanded, setExpanded] = useState(false);
  const count = countPillChildren(children);

  if (count <= threshold) {
    return (
      <div
        className={`no-scrollbar ${className}`}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: expanded ? "flex-start" : "center",
        gap: "8px",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="no-scrollbar"
        style={
          expanded
            ? {
                flex: "1 1 0%",
                minWidth: 0,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "6px",
                paddingTop: "2px",
                paddingBottom: "2px",
              }
            : {
                flex: "1 1 0%",
                minWidth: 0,
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                gap: "6px",
                overflowX: "auto",
                paddingTop: "2px",
                paddingBottom: "2px",
              }
        }
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={
          expanded ? "Collapse pills" : `Show all ${count} pills vertically`
        }
        title={expanded ? "Collapse to single row" : `Show all (${count})`}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "9999px",
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: expanded ? "2px" : "0px",
        }}
        className={`border transition-all cursor-pointer shadow-sm ${
          expanded
            ? "border-gold bg-gold/20 text-gold"
            : "border-gold/40 bg-bg-card text-gold hover:border-gold hover:bg-gold/10"
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
