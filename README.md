# Secure-Centric — Interactive Design Prototype & Gutenberg Block Architecture

> **Client:** Secure-Centric  
> **Domain:** CMMC & NIST SP 800-171 Cybersecurity Compliance for Defense Subcontractors  
> **Design Aesthetic:** High-Tech Cyber Security (inspired by [Redspin.com](https://redspin.com/))  
> **Color Guide & Wireframe Fidelity:** 100% Strict Adherence to the Secure-Centric Brand Guide (3 Pages) & 20-Page Wireframe Pack  
> **Target Platform:** WordPress Full Site Editing (FSE) Block Theme with Custom Gutenberg Patterns  

---

## 🚀 Live GitHub Pages Deployment (Quick Start)

This prototype is completely static, self-contained, and requires **no build step** (no npm or Node dependencies). It works instantly on any static web host or GitHub Pages.

### How to Publish to GitHub in 3 Steps:

1. **Push to your GitHub repository:**
   ```bash
   cd /Applications/XAMPP/xamppfiles/htdocs/secure-centric
   git add .
   git commit -m "feat: complete 20-page interactive design prototype with gutenberg architecture"
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository on `github.com`.
   - Click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

3. **View Live:**
   - Within 60 seconds, your interactive prototype will be live at:  
     `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## 🎨 Strict Brand Color Guide (Reference from Uploaded Documents)

All colors are strictly mapped to CSS custom properties and WordPress `theme.json` color presets:

### 1. Brand Core
| Color Name | Hex Code | WordPress Token | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Midnight** | `#060B24` | `has-midnight-color` | Darkest backgrounds, Header, Footer, Hero |
| **Navy** | `#0B1437` | `has-navy-color` | Headings, dark cards, container borders |
| **Electric Blue** | `#2F5BFF` | `has-electric-blue-color` | Primary CTA buttons, active links, accents |
| **Violet** | `#7B5CFF` | `has-violet-color` | Secondary accent, Step 8 in Roadmap, stat numbers |
| **Cyber Cyan** | `#00D4FF` | `has-cyber-cyan-color` | Accents on dark only, header badges, glows |

### 2. Neutrals & Text
| Color Name | Hex Code | WordPress Token | Usage Rule |
| :--- | :--- | :--- | :--- |
| **White** | `#FFFFFF` | `has-white-color` | Cards, primary surfaces, alternating sections |
| **Ice** | `#F5F7FF` | `has-ice-color` | Light section backgrounds (Roadmap, FAQs, Testimonials) |
| **Soft Blue** | `#EEF2FF` | `has-soft-blue-color` | Panels, icon containers, soft tertiary buttons |
| **Soft Blue Line** | `#DCE4FF` | `has-soft-blue-line-color` | Borders on soft panels |
| **Border** | `#E2E8F5` | `has-border-color` | Card outlines, input fields, dividers |
| **Slate** | `#8A93B2` | `has-slate-color` | Placeholders, meta text, muted labels |
| **Body Text** | `#4A5578` | `has-body-text-color` | Paragraphs on light sections |
| **Text on Dark** | `#B8C1E0` | `has-text-on-dark-color` | Paragraphs on midnight/navy sections |
| **Dark Line** | `#1E2A5A` | `has-dark-line-color` | Dividers and borders on dark |
| **Dark Outline** | `#3A4A85` | `has-dark-outline-color` | Ghost button outlines on dark |
| **Light on Blue** | `#E6ECFF` | `has-light-on-blue-color` | Text on electric blue final CTA band |

### 3. Status Colors
- **Success:** `#12B886` (Confirmations, audit met status)
- **Warning:** `#FFB020` (Cautions, partially met controls)
- **Error:** `#F0445A` (Form errors, deficient controls)

### 4. Signature Gradient
```css
linear-gradient(135deg, #2F5BFF 0%, #7B5CFF 55%, #00D4FF 100%)
```
> *Usage rule:* Hero highlights, featured card borders, logo shield. Never as a full section background.

---

## 🔘 Button Styles & Interaction Hierarchy

As defined on Page 2 of the brand guide: **"Only one filled primary button per section."**

1. **Primary (Light BG):** Fill `#2F5BFF` | Text `#FFFFFF` | Hover `#1E44E6` | Pressed `#1735B8`
2. **Secondary Outline:** Fill `#FFFFFF` | Text `#0B1437` | Border `#0B1437` | Hover fill `#0B1437`, text `#FFFFFF`
3. **Soft / Tertiary:** Fill `#EEF2FF` | Text `#2F5BFF` | Hover `#DCE4FF` | Pressed `#C9D5FF`
4. **Primary (Dark BG):** Fill `#FFFFFF` | Text `#0B1437` | Hover `#E6ECFF` | Pressed `#D0DAFF`
5. **Ghost (Dark BG):** Fill `#060B24` | Text `#FFFFFF` | Border `#3A4A85` | Hover fill `rgba(255, 255, 255, 0.08)`

---

## 🛠️ WordPress Gutenberg Block Architecture Planning

To ensure effortless implementation in a block-based theme (Full Site Editing / FSE), each section maps 1:1 to native WordPress Core blocks and custom Block Patterns:

```
secure-centric-theme/
├── theme.json                   <-- Core palette, typography, layout (see theme-json-blueprint.json)
├── templates/
│   ├── index.html
│   ├── front-page.html          <-- Home (Page 01)
│   ├── page-about.html          <-- About & Proof (Page N1)
│   ├── page-service.html        <-- Services (Pages 02, 03, 06)
│   ├── page-stage.html          <-- Engagement Stages (Pages 04, 05, 07, 08, 11, 16)
│   ├── page-pillar.html         <-- Knowledge Pillars (Pages 12, 13, 14, 15, 19, 20)
│   └── page-checklist.html      <-- Downloadable Resources (Pages 21, 22, 23)
├── parts/
│   ├── header.html              <-- Sticky Midnight Header + Mega Menu
│   ├── header-top-bar.html      <-- Top Bar with disclaimer & contact
│   └── footer.html              <-- Midnight 5-Column Footer with Legal Disclaimer
└── patterns/
    ├── hero-home.php            <-- Core/Cover + Core/Columns (2-col split with readiness card)
    ├── hero-service.php         <-- What We Do Hero with 6-Phase numbered strip
    ├── hero-icp.php             <-- Which One Are You Hero with 4 audience tiles
    ├── hero-pillar-guide.php    <-- Pillar Hero with Direct Answer + interactive tool
    ├── cmmc-8-step-journey.php  <-- Custom interactive 8-step roadmap
    ├── why-proof-badges.php     <-- 120+ contractors stat + 4 reasons + Cyber AB RPO badges
    ├── faq-accordion.php        <-- Core/Details or Accordion FAQ with FAQPage schema
    ├── lead-magnet-inline.php   <-- Inline gated checklist download band
    └── final-cta-band.php       <-- Electric Blue full-width CTA band
```

### Gutenberg Block Mapping Table

| Section in Wireframe | Native WordPress Block | theme.json Color Token | Pattern File |
| :--- | :--- | :--- | :--- |
| **Sticky Header** | `core/template-part {"slug":"header"}` | `has-midnight-background-color` | `parts/header.html` |
| **Homepage Hero** | `core/cover` + `core/columns` | `has-midnight-background-color` | `patterns/hero-home.php` |
| **Client Logos** | `core/group {"align":"full"}` | `has-white-background-color` | `patterns/client-logos-marquee.php` |
| **8-Step Journey** | `core/group` + interactive script | `has-ice-background-color` | `patterns/cmmc-8-step-journey.php` |
| **Testimonials** | `core/columns {"columns":3}` | `has-ice-background-color` | `patterns/testimonials-carousel.php` |
| **What is CMMC** | `core/columns` (1:2 ratio) | `has-white-background-color` | `patterns/definition-split.php` |
| **Why Secure-Centric** | `core/columns` + `core/group` | `has-white-background-color` | `patterns/why-proof-badges.php` |
| **Resource Cards** | `core/columns {"columns":3}` | `has-white-background-color` | `patterns/resource-card-grid.php` |
| **Accordion FAQs** | `core/details` or `core/group` | `has-ice-background-color` | `patterns/faq-accordion.php` |
| **Lead Magnet Band** | `core/group` | `has-white-background-color` | `patterns/lead-magnet-inline.php` |
| **Final CTA Band** | `core/group {"align":"full"}` | `has-electric-blue-background-color`| `patterns/final-cta-band.php` |
| **Footer** | `core/template-part {"slug":"footer"}` | `has-midnight-background-color` | `parts/footer.html` |

---

## 📑 20-Page Wireframe Coverage Index

All 20 pages from the approved wireframe pack are fully interactive in this prototype:

| No. | Page Title | URL Path | Page Type | Primary Keyword |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Home** | `/` | Home page | `cmmc compliance` (9,900/mo) |
| **N1** | **About & Why Secure-Centric** | `/about/` | Company & Proof | `secure-centric` (brand) |
| **02** | **CMMC Compliance Services** | `/services/cmmc-compliance/` | Main Service 1 | `cmmc compliance services` (880/mo) |
| **03** | **CMMC Consulting (ICP)** | `/services/cmmc-consulting/` | Main Service 2 | `cmmc consultant` (1,000/mo) |
| **04** | **CMMC Readiness Assessment** | `/services/cmmc-readiness-assessment/` | Stage Page | `cmmc readiness` (480/mo) |
| **05** | **CMMC Gap & Mock Assessment** | `/services/cmmc-readiness-assessment/gap-assessment/` | Stage Page | `cmmc gap assessment` (320/mo) |
| **06** | **NIST SP 800-171 Compliance** | `/services/nist-800-171-compliance/` | Main Service 3 | `nist 800-171 compliance consultant` (260/mo) |
| **07** | **CMMC Remediation Advisory** | `/services/cmmc-implementation-remediation/` | Stage Page | `cmmc implementation` (170/mo) |
| **08** | **SSP & POA&M Documentation** | `/services/cmmc-implementation-remediation/ssp-poam-development/` | Stage Page | `ssp development` (70/mo) |
| **11** | **Virtual CISO (vCISO)** | `/services/virtual-ciso/` | Stage Page | `virtual ciso for defense contractors` |
| **12** | **CMMC: The Complete Guide** | `/cmmc/` | Pillar Page | `cmmc` (18,100/mo) |
| **13** | **CMMC Level 2 Guide** | `/cmmc/level-2/` | Pillar Page | `cmmc level 2` (3,600/mo) |
| **14** | **NIST SP 800-171 Guide** | `/nist-800-171/` | Pillar Page | `nist 800-171` (5,400/mo) |
| **15** | **CUI: The Complete Guide** | `/cui/` | Pillar Page | `what is cui` (12,100/mo) |
| **16** | **CMMC Enclave Advisory** | `/services/cmmc-enclave/` | Stage Page | `cmmc enclave` (480/mo) |
| **19** | **The CMMC Process (8 Steps)** | `/cmmc/cmmc-process/` | Pillar Page | `cmmc process` |
| **20** | **What is a CMMC RPO?** | `/cmmc/rpo/` | Pillar Page | `cmmc rpo` (320/mo) |
| **21** | **Level 2 Compliance Checklist** | `/resources/templates/checklist/level-2/` | Gated Checklist | `cmmc level 2 checklist` (170/mo) |
| **22** | **Unmarked CUI Checklist** | `/resources/templates/checklist/unmarked-cui/` | Gated Checklist | `how to detect unmarked cui` |
| **23** | **Level 1 Readiness Checklist** | `/resources/templates/checklist/level-1/` | Gated Checklist | `cmmc level 1 checklist` (260/mo) |

---

## 🔍 Interactive Presentation Features

1. **Floating Demo HUD:**
   - Switch between all 20 pages instantly via the top dropdown.
   - Click **"🔍 Inspect Gutenberg Blocks"** to reveal the real-time WordPress block hierarchy, CSS tokens, and Pattern names overlaid on every component.
   - Click **"💻 Desktop / 📱 Mobile"** to preview responsiveness at 1440px and 390px.
   - Click **"📊 Page Specs"** to expand the bottom SEO metadata drawer (H1, URL, primary keywords, search volume).
2. **Interactive 8-Step Roadmap:**
   - Click through steps 01 to 08 to see step details, who performs the work, and the concrete deliverables.
3. **Interactive FAQs:**
   - Expandable accordions matching the WordPress `core/details` block behavior.
4. **Interactive Readiness Tool:**
   - Live 3-question evaluation modal.

---

© 2026 Secure-Centric LLC. Built strictly to brand and wireframe specifications.
