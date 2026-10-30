"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

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

export default function CustomSelect({
  id,
  value,
  onChange,
  onValueChange,
  options,
  children,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract options from children (<option>) if `options` prop not provided
  const parsedOptions: SelectOption[] = React.useMemo(() => {
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
              ? props.children.map((c) => (typeof c === "string" || typeof c === "number" ? String(c) : "")).join("")
              : val;
          list.push({ value: val, label });
        }
      });
    };

    extractFromNodes(children);
    return list;
  }, [options, children]);

  const selectedOption = parsedOptions.find((o) => o.value === String(value)) || parsedOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    if (onValueChange) {
      onValueChange(val);
    }
    if (onChange) {
      onChange({ target: { value: val } });
    }
    setIsOpen(false);
  };

  // Separate layout/width classes from input-field classes so the outer div sizes properly
  const filteredTokens = className
    .split(" ")
    .filter(
      (c) =>
        Boolean(c) &&
        ![
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
        ].includes(c)
    );

  const hasWidthToken = filteredTokens.some(
    (c) => c.startsWith("w-") || c.includes(":w-") || c.startsWith("min-w-") || c.startsWith("flex-")
  );
  if (!hasWidthToken) {
    filteredTokens.push("w-full");
  }

  const wrapperClasses = filteredTokens.join(" ");
  const isTextXs = className.includes("text-xs");
  const isCompact = className.includes("py-1.5") || isTextXs;
  const hasLeadingIcon =
    className.includes("has-leading-icon") || className.includes("select-field--icon-left");

  const paddingAndFontClasses = isTextXs
    ? hasLeadingIcon
      ? "!text-xs !py-1.5 !pl-9 !pr-2.5"
      : "!text-xs !py-1.5 !px-2.5"
    : isCompact
    ? hasLeadingIcon
      ? "!py-1.5 !pl-9 !pr-3 text-xs sm:text-sm"
      : "!py-1.5 !px-3 text-xs sm:text-sm"
    : hasLeadingIcon
    ? "!py-2 sm:!py-2.5 !pl-9 !pr-3 text-xs sm:text-sm"
    : "!py-2 sm:!py-2.5 !px-3 text-xs sm:text-sm";

  return (
    <div className={`relative ${wrapperClasses}`.trim()} ref={containerRef} id={id}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`input-field flex items-center justify-between text-left cursor-pointer transition-colors w-full ${paddingAndFontClasses} ${
          isOpen ? "border-gold ring-1 ring-gold" : "hover:border-gold/50"
        }`}
      >
        <span className="text-text-primary truncate">{selectedOption?.label || "Select..."}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted transition-transform flex-shrink-0 ml-1.5 ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 min-w-full w-max max-w-[85vw] mt-1 bg-bg-card border border-border rounded-xl shadow-xl shadow-black/25 max-h-64 overflow-y-auto animate-fade-in-up">
          <ul className="py-1">
            {parsedOptions.map((option, idx) => {
              const isSelected = option.value === String(value);
              return (
                <li key={`${option.value}-${idx}`}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm flex items-center justify-between gap-3 hover:bg-bg-elevated transition-colors cursor-pointer ${
                      isSelected ? "text-gold bg-gold/10 font-semibold" : "text-text-primary"
                    }`}
                  >
                    <span className="break-words">{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-gold flex-shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
