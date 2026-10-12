import React, { useMemo, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme";

export interface Stage {
  name: string;
  lat: number;
  lng: number;
  order: number;
}

interface MatatuMapProps {
  stages: Stage[];
  routeName: string;
  routeNumber: string;
  height?: number;
}

export function MatatuMap({
  stages,
  routeName,
  routeNumber,
  height = 380,
}: MatatuMapProps) {
  const { theme, isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);

  const safeStages = useMemo(() => {
    return Array.isArray(stages)
      ? stages.filter(
          (s) =>
            s &&
            typeof s.lat === "number" &&
            typeof s.lng === "number" &&
            !isNaN(s.lat) &&
            !isNaN(s.lng)
        )
      : [];
  }, [stages]);

  const htmlContent = useMemo(() => {
    if (safeStages.length === 0) return "";

    const stagesJson = JSON.stringify(safeStages);
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const polylineColor = "#C8961E"; // KenyaHub Gold

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <style>
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              background-color: ${isDark ? "#0C0A08" : "#FAF7F2"};
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              overflow: hidden;
            }
            #map {
              width: 100%;
              height: 100%;
            }
            .custom-stage-marker {
              background: transparent;
              border: none;
            }
            .stage-circle {
              color: #000;
              font-weight: 800;
              font-size: 11px;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid #ffffff;
              box-shadow: 0 4px 10px rgba(0,0,0,0.4);
            }
            .leaflet-popup-content-wrapper {
              background: ${isDark ? "#171411" : "#FFFFFF"};
              color: ${isDark ? "#EDE8DF" : "#1A1612"};
              border-radius: 12px;
              border: 1px solid ${isDark ? "#2A241C" : "#E5DFD5"};
              box-shadow: 0 8px 24px rgba(0,0,0,0.3);
              padding: 4px;
            }
            .leaflet-popup-tip {
              background: ${isDark ? "#171411" : "#FFFFFF"};
            }
            .popup-title {
              font-size: 13px;
              font-weight: 700;
              color: #C8961E;
              margin-bottom: 2px;
            }
            .popup-sub {
              font-size: 11px;
              color: ${isDark ? "#9A9387" : "#6E675F"};
            }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
          <script>
            (function() {
              const stages = ${stagesJson};
              if (!stages || stages.length === 0) return;

              const firstStage = stages[0];
              const map = L.map('map', {
                center: [firstStage.lat, firstStage.lng],
                zoom: 13,
                zoomControl: false,
                attributionControl: false
              });

              L.tileLayer('${tileUrl}', {
                maxZoom: 19
              }).addTo(map);

              // Polyline connecting stages
              const latLngs = stages.map(s => [s.lat, s.lng]);
              L.polyline(latLngs, {
                color: '${polylineColor}',
                weight: 5,
                opacity: 0.9,
                dashArray: '8, 6',
                lineCap: 'round'
              }).addTo(map);

              // Markers
              stages.forEach((stage, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === stages.length - 1;
                const bgColor = isFirst ? '#2FA463' : (isLast ? '#BE2126' : '#C8961E');

                const customHtml = '<div class="stage-circle" style="background-color:' + bgColor + ';">' + stage.order + '</div>';
                const customIcon = L.divIcon({
                  html: customHtml,
                  className: 'custom-stage-marker',
                  iconSize: [26, 26],
                  iconAnchor: [13, 13]
                });

                const popupHtml = '<div class="popup-title">Stage ' + stage.order + ': ' + stage.name + '</div>' +
                  '<div class="popup-sub">' + (isFirst ? '🟢 Departure Terminus' : (isLast ? '🔴 Destination Terminus' : '🟡 Waypoint Stage')) + '</div>' +
                  '<div class="popup-sub" style="font-size: 10px; margin-top: 2px;">Route ${routeNumber} • ${routeName}</div>';

                L.marker([stage.lat, stage.lng], { icon: customIcon })
                  .addTo(map)
                  .bindPopup(popupHtml);
              });

              // Fit bounds with padding
              const bounds = L.latLngBounds(latLngs);
              map.fitBounds(bounds, { padding: [35, 35] });

              // Post message to React Native when stage marker clicked if needed
            })();
          </script>
        </body>
      </html>
    `;
  }, [safeStages, routeName, routeNumber, isDark]);

  if (safeStages.length === 0) {
    return (
      <View style={[styles.emptyContainer, { height, backgroundColor: theme.bgCard, borderColor: theme.border }]}>
        <Ionicons name="map-outline" size={32} color={theme.textMuted} />
        <Text style={[styles.emptyText, { color: theme.textMuted }]}>
          No GPS stage coordinates available for this route
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { height, borderColor: theme.border }]}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        onLoadEnd={() => setLoading(false)}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={false}
      />

      {loading && (
        <View style={[styles.loadingOverlay, { backgroundColor: theme.bgCard }]}>
          <ActivityIndicator size="small" color={theme.gold} />
          <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
            Loading interactive route map...
          </Text>
        </View>
      )}

      {/* Floating Map Legend */}
      <View style={[styles.legendBox, { backgroundColor: isDark ? "rgba(23, 20, 17, 0.92)" : "rgba(255, 255, 255, 0.94)", borderColor: theme.border }]}>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: theme.kenyaGreen }]} />
          <Text style={[styles.legendText, { color: theme.textPrimary }]}>Start (1)</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: theme.gold }]} />
          <Text style={[styles.legendText, { color: theme.textPrimary }]}>Waypoint</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: theme.kenyaRed }]} />
          <Text style={[styles.legendText, { color: theme.textPrimary }]}>End ({safeStages.length})</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    position: "relative",
  },
  webview: {
    flex: 1,
    backgroundColor: "transparent",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    zIndex: 10,
  },
  loadingText: {
    fontSize: 12,
    fontWeight: "600",
  },
  emptyContainer: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 20,
  },
  emptyText: {
    fontSize: 12,
    textAlign: "center",
  },
  legendBox: {
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  legendText: {
    fontSize: 10,
    fontWeight: "700",
  },
});
