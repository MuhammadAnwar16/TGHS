import React from "react";

interface TbdBadgeProps {
  label?: string;
  tooltip?: string;
  className?: string;
  size?: "sm" | "md";
}

export function TbdBadge({
  label = "TBD / Pending Official Notice",
  tooltip = "This item is under formal regulatory processing or pending client notification.",
  className = "",
  size = "sm",
}: TbdBadgeProps) {
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";

  return (
    <span
      title={tooltip}
      className={`inline-flex items-center font-mono tracking-tight uppercase rounded-sm border border-[#B8892D]/40 bg-[#B8892D]/10 text-[#8F6A1E] font-medium select-none ${sizeClasses} ${className}`}
    >
      <span>{label}</span>
    </span>
  );
}
