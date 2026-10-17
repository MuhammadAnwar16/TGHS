"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  Trees,
  ShieldCheck,
  Zap,
  ShoppingBag,
  GraduationCap,
  Activity,
  HeartPulse,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { amenitiesData } from "@/data/amenities";
import { MuseumCard } from "@/components/ui/MuseumCard";
import { TbdBadge } from "@/components/ui/TbdBadge";

export default function AmenitiesPage() {
  const { isUrdu } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark":
        return Landmark;
      case "Trees":
        return Trees;
      case "ShieldCheck":
        return ShieldCheck;
      case "Zap":
        return Zap;
      case "ShoppingBag":
        return ShoppingBag;
      case "GraduationCap":
        return GraduationCap;
      case "Activity":
        return Activity;
      case "HeartPulse":
        return HeartPulse;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "طرزِ زندگی و شہری سہولیات" : "Lifestyle & Amenities"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {isUrdu ? "سکون، تحفظ اور جدید سہولیات کا گہوارہ" : "Curated Amenities for Elevated Living"}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {isUrdu
            ? "ٹیکسلا گارڈنز میں ہر سہولت آپ کے خاندان کے روحانی، تفریحی اور معاشرتی تقاضوں کو مدنظر رکھ کر ترتیب دی گئی ہے۔"
            : "Every civic and communal amenity has been thoughtfully positioned within easy walking distance, respecting natural Margalla contours."}
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {amenitiesData.map((item) => {
          const Icon = getIcon(item.iconName);
          return (
            <MuseumCard
              key={item.id}
              exhibitNumber={item.category.toUpperCase()}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#1F1B16] text-[#B8892D] flex items-center justify-center border border-[#B8892D] mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#1F1B16]">
                    {isUrdu ? item.titleUr : item.titleEn}
                  </h3>
                </div>

                {item.isTbd && (
                  <div className="mb-2">
                    <TbdBadge size="sm" label="Proposed Master Facility" />
                  </div>
                )}

                <p className="text-xs text-[#5C5346] leading-relaxed">
                  {isUrdu ? item.descriptionUr : item.descriptionEn}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#D9C3A0]/60 flex items-center justify-between text-xs text-[#8F6A1E] font-mono">
                <span>{item.category}</span>
                <span className="text-[#3F5A3C] font-semibold">Planned Standard</span>
              </div>
            </MuseumCard>
          );
        })}
      </div>

      {/* Community Lifestyle Experience Banner */}
      <div className="p-8 sm:p-10 bg-[#1F1B16] text-[#FAF6EE] rounded-sm border-2 border-[#B8892D] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8892D]">
            {isUrdu ? "فیملی سائٹ وزٹ بک کریں" : "Experience the Landscape"}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {isUrdu ? "ٹیکسلا کے پرامن ماحول کا خود مشاہدہ کریں" : "Schedule a Guided Family Site Tour"}
          </h2>
          <p className="text-xs text-[#D9C3A0]">
            {isUrdu
              ? "ہمارے نمائندے آپ کو گرینڈ ایونیو، سینٹرل پارک اور مجوزہ جامع مسجد کے مقامات کا تفصیلی وزٹ کروائیں گے۔"
              : "Witness the clean mountain breeze, Margalla sightlines, and planned boulevards firsthand."}
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#B5573B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#913E26] transition-colors shrink-0 shadow-md"
        >
          <span>{isUrdu ? "سائٹ وزٹ کی درخواست دیں" : "Request Site Tour"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
