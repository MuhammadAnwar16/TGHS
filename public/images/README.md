# Photography & Asset Replacement Guide: Taxila Gardens Housing Scheme

This directory contains SVG vector placeholders and artwork designed specifically for the **TAXILA GARDENS HOUSING SCHEME** website.
To replace these placeholders with real production photography or client CAD/PDF exports, consult the shot list below.

---

## Shot List & Asset Specifications

### 1. Hero Landscape (`hero-taxila.svg` -> `hero-taxila.webp` / `.jpg`)
- **Dimensions**: `1920 × 1080 px` (16:9 ratio)
- **Format**: WebP or AVIF (compressed < 300 KB)
- **Creative Direction**:
  - Wide-angle panoramic shot captured during golden hour (early morning or sunset).
  - Showing the undulating landscape of Taxila with the Margalla foothills in the background.
  - Atmosphere should feel serene, expansive, and prestigious.
  - Can be replaced with a 4K looped MP4 video in the hero section if desired.

### 2. Taxila Museum & Gandhara Heritage (`museum-heritage.svg` -> `museum-heritage.webp` / `.jpg`)
- **Dimensions**: `1200 × 800 px` (3:2 ratio)
- **Format**: WebP (< 200 KB)
- **Creative Direction**:
  - High-resolution close-up of Gandhara schist stone carvings or Dharmarajika Stupa ruins.
  - Deep warm tones, textured masonry, soft museum or natural directional lighting.
  - Source: Official royalty-free license or authorized on-site photography from the Taxila Museum archive.

### 3. Official Master Plan Layout (`master-plan-mock.svg`)
- **Dimensions**: Vector SVG or high-resolution PNG (`2800 × 1800 px`)
- **Format**: SVG preferred (maintains razor-sharp text when users zoom into individual plot numbers).
- **Creative Direction**:
  - Detailed CAD / GIS architectural blueprint exported with color coding matching our design system:
    - Residential plots: Sandstone/Cream (`#FAF6EE`, border `#B8892D`)
    - Commercial plots: Terracotta (`#B5573B`)
    - Green Parks / Boulevards: Deep Olive (`#3F5A3C`)
    - Road Arteries: Charcoal Slate (`#1F1B16`)
  - Ensure individual plot IDs (e.g. `A-01`, `B-12`) are legible at 200% zoom.

### 4. Official NOC / Certificate Specimen (`noc-sample.svg` -> `noc-scan.webp` / `.pdf`)
- **Dimensions**: `800 × 1130 px` (A4 aspect ratio)
- **Format**: WebP or high-resolution scanned PDF.
- **Creative Direction**:
  - Clean, de-skewed scan of the official No Objection Certificate (NOC) and layout plan approval from the relevant town municipal administration or development authority.
  - Sensitive developer personal bank account data can be watermarked; official gazette stamp and reference numbers must be clearly visible.

---

## How to Swap in Code
All visual asset paths are declared in `/data/gallery.ts`, `/data/approvals.ts`, and `/data/scheme.ts`.
Simply upload your new image files to `/public/images/` and update the corresponding path in the typed `/data/` file. No UI components need to be modified.
