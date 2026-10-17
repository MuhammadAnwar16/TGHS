export type PlotCategoryName =
  | "5 Marla"
  | "7 Marla"
  | "7 Marla / 7.5 Marla"
  | "8 Marla"
  | "10 Marla"
  | "1 Kanal"
  | "Commercial";

export type PlotStatus = "Available" | "Booked" | "Sold";
export type PlotFeature = "Standard" | "Corner" | "Park Facing" | "Main Boulevard";

export interface PlotCategory {
  id: string;
  name: PlotCategoryName;
  nameUrdu: string;
  marketName: string;
  marla: number | string;
  marlaDetail: string;
  kanal: number | string;
  kanalDetail: string;
  sqFt: number;
  totalAreaDisplay: string;
  dimensions: string;
  count?: string;
  priceDisplay: string;
  descriptionEn: string;
  descriptionUr: string;
  recommendedFor: string;
  features: string[];
}

export interface PlotItem {
  id: string;
  plotNumber: string;
  block: string;
  category: PlotCategoryName;
  marketName: string;
  dimensions: string;
  totalAreaDisplay: string;
  areaMarla: string;
  sizeMarla: number;
  areaKanal: string;
  sizeKanal: number;
  areaSqFt: number;
  status: PlotStatus;
  features: string[];
  price: string;
  streetWidth: string;
  facing: string;
}

export interface PlottingSystemInfo {
  planningOverviewEn: string;
  planningOverviewUr: string;
  roadWidths: {
    type: string;
    width: string;
    description: string;
  }[];
  paymentPlanNoteEn: string;
  paymentPlanNoteUr: string;
  ballotingSystem: string;
}

