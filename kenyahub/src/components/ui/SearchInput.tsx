"use client";

import React from "react";
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
  const hasClearButton = Boolean(value && onClear);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none shrink-0 z-10" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full h-8.5 sm:h-9.5 rounded-xl bg-bg-surface border border-border text-[0.75rem] sm:text-xs text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-gold/70 focus:ring-2 focus:ring-gold/15 search-input-compact"
        style={{
          paddingLeft: "2rem", fontSize: "0.75rem",
          paddingRight: hasClearButton ? "2.25rem" : "0.875rem",
          ...style,
        }}
        autoComplete="off"
        {...props}
      />
      {hasClearButton && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Clear search"
        >
          <X className="w-3 h-3 text-text-muted shrink-0" />
        </button>
      )}
    </div>
  );
}
