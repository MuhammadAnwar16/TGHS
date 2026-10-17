export interface AmenityItem {
  id: string;
  titleEn: string;
  titleUr: string;
  category: "Spiritual" | "Recreation" | "Security" | "Infrastructure" | "Education" | "Commercial";
  descriptionEn: string;
  descriptionUr: string;
  iconName: string;
  isTbd?: boolean;
}

export const amenitiesData: AmenityItem[] = [
  {
    id: "amenity-mosque",
    titleEn: "Grand Jamia Mosque",
    titleUr: "مرکزی جامع مسجد",
    category: "Spiritual",
    descriptionEn: "A magnificent architectural centerpiece integrating classic Gandhara stone-relief motifs with grand domed Islamic prayer halls and serene courtyards.",
    descriptionUr: "قدیم پتھر کے روایتی نقوش اور اسلامی فنِ تعمیر کا حسین امتزاج، وسیع و پرسکون عبادت گاہ۔",
    iconName: "Landmark",
  },
  {
    id: "amenity-parks",
    titleEn: "Gandhara Heritage Theme Parks",
    titleUr: "گندھارا تھیم پارکس و گرین بیلٹس",
    category: "Recreation",
    descriptionEn: "Lush botanical gardens, tranquil reflecting fountains, native Margalla flora, and pedestrian jogging tracks designed for wellness.",
    descriptionUr: "خوبصورت فوارے، قدرتی پودے، واکنگ ٹریکس اور بچوں کے لیے تفریحی مقامات۔",
    iconName: "Trees",
  },
  {
    id: "amenity-security",
    titleEn: "24/7 Gated Security & Surveillance",
    titleUr: "۲۴ گھنٹے سمارٹ سیکیورٹی اور باؤنڈری وال",
    category: "Security",
    descriptionEn: "Multi-tiered security featuring stone perimeter walls, RFID access barriers, continuous HD CCTV surveillance, and dedicated patrolling units.",
    descriptionUr: "محفوظ چار دیواری، سمارٹ مانیٹرنگ اور تربیت یافتہ سیکیورٹی گارڈز۔",
    iconName: "ShieldCheck",
  },
  {
    id: "amenity-utilities",
    titleEn: "Underground Utilities Network",
    titleUr: "زیر زمین بجلی اور سیوریج نیٹ ورک",
    category: "Infrastructure",
    descriptionEn: "Clutter-free skylines with underground power lines, advanced fiber-optic telecom ducts, filtered water reservoirs, and storm drainage [TBD].",
    descriptionUr: "کھلے تاروں سے پاک جدید زیرِ زمین بجلی کا نظام، پینے کا صاف پانی اور نکاسیِ آب۔",
    iconName: "Zap",
    isTbd: true,
  },
  {
    id: "amenity-commercial",
    titleEn: "Commercial Boulevard & Retail",
    titleUr: "کمرشل بلیوارڈ و شاپنگ ایریا",
    category: "Commercial",
    descriptionEn: "Convenient grocery markets, artisan bakeries, pharmacies, banking services, and community cafés along the 100ft entrance boulevard.",
    descriptionUr: "ضروریاتِ زندگی کی تمام سہولیات، فارمیسی، مارکیٹ اور بینکنگ سروسز۔",
    iconName: "ShoppingBag",
  },
  {
    id: "amenity-school",
    titleEn: "Premier Educational Campus",
    titleUr: "کمیونٹی اسکول و ایجوکیشن کیمپس",
    category: "Education",
    descriptionEn: "Designated institutional land reservation for an accredited primary and secondary school campus within walking distance of all blocks [TBD].",
    descriptionUr: "معیاری تعلیم کے لیے مختص رقبہ جہاں جدید اسکول قائم کیا جائے گا۔",
    iconName: "GraduationCap",
    isTbd: true,
  },
  {
    id: "amenity-sports",
    titleEn: "Sports Enclave & Community Club",
    titleUr: "کمیونٹی کلب و اسپورٹس کمپلیکس",
    category: "Recreation",
    descriptionEn: "Floodlit outdoor sports courts for badminton, basketball, dedicated kids' activity equipment, and a multi-purpose resident community hall [TBD].",
    descriptionUr: "کھیلوں کے میدان، انڈور گیمز اور اہل علاقہ کے لیے کمیونٹی ہال۔",
    iconName: "Activity",
    isTbd: true,
  },
  {
    id: "amenity-health",
    titleEn: "Medical Center & First-Aid Clinic",
    titleUr: "طبی مرکز و ایمرجنسی کلینک",
    category: "Infrastructure",
    descriptionEn: "24-hour first responder medical dispensary, urgent care clinic, and ambulance docking facility ensuring rapid resident assistance [TBD].",
    descriptionUr: "فوری طبی امداد اور صحت کی بنیادی سہولیات سے آراستہ کلینک۔",
    iconName: "HeartPulse",
    isTbd: true,
  },
];
