import React from "react";

interface MuseumCardProps {
  children: React.ReactNode;
  exhibitNumber?: string;
  categoryTag?: string;
  className?: string;
  hoverEffect?: boolean;
}

export function MuseumCard({
  children,
  exhibitNumber,
  categoryTag,
  className = "",
  hoverEffect = true,
}: MuseumCardProps) {
  return (
    <div
      className={`relative p-6 sm:p-7 rounded-sm border border-[#D9C3A0] bg-[#FAF6EE] text-[#1F1B16] transition-all duration-300 shadow-sm ${
        hoverEffect ? "hover:shadow-md hover:border-[#B8892D] hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {/* Corner Bracket Accents (Gandhara Museum Placard Style) */}
      <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#B8892D]" />
      <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#B8892D]" />
      <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#B8892D]" />
      <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#B8892D]" />

      {/* Optional Placard Tag Strip */}
      {(exhibitNumber || categoryTag) && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D9C3A0]/60 text-xs font-mono tracking-wider text-[#8F6A1E] uppercase">
          {exhibitNumber && <span>{exhibitNumber}</span>}
          {categoryTag && <span className="bg-[#D9C3A0]/30 px-2 py-0.5 rounded-sm">{categoryTag}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
