"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { PlotCategory, PlotItem } from "@/data/plots";
import { MuseumCard } from "../ui/MuseumCard";

interface PlotCardProps {
  category: PlotCategory;
  onInquire: (categoryName: string) => void;
}

export function PlotCategoryCard({ category, onInquire }: PlotCardProps) {
  const { isUrdu } = useLanguage();

  return (
    <MuseumCard

    >
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-serif text-2xl font-bold text-[#1F1B16]">
            {isUrdu ? category.nameUrdu : category.marketName || category.name}
          </h3>
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#D9C3A0]/40 text-[#8F6A1E] border border-[#D9C3A0]">
            {category.dimensions}
          </span>
        </div>

        <p className="text-xs text-[#5C5346] leading-relaxed mb-4">
          {isUrdu ? category.descriptionUr : category.descriptionEn}
        </p>

        {/* Metric Specifications Placard */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-[#EFE6D5]/60 rounded-sm border border-[#D9C3A0] text-center mb-3">
          <div>
            <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "مرلہ (225 sq ft)" : "Marla"}</p>
            <p className="font-serif font-bold text-sm text-[#1F1B16]">{category.marla}</p>
          </div>
          <div className="border-x border-[#D9C3A0]">
            <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "کنال" : "Kanal"}</p>
            <p className="font-serif font-bold text-sm text-[#1F1B16]">{category.kanal}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "مربع فٹ" : "Sq. Ft."}</p>
            <p className="font-mono font-bold text-xs text-[#1F1B16]">{category.sqFt.toLocaleString()}</p>
          </div>
        </div>

        {/* Official Dimension Details */}
        <div className="p-2.5 bg-[#FAF1D9] border border-[#D9C3A0]/70 rounded-sm mb-4 text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "رقبہ مرلہ:" : "Area in Marlas:"}</span>
            <span className="font-medium text-[#1F1B16]">{category.marlaDetail}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "رقبہ کنال:" : "Area in Kanals:"}</span>
            <span className="font-mono font-medium text-[#1F1B16]">{category.kanalDetail}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "کل رقبہ:" : "Total Area:"}</span>
            <span className="font-mono font-medium text-[#1F1B16]">{category.totalAreaDisplay}</span>
          </div>
        </div>

        {/* Feature bullets */}
        <ul className="space-y-1.5 mb-5 text-xs text-[#2E2922]">
          {category.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D]" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-[#D9C3A0]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono text-[#5C5346] uppercase">
            {isUrdu ? "قیمت:" : "Price:"}
          </span>
          <span className="font-mono text-xs font-semibold text-[#B5573B]">
            {isUrdu ? "قیمت بذریعہ انکوائری" : "Price on Inquiry"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onInquire(category.name)}
          className="w-full py-2.5 px-4 rounded-sm bg-[#B5573B] text-white font-medium hover:bg-[#913E26] transition-colors text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{isUrdu ? "معلومات حاصل کریں" : `Inquire: ${category.marketName || category.name}`}</span>
        </button>
      </div>
    </MuseumCard>
  );
}

interface PlotItemCardProps {
  plot: PlotItem;
  onInquire: (plotNumber: string, category: string) => void;
}

export function PlotInventoryCard({ plot, onInquire }: PlotItemCardProps) {
  const { isUrdu } = useLanguage();

  return (
    <div className="p-4 rounded-sm border border-[#D9C3A0] bg-[#FAF6EE] shadow-sm hover:border-[#B8892D] transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="font-mono text-xs text-[#8F6A1E] uppercase tracking-wider">
              {plot.block}
            </span>
            <h4 className="font-serif text-lg font-bold text-[#1F1B16]">
              {plot.marketName || plot.category}
            </h4>
          </div>
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#FAF1D9] text-[#8F6A1E] border border-[#D9C3A0]">
            {plot.dimensions}
          </span>
        </div>

        <div className="space-y-1.5 text-xs py-2 my-2 border-y border-[#D9C3A0]/60">
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "کل رقبہ:" : "Total Area:"}</span>
            <strong className="font-mono text-[#1F1B16]">{plot.totalAreaDisplay || `${plot.areaSqFt} sq ft`}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "رقبہ مرلہ:" : "Area in Marlas:"}</span>
            <strong className="text-[#1F1B16]">{plot.areaMarla}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5346]">{isUrdu ? "رقبہ کنال:" : "Area in Kanals:"}</span>
            <strong className="font-mono text-[#1F1B16]">{plot.areaKanal}</strong>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {plot.features.map((f, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#D9C3A0]/30 text-[#1F1B16]"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#D9C3A0] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#5C5346]">{isUrdu ? "قیمت:" : "Price:"}</span>
          <span className="font-semibold text-[#B5573B]">
            {isUrdu ? "قیمت بذریعہ انکوائری" : "Price on Inquiry"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onInquire(plot.plotNumber || plot.id, plot.category)}
          className="w-full py-2 rounded-sm bg-[#B5573B] hover:bg-[#913E26] text-white font-medium text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{isUrdu ? "اس پلاٹ کی انکوائری" : "Inquire This Plot"}</span>
        </button>
      </div>
    </div>
  );
}
