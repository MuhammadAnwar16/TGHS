"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, PhoneCall, CheckCircle2, MapPin, Building2, Trees, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { schemeData } from "@/data/scheme";
import { contactData } from "@/data/contact";

export default function AboutPage() {
  const { isUrdu } = useLanguage();

  const keyPillars = [
    {
      icon: CheckCircle2,
      titleEn: "Fully Delivered Development",
      titleUr: "مکمل ڈیلیور شدہ منصوبہ",
      descEn: "Eliminates project uncertainty with on-ground infrastructure and verified community formation.",
      descUr: "ترقیاتی غیر یقینی سے پاک، موقع پر تیار انفراسٹرکچر اور مکمل آباد کمیونٹی۔",
    },
    {
      icon: MapPin,
      titleEn: "Strategic Hillside Location",
      titleUr: "پرائم لوکیشن و قدرتی ماحول",
      descEn: "Near scenic Taxila Hills & HITEC, with direct access to HMC Road and G.T. Road.",
      descUr: "ٹیکسلا ہلز اور HITEC کے قریب، HMC روڈ اور جی ٹی روڈ سے آسان رابطہ۔",
    },
    {
      icon: Building2,
      titleEn: "Landmark Group Execution",
      titleUr: "لینڈ مارک گروپ کا قابلِ اعتماد ٹریک ریکارڈ",
      descEn: "Backed by seasoned operational capability and committed developer asset security.",
      descUr: "لینڈ مارک گروپ کی پیشہ ورانہ تعمیراتی مہارت اور سرمایہ کاری کا مکمل تحفظ۔",
    },
    {
      icon: Trees,
      titleEn: "Integrated Community Ecosystem",
      titleUr: "خود کفیل شہری سہولیات",
      descEn: "Dedicated commercial zones, grand mosques, lush parks, and wide road networks.",
      descUr: "مخصوص کمرشل مارکیٹس، جامع مساجد، سرسبز پارکس اور کشادہ سڑکیں۔",
    },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#B5573B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5573B] font-semibold">
            {isUrdu ? "سکیم کا تعارف و وژن" : "About the Scheme & Developer"}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold !text-[#1F1B16] text-[#1F1B16] leading-tight">
          {isUrdu ? "ٹیکسلا گارڈنز ہاؤسنگ سکیم" : "About Taxila Gardens"}
        </h1>
        <p className="text-sm sm:text-base text-[#5C5346] mt-3 leading-relaxed">
          {isUrdu
            ? "لینڈ مارک گروپ کا ایک مکمل ڈیلیور شدہ اور باوقار رہائشی منصوبہ"
            : "A delivered and well-established residential community by Landmark Group near Taxila Hills."}
        </p>
      </div>

      {/* Main Feature Story & Photo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Left Column: Authentic User-Provided Text */}
        <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#2E2922] leading-relaxed">
          <div className="p-4 bg-[#FAF1D9] border-l-4 border-[#B5573B] rounded-r-sm">
            <p className="font-serif text-base sm:text-lg font-bold text-[#1F1B16] leading-snug">
              {isUrdu
                ? "ٹیکسلا گارڈنز ہاؤسنگ سکیم لینڈ مارک گروپ کا ایک مکمل ڈیلیور شدہ اور مستحکم رہائشی منصوبہ ہے۔"
                : "Taxila Gardens Housing Scheme is a delivered and well-established residential community developed by Landmark Group, strategically located near the scenic Taxila Hills and HITEC."}
            </p>
          </div>

          <p>
            {isUrdu
              ? "یہ منصوبہ HMC روڈ اور جی ٹی روڈ سمیت اہم شاہراہوں سے بہترین رسائی رکھتا ہے، جبکہ اہم تعلیمی اداروں، صنعتی زونز اور تجارتی مراکز کے بالکل قریب واقع ہے۔ یہ پرائم لوکیشن رہائشیوں کو بنیادی شہری سہولیات تک فوری رسائی کے ساتھ ساتھ پرسکون قدرتی ماحول کا فائدہ فراہم کرتی ہے۔ نتیجتاً، یہ پُرسکون خاندانی رہائش اور طویل المدتی منافع بخش سرمایہ کاری دونوں کے لیے ایک قابلِ اعتماد انتخاب ہے۔"
              : "The project enjoys convenient connectivity to major routes including HMC Road and G.T. Road, while remaining close to important educational institutions, industrial zones, and commercial hubs. This prime location provides residents with the advantage of living in a peaceful natural environment without compromising access to essential urban facilities. As a result, it stands as a practical and reliable choice for families seeking a stable living environment as well as for investors looking for steady long-term value appreciation."}
          </p>

          <p>
            {isUrdu
              ? "منظم ترقی اور پائیدار بڑھوتری کو مدنظر رکھ کر بنایا گیا ٹیکسلا گارڈنز کشادہ سڑکوں، سرسبز گرین کوریڈورز اور معیاری بنیادی یوٹیلیٹیز انفراسٹرکچر سے مزین ہے جو طویل المدتی رہائشی آسائش کو یقینی بناتا ہے۔ منصوبہ بندی کا طریقہ کار فعالیت اور باہمی کمیونٹی دونوں کو یکجا کرتا ہے۔"
              : "Master-planned with a clear focus on structured development and sustainable growth, Taxila Gardens features a thoughtfully organized layout complemented by wide road networks, landscaped green corridors, and a dependable utilities infrastructure designed to support long-term residential comfort. The planning approach emphasizes both functionality and community living, ensuring a balanced environment for residents."}
          </p>

          <p>
            {isUrdu
              ? "مخصوص کمرشل زونز، کمیونٹی اسپیسز، مساجد، پارکس اور تعلیمی سہولیات اس سکیم کو ایک خود کفیل محلے کا روپ دیتی ہیں نہ کہ ایک بکھرا ہوا ہاؤسنگ کلسٹر۔"
              : "Dedicated commercial zones, community spaces, mosques, parks, and educational facilities contribute to a self-sustaining neighborhood ecosystem rather than a fragmented housing cluster."}
          </p>

          <p>
            {isUrdu
              ? "ایک مکمل طور پر ڈیلیور شدہ منصوبے کی حیثیت سے، یہ سکیم عام پراجیکٹ غیر یقینی کی صورتحال کو ختم کرتی ہے اور خریداروں کو بنیادی ڈھانچے، رسائی اور کمیونٹی تشکیل پر فوری واضح یقین دہانی مہیا کرتی ہے۔"
              : "As a fully delivered development, the scheme eliminates common project uncertainty and provides buyers with immediate clarity on infrastructure, accessibility, and community formation."}
          </p>

          <p>
            {isUrdu
              ? "یہ تنظیمی طاقت لینڈ مارک گروپ کی آپریشنل صلاحیتوں کی عکاس ہے اور رہائش کے معیار کے ساتھ ساتھ اثاثے کے تحفظ پر خریداروں کے اعتماد کو مزید مضبوط کرتی ہے۔"
              : "This execution strength reflects Landmark Group’s operational capability and reinforces buyer confidence in both livability and asset security."}
          </p>

          <p>
            {isUrdu
              ? "اہم صنعتی زونز، تعلیمی اداروں اور ٹرانزٹ روٹس کی قربت سکیم کی رہائشی اہمیت کو مزید نکھارنے کے ساتھ ساتھ مستقبل میں اس کی قدر میں مستحکم اضافہ کرتی ہے۔"
              : "The proximity to major employment zones, academic institutions, and transit routes further enhances the scheme’s residential relevance while strengthening its future value trajectory."}
          </p>

          <div className="pt-2">
            <blockquote className="p-4 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm font-serif italic text-sm text-[#1F1B16]">
              {isUrdu
                ? "ٹیکسلا گارڈنز منظم منصوبہ بندی، لوکیشن کے فائدے اور ڈیلیوری کی ساکھ کا ایک پختہ امتزاج ہے—جو معیاری طرزِ زندگی کو ترجیح دینے والے رہائشیوں اور محفوظ، طویل المدتی منافع کے متلاشی سرمایہ کاروں کے لیے تعمیر کیا گیا ہے۔"
                : "“Taxila Gardens stands as a disciplined blend of planning, location advantage, and delivery credibility—built for residents who prioritize quality living and investors focused on dependable, long-horizon returns.”"}
            </blockquote>
          </div>
        </div>

        {/* Right Column: User-Uploaded Landmark Office Photo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-sm overflow-hidden border-2 border-[#D9C3A0] shadow-xl aspect-[4/3] bg-[#EFE6D5]">
            <Image
              src="/images/landmark-office.jpg"
              alt="Landmark Group Project & Site Office at Taxila Gardens"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="p-4 bg-[#FAF6EE] border border-[#D9C3A0] rounded-sm text-xs space-y-1.5">
            <span className="font-mono text-[#8F6A1E] font-bold uppercase tracking-wider block">
              {isUrdu ? "لینڈ مارک گروپ — سائٹ و پروجیکٹ آفس" : "Landmark Group — Site & Project Office"}
            </span>
            <p className="text-[#5C5346] leading-relaxed">
              {isUrdu
                ? "ٹیکسلا گارڈنز ہاؤسنگ سکیم کے سائٹ آفس پر ہمارے نمائندے رہنمائی اور سائٹ وزٹ کے لیے ہمہ وقت دستیاب ہیں۔"
                : "Dedicated project facilitation office on-site at Taxila Gardens, welcoming families and investors for consultations and guided tours."}
            </p>
          </div>

          {/* Quick Direct Actions */}
          <div className="p-4 bg-[#FAF1D9] border border-[#D9C3A0] rounded-sm space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B5573B] font-bold block">
              {isUrdu ? "فوری رابطہ و معلومات" : "Direct Inquiries & Sales"}
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${contactData.whatsappRaw}?text=${encodeURIComponent(
                  isUrdu ? contactData.whatsappPrefilledMessageUr : contactData.whatsappPrefilledMessageEn
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
              >
                <span>WhatsApp: {contactData.whatsappFormatted}</span>
              </a>

              <Link
                href="/plots"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-[#B5573B] text-white text-xs font-semibold hover:bg-[#913E26] transition-colors shadow-sm"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isUrdu ? "دستیاب پلاٹوں کی فہرست" : "View Plot Inventory"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Pillars Grid */}
      <div className="pt-8 border-t-2 border-[#D9C3A0]">
        <h2 className="font-serif text-2xl font-bold text-[#1F1B16] mb-6">
          {isUrdu ? "منصوبے کے اہم ترین ستون" : "Key Pillars of Taxila Gardens"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-sm border border-[#D9C3A0] bg-[#FAF6EE] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF1D9] border border-[#D9C3A0] flex items-center justify-center text-[#B5573B] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1F1B16] mb-1.5">
                    {isUrdu ? pillar.titleUr : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-[#5C5346] leading-relaxed">
                    {isUrdu ? pillar.descUr : pillar.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
