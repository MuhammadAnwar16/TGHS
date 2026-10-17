export interface SchemeInfo {
  name: string;
  nameUrdu: string;
  taglineOptions: {
    id: number;
    en: string;
    ur: string;
    rationale: string;
    isDefault?: boolean;
  }[];
  activeTagline: {
    en: string;
    ur: string;
  };
  developer: string;
  developerStatus: string;
  introTextEn: string;
  introTextUr: string;
  introIsDraft: boolean;
  totalArea: string;
  totalPlots: string;
  launchDate: string;
  coordinates: {
    lat: number;
    lng: number;
    label: string;
  };
  trustStats: {
    labelEn: string;
    labelUr: string;
    value: string;
    sublabelEn: string;
    sublabelUr: string;
    isTbd?: boolean;
  }[];
}

export const schemeData: SchemeInfo = {
  name: "TAXILA GARDENS HOUSING SCHEME",
  nameUrdu: "ٹیکسلا گارڈنز ہاؤسنگ سکیم",
  taglineOptions: [
    {
      id: 1,
      en: "Where Gandhara's Serenity Meets Modern Living",
      ur: "جہاں گندھارا کا سکون جدید زندگی سے ملتا ہے",
      rationale: "Connects the ancient peaceful monastic heritage of Taxila with contemporary urban comfort.",
      isDefault: true,
    },
    {
      id: 2,
      en: "Rooted in 3,000 Years of Heritage, Built for Generations",
      ur: "تین ہزار سالہ ثقافت کی زمین پر، آنے والی نسلوں کے لیے",
      rationale: "Emphasizes historical permanence, trust, and lasting family investment.",
    },
    {
      id: 3,
      en: "Living Amongst the Ancient Echoes of Taxila",
      ur: "قدیم ٹیکسلا کی تاریخی فضاؤں میں پُرسکون رہائش",
      rationale: "Appeals to cultural pride and the unique prestige of residing near world-famous UNESCO sites.",
    },
  ],
  activeTagline: {
    en: "Where Gandhara's Serenity Meets Modern Living",
    ur: "جہاں گندھارا کا سکون جدید زندگی سے ملتا ہے",
  },
  developer: "Landmark Group",
  developerStatus: "Established Residential Developer, Taxila",
  introIsDraft: false,
  introTextEn:
    "Taxila Gardens Housing Scheme is a delivered and well-established residential community developed by Landmark Group, strategically located near the scenic Taxila Hills and HITEC. The project enjoys convenient connectivity to major routes including HMC Road and G.T. Road, while remaining close to important educational institutions, industrial zones, and commercial hubs. This prime location provides residents with the advantage of living in a peaceful natural environment without compromising access to essential urban facilities. Master-planned with a clear focus on structured development and sustainable growth, Taxila Gardens features a thoughtfully organized layout complemented by wide road networks, landscaped green corridors, and a dependable utilities infrastructure. Dedicated commercial zones, community spaces, mosques, parks, and educational facilities contribute to a self-sustaining neighbourhood ecosystem. As a fully delivered development, the scheme eliminates common project uncertainty and provides buyers with immediate clarity on infrastructure, accessibility, and community formation—making it a practical and reliable choice for families seeking stable living as well as investors focused on dependable, long-horizon returns.",
  introTextUr:
    "ٹیکسلا گارڈنز ہاؤسنگ سکیم ایک مکمل اور قائم شدہ رہائشی کمیونٹی ہے جسے لینڈ مارک گروپ نے تیار کیا ہے۔ یہ منصوبہ ٹیکسلا کی خوبصورت پہاڑیوں اور HITEC کے قریب، HMC روڈ اور جی ٹی روڈ سے باآسانی منسلک ہے۔ تعلیمی اداروں، صنعتی علاقوں اور کمرشل مراکز سے قربت اسے ایک مثالی مقام بناتی ہے۔ وسیع سڑکیں، سبزہ زار راہداریاں، کمرشل زونز، مساجد، پارکس اور تعلیمی سہولیات پر مشتمل یہ منصوبہ ایک مکمل رہائشی ماحول فراہم کرتا ہے۔ یہ مکمل شدہ ترقیاتی منصوبہ خریداروں کو فوری وضاحت اور بھروسہ فراہم کرتا ہے — خاندانوں اور سرمایہ کاروں دونوں کے لیے ایک قابلِ اعتماد انتخاب۔",
  totalArea: "360.32 Kanal (7,206 Marla)",
  totalPlots: "699 Plots",
  launchDate: "28 February 2016",
  coordinates: {
    lat: 33.7820,
    lng: 72.7937,
    label: "Taxila Gardens Housing Scheme, Taxila, Punjab, Pakistan",
  },
  trustStats: [
    {
      labelEn: "Approved",
      labelUr: "منظور شدہ",
      value: "28 Feb 2016",
      sublabelEn: "Regulatory Approval Date",
      sublabelUr: "سرکاری منظوری کی تاریخ",
      isTbd: false,
    },
    {
      labelEn: "Developer",
      labelUr: "ڈویلپر",
      value: "Landmark Group",
      sublabelEn: "Delivered & Established Community",
      sublabelUr: "مکمل اور قائم شدہ کمیونٹی",
    },
    {
      labelEn: "Total Area",
      labelUr: "کل رقبہ",
      value: "360 Kanal",
      sublabelEn: "7,200 Marla — Master Community",
      sublabelUr: "۷۲۰۰ مرلہ — ماسٹر کمیونٹی",
      isTbd: false,
    },
    {
      labelEn: "Connectivity",
      labelUr: "رسائی",
      value: "HMC & GT Road",
      sublabelEn: "Near HITEC & Taxila Hills",
      sublabelUr: "ہائیٹیک اور ٹیکسلا ہلز کے قریب",
      isTbd: false,
    },
  ],
};
