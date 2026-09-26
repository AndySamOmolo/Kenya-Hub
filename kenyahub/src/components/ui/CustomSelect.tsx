"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options?: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement> | any) => void; // allow any for string if they pass direct setter
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
  ...props 
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
        
        const props = child.props as any;
        if (child.type === "option") {
          items.push({
            value: props.value?.toString() || "",
            label: props.children?.toString() || "",
          });
        } else if (props && props.children) {
          traverse(props.children);
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

  return (
    <div className={`relative ${className}`} ref={containerRef} id={id}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm border border-border bg-bg-elevated rounded-lg hover:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
      >
        <span className="text-text-primary truncate">{selectedOption?.label || "Select..."}</span>
        <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
