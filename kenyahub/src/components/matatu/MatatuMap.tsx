"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

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
}

export default function MatatuMap({ stages, routeName, routeNumber }: MatatuMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (typeof window === "undefined" || !container || stages.length === 0) return;

    // Dynamically import Leaflet on client side
    import("leaflet").then((L) => {
      if (!container) return;

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

        // Calculate bounds
        const bounds = L.latLngBounds(stages.map((s) => [s.lat, s.lng]));

        // Create map
        const map = L.map(container, {
          center: [firstStage.lat, firstStage.lng],
          zoom: 12,
          zoomControl: true,
        });

      mapInstanceRef.current = map;

      // Dark theme map tile layer (CartoDB Dark Matter or OpenStreetMap)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // Draw polyline connecting stages
      const latLngs = stages.map((s) => [s.lat, s.lng] as [number, number]);
      const polyline = L.polyline(latLngs, {
        color: "#C8961E", // KenyaHub gold
        weight: 5,
        opacity: 0.85,
        dashArray: "8, 6",
        lineCap: "round",
      }).addTo(map);

      // Add stage markers
      stages.forEach((stage, idx) => {
        const isTerminusA = idx === 0;
        const isTerminusB = idx === stages.length - 1;

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
            ${stage.order}
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
            <strong style="color: #BE2126;">Stage ${stage.order}: ${stage.name}</strong><br/>
            <span style="font-size: 11px; color: #555;">${isTerminusA ? "🏁 Start Terminus" : isTerminusB ? "🎯 End Terminus" : "🚏 Waypoint Stage"}</span><br/>
            <span style="font-size: 10px; color: #888;">Route ${routeNumber} • ${routeName}</span>
          </div>
        `;

        L.marker([stage.lat, stage.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(popupContent);
      });

      // Fit map to bounds with padding
      map.fitBounds(bounds, { padding: [40, 40] });
      } catch (err) {
        console.error("Leaflet map initialization error:", err);
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [stages, routeName, routeNumber]);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-border shadow-lg">
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Map Overlay Legend */}
      <div className="absolute bottom-3 left-3 z-[400] bg-bg-card/90 backdrop-blur-md border border-border rounded-lg p-2.5 shadow-xl text-xs space-y-1">
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
