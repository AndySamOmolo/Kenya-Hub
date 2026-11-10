"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export default function SearchInput({ className = "", onClear, value, style, ...props }: SearchInputProps) {
  // Extract layout classes for the wrapper, filter out input-specific styles
  const wrapperClasses = className
    .split(" ")
    .filter(
      (c) =>
        Boolean(c) &&
        ![
          "input-field",
          "input-field--with-search",
          "select-field",
          "text-sm",
          "text-xs",
          "text-base",
          "text-lg",
          "text-xl",
          "w-full",
          "pl-9",
          "pl-10",
          "!pl-10",
          "pl-10!",
          "pr-8",
          "pr-9",
          "pr-10",
          "!pr-10",
          "pr-10!",
          "bg-transparent",
          "outline-none",
        ].includes(c)
    )
    .join(" ");

  const isTextXs = className.includes("text-xs");
  const hasClearButton = Boolean(value && onClear);

  return (
    <div className={`relative w-full ${wrapperClasses}`.trim()}>
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none shrink-0 z-10" />
      <input
        type="text"
        value={value}
        className={`input-field input-field--with-search w-full pl-10! pr-9! ${
          isTextXs ? "text-xs! py-1.5!" : "text-xs sm:text-sm py-2! sm:py-2.5!"
        }`}
        style={{
          paddingLeft: "2.5rem",
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
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Clear search"
        >
          <X className="w-3 h-3 text-text-muted shrink-0" />
        </button>
      )}
    </div>
  );
}
