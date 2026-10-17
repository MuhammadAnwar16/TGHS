"use client";

import React from "react";
import { Calendar, CheckCircle2, Clock, Hammer } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { developmentUpdates } from "@/data/updates";

export default function UpdatesPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "ترقیاتی کاموں کی پیش رفت" : "Field Progress & Milestones"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {isUrdu ? "سائٹ پر جاری کاموں کی باقاعدہ رپورٹ" : "Development Progress Updates"}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {isUrdu
            ? "زمین کی پیمائش، کنٹور سروے اور ریگولیٹری پراسیس سے متعلق تازہ ترین معلومات۔"
            : "Chronological ledger documenting on-site civil works, regulatory filings, and master planning milestones."}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#B8892D]/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {developmentUpdates.map((item) => {
          const isDone = item.statusBadge === "Completed";
          const isInProgress = item.statusBadge === "In Progress";

          return (
            <div key={item.id} className="relative group">
              {/* Milestone Icon Node */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2 ${
                  isDone
                    ? "bg-[#3F5A3C] border-[#FAF6EE] text-white"
                    : isInProgress
                    ? "bg-[#B5573B] border-[#FAF6EE] text-white animate-pulse"
                    : "bg-[#D9C3A0] border-[#FAF6EE] text-[#5C5346]"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : isInProgress ? (
                  <Hammer className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-sm border border-[#D9C3A0] bg-[#FAF6EE] shadow-sm max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#8F6A1E]">
                    <Calendar className="w-3.5 h-3.5 text-[#B8892D]" />
                    <span className="font-bold">{item.date}</span>
                    <span>•</span>
                    <span className="uppercase">{item.category}</span>
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-sm border ${
                      isDone
                        ? "bg-[#3F5A3C]/20 text-[#2C4229] border-[#3F5A3C]/40"
                        : isInProgress
                        ? "bg-[#B5573B]/20 text-[#913E26] border-[#B5573B]/40"
                        : "bg-gray-100 text-gray-600 border-gray-300"
                    }`}
                  >
                    {item.statusBadge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                  {isUrdu ? item.titleUr : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#423A2F] mt-2 leading-relaxed">
                  {isUrdu ? item.summaryUr : item.summaryEn}
                </p>

                {(item.detailsEn || item.detailsUr) && (
                  <div className="mt-3 p-3 bg-[#FAF1D9] rounded-sm border border-[#D9C3A0]/60 text-xs text-[#5C5346]">
                    <span className="font-semibold text-[#1F1B16] block mb-0.5">
                      {isUrdu ? "تکنیکی تفصیلات:" : "Technical Field Note:"}
                    </span>
                    <p>{isUrdu ? item.detailsUr : item.detailsEn}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
