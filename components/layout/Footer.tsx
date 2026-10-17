"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, ArrowUp } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { contactData } from "@/data/contact";

export function Footer() {
  const { t, isUrdu } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
    isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
  )}`;

  return (
    <footer className="relative bg-[#1F1B16] text-[#FAF6EE] pt-14 pb-12 border-t-4 border-[#B8892D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-[#342E25]">
          {/* Col 1: Identity & Official Logo */}
          <div className="space-y-4">
            <div className="bg-[#FAF6EE] p-2 rounded-sm inline-block shadow-sm">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo.png"
                  alt="Taxila Gardens Housing Scheme Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-[#D9C3A0] leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#B8892D] uppercase mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              {/* <li>
                <Link href="/plots" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.plots}
                </Link>
              </li> */}
              {/* <li>
                <Link href="/master-plan" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.masterPlan}
                </Link>
              </li>*/}
              <li>
                <Link href="/approvals" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.approvals}
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.location}
                </Link>
              </li>
              {/* <li>
                <Link href="/amenities" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.amenities}
                </Link>
              </li> */}
              <li>
                <Link href="/gallery" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              {/* <li>
                <Link href="/updates" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.updates}
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-[#D9C3A0] hover:text-[#FAF6EE] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Direct Sales */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#B8892D] uppercase mb-4">
              {isUrdu ? "رابطہ و معلومات" : "Site Office & Sales"}
            </h4>
            <ul className="space-y-3 text-xs text-[#D9C3A0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8892D] shrink-0 mt-0.5" />
                <span>{isUrdu ? contactData.officeAddressUr : contactData.officeAddressEn}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8892D] shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${contactData.phoneRaw}`} className="hover:text-white transition-colors">
                    {contactData.phone}
                  </a>
                  {contactData.phoneSecondary && (
                    <a href={`tel:${contactData.phoneSecondaryRaw}`} className="text-[#8F7D6B] hover:text-white transition-colors">
                      {contactData.phoneSecondary}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-medium transition-colors"
                >
                  WhatsApp: {contactData.whatsappFormatted}
                </a>
              </li>

            </ul>


          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7D6B]">
          <p>© 2026 {t.footer.rightsReserved}</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-sm bg-[#342E25] hover:bg-[#B8892D] hover:text-[#1F1B16] text-[#FAF6EE] transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
