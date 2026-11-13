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
        className: `${cleanedClass} max-w-full min-w-0 break-words text-center inline-flex items-center justify-center`.trim(),
        style: {
          ...(props.style || {}),
          whiteSpace: "normal",
          flexShrink: 1,
          maxWidth: "100%",
          minWidth: 0,
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          height: "auto",
          lineHeight: "1.35",
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

function getScrollMaskImage(left: boolean, right: boolean): string | undefined {
  if (left && right) {
    return "linear-gradient(to right, transparent 0px, rgba(0,0,0,0.35) 8px, black 24px, black calc(100% - 24px), rgba(0,0,0,0.35) calc(100% - 8px), transparent 100%)";
  }
  if (left) {
    return "linear-gradient(to right, transparent 0px, rgba(0,0,0,0.35) 8px, black 24px, black 100%)";
  }
  if (right) {
    return "linear-gradient(to right, black 0px, black calc(100% - 24px), rgba(0,0,0,0.35) calc(100% - 8px), transparent 100%)";
  }
  return undefined;
}

export default function ExpandablePillRow({
  children,
  className = "",
  threshold = 4,
}: ExpandablePillRowProps) {
  const [expanded, setExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const count = countPillChildren(children);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(count > threshold);

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

  const maskImage = !expanded
    ? getScrollMaskImage(canScrollLeft, canScrollRight)
    : undefined;

  const showToggle = count > threshold || canScrollLeft || canScrollRight || expanded;

  if (!showToggle) {
    return (
      <div
        className={`expandable-pill-scroll-viewport ${className}`}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
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
            gap: "8px",
            width: "100%",
            maxWidth: "100%",
            overflowX: "auto",
            position: "relative",
            paddingTop: "4px",
            paddingBottom: "4px",
            ...(maskImage
              ? {
                  WebkitMaskImage: maskImage,
                  maskImage,
                }
              : {}),
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
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
                  gap: "8px",
                  position: "relative",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }
              : {
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  gap: "8px",
                  overflowX: "auto",
                  position: "relative",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingRight: canScrollRight ? "12px" : "2px",
                  ...(maskImage
                    ? {
                        WebkitMaskImage: maskImage,
                        maskImage,
                      }
                    : {}),
                }
          }
        >
          {expanded ? prepareExpandedChildren(children) : children}
        </div>
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
          width: "32px",
          height: "32px",
          borderRadius: "9999px",
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: expanded ? "flex-start" : "center",
          marginTop: expanded ? "4px" : "0px",
        }}
        className={`border transition-all cursor-pointer shadow-xs ${
          expanded
            ? "border-gold bg-gold/20 text-gold"
            : "border-border bg-bg-elevated text-gold hover:border-gold hover:bg-gold/10"
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 m-auto ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
