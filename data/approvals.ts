export interface ApprovalItem {
  id: string;
  authorityName: string;
  authorityNameUrdu: string;
  certificateTitle: string;
  certificateTitleUrdu: string;
  referenceNumber: string;
  status: "Approved" | "Official Letter";
  submissionDate: string;
  approvalDate: string;
  descriptionEn: string;
  descriptionUr: string;
  plainLanguageExplainerEn: string;
  plainLanguageExplainerUr: string;
  documentType: "NOC Document" | "Approved Master Layout";
  documentUrl: string;
  isTbd: boolean;
}

export interface TimelineMilestone {
  stage: number;
  titleEn: string;
  titleUr: string;
  status: "Completed";
  dateText: string;
  descriptionEn: string;
  descriptionUr: string;
  isTbd: boolean;
}

export const approvalsData: {
  authoritySummary: string;
  nocSummary: string;
  approvalsList: ApprovalItem[];
  timeline: TimelineMilestone[];
  disclaimerEn: string;
  disclaimerUr: string;
} = {
  authoritySummary: "Tehsil Municipal Administration (TMA) Haripur",
  nocSummary: "TMA Haripur Approval Stamp (28 Feb 2016) & NOC Letter No. 1634/TMA(H)",
  approvalsList: [
    {
      id: "app-tma-noc-01",
      authorityName: "Tehsil Municipal Administration (TMA) Haripur",
      authorityNameUrdu: "تحصیل میونسپل ایڈمنسٹریشن (TMA) ہری پور",
      certificateTitle: "Official N.O.C Grant Letter",
      certificateTitleUrdu: "این او سی کا باضابطہ تصدیقی خط",
      referenceNumber: "No. 1634 / TMA (H)",
      status: "Official Letter",
      submissionDate: "25 April 2016",
      approvalDate: "29 April 2016",
      descriptionEn:
        "Official letter issued by the Tehsil Municipal Officer (TMA Haripur) to Chairman Mr. Mehmood Nawaz Saleem for the Grant of N.O.C in favour of Taxila Gardens Housing Scheme, acknowledging official scrutiny fee deposited on 17-03-2016.",
      descriptionUr:
        "تحصیل میونسپل آفیسر (TMA ہری پور) کی جانب سے چیئرمین مسٹر محمود نواز سلیم کے نام جاری کردہ باضابطہ این او سی خط، جس میں سرکاری فیس اور کاغذی جانچ پڑتال کی توثیق درج ہے۔",
      plainLanguageExplainerEn:
        "Legitimate municipal letter from TMA Haripur acknowledging scheme submission, receipt of official processing fees, and documentation scrutiny.",
      plainLanguageExplainerUr:
        "ٹی ایم اے ہری پور کی طرف سے جاری کردہ باضابطہ خط جو سکیم کے قانونی پراسیس اور فیس ادائیگی کی توثیق کرتا ہے۔",
      documentType: "NOC Document",
      documentUrl: "/images/approvals/tma-haripur-noc-letter.jpg",
      isTbd: false,
    },
    {
      id: "app-tma-layout-02",
      authorityName: "Tehsil Municipal Administration (TMA) Haripur",
      authorityNameUrdu: "تحصیل میونسپل ایڈمنسٹریشن (TMA) ہری پور",
      certificateTitle: "Approved Master Layout Plan (360.32 Kanals)",
      certificateTitleUrdu: "باضابطہ منظور شدہ ماسٹر لے آؤٹ پلان (۳۶۰.۳۲ کنال)",
      referenceNumber: "TMA Haripur Sub-Engineer Approval Stamp",
      status: "Approved",
      submissionDate: "18 October 2015",
      approvalDate: "28 February 2016",
      descriptionEn:
        "Official Master Layout Plan covering 360.32 Kanals, bearing the official approval stamp and signatures of TMA Haripur Town Planning and Sub-Engineer. Sanctions 699 residential plots, wide boulevard road networks, parks, and civic reserves.",
      descriptionUr:
        "۳۶۰.۳۲ کنال پر مشتمل سرکاری طور پر منظور شدہ ماسٹر لے آؤٹ پلان، جس پر TMA ہری پور کی باقاعدہ منظوری کی مہر اور دستخط ثبت ہیں۔ اس میں ۶۹۹ رہائشی پلاٹس، گرین پارکس، جامع مسجد اور کشادہ سڑکیں منظور شدہ ہیں۔",
      plainLanguageExplainerEn:
        "The complete town planning layout is officially stamped and approved by TMA Haripur municipal authorities, protecting all designated road widths and public amenity areas.",
      plainLanguageExplainerUr:
        "ٹی ایم اے ہری پور سے باقاعدہ مہر شدہ اور منظور شدہ نقشہ، جو سڑکوں کی چوڑائی اور پارکوں و سہولیات کے رقبے کو قانونی تحفظ فراہم کرتا ہے۔",
      documentType: "Approved Master Layout",
      documentUrl: "/images/approvals/approved-master-layout.jpg",
      isTbd: false,
    },
  ],
  timeline: [
    {
      stage: 1,
      titleEn: "Master Layout Planning & Architectural Survey",
      titleUr: "ماسٹر لے آؤٹ پلان اور اراضی کا سروے",
      status: "Completed",
      dateText: "18 October 2015",
      descriptionEn: "Complete architectural town planning by Pak Associate Islamabad establishing the 360.32 Kanal layout, road hierarchy, and sector boundaries.",
      descriptionUr: "پاک ایسوسی ایٹ اسلام آباد کی جانب سے ۳۶۰.۳۲ کنال ماسٹر لے آؤٹ کی پیشہ ورانہ ٹاؤن پلاننگ اور باؤنڈری سروے۔",
      isTbd: false,
    },
    {
      stage: 2,
      titleEn: "Official TMA Haripur Master Plan Approval",
      titleUr: "ٹی ایم اے ہری پور سے ماسٹر لے آؤٹ کی باضابطہ منظوری",
      status: "Completed",
      dateText: "28 February 2016",
      descriptionEn: "TMA Haripur formally sanctioned and stamped the master layout plan for Taxila Gardens Housing Scheme, approving the 699 residential plots.",
      descriptionUr: "ٹی ایم اے ہری پور نے ماسٹر لے آؤٹ پلان کی باضابطہ جانچ کے بعد منظوری کی مہر اور دستخط جاری کیے۔",
      isTbd: false,
    },
    {
      stage: 3,
      titleEn: "Official N.O.C Letter Issued (Letter No. 1634/TMA)",
      titleUr: "باضابطہ این او سی خط کا اجرا (لیٹر نمبر 1634/TMA)",
      status: "Completed",
      dateText: "29 April 2016",
      descriptionEn: "Tehsil Municipal Officer (TMO Haripur) issued official letter No. 1634 / TMA (H) regarding grant of N.O.C, acknowledging official scrutiny fee deposit.",
      descriptionUr: "ٹی ایم او ہری پور کی جانب سے لیٹر نمبر 1634 کے تحت این او سی کے اجرا اور فیس کی ادائیگی کی باضابطہ تصدیق۔",
      isTbd: false,
    },
    {
      stage: 4,
      titleEn: "Full On-Ground Delivery & Settlement",
      titleUr: "مکمل ڈیلیوری، کارپٹڈ سڑکیں اور آباد کمیونٹی",
      status: "Completed",
      dateText: "Delivered & Established",
      descriptionEn: "Landmark Group completed carpeted dual-avenues, monuments, electrification conduits, and established community living at Taxila Gardens.",
      descriptionUr: "لینڈ مارک گروپ کی جانب سے موقع پر پختہ کارپٹڈ سڑکوں، یادگاروں، بجلی اور رہائشی سہولیات کی مکمل ڈیلیوری۔",
      isTbd: false,
    },
  ],
  disclaimerEn:
    "Official Documentation Notice: The documents displayed above are authentic public records of Tehsil Municipal Administration (TMA) Haripur for Taxila Gardens Housing Scheme. Prospective buyers and residents can inspect the high-resolution documents directly.",
  disclaimerUr:
    "قانونی شفافیت: اوپر دی گئی تمام دستاویزات تحصیل میونسپل ایڈمنسٹریشن (TMA) ہری پور کے مصدقہ ریکارڈ پر مشتمل ہیں۔ خریدار مکمل شفافیت کے ساتھ ان دستاویزات کا براہِ راست معائنہ کر سکتے ہیں۔",
};
