"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { escapeHtml } from "@/lib/markdown";

interface Stage {
  name: string;
  lat: number;
  lng: number;
  order: number;
}

interface MatatuMapProps {
  stages: Stage[];
  routeName: string;
  routeNumber: string;
  activeStageOrder?: number | null;
  onSelectStage?: (order: number) => void;
}

export default function MatatuMap({
  stages,
  routeName,
  routeNumber,
  activeStageOrder,
  onSelectStage,
}: MatatuMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const markersByOrderRef = useRef<Map<number, { openPopup: () => void }>>(new Map());
  const onSelectStageRef = useRef(onSelectStage);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    onSelectStageRef.current = onSelectStage;
  }, [onSelectStage]);

  // Defer Leaflet bundle import until the map container approaches the viewport
  useEffect(() => {
    if (isVisible) return;
    const container = mapContainerRef.current;
    if (typeof window === "undefined" || !container) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let cancelled = false;
    const container = mapContainerRef.current;
    if (typeof window === "undefined" || !container || stages.length === 0) return;

    const markersMap = markersByOrderRef.current;
    markersMap.clear();

    // Dynamically import Leaflet on client side
    import("leaflet").then((L) => {
      if (cancelled || !container) return;

      try {
        // Clean up previous map instance if it exists
        if (mapInstanceRef.current) {
          try {
            (mapInstanceRef.current as { remove: () => void }).remove();
          } catch (e) {
            console.warn("Leaflet remove error:", e);
          }
          mapInstanceRef.current = null;
        }

        // Reset container Leaflet ID if present to prevent 'already initialized' errors
        if ((container as unknown as { _leaflet_id?: number | null })._leaflet_id) {
          (container as unknown as { _leaflet_id?: number | null })._leaflet_id = null;
        }

        // Fix Leaflet marker icons default path issue in bundlers
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        const firstStage = stages[0];
        const bounds = L.latLngBounds(stages.map((s) => [s.lat, s.lng]));

        const map = L.map(container, {
          center: [firstStage.lat, firstStage.lng],
          zoom: 12,
          zoomControl: true,
        });

        mapInstanceRef.current = map;

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 19,
          }
        ).addTo(map);

        const latLngs = stages.map((s) => [s.lat, s.lng] as [number, number]);
        L.polyline(latLngs, {
          color: "#C8961E",
          weight: 5,
          opacity: 0.85,
          dashArray: "8, 6",
          lineCap: "round",
        }).addTo(map);

        const safeRouteNumber = escapeHtml(String(routeNumber || ""));
        const safeRouteName = escapeHtml(String(routeName || ""));

        stages.forEach((stage, idx) => {
          const isTerminusA = idx === 0;
          const isTerminusB = idx === stages.length - 1;
          const safeOrder = Number(stage.order) || idx + 1;
          const safeStageName = escapeHtml(String(stage.name || ""));

          const customMarkerHtml = `
            <div style="
              background-color: ${isTerminusA ? "#2FA463" : isTerminusB ? "#BE2126" : "#C8961E"};
              color: #000;
              font-weight: 800;
              font-size: 11px;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid #fff;
              box-shadow: 0 4px 10px rgba(0,0,0,0.4);
              font-family: sans-serif;
            ">
              ${safeOrder}
            </div>
          `;

          const customIcon = L.divIcon({
            html: customMarkerHtml,
            className: "custom-stage-marker",
            iconSize: [26, 26],
            iconAnchor: [13, 13],
          });

          const popupContent = `
            <div style="font-family: sans-serif; font-size: 12px; color: #111;">
              <strong style="color: #BE2126;">Stage ${safeOrder}: ${safeStageName}</strong><br/>
              <span style="font-size: 11px; color: #555;">${isTerminusA ? "Start Terminus" : isTerminusB ? "End Terminus" : "Waypoint Stage"}</span><br/>
              <span style="font-size: 10px; color: #888;">Route ${safeRouteNumber} • ${safeRouteName}</span>
            </div>
          `;

          const marker = L.marker([stage.lat, stage.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent);

          marker.on("click", () => {
            onSelectStageRef.current?.(stage.order);
          });

          markersMap.set(stage.order, marker);
        });

        map.fitBounds(bounds, { padding: [40, 40] });
      } catch (err) {
        console.error("Leaflet map initialization error:", err);
      }
    });

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isVisible, stages, routeName, routeNumber]);

  // Pan to activeStageOrder when a user clicks a stage in the sidebar timeline
  useEffect(() => {
    if (!activeStageOrder || !mapInstanceRef.current) return;
    const stage = stages.find((s) => s.order === activeStageOrder);
    if (!stage) return;
    try {
      const map = mapInstanceRef.current as {
        flyTo: (latlng: [number, number], zoom: number, opts?: { duration?: number }) => void;
      };
      map.flyTo([stage.lat, stage.lng], 15, { duration: 0.6 });
      const marker = markersByOrderRef.current.get(activeStageOrder);
      marker?.openPopup();
    } catch {
      // Ignore if map not ready
    }
  }, [activeStageOrder, stages]);

  return (
    <div className="isolate relative z-10 w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-border shadow-lg">
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Map Overlay Legend */}
      <div className="absolute bottom-3 left-3 z-[400] bg-bg-card sm:bg-bg-card/90 sm:backdrop-blur-md border border-border rounded-lg p-2.5 shadow-xl text-xs space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-kenya-green border border-white" />
          <span className="text-[0.65rem] text-text-primary">Start Terminus (1)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gold border border-white" />
          <span className="text-[0.65rem] text-text-primary">Intermediate Stage</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-kenya-red border border-white" />
          <span className="text-[0.65rem] text-text-primary">End Terminus ({stages.length})</span>
        </div>
      </div>
    </div>
  );
}
