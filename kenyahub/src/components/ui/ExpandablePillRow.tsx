"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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

function prepareExpandedChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode };
      return <>{prepareExpandedChildren(fragProps.children)}</>;
    }
    const props = child.props as {
      className?: string;
      style?: React.CSSProperties;
    };
    const rawClass = props.className || "";
    const cleanedClass = rawClass
      .replace(/\bwhitespace-nowrap\b/g, "whitespace-normal")
      .replace(/\bshrink-0\b/g, "shrink")
      .replace(/\bflex-shrink-0\b/g, "shrink")
      .replace(/\brounded-full\b/g, "rounded-2xl");

    return React.cloneElement(
      child as React.ReactElement<{
        className?: string;
        style?: React.CSSProperties;
      }>,
      {
        className: `${cleanedClass} max-w-full min-w-0 break-words text-left`.trim(),
        style: {
          ...(props.style || {}),
          whiteSpace: "normal",
          flexShrink: 1,
          maxWidth: "100%",
          minWidth: 0,
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          height: "auto",
          textAlign: "left",
        },
      }
    );
  });
}

export interface ExpandablePillRowProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * Renders a single-row horizontal scrolling pill bar with subtle left/right
 * inset scroll shadows when pills overflow into the edges.
 * When there are more than `threshold` (default 5) pills, displays a dropdown icon button
 * pinned on the right that toggles displaying all pills vertically (wrapped) without clipping.
 */
export default function ExpandablePillRow({
  children,
  className = "",
  threshold = 5,
}: ExpandablePillRowProps) {
  const [expanded, setExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const count = countPillChildren(children);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > 3);

  const updateScrollShadows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el || expanded) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollWidth - clientWidth - scrollLeft > 2);
  }, [expanded]);

  useEffect(() => {
    updateScrollShadows();
    const el = scrollContainerRef.current;
    if (!el || expanded) return;

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateScrollShadows());
      ro.observe(el);
      Array.from(el.children).forEach((child) => ro?.observe(child));
    }
    window.addEventListener("resize", updateScrollShadows, { passive: true });
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", updateScrollShadows);
    };
  }, [children, expanded, updateScrollShadows]);

  useEffect(() => {
    if (expanded) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const activeEl = container.querySelector<HTMLElement>(
      '[data-active="true"], [aria-pressed="true"], [aria-selected="true"]'
    );
    if (!activeEl) return;
    const targetLeft =
      activeEl.offsetLeft -
      container.clientWidth / 2 +
      activeEl.clientWidth / 2;
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
    const timer = setTimeout(updateScrollShadows, 260);
    return () => clearTimeout(timer);
  }, [children, expanded, updateScrollShadows]);

  if (count <= threshold) {
    return (
      <div
        className={`expandable-pill-scroll-viewport ${className}`}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          borderRadius: "9999px",
        }}
      >
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollShadows}
          className="no-scrollbar expandable-pill-row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
            width: "100%",
            maxWidth: "100%",
            overflowX: "auto",
            position: "relative",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          {children}
        </div>
        {canScrollLeft && (
          <div
            aria-hidden="true"
            className="expandable-pill-shadow expandable-pill-shadow--left"
          />
        )}
        {canScrollRight && (
          <div
            aria-hidden="true"
            className="expandable-pill-shadow expandable-pill-shadow--right"
          />
        )}
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
        gap: "6px",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="expandable-pill-scroll-viewport"
        style={{
          position: "relative",
          flex: "1 1 0%",
          minWidth: 0,
          maxWidth: "100%",
          overflow: "hidden",
          borderRadius: expanded ? "16px" : "9999px",
        }}
      >
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollShadows}
          className={`no-scrollbar expandable-pill-row ${
            expanded ? "expandable-pill-row--expanded" : ""
          }`}
          style={
            expanded
              ? {
                  width: "100%",
                  minWidth: 0,
                  maxWidth: "100%",
                  overflow: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "6px",
                  position: "relative",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }
              : {
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  gap: "6px",
                  overflowX: "auto",
                  position: "relative",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }
          }
        >
          {expanded ? prepareExpandedChildren(children) : children}
        </div>
        {!expanded && canScrollLeft && (
          <div
            aria-hidden="true"
            className="expandable-pill-shadow expandable-pill-shadow--left"
          />
        )}
        {!expanded && canScrollRight && (
          <div
            aria-hidden="true"
            className="expandable-pill-shadow expandable-pill-shadow--right"
          />
        )}
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
          width: "26px",
          height: "26px",
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
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
