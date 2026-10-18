"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Calendar,
  Layers,
  MessageCircle,
  Navigation,
  ExternalLink,
  Clock,
  Car,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { StupaMotif } from "@/components/ui/StupaMotif";
import { ArchedDivider } from "@/components/ui/ArchedDivider";
import { MuseumCard } from "@/components/ui/MuseumCard";
import { InquiryModal } from "@/components/ui/InquiryModal";
import { schemeData } from "@/data/scheme";
import { plotCategories } from "@/data/plots";
import { locationData } from "@/data/location";
import { galleryItems } from "@/data/gallery";
import { contactData } from "@/data/contact";

// Dynamically import SchemeMap to ensure Leaflet runs only on client
const SchemeMap = dynamic(
  () => import("@/components/map/SchemeMap").then((mod) => mod.SchemeMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[450px] bg-[#EFE6D5] rounded-sm flex flex-col items-center justify-center border border-[#D9C3A0] text-[#8F6A1E] font-mono text-xs gap-2">
        <Compass className="w-6 h-6 animate-spin text-[#B8892D]" />
        <span>Loading interactive map…</span>
      </div>
    ),
  }
);

export default function HomePage() {
  const { t, isUrdu } = useLanguage();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPlotCategory, setSelectedPlotCategory] = useState<string>("5 Marla");

  const handleOpenInquiry = (category: string = "5 Marla") => {
    setSelectedPlotCategory(category);
    setInquiryModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* ======================================================== */}
      {/* 1. CINEMATIC HERO SECTION                                */}
      {/* ======================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#1F1B16] text-[#FAF6EE] overflow-hidden pt-28 pb-0 sm:pt-32">
        {/* Background Visual Graphic / Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-taxila.svg"
            alt="Taxila Gardens Housing Scheme"
            fill
            priority
            className="object-cover object-center scale-100"
          />
          {/* Subtle multi-layer scrim for maximum contrast while keeping photo visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16] via-[#1F1B16]/70 to-[#1F1B16]/50" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto pb-24 sm:pb-28">


          {/* Scheme Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-3xl">
            {isUrdu ? schemeData.nameUrdu : schemeData.name}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#E6DACB] max-w-2xl mx-auto mb-9 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {isUrdu
              ? "HIT اور UET ٹیکسلا جیسے دلکش مقامات کے قریب، ایک اسٹریٹجک محل وقوع۔ بنیادی ڈھانچہ (انفراسٹرکچر) مکمل اور پلاٹس کا قبضہ فوری دستیاب ہے۔"
              : "Strategically located near scenic HIT/HITEC & UET Taxila. Delivered infrastructure with ready plot possession."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/plots"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 h-12 rounded-sm bg-[#B5573B] text-white font-semibold text-sm hover:bg-[#913E26] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <Layers className="w-4 h-4" />
              <span>{t.hero.viewPlots}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
                isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 h-12 rounded-sm bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isUrdu ? "واٹس ایپ پر رابطہ" : "WhatsApp Sales"}</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenInquiry("5 Marla")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 h-12 rounded-sm bg-black/50 hover:bg-black/70 text-[#FAF6EE] border border-white/25 hover:border-white/50 font-medium text-sm transition-all backdrop-blur-md shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-[#D4A94B]" />
              <span>{t.hero.bookVisit}</span>
            </button>
          </div>
        </div>

        {/* Bottom Arch Transition — absolutely pinned so no dark strip shows beneath */}
        <ArchedDivider className="absolute bottom-0 left-0 right-0 z-10" fillColor="#F7F1E5" withStupa={false} />
      </section>



      {/* ======================================================== */}
      {/* 3. SHORT INTRO & GANDHARA PULL-QUOTE SECTION             */}
      {/* ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-[#D9C3A0] shadow-xl aspect-[3/4] bg-[#2E2820]">
              <Image
                src="/images/heritage-monument.jpg"
                alt="Golden Gandhara-style pillars and manicured green lawn at Taxila Gardens Housing Scheme"
                fill
                className="object-fill object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FAF6EE]">
                <p className="font-mono text-[10px] text-[#B8892D] uppercase tracking-wider">
                  {isUrdu ? "ٹیکسلا گارڈنز — مرکزی پارک" : "Taxila Gardens — Heritage Monument Park"}
                </p>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#B5573B]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
                {isUrdu ? "منصوبے کا وژن اور تعارف" : "The Vision & Origins"}
              </span>
            </div>



            <p className="text-sm sm:text-base text-[#423A2F] leading-relaxed">
              {isUrdu ? schemeData.introTextUr : schemeData.introTextEn}
            </p>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B5573B] hover:text-[#913E26] transition-colors"
              >
                <span>{isUrdu ? "مزید تفصیلی تعارف پڑھیے" : "Read The Full Story"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/approvals"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F5A3C] hover:text-[#2C4229] transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isUrdu ? "قانونی فائیل اور این او سی دیکھیے" : "Examine Legal Filings"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Arch Section Divider */}
      <ArchedDivider fillColor="#EFE6D5" withStupa={false} />

      {/* ======================================================== */}
      {/* 4. PLOT SIZES PREVIEW SECTION                           */}
      {/* ======================================================== */}
      <section className="bg-[#EFE6D5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#B5573B]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
                  {isUrdu ? "رہائشی و کمرشل مواقع" : "Master Plot Inventory"}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B16]">
                {t.plots.heading}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5346] max-w-xl mt-2">
                {t.plots.subheading}
              </p>
            </div>

            <Link
              href="/plots"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1F1B16] text-[#FAF6EE] text-xs font-semibold hover:bg-[#342E25] transition-colors shrink-0"
            >
              <span>{isUrdu ? "مکمل فہرست و قیمتیں" : "View Full Inventory & Table"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plotCategories.slice(0, 3).map((cat) => (
              <MuseumCard

              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#1F1B16]">
                      {isUrdu ? cat.nameUrdu : cat.name}
                    </h3>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#D9C3A0]/40 text-[#8F6A1E] border border-[#D9C3A0]">
                      {cat.dimensions}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C5346] leading-relaxed mb-4">
                    {isUrdu ? cat.descriptionUr : cat.descriptionEn}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#FAF1D9] rounded-sm border border-[#D9C3A0] text-center mb-4 text-xs">
                    <div>
                      <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "مرلہ" : "Marla"}</p>
                      <p className="font-serif font-bold text-sm text-[#1F1B16]">{cat.marla}</p>
                    </div>
                    <div className="border-x border-[#D9C3A0]">
                      <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "کنال" : "Kanal"}</p>
                      <p className="font-serif font-bold text-sm text-[#1F1B16]">{cat.kanal}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#8F6A1E] uppercase">{isUrdu ? "مربع فٹ" : "Sq. Ft."}</p>
                      <p className="font-mono font-bold text-xs text-[#1F1B16]">{cat.sqFt}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D9C3A0]">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-[#5C5346]">{isUrdu ? "قیمت شیڈول:" : "Pricing:"}</span>
                    <span className="font-mono font-semibold text-[#B5573B]">{cat.priceDisplay}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenInquiry(cat.name)}
                    className="w-full py-2 rounded-sm bg-[#B5573B] text-white hover:bg-[#913E26] text-xs font-medium uppercase tracking-wider transition-colors shadow-sm"
                  >
                    {isUrdu ? "اس سائز کی تفصیلات طلب کریں" : `Inquire: ${cat.name}`}
                  </button>
                </div>
              </MuseumCard>
            ))}
          </div>


        </div>
      </section>



      {/* ======================================================== */}
      {/* 6. GALLERY TEASER                                        */}
      {/* ======================================================== */}
      <section className="bg-[#FAF1D9] py-20 border-t border-[#D9C3A0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
                {isUrdu ? "تصویروں کی گیلری" : "Visual Archives"}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1F1B16] mt-1">
                {isUrdu ? "   سائٹ مناظر" : "Site Topography "}
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B5573B] hover:text-[#913E26]"
            >
              <span>{isUrdu ? "تمام تصاویر دیکھیں" : "View Full Gallery"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-sm overflow-hidden border border-[#D9C3A0] bg-[#1F1B16] aspect-[4/3] shadow-md"
              >
                <Image
                  src={item.imageSrc}
                  alt={isUrdu ? item.altUr : item.altEn}
                  fill
                  className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-[#FAF6EE]">
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#B8892D] text-[#1F1B16] font-bold uppercase">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-sm font-bold text-[#FAF6EE] mt-1">
                    {isUrdu ? item.titleUr : item.titleEn}
                  </h3>
                  <p className="text-[11px] text-[#D9C3A0] line-clamp-1 mt-0.5">
                    {isUrdu ? item.captionUr : item.captionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Global Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultPlotInterest={selectedPlotCategory}
      />
    </div>
  );
}
