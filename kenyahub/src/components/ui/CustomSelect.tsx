"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options?: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: (value: string) => void;
}

export default function CustomSelect({ 
  value, 
  onChange, 
  onValueChange,
  options, 
  className = "", 
  id, 
  children,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extract options from children if `options` prop is not provided
  const parsedOptions = React.useMemo(() => {
    if (options) return options;
    const items: Option[] = [];
    
    // Helper to traverse children recursively to find options
    const traverse = (node: ReactNode) => {
      React.Children.forEach(node, (child) => {
        if (!React.isValidElement(child)) return;
        
        const childProps = child.props as Record<string, unknown>;
        if (child.type === "option") {
          items.push({
            value: childProps.value?.toString() || "",
            label: childProps.children?.toString() || "",
          });
        } else if (childProps && childProps.children) {
          traverse(childProps.children as ReactNode);
        }
      });
    };
    
    traverse(children);
    return items;
  }, [children, options]);

  const selectedOption = parsedOptions.find((opt) => opt.value === String(value)) || parsedOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else if (onChange) {
      // Fake event for drop-in replacement of native select
      const event = {
        target: { value: newValue },
        currentTarget: { value: newValue }
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(event);
    }
    setIsOpen(false);
  };

  // Extract layout classes for the wrapper, filtering out input-specific styles
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
          "py-1.5",
          "py-2",
          "py-2.5",
          "px-3",
          "has-leading-icon",
        ].includes(c)
    )
    .join(" ");

  const isTextXs = className.includes("text-xs");
  const isCompact = className.includes("py-1.5") || isTextXs;
  const hasLeadingIcon = className.includes("has-leading-icon");

  return (
    <div className={`relative ${wrapperClasses}`.trim()} ref={containerRef} id={id}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`input-field flex items-center justify-between text-left cursor-pointer transition-colors w-full ${
          isTextXs
            ? "!text-xs !py-1.5 !px-2.5"
            : isCompact
            ? "!py-1.5 !px-3 text-xs sm:text-sm"
            : "!py-2 sm:!py-2.5 !px-3 text-xs sm:text-sm"
        } ${hasLeadingIcon ? "!pl-9" : ""} ${
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
        <div className="absolute z-50 w-full mt-1 bg-bg-card border border-border rounded-lg shadow-xl shadow-black/20 max-h-60 overflow-y-auto animate-fade-in-up">
          <ul className="py-1">
            {parsedOptions.map((option, idx) => {
              const isSelected = option.value === String(value);
              return (
                <li key={`${option.value}-${idx}`}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full text-left px-3 py-2.5 text-sm flex items-center justify-between hover:bg-bg-elevated transition-colors ${
                      isSelected ? "text-gold bg-gold/5" : "text-text-primary"
                    }`}
                  >
                    <span className="truncate">{option.label}</span>
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
