"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, Download, Info } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { samplePlotInventory, PlotItem } from "@/data/plots";
import { InquiryModal } from "../ui/InquiryModal";

export function MasterPlanViewer() {
  const { isUrdu } = useLanguage();
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedPlot, setSelectedPlot] = useState<PlotItem | null>(samplePlotInventory[0]);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#FAF6EE] border-2 border-[#D9C3A0] rounded-sm p-4 sm:p-6 shadow-lg">
      {/* Interactive Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Controls Bar */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-[#D9C3A0] text-xs">
          <div className="flex items-center gap-1.5 text-[#5C5346]">
            <Info className="w-4 h-4 text-[#B8892D]" />
            <span className="font-mono text-[11px]">
              {isUrdu
                ? "نقشے کو ماؤس کی مدد سے ڈریگ اور زوم کریں۔ کسی بھی سیکٹر یا پلاٹ کی تفصیلات دیکھنے کے لیے اس پر کلک کریں۔"
                : "Click and drag to pan. Use zoom buttons to inspect sector plots & road widths."}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1.5 rounded-sm bg-[#EFE6D5] hover:bg-[#B8892D] hover:text-white transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1.5 rounded-sm bg-[#EFE6D5] hover:bg-[#B8892D] hover:text-white transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 rounded-sm bg-[#EFE6D5] hover:bg-[#B8892D] hover:text-white transition-colors"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <a
              href="/images/approvals/approved-master-layout.jpg"
              download="Taxila-Gardens-Approved-Master-Plan.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-sm bg-[#3F5A3C] text-white hover:bg-[#2C4229] transition-colors font-medium text-xs ml-1"
              title="Download Approved Master Plan"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isUrdu ? "ڈاؤن لوڈ نقشہ" : "Plan (HD)"}</span>
            </a>
          </div>
        </div>

        {/* Canvas Viewport */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full h-[450px] sm:h-[550px] bg-[#EFE6D5]/60 rounded-sm overflow-hidden border border-[#D9C3A0] cursor-grab active:cursor-grabbing select-none"
        >
          <div
            className="w-full h-full transition-transform duration-75 origin-center flex items-center justify-center"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            }}
          >
            <div className="relative w-[1000px] h-[640px] shrink-0">
              <Image
                src="/images/approvals/approved-master-layout.jpg"
                alt="Taxila Gardens Approved Master Layout Plan"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Interactive Plot Selection Quick Overlay Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D9C3A0] rounded-sm text-xs">
            <span className="font-mono text-[#8F6A1E]">
              {isUrdu ? "فوری پلاٹ معائنہ کار:" : "Quick Selector:"}
            </span>
            <div className="flex gap-1.5 overflow-x-auto py-0.5">
              {samplePlotInventory.slice(0, 5).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlot(p)}
                  className={`px-2 py-0.5 rounded-sm font-mono text-[11px] border transition-colors shrink-0 ${
                    selectedPlot?.id === p.id
                      ? "bg-[#B5573B] text-white border-[#B5573B]"
                      : "bg-white border-[#D9C3A0] hover:bg-[#D9C3A0]/30 text-[#1F1B16]"
                  }`}
                >
                  {p.plotNumber} ({p.category})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legend Strip */}
        <div className="mt-4 pt-3 border-t border-[#D9C3A0] flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="font-mono uppercase tracking-wider text-[#8F6A1E] font-semibold">
            {isUrdu ? "ماسٹر پلان لیجنڈ:" : "Master Plan Legend:"}
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#EFE4D2] border border-[#B8892D]" />
              <span>{isUrdu ? "رہائشی سیکٹرز" : "Residential"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#C7674B]" />
              <span>{isUrdu ? "کمرشل بلیوارڈ" : "Commercial (100ft)"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#4E6E4B]" />
              <span>{isUrdu ? "گندھارا سینٹرل پارک" : "Green Theme Parks"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#B8892D]" />
              <span>{isUrdu ? "جامع مسجد" : "Jamia Mosque"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#3D352B]" />
              <span>{isUrdu ? "مین روڈ نیٹ ورک" : "Road Network"}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Side Inspector Drawer */}
      <div className="w-full lg:w-80 flex flex-col bg-[#FAF1D9]/50 border border-[#D9C3A0] rounded-sm p-4 sm:p-5">
        <div className="pb-3 mb-3 border-b border-[#D9C3A0]">
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#B8892D]">
            {isUrdu ? "منتخب پلاٹ کی تفصیلات" : "Sector Inspection Placard"}
          </span>
          <h3 className="font-serif text-xl font-bold text-[#1F1B16] mt-0.5">
            {selectedPlot ? selectedPlot.plotNumber : "A-01"}
          </h3>
          <p className="text-xs text-[#5C5346]">
            {selectedPlot ? selectedPlot.block : "Block A (Gandhara Boulevard)"}
          </p>
        </div>

        {selectedPlot ? (
          <div className="space-y-3.5 text-xs flex-1">
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "کیٹیگری" : "Category"}</span>
              <span className="font-semibold text-[#1F1B16]">{selectedPlot.category}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "کل رقبہ" : "Area in Sq. Ft."}</span>
              <span className="font-mono font-bold text-[#1F1B16]">{selectedPlot.areaSqFt} sq ft</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "مرلہ / کنال" : "Marla / Kanal"}</span>
              <span className="font-semibold text-[#1F1B16]">
                {selectedPlot.sizeMarla} Marla ({selectedPlot.sizeKanal} Kanal)
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "حیثیت" : "Status"}</span>
              <span
                className={`font-semibold px-2 py-0.5 rounded-sm ${
                  selectedPlot.status === "Available"
                    ? "bg-[#3F5A3C]/20 text-[#2C4229] border border-[#3F5A3C]/40"
                    : selectedPlot.status === "Booked"
                    ? "bg-[#B5573B]/20 text-[#913E26] border border-[#B5573B]/40"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {selectedPlot.status}
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "سڑک کی چوڑائی" : "Street Width"}</span>
              <span className="font-semibold text-[#1F1B16]">{selectedPlot.streetWidth}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "رخ / منظر" : "Facing"}</span>
              <span className="font-semibold text-[#1F1B16]">{selectedPlot.facing}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#D9C3A0]/40">
              <span className="text-[#5C5346]">{isUrdu ? "قیمت" : "Pricing Schedule"}</span>
              <span className="font-mono font-medium text-[#B5573B]">{selectedPlot.price}</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setInquiryModalOpen(true)}
                className="w-full py-2.5 rounded-sm bg-[#B5573B] text-white font-medium hover:bg-[#913E26] transition-colors shadow-sm"
              >
                {isUrdu ? "اس پلاٹ کی معلومات لیں" : `Inquire About ${selectedPlot.plotNumber}`}
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-xs text-[#8F6A1E]">
            {isUrdu ? "تفصیلات کے لیے کسی پلاٹ پر کلک کریں" : "Select any plot above to view specifications."}
          </div>
        )}

        {/* Road Widths Reference Note */}
        <div className="mt-4 pt-3 border-t border-[#D9C3A0] text-[11px] text-[#5C5346] space-y-1">
          <p className="font-semibold text-[#1F1B16]">
            {isUrdu ? "روڈ نیٹ ورک معیارات:" : "Master Plan Specifications:"}
          </p>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>100 ft Main Grand Avenue with green palm median</li>
            <li>80 ft &amp; 60 ft Primary Sector Boulevards</li>
            <li>35 ft – 40 ft Paved Internal Residential Streets</li>
          </ul>
        </div>
      </div>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultPlotNumber={selectedPlot?.plotNumber}
        defaultPlotInterest={selectedPlot?.category}
      />
    </div>
  );
}
