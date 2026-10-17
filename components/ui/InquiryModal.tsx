"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../language/LanguageProvider";
import { contactData } from "@/data/contact";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlotInterest?: string;
  defaultPlotNumber?: string;
}

export function InquiryModal({
  isOpen,
  onClose,
  defaultPlotInterest = "5 Marla",
  defaultPlotNumber = "",
}: InquiryModalProps) {
  const { isUrdu } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [plotInterest, setPlotInterest] = useState(defaultPlotInterest);
  const [message, setMessage] = useState(
    defaultPlotNumber ? `Inquiring about Plot #${defaultPlotNumber}` : ""
  );
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam drop

    if (!fullName || !phone) {
      setErrorMsg(isUrdu ? "براہ کرم اپنا نام اور فون نمبر درج کریں۔" : "Please enter your name and phone number.");
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
          plotNumber: defaultPlotNumber,
          message,
          source: "Inquiry Modal",
          honeypot,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(isUrdu ? "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔" : "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg(isUrdu ? "رابطہ کرنے میں مسئلہ پیش آیا۔ براہ راست واٹس ایپ پر رابطہ کریں۔" : "Network error. Please WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappText = encodeURIComponent(
    `${contactData.whatsappPrefilledMessageEn} (Regarding ${plotInterest}${
      defaultPlotNumber ? `, Plot #${defaultPlotNumber}` : ""
    })`
  );
  const whatsappUrl = `https://wa.me/${contactData.whatsappRaw}?text=${whatsappText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#FAF6EE] text-[#1F1B16] rounded-sm border border-[#B8892D] shadow-2xl p-6 sm:p-7">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-sm text-[#1F1B16] hover:bg-[#D9C3A0]/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#3F5A3C]/10 text-[#3F5A3C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3F5A3C]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2 text-[#1F1B16]">
              {isUrdu ? "درخواست موصول ہو گئی ہے!" : "Inquiry Received!"}
            </h3>
            <p className="text-sm text-[#5C5346] mb-6 max-w-sm mx-auto">
              {isUrdu
                ? "ٹیکسلا گارڈنز کی سیلز ٹیم جلد آپ سے رابطہ کرے گی۔ فوری معلومات کے لیے واٹس ایپ پر بھی رابطہ کر سکتے ہیں۔"
                : "Thank you for reaching out. Our representative will contact you shortly with complete details."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isUrdu ? "فوری واٹس ایپ میسج کریں" : "Instant WhatsApp Chat"}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-sm border border-[#D9C3A0] hover:bg-[#EFE6D5] transition-colors text-sm font-medium"
              >
                {isUrdu ? "بند کریں" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B8892D] font-semibold">
                {isUrdu ? "فوری بکنگ و انکوائری" : "Direct Sales Inquiry"}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F1B16] mt-1">
                {isUrdu ? "پلاٹ بکنگ و معلوماتی فارم" : "Express Plot Inquiry"}
              </h3>
              {defaultPlotNumber && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#D9C3A0]/30 border border-[#D9C3A0] text-xs font-medium text-[#1F1B16]">
                  <span>{isUrdu ? "منتخب پلاٹ نمبر:" : "Inquiring about Plot:"}</span>
                  <strong className="text-[#B5573B] font-mono">{defaultPlotNumber}</strong>
                </div>
              )}
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Spam Honeypot */}
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
                <label className="block text-xs font-medium text-[#1F1B16] mb-1">
                  {isUrdu ? "پورا نام *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? "مثال: احمد خان" : "e.g. Tariq Mehmood"}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#1F1B16] mb-1">
                    {isUrdu ? "موبائل / واٹس ایپ نمبر *" : "Mobile / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1F1B16] mb-1">
                    {isUrdu ? "پلاٹ سائز کیٹیگری" : "Plot Size of Interest"}
                  </label>
                  <select
                    value={plotInterest}
                    onChange={(e) => setPlotInterest(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                  >
                    <option value="5 Marla">5 Marla (Residential)</option>
                    <option value="7 Marla">7 Marla (Residential)</option>
                    <option value="10 Marla">10 Marla (Residential)</option>
                    <option value="1 Kanal">1 Kanal (Luxury Estate)</option>
                    <option value="Commercial">Commercial Boulevard</option>
                  </select>
                </div>
              </div>


              <div>
                <label className="block text-xs font-medium text-[#1F1B16] mb-1">
                  {isUrdu ? "پیغام یا سوال" : "Specific Requirements / Message"}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isUrdu
                      ? "قسطوں کا پلان یا سائٹ وزٹ کے حوالے سے سوال درج کریں..."
                      : "Preferred sector, installment inquiry, or site visit date..."
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-sm border border-[#D9C3A0] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8892D]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#B5573B] text-white font-medium hover:bg-[#913E26] transition-colors disabled:opacity-50 text-sm shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? (isUrdu ? "بھیج رہے ہیں..." : "Submitting...") : (isUrdu ? "انکوائری جمع کروائیں" : "Submit Inquiry")}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-colors text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
