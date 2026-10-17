"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Download, AlertCircle } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc: string;
  isDocument?: boolean;
  badge?: string;
  disclaimer?: string;
}

export function LightboxModal({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  badge,
  disclaimer,
}: LightboxModalProps) {
  const { isUrdu } = useLanguage();
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF6EE] text-[#1F1B16] rounded-sm border border-[#B8892D] shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D9C3A0] bg-[#EFE6D5]">
          <div className="flex items-center gap-2">
            {badge && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-[#B8892D] text-white">
                {badge}
              </span>
            )}
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight text-[#1F1B16]">{title}</h3>
              {subtitle && <p className="text-xs text-[#5C5346] mt-0.5">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
              className="p-1.5 rounded-sm text-[#1F1B16] hover:bg-[#D9C3A0]/50 transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
              className="p-1.5 rounded-sm text-[#1F1B16] hover:bg-[#D9C3A0]/50 transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-sm text-[#1F1B16] hover:bg-[#B5573B] hover:text-white transition-colors"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#1F1B16]/5 min-h-[350px]">
          <div
            className="transition-transform duration-200 origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {imageSrc.endsWith(".svg") || imageSrc.startsWith("/") ? (
              <div className="relative w-[320px] sm:w-[540px] md:w-[700px] h-[400px] md:h-[500px]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain drop-shadow-md rounded-sm"
                  unoptimized={imageSrc.endsWith(".svg")}
                />
              </div>
            ) : (
              <div className="p-8 text-center text-sm text-[#8F6A1E]">
                Document preview available on file
              </div>
            )}
          </div>
        </div>

        {/* Footer / Transparency Disclaimer */}
        <div className="px-5 py-3 border-t border-[#D9C3A0] bg-[#EFE6D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#5C5346]">
            <AlertCircle className="w-4 h-4 text-[#B8892D] shrink-0" />
            <span>
              {disclaimer ||
                (isUrdu
                  ? "یہ دستاویز نمونہ سرکاری تصدیق کے لیے پیش کیا گیا ہے اور حتمی اتھارٹی ریکارڈ سے مشروط ہے۔"
                  : "Specimen preview for regulatory transparency. Official file copy subject to authority record.")}
            </span>
          </div>

          <a
            href={imageSrc}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#3F5A3C] text-white hover:bg-[#2C4229] transition-colors font-medium shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isUrdu ? "ڈاؤن لوڈ کریں" : "Download File"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