export const plotCategories: PlotCategory[] = [
  {
    id: "cat-5m",
    name: "5 Marla",
    nameUrdu: "۵ مرلہ پلاٹ",
    marketName: "5 Marla Plot",
    marla: 5,
    marlaDetail: "5 Marlas ",
    kanal: 0.25,
    kanalDetail: "0.25 Kanal",
    sqFt: 1125,
    totalAreaDisplay: "1,125 sq ft",
    dimensions: "25 × 45",
    priceDisplay: "Price on Inquiry",
    descriptionEn: "25 × 45 plot with 1,125 sq ft total area. Well-proportioned for compact modern residential construction.",
    descriptionUr: "25 × 45 فٹ رقبہ 1,125 مربع فٹ۔ جدید اور خوبصورت خاندانی رہائش کے لیے بہترین انتخاب۔",
    recommendedFor: "Small families & smart investors",
    features: [
      "Dimensions: 25 × 45",
      "Total Area: 1,125 sq ft",
      "5 Marlas ",
      "Area in Kanals: 0.25 Kanal",
    ],
  },
  {
    id: "cat-7m",
    name: "7 Marla",
    nameUrdu: "۷  مرلہ پلاٹ",
    marketName: "7 Marla ",
    marla: 7.33,
    marlaDetail: "7 Marlas ",
    kanal: 0.37,
    kanalDetail: "0.37 Kanal",
    sqFt: 1650,
    totalAreaDisplay: "1,650 sq ft",
    dimensions: "30 × 55",
    priceDisplay: "Price on Inquiry",
    descriptionEn: "30 × 55 plot with 1,650 sq ft total area. Ample layout for multi-bedroom homes and double car porches.",
    descriptionUr: "30 × 55 فٹ رقبہ 1,650 مربع فٹ۔ کشادہ کمروں، لان اور کار پورچ کے ساتھ متوازن رہائش گاہ۔",
    recommendedFor: "Growing families desiring comfortable space",
    features: [
      "Dimensions: 30 × 55",
      "Total Area: 1,650 sq ft",
      "7 Marlas ",
      "Area in Kanals: 0.37 Kanal",
    ],
  },
  {
    id: "cat-8m",
    name: "8 Marla",
    nameUrdu: "۸ مرلہ پلاٹ",
    marketName: "8 Marla Plot",
    marla: 8,
    marlaDetail: "8 Marlas ",
    kanal: 0.40,
    kanalDetail: "0.40 Kanal",
    sqFt: 1800,
    totalAreaDisplay: "1,800 sq ft",
    dimensions: "30 × 60",
    priceDisplay: "Price on Inquiry",
    descriptionEn: "30 × 60 plot with 1,800 sq ft total area. Generous 60ft depth allowing custom architectural layouts.",
    descriptionUr: "30 × 60 فٹ رقبہ 1,800 مربع فٹ۔ کھلی رہائش اور خوبصورت اندرونی ڈیزائن کے حامل ولاز کے لیے۔",
    recommendedFor: "Custom luxury home builders & investors",
    features: [
      "Dimensions: 30 × 60",
      "Total Area: 1,800 sq ft",
      "8 Marlas ",
      "Area in Kanals: 0.40 Kanal",
    ],
  },
  {
    id: "cat-10m",
    name: "10 Marla",
    nameUrdu: "۱۰ مرلہ پلاٹ",
    marketName: "10 Marla Plot",
    marla: 10.11,
    marlaDetail: "10.11 Marlas ",
    kanal: 0.50,
    kanalDetail: "0.50 Kanal",
    sqFt: 2275,
    totalAreaDisplay: "2,275 sq ft",
    dimensions: "35 × 65",
    priceDisplay: "Price on Inquiry",
    descriptionEn: "35 × 65 plot with 2,275 sq ft total area. Premium residential plot accommodating luxury villas and lawns.",
    descriptionUr: "35 × 65 فٹ رقبہ 2,275 مربع فٹ۔ شاندار لگژری ولاز، خوبصورت لان اور پرتعیش رہائش کے لیے۔",
    recommendedFor: "Luxury residences & executive families",
    features: [
      "Dimensions: 35 × 65",
      "Total Area: 2,275 sq ft",
      "10.11 Marlas ",
      "Area in Kanals: 0.50 Kanal",
    ],
  },
  {
    id: "cat-1k",
    name: "1 Kanal",
    nameUrdu: "۱ کنال پلاٹ",
    marketName: "1 Kanal Plot",
    marla: 20,
    marlaDetail: "20 Marlas ",
    kanal: 1.0,
    kanalDetail: "1.00 Kanal",
    sqFt: 4500,
    totalAreaDisplay: "4,500 sq ft",
    dimensions: "50 × 90",
    priceDisplay: "Price on Inquiry",
    descriptionEn: "50 × 90 estate plot with 4,500 sq ft total area. The premier residential address in Taxila Gardens.",
    descriptionUr: "50 × 90 فٹ رقبہ 4,500 مربع فٹ۔ ٹیکسلا گارڈنز کا سب سے باوقار رہائشی پتہ۔ وسیع لانز اور عالیشان کوٹھیوں کے لیے۔",
    recommendedFor: "Prestigious estate living & high-value property portfolios",
    features: [
      "Dimensions: 50 × 90",
      "Total Area: 4,500 sq ft",
      "20 Marlas ",
      "Area in Kanals: 1.00 Kanal",
    ],
  },
];

