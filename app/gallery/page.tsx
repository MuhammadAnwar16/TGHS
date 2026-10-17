"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { LightboxModal } from "@/components/ui/LightboxModal";

export default function GalleryPage() {
  const { isUrdu } = useLanguage();
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "سائٹ کی حقیقی تصاویر" : "On-Site Photography & Gallery"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {isUrdu ? "ٹیکسلا گارڈنز کی تصویری جھلکیاں" : "Taxila Gardens Gallery"}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {isUrdu
            ? "سکیم کے مرکزی بلیوارڈ، شاندار یادگاروں، کارپٹڈ سڑکوں اور ترقیاتی کاموں کی اصل تصاویر۔"
            : "Authentic on-site photographs showcasing the grand entrance monuments, carpeted avenues, landscaped medians, and active infrastructure works."}
        </p>
      </div>

      {/* Clean High-Speed Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative rounded-sm overflow-hidden border border-[#D9C3A0] bg-[#FAF6EE] cursor-pointer shadow-sm hover:border-[#B8892D] transition-all hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
          >
            {/* Image Container with Fast Next.js Image Loading */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#EFE6D5]">
              <Image
                src={item.imageSrc}
                alt={isUrdu ? item.altUr : item.altEn}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/90 text-[#1F1B16] shadow-md">
                  <ZoomIn className="w-5 h-5 text-[#B5573B]" />
                </span>
              </div>
            </div>

            {/* Placard Caption */}
            <div className="p-4 border-t border-[#D9C3A0] text-[#1F1B16]">
              <h3 className="font-serif text-base font-bold leading-snug group-hover:text-[#B5573B] transition-colors">
                {isUrdu ? item.titleUr : item.titleEn}
              </h3>
              <p className="text-xs text-[#5C5346] mt-1.5 leading-relaxed">
                {isUrdu ? item.captionUr : item.captionEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Full View */}
      {activePhoto && (
        <LightboxModal
          isOpen={!!activePhoto}
          onClose={() => setActivePhoto(null)}
          title={isUrdu ? activePhoto.titleUr : activePhoto.titleEn}
          subtitle={isUrdu ? activePhoto.captionUr : activePhoto.captionEn}
          imageSrc={activePhoto.imageSrc}
        />
      )}
    </div>
  );
}
