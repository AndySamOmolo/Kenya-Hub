"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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

function enhanceCollapsedChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode };
      return <>{enhanceCollapsedChildren(fragProps.children)}</>;
    }
    const props = child.props as {
      className?: string;
      style?: React.CSSProperties;
    };
    const rawClass = props.className || "";
    return React.cloneElement(
      child as React.ReactElement<{
        className?: string;
        style?: React.CSSProperties;
      }>,
      {
        className: `${rawClass} pill-interactive-item min-h-6`.trim(),
      }
    );
  });
}

function prepareExpandedChildren(
  children: React.ReactNode,
  startIdx = { current: 0 }
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode };
      return <>{prepareExpandedChildren(fragProps.children, startIdx)}</>;
    }
    const idx = startIdx.current++;
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
        className: `${cleanedClass} pill-interactive-item min-h-6 max-w-full min-w-0 break-words text-center inline-flex items-center justify-center`.trim(),
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
          animationDelay: `${Math.min(idx * 18, 220)}ms`,
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
    return "linear-gradient(to right, transparent 0px, rgba(0,0,0,0.4) 8px, black 22px, black calc(100% - 22px), rgba(0,0,0,0.4) calc(100% - 8px), transparent 100%)";
  }
  if (left) {
    return "linear-gradient(to right, transparent 0px, rgba(0,0,0,0.4) 8px, black 22px, black 100%)";
  }
  if (right) {
    return "linear-gradient(to right, black 0px, black calc(100% - 22px), rgba(0,0,0,0.4) calc(100% - 8px), transparent 100%)";
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

  // Spring edge-bounce state (in px) when hitting left/right scroll boundaries
  const [bounceOffset, setBounceOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const bounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollLeftRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const touchStartXRef = useRef<number | null>(null);
  const pointerDragRef = useRef<{
    active: boolean;
    moved: boolean;
    startX: number;
    startScrollLeft: number;
  }>({ active: false, moved: false, startX: 0, startScrollLeft: 0 });
  const wasAtLeftRef = useRef(true);
  const wasAtRightRef = useRef(false);
  const didPeekMountRef = useRef(false);

  const triggerEdgeBounce = useCallback((direction: "left" | "right", intensity = 11) => {
    const clamped = Math.min(18, Math.max(6, intensity));
    const signed = direction === "left" ? clamped : -clamped;
    setBounceOffset(signed);
    if (bounceTimeoutRef.current) clearTimeout(bounceTimeoutRef.current);
    bounceTimeoutRef.current = setTimeout(() => {
      setBounceOffset(0);
    }, 240);
  }, []);

  const updateScrollShadows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el || expanded) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    const hasLeft = scrollLeft > 2;
    const hasRight = maxScroll - scrollLeft > 2;

    // Detect momentum impact against the left or right boundary
    const now = performance.now();
    const dt = Math.max(1, now - lastScrollTimeRef.current);
    const dx = scrollLeft - lastScrollLeftRef.current;
    const velocity = Math.abs(dx / dt);

    if (maxScroll > 8) {
      if (!hasLeft && !wasAtLeftRef.current && dx < 0) {
        triggerEdgeBounce("left", Math.round(7 + Math.min(11, velocity * 7)));
      } else if (!hasRight && !wasAtRightRef.current && dx > 0) {
        triggerEdgeBounce("right", Math.round(7 + Math.min(11, velocity * 7)));
      }
    }

    wasAtLeftRef.current = !hasLeft;
    wasAtRightRef.current = !hasRight;
    lastScrollLeftRef.current = scrollLeft;
    lastScrollTimeRef.current = now;

    setCanScrollLeft((prev) => (prev === hasLeft ? prev : hasLeft));
    setCanScrollRight((prev) => (prev === hasRight ? prev : hasRight));
  }, [expanded, triggerEdgeBounce]);

  useEffect(() => {
    return () => {
      if (bounceTimeoutRef.current) clearTimeout(bounceTimeoutRef.current);
    };
  }, []);

  // Gentle mount peek-bounce when overflowing so users immediately see the bar is scrollable
  useEffect(() => {
    if (didPeekMountRef.current || expanded) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 24 && el.scrollLeft <= 2) {
        didPeekMountRef.current = true;
        triggerEdgeBounce("right", 7);
      }
    }, 320);
    return () => clearTimeout(timer);
  }, [expanded, triggerEdgeBounce]);

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

  // Handle wheel overscroll at left/right boundaries for a tactile edge bounce
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (expanded) return;
      const el = scrollContainerRef.current;
      if (!el) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll <= 0) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0;
      if (delta < -2 && el.scrollLeft <= 1) {
        triggerEdgeBounce("left", 10);
      } else if (delta > 2 && el.scrollLeft >= maxScroll - 1) {
        triggerEdgeBounce("right", 10);
      }
    },
    [expanded, triggerEdgeBounce]
  );

  // Handle touch drag overscroll at left/right boundaries on mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (expanded || e.touches.length !== 1) return;
      touchStartXRef.current = e.touches[0].clientX;
    },
    [expanded]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (expanded || touchStartXRef.current === null || e.touches.length !== 1) return;
      const el = scrollContainerRef.current;
      if (!el) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll <= 0) return;

      const dx = e.touches[0].clientX - touchStartXRef.current;
      if (dx > 6 && el.scrollLeft <= 1) {
        const pull = Math.min(16, Math.round(dx * 0.25));
        setBounceOffset(pull);
      } else if (dx < -6 && el.scrollLeft >= maxScroll - 1) {
        const pull = Math.min(16, Math.round(Math.abs(dx) * 0.25));
        setBounceOffset(-pull);
      }
    },
    [expanded]
  );

  const handleTouchEnd = useCallback(() => {
    touchStartXRef.current = null;
    if (bounceOffset !== 0) {
      setBounceOffset(0);
    }
  }, [bounceOffset]);

  // Desktop mouse grab-to-scroll with rubber-band edge resistance
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (expanded || e.button !== 0) return;
      const el = scrollContainerRef.current;
      if (!el || el.scrollWidth <= el.clientWidth) return;
      pointerDragRef.current = {
        active: true,
        moved: false,
        startX: e.clientX,
        startScrollLeft: el.scrollLeft,
      };
    },
    [expanded]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const drag = pointerDragRef.current;
      if (!drag.active || expanded) return;
      const el = scrollContainerRef.current;
      if (!el) return;
      const dx = e.clientX - drag.startX;
      if (Math.abs(dx) > 4 && !drag.moved) {
        drag.moved = true;
        setIsDragging(true);
      }
      if (!drag.moved) return;

      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const rawTarget = drag.startScrollLeft - dx;
      if (rawTarget < 0) {
        el.scrollLeft = 0;
        setBounceOffset(Math.min(16, Math.round(Math.abs(rawTarget) * 0.28)));
      } else if (rawTarget > maxScroll) {
        el.scrollLeft = maxScroll;
        setBounceOffset(-Math.min(16, Math.round((rawTarget - maxScroll) * 0.28)));
      } else {
        el.scrollLeft = rawTarget;
        if (bounceOffset !== 0) setBounceOffset(0);
      }
    },
    [expanded, bounceOffset]
  );

  const handleMouseUpOrLeave = useCallback(() => {
    if (!pointerDragRef.current.active) return;
    pointerDragRef.current.active = false;
    setIsDragging(false);
    if (bounceOffset !== 0) {
      setBounceOffset(0);
    }
  }, [bounceOffset]);

  // Keyboard Left/Right/Home/End navigation across pills
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    const focusables = Array.from(
      el.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]")
    );
    if (focusables.length === 0) return;
    const idx = focusables.indexOf(document.activeElement as HTMLElement);
    if (idx === -1) return;

    e.preventDefault();
    let nextIdx = idx;
    if (e.key === "ArrowRight") {
      nextIdx = Math.min(focusables.length - 1, idx + 1);
      if (idx === focusables.length - 1) triggerEdgeBounce("right", 10);
    } else if (e.key === "ArrowLeft") {
      nextIdx = Math.max(0, idx - 1);
      if (idx === 0) triggerEdgeBounce("left", 10);
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = focusables.length - 1;
    }
    focusables[nextIdx]?.focus();
    focusables[nextIdx]?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [triggerEdgeBounce]);

  const scrollByStep = useCallback(
    (dir: "left" | "right") => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const step = Math.max(160, Math.round(el.clientWidth * 0.55));
      if (dir === "left") {
        if (el.scrollLeft <= 2) {
          triggerEdgeBounce("left", 12);
        } else {
          el.scrollBy({ left: -step, behavior: "smooth" });
        }
      } else {
        if (el.scrollLeft >= maxScroll - 2) {
          triggerEdgeBounce("right", 12);
        } else {
          el.scrollBy({ left: step, behavior: "smooth" });
        }
      }
    },
    [triggerEdgeBounce]
  );

  const maskImage = !expanded
    ? getScrollMaskImage(canScrollLeft, canScrollRight)
    : undefined;

  const showToggle = count > threshold || canScrollLeft || canScrollRight || expanded;

  const bounceTransformStyle: React.CSSProperties = !expanded
    ? {
        transform:
          bounceOffset !== 0
            ? `translate3d(${bounceOffset}px, 0, 0) scaleX(${
                1 + Math.min(0.02, Math.abs(bounceOffset) * 0.0012)
              })`
            : "translate3d(0px, 0, 0) scaleX(1)",
        transformOrigin: bounceOffset >= 0 ? "left center" : "right center",
        transition:
          bounceOffset !== 0
            ? "transform 120ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 360ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: isDragging ? "grabbing" : canScrollLeft || canScrollRight ? "grab" : undefined,
      }
    : {};

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
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onKeyDown={handleKeyDown}
          className="no-scrollbar expandable-pill-row px-1 scroll-pl-1"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            maxWidth: "100%",
            overflowX: "auto",
            scrollBehavior: isDragging ? "auto" : "smooth",
            overscrollBehaviorX: "contain",
            WebkitOverflowScrolling: "touch",
            position: "relative",
            paddingTop: "4px",
            paddingBottom: "4px",
            ...bounceTransformStyle,
            ...(maskImage
              ? {
                  WebkitMaskImage: maskImage,
                  maskImage,
                }
              : {}),
          }}
        >
          {enhanceCollapsedChildren(children)}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group/pillbar ${className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "6px",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {/* Subtle Desktop Left Scroll Nudge */}
      {!expanded && canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByStep("left")}
          aria-label="Scroll pills left"
          title="Scroll left"
          className="hidden sm:inline-flex h-8 w-8 rounded-full border border-border bg-bg-elevated/90 text-gold hover:border-gold hover:bg-gold/15 active:scale-90 items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      )}

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
        {/* Left/Right Edge Glow Pulse on Bounce */}
        {!expanded && bounceOffset > 0 && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1 bottom-1 w-2.5 rounded-r-full bg-gold/35 blur-[2px] z-10 transition-opacity"
          />
        )}
        {!expanded && bounceOffset < 0 && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1 bottom-1 w-2.5 rounded-l-full bg-gold/35 blur-[2px] z-10 transition-opacity"
          />
        )}

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollShadows}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onKeyDown={handleKeyDown}
          className={`no-scrollbar expandable-pill-row ${
            expanded ? "expandable-pill-row--expanded animate-fade-in-up" : "px-1 scroll-pl-1"
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
                  scrollBehavior: isDragging ? "auto" : "smooth",
                  overscrollBehaviorX: "contain",
                  WebkitOverflowScrolling: "touch",
                  position: "relative",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingRight: canScrollRight ? "12px" : "2px",
                  ...bounceTransformStyle,
                  ...(maskImage
                    ? {
                        WebkitMaskImage: maskImage,
                        maskImage,
                      }
                    : {}),
                }
          }
        >
          {expanded
            ? prepareExpandedChildren(children)
            : enhanceCollapsedChildren(children)}
        </div>
      </div>

      {/* Subtle Desktop Right Scroll Nudge */}
      {!expanded && canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByStep("right")}
          aria-label="Scroll pills right"
          title="Scroll right"
          className="hidden sm:inline-flex h-8 w-8 rounded-full border border-border bg-bg-elevated/90 text-gold hover:border-gold hover:bg-gold/15 active:scale-90 items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}

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
        className={`h-8 w-8 rounded-full inline-flex items-center justify-center border transition-all duration-200 active:scale-90 cursor-pointer shadow-xs ${
          expanded
            ? "border-gold bg-gold/20 text-gold shadow-[0_0_10px_rgba(200,150,30,0.2)]"
            : "border-border bg-bg-elevated text-gold hover:border-gold hover:bg-gold/10 hover:scale-105"
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ease-out m-auto ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
