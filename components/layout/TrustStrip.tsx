"use client";

import React from "react";
import { ShieldCheck, FileCheck, Layers, MapPin, AlertCircle } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { TbdBadge } from "../ui/TbdBadge";

export function TrustStrip() {
  const { isUrdu } = useLanguage();

  const stats = [
    {
      icon: ShieldCheck,
      iconColor: "text-[#3F5A3C]",
      labelEn: "Regulatory Approval",
      labelUr: "قانونی حیثیت",
      valueEn: "Under Process / [TBD]",
      valueUr: "متعلقہ اتھارٹی میں زیرِ کارروائی",
      sublabelEn: "Town Planning & NOC File",
      sublabelUr: "این او سی و لے آؤٹ پلان جانچ",
      isTbd: true,
    },
    {
      icon: FileCheck,
      iconColor: "text-[#B8892D]",
      labelEn: "Title & Land Scrutiny",
      labelUr: "اراضی و ریونیو تصدیق",
      valueEn: "Verified Freehold",
      valueUr: "شفاف ملکیتی ریکارڈ",
      sublabelEn: "Revenue Record In Order",
      sublabelUr: "پٹواری و تحصیل ریکارڈ چیک",
      isTbd: false,
    },
    {
      icon: MapPin,
      iconColor: "text-[#B5573B]",
      labelEn: "Heritage Proximity",
      labelUr: "تاریخی ورثہ زون",
      valueEn: "UNESCO Taxila",
      valueUr: "ٹیکسلا تاریخی علاقہ",
      sublabelEn: "Near Taxila Museum & Stupas",
      sublabelUr: "میوزیم و آثار کے قریب",
      isTbd: false,
    },
    {
      icon: Layers,
      iconColor: "text-[#8F6A1E]",
      labelEn: "Plot Categories",
      labelUr: "پلاٹوں کی کیٹیگریز",
      valueEn: "5M, 7M, 10M, 1K & Comm",
      valueUr: "۵، ۷، ۱۰ مرلہ، ۱ کنال و کمرشل",
      sublabelEn: "Planned Master Sectors",
      sublabelUr: "منظم سیکٹرز",
      isTbd: false,
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF6EE] border-2 border-[#D9C3A0] rounded-sm shadow-xl p-5 sm:p-7 backdrop-blur-md">
        {/* Subtle Placard Corner Accents */}
        <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#B8892D]" />
        <span className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-[#B8892D]" />
        <span className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-[#B8892D]" />
        <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#B8892D]" />

        {/* Top Notice Strip */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D9C3A0]/60 text-xs">
          <div className="flex items-center gap-2 text-[#5C5346]">
            <AlertCircle className="w-4 h-4 text-[#B8892D] shrink-0" />
            <span className="text-xs text-[#5C5346]">
              {isUrdu
                ? "ٹیکسلا گارڈنز ہاؤسنگ سکیم: تمام متعلقہ قانونی ریکارڈ اور ماسٹر پلان کی باقاعدہ جانچ پڑتال جاری ہے۔"
                : "Taxila Gardens Housing Scheme: All regulatory filings, surveys, and master planning in active municipal processing."}
            </span>
          </div>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-sm bg-[#FAF1D9]/40 border border-[#D9C3A0]/40 transition-transform hover:-translate-y-0.5"
              >
                <div className={`p-2.5 rounded-sm bg-white shadow-sm border border-[#D9C3A0]/50 shrink-0 ${stat.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#8F6A1E]">
                    {isUrdu ? stat.labelUr : stat.labelEn}
                  </p>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#1F1B16] leading-tight truncate mt-0.5">
                    {isUrdu ? stat.valueUr : stat.valueEn}
                  </p>
                  <p className="text-xs text-[#5C5346] mt-0.5 truncate">
                    {isUrdu ? stat.sublabelUr : stat.sublabelEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
