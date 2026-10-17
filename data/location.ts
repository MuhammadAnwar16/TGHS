export interface Landmark {
  id: string;
  nameEn: string;
  nameUr: string;
  category: "Heritage" | "Transport" | "Education" | "Health" | "Civic";
  distanceKm: string;
  driveTimeMin: string;
  descriptionEn: string;
  descriptionUr: string;
  lat: number;
  lng: number;
}

export interface LocationInfo {
  exactAddress: string;
  exactAddressEn: string;
  exactAddressUr: string;
  isAddressTbd: boolean;
  schemeCoordinates: {
    lat: number;
    lng: number;
  };
  googleMapsDirectionsUrl: string;
  summaryEn: string;
  summaryUr: string;
  landmarks: Landmark[];
}

export const locationData: LocationInfo = {
  exactAddress: "Taxila Gardens Housing Scheme, near Taxila Hills & HITEC, Taxila, Rawalpindi District, Punjab",
  exactAddressEn: "Near Taxila Hills & HITEC, off HMC Road, Taxila, Rawalpindi District, Punjab",
  exactAddressUr: "ٹیکسلا ہلز اور HITEC کے قریب، HMC روڈ، تحصیل ٹیکسلا، ضلع راولپنڈی، پنجاب",
  isAddressTbd: false,
  schemeCoordinates: {
    lat: 33.7820,
    lng: 72.7937,
  },
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/xbUgZ7K5DpDAJGxr9",
  summaryEn:
    "Strategically located near the scenic Taxila Hills and HITEC, Taxila Gardens Housing Scheme enjoys convenient connectivity via HMC Road and G.T. Road (N-5), providing easy access to Rawalpindi, Islamabad, and major industrial and educational hubs. A fully delivered community surrounded by natural beauty and essential urban amenities.",
  summaryUr:
    "ٹیکسلا گارڈنز ہاؤسنگ سکیم خوبصورت ٹیکسلا ہلز اور HITEC کے قریب، HMC روڈ اور جی ٹی روڈ کے ذریعے راولپنڈی، اسلام آباد اور صنعتی و تعلیمی مراکز سے باآسانی منسلک ہے — ایک مکمل رہائشی کمیونٹی جو فطری حسن اور شہری سہولیات کا بہترین سنگم ہے۔",
  landmarks: [
    {
      id: "lm-taxila-museum",
      nameEn: "Taxila Museum",
      nameUr: "ٹیکسلا میوزیم",
      category: "Heritage",
      distanceKm: "4.5 km",
      driveTimeMin: "8 mins",
      descriptionEn: "World-renowned repository of Gandhara Buddhist art, stone carvings, and gold relics dating back to 600 BCE.",
      descriptionUr: "گندھارا بدھ مت کے فن پاروں اور قدیم مجسموں کا عالمی شہرت یافتہ میوزیم۔",
      lat: 33.7464,
      lng: 72.8288,
    },
    {
      id: "lm-m1-interchange",
      nameEn: "M-1 Motorway Interchange",
      nameUr: "موٹروے M-1 انٹرچینج",
      category: "Transport",
      distanceKm: "6.0 km",
      driveTimeMin: "10 mins",
      descriptionEn: "Direct access to Islamabad, New Islamabad Airport, and Peshawar via the national motorway network.",
      descriptionUr: "اسلام آباد ایئرپورٹ اور پشاور کے لیے تیز رفتار موٹروے رسائی۔",
      lat: 33.765,
      lng: 72.748,
    },
    {
      id: "lm-gt-road",
      nameEn: "Grand Trunk (GT) Road N-5",
      nameUr: "جی ٹی روڈ (N-5)",
      category: "Transport",
      distanceKm: "3.2 km",
      driveTimeMin: "5 mins",
      descriptionEn: "Pakistan's primary economic arterial highway connecting Taxila directly to Rawalpindi & Wah Cantt.",
      descriptionUr: "راولپنڈی اور واہ کینٹ سے ملانے والی مرکزی شاہراہ۔",
      lat: 33.741,
      lng: 72.785,
    },
    {
      id: "lm-dharmarajika",
      nameEn: "Dharmarajika Stupa (UNESCO)",
      nameUr: "دھرم راجیکا سٹوپا (یونیسکو)",
      category: "Heritage",
      distanceKm: "6.8 km",
      driveTimeMin: "12 mins",
      descriptionEn: "One of the oldest surviving stupas built by Emperor Ashoka in the 3rd century BCE.",
      descriptionUr: "شہنشاہ اشوک کا تعمیر کردہ تیسری صدی قبل مسیح کا تاریخی سٹوپا۔",
      lat: 33.7602,
      lng: 72.8466,
    },
    {
      id: "lm-taxila-cantt",
      nameEn: "Taxila Cantt & Railway Junction",
      nameUr: "ٹیکسلا کینٹ و ریلوے اسٹیشن",
      category: "Civic",
      distanceKm: "5.0 km",
      driveTimeMin: "9 mins",
      descriptionEn: "Secure civic cantonment zone with historic railway junction connecting to Havelian and Karachi.",
      descriptionUr: "محفوظ کینٹ ایریا اور تاریخی ریلوے جنکشن۔",
      lat: 33.738,
      lng: 72.805,
    },
    {
      id: "lm-uet",
      nameEn: "UET Taxila",
      nameUr: "یو ای ٹی ٹیکسلا (انجینئرنگ یونیورسٹی)",
      category: "Education",
      distanceKm: "5.5 km",
      driveTimeMin: "10 mins",
      descriptionEn: "Top-tier public engineering university known for high academic research and technology innovation.",
      descriptionUr: "پاکستان کی صفِ اول کی انجینئرنگ یونیورسٹی۔",
      lat: 33.7656,
      lng: 72.8236,
    },
    {
      id: "lm-isb-airport",
      nameEn: "Islamabad Int'l Airport",
      nameUr: "اسلام آباد انٹرنیشنل ایئرپورٹ",
      category: "Transport",
      distanceKm: "28.0 km",
      driveTimeMin: "25 mins",
      descriptionEn: "Direct signal-free connectivity via M-1 Motorway and Hakla-D.I. Khan corridor link.",
      descriptionUr: "موٹروے کے ذریعے باسہولت اور سگنل فری رسائی۔",
      lat: 33.561,
      lng: 72.851,
    },
  ],
};
