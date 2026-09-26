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
    .filter((c) => !["input-field", "text-sm", "text-xs", "text-base"].includes(c))
    .join(" ");

  return (
    <div className={`relative w-full ${wrapperClasses}`.trim()}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
      <input
        type="text"
        value={value}
        className="input-field text-sm w-full !pl-12 !pr-10"
        autoComplete="off"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors"
        >
          <X className="w-3.5 h-3.5 text-text-muted" />
        </button>
      )}
    </div>
  );
}
