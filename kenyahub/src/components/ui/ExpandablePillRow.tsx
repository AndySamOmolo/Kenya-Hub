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
        className={`w-full max-w-full flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-full grid grid-cols-[minmax(0,1fr)_auto] ${
        expanded ? "items-start" : "items-center"
      } gap-1.5 ${className}`}
    >
      <div
        className={
          expanded
            ? "min-w-0 w-full flex flex-wrap items-center gap-1.5 py-0.5"
            : "min-w-0 w-full flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5"
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
        className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border transition-all cursor-pointer shadow-sm ${
          expanded
            ? "border-gold bg-gold/20 text-gold mt-0.5"
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
