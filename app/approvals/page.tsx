"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Clock, Eye, FileText, Download, Building2 } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { approvalsData, ApprovalItem } from "@/data/approvals";
import { LightboxModal } from "@/components/ui/LightboxModal";

export default function ApprovalsPage() {
  const { t, isUrdu } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<ApprovalItem | null>(null);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "قانونی تصدیق و این او سی" : "Legal Framework & Official NOC"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {t?.approvals?.heading || (isUrdu ? "قانونی منظوریاں اور این او سی کی حیثیت" : "Regulatory Approvals & NOC Status")}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {isUrdu
            ? "تحصیل میونسپل ایڈمنسٹریشن (TMA) ہری پور کے مصدقہ سرکاری ریکارڈز اور منظور شدہ ماسٹر لے آؤٹ پلان کی مکمل تفصیلات۔"
            : "Complete documentation transparency with verified records from Tehsil Municipal Administration (TMA) Haripur, including the official NOC letter and approved 360.32 Kanal master layout."}
        </p>

        {/* Legal Transparency Commitment Callout */}
        <div className="mt-5 p-4 bg-[#FAF1D9] border-2 border-[#B8892D] rounded-sm text-xs leading-relaxed text-[#1F1B16]">
          <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#8F6A1E] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#B8892D]" />
            <span>{isUrdu ? "سرکاری دستاویزات کی قانونی شفافیت:" : "Verified Municipal Transparency:"}</span>
          </div>
          <p>{isUrdu ? approvalsData.disclaimerUr : approvalsData.disclaimerEn}</p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. OFFICIAL DOCUMENT SPECIMEN EXHIBITS                   */}
      {/* ======================================================== */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-[#1F1B16] mb-6 flex items-center justify-between">
          <span>{isUrdu ? "سرکاری دستاویزات اور منظور شدہ نقشہ جات" : "Official Sanction Documents"}</span>
          <span className="text-xs font-mono font-normal text-[#8F6A1E]">
            {approvalsData.approvalsList.length} {isUrdu ? "سرکاری اسناد" : "Official Records"}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {approvalsData.approvalsList.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF6EE] border-2 border-[#D9C3A0] rounded-sm p-6 shadow-sm flex flex-col justify-between hover:border-[#B8892D] transition-colors"
            >
              <div>
                {/* Authority & Status Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8F6A1E] font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{isUrdu ? item.authorityNameUrdu : item.authorityName}</span>
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-[#3F5A3C]/15 text-[#2C4229] border border-[#3F5A3C]/40">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1B16] mb-2 leading-snug">
                  {isUrdu ? item.certificateTitleUrdu : item.certificateTitle}
                </h3>

                {/* Key Spec Placard */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#EFE6D5]/60 rounded-sm border border-[#D9C3A0] text-xs mb-4">
                  <div>
                    <span className="text-[#5C5346] font-mono text-[10px] uppercase block">
                      {isUrdu ? "ریفرنس / لیٹر نمبر:" : "Reference / Letter No:"}
                    </span>
                    <strong className="font-mono text-[#1F1B16] text-xs">{item.referenceNumber}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C5346] font-mono text-[10px] uppercase block">
                      {isUrdu ? "تاریخ اجرا:" : "Sanction Date:"}
                    </span>
                    <strong className="text-[#1F1B16] text-xs">{item.approvalDate}</strong>
                  </div>
                </div>

                {/* Document Thumbnail Preview Container */}
                <div
                  onClick={() => setActiveDoc(item)}
                  className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#D9C3A0] bg-white cursor-pointer group mb-4 shadow-inner"
                >
                  <Image
                    src={item.documentUrl}
                    alt={item.certificateTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-sm bg-[#1F1B16]/90 text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4 text-[#B8892D]" />
                      <span>{isUrdu ? "مکمل دستاویز دیکھیں" : "Click to Inspect High-Res"}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#423A2F] leading-relaxed mb-4">
                  {isUrdu ? item.descriptionUr : item.descriptionEn}
                </p>

                {/* Plain-language Explainer */}
                <div className="p-3 bg-[#FAF1D9] border border-[#D9C3A0] rounded-sm text-xs text-[#2E2922] mb-4">
                  <span className="font-semibold text-[#8F6A1E] block mb-0.5">
                    {isUrdu ? "قانونی اہمیت:" : "Legal Relevance:"}
                  </span>
                  <p className="text-[11px] text-[#5C5346] leading-relaxed">
                    {isUrdu ? item.plainLanguageExplainerUr : item.plainLanguageExplainerEn}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setActiveDoc(item)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-sm bg-[#1F1B16] text-[#FAF6EE] hover:bg-[#342E25] transition-colors text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#B8892D]" />
                <span>{isUrdu ? "مکمل سرکاری دستاویز کا معائنہ کریں" : "Inspect Official Document"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* High-Resolution Document Lightbox Modal */}
      {activeDoc && (
        <LightboxModal
          isOpen={!!activeDoc}
          onClose={() => setActiveDoc(null)}
          title={isUrdu ? activeDoc.certificateTitleUrdu : activeDoc.certificateTitle}
          subtitle={`Authority: ${isUrdu ? activeDoc.authorityNameUrdu : activeDoc.authorityName} | Ref: ${activeDoc.referenceNumber}`}
          imageSrc={activeDoc.documentUrl}
          isDocument
          badge={activeDoc.status}
        />
      )}
    </div>
  );
}
