"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { InquiryModal } from "../ui/InquiryModal";
import { contactData } from "@/data/contact";

export function Navbar() {
  const { lang, toggleLang, t, isUrdu } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    //{ href: "/plots", label: t.nav.plots },
    //{ href: "/master-plan", label: t.nav.masterPlan },
    { href: "/approvals", label: t.nav.approvals },
    { href: "/location", label: t.nav.location },
    // { href: "/amenities", label: t.nav.amenities },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  const whatsappUrl = `https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
    isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
  )}`;

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#1F1B16] text-[#D9C3A0] text-xs py-1.5 px-4 border-b border-[#B8892D]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8892D]" />
            <span className="font-mono tracking-wide text-xs truncate">
              {isUrdu
                ? "ٹیکسلا گارڈنز: قدرتی ماحول اور جدید سہولیات کے سنگ پرسکون رہائش"
                : "Taxila Gardens: Live in Nature — Modern Living in Taxila"}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${contactData.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#B8892D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8892D]" />
              <span className="font-mono text-xs">{contactData.phone.split(" / ")[0]}</span>
            </a>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-[#342E25] hover:bg-[#B8892D] hover:text-[#1F1B16] text-[#FAF6EE] text-xs font-medium transition-colors border border-[#B8892D]/40"
              aria-label="Toggle language between English and Urdu"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "اردو" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#D9C3A0] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#B8892D] rounded-sm py-1"
            >
              <div className="relative h-12 w-36 sm:h-14 sm:w-44">
                <Image
                  src="/images/logo.png"
                  alt="Taxila Gardens Housing Scheme"
                  fill
                  priority
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-1.5 rounded-sm text-xs xl:text-sm font-medium transition-all ${isActive
                      ? "text-[#B5573B] font-semibold bg-[#D9C3A0]/30 border-b-2 border-[#B5573B]"
                      : "text-[#1F1B16] hover:text-[#B5573B] hover:bg-[#D9C3A0]/20"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Direct Sales CTAs (2 Clicks to Sales) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-all shadow-sm"
                title="Direct WhatsApp chat"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.nav.whatsappUs}</span>
              </a>

              <button
                type="button"
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#B5573B] text-white text-xs font-semibold hover:bg-[#913E26] transition-all shadow-sm"
              >
                <span>{t.nav.bookVisit}</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setInquiryModalOpen(true)}
                className="sm:hidden px-2.5 py-1.5 rounded-sm bg-[#B5573B] text-white text-xs font-medium"
              >
                {t.nav.bookVisit}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm text-[#1F1B16] hover:bg-[#D9C3A0]/40 transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D9C3A0] bg-[#FAF6EE] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#D9C3A0]">
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2 rounded-sm bg-[#EFE6D5] border border-[#D9C3A0] text-xs font-semibold"
              >
                <Globe className="w-4 h-4 text-[#B8892D]" />
                <span>{lang === "en" ? "اردو ورژن منتخب کریں" : "Switch to English"}</span>
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2 rounded-sm bg-[#25D366] text-white text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${isActive
                      ? "bg-[#B5573B] text-white font-semibold"
                      : "text-[#1F1B16] hover:bg-[#D9C3A0]/30"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInquiryModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[#3F5A3C] text-white font-medium text-sm shadow-md"
              >
                <span>{t.nav.bookVisit} / {t.plots.inquireNow}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Sales Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
}
