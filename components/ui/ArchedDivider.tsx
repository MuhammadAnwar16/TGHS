import React from "react";
import { StupaMotif } from "./StupaMotif";

interface ArchedDividerProps {
  inverted?: boolean;
  withStupa?: boolean;
  className?: string;
  fillColor?: string;
}

export function ArchedDivider({
  inverted = false,
  withStupa = true,
  className = "",
  fillColor = "#F7F1E5",
}: ArchedDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {withStupa && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10 flex items-center justify-center">
          <div className="bg-[#1F1B16] text-[#B8892D] p-2 rounded-full border border-[#B8892D]/40 shadow-md">
            <StupaMotif size={24} color="#B8892D" />
          </div>
        </div>
      )}
      <svg
        className={`w-full h-12 md:h-16 ${inverted ? "rotate-180" : ""}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C300 90 900 90 1200 0V120H0V0Z"
          fill={fillColor}
        />
        {/* Subtle decorative gold trace */}
        <path
          d="M0 2C300 92 900 92 1200 2"
          stroke="#B8892D"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
      </svg>
    </div>
  );
}
