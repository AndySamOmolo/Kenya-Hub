import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedIcon } from "./ThemedIcon";
import type { IconPackStyle } from "../lib/theme-engine";

interface DynamicIconProps {
  emoji?: string;
  size?: number;
  color?: string;
  pack?: IconPackStyle;
}

/**
 * Maps tools, unit/module Lucide icon names, and category emojis to native vector icons.
 * Routes all Ionicons glyphs through ThemedIcon so global iconPack transforms apply everywhere.
 */
export function DynamicIcon({ emoji, size = 20, color = "#C8961E", pack }: DynamicIconProps) {
  if (!emoji) return null;

  const clean = emoji.replace(/[\uFE0F]/g, "").trim();

  switch (clean) {
    // String Lucide icon mappings (used in language courses & units)
    case "Handshake":
    case "🤝":
    case "👋":
    case "Hand":
    case "Pointer":
    case "👉":
      return <ThemedIcon name="hand-left-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "MessageCircle":
    case "🗣️":
    case "🗣":
      return <ThemedIcon name="chatbubble-ellipses-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "MessageSquare":
    case "💬":
      return <ThemedIcon name="chatbubble-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "HelpCircle":
    case "HelpCircleIcon":
    case "❓":
    case "🤷":
      return <ThemedIcon name="help-circle-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Volume2":
    case "Megaphone":
    case "Mic":
    case "📢":
    case "🎙":
      return <ThemedIcon name="volume-high-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Hash":
    case "🔢":
      return <ThemedIcon name="keypad-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Calculator":
    case "🧮":
      return <ThemedIcon name="calculator-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Users":
    case "Users2":
    case "UserCheck":
    case "👥":
    case "👨‍👩‍👧‍👦":
      return <ThemedIcon name="people-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "User":
    case "👤":
    case "👨":
    case "👩":
    case "👧":
    case "👦":
      return <ThemedIcon name="person-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Baby":
    case "👶":
      return <MaterialCommunityIcons name="baby-face-outline" size={size} color={color} />;
    case "Heart":
    case "❤️":
    case "❤":
    case "🌹":
      return <ThemedIcon name="heart-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "HeartCrack":
    case "💔":
    case "🥀":
      return <ThemedIcon name="heart-dislike-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Activity":
    case "🫁":
    case "🫀":
    case "🧍":
      return <ThemedIcon name="fitness-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Dumbbell":
    case "💪":
      return <ThemedIcon name="barbell-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Brain":
    case "🧠":
      return <MaterialCommunityIcons name="head-lightbulb-outline" size={size} color={color} />;
    case "Eye":
    case "👁":
      return <ThemedIcon name="eye-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Hospital":
    case "Stethoscope":
    case "🏥":
    case "🩺":
    case "💉":
      return <ThemedIcon name="medkit-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Soup":
    case "Utensils":
    case "🍲":
    case "🍪":
    case "Cookie":
      return <ThemedIcon name="restaurant-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Coffee":
    case "☕":
    case "🍵":
    case "🍡":
      return <ThemedIcon name="cafe-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Beer":
    case "🍺":
      return <ThemedIcon name="beer-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Cherry":
    case "🍅":
    case "🥑":
    case "🍌":
      return <ThemedIcon name="nutrition-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
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
    case "💐":
    case "🌸":
    case "🌺":
    case "🌷":
    case "🪷":
      return <ThemedIcon name="leaf-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "TreePine":
    case "Trees":
    case "🌲":
    case "🌳":
    case "🌴":
    case "🎋":
      return <ThemedIcon name="leaf" size={size} color={color} pack={pack} scaleWithTheme={false} />;
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
      return <ThemedIcon name="paw-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Sun":
    case "☀️":
    case "☀":
    case "🌞":
    case "🌻":
    case "🌼":
      return <ThemedIcon name="sunny-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "CloudRain":
    case "CloudSun":
    case "🌧️":
    case "🌧":
    case "🌦":
    case "🌦️":
      return <ThemedIcon name="rainy-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Umbrella":
    case "🏖":
      return <ThemedIcon name="umbrella-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Droplets":
    case "💧":
    case "🌊":
      return <ThemedIcon name="water-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Wind":
    case "💨":
      return <ThemedIcon name="cloudy-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Mountain":
    case "🏔️":
    case "🏔":
    case "⛰":
    case "🌋":
      return <ThemedIcon name="earth-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Compass":
    case "🧭":
      return <ThemedIcon name="compass-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Map":
    case "🗺️":
    case "🗺":
      return <ThemedIcon name="map-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "MapPin":
    case "MapPinIcon":
    case "📍":
    case "🚏":
    case "🇰🇪":
    case "🇰":
    case "🇪":
      return <ThemedIcon name="location-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Flag":
    case "FlagTriangleRight":
    case "🚩":
    case "🏁":
      return <ThemedIcon name="flag-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Footprints":
    case "🥾":
    case "🏃":
    case "🚶":
      return <ThemedIcon name="walk-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Ship":
    case "🚢":
    case "🛶":
      return <ThemedIcon name="boat-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Home":
    case "HomeIcon":
    case "🏠":
    case "🏡":
      return <ThemedIcon name="home-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Hammer":
    case "Wrench":
    case "Building2":
    case "🧰":
    case "🔧":
    case "⚒️":
    case "⚒":
    case "🛠":
    case "🏗️":
    case "🏗":
    case "🧱":
      return <ThemedIcon name="construct-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "🧹":
      return <ThemedIcon name="brush-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "PenTool":
    case "Feather":
    case "✏":
    case "✍":
      return <ThemedIcon name="create-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Ruler":
    case "📐":
      return <ThemedIcon name="resize-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Settings":
    case "⚙":
      return <ThemedIcon name="settings-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Amphora":
    case "🏺":
      return <ThemedIcon name="color-fill-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Palette":
    case "🎨":
      return <ThemedIcon name="color-palette-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Scale":
    case "⚖️":
    case "⚖":
      return <ThemedIcon name="scale-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Banknote":
    case "Coins":
    case "💰":
      return <ThemedIcon name="cash-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "ArrowRightLeft":
    case "FlipHorizontal":
    case "💱":
    case "🪞":
      return <ThemedIcon name="swap-horizontal-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "ShoppingCart":
    case "ShoppingBag":
    case "🛒":
      return <ThemedIcon name="cart-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Shield":
    case "ShieldCheck":
    case "🛡️":
    case "🛡":
      return <ThemedIcon name="shield-checkmark-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "ShieldAlert":
    case "TriangleAlert":
    case "AlertCircle":
    case "Siren":
    case "🚨":
    case "⚠":
    case "🚦":
    case "😮":
      return <ThemedIcon name="warning-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Ban":
    case "X":
    case "XCircle":
    case "🚫":
    case "❌":
    case "✗":
      return <ThemedIcon name="close-circle-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Frown":
    case "😔":
      return <ThemedIcon name="sad-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Clock":
    case "Timer":
    case "⏰":
    case "⏱":
    case "⏳":
      return <ThemedIcon name="time-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Calendar":
    case "CalendarDays":
    case "CalendarRange":
    case "📅":
    case "📆":
    case "🗓":
      return <ThemedIcon name="calendar-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Book":
    case "BookOpen":
    case "BookOpenCheck":
    case "📚":
    case "📖":
    case "📘":
      return <ThemedIcon name="book-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Scroll":
    case "ScrollText":
    case "FileText":
    case "File":
    case "📝":
    case "📄":
    case "📜":
    case "📰":
    case "📑":
      return <ThemedIcon name="document-text-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Layers":
    case "Sliders":
    case "🃏":
    case "🟩":
      return <ThemedIcon name="layers-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Link":
    case "GitBranch":
    case "🔗":
      return <ThemedIcon name="link-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Key":
    case "Lock":
    case "🔑":
    case "🔒":
    case "🔐":
      return <ThemedIcon name="key-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "RefreshCw":
    case "Repeat":
    case "🔄":
      return <ThemedIcon name="refresh-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Zap":
    case "Play":
    case "FastForward":
    case "⚡":
      return <ThemedIcon name="flash-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
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
      return <ThemedIcon name="trophy-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Lightbulb":
    case "💡":
      return <ThemedIcon name="bulb-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Puzzle":
    case "🧩":
      return <ThemedIcon name="extension-puzzle-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Target":
    case "🎯":
    case "🏹":
    case "🟢":
      return <ThemedIcon name="disc-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "CheckSquare":
    case "CheckCircle":
    case "CheckCircle2":
    case "BadgeCheck":
    case "Badge":
    case "Copyright":
    case "✓":
    case "✅":
    case "🗳":
    case "™":
    case "©":
    case "📛":
      return <ThemedIcon name="checkmark-circle-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "GraduationCap":
    case "🎓":
      return <ThemedIcon name="school-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Landmark":
    case "🏛":
    case "🏦":
      return <ThemedIcon name="business-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "BusFront":
    case "🚌":
      return <ThemedIcon name="bus-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "BarChart":
    case "📊":
      return <ThemedIcon name="bar-chart-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Smartphone":
    case "📱":
      return <ThemedIcon name="phone-portrait-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Car":
    case "CarFront":
    case "ParkingSquare":
    case "🚗":
    case "🚘":
    case "🏎":
    case "🅿":
      return <ThemedIcon name="car-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Phone":
    case "📞":
      return <ThemedIcon name="call-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "School":
    case "🏫":
      return <ThemedIcon name="school" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "FileBadge":
    case "CreditCard":
    case "🛂":
    case "💳":
      return <ThemedIcon name="card-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Contact":
    case "🪪":
      return <ThemedIcon name="id-card-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Mailbox":
    case "Mail":
    case "Inbox":
    case "AtSign":
    case "📮":
    case "📭":
    case "📥":
    case "📧":
    case "📁":
    case "✉":
      return <ThemedIcon name="mail-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Building":
    case "BuildingIcon":
    case "🏘":
    case "🏢":
      return <ThemedIcon name="business" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Luggage":
    case "BaggageClaim":
    case "🛃":
    case "🧳":
      return <ThemedIcon name="briefcase-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "FlaskConical":
    case "🧪":
      return <ThemedIcon name="flask-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Store":
    case "🏪":
      return <ThemedIcon name="storefront-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Globe":
    case "Globe2":
    case "🌍":
    case "🌐":
      return <ThemedIcon name="globe-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Search":
    case "🔍":
      return <ThemedIcon name="search-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Gamepad2":
    case "🎮":
      return <ThemedIcon name="game-controller-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Bookmark":
    case "🔖":
      return <ThemedIcon name="bookmark-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "TrendingUp":
    case "📈":
      return <ThemedIcon name="trending-up-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "TrendingDown":
    case "📉":
      return <ThemedIcon name="trending-down-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "ClipboardList":
    case "📋":
      return <ThemedIcon name="clipboard-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Type":
    case "🔤":
      return <ThemedIcon name="text-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Rocket":
    case "🚀":
      return <ThemedIcon name="rocket-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Flame":
    case "🔥":
      return <ThemedIcon name="flame-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Star":
    case "⭐":
      return <ThemedIcon name="star-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Info":
    case "ℹ":
      return <ThemedIcon name="information-circle-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "ThumbsUp":
    case "Smile":
    case "👍":
      return <ThemedIcon name="thumbs-up-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Tag":
    case "🏷":
      return <ThemedIcon name="pricetag-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
    case "Sparkles":
    case "PartyPopper":
    case "✨":
    case "🎉":
    default:
      return <ThemedIcon name="sparkles-outline" size={size} color={color} pack={pack} scaleWithTheme={false} />;
  }
}
