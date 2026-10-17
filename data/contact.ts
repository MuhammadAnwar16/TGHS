export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  phoneSecondary: string;
  phoneSecondaryRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappFormatted: string;
  whatsappPrefilledMessageEn: string;
  whatsappPrefilledMessageUr: string;
  email?: string;
  officeAddressEn: string;
  officeAddressUr: string;
  isOfficeAddressTbd: boolean;
  officeHoursEn: string;
  officeHoursUr: string;
  socialLinks: {
    platform: string;
    url: string;
    isTbd: boolean;
  }[];
}

export const contactData: ContactInfo = {
  phone: "0333-010 9942",
  phoneRaw: "+923330109942",
  phoneSecondary: "0333-010 9934",
  phoneSecondaryRaw: "+923330109934",
  whatsapp: "0333-010 9942",
  whatsappRaw: "923330109942",
  whatsappFormatted: "0333-010 9942",
  whatsappPrefilledMessageEn:
    "Hello Taxila Gardens Sales Team, I am interested in learning more about available plots and booking procedures.",
  whatsappPrefilledMessageUr:
    "السلام علیکم! میں ٹیکسلا گارڈنز ہاؤسنگ سکیم میں دستیاب پلاٹوں اور بکنگ کی تفصیلات جاننا چاہتا ہوں۔",
  officeAddressEn: "Taxila Gardens Housing Scheme, Near Taxila Hills & HITEC, off HMC Road, Taxila, Rawalpindi District, Punjab",
  officeAddressUr: "ٹیکسلا گارڈنز ہاؤسنگ سکیم، ٹیکسلا ہلز اور HITEC کے قریب، HMC روڈ، ٹیکسلا، ضلع راولپنڈی، پنجاب",
  isOfficeAddressTbd: false,
  officeHoursEn: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT) | Sunday: By Appointment",
  officeHoursUr: "پیر تا ہفتہ: صبح ۹:۰۰ بجے سے شام ۶:۰۰ بجے تک | اتوار: پیشگی وقت کے ساتھ",
  socialLinks: [
    { platform: "WhatsApp", url: "https://wa.me/923330109942", isTbd: false },
  ],
};
