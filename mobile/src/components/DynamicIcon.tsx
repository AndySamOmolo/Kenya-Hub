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

  const trimmed = emoji.trim();
  if (trimmed === "🇰🇪" || trimmed.includes("🇰🇪")) {
    return <Ionicons name="flag-outline" size={size} color={color} />;
  }
  if (trimmed === "👨‍👩‍👧‍👦") {
    return <Ionicons name="people-outline" size={size} color={color} />;
  }

  const clean = trimmed.replace(/[\uFE0F]/g, "").trim();

  switch (clean) {
    // String Lucide icon mappings (used in language courses, units, skills & tools)
    case "Handshake":
    case "🤝":
    case "👋":
    case "Hand":
    case "👉":
    case "Pointer":
      return <Ionicons name="hand-left-outline" size={size} color={color} />;
    case "MessageCircle":
    case "🗣️":
    case "🗣":
    case "language":
      return <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />;
    case "MessageSquare":
    case "💬":
      return <Ionicons name="chatbubble-outline" size={size} color={color} />;
    case "HelpCircle":
    case "HelpCircleIcon":
    case "❓":
    case "🤷":
      return <Ionicons name="help-circle-outline" size={size} color={color} />;
    case "Volume2":
    case "Megaphone":
    case "Mic":
    case "📢":
    case "🎙":
      return <Ionicons name="volume-high-outline" size={size} color={color} />;
    case "Hash":
    case "hash":
    case "🔢":
      return <Ionicons name="keypad-outline" size={size} color={color} />;
    case "Calculator":
    case "calculator":
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
    case "👧":
    case "👦":
      return <Ionicons name="person-outline" size={size} color={color} />;
    case "Baby":
    case "👶":
      return <MaterialCommunityIcons name="baby-face-outline" size={size} color={color} />;
    case "Heart":
    case "❤️":
    case "❤":
      return <Ionicons name="heart-outline" size={size} color={color} />;
    case "HeartCrack":
    case "💔":
      return <Ionicons name="heart-dislike-outline" size={size} color={color} />;
    case "Activity":
    case "Dumbbell":
    case "💪":
    case "🫁":
    case "🫀":
    case "🧍":
      return <Ionicons name="fitness-outline" size={size} color={color} />;
    case "Brain":
    case "🧠":
      return <MaterialCommunityIcons name="head-lightbulb-outline" size={size} color={color} />;
    case "Eye":
    case "👁":
      return <Ionicons name="eye-outline" size={size} color={color} />;
    case "Hospital":
    case "Stethoscope":
    case "medkit-outline":
    case "🏥":
    case "🩺":
    case "💉":
      return <Ionicons name="medkit-outline" size={size} color={color} />;
    case "Soup":
    case "Utensils":
    case "Cookie":
    case "🍲":
    case "🍪":
      return <Ionicons name="restaurant-outline" size={size} color={color} />;
    case "Coffee":
    case "Beer":
    case "☕":
    case "🍵":
    case "🍺":
    case "🍡":
      return <Ionicons name="cafe-outline" size={size} color={color} />;
    case "Wheat":
    case "Cherry":
    case "🌾":
    case "🌽":
    case "🫘":
    case "🥔":
    case "🍅":
    case "🥑":
    case "🍌":
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
    case "Umbrella":
    case "🌧️":
    case "🌧":
    case "🌦":
    case "🌦️":
    case "🏖":
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
    case "map":
    case "🗺️":
    case "🗺":
      return <Ionicons name="map-outline" size={size} color={color} />;
    case "MapPin":
    case "MapPinIcon":
    case "📍":
    case "🚏":
    case "🅿":
    case "ParkingSquare":
      return <Ionicons name="location-outline" size={size} color={color} />;
    case "Footprints":
    case "🥾":
    case "🏃":
    case "🚶":
      return <Ionicons name="walk-outline" size={size} color={color} />;
    case "Ship":
    case "Anchor":
    case "🚢":
    case "🛶":
    case "⚓":
      return <Ionicons name="boat-outline" size={size} color={color} />;
    case "Home":
    case "HomeIcon":
    case "🏠":
    case "🏡":
      return <Ionicons name="home-outline" size={size} color={color} />;
    case "Hammer":
    case "Wrench":
    case "Ruler":
    case "🧰":
    case "🔧":
    case "⚒️":
    case "⚒":
    case "🛠":
    case "🏗️":
    case "🏗":
    case "🧱":
    case "📐":
      return <Ionicons name="construct-outline" size={size} color={color} />;
    case "Settings":
    case "⚙️":
    case "⚙":
      return <Ionicons name="settings-outline" size={size} color={color} />;
    case "PenTool":
    case "Feather":
    case "✏️":
    case "✏":
    case "✍️":
    case "✍":
      return <Ionicons name="create-outline" size={size} color={color} />;
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
    case "AlertCircle":
    case "TrafficCone":
    case "Siren":
    case "🚨":
    case "⚠":
    case "⚠️":
    case "🚦":
    case "😮":
      return <Ionicons name="warning-outline" size={size} color={color} />;
    case "Ban":
    case "X":
    case "XCircle":
    case "❌":
    case "✗":
    case "🚫":
      return <Ionicons name="close-circle-outline" size={size} color={color} />;
    case "Flag":
    case "FlagTriangleRight":
    case "🚩":
    case "🏁":
      return <Ionicons name="flag-outline" size={size} color={color} />;
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
    case "📘":
      return <Ionicons name="book-outline" size={size} color={color} />;
    case "Scroll":
    case "ScrollText":
    case "FileText":
    case "File":
    case "📝":
    case "📄":
    case "📜":
    case "📑":
    case "📰":
      return <Ionicons name="document-text-outline" size={size} color={color} />;
    case "Layers":
    case "Sliders":
    case "FlipHorizontal":
    case "grid":
    case "🃏":
    case "🪞":
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
    case "ArrowRightLeft":
    case "shuffle":
    case "🔄":
    case "💱":
      return <Ionicons name="refresh-outline" size={size} color={color} />;
    case "Zap":
    case "zap":
    case "flash":
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
    case "Badge":
    case "Vote":
    case "Copyright":
    case "✓":
    case "✅":
    case "🗳":
    case "™":
    case "™️":
    case "©":
    case "©️":
    case "📛":
      return <Ionicons name="checkmark-circle-outline" size={size} color={color} />;
    case "GraduationCap":
    case "🎓":
      return <Ionicons name="school-outline" size={size} color={color} />;
    case "Landmark":
    case "🏛":
    case "🏦":
      return <Ionicons name="business-outline" size={size} color={color} />;
    case "BusFront":
    case "bus":
    case "🚌":
      return <Ionicons name="bus-outline" size={size} color={color} />;
    case "BarChart":
    case "bar-chart-outline":
    case "📊":
      return <Ionicons name="bar-chart-outline" size={size} color={color} />;
    case "Smartphone":
    case "phone-portrait":
    case "📱":
      return <Ionicons name="phone-portrait-outline" size={size} color={color} />;
    case "Car":
    case "CarFront":
    case "🚗":
    case "🏎":
      return <Ionicons name="car-outline" size={size} color={color} />;
    case "Phone":
    case "📞":
      return <Ionicons name="call-outline" size={size} color={color} />;
    case "School":
    case "school":
    case "🏫":
      return <Ionicons name="school" size={size} color={color} />;
    case "FileBadge":
    case "CreditCard":
    case "card-outline":
    case "🛂":
    case "💳":
      return <Ionicons name="card-outline" size={size} color={color} />;
    case "Contact":
    case "🪪":
      return <Ionicons name="id-card-outline" size={size} color={color} />;
    case "Mailbox":
    case "Mail":
    case "Inbox":
    case "AtSign":
    case "mail-outline":
    case "📮":
    case "📭":
    case "📥":
    case "📁":
    case "✉":
    case "📧":
      return <Ionicons name="mail-outline" size={size} color={color} />;
    case "Building":
    case "Building2":
    case "BuildingIcon":
    case "🏘":
    case "🏢":
      return <Ionicons name="business" size={size} color={color} />;
    case "Luggage":
    case "BaggageClaim":
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
    case "trending-up":
    case "📈":
      return <Ionicons name="trending-up-outline" size={size} color={color} />;
    case "TrendingDown":
    case "📉":
      return <Ionicons name="trending-down-outline" size={size} color={color} />;
    case "ClipboardList":
    case "list":
    case "📋":
      return <Ionicons name="clipboard-outline" size={size} color={color} />;
    case "Type":
    case "text":
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
    case "Frown":
    case "😔":
      return <Ionicons name="sad-outline" size={size} color={color} />;
    case "🏷":
      return <Ionicons name="pricetag-outline" size={size} color={color} />;
    case "PartyPopper":
    case "Sparkles":
    case "✨":
    case "🎉":
    default:
      return <Ionicons name="sparkles-outline" size={size} color={color} />;
  }
}
