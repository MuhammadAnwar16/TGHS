export type Language = "en" | "ur";

export interface Translations {
  nav: {
    home: string;
    about: string;
    plots: string;
    masterPlan: string;
    approvals: string;
    location: string;
    amenities: string;
    gallery: string;
    updates: string;
    contact: string;
    bookVisit: string;
    callNow: string;
    whatsappUs: string;
  };
  hero: {
    title: string;
    subheading: string;
    viewPlots: string;
    bookVisit: string;
    downloadBrochure: string;
    trustBadge: string;
    verifiedHeritage: string;
  };
  trustStrip: {
    title: string;
    tbdNotice: string;
    legalStatus: string;
    totalArea: string;
    totalPlots: string;
    heritageProximity: string;
  };
  plots: {
    heading: string;
    subheading: string;
    filterAll: string;
    filterResidential: string;
    filterCommercial: string;
    sortSizeAsc: string;
    sortSizeDesc: string;
    statusAvailable: string;
    statusBooked: string;
    statusSold: string;
    viewCards: string;
    viewTable: string;
    inquireNow: string;
    area: string;
    marla: string;
    kanal: string;
    sqFt: string;
    plotNo: string;
    block: string;
    status: string;
    action: string;
    dimensions: string;
    facing: string;
    street: string;
  };
  masterPlan: {
    heading: string;
    subheading: string;
    zoomIn: string;
    zoomOut: string;
    resetView: string;
    downloadPdf: string;
    legendTitle: string;
    residential: string;
    commercial: string;
    parks: string;
    mosque: string;
    civic: string;
    clickToInspect: string;
    selectedPlot: string;
  };
  approvals: {
    heading: string;
    subheading: string;
    viewDocument: string;
    closeDocument: string;
    statusUnderProcess: string;
    statusApproved: string;
    statusSubmitted: string;
    statusTimeline: string;
    plainLanguageTitle: string;
    legalTransparencyTitle: string;
  };
  location: {
    heading: string;
    subheading: string;
    getDirections: string;
    nearbyLandmarks: string;
    distance: string;
    driveTime: string;
    interactiveMap: string;
  };
  contact: {
    heading: string;
    subheading: string;
    formName: string;
    formPhone: string;
    formEmail: string;
    formPlotInterest: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    officeHoursTitle: string;
    whatsappTitle: string;
    addressTitle: string;
    selectPlotSize: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    legalTitle: string;
    disclaimerText: string;
    rightsReserved: string;
    tbdAuditLink: string;
  };
  common: {
    tbdTag: string;
    verified: string;
    learnMore: string;
    close: string;
    explore: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      plots: "Plots & Pricing",
      masterPlan: "Master Plan",
      approvals: "Approvals & NOC",
      location: "Location",
      amenities: "Amenities",
      gallery: "Gallery",
      updates: "Updates",
      contact: "Contact",
      bookVisit: "Book a Visit",
      callNow: "Call Now",
      whatsappUs: "WhatsApp",
    },
    hero: {
      title: "TAXILA GARDENS HOUSING SCHEME",
      subheading: "Where Gandhara's Serenity Meets Modern Living",
      viewPlots: "View Plot Inventory",
      bookVisit: "Book a Site Visit",
      downloadBrochure: "Download Master Plan",
      trustBadge: "UNESCO Heritage Zone • Modern Master Planning",
      verifiedHeritage: "Ancient Taxila Heritage Adjacent",
    },
    trustStrip: {
      title: "Project Verifications & Key Metrics",
      tbdNotice: "Figures marked [TBD] are subject to final municipal notification",
      legalStatus: "Legal Status",
      totalArea: "Total Master Area",
      totalPlots: "Planned Plots",
      heritageProximity: "Heritage Zone",
    },
    plots: {
      heading: "Plot Categories & Inventory",
      subheading: "Explore residential and commercial plots tailored for serene family living and high capital growth.",
      filterAll: "All Categories",
      filterResidential: "Residential",
      filterCommercial: "Commercial",
      sortSizeAsc: "Size (Smallest First)",
      sortSizeDesc: "Size (Largest First)",
      statusAvailable: "Available",
      statusBooked: "Booked",
      statusSold: "Sold",
      viewCards: "Card View",
      viewTable: "Table View",
      inquireNow: "Inquire Now",
      area: "Area",
      marla: "Marla",
      kanal: "Kanal",
      sqFt: "Sq. Ft.",
      plotNo: "Plot No.",
      block: "Block / Sector",
      status: "Status",
      action: "Action",
      dimensions: "Dimensions",
      facing: "Facing",
      street: "Street Width",
    },
    masterPlan: {
      heading: "Master Plan & Plotting System",
      subheading: "Interactive architectural layout with designated residential sectors, boulevard connectivity, and green reserves.",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      resetView: "Reset View",
      downloadPdf: "Download Master Plan (PDF)",
      legendTitle: "Master Plan Legend",
      residential: "Residential Plots",
      commercial: "Commercial Boulevard",
      parks: "Green Parks & Walkways",
      mosque: "Grand Jamia Mosque",
      civic: "Civic & Amenities",
      clickToInspect: "Click any block or plot in the interactive canvas to inspect dimensions & specifications.",
      selectedPlot: "Inspected Plot Details",
    },
    approvals: {
      heading: "Regulatory Approvals & NOC Status",
      subheading: "Complete legal transparency. We state the verified status of all filings with zero exaggeration.",
      viewDocument: "Inspect Document Specimen",
      closeDocument: "Close Document Viewer",
      statusUnderProcess: "Under Process",
      statusApproved: "Approved",
      statusSubmitted: "Submitted",
      statusTimeline: "Regulatory Sanction Timeline",
      plainLanguageTitle: "Plain-Language Legal Explainer",
      legalTransparencyTitle: "Official Transparency Commitment",
    },
    location: {
      heading: "Prime Location & Strategic Connectivity",
      subheading: "Moments from the Taxila Museum, M-1 Motorway, and GT Road, backed by the picturesque Margalla Hills.",
      getDirections: "Get Directions on Google Maps",
      nearbyLandmarks: "Key Landmarks & Distance Matrix",
      distance: "Distance",
      driveTime: "Drive Time",
      interactiveMap: "Interactive Regional Map",
    },
    contact: {
      heading: "Connect with Our Sales & Site Office",
      subheading: "Reach our dedicated site advisors within two clicks for inquiries, pricing schedules, or to arrange a site tour.",
      formName: "Full Name",
      formPhone: "Mobile / WhatsApp Number",
      formEmail: "Email Address",
      formPlotInterest: "Plot Size of Interest",
      formMessage: "Your Message or Specific Inquiry",
      formSubmit: "Submit Inquiry",
      formSubmitting: "Sending Your Inquiry...",
      formSuccess: "Thank you! Your inquiry has been received. Our team will contact you shortly.",
      formError: "There was an error sending your message. Please try again or WhatsApp us directly.",
      officeHoursTitle: "Site Office Hours",
      whatsappTitle: "Instant WhatsApp Chat",
      addressTitle: "Office & Site Location",
      selectPlotSize: "Select Plot Size (5 Marla, 7 Marla, 10 Marla, 1 Kanal, Commercial)",
    },
    footer: {
      aboutText:
        "Taxila Gardens Housing Scheme is an envisioned master-planned community celebrating the ancient serenity of Gandhara while delivering modern residential infrastructure.",
      quickLinks: "Quick Navigation",
      legalTitle: "Regulatory & Legal",
      disclaimerText:
        "Legal Disclaimer: Images and architectural renderings are artistic impressions. Prices, plot inventory counts, and project timelines are subject to final municipal sanction and regulatory authority notification.",
      rightsReserved: "All rights reserved. Taxila Gardens Housing Scheme.",
      tbdAuditLink: "View Placeholder & TBD Audit",
    },
    common: {
      tbdTag: "TBD / Pending",
      verified: "Verified",
      learnMore: "Learn More",
      close: "Close",
      explore: "Explore",
    },
  },
  ur: {
    nav: {
      home: "صفحۂ اول",
      about: "تعارف",
      plots: "پلاٹس و قیمتیں",
      masterPlan: "ماسٹر پلان",
      approvals: "این او سی و قانونی حیثیت",
      location: "مقام و راستہ",
      amenities: "سہولیات",
      gallery: "تصاویر",
      updates: "تازہ ترین پیش رفت",
      contact: "رابطہ کریں",
      bookVisit: "سائٹ وزٹ بک کریں",
      callNow: "فون کریں",
      whatsappUs: "واٹس ایپ",
    },
    hero: {
      title: "ٹیکسلا گارڈنز ہاؤسنگ سکیم",
      subheading: "جہاں گندھارا کا سکون جدید زندگی سے ملتا ہے",
      viewPlots: "دستیاب پلاٹس دیکھیں",
      bookVisit: "سائٹ وزٹ بک کریں",
      downloadBrochure: "ماسٹر پلان ڈاؤن لوڈ کریں",
      trustBadge: "یونیسکو ہیریٹیج زون • جدید ترین ٹاؤن پلاننگ",
      verifiedHeritage: "قدیم ٹیکسلا کے تاریخی ورثے کے سنگ",
    },
    trustStrip: {
      title: "منصوبے کی اہم معلومات و تصدیق",
      tbdNotice: "جن معلومات کے ساتھ [TBD] درج ہے وہ حتمی سرکاری نوٹیفکیشن سے مشروط ہیں",
      legalStatus: "قانونی حیثیت",
      totalArea: "کل رقبہ",
      totalPlots: "پلاٹس کی تعداد",
      heritageProximity: "تاریخی ورثہ",
    },
    plots: {
      heading: "پلاٹوں کی کیٹیگریز اور تفصیلات",
      subheading: "خاندانی سکون اور بہترین منافع بخش سرمایہ کاری کے لیے ۵ مرلہ سے ۱ کنال تک کے رہائشی اور کمرشل پلاٹس۔",
      filterAll: "تمام کیٹیگریز",
      filterResidential: "رہائشی",
      filterCommercial: "کمرشل",
      sortSizeAsc: "سائز (چھوٹے سے بڑا)",
      sortSizeDesc: "سائز (بڑے سے چھوٹا)",
      statusAvailable: "دستیاب",
      statusBooked: "بُک شدہ",
      statusSold: "فروخت شدہ",
      viewCards: "کارڈ ویو",
      viewTable: "ٹیبل ویو",
      inquireNow: "تفصیلات طلب کریں",
      area: "رقبہ",
      marla: "مرلہ",
      kanal: "کنال",
      sqFt: "مربع فٹ",
      plotNo: "پلاٹ نمبر",
      block: "بلاک / سیکٹر",
      status: "حیثیت",
      action: "رابطہ",
      dimensions: "پیمائش",
      facing: "رخ",
      street: "سڑک کی چوڑائی",
    },
    masterPlan: {
      heading: "ماسٹر پلان اور پلاٹنگ کا نظام",
      subheading: "رہائشی سیکٹرز، کشادہ سڑکوں اور گرین پارکس کا تفصیلی اور انٹرایکٹو نقشہ۔",
      zoomIn: "زوم ان",
      zoomOut: "زوم آؤٹ",
      resetView: "اصل حالت میں لائیں",
      downloadPdf: "ماسٹر پلان ڈاؤن لوڈ کریں (PDF)",
      legendTitle: "نقشے کی علامات (لیجنڈ)",
      residential: "رہائشی پلاٹس",
      commercial: "کمرشل بلیوارڈ",
      parks: "پارکس اور واک ویز",
      mosque: "جامع مسجد",
      civic: "عوامی سہولیات",
      clickToInspect: "نقشے میں کسی بھی بلاک یا پلاٹ پر کلک کر کے اس کی پیمائش اور تفصیلات دیکھیں۔",
      selectedPlot: "منتخب پلاٹ کی تفصیلات",
    },
    approvals: {
      heading: "قانونی منظوری اور این او سی کی حیثیت",
      subheading: "مکمل سچائی اور شفافیت۔ ہم بغیر کسی مبالغے کے قانونی عمل کی اصل صورتِ حال پیش کرتے ہیں۔",
      viewDocument: "سرٹیفکیٹ کا نمونہ دیکھیں",
      closeDocument: "دستاویز بند کریں",
      statusUnderProcess: "زیرِ کارروائی",
      statusApproved: "منظور شدہ",
      statusSubmitted: "جمع شدہ",
      statusTimeline: "قانونی مراحل کا ٹائم لائن",
      plainLanguageTitle: "آسان الفاظ میں این او سی کی وضاحت",
      legalTransparencyTitle: "ہماری قانونی شفافیت کی پالیسی",
    },
    location: {
      heading: "بہترین محلِ وقوع اور باآسانی رسائی",
      subheading: "ٹیکسلا میوزیم، موٹروے ایم-1 اور جی ٹی روڈ کے سنگم پر، مارگلہ کے خوبصورت پہاڑوں کے دامن میں۔",
      getDirections: "گوگل میپس پر راستہ دیکھیں",
      nearbyLandmarks: "اہم مقامات اور فاصلوں کا چارٹ",
      distance: "فاصلہ",
      driveTime: "ڈرائیو کا وقت",
      interactiveMap: "انٹرایکٹو ریجنل میپ",
    },
    contact: {
      heading: "سیلز اور سائٹ آفس سے رابطہ کریں",
      subheading: "پلاٹوں کی بکنگ اور سائٹ وزٹ کے لیے ہمارے نمائندوں سے براہِ راست رابطہ کریں۔",
      formName: "پورا نام",
      formPhone: "موبائل / واٹس ایپ نمبر",
      formEmail: "ای میل ایڈریس",
      formPlotInterest: "مطلوبہ پلاٹ کا سائز",
      formMessage: "آپ کا پیغام یا سوال",
      formSubmit: "پیغام ارسال کریں",
      formSubmitting: "ارسال ہو رہا ہے...",
      formSuccess: "شکریہ! آپ کا پیغام موصول ہو گیا ہے۔ ہمارا نمائندہ جلد آپ سے رابطہ کرے گا۔",
      formError: "پیغام بھیجنے میں خرابی پیش آئی۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔",
      officeHoursTitle: "دفتری اوقات",
      whatsappTitle: "فوری واٹس ایپ چیٹ",
      addressTitle: "سائٹ آفس کا پتہ",
      selectPlotSize: "پلاٹ سائز منتخب کریں (۵ مرلہ، ۷ مرلہ، ۱۰ مرلہ، ۱ کنال، کمرشل)",
    },
    footer: {
      aboutText:
        "ٹیکسلا گارڈنز ہاؤسنگ سکیم گندھارا کی قدیم پرامن تہذیب اور اکیسویں صدی کے جدید رہائشی انفراسٹرکچر کا ایک حسین سنگم ہے۔",
      quickLinks: "فوری لنکس",
      legalTitle: "قانونی معلومات",
      disclaimerText:
        "قانونی وضاحت: تمام تصاویر اور خاکہ جات علامتی ہیں۔ قیمتیں اور پلاٹس کی حتمی تعداد متعلقہ اتھارٹی کے سرکاری نوٹیفکیشن سے مشروط ہیں۔",
      rightsReserved: "جملہ حقوق محفوظ ہیں۔ ٹیکسلا گارڈنز ہاؤسنگ سکیم۔",
      tbdAuditLink: "پلیس ہولڈر (TBD) آڈٹ دیکھیں",
    },
    common: {
      tbdTag: "زیرِ کارروائی / TBD",
      verified: "تصدیق شدہ",
      learnMore: "مزید جانیے",
      close: "بند کریں",
      explore: "دیکھیے",
    },
  },
};