export const samplePlotInventory: PlotItem[] = [
  {
    id: "TG-PL-5M",
    plotNumber: "5M-01",
    block: "Residential Sector",
    category: "5 Marla",
    marketName: "5 Marla Plot",
    dimensions: "25 × 45",
    areaSqFt: 1125,
    totalAreaDisplay: "1,125 sq ft",
    areaMarla: "5 Marlas (or 4.13 Marlas)",
    sizeMarla: 5,
    areaKanal: "0.25 Kanal",
    sizeKanal: 0.25,
    status: "Available",
    features: ["Standard & Corner Options", "Paved Street Access"],
    price: "Price on Inquiry",
    streetWidth: "35ft - 40ft Street",
    facing: "Margalla Foothills View",
  },
  {
    id: "TG-PL-7M",
    plotNumber: "7M-01",
    block: "Residential Sector",
    category: "7 Marla",
    marketName: "7 Marla Plot",
    dimensions: "30 × 55",
    areaSqFt: 1650,
    totalAreaDisplay: "1,650 sq ft",
    areaMarla: "7 Marlas",
    sizeMarla: 7,
    areaKanal: "0.37 Kanal",
    sizeKanal: 0.37,
    status: "Available",
    features: ["Corner Options Available", "Direct Access to Main Avenue"],
    price: "Price on Inquiry",
    streetWidth: "40ft Street",
    facing: "Scenic Green Belt",
  },
  {
    id: "TG-PL-8M",
    plotNumber: "8M-01",
    block: "Residential Sector",
    category: "8 Marla",
    marketName: "8 Marla Plot",
    dimensions: "30 × 60",
    areaSqFt: 1800,
    totalAreaDisplay: "1,800 sq ft",
    areaMarla: "8 Marlas (or 6.61 Marlas)",
    sizeMarla: 8,
    areaKanal: "0.40 Kanal",
    sizeKanal: 0.40,
    status: "Available",
    features: ["30ft Frontage", "Deep 60ft Plot Architecture"],
    price: "Price on Inquiry",
    streetWidth: "40ft Street",
    facing: "Open Boulevard View",
  },
  {
    id: "TG-PL-10M",
    plotNumber: "10M-01",
    block: "Executive Sector",
    category: "10 Marla",
    marketName: "10 Marla Plot",
    dimensions: "35 × 65",
    areaSqFt: 2275,
    totalAreaDisplay: "2,275 sq ft",
    areaMarla: "10.11 Marlas (or 8.35 Marlas)",
    sizeMarla: 10.11,
    areaKanal: "0.50 Kanal",
    sizeKanal: 0.50,
    status: "Available",
    features: ["Prime Sector Location", "Park Facing & Corner Options"],
    price: "Price on Inquiry",
    streetWidth: "50ft Sector Road",
    facing: "Central Park / Green Zone",
  },
  {
    id: "TG-PL-1K",
    plotNumber: "1K-01",
    block: "Executive Enclave",
    category: "1 Kanal",
    marketName: "1 Kanal Plot",
    dimensions: "50 × 90",
    areaSqFt: 4500,
    totalAreaDisplay: "4,500 sq ft",
    areaMarla: "20 Marlas (or 16.53 Marlas)",
    sizeMarla: 20,
    areaKanal: "1.00 Kanal",
    sizeKanal: 1.0,
    status: "Available",
    features: ["Main Boulevard Proximity", "50ft Wide Frontage"],
    price: "Price on Inquiry",
    streetWidth: "60ft - 80ft Boulevard",
    facing: "Panoramic Taxila Hills",
  },
];

export const plottingSystemInfo: PlottingSystemInfo = {
  planningOverviewEn:
    "The scheme's master layout is arranged in distinct residential enclaves with wide road networks, landscaped corridors, and dependable infrastructure.",
  planningOverviewUr:
    "سکیم کا ماسٹر لے آؤٹ کشادہ سڑکوں، سرسبز کوریڈورز اور معیاری بنیادی ڈھانچے کے ساتھ مختلف رہائشی بلاکس پر مشتمل ہے۔",
  roadWidths: [
    { type: "Grand Entrance Avenue", width: "100 ft", description: "Dual carriageway with stone median & landscaped borders" },
    { type: "Main Sector Boulevards", width: "80 ft & 60 ft", description: "Interconnecting primary residential sectors" },
    { type: "Internal Residential Streets", width: "35 ft - 40 ft", description: "Spacious suburban streets with pedestrian paved sidewalks" },
  ],
  paymentPlanNoteEn:
    "Official rate cards and flexible installment plans are available upon request from the sales office.",
  paymentPlanNoteUr:
    "سرکاری نرخ نامہ اور ادائیگی کے آسان اقساط پلان کے لیے ہمارے سیلز آفس سے رابطہ کریں۔",
  ballotingSystem: "Direct allotment and plot selection available through the official sales office.",
};
