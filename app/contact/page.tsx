"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { contactData } from "@/data/contact";
import { TbdBadge } from "@/components/ui/TbdBadge";

export default function ContactPage() {
  const { t, isUrdu } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [plotInterest, setPlotInterest] = useState("5 Marla");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam trap

    if (!fullName || !phone) {
      setErrorMsg(
        isUrdu ? "براہ کرم اپنا نام اور فون نمبر درج کریں۔" : "Please enter your name and phone number."
      );
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          plotInterest,
          message,
          source: "Contact Page",
          honeypot,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(
          isUrdu
            ? "پیغام بھیجنے میں خرابی پیش آئی۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔"
            : "Something went wrong. Please try again or WhatsApp us directly."
        );
      }
    } catch {
      setErrorMsg(
        isUrdu
          ? "نیٹ ورک میں خرابی ہے۔ براہ کرم براہِ راست واٹس ایپ پر رابطہ کریں۔"
          : "Network error. Please connect with our sales team via WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
    isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
  )}`;

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "سیلز ڈیسک و سائٹ آفس" : "Direct Sales & Site Office"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] leading-tight">
          {t?.contact?.heading || (isUrdu ? "سیلز ڈیسک و سائٹ آفس رابطہ" : "Connect with Our Sales & Site Office")}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {t.contact.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form Container */}
        <div className="lg:col-span-7 bg-[#FAF6EE] border-2 border-[#D9C3A0] rounded-sm p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#3F5A3C]/10 text-[#3F5A3C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3F5A3C]/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F1B16] mb-2">
                {isUrdu ? "آپ کا پیغام موصول ہو گیا ہے!" : "Inquiry Successfully Registered!"}
              </h2>
              <p className="text-sm text-[#5C5346] max-w-md mx-auto mb-8 leading-relaxed">
                {isUrdu
                  ? "ہماری سیلز ٹیم آپ کے دیے گئے نمبر پر جلد رابطہ کرے گی۔ فوری گفتگو کے لیے نیچے واٹس ایپ بٹن کا استعمال کریں۔"
                  : "Thank you for contacting Taxila Gardens. A representative will reach out promptly with plot details and pricing schedules."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-colors text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isUrdu ? "واٹس ایپ چیٹ شروع کریں" : "Chat on WhatsApp"}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-sm border border-[#D9C3A0] hover:bg-[#EFE6D5] transition-colors text-sm font-medium"
                >
                  {isUrdu ? "ایک اور پیغام بھیجیں" : "Send Another Inquiry"}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#1F1B16]">
                  {isUrdu ? "معلوماتی و بکنگ فارم" : "Official Inquiry & Booking Request"}
                </h2>
                <p className="text-xs text-[#5C5346] mt-1">
                  {isUrdu
                    ? "فارم پر کریں، ہمارے نمائندے آپ کو تمام تفصیلات فراہم کریں گے۔"
                    : "Fill in your details below. Direct dispatch to our on-site customer desk."}
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Spam Field */}
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div>
                  <label className="block text-xs font-semibold text-[#1F1B16] mb-1">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? "مثال: ملک محمد اسلم" : "e.g. Malik Muhammad Aslam"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F1B16] mb-1">
                      {t.contact.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F1B16] mb-1">
                      {t.contact.formPlotInterest}
                    </label>
                    <select
                      value={plotInterest}
                      onChange={(e) => setPlotInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                    >
                      <option value="5 Marla">5 Marla (Residential)</option>
                      <option value="7 Marla">7 Marla (Residential)</option>
                      <option value="10 Marla">10 Marla (Executive)</option>
                      <option value="1 Kanal">1 Kanal (Luxury Estate)</option>
                      <option value="Commercial">Commercial Boulevard</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>
                </div>


                <div>
                  <label className="block text-xs font-semibold text-[#1F1B16] mb-1">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      isUrdu
                        ? "سائٹ وزٹ کا وقت، اقساط کی معلومات یا مطلوبہ بلاک کے بارے میں سوال درج کریں..."
                        : "Tell us about your preferred sector, booking questions, or when you would like to visit the site..."
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-sm bg-[#B5573B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#913E26] transition-colors disabled:opacity-50 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting ? t.contact.formSubmitting : t.contact.formSubmit}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Office Details & Instant WhatsApp Sidebar */}
        <div className="lg:col-span-5 space-y-6">


          {/* Office Address & Timing Placard */}
          <div className="p-6 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1F1B16] pb-2 border-b border-[#D9C3A0]">
              {isUrdu ? "دفتری معلومات و پتہ" : "Site Office Information"}
            </h3>

            <div className="flex items-start gap-3 text-xs">
              <MapPin className="w-4 h-4 text-[#B8892D] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1F1B16] block mb-0.5">
                  {isUrdu ? "سائٹ آفس کا مقام:" : "Site Office Location:"}
                </span>
                <span className="text-[#5C5346]">
                  {isUrdu ? contactData.officeAddressUr : contactData.officeAddressEn}
                </span>
                <a
                  href="https://maps.app.goo.gl/xbUgZ7K5DpDAJGxr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-[#B5573B] font-semibold hover:underline"
                >
                  {isUrdu ? "گوگل میپس پر دیکھیں" : "View on Google Maps"} →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <Clock className="w-4 h-4 text-[#B8892D] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1F1B16] block mb-0.5">
                  {isUrdu ? "دفتری اوقات:" : "Operating Hours:"}
                </span>
                <span className="text-[#5C5346]">
                  {isUrdu ? contactData.officeHoursUr : contactData.officeHoursEn}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <Phone className="w-4 h-4 text-[#B8892D] shrink-0" />
              <div>
                <span className="font-semibold text-[#1F1B16] block mb-0.5">
                  {isUrdu ? "ٹیلیفون نمبر:" : "Phone:"}
                </span>
                <a href={`tel:${contactData.phoneRaw}`} className="text-[#B5573B] font-mono hover:underline">
                  {contactData.phone}
                </a>
              </div>
            </div>

            {contactData.phoneSecondary && (
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-[#B8892D] shrink-0" />
                <div>
                  <span className="font-semibold text-[#1F1B16] block mb-0.5">
                    {isUrdu ? "ثانوی فون نمبر:" : "Secondary Phone:"}
                  </span>
                  <a href={`tel:${contactData.phoneSecondaryRaw}`} className="text-[#B5573B] font-mono hover:underline">
                    {contactData.phoneSecondary}
                  </a>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 text-xs">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <div>
                <span className="font-semibold text-[#1F1B16] block mb-0.5">
                  WhatsApp:
                </span>
                <a
                  href={`https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
                    isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold hover:underline"
                >
                  {contactData.whatsappFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
