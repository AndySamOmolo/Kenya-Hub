import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../theme";

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
  height = 360,
}: MatatuMapProps) {
  const { theme, isDark } = useTheme();
  const webViewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [interactivePan, setInteractivePan] = useState(false);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

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

  // 4.5-second readiness watchdog so offline devices never stay stuck on an infinite spinner (MOB-5, UX-8)
  useEffect(() => {
    if (offlineMode || !loading) return;
    const timer = setTimeout(() => {
      setLoading((stillLoading) => {
        if (stillLoading) {
          setOfflineMode(true);
        }
        return false;
      });
    }, 4500);
    return () => clearTimeout(timer);
  }, [loading, offlineMode, reloadKey]);

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
          <script
            src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            onerror="window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'offline' }))"
          ></script>
          <script>
            (function() {
              if (typeof L === 'undefined') {
                window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'offline' }));
                return;
              }
              const stages = ${stagesJson};
              if (!stages || stages.length === 0) return;

              const firstStage = stages[0];
              const map = L.map('map', {
                center: [firstStage.lat, firstStage.lng],
                zoom: 13,
                zoomControl: true,
                dragging: ${interactivePan ? "true" : "false"},
                attributionControl: false
              });
              map.zoomControl.setPosition('topright');

              const tileLayer = L.tileLayer('${tileUrl}', {
                maxZoom: 19
              }).addTo(map);

              let tileErrors = 0;
              tileLayer.on('tileerror', function() {
                tileErrors++;
                if (tileErrors >= 4) {
                  window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'offline' }));
                }
              });

              const latLngs = stages.map(s => [s.lat, s.lng]);
              L.polyline(latLngs, {
                color: '${polylineColor}',
                weight: 5,
                opacity: 0.9,
                dashArray: '8, 6',
                lineCap: 'round'
              }).addTo(map);

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
                  '<div class="popup-sub">' + (isFirst ? 'Departure Terminus' : (isLast ? 'Destination Terminus' : 'Waypoint Stage')) + '</div>' +
                  '<div class="popup-sub" style="font-size: 10px; margin-top: 2px;">Route ${routeNumber} • ${routeName}</div>';

                const marker = L.marker([stage.lat, stage.lng], { icon: customIcon })
                  .addTo(map)
                  .bindPopup(popupHtml);

                marker.on('click', function() {
                  window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'stage',
                    stage: stage
                  }));
                });
              });

              const bounds = L.latLngBounds(latLngs);
              map.fitBounds(bounds, { padding: [35, 35] });

              window.__fitRouteBounds = function() {
                map.fitBounds(bounds, { padding: [35, 35] });
              };

              window.__setMapDragging = function(enabled) {
                if (enabled) map.dragging.enable();
                else map.dragging.disable();
              };

              window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ready' }));
            })();
          </script>
        </body>
      </html>
    `;
  }, [safeStages, routeName, routeNumber, isDark, interactivePan]);

  if (safeStages.length === 0) {
    return (
      <View
        style={[
          styles.emptyContainer,
          { height, backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Ionicons name="map-outline" size={32} color={theme.textMuted} />
        <Text style={[styles.emptyText, { color: theme.textMuted }]}>
          No GPS stage coordinates available for this route
        </Text>
      </View>
    );
  }

  // Offline Linear Stage Corridor Schematic Fallback (MOB-5, UX-8)
  if (offlineMode) {
    return (
      <View
        style={[
          styles.offlineSchematicCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <View style={styles.offlineHeaderRow}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
            <View
              style={[
                styles.offlineBadgeIcon,
                { backgroundColor: `${theme.gold}20` },
              ]}
            >
              <Ionicons name="git-commit-outline" size={16} color={theme.gold} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.offlineTitle, { color: theme.textPrimary }]}>
                Offline Route Corridor Schematic
              </Text>
              <Text style={[styles.offlineSub, { color: theme.textMuted }]}>
                Route {routeNumber} · {safeStages.length} ordered stages (Offline Ready)
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setOfflineMode(false);
              setLoading(true);
              setReloadKey((k) => k + 1);
            }}
            accessibilityRole="button"
            accessibilityLabel="Retry loading online map"
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle([
              styles.retryMapBtn,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.border,
              },
            ])}
          >
            <Ionicons name="refresh" size={13} color={theme.gold} />
            <Text style={[styles.retryMapBtnText, { color: theme.gold }]}>
              Live Map
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.schematicScroll}
          bounces={true}
          alwaysBounceHorizontal={true}
          overScrollMode="always"
        >
          {safeStages.map((stage, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === safeStages.length - 1;
            const nodeColor = isFirst
              ? theme.kenyaGreenLight
              : isLast
              ? theme.kenyaRedLight
              : theme.gold;
            const active = selectedStage?.order === stage.order;

            return (
              <View key={`${stage.order}-${idx}`} style={styles.schematicStepWrap}>
                <Pressable
                  onPress={() => {
                    triggerHaptic(6);
                    setSelectedStage(stage);
                  }}
                  style={pressableStyle([
                    styles.schematicNodeCard,
                    {
                      backgroundColor: active
                        ? theme.primaryContainer
                        : theme.surfaceContainerLow,
                      borderColor: active ? nodeColor : theme.border,
                    },
                  ])}
                >
                  <View
                    style={[
                      styles.schematicOrderCircle,
                      { backgroundColor: nodeColor },
                    ]}
                  >
                    <Text style={styles.schematicOrderText}>
                      {stage.order || idx + 1}
                    </Text>
                  </View>
                  <Text
                    style={[styles.schematicStageName, { color: theme.textPrimary }]}
                    numberOfLines={2}
                  >
                    {stage.name}
                  </Text>
                  <Text style={[styles.schematicCoords, { color: theme.textMuted }]}>
                    {isFirst ? "Start" : isLast ? "Terminus" : `Stop #${idx + 1}`}
                  </Text>
                </Pressable>
                {!isLast && (
                  <View style={styles.schematicArrowWrap}>
                    <View
                      style={[
                        styles.schematicDash,
                        { backgroundColor: theme.gold },
                      ]}
                    />
                    <Ionicons
                      name="chevron-forward"
                      size={12}
                      color={theme.gold}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={[styles.container, { height, borderColor: theme.border }]}>
      <WebView
        key={`matatu-map-${reloadKey}`}
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setOfflineMode(true);
        }}
        onHttpError={() => {
          setLoading(false);
          setOfflineMode(true);
        }}
        onMessage={(event) => {
          try {
            const payload = JSON.parse(event.nativeEvent.data);
            if (payload?.type === "ready") {
              setLoading(false);
            } else if (payload?.type === "offline") {
              setLoading(false);
              setOfflineMode(true);
            } else if (payload?.type === "stage" && payload.stage) {
              triggerHaptic(6);
              setSelectedStage(payload.stage);
            }
          } catch {
            // Ignore malformed messages
          }
        }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={interactivePan}
        nestedScrollEnabled={interactivePan}
      />

      {loading && (
        <View
          style={[styles.loadingOverlay, { backgroundColor: theme.bgCard }]}
        >
          <ActivityIndicator size="small" color={theme.gold} />
          <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
            Loading interactive route map...
          </Text>
        </View>
      )}

      {/* Top-Left Map Controls: Pan Lock/Unlock + Fit Route + Schematic Toggle (UX-8) */}
      <View style={styles.topControlsRow}>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            const next = !interactivePan;
            setInteractivePan(next);
            webViewRef.current?.injectJavaScript(
              `window.__setMapDragging && window.__setMapDragging(${next}); true;`
            );
          }}
          accessibilityRole="button"
          accessibilityLabel={
            interactivePan ? "Lock map panning" : "Unlock map panning"
          }
          style={pressableStyle([
            styles.mapControlPill,
            {
              backgroundColor: interactivePan
                ? theme.gold
                : isDark
                ? "rgba(23, 20, 17, 0.92)"
                : "rgba(255, 255, 255, 0.94)",
              borderColor: interactivePan ? theme.gold : theme.border,
            },
          ])}
        >
          <Ionicons
            name={interactivePan ? "move" : "hand-left-outline"}
            size={13}
            color={interactivePan ? theme.kenyaBlack : theme.gold}
          />
          <Text
            style={[
              styles.mapControlText,
              { color: interactivePan ? theme.kenyaBlack : theme.textPrimary },
            ]}
          >
            {interactivePan ? "Pan Unlocked" : "Tap to Pan Map"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setSelectedStage(null);
            webViewRef.current?.injectJavaScript(
              `window.__fitRouteBounds && window.__fitRouteBounds(); true;`
            );
          }}
          accessibilityRole="button"
          accessibilityLabel="Recenter map to fit full route"
          style={pressableStyle([
            styles.mapControlPill,
            {
              backgroundColor: isDark
                ? "rgba(23, 20, 17, 0.92)"
                : "rgba(255, 255, 255, 0.94)",
              borderColor: theme.border,
            },
          ])}
        >
          <Ionicons name="locate-outline" size={13} color={theme.gold} />
          <Text style={[styles.mapControlText, { color: theme.textPrimary }]}>
            Fit Route
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setOfflineMode(true);
          }}
          accessibilityRole="button"
          accessibilityLabel="Switch to linear stage schematic"
          style={pressableStyle([
            styles.mapControlPill,
            {
              backgroundColor: isDark
                ? "rgba(23, 20, 17, 0.92)"
                : "rgba(255, 255, 255, 0.94)",
              borderColor: theme.border,
            },
          ])}
        >
          <Ionicons name="git-commit-outline" size={13} color={theme.sky} />
          <Text style={[styles.mapControlText, { color: theme.textPrimary }]}>
            Schematic
          </Text>
        </Pressable>
      </View>

      {/* Selected Stage Pill or Floating Map Legend */}
      {selectedStage ? (
        <View
          style={[
            styles.selectedStageBox,
            {
              backgroundColor: isDark
                ? "rgba(23, 20, 17, 0.95)"
                : "rgba(255, 255, 255, 0.96)",
              borderColor: theme.gold,
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.selectedStageTitle, { color: theme.gold }]}>
              Stage #{selectedStage.order}: {selectedStage.name}
            </Text>
            <Text style={[styles.selectedStageSub, { color: theme.textSecondary }]}>
              GPS: {selectedStage.lat.toFixed(4)}, {selectedStage.lng.toFixed(4)}
            </Text>
          </View>
          <Pressable
            onPress={() => setSelectedStage(null)}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Dismiss selected stage info"
          >
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        </View>
      ) : (
        <View
          style={[
            styles.legendBox,
            {
              backgroundColor: isDark
                ? "rgba(23, 20, 17, 0.92)"
                : "rgba(255, 255, 255, 0.94)",
              borderColor: theme.border,
            },
          ]}
        >
          <View style={styles.legendRow}>
            <View
              style={[styles.legendDot, { backgroundColor: theme.kenyaGreen }]}
            />
            <Text style={[styles.legendText, { color: theme.textPrimary }]}>
              Start (1)
            </Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: theme.gold }]} />
            <Text style={[styles.legendText, { color: theme.textPrimary }]}>
              Waypoint
            </Text>
          </View>
          <View style={styles.legendRow}>
            <View
              style={[styles.legendDot, { backgroundColor: theme.kenyaRed }]}
            />
            <Text style={[styles.legendText, { color: theme.textPrimary }]}>
              End ({safeStages.length})
            </Text>
          </View>
        </View>
      )}
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
    fontFamily: "Inter_600SemiBold",
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
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  topControlsRow: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 48,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    zIndex: 5,
  },
  mapControlPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    elevation: 3,
  },
  mapControlText: {
    fontSize: 10.5,
    fontFamily: "Outfit_700Bold",
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
    fontFamily: "Outfit_700Bold",
  },
  selectedStageBox: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    elevation: 4,
  },
  selectedStageTitle: {
    fontSize: 12.5,
    fontFamily: "Outfit_700Bold",
  },
  selectedStageSub: {
    fontSize: 10.5,
    fontFamily: "Inter_400Regular",
    marginTop: 1,
  },
  offlineSchematicCard: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  offlineHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  offlineBadgeIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  offlineTitle: {
    fontSize: 13.5,
    fontFamily: "Outfit_700Bold",
  },
  offlineSub: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
  },
  retryMapBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  retryMapBtnText: {
    fontSize: 11,
    fontFamily: "Outfit_700Bold",
  },
  schematicScroll: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  schematicStepWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  schematicNodeCard: {
    width: 118,
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    gap: 5,
  },
  schematicOrderCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  schematicOrderText: {
    fontSize: 11,
    fontFamily: "Outfit_800ExtraBold",
    color: "#1A1108",
  },
  schematicStageName: {
    fontSize: 11.5,
    fontFamily: "Outfit_700Bold",
    textAlign: "center",
    minHeight: 30,
  },
  schematicCoords: {
    fontSize: 9.5,
    fontFamily: "Inter_500Medium",
  },
  schematicArrowWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  schematicDash: {
    width: 12,
    height: 2,
    borderRadius: 1,
  },
});
