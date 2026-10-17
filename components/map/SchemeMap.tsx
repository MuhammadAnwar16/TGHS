"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navigation, MapPin, ExternalLink, Compass } from "lucide-react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { useLanguage } from "../language/LanguageProvider";
import { locationData, Landmark } from "@/data/location";
import "leaflet/dist/leaflet.css";

export function SchemeMap() {
  const { isUrdu } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<string, LeafletMarker>>({});
  const [activeLandmark, setActiveLandmark] = useState<string>("scheme");

  useEffect(() => {
    async function initMap() {
      if (typeof window === "undefined" || !mapContainerRef.current) return;
      if (mapInstanceRef.current) return; // already initialized

      const L = (await import("leaflet")).default;

      // Ensure default icon paths don't fail
      delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const { lat, lng } = locationData.schemeCoordinates;

      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 12,
        scrollWheelZoom: false,
      });

      // Warm OpenStreetMap CartoDB Positron / OSM standard tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      mapInstanceRef.current = map;

      // Custom Scheme Marker (Gold & Terracotta Gandhara Emblem)
      const schemeHtml = `
        <div style="background-color: #B5573B; color: #FAF6EE; border: 2px solid #B8892D; padding: 6px 10px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-weight: bold; font-size: 11px; white-space: nowrap; display: flex; align-items: center; gap: 5px;">
          <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#B8892D;"></span>
          TAXILA GARDENS
        </div>
      `;

      const schemeIcon = L.divIcon({
        className: "custom-scheme-marker",
        html: schemeHtml,
        iconSize: [140, 32],
        iconAnchor: [70, 16],
      });

      const schemeMarker = L.marker([lat, lng], { icon: schemeIcon })
        .addTo(map)
        .bindPopup(
          `<strong>TAXILA GARDENS HOUSING SCHEME</strong><br/><span style="font-size:11px; color:#555;">Planned Master Community • Taxila</span>`
        )
        .openPopup();

      markersRef.current["scheme"] = schemeMarker;

      // Add landmark markers
      locationData.landmarks.forEach((lm) => {
        const markerColor =
          lm.category === "Heritage"
            ? "#3F5A3C"
            : lm.category === "Transport"
              ? "#1F1B16"
              : "#B8892D";

        const landmarkHtml = `
          <div style="background-color: ${markerColor}; color: #FAF6EE; border: 1.5px solid #FAF6EE; padding: 4px 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.25); font-size: 10px; white-space: nowrap;">
            ${lm.nameEn}
          </div>
        `;

        const icon = L.divIcon({
          className: "custom-landmark-marker",
          html: landmarkHtml,
          iconSize: [110, 26],
          iconAnchor: [55, 13],
        });

        const marker = L.marker([lm.lat, lm.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<strong>${lm.nameEn}</strong><br/>
             <span style="font-size:11px;">${lm.distanceKm} (${lm.driveTimeMin})</span><br/>
             <span style="font-size:10px; color:#666;">${lm.descriptionEn}</span>`
          );

        markersRef.current[lm.id] = marker;
      });
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const panToLandmark = (lm: Landmark | "scheme") => {
    if (!mapInstanceRef.current) return;

    if (lm === "scheme") {
      const { lat, lng } = locationData.schemeCoordinates;
      mapInstanceRef.current.setView([lat, lng], 13, { animate: true });
      markersRef.current["scheme"]?.openPopup();
      setActiveLandmark("scheme");
    } else {
      mapInstanceRef.current.setView([lm.lat, lm.lng], 14, { animate: true });
      markersRef.current[lm.id]?.openPopup();
      setActiveLandmark(lm.id);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Distance Chips Matrix (Clickable to Pan Map) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#8F6A1E] font-semibold py-1">
          {isUrdu ? "اہم مقامات فاصلے:" : "Quick Pan:"}
        </span>

        <button
          type="button"
          onClick={() => panToLandmark("scheme")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all border ${activeLandmark === "scheme"
            ? "bg-[#B5573B] text-white border-[#B5573B] shadow-sm"
            : "bg-[#FAF6EE] text-[#1F1B16] border-[#D9C3A0] hover:bg-[#D9C3A0]/30"
            }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>{isUrdu ? "ٹیکسلا گارڈنز (مرکز)" : "Taxila Gardens (Center)"}</span>
        </button>

        {locationData.landmarks.map((lm) => {
          const isActive = activeLandmark === lm.id;
          return (
            <button
              key={lm.id}
              type="button"
              onClick={() => panToLandmark(lm)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all border ${isActive
                ? "bg-[#3F5A3C] text-white border-[#3F5A3C] shadow-sm"
                : "bg-[#FAF6EE] text-[#1F1B16] border-[#D9C3A0] hover:bg-[#D9C3A0]/30"
                }`}
            >
              <MapPin className="w-3 h-3 text-[#B8892D]" />
              <span>{isUrdu ? lm.nameUr : lm.nameEn}</span>
              <span className="font-mono text-[10px] opacity-80">({lm.distanceKm})</span>
            </button>
          );
        })}
      </div>

      {/* Map Viewport Container */}
      <div className="relative w-full h-[450px] sm:h-[550px] bg-[#EFE6D5] rounded-sm border-2 border-[#D9C3A0] overflow-hidden shadow-md">
        <div ref={mapContainerRef} className="w-full h-full" />


      </div>
    </div>
  );
}
