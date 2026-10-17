"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { contactData } from "@/data/contact";

export function WhatsAppFloating() {
  const { isUrdu } = useLanguage();
  const whatsappUrl = `https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
    isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/60"
        aria-label="Chat with Taxila Gardens Sales on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="hidden sm:inline-block font-medium text-sm drop-shadow-sm">
          {isUrdu ? "واٹس ایپ رابطہ" : "WhatsApp Sales"}
        </span>
      </a>
    </aside>
  );
}
