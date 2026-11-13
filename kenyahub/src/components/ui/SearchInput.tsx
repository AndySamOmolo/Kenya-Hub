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
  const wrapperClass = className.includes("flex-1") ? "relative flex-1 min-w-0 w-full" : "relative w-full";

  return (
    <div className={wrapperClass}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gold pointer-events-none shrink-0 z-10" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full h-11.5 sm:h-12 rounded-full bg-bg-elevated/75 border border-border text-sm text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-gold focus:bg-bg-card focus:ring-2 focus:ring-gold/15 search-input-compact"
        style={{
          paddingLeft: "2.75rem",
          paddingRight: hasClearButton ? "2.5rem" : "1.125rem",
          lineHeight: "1.45",
          ...style,
        }}
        autoComplete="off"
        {...props}
      />
      {hasClearButton && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5.5 h-5.5 rounded-full bg-bg-card border border-border hover:border-gold/50 flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Clear search"
        >
          <X className="w-3.5 h-3.5 text-text-muted shrink-0" />
        </button>
      )}
    </div>
  );
}
