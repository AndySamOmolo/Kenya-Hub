"use client";

import React from "react";
import {
  Banknote, GraduationCap, Zap, Landmark, Bus, Hospital, BarChart, MessageCircle, 
  MapPin, Wheat, Calculator, Smartphone, Book, Baby, Target, FileText, 
  Calendar, Car, Phone, School, Home, Building2, Shield, AlertTriangle, 
  FileBadge, Contact, Mailbox, Droplets, Sun, CheckSquare, PawPrint, 
  BadgeCheck, Building, Luggage, CloudRain, Soup, Sprout, Mountain, 
  Tractor, FlaskConical, Store, TreePine, Globe, CalendarDays, Trophy,
  HelpCircle
} from "lucide-react";

interface DynamicIconProps {
  emoji?: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  "💰": Banknote,
  "🎓": GraduationCap,
  "⚡": Zap,
  "🏛️": Landmark,
  "🚌": Bus,
  "🏥": Hospital,
  "📊": BarChart,
  "🗣️": MessageCircle,
  "📍": MapPin,
  "🌾": Wheat,
  "🧮": Calculator,
  "📱": Smartphone,
  "📚": Book,
  "👶": Baby,
  "🎯": Target,
  "📝": FileText,
  "📅": Calendar,
  "🚗": Car,
  "📞": Phone,
  "🏫": School,
  "🏠": Home,
  "🏗️": Building2,
  "🛡️": Shield,
  "🚦": AlertTriangle,
  "🛂": FileBadge,
  "🪪": Contact,
  "📮": Mailbox,
  "💧": Droplets,
  "☀️": Sun,
  "🗳️": CheckSquare,
  "🦁": PawPrint,
  "™️": BadgeCheck,
  "🏘️": Building,
  "🛃": Luggage,
  "🌧️": CloudRain,
  "🍲": Soup,
  "🌱": Sprout,
  "🏔️": Mountain,
  "🐄": Tractor,
  "🧪": FlaskConical,
  "🏪": Store,
  "🌲": TreePine,
  "🌍": Globe,
  "📆": CalendarDays,
  "🏆": Trophy,
};

export default function DynamicIcon({ emoji, className = "w-5 h-5" }: DynamicIconProps) {
  if (!emoji) return null;

  // If the emoji has invisible variation selectors, trim them or normalize
  const cleanEmoji = emoji.replace(/[\uFE0F]/g, '');
  
  // Try to find an exact match first, then a cleaned match
  const IconComponent = iconMap[emoji] || iconMap[cleanEmoji] || HelpCircle;
  
  return <IconComponent className={className} />;
}
