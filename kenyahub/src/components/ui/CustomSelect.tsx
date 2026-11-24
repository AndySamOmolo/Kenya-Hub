"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, Check, Search, X } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  value: string | number;
  onChange?: (e: { target: { value: string } }) => void;
  onValueChange?: (value: string) => void;
  options?: SelectOption[];
  children?: React.ReactNode;
  className?: string;
}

const MAX_VISIBLE = 60;

const IGNORED_WRAPPER_CLASSES = new Set([
  "input-field",
  "select-field",
  "select-field--icon-left",
  "has-leading-icon",
  "text-sm",
  "text-xs",
  "text-base",
  "text-lg",
  "bg-transparent",
  "outline-none",
  "cursor-pointer",
  "py-1.5",
  "px-3",
]);

function CustomSelect({
  id,
  value,
  onChange,
  onValueChange,
  options,
  children,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const filterInputRef = useRef<HTMLInputElement>(null);

  // Extract options from children (<option>) if `options` prop not provided
  const parsedOptions: SelectOption[] = useMemo(() => {
    if (options && options.length > 0) return options;
    const list: SelectOption[] = [];

    const extractFromNodes = (nodes: React.ReactNode) => {
      React.Children.forEach(nodes, (child) => {
        if (!React.isValidElement(child)) return;
        if (child.type === React.Fragment) {
          const fragProps = child.props as { children?: React.ReactNode };
          extractFromNodes(fragProps.children);
        } else if (child.type === "option") {
          const props = child.props as { value?: string | number; children?: React.ReactNode };
          const val = props.value !== undefined ? String(props.value) : String(props.children ?? "");
          const label =
            typeof props.children === "string" || typeof props.children === "number"
              ? String(props.children)
              : Array.isArray(props.children)
              ? props.children
                  .map((c) => (typeof c === "string" || typeof c === "number" ? String(c) : ""))
                  .join("")
              : val;
          list.push({ value: val, label });
        }
      });
    };

    extractFromNodes(children);
    return list;
  }, [options, children]);

  const selectedOption = parsedOptions.find((o) => o.value === String(value)) || parsedOptions[0];
  const showTypeahead = parsedOptions.length > 8;

  const { visibleOptions, totalMatches, isTruncated } = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    const matched = q
      ? parsedOptions.filter((o) => o.label.toLowerCase().includes(q))
      : parsedOptions;
    if (!q && matched.length > MAX_VISIBLE) {
      return {
        visibleOptions: matched.slice(0, MAX_VISIBLE),
        totalMatches: matched.length,
        isTruncated: true,
      };
    }
    return {
      visibleOptions: matched,
      totalMatches: matched.length,
      isTruncated: false,
    };
  }, [parsedOptions, filterText]);

  useEffect(() => {
    let focusTimer: ReturnType<typeof setTimeout> | null = null;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFilterText("");
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      if (showTypeahead && typeof window !== "undefined" && window.matchMedia?.("(pointer: fine)").matches) {
        focusTimer = setTimeout(() => filterInputRef.current?.focus(), 30);
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (focusTimer !== null) clearTimeout(focusTimer);
    };
  }, [isOpen, showTypeahead]);

  const handleSelect = (val: string) => {
    if (onValueChange) {
      onValueChange(val);
    }
    if (onChange) {
      onChange({ target: { value: val } });
    }
    setIsOpen(false);
    setFilterText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        const currentIdx = parsedOptions.findIndex((o) => o.value === String(value));
        setHighlightedIndex(Math.max(0, Math.min(currentIdx, MAX_VISIBLE - 1)));
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setFilterText("");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.min(visibleOptions.length - 1, prev + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = visibleOptions[highlightedIndex];
      if (chosen) handleSelect(chosen.value);
    }
  };

  const { wrapperClasses, paddingAndFontClasses, hasLeadingIcon } = useMemo(() => {
    const filteredTokens = className
      .split(" ")
      .filter((c) => Boolean(c) && !IGNORED_WRAPPER_CLASSES.has(c));

    const hasWidthToken = filteredTokens.some(
      (c) => c.startsWith("w-") || c.includes(":w-") || c.startsWith("min-w-") || c.startsWith("flex-")
    );
    if (!hasWidthToken) {
      filteredTokens.push("w-full");
    }

    const isTextXs = className.includes("text-xs");
    const isCompact = className.includes("py-1.5") || isTextXs;
    const leadingIcon =
      className.includes("has-leading-icon") || className.includes("select-field--icon-left");

    const padFont = isTextXs
      ? leadingIcon
        ? "select-field--icon-left text-xs py-1.5! pl-9! pr-2.5!"
        : "text-xs py-1.5! px-2.5!"
      : isCompact
      ? leadingIcon
        ? "select-field--icon-left py-1.5! pl-9! pr-3! text-xs sm:text-sm"
        : "py-1.5! px-3! text-xs sm:text-sm"
      : leadingIcon
      ? "select-field--icon-left py-2! sm:py-2.5! pl-9! pr-3! text-sm"
      : "py-2! sm:py-2.5! px-3! text-sm";

    return {
      wrapperClasses: filteredTokens.join(" "),
      paddingAndFontClasses: padFont,
      hasLeadingIcon: leadingIcon,
    };
  }, [className]);

  return (
    <div
      className={`relative ${wrapperClasses}`.trim()}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          if (!next) setFilterText("");
          if (next) {
            const currentIdx = parsedOptions.findIndex((o) => o.value === String(value));
            setHighlightedIndex(Math.max(0, Math.min(currentIdx, MAX_VISIBLE - 1)));
          }
        }}
        className={`input-field custom-select-trigger flex items-center justify-between gap-1.5 text-left cursor-pointer transition-colors w-full ${paddingAndFontClasses} ${
          isOpen ? "border-gold ring-1 ring-gold" : "hover:border-gold/50"
        }`}
        style={hasLeadingIcon ? { paddingLeft: "2rem" } : undefined}
      >
        <span className="text-text-primary truncate min-w-0 flex-1">
          {selectedOption?.label || "Select..."}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted transition-transform shrink-0 ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 sm:right-auto z-[80] min-w-full sm:w-max max-w-[calc(100vw-1.75rem)] sm:max-w-[85vw] mt-1 bg-bg-card border border-border rounded-xl shadow-2xl shadow-black/40 max-h-72 flex flex-col overflow-hidden"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          {showTypeahead && (
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-bg-elevated/60 shrink-0">
              <Search className="w-3.5 h-3.5 text-text-muted shrink-0" />
              <input
                ref={filterInputRef}
                type="text"
                value={filterText}
                onChange={(e) => {
                  setFilterText(e.target.value);
                  setHighlightedIndex(0);
                }}
                placeholder="Filter options..."
                className="flex-1 min-w-0 bg-transparent text-xs text-text-primary placeholder:text-text-muted outline-none"
              />
              {filterText && (
                <button
                  type="button"
                  onClick={() => {
                    setFilterText("");
                    setHighlightedIndex(0);
                    filterInputRef.current?.focus();
                  }}
                  className="shrink-0 w-6 h-6 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer"
                  aria-label="Clear filter"
                >
                  <X className="w-3 h-3 shrink-0" />
                </button>
              )}
            </div>
          )}
          <ul className="py-1 overflow-y-auto flex-1">
            {visibleOptions.length === 0 ? (
              <li className="px-3.5 py-2.5 text-xs text-text-muted">No matching options</li>
            ) : (
              visibleOptions.map((option, idx) => {
                const isSelected = option.value === String(value);
                const isHighlighted = idx === highlightedIndex;
                return (
                  <li key={`${option.value}-${idx}`} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isSelected
                          ? "text-gold bg-gold/10 font-semibold"
                          : isHighlighted
                          ? "bg-bg-elevated text-text-primary"
                          : "text-text-primary hover:bg-bg-elevated"
                      }`}
                    >
                      <span className="break-words min-w-0 flex-1">{option.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-gold flex-shrink-0" />}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
          {isTruncated && (
            <div className="px-3.5 py-1.5 text-[11px] text-text-muted border-t border-border/60 bg-bg-elevated/40 shrink-0">
              Showing {MAX_VISIBLE} of {totalMatches} — type to filter...
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(CustomSelect);
