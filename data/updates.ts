export interface DevelopmentUpdate {
  id: string;
  date: string;
  titleEn: string;
  titleUr: string;
  category: "Survey" | "Planning" | "Engineering" | "Regulatory" | "Community";
  summaryEn: string;
  summaryUr: string;
  detailsEn?: string;
  detailsUr?: string;
  statusBadge: "Completed" | "In Progress" | "Upcoming";
  highlight?: boolean;
}

export const developmentUpdates: DevelopmentUpdate[] = [
  {
    id: "update-01",
    date: "October 2026",
    titleEn: "Geotechnical Soil Testing & Contour Survey Completed",
    titleUr: "مٹی کے ٹیسٹ اور کنٹور سروے کی کامیاب تکمیل",
    category: "Survey",
    summaryEn: "Civil engineering teams have concluded topographical surveying and soil bearing capacity analysis across Blocks A, B, and C.",
    summaryUr: "سول انجینئرز نے بلاک A، B اور C میں زمین کی جانچ اور سروے مکمل کر لیا ہے۔",
    detailsEn: "Samples verified optimal load-bearing strata for earthquake-resistant residential construction in the Taxila valley basin.",
    detailsUr: "ٹیسٹ سے ثابت ہوا کہ زمین زلزلہ پروف رہائشی تعمیرات کے لیے انتہائی موزوں ہے۔",
    statusBadge: "Completed",
    highlight: true,
  },
  {
    id: "update-02",
    date: "September 2026",
    titleEn: "Master Layout Plan (LOP) Finalized for Submission",
    titleUr: "ماسٹر لے آؤٹ پلان (LOP) منظوری کے لیے تیار",
    category: "Planning",
    summaryEn: "Town planners have finalized the comprehensive 100ft entrance boulevard, green parks, and commercial sector distributions.",
    summaryUr: "ٹاؤن پلانرز نے ۱۰۰ فٹ داخلہ بلیوارڈ، پارکس اور کمرشل زونز کا ماسٹر پلان تیار کر لیا ہے۔",
    statusBadge: "Completed",
  },
  {
    id: "update-03",
    date: "August 2026",
    titleEn: "Regulatory Scrutiny File Lodged with Municipal Directorate",
    titleUr: "ریگولیٹری دستاویزات متعلقہ ڈائریکٹوریٹ میں جمع",
    category: "Regulatory",
    summaryEn: "Technical vetting documents submitted to the designated authority for initial NOC scrutiny and environmental clearances.",
    summaryUr: "این او سی اور ماحولیاتی جانچ کے لیے قانونی فائل باضابطہ جمع کرا دی گئی ہے۔",
    statusBadge: "In Progress",
  },
  {
    id: "update-04",
    date: "Upcoming Milestone",
    titleEn: "Main Boulevard Earthwork & Site Office Groundbreaking",
    titleUr: "مین بلیوارڈ کی کھدائی اور سائٹ آفس کا سنگ بنیاد",
    category: "Engineering",
    summaryEn: "Heavy earth-moving machinery scheduled to commence grading for the Grand Entrance Avenue and on-site customer experience center [TBD].",
    summaryUr: "مین روڈ کی کشادگی اور آن سائٹ کسٹمر فیسیلیٹیشن سینٹر کے قیام کا آغاز جلد متوقع ہے۔",
    statusBadge: "Upcoming",
  },
];
