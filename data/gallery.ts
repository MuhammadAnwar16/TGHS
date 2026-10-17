export interface GalleryItem {
  id: string;
  titleEn: string;
  titleUr: string;
  imageSrc: string;
  altEn: string;
  altUr: string;
  captionEn: string;
  captionUr: string;
  badge?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    titleEn: "Main Boulevard & Plantation Corridor",
    titleUr: "مین بلیوارڈ اور گرین کوریڈور",
    imageSrc: "/images/gallery/boulevard-overhead.jpg",
    altEn: "Aerial view of Taxila Gardens main entrance boulevard with center median landscaping",
    altUr: "ٹیکسلا گارڈنز کی مرکزی شاہراہ اور خوبصورت شجرکاری",
    captionEn: "Spacious dual carriageway entrance boulevard with landscaped center island and palm trees.",
    captionUr: "وسیع ڈوئل کیریج وے مرکزی شاہراہ مع خوبصورت گرین بیلٹ اور شجرکاری۔",
  },
  {
    id: "gal-02",
    titleEn: "Grand Entrance Monuments & Obelisk",
    titleUr: "شاندار مونو منٹس اور مرکزی یادگار",
    imageSrc: "/images/gallery/entrance-monument.jpg",
    altEn: "Grand architectural monument with classical pillars and central obelisk at entrance",
    altUr: "سکیم کے مرکزی چوک پر شاندار ستون اور تاریخی طرز کے مونو منٹس",
    captionEn: "Iconic architectural monuments and obelisk marking the grand arrival into Taxila Gardens.",
    captionUr: "ٹیکسلا گارڈنز کے داخلی دروازے پر واقع تاریخی اور پرشکوہ تعمیراتی یادگار۔",
  },
  {
    id: "gal-03",
    titleEn: "Asphalt Carpeted Avenue & Road Infrastructure",
    titleUr: "مکمل کارپٹڈ سڑکیں اور انفراسٹرکچر",
    imageSrc: "/images/gallery/carpeted-avenue.jpg",
    altEn: "High-angle view of wide carpeted roads with road markings and green plantation",
    altUr: "وسیع پختہ کارپٹڈ شاہراہ اور منظم روڈ نیٹ ورک",
    captionEn: "Wide asphalt-carpeted sector road network with curbed medians and organized traffic lanes.",
    captionUr: "جدید معیارات پر تعمیر شدہ پختہ کارپٹڈ سڑکیں اور محفوظ روڈ انفراسٹرکچر۔",
  },
  {
    id: "gal-04",
    titleEn: "Road Carpeting & Civil Development Work",
    titleUr: "سڑکوں کی کارپٹنگ اور ترقیاتی کام",
    imageSrc: "/images/gallery/road-asphalt-work.jpg",
    altEn: "Road paving machinery laying asphalt with engineering crew on site",
    altUr: "سائٹ پر سڑکوں کی کارپٹنگ اور ترقیاتی کاموں کا منظر",
    captionEn: "High-grade road paving machinery and civil engineering crew laying durable road infrastructure.",
    captionUr: "جدید مشینری اور انجینئرنگ ٹیم کے ذریعے سڑکوں کی پختہ کارپٹنگ کا عمل۔",
  },
  {
    id: "gal-05",
    titleEn: "Architectural Pillars & Landscaped Grounds",
    titleUr: "شاہی طرز کے ستون اور سرسبز گراؤنڈز",
    imageSrc: "/images/gallery/heritage-monument-park.jpg",
    altEn: "Classical golden pillars overlooking lush green lawns and open sky",
    altUr: "خوبصورت گولڈن ستون اور سرسبز شاداب لان",
    captionEn: "Majestic classical architectural structures surrounded by expansive green turf and natural ambiance.",
    captionUr: "سرسبز لان اور تاریخی فنِ تعمیر کی عکاسی کرتے دلکش پرشکوہ ستون۔",
  },
];
