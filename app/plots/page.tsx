"use client";

import React, { useState } from "react";
import { Filter, LayoutGrid, Table as TableIcon, Info } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { plotCategories, samplePlotInventory } from "@/data/plots";
import { PlotCategoryCard, PlotInventoryCard } from "@/components/plots/PlotCard";
import { PlotTable } from "@/components/plots/PlotTable";
import { InquiryModal } from "@/components/ui/InquiryModal";

export default function PlotsPage() {
  const { t, isUrdu } = useLanguage();
  const [viewMode, setViewMode] = useState<"cards" | "table">("table");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [targetPlotNumber, setTargetPlotNumber] = useState<string>("");
  const [targetPlotCategory, setTargetPlotCategory] = useState<string>("5 Marla");

  const handleInquireCategory = (catName: string) => {
    setTargetPlotCategory(catName);
    setTargetPlotNumber("");
    setInquiryModalOpen(true);
  };

  const handleInquirePlot = (plotNumber: string, catName: string) => {
    setTargetPlotNumber(plotNumber);
    setTargetPlotCategory(catName);
    setInquiryModalOpen(true);
  };

  // Filtered inventory
  const filteredInventory = samplePlotInventory.filter((plot) => {
    const matchesCat = selectedCategory === "All" || plot.category === selectedCategory;
    return matchesCat;
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "پلاٹ انوینٹری و پیمائشیں" : "Inventory & Specifications"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {t?.plots?.heading || (isUrdu ? "پلاٹ کیٹیگریز اور انوینٹری" : "Plot Categories & Inventory")}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {t.plots.subheading}
        </p>

        {/* Pricing Policy Banner */}
        <div className="mt-4 p-3 bg-[#FAF1D9] border border-[#D9C3A0] rounded-sm flex items-start gap-2.5 text-xs text-[#5C5346]">
          <Info className="w-4 h-4 text-[#B8892D] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#1F1B16]">
              {isUrdu ? "قیمتوں کی پالیسی:" : "Pricing Policy:"}
            </span>{" "}
            {isUrdu
              ? "تمام پلاٹس کے لیے 'قیمت بذریعہ انکوائری' دستیاب ہے۔ سرکاری نرخ نامہ اور ادائیگی کے آسان پلان کے لیے سیلز آفس سے رابطہ کریں۔"
              : "All plot sizes are available with 'Price on Inquiry'. Official rate cards and flexible payment schedules are provided directly by our sales advisory desk."}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. MASTER PLOT CATEGORY EXHIBITION CARDS                 */}
      {/* ======================================================== */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-[#1F1B16] mb-6 flex items-center justify-between">
          <span>{isUrdu ? "پلاٹ سائز کیٹیگریز (تفصیلی جائزے)" : "Master Plot Categories"}</span>
          <span className="text-xs font-mono font-normal text-[#8F6A1E]">
            {plotCategories.length} {isUrdu ? "اقسام" : "Categories"}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plotCategories.map((cat) => (
            <PlotCategoryCard
              key={cat.id}
              category={cat}
              onInquire={handleInquireCategory}
            />
          ))}
        </div>
      </div>



      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultPlotNumber={targetPlotNumber}
        defaultPlotInterest={targetPlotCategory}
      />
    </div>
  );
}
