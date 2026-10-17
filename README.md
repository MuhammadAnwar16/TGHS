# TAXILA GARDENS HOUSING SCHEME
### Production-Ready Marketing & Information Web Application

A modern, high-trust, culturally immersive marketing platform for **TAXILA GARDENS HOUSING SCHEME** in Taxila, Punjab, Pakistan.
Art-directed with the visual ethos of the ancient Gandhara civilization (warm sandstone, terracotta, deep olive, and antique gold), the platform is designed to establish trust within 30 seconds and connect prospective buyers with the sales desk within 2 clicks.

---

## 🏛️ Art Direction: Gandhara Heritage
- **Color Palette**:
  - Sandstone (`#D9C3A0` / `#C5AC85`) — Warm archaeological stone textures and placards
  - Terracotta (`#B5573B`) — Earthen pottery warmth, prominent CTAs, and active states
  - Deep Olive / Garden Green (`#3F5A3C`) — Pine and garden tranquility, trust badges
  - Charcoal Slate (`#1F1B16`) — Deep stone, high-contrast dark sections and footers
  - Off-White Parchment (`#F7F1E5`) — Clean, high-legibility canvas backdrop
  - Antique Gold (`#B8892D`) — Heritage accents, stupa crests, and verification seals
- **Typography**:
  - Headings / Display: `Playfair Display` (archaeological elegance and statuesque serif)
  - Body: `Inter` (crisp, modern readability)
  - Urdu: `Noto Nastaliq Urdu` with automatic RTL layout switching
- **Visual Accents**: Gandhara stupa spires, Ashokan pillar silhouettes, museum placard cards with brass corner brackets, and arch transition curves.

---

## ⚡ Tech Stack
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Bilingual Engine**: English & Urdu toggle with native RTL layout switching
- **Interactive Mapping**: Leaflet + OpenStreetMap (zero API key dependency)
- **Interactive Master Plan**: Zoomable & pannable SVG architectural blueprint with plot inspector drawer
- **SEO & Schema**: JSON-LD (`RealEstateAgent` + `Place`), dynamic `sitemap.xml`, and `robots.txt`
- **Email & Leads API**: Next.js Route Handler `/api/contact` with spam honeypot and Resend readiness

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone <repo-url>
cd tghs
npm install
```

### 2. Running Locally
Start the development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Linting
Validate TypeScript compilation and ESLint:
```bash
npm run lint    # Confirms 0 errors, 0 warnings
npm run build   # Generates optimized static pages
npm run start   # Starts the production server
```

---

## 📦 Deploying to Vercel

The application is structured for 1-click zero-config deployment on Vercel:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. Framework preset will automatically detect **Next.js**.
4. Configure optional Environment Variables:
   ```env
   # Optional: For sending real email notifications via Resend
   RESEND_API_KEY=re_your_api_key_here
   NOTIFICATION_EMAIL=info@taxilagardens.pk
   ```
5. Click **Deploy**. Your site will be live on Vercel's Edge Network with automatic SSL.

---

## 📝 How to Edit Content (`/data`)
All client content is strictly decoupled from UI components. Any non-technical team member can edit content without touching JSX/TSX:

| File | Content Controlled |
|---|---|
| `data/scheme.ts` | Scheme name, proposed taglines, draft intro narrative, trust statistics, coordinates |
| `data/plots.ts` | Plot categories (5M, 7M, 10M, 1K, Commercial), inventory items, road widths, payment notes |
| `data/approvals.ts` | Regulatory authority details, NOC status, reference numbers, timeline stages, plain-language explainers |
| `data/location.ts` | Exact address, GPS coordinates, landmarks (Taxila Museum, M-1, GT Road, UET), distance chips |
| `data/amenities.ts` | Community facilities (Jamia Mosque, Theme Parks, 24/7 Security, Underground Utilities) |
| `data/gallery.ts` | Photographic entries, categories (Site, Master plan, Heritage, Progress), captions, badges |
| `data/updates.ts` | Chronological dated progress milestones and civil engineering reports |
| `data/contact.ts` | Phone numbers, WhatsApp business link, prefilled messages, office hours, address |
| `data/translations.ts` | Complete English and Urdu dictionary for buttons, navigation, headers, and tooltips |

---

## 🖼️ How to Swap Images & the Master Plan

### 1. Replacing Site & Heritage Photography
1. Save your WebP or compressed JPG photography into `/public/images/`.
2. Open `/data/gallery.ts` (or `/data/scheme.ts`).
3. Update the `imageSrc` property (e.g., `imageSrc: "/images/site-aerial.webp"`).
4. Consult `/public/images/README.md` for the complete photography shot list and specifications.

### 2. Swapping the Master Plan Vector Map
- **Option A (Instant Replacement)**: Save your exported SVG or high-resolution PNG as `/public/images/master-plan-mock.svg`. The interactive pan/zoom canvas in `/master-plan` will automatically load your new file.
- **Option B (Custom Path)**: Update the image reference in `components/masterplan/MasterPlanViewer.tsx`.

### 3. Replacing the NOC Specimen Document
Replace `/public/images/noc-sample.svg` with your scanned official NOC PDF or high-resolution graphic. The lightbox document inspector on `/approvals` will render the new document with pan and zoom.

---

## 🛡️ Zero-Invention Policy
We strictly adhere to a **No-Invented-Facts** policy:
- No approval numbers, municipal authority names, dates, prices, or plot counts are fabricated.
- Unconfirmed client items are styled with explicit `[TBD]` visual badges.
- Consult [`/PLACEHOLDERS.md`](./PLACEHOLDERS.md) for the exhaustive registry of all pending client items.
# TGHS
