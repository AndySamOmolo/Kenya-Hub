"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export default function SearchInput({ className = "", onClear, value, ...props }: SearchInputProps) {
  // Extract layout classes for the wrapper, filter out input-specific styles
  const wrapperClasses = className
    .split(" ")
    .filter(
      (c) =>
        ![
          "input-field",
          "select-field",
          "text-sm",
          "text-xs",
          "text-base",
          "text-lg",
          "text-xl",
          "w-full",
          "bg-transparent",
          "outline-none",
        ].includes(c)
    )
    .join(" ");

  const isTextXs = className.includes("text-xs");

  return (
    <div className={`relative w-full ${wrapperClasses}`.trim()}>
      <Search className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      <input
        type="text"
        value={value}
        className={`input-field w-full !pl-9 sm:!pl-10 !pr-8 sm:!pr-9 ${
          isTextXs ? "!text-xs !py-1.5" : "text-xs sm:text-sm !py-2 sm:!py-2.5"
        }`}
        autoComplete="off"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors"
          aria-label="Clear search"
        >
          <X className="w-3 h-3 text-text-muted" />
        </button>
      )}
    </div>
  );
}
