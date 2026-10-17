"use client";

import React, { useState } from "react";
import { ArrowUpDown, PhoneCall } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { PlotItem } from "@/data/plots";

interface PlotTableProps {
  plots: PlotItem[];
  onInquire: (plotNumber: string, category: string) => void;
}

export function PlotTable({ plots, onInquire }: PlotTableProps) {
  const { isUrdu } = useLanguage();
  const [sortField, setSortField] = useState<"areaSqFt" | "sizeMarla" | "sizeKanal">("areaSqFt");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: "areaSqFt" | "sizeMarla" | "sizeKanal") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedPlots = [...plots].sort((a, b) => {
    let comp = 0;
    if (sortField === "areaSqFt") comp = a.areaSqFt - b.areaSqFt;
    else if (sortField === "sizeMarla") comp = a.sizeMarla - b.sizeMarla;
    else if (sortField === "sizeKanal") comp = a.sizeKanal - b.sizeKanal;
    return sortAsc ? comp : -comp;
  });

  return (
    <div className="w-full overflow-x-auto rounded-sm border border-[#D9C3A0] bg-[#FAF6EE] shadow-sm">
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-[#EFE6D5] text-[#1F1B16] font-mono uppercase tracking-wider border-b border-[#D9C3A0]">
          <tr>
            <th scope="col" className="py-3 px-4 font-semibold">
              {isUrdu ? "مارکیٹ نام" : "Common Market Name"}
            </th>
            <th scope="col" className="py-3 px-4 font-semibold">
              {isUrdu ? "پیمائش (طول و عرض)" : "Plot Dimensions"}
            </th>
            <th
              scope="col"
              onClick={() => handleSort("areaSqFt")}
              className="py-3 px-4 font-semibold cursor-pointer hover:bg-[#D9C3A0]/40 transition-colors select-none"
            >
              <div className="flex items-center gap-1.5">
                <span>{isUrdu ? "کل رقبہ (مربع فٹ)" : "Total Area (sq ft)"}</span>
                <ArrowUpDown className="w-3.5 h-3.5 text-[#8F6A1E]" />
              </div>
            </th>
            <th
              scope="col"
              onClick={() => handleSort("sizeMarla")}
              className="py-3 px-4 font-semibold cursor-pointer hover:bg-[#D9C3A0]/40 transition-colors select-none"
            >
              <div className="flex items-center gap-1.5">
                <span>{isUrdu ? "رقبہ مرلہ (225 مربع فٹ)" : "Area in Marlas (at 225 sq ft)"}</span>
                <ArrowUpDown className="w-3.5 h-3.5 text-[#8F6A1E]" />
              </div>
            </th>
            <th
              scope="col"
              onClick={() => handleSort("sizeKanal")}
              className="py-3 px-4 font-semibold cursor-pointer hover:bg-[#D9C3A0]/40 transition-colors select-none"
            >
              <div className="flex items-center gap-1.5">
                <span>{isUrdu ? "رقبہ کنال" : "Area in Kanals"}</span>
                <ArrowUpDown className="w-3.5 h-3.5 text-[#8F6A1E]" />
              </div>
            </th>
            <th scope="col" className="py-3 px-4 font-semibold">
              {isUrdu ? "نرخ / قیمت" : "Price"}
            </th>
            <th scope="col" className="py-3 px-4 font-semibold text-right">
              {isUrdu ? "رابطہ" : "Action"}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#D9C3A0]/50 text-[#1F1B16]">
          {sortedPlots.map((plot) => (
            <tr key={plot.id} className="hover:bg-[#FAF1D9]/60 transition-colors">
              <td className="py-3.5 px-4 font-serif font-bold text-sm text-[#1F1B16]">
                {plot.marketName || plot.category}
              </td>
              <td className="py-3.5 px-4 font-mono font-semibold text-[#8F6A1E]">
                {plot.dimensions}
              </td>
              <td className="py-3.5 px-4 font-mono font-medium">
                {plot.totalAreaDisplay || `${plot.areaSqFt.toLocaleString()} sq ft`}
              </td>
              <td className="py-3.5 px-4 font-medium text-[#1F1B16]">
                {plot.areaMarla}
              </td>
              <td className="py-3.5 px-4 font-mono font-medium text-[#5C5346]">
                {plot.areaKanal}
              </td>
              <td className="py-3.5 px-4">
                <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#FAF1D9] border border-[#D9C3A0] text-xs font-semibold text-[#B5573B]">
                  {isUrdu ? "قیمت بذریعہ انکوائری" : "Price on Inquiry"}
                </span>
              </td>
              <td className="py-3.5 px-4 text-right">
                <button
                  type="button"
                  onClick={() => onInquire(plot.plotNumber || plot.id, plot.category)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#B5573B] text-white hover:bg-[#913E26] transition-colors text-xs font-medium shadow-sm"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>{isUrdu ? "انکوائری" : "Inquire"}</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
