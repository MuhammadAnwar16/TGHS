import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1F1B16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://taxilagardens.pk"),
  title: {
    template: "%s | Taxila Gardens Housing Scheme",
    default: "Taxila Gardens Housing Scheme | Gandhara Heritage Living in Taxila",
  },
  description:
    "Taxila Gardens Housing Scheme — a fully delivered and approved (28 Feb 2016) residential community by Landmark Group, near Taxila Hills & HITEC, off HMC Road, Taxila. 360 Kanal master community with wide roads, parks, mosques, and commercial zones.",
  keywords: [
    "Taxila Gardens Housing Scheme",
    "Landmark Group Taxila",
    "plots in Taxila",
    "Taxila NOC approved housing",
    "housing scheme near HITEC Taxila",
    "HMC Road Taxila plots",
    "Taxila Hills housing",
    "360 kanal housing Taxila",
    "approved housing scheme Taxila 2016",
    "ٹیکسلا گارڈنز ہاؤسنگ سکیم",
  ],
  authors: [{ name: "Taxila Gardens Housing Scheme" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://taxilagardens.pk",
    siteName: "Taxila Gardens Housing Scheme",
    title: "Taxila Gardens Housing Scheme | Ancient Heritage Meets Modern Living",
    description:
      "Master-planned residential & commercial plots in Taxila, adjacent to Gandhara UNESCO World Heritage landmarks.",
    images: [
      {
        url: "/images/hero-taxila.svg",
        width: 1200,
        height: 630,
        alt: "Taxila Gardens Housing Scheme and Gandhara Margalla Vista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxila Gardens Housing Scheme | Taxila, Pakistan",
    description: "Serene master-planned residential living in the historic cradle of Gandhara.",
    images: ["/images/hero-taxila.svg"],
  },
  alternates: {
    canonical: "https://taxilagardens.pk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://taxilagardens.pk/#place",
      name: "Taxila Gardens Housing Scheme",
      description:
        "Master-planned residential housing scheme in the UNESCO Gandhara heritage cradle of Taxila, Punjab, Pakistan.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.7820,
        longitude: 72.7937,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Taxila Hills & HITEC, off HMC Road",
        addressLocality: "Taxila",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://taxilagardens.pk/#agent",
      name: "Taxila Gardens Housing Scheme Sales Office",
      url: "https://taxilagardens.pk",
      telephone: "+923330109942",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: ["Taxila", "Rawalpindi", "Islamabad", "Wah Cantt", "Hasan Abdal"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${urdu.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F7F1E5] text-[#1F1B16] selection:bg-[#B5573B] selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </LanguageProvider>
      </body>
    </html>
  );
}
