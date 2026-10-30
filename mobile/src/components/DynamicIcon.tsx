import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface DynamicIconProps {
  emoji?: string;
  size?: number;
  color?: string;
}

/**
 * Maps tools, unit/module Lucide icon names, and category emojis to native vector icons.
 */
export function DynamicIcon({ emoji, size = 20, color = "#C8961E" }: DynamicIconProps) {
  if (!emoji) return null;

  const clean = emoji.replace(/[\uFE0F]/g, "").trim();

  switch (clean) {
    // String Lucide icon mappings (used in language courses & units)
    case "Handshake":
    case "🤝":
    case "👋":
    case "Hand":
      return <Ionicons name="hand-left-outline" size={size} color={color} />;
    case "MessageCircle":
    case "🗣️":
    case "🗣":
      return <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />;
    case "MessageSquare":
    case "💬":
      return <Ionicons name="chatbubble-outline" size={size} color={color} />;
    case "HelpCircle":
    case "❓":
      return <Ionicons name="help-circle-outline" size={size} color={color} />;
    case "Volume2":
    case "Megaphone":
    case "Mic":
    case "📢":
    case "🎙":
      return <Ionicons name="volume-high-outline" size={size} color={color} />;
    case "Hash":
    case "🔢":
      return <Ionicons name="keypad-outline" size={size} color={color} />;
    case "Calculator":
    case "🧮":
      return <Ionicons name="calculator-outline" size={size} color={color} />;
    case "Users":
    case "Users2":
    case "UserCheck":
    case "👥":
    case "👨‍👩‍👧‍👦":
      return <Ionicons name="people-outline" size={size} color={color} />;
    case "User":
    case "👤":
    case "👨":
    case "👩":
      return <Ionicons name="person-outline" size={size} color={color} />;
    case "Baby":
    case "👶":
      return <MaterialCommunityIcons name="baby-face-outline" size={size} color={color} />;
    case "Heart":
    case "❤️":
    case "❤":
      return <Ionicons name="heart-outline" size={size} color={color} />;
    case "Activity":
    case "🫁":
    case "🫀":
    case "🧍":
      return <Ionicons name="fitness-outline" size={size} color={color} />;
    case "Eye":
    case "👁":
      return <Ionicons name="eye-outline" size={size} color={color} />;
    case "Hospital":
    case "Stethoscope":
    case "🏥":
    case "🩺":
    case "💉":
      return <Ionicons name="medkit-outline" size={size} color={color} />;
    case "Soup":
    case "Utensils":
    case "🍲":
      return <Ionicons name="restaurant-outline" size={size} color={color} />;
    case "Coffee":
    case "☕":
    case "🍵":
      return <Ionicons name="cafe-outline" size={size} color={color} />;
    case "Wheat":
    case "🌾":
    case "🌽":
    case "🫘":
    case "🥔":
      return <MaterialCommunityIcons name="barley" size={size} color={color} />;
    case "Sprout":
    case "Leaf":
    case "🌱":
    case "🌿":
    case "🥬":
      return <Ionicons name="leaf-outline" size={size} color={color} />;
    case "TreePine":
    case "Trees":
    case "🌲":
    case "🌳":
    case "🌴":
    case "🎋":
      return <Ionicons name="leaf" size={size} color={color} />;
    case "Tractor":
    case "Milk":
    case "Beef":
    case "🐄":
    case "🐐":
    case "🐑":
    case "🐪":
    case "🥛":
    case "🥩":
      return <MaterialCommunityIcons name="cow" size={size} color={color} />;
    case "PawPrint":
    case "🦁":
    case "🐾":
      return <Ionicons name="paw-outline" size={size} color={color} />;
    case "Sun":
    case "☀️":
    case "☀":
    case "🌞":
      return <Ionicons name="sunny-outline" size={size} color={color} />;
    case "CloudRain":
    case "CloudSun":
    case "🌧️":
    case "🌧":
    case "🌦":
    case "🌦️":
      return <Ionicons name="rainy-outline" size={size} color={color} />;
    case "Droplets":
    case "💧":
    case "🌊":
      return <Ionicons name="water-outline" size={size} color={color} />;
    case "Wind":
    case "💨":
      return <Ionicons name="cloudy-outline" size={size} color={color} />;
    case "Mountain":
    case "🏔️":
    case "🏔":
    case "⛰":
    case "🌋":
      return <Ionicons name="earth-outline" size={size} color={color} />;
    case "Compass":
    case "🧭":
      return <Ionicons name="compass-outline" size={size} color={color} />;
    case "Map":
    case "🗺️":
    case "🗺":
      return <Ionicons name="map-outline" size={size} color={color} />;
    case "MapPin":
    case "📍":
    case "🚏":
      return <Ionicons name="location-outline" size={size} color={color} />;
    case "Footprints":
    case "🥾":
    case "🏃":
    case "🚶":
      return <Ionicons name="walk-outline" size={size} color={color} />;
    case "Ship":
    case "🚢":
    case "🛶":
      return <Ionicons name="boat-outline" size={size} color={color} />;
    case "Home":
    case "🏠":
    case "🏡":
      return <Ionicons name="home-outline" size={size} color={color} />;
    case "Hammer":
    case "Wrench":
    case "🧰":
    case "🔧":
    case "⚒️":
    case "⚒":
    case "🛠":
    case "🏗️":
    case "🏗":
    case "🧱":
      return <Ionicons name="construct-outline" size={size} color={color} />;
    case "Amphora":
    case "🏺":
      return <Ionicons name="color-fill-outline" size={size} color={color} />;
    case "Palette":
    case "🎨":
      return <Ionicons name="color-palette-outline" size={size} color={color} />;
    case "Scale":
    case "⚖️":
    case "⚖":
      return <Ionicons name="scale-outline" size={size} color={color} />;
    case "Banknote":
    case "Coins":
    case "💰":
      return <Ionicons name="cash-outline" size={size} color={color} />;
    case "ShoppingCart":
    case "ShoppingBag":
    case "🛒":
      return <Ionicons name="cart-outline" size={size} color={color} />;
    case "Shield":
    case "ShieldCheck":
    case "🛡️":
    case "🛡":
      return <Ionicons name="shield-checkmark-outline" size={size} color={color} />;
    case "ShieldAlert":
    case "TriangleAlert":
    case "Siren":
    case "🚨":
    case "⚠":
    case "🚦":
      return <Ionicons name="warning-outline" size={size} color={color} />;
    case "Clock":
    case "Timer":
    case "⏰":
    case "⏱":
    case "⏳":
      return <Ionicons name="time-outline" size={size} color={color} />;
    case "Calendar":
    case "CalendarDays":
    case "CalendarRange":
    case "📅":
    case "📆":
    case "🗓":
      return <Ionicons name="calendar-outline" size={size} color={color} />;
    case "Book":
    case "BookOpen":
    case "BookOpenCheck":
    case "📚":
    case "📖":
      return <Ionicons name="book-outline" size={size} color={color} />;
    case "Scroll":
    case "ScrollText":
    case "FileText":
    case "📝":
    case "📄":
    case "📜":
      return <Ionicons name="document-text-outline" size={size} color={color} />;
    case "Layers":
    case "Sliders":
    case "🃏":
      return <Ionicons name="layers-outline" size={size} color={color} />;
    case "Link":
    case "GitBranch":
    case "🔗":
      return <Ionicons name="link-outline" size={size} color={color} />;
    case "Key":
    case "Lock":
    case "🔒":
    case "🔐":
      return <Ionicons name="key-outline" size={size} color={color} />;
    case "RefreshCw":
    case "Repeat":
    case "🔄":
      return <Ionicons name="refresh-outline" size={size} color={color} />;
    case "Zap":
    case "Play":
    case "FastForward":
    case "⚡":
      return <Ionicons name="flash-outline" size={size} color={color} />;
    case "Award":
    case "Crown":
    case "Trophy":
    case "Medal":
    case "🏆":
    case "🥇":
    case "🥈":
    case "🥉":
    case "🏅":
    case "💎":
    case "👑":
      return <Ionicons name="trophy-outline" size={size} color={color} />;
    case "Lightbulb":
    case "💡":
      return <Ionicons name="bulb-outline" size={size} color={color} />;
    case "Puzzle":
    case "🧩":
      return <Ionicons name="extension-puzzle-outline" size={size} color={color} />;
    case "Target":
    case "🎯":
    case "🏹":
      return <Ionicons name="disc-outline" size={size} color={color} />;
    case "CheckSquare":
    case "CheckCircle":
    case "CheckCircle2":
    case "BadgeCheck":
    case "✓":
    case "✅":
    case "🗳":
      return <Ionicons name="checkmark-circle-outline" size={size} color={color} />;
    case "GraduationCap":
    case "🎓":
      return <Ionicons name="school-outline" size={size} color={color} />;
    case "Landmark":
    case "🏛":
    case "🏦":
      return <Ionicons name="business-outline" size={size} color={color} />;
    case "BusFront":
    case "🚌":
      return <Ionicons name="bus-outline" size={size} color={color} />;
    case "BarChart":
    case "📊":
      return <Ionicons name="bar-chart-outline" size={size} color={color} />;
    case "Smartphone":
    case "📱":
      return <Ionicons name="phone-portrait-outline" size={size} color={color} />;
    case "Car":
    case "🚗":
    case "🏎":
      return <Ionicons name="car-outline" size={size} color={color} />;
    case "Phone":
    case "📞":
      return <Ionicons name="call-outline" size={size} color={color} />;
    case "School":
    case "🏫":
      return <Ionicons name="school" size={size} color={color} />;
    case "FileBadge":
    case "CreditCard":
    case "🛂":
    case "💳":
      return <Ionicons name="card-outline" size={size} color={color} />;
    case "Contact":
    case "🪪":
      return <Ionicons name="id-card-outline" size={size} color={color} />;
    case "Mailbox":
    case "Mail":
    case "📮":
    case "📭":
    case "📁":
    case "✉":
      return <Ionicons name="mail-outline" size={size} color={color} />;
    case "Building":
    case "🏘":
    case "🏢":
      return <Ionicons name="business" size={size} color={color} />;
    case "Luggage":
    case "🛃":
    case "🧳":
      return <Ionicons name="briefcase-outline" size={size} color={color} />;
    case "FlaskConical":
    case "🧪":
      return <Ionicons name="flask-outline" size={size} color={color} />;
    case "Store":
    case "🏪":
      return <Ionicons name="storefront-outline" size={size} color={color} />;
    case "Globe":
    case "Globe2":
    case "🌍":
    case "🌐":
      return <Ionicons name="globe-outline" size={size} color={color} />;
    case "Search":
    case "🔍":
      return <Ionicons name="search-outline" size={size} color={color} />;
    case "Gamepad2":
    case "🎮":
      return <Ionicons name="game-controller-outline" size={size} color={color} />;
    case "Bookmark":
    case "🔖":
      return <Ionicons name="bookmark-outline" size={size} color={color} />;
    case "TrendingUp":
    case "📈":
      return <Ionicons name="trending-up-outline" size={size} color={color} />;
    case "TrendingDown":
    case "📉":
      return <Ionicons name="trending-down-outline" size={size} color={color} />;
    case "ClipboardList":
    case "📋":
      return <Ionicons name="clipboard-outline" size={size} color={color} />;
    case "Type":
    case "🔤":
      return <Ionicons name="text-outline" size={size} color={color} />;
    case "Rocket":
    case "🚀":
      return <Ionicons name="rocket-outline" size={size} color={color} />;
    case "Flame":
    case "🔥":
      return <Ionicons name="flame-outline" size={size} color={color} />;
    case "Star":
    case "⭐":
      return <Ionicons name="star-outline" size={size} color={color} />;
    case "Info":
    case "ℹ":
      return <Ionicons name="information-circle-outline" size={size} color={color} />;
    case "ThumbsUp":
    case "Smile":
    case "👍":
      return <Ionicons name="thumbs-up-outline" size={size} color={color} />;
    case "🏷":
      return <Ionicons name="pricetag-outline" size={size} color={color} />;
    case "Sparkles":
    case "🎉":
    default:
      return <Ionicons name="sparkles-outline" size={size} color={color} />;
  }
}
