import React from "react";
import {
  Banknote,
  Building2,
  BusFront,
  Car,
  GraduationCap,
  Hospital,
  Landmark,
  MessageCircle,
  Scale,
  Zap,
} from "lucide-react";

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  "🗣️": MessageCircle,
  "🗣": MessageCircle,
  "💰": Banknote,
  "🎓": GraduationCap,
  "🚗": Car,
  "🏗️": Building2,
  "🏗": Building2,
  "⚡": Zap,
  "⚖️": Scale,
  "⚖": Scale,
  "🏥": Hospital,
  "🏛️": Landmark,
  "🏛": Landmark,
  "🚌": BusFront,
};

interface CategoryIconProps {
  emoji?: string;
  className?: string;
}

export default function CategoryIcon({ emoji, className = "w-4 h-4" }: CategoryIconProps) {
  if (!emoji) return null;
  const Icon = CATEGORY_ICON_MAP[emoji];
  if (Icon) {
    return <Icon className={className} aria-hidden="true" />;
  }
  return <span aria-hidden="true">{emoji}</span>;
}
