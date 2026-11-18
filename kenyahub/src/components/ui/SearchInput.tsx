"use client";

import React, { useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export default function SearchInput({
  className = "",
  onClear,
  value,
  style,
  placeholder,
  ...props
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasClearButton = Boolean(value && onClear);
  const wrapperClass = className.includes("flex-1")
    ? "relative flex-1 min-w-0 w-full group/search"
    : "relative w-full min-w-0 group/search";

  // Strip .input-field / .input-field--with-search from className so global mobile padding (!important)
  // never overrides the search icon and clear ("X") button clearance.
  const sanitizedClassName = className
    .split(/\s+/)
    .filter(
      (token) =>
        Boolean(token) &&
        token !== "input-field" &&
        token !== "input-field--with-search"
    )
    .join(" ");

  // Allow pressing "/" anywhere on the page (when not typing in another field) to focus the primary search input
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const active = document.activeElement as HTMLElement | null;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.tagName === "SELECT" ||
          active.isContentEditable)
      ) {
        return;
      }
      if (inputRef.current && inputRef.current.offsetParent !== null) {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={wrapperClass}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gold group-focus-within/search:scale-110 transition-transform pointer-events-none shrink-0 z-10" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        {...props}
        className={`w-full min-w-0 h-11 sm:h-12 rounded-full bg-bg-elevated/75 border border-border text-sm text-text-primary placeholder:text-text-muted outline-none transition-all duration-200 hover:border-border-light focus:border-gold focus:bg-bg-card focus:ring-2 focus:ring-gold/20 search-input-compact ${sanitizedClassName}`.trim()}
        style={{
          paddingLeft: "2.75rem",
          paddingRight: hasClearButton ? "2.75rem" : "2.5rem",
          lineHeight: "1.45",
          ...style,
        }}
        autoComplete="off"
      />
      {!hasClearButton && (
        <kbd
          aria-hidden="true"
          className="hidden sm:inline-flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-border bg-bg-card/80 text-[0.65rem] font-mono text-text-muted pointer-events-none opacity-75 group-focus-within/search:opacity-0 transition-opacity"
        >
          /
        </kbd>
      )}
      {hasClearButton && (
        <button
          type="button"
          onClick={() => {
            onClear?.();
            inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 min-w-6 min-h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
          aria-label="Clear search"
        >
          <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
        </button>
      )}
    </div>
  );
}
