import React from "react";

interface StupaMotifProps {
  className?: string;
  size?: number;
  color?: string;
}

export function StupaMotif({ className = "", size = 32, color = "currentColor" }: StupaMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Finial / Chhatra umbrella spire */}
      <path d="M24 2V8" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
      <path d="M20 5C22 4 26 4 28 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 8C21 6.5 27 6.5 30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="2" r="1.5" fill={color} />

      {/* Harmika square railing atop the dome */}
      <rect x="21" y="9" width="6" height="3" rx="0.5" stroke={color} strokeWidth="1.5" />

      {/* Anda (Hemispherical Stupa Dome) */}
      <path
        d="M13 25C13 17.5 17.5 12 24 12C30.5 12 35 17.5 35 25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* Medhi (Drum platform terrace) */}
      <path d="M10 26H38" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
      <path d="M11 29H37" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Torana / Plinth Base */}
      <path d="M7 34H41" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
      <path d="M5 38H43" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Gandhara arch gateway detail */}
      <path
        d="M21 34V29C21 27.5 22.5 26 24 26C25.5 26 27 27.5 27 29V34"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Lotus base petals */}
      <path d="M16 38L18 34" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M32 38L30 34" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 38L13 34" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M36 38L35 34" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function GandharaPillar({ className = "", height = 40 }: { className?: string; height?: number }) {
  return (
    <svg
      width={12}
      height={height}
      viewBox={`0 0 12 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="2" width="10" height="2" fill="#B8892D" />
      <rect x="2" y="4" width="8" height="2" fill="#D9C3A0" />
      <line x1="3.5" y1="6" x2="3.5" y2={height - 6} stroke="#D9C3A0" strokeWidth="1" />
      <line x1="8.5" y1="6" x2="8.5" y2={height - 6} stroke="#D9C3A0" strokeWidth="1" />
      <rect x="2" y={height - 6} width="8" height="2" fill="#D9C3A0" />
      <rect x="1" y={height - 4} width="10" height="2" fill="#B8892D" />
    </svg>
  );
}
