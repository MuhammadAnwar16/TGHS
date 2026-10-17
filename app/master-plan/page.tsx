"use client";

import React from "react";
import { Compass, Download, Layers, FileText } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { MasterPlanViewer } from "@/components/masterplan/MasterPlanViewer";
import { plottingSystemInfo } from "@/data/plots";
import { TbdBadge } from "@/components/ui/TbdBadge";

export default function MasterPlanPage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "ماسٹر لے آؤٹ و ٹاؤن پلاننگ" : "Architectural Layout & Master Plan"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {t?.masterPlan?.heading || (isUrdu ? "ماسٹر پلان اور ٹاؤن لے آؤٹ" : "Master Plan & Plotting System")}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {t.masterPlan.subheading}
        </p>
      </div>

      {/* Interactive Master Plan Viewer */}
      <div className="mb-16">
        <MasterPlanViewer />
      </div>

      {/* Plotting System & Urban Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t-2 border-[#D9C3A0]">
        {/* Road Widths & Arteries */}
        <div className="p-6 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-[#B8892D]" />
            <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
              {isUrdu ? "سڑکوں کی چوڑائی اور رسائی" : "Road Infrastructure"}
            </h3>
          </div>
          <p className="text-xs text-[#5C5346] mb-4">
            {isUrdu
              ? "سکیم کی تمام سڑکیں جدید اربن بائی لاز اور کشادہ ٹریفک کے تقاضوں کے عین مطابق ڈیزائن کی گئی ہیں۔"
              : "Generous rights-of-way designed to prevent bottlenecks and ensure pedestrian safety."}
          </p>

          <div className="space-y-3">
            {plottingSystemInfo.roadWidths.map((rd, i) => (
              <div key={i} className="p-3 bg-[#FAF1D9]/60 rounded-sm border border-[#D9C3A0]/60">
                <div className="flex items-center justify-between text-xs font-bold text-[#1F1B16]">
                  <span>{rd.type}</span>
                  <span className="font-mono text-[#B5573B]">{rd.width}</span>
                </div>
                <p className="text-[11px] text-[#5C5346] mt-1">{rd.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block Layout & Categories */}
        <div className="p-6 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-[#3F5A3C]" />
            <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
              {isUrdu ? "سیکٹرز اور بلاک کی تقسیم" : "Sector Partitioning"}
            </h3>
          </div>
          <p className="text-xs text-[#5C5346] mb-4">
            {isUrdu ? plottingSystemInfo.planningOverviewUr : plottingSystemInfo.planningOverviewEn}
          </p>

          <ul className="space-y-2 text-xs text-[#2E2922]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D] mt-1.5 shrink-0" />
              <span>
                <strong>Block A (Gandhara Boulevard):</strong> 1 Kanal &amp; 10 Marla premium estates facing the scenic Margalla foothills.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D] mt-1.5 shrink-0" />
              <span>
                <strong>Block B (Stupa Sector):</strong> 7 Marla executive homes adjacent to community parks and the Grand Jamia Mosque.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D] mt-1.5 shrink-0" />
              <span>
                <strong>Block C (Museum Enclave):</strong> 5 Marla modern homes planned for young families with dedicated play areas.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D] mt-1.5 shrink-0" />
              <span>
                <strong>Central Commercial Boulevard:</strong> 4 Marla commercial arcades fronting the 100ft Grand Entrance Avenue.
              </span>
            </li>
          </ul>
        </div>

        {/* Allotment & Replacement Documentation */}
        <div className="p-6 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-[#B5573B]" />
              <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                {isUrdu ? "بیلٹنگ و فائیل سسٹم" : "Balloting & Allotment"}
              </h3>
            </div>

            <div className="mb-4">
              <TbdBadge size="sm" label="Client Policy Pending" />
            </div>

            <p className="text-xs text-[#5C5346] leading-relaxed mb-4">
              {isUrdu ? plottingSystemInfo.paymentPlanNoteUr : plottingSystemInfo.paymentPlanNoteEn}
            </p>

            <div className="p-3 bg-[#EFE6D5] rounded-sm border border-[#D9C3A0] text-xs text-[#2E2922] space-y-1">
              <p className="font-semibold text-[#1F1B16]">
                {isUrdu ? "ماسٹر پلان تبدیل کرنے کی گائیڈ:" : "CAD Replacement Note:"}
              </p>
              <p className="text-[11px] text-[#5C5346]">
                The client can drop an updated SVG or high-res vector file into{" "}
                <code className="font-mono text-[10px] text-[#B5573B]">/public/images/master-plan-mock.svg</code>{" "}
                without altering code.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#D9C3A0]">
            <a
              href="/images/master-plan-mock.svg"
              download
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-sm bg-[#1F1B16] text-white hover:bg-[#342E25] transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5 text-[#B8892D]" />
              <span>{t.masterPlan.downloadPdf}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
