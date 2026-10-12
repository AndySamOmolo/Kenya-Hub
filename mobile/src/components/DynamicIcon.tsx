import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

interface DynamicIconProps {
  emoji?: string;
  size?: number;
  color?: string;
}

/**
 * Maps tools and category emojis to native vector icons matching the KenyaHub website's Lucide icon set.
 */
export function DynamicIcon({ emoji, size = 20, color = "#C8961E" }: DynamicIconProps) {
  if (!emoji) return null;

  const clean = emoji.replace(/[\uFE0F]/g, "").trim();

  // Curated vector icon mapping (matching KenyaHub website's Lucide icons)
  switch (clean) {
    case "💰": // Banknote
      return <Ionicons name="cash-outline" size={size} color={color} />;
    case "🎓": // GraduationCap
      return <Ionicons name="school-outline" size={size} color={color} />;
    case "⚡": // Zap
      return <Ionicons name="flash-outline" size={size} color={color} />;
    case "🏛️":
    case "🏛": // Landmark
    case "🏦":
      return <Ionicons name="business-outline" size={size} color={color} />;
    case "🚌": // BusFront
      return <Ionicons name="bus-outline" size={size} color={color} />;
    case "🏥": // Hospital
      return <Ionicons name="medkit-outline" size={size} color={color} />;
    case "📊": // BarChart
      return <Ionicons name="bar-chart-outline" size={size} color={color} />;
    case "🗣️":
    case "🗣": // MessageCircle
      return <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />;
    case "📍": // MapPin
    case "🚏":
      return <Ionicons name="location-outline" size={size} color={color} />;
    case "🌾": // Wheat
    case "🌽":
    case "🫘":
    case "🥔":
      return <MaterialCommunityIcons name="barley" size={size} color={color} />;
    case "🧮": // Calculator
      return <Ionicons name="calculator-outline" size={size} color={color} />;
    case "📱": // Smartphone
      return <Ionicons name="phone-portrait-outline" size={size} color={color} />;
    case "📚": // Book
    case "📖":
      return <Ionicons name="book-outline" size={size} color={color} />;
    case "👶": // Baby
      return <MaterialCommunityIcons name="baby-face-outline" size={size} color={color} />;
    case "🎯": // Target
      return <Ionicons name="disc-outline" size={size} color={color} />;
    case "📝": // FileText
    case "📄":
      return <Ionicons name="document-text-outline" size={size} color={color} />;
    case "📅":
    case "📆": // Calendar
    case "🗓":
      return <Ionicons name="calendar-outline" size={size} color={color} />;
    case "🚗": // Car
    case "🏎":
      return <Ionicons name="car-outline" size={size} color={color} />;
    case "📞": // Phone
      return <Ionicons name="call-outline" size={size} color={color} />;
    case "🏫": // School
      return <Ionicons name="school" size={size} color={color} />;
    case "🏠":
    case "🏡": // Home
      return <Ionicons name="home-outline" size={size} color={color} />;
    case "🏗️":
    case "🏗": // Building2
      return <Ionicons name="construct-outline" size={size} color={color} />;
    case "🛡️":
    case "🛡": // ShieldCheck
      return <Ionicons name="shield-checkmark-outline" size={size} color={color} />;
    case "🚦": // TrafficCone
      return <Ionicons name="warning-outline" size={size} color={color} />;
    case "🛂": // FileBadge
      return <Ionicons name="card-outline" size={size} color={color} />;
    case "🪪": // Contact / ID
      return <Ionicons name="id-card-outline" size={size} color={color} />;
    case "📮": // Mailbox
      return <Ionicons name="mail-outline" size={size} color={color} />;
    case "💧": // Droplets
      return <Ionicons name="water-outline" size={size} color={color} />;
    case "☀️":
    case "☀": // Sun
      return <Ionicons name="sunny-outline" size={size} color={color} />;
    case "🗳️":
    case "🗳": // Vote
      return <Ionicons name="checkbox-outline" size={size} color={color} />;
    case "🦁": // PawPrint
      return <Ionicons name="paw-outline" size={size} color={color} />;
    case "™️":
    case "™": // BadgeCheck
    case "📛":
      return <Ionicons name="ribbon-outline" size={size} color={color} />;
    case "🏘️":
    case "🏘": // Building
    case "🏢":
      return <Ionicons name="business" size={size} color={color} />;
    case "🛃": // Luggage
    case "🧳":
      return <Ionicons name="briefcase-outline" size={size} color={color} />;
    case "🌧️":
    case "🌧": // CloudRain
    case "🌦":
    case "🌦️":
      return <Ionicons name="rainy-outline" size={size} color={color} />;
    case "🍲": // Soup
      return <Ionicons name="restaurant-outline" size={size} color={color} />;
    case "🌱": // Sprout
    case "🌿":
    case "🥬":
      return <Ionicons name="leaf-outline" size={size} color={color} />;
    case "🏔️":
    case "🏔": // Mountain
      return <Ionicons name="earth-outline" size={size} color={color} />;
    case "🐄": // Tractor / Livestock
    case "🐐":
    case "🐑":
    case "🐪":
      return <MaterialCommunityIcons name="cow" size={size} color={color} />;
    case "🧪": // FlaskConical
      return <Ionicons name="flask-outline" size={size} color={color} />;
    case "🏪": // Store
      return <Ionicons name="storefront-outline" size={size} color={color} />;
    case "🌲": // TreePine
    case "🎋":
      return <Ionicons name="leaf" size={size} color={color} />;
    case "🌍": // Globe
    case "🌐":
      return <Ionicons name="globe-outline" size={size} color={color} />;
    case "🏆": // Trophy
    case "🥇":
    case "🥈":
    case "🥉":
    case "🏅":
    case "💎":
      return <Ionicons name="trophy-outline" size={size} color={color} />;
    case "💡": // Lightbulb
      return <Ionicons name="bulb-outline" size={size} color={color} />;
    case "🔒":
    case "🔐": // Lock
      return <Ionicons name="lock-closed-outline" size={size} color={color} />;
    case "🔍": // Search
      return <Ionicons name="search-outline" size={size} color={color} />;
    case "⚖️":
    case "⚖": // Scale
      return <Ionicons name="scale-outline" size={size} color={color} />;
    case "🎮": // Gamepad
      return <Ionicons name="game-controller-outline" size={size} color={color} />;
    case "💬": // MessageSquare
      return <Ionicons name="chatbubble-outline" size={size} color={color} />;
    case "🧩": // Puzzle
      return <Ionicons name="extension-puzzle-outline" size={size} color={color} />;
    case "🧰": // Toolbox / Wrench / All Tools
    case "🔧":
    case "⚒️":
    case "⚒":
      return <Ionicons name="construct-outline" size={size} color={color} />;
    case "Bookmark":
    case "🔖":
      return <Ionicons name="bookmark-outline" size={size} color={color} />;
    case "💳":
      return <Ionicons name="card-outline" size={size} color={color} />;
    case "📈":
      return <Ionicons name="trending-up-outline" size={size} color={color} />;
    case "📉":
      return <Ionicons name="trending-down-outline" size={size} color={color} />;
    case "🔗":
      return <Ionicons name="link-outline" size={size} color={color} />;
    case "🗺️":
    case "🗺":
      return <Ionicons name="map-outline" size={size} color={color} />;
    case "📋":
      return <Ionicons name="clipboard-outline" size={size} color={color} />;
    case "🚨":
      return <Ionicons name="warning-outline" size={size} color={color} />;
    case "👤":
    case "👥":
    case "👨":
    case "👩":
      return <Ionicons name="person-outline" size={size} color={color} />;
    case "🎨":
      return <Ionicons name="color-palette-outline" size={size} color={color} />;
    case "🔤":
      return <Ionicons name="text-outline" size={size} color={color} />;
    case "🚀":
      return <Ionicons name="rocket-outline" size={size} color={color} />;
    case "🔥":
      return <Ionicons name="flame-outline" size={size} color={color} />;
    case "☕":
    case "🍵":
      return <Ionicons name="cafe-outline" size={size} color={color} />;
    case "🛒":
      return <Ionicons name="cart-outline" size={size} color={color} />;
    case "⭐":
      return <Ionicons name="star-outline" size={size} color={color} />;
    case "⏰":
    case "⏱️":
      return <Ionicons name="time-outline" size={size} color={color} />;
    case "ℹ️":
    case "ℹ":
      return <Ionicons name="information-circle-outline" size={size} color={color} />;
    case "🎉":
      return <Ionicons name="sparkles-outline" size={size} color={color} />;
    case "✓":
    case "✅":
      return <Ionicons name="checkmark-circle-outline" size={size} color={color} />;
    case "🏷️":
    case "🏷":
      return <Ionicons name="pricetag-outline" size={size} color={color} />;
    default:
      return <Ionicons name="sparkles-outline" size={size} color={color} />;
  }
}
