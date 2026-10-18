"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navigation, ExternalLink, Car, Clock } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { locationData } from "@/data/location";
import { TbdBadge } from "@/components/ui/TbdBadge";

// Dynamically import Leaflet Map to avoid SSR window errors
const SchemeMap = dynamic(
  () => import("@/components/map/SchemeMap").then((mod) => mod.SchemeMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-[#EFE6D5] rounded-sm flex items-center justify-center border-2 border-[#D9C3A0] text-[#8F6A1E] font-mono text-xs">
        Loading map…
      </div>
    ),
  }
);

export default function LocationPage() {
  const { t, isUrdu } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Heritage", "Transport", "Education", "Civic"];

  const filteredLandmarks = locationData.landmarks.filter(
    (lm) => selectedCategory === "All" || lm.category === selectedCategory
  );

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "محلِ وقوع اور رسائی" : "Regional Connectivity"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {t?.location?.heading || (isUrdu ? "پرائم لوکیشن اور رسائی" : "Prime Location & Strategic Connectivity")}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {t.location.subheading}
        </p>


      </div>

      {/* ── LEAFLET MAP ─────────────────────────────────────────── */}
      <div className="mb-16">
        <SchemeMap />

        {/* Info Strip Below Map */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8F6A1E] font-semibold block mb-1">
              {isUrdu ? "مقام" : "Scheme Location"}
            </span>
            <p className="font-serif text-sm font-bold text-[#1F1B16]">
              Taxila Gardens Housing Scheme
            </p>
            <p className="text-xs text-[#5C5346] mt-0.5">
              {isUrdu
                ? "ٹیکسلا، خانپور، ہری پور"
                : "Taxila, Khanpur, Haripur"}
            </p>
          </div>
          <div className="p-4 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8F6A1E] font-semibold block mb-1">
              {isUrdu ? "جی پی ایس کوآرڈینیٹس" : "GPS Coordinates"}
            </span>
            <p className="font-mono text-sm font-bold text-[#1F1B16]">
              {locationData.schemeCoordinates.lat.toFixed(4)}° N,{" "}
              {locationData.schemeCoordinates.lng.toFixed(4)}° E
            </p>
            <p className="text-xs text-[#5C5346] mt-0.5">
              {isUrdu ? "ٹیکسلا  " : "Taxila"}
            </p>
          </div>
          <div className="p-4 bg-[#B5573B] border border-[#913E26] rounded-sm flex flex-col justify-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#FAF6EE]/70 font-semibold block">
              {isUrdu ? "راستہ حاصل کریں" : "Open in Google Maps"}
            </span>
            <a
              href={locationData.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:underline"
            >
              <Navigation className="w-4 h-4 flex-shrink-0" />
              <span>
                {isUrdu ? "گوگل میپس پر کھولیں" : "Get Directions"}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}
