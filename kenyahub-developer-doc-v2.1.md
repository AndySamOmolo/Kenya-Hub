# KenyaHub — Developer Documentation v2.1
**Status:** Phase 2 In Progress | Active Development | **Last Updated:** June 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Repository Structure](#3-repository-structure)
4. [Navigation Architecture](#4-navigation-architecture)
5. [URL & SEO Architecture](#5-url--seo-architecture)
6. [Tool Categories & Full Catalogue](#6-tool-categories--full-catalogue)
   - 6A. Finance & Tax (8 tools)
   - 6B. Education & CBC (10 tools)
   - 6C. Utilities & Energy (7 tools)
   - 6D. Government & Legal (12 tools)
   - 6E. Transport & Travel (9 tools)
   - 6F. Health & Wellness (7 tools)
   - 6G. Business & Investment (9 tools)
   - 6H. Data & Reference (9 tools)
   - 6I. Agriculture & Environment (7 tools)
7. [Module: Matatu Routes](#7-module-matatu-routes)
8. [Module: County Services](#8-module-county-services)
9. [Module: Blog](#9-module-blog)
10. [Data Sources Master Table](#10-data-sources-master-table)
11. [Scraper Architecture](#11-scraper-architecture)
12. [Database Schema](#12-database-schema)
13. [AdSense Integration](#13-adsense-integration)
14. [Mobile APK](#14-mobile-apk-android)
15. [SEO Strategy](#15-seo-strategy)
16. [Development Phases](#16-development-phases--roadmap)
17. [Deployment](#17-deployment)
18. [Tool Priority Matrix](#18-tool-priority-matrix)
19. [Removed Tools Log](#19-removed-tools-log)

---

## 1. Project Overview

KenyaHub is a Kenya-first web platform and Android APK providing practical tools, data, and content that every Kenyan needs — from calculating their net salary to finding their matatu stage to looking up their child's CBC grade level.

### Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Static-first** | Prefer tools whose data updates annually or less — lower maintenance, faster pages |
| **SEO-native** | Every tool = unique URL = independently indexable |
| **Ad-ready** | Pages structured for AdSense from day one |
| **Kenya-specific** | No generic tools — everything tailored to Kenyan laws, bodies, and data |
| **Free data only** | Zero paid APIs; all data from government publications, legislation, or open web |

### Update Frequency Legend (used throughout this doc)

| Label | Meaning |
|-------|---------|
| 🟢 Static | Data is fixed (legislation, geography, constitutions). Build once. |
| 🔵 Annual | Update once per year (budgets, school dates, KRA tax bands) |
| 🟡 Periodic | Every 1–3 months (fuel prices, NHIF hospital list) |
| 🔴 Live | Near real-time scraping needed (KPLC outages, forex) |

**Focus 80% of Phase 1 on 🟢 and 🔵 tools.** They earn AdSense revenue indefinitely with minimal upkeep.

---

## 2. Tech Stack

### Web
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14+ (App Router) | SSR + SSG in one; best for SEO |
| Language | TypeScript | Safety across all packages |
| Styling | Tailwind CSS | Mobile-first, fast iteration |
| Components | shadcn/ui | Accessible, copy-paste |
| DB | Appwrite | Free tier, built-in auth, Document DB, REST API |
| Blog CMS | MDX files in `/content/` | Version-controlled, no cost |
| Maps | Leaflet.js + OpenStreetMap | 100% free tile server |
| Charts | Chart.js or Recharts | Lightweight, AdSense-compatible |
| Search | Fuse.js (client-side) | Works on static export |
| Analytics | Google Analytics 4 | Required for AdSense |

### Mobile
| Layer | Choice |
|-------|--------|
| Approach | Capacitor (wraps Next.js PWA) |
| Target | Android APK (Play Store + direct download) |
| Push Notifications | Firebase Cloud Messaging (free tier) |

### Infrastructure — All Free Tier
| Service | Use |
|---------|-----|
| Cloudflare Pages | Hosting + CDN + DNS + DDoS |
| Appwrite | Database + Auth |
| GitHub Actions | CI/CD + cron scrapers |

---

## 3. Repository Structure

```
kenyahub/
├── apps/
│   ├── web/                          ← Next.js 14 app
│   │   ├── app/
│   │   │   ├── layout.tsx            ← Root layout (AdSense script, GA, nav)
│   │   │   ├── page.tsx              ← Homepage
│   │   │   ├── matatu/
│   │   │   │   ├── page.tsx          ← /matatu
│   │   │   │   └── [town]/[route]/page.tsx
│   │   │   ├── county/
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── tools/
│   │   │   │   ├── page.tsx          ← Tools hub (all categories)
│   │   │   │   ├── (finance)/        ← Route group, no URL segment
│   │   │   │   │   ├── paye-calculator/page.tsx
│   │   │   │   │   ├── mpesa-fee-calculator/page.tsx
│   │   │   │   │   └── ... (all finance tools)
│   │   │   │   ├── (education)/
│   │   │   │   │   ├── cbc-curriculum/page.tsx
│   │   │   │   │   ├── kuccps-cluster-calculator/page.tsx
│   │   │   │   │   └── ...
│   │   │   │   ├── (utilities)/
│   │   │   │   ├── (government)/
│   │   │   │   ├── (transport)/
│   │   │   │   ├── (health)/
│   │   │   │   ├── (business)/
│   │   │   │   ├── (reference)/
│   │   │   │   └── (agriculture)/
│   │   │   └── blog/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   ├── components/
│   │   │   ├── nav/
│   │   │   │   ├── Navbar.tsx        ← Desktop mega-menu
│   │   │   │   └── MobileNav.tsx     ← Bottom tab bar for mobile
│   │   │   ├── tools/
│   │   │   │   ├── ToolShell.tsx     ← Standard tool page wrapper
│   │   │   │   ├── ToolHeader.tsx
│   │   │   │   └── RelatedTools.tsx
│   │   │   └── ads/
│   │   │       └── AdSenseSlot.tsx
│   │   ├── lib/
│   │   │   ├── appwrite.ts
│   │   │   ├── tools-registry.ts     ← Central list of all tools + metadata
│   │   │   └── scrapers/
│   │   │       ├── kplc.ts
│   │   │       ├── epra.ts
│   │   │       └── cbk.ts
│   │   ├── data/                     ← Static JSON (static tools data)
│   │   │   ├── paye-bands.json
│   │   │   ├── nhif-bands.json
│   │   │   ├── mpesa-tariffs.json
│   │   │   ├── cbc-curriculum.json
│   │   │   ├── kuccps-clusters.json
│   │   │   ├── counties.json
│   │   │   ├── matatu-routes/
│   │   │   │   └── nairobi.json
│   │   │   ├── postal-codes.json
│   │   │   ├── traffic-fines.json
│   │   │   ├── national-parks.json
│   │   │   ├── police-stations.json
│   │   │   └── public-holidays.json
│   │   └── content/
│   │       └── blog/                 ← .mdx blog posts
│   └── mobile/                       ← Capacitor project
├── scripts/
│   ├── scrape-kplc-outages.ts        ← Daily cron
│   ├── scrape-epra-fuel.ts           ← Monthly cron
│   ├── scrape-cbk-forex.ts           ← Daily cron
│   ├── scrape-ppra-tenders.ts        ← Daily cron
│   ├── import-knbs-cpi.ts            ← Monthly cron
│   └── seed/
│       ├── seed-counties.ts
│       ├── seed-matatu-routes.ts
│       └── seed-postal-codes.ts
├── prisma/schema.prisma
└── .github/workflows/
    ├── deploy.yml
    ├── crons.yml
    └── apk-build.yml
```

### Tools Registry Pattern

Every tool is registered in one central file so the nav, tools index page, sitemap, and related-tools widget all stay in sync:

```typescript
// lib/tools-registry.ts
export interface Tool {
  slug: string;
  title: string;
  shortTitle: string;         // For nav menus (shorter)
  description: string;
  category: ToolCategory;
  keywords: string[];
  updateFrequency: 'static' | 'annual' | 'periodic' | 'live';
  dataSource: string;
  isLive: boolean;            // Feature-flagged
}

export type ToolCategory =
  | 'finance-tax'
  | 'education-cbc'
  | 'utilities-energy'
  | 'government-legal'
  | 'transport-travel'
  | 'health-wellness'
  | 'business-investment'
  | 'data-reference'
  | 'agriculture-environment';

export const TOOLS: Tool[] = [
  {
    slug: 'paye-calculator',
    title: 'Kenya PAYE Salary Calculator 2025',
    shortTitle: 'PAYE Calculator',
    category: 'finance-tax',
    updateFrequency: 'annual',
    dataSource: 'Kenya Revenue Authority',
    // ...
  },
  // All tools registered here
];
```

---

## 4. Navigation Architecture

### Desktop: Mega-Menu

The main nav has a **Tools** mega-menu revealing all 9 categories with their top tools listed beneath each.

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🇰🇪 KenyaHub   Routes   Counties   TOOLS ▾   Blog   🔍                │
└─────────────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────▼────────────────────────────────────────┐
              │  💰 Finance & Tax    🎓 Education & CBC                │
              │  ⚡ Utilities         🏛️ Government & Legal            │
              │  🚌 Transport         🏥 Health & Wellness             │
              │  📊 Business          📍 Data & Reference             │
              │  🌾 Agriculture                                        │
              │                         [View All Tools →]            │
              └────────────────────────────────────────────────────────┘
```

Each category heading in the mega-menu links to `/tools/?category=finance-tax` (filtered tools index), and below it shows the top 4 tools in that category.

### Mobile: Bottom Tab Bar + Category Drawer

On mobile the header stays minimal. Navigation lives in a bottom tab bar:

```
┌─────────────────────────────────────────────────┐
│  🏠 Home  │  🚌 Routes  │  🛠️ Tools  │  📝 Blog │
└─────────────────────────────────────────────────┘
```

Tapping **Tools** opens a full-screen category drawer:

```
┌─────────────────────────────────────┐
│  All Tools                    ✕    │
├─────────────────────────────────────┤
│  💰 Finance & Tax              >   │
│  🎓 Education & CBC            >   │
│  ⚡ Utilities & Energy          >   │
│  🏛️ Government & Legal         >   │
│  🚌 Transport & Travel         >   │
│  🏥 Health & Wellness          >   │
│  📊 Business & Investment      >   │
│  📍 Data & Reference           >   │
│  🌾 Agriculture & Environment  >   │
└─────────────────────────────────────┘
```

### Tools Hub Page (`/tools/`)

The `/tools/` page shows a card grid of all categories. Each category card shows the category icon, name, and count of tools inside. A search bar at the top filters across all tools in real-time (Fuse.js).

```tsx
// components/tools/ToolsHub.tsx
<input placeholder="Search tools — e.g. 'PAYE', 'matatu', 'KPLC'..." />
<CategoryGrid categories={TOOL_CATEGORIES} />
```

---

## 5. URL & SEO Architecture

All tools live under `/tools/[slug]/`. The route group folders in Next.js (e.g. `(finance)`) are invisible to the URL — this is intentional. We want flat URLs for maximum AdSense value per page:

```
/tools/paye-calculator/           ← NOT /tools/finance/paye-calculator/
/tools/cbc-curriculum/
/tools/kplc-outages/
```

**Sitemap output (auto-generated):**
```xml
<url>
  <loc>https://kenyahub.co.ke/tools/paye-calculator/</loc>
  <changefreq>yearly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 6. Tool Categories & Full Catalogue

Each tool entry includes:
- **URL** — the exact slug
- **Keywords** — primary SEO targets
- **Data Source** — where to get the data (verified as of June 2026)
- **Update** — how often it needs refreshing
- **Notes** — implementation detail or unique feature

---

### 6A. 💰 Finance & Tax

> High AdSense CPC category (financial advertisers pay top KES rates). These tools attract salary earners, property buyers, importers, and SMEs.

---

#### T01 — PAYE Salary Calculator
**URL:** `/tools/paye-calculator/`
**Update:** 🔵 Annual (July, after national budget)
**Keywords:** "PAYE calculator Kenya 2025", "net salary Kenya", "Kenya salary after tax"
**Data Source:** KRA annual tax bands (kra.go.ke) — copy from KRA website each July
**Status:** ⚠️ **COMPETITION EXISTS** — `payecalculator.co.ke`, `calckenya.com`, `wingubox.com` all have mature calculators. Consider differentiating with: (a) SHIF/NHIF transition clarity, (b) side-by-side old vs new NSSF comparison, (c) downloadable payslip PDF.

**What it calculates:**
```
PAYE bands (FY 2024/25):
  KES 0 – 24,000          → 10%
  KES 24,001 – 32,333     → 25%
  KES 32,334 – 500,000    → 30%
  KES 500,001 – 800,000   → 32.5%
  Above KES 800,000       → 35%
  Personal Relief: KES 2,400/month

NHIF deduction (income-banded):
  store full 20-band NHIF table in nhif-bands.json

NSSF (post-2024 court ruling):
  Lower Earnings Limit: 6% × KES 6,000 = KES 360
  Upper Earnings Limit: 6% × KES 12,000 = KES 720
  Max: KES 1,080/month

Affordable Housing Levy:
  1.5% of gross salary (employee)
  1.5% of gross salary (employer) — show both

Net Pay = Gross − PAYE (after relief) − NHIF − NSSF − Housing Levy
```

**Inputs:** Gross salary, optional non-taxable allowances, optional NHIF dependents
**Output:** Itemised deductions table + net pay + annual view toggle

---

#### T02 — M-Pesa Transaction Fee Calculator
**URL:** `/tools/mpesa-fee-calculator/`
**Update:** 🟢 Static (Safaricom tariff changes infrequently — monitor @Safaricom on announcements)
**Keywords:** "mpesa charges calculator", "mpesa tariff Kenya", "how much does mpesa charge"
**Data Source:** Safaricom M-Pesa tariff schedule (safaricom.co.ke) — stored in `mpesa-tariffs.json`
**Status:** ⚠️ **COMPETITION EXISTS** — `calckenya.com/mpesa` exists. Differentiate with: (a) "Cheapest threshold" band highlighting, (b) WhatsApp share of results, (c) M-Pesa API integration for real-time rates.

**Transaction types:**
- Send money (registered → registered)
- Send money (registered → unregistered)
- Withdraw from agent
- Withdraw from ATM
- Buy Goods (Lipa na M-Pesa)
- Pay Bill
- Receive money (always free)

**Unique feature:** "Cheapest threshold" band — highlights when you're just under a tariff boundary (e.g. sending 499 vs 501 is a different fee band).

---

#### T03 — Stamp Duty & Property Transfer Cost Calculator
**URL:** `/tools/stamp-duty-calculator/`
**Update:** 🟢 Static (Stamp Duty Act rarely changes; AHF exemption added 2023)
**Keywords:** "stamp duty Kenya", "property transfer cost Kenya", "how much to transfer land Kenya"
**Data Source:** Stamp Duty Act (Cap 480), Law Society of Kenya Advocates Remuneration Order
**Status:** ✅ **KEEP** — No dedicated interactive calculator found. Differentiate with step-by-step conveyancing cost breakdown.

```
Stamp Duty:
  Urban/peri-urban: 4% of market value
  Rural: 2% of market value
  First-time buyer (AHF scheme): 0%

LSK Conveyancing Fees (scale):
  Up to KES 1M           → 1.25% (min KES 12,500)
  KES 1M – 2M            → 1.0%
  KES 2M – 5M            → 0.75%
  KES 5M – 100M          → 0.5%
  Above KES 100M         → 0.25%

Land Rent (leasehold only): variable per county
Land Rates Clearance: county-specific
Registration fee: KES 5,000 (flat, Lands Registry)
```

**Inputs:** Property value, urban/rural, leasehold/freehold, first-time buyer

---

#### T04 — HELB Loan Repayment Calculator
**URL:** `/tools/helb-calculator/`
**Update:** 🔵 Annual (interest rate reviewed yearly)
**Keywords:** "HELB loan repayment calculator", "HELB interest calculator Kenya", "how much HELB do I owe"
**Data Source:** HELB Act + helb.co.ke repayment schedule
**Status:** ⚠️ **COMPETITION EXISTS** — `helb.co.ke` has own calculator; `calckenya.com/helb` exists. Differentiate with: (a) repayment completion year projection, (b) impact of lump-sum payments, (c) grace period calculator.

```
Interest: 4% p.a. simple interest
Grace period: 1 year post-graduation
Max repayment: 15 years
Min monthly: KES 1,500 OR 10% of gross salary (whichever higher)
Late penalty: 5% of amount outstanding
```

**Inputs:** Loan amount, year first borrowed, current gross salary
**Output:** Current balance, monthly obligation, total interest owed, repayment completion year

---

#### T05 — Import & Customs Duty Calculator
**URL:** `/tools/import-duty-calculator/`
**Update:** 🔵 Annual (EAC budget, usually June)
**Keywords:** "Kenya import duty calculator", "KRA customs charges", "cost to import Kenya"
**Data Source:** EAC Customs Management Act + KRA Customs Tariff Book (downloadable PDF, kra.go.ke)
**Status:** ⚠️ **COMPETITION EXISTS** — `carluv.co.uk/kra-motor-vehicle-import-duty-calculator/`, `autoprotokenya.com`, `dutycalc.co.ke` exist (mostly vehicle-focused). Differentiate with: (a) general goods calculator (not just vehicles), (b) 50 pre-mapped HS codes for common imports.

```
Component breakdown per import:
  Import Duty (ID):  0% / 10% / 25% / 35% (by HS code)
  Excise Duty (ED):  varies by category
  VAT:               16% × (CIF + ID + ED)
  Import Declaration Fee (IDF): 3.5% of CIF
  Railway Development Levy (RDL): 2% of CIF
  KEBS standards levy: 0.5% of CIF (selected goods)

CIF = Cost + Insurance + Freight
```

**UI:** Searchable product category dropdown (pre-mapped to HS codes and rates). 50 most common import categories pre-loaded.

---

#### T06 — Housing Levy (AHL) Calculator
**URL:** `/tools/housing-levy-calculator/`
**Update:** 🟢 Static (Finance Act 2023)
**Keywords:** "affordable housing levy Kenya", "1.5% housing levy calculator", "AHL Kenya"
**Data Source:** Finance Act 2023, Section 84A
**Status:** ⚠️ **COMPETITION EXISTS** — `techwithtwin.com/tools/affordable-housing-levy-calculator` exists. Differentiate with: (a) employer + employee split view, (b) PAYE impact calculation showing before/after levy relief, (c) annual projection.

```
Employee: 1.5% of gross salary
Employer: 1.5% of gross salary
Tax relief: Employee levy is a tax relief against PAYE
Net PAYE impact: shows PAYE before and after levy relief
```

---

#### T07 — NHIF Contribution Calculator
**URL:** `/tools/nhif-contribution-calculator/`
**Update:** 🔵 Annual (Social Health Insurance Act 2023 is reshaping NHIF → SHA)
**Keywords:** "NHIF contribution calculator Kenya", "NHIF deduction Kenya", "how much NHIF Kenya"
**Data Source:** NHIF Act + nhif.or.ke contribution table
**Status:** ✅ **KEEP** — SHA transition creates confusion; clear calculator with old vs new comparison is valuable.
**Note:** Monitor SHA (Social Health Authority) rollout — may replace NHIF bands

---

#### T08 — Kenya Withholding Tax Reference
**URL:** `/tools/withholding-tax-guide/`
**Update:** 🔵 Annual (KRA confirms rates yearly)
**Keywords:** "withholding tax Kenya", "WHT rates Kenya", "KRA withholding tax"
**Data Source:** KRA — Income Tax Act withholding tax schedule
**Status:** ⚠️ **COMPETITION EXISTS** — `taxsummaries.pwc.com` (S-level authority), `tradingeconomics.com` cover this. Differentiate with: (a) searchable by payment type, (b) plain-language explanations, (c) downloadable quick-reference card.

Reference table for all withholding tax categories:
```
Dividends (resident): 5%
Dividends (non-resident): 10%
Interest (resident): 15%
Interest (non-resident): 15%
Royalties (resident): 5%
Royalties (non-resident): 20%
Professional/management fees (resident): 5%
Professional/management fees (non-resident): 20%
Rent (commercial property): 10% if >KES 144,000/yr
Construction (resident): 3%
... (full table of ~25 categories)
```

---

#### T09 — Land Rates Calculator
**URL:** `/tools/land-rates-calculator/`
**Update:** 🔵 Annual (county finance acts, published in county gazettes)
**Keywords:** "land rates Kenya", "county land rates", "how much are land rates Nairobi"
**Data Source:** Individual county finance acts — research and compile per county
**Status:** ❌ **REMOVED** — Data too fragmented. Most counties don't publish digital rate schedules. Replace with static guide on how to check land rates per county.

---

#### T10 — Vehicle Insurance Minimum Premium Calculator
**URL:** `/tools/vehicle-insurance-calculator/`
**Update:** 🔵 Annual (IRA publishes motor insurance minimum premiums)
**Keywords:** "car insurance Kenya cost", "minimum vehicle insurance Kenya", "IRA motor insurance"
**Data Source:** Insurance Regulatory Authority (ira.go.ke) — motor insurance minimum premium rates
**Status:** ⚠️ **COMPETITION EXISTS** — `calculator.co.ke/motor-insurance-calculator`, `nextinsurance.co.ke` exist. Differentiate with: (a) IRA minimum vs market rate comparison, (b) vehicle class breakdown (private/commercial/PSV).

```
Third Party Only (minimum legal requirement):
  Private: KES 7,500/year (flat min premium)
  Commercial: based on tonnage and seating

Comprehensive:
  Typically 4–6% of vehicle value (depends on insurer, IRA sets floor)

Show: Third Party cost, estimate Comprehensive range, link to IRA for full list
```

---

#### T11 — Minimum Wage Reference
**URL:** `/tools/minimum-wage/`
**Update:** 🔵 Annual (Labour Court gazette order, typically May)
**Keywords:** "Kenya minimum wage 2025", "lowest salary Kenya by law", "minimum pay Kenya"
**Data Source:** Ministry of Labour — Regulation of Wages annual order
**Status:** ✅ **KEEP** — No dedicated interactive reference found. Data scattered across gazette notices.

Full table by sector and town tier:
- Nairobi, Mombasa, Kisumu, Nakuru, Eldoret (Tier 1)
- Other municipalities (Tier 2)
- Rural/other areas (Tier 3)

Sectors: general, agricultural, hotel, industrial, building/construction, domestic, security.

---

#### T12 — Kenya Probate & Will Cost Calculator
**URL:** `/tools/probate-will-cost/`
**Update:** 🟢 Static (LSK fee scale rarely changes)
**Keywords:** "probate fees Kenya", "cost of writing a will Kenya", "estate administration Kenya"
**Data Source:** Law Society of Kenya Advocates Remuneration Order + Probate and Administration Act
**Status:** ✅ **KEEP** — No dedicated calculator found. Mark as "estimate tool, not legal advice."

```
Will drafting (LSK scale):
  Simple will: ~KES 5,000 – 15,000 (attorney estimate)
  Complex estate: 1% of estate value

Probate filing (court fees):
  Grant of probate: KES 300 + % of estate value
  Letters of administration: similar

This is a reference/estimate tool, not legal advice.
```

---

#### T13 — Kenya Inflation & Cost of Living Calculator
**URL:** `/tools/inflation-calculator/`
**Update:** 🟡 Periodic (KNBS publishes CPI monthly)
**Keywords:** "Kenya inflation calculator", "cost of living Kenya 2025", "purchasing power Kenya"
**Data Source:** KNBS Monthly CPI Statistical Release (knbs.or.ke)
**Status:** ❌ **REMOVED** — `yuthufu.com` already exists as Kenya CPI calculator. `fxtop.com` also covers Kenya.

---

#### T14 — NSSF Contribution Calculator
**URL:** `/tools/nssf-calculator/`
**Update:** 🟢 Static (NSSF Act 2013 contribution rates — post-court-order rates)
**Keywords:** "NSSF contribution Kenya 2025", "new NSSF rates Kenya", "NSSF deduction"
**Data Source:** NSSF Act 2013 + Kenya Court ruling on implementation
**Status:** ⚠️ **COMPETITION EXISTS** — `calckenya.com/nssf`, `wingubox.com`, `faidihr.com` exist. Differentiate with: (a) old vs new rate comparison with legal background, (b) employer + employee combined view.
**Note:** Controversy around old vs new rates — explain both clearly with the legal background.

```
Old rates (pre-2023): KES 200 employee + KES 200 employer (flat)
New rates (NSSF Act 2013, phased in):
  Tier 1: 6% × min(salary, KES 6,000) → max KES 360
  Tier 2: 6% × min(salary − 6,000, KES 12,000) → max KES 720
  Total max employee contribution: KES 1,080
```

---

### 6B. 🎓 Education & CBC

> Massively underserved online space in Kenya. Millions of parents, students, and teachers search for CBC guidance daily. Extremely high-value AdSense audience (schools, EdTech, tutoring advertisers).

---

#### T15 — CBC Curriculum Explorer
**URL:** `/tools/cbc-curriculum/`
**Update:** 🟢 Static (KICD publishes curriculum every few years; next revision ~2027)
**Keywords:** "CBC curriculum Kenya", "CBC learning areas", "CBC subjects per grade Kenya"
**Data Source:** Kenya Institute of Curriculum Development (KICD) — kicd.ac.ke publishes curriculum designs as free PDFs
**Status:** ✅ **KEEP** — No interactive explorer found. KICD PDFs are the main source. Massive parent/teacher audience.

**Structure of CBC to model:**
```
Pre-Primary (PP1 & PP2 — ages 4–5):
  Languages, Mathematical Activities, Environmental Activities,
  Psychomotor & Creative Activities, Religious Education

Lower Primary (Grades 1–3 — ages 6–8):
  Literacy, Kiswahili, English, Mathematics, Environmental Activities,
  Creative Arts, Social Studies, Religious Education

Upper Primary (Grades 4–6 — ages 9–11):
  English, Kiswahili/KSL, Mathematics, Science & Technology,
  Social Studies, Creative Arts & Sports, Religious Education,
  Agriculture, Home Science, Pre-Technical Studies

Junior Secondary School (JSS — Grades 7, 8, 9 — ages 12–14):
  English, Kiswahili/KSL, Mathematics, Integrated Science,
  Social Studies, Creative Arts, Computer Science, Agriculture,
  Home Science, Pre-Technical Studies, Business Studies,
  Religious Education, Physical Education

Senior Secondary School (Grades 10–12 — being rolled out):
  STEM Pathway, Arts & Sports Science Pathway, Social Sciences Pathway
```

**Interactive features:**
- Select grade → see all learning areas + strands + sub-strands
- Select subject → see grades it appears in
- PDF download card per grade (link to KICD official PDFs)
- "What should my child be studying?" wizard

---

#### T16 — CBC Grade & Age Checker
**URL:** `/tools/cbc-grade-age/`
**Update:** 🟢 Static
**Keywords:** "CBC grade age Kenya", "what grade is my child CBC", "PP1 PP2 age Kenya"
**Data Source:** KICD & Ministry of Education CBC rollout schedule
**Status:** ✅ **KEEP** — No dedicated tool found. Only scattered blog posts. High parent demand.

```
PP1:  turns 4 in the current year
PP2:  turns 5 in the current year
Grade 1: turns 6 in the current year
Grade 2: turns 7
...
Grade 9 (JSS 3): turns 14
Grade 10 (SSS 1): turns 15
Grade 11 (SSS 2): turns 16
Grade 12 (SSS 3): turns 17
```

**Input:** Child's date of birth → Output: Current grade, previous system equivalent (Form/Standard), next milestone, what learning areas to expect.

**Bonus:** Side-by-side comparison table of CBC vs 8-4-4 equivalents for parents transitioning.

---

#### T17 — KUCCPS Cluster Points Calculator
**URL:** `/tools/kuccps-cluster-calculator/`
**Update:** 🔵 Annual (KUCCPS releases cluster weights after KCSE, ~March each year)
**Keywords:** "KUCCPS cluster calculator", "cluster points Kenya", "how to calculate cluster points KUCCPS"
**Data Source:** KUCCPS annual booklet (kuccps.net) — all cluster groupings + subject weights published free
**Status:** ✅ **KEEP — HIGHEST VALUE TOOL** — Every Form 4 leaver and their parents searches for this. No good standalone tool exists. PDF booklets are the main source.

```
How clusters work:
  Each university course belongs to a Cluster (1–20+)
  Each cluster specifies 4 required subjects with weights: 2 / 1 / 0.5 / 0.5
  Cluster weight = Σ(Grade points × subject weight)
  KCSE Grade points: A=12, A-=11, B+=10, B=9, B-=8, C+=7, C=6, C-=5, D+=4, D=3, D-=2, E=1

Example — Medicine (Cluster 1):
  Biology × 2
  Chemistry × 1
  Physics × 0.5
  Mathematics × 0.5
  Cluster weight = (12×2)+(12×1)+(12×0.5)+(12×0.5) = 24+12+6+6 = 48 (max)
```

**Implementation:**
- Store all ~25 clusters with their required subjects in `kuccps-clusters.json`
- User enters KCSE grades for all subjects
- Tool calculates cluster weight for every cluster automatically
- Shows which courses they qualify for at each university
- Include 2025 minimum cluster weights per course

---

#### T18 — KCSE Grade & Mean Grade Calculator
**URL:** `/tools/kcse-grade-calculator/`
**Update:** 🟢 Static (KNEC grading system unchanged for years)
**Keywords:** "KCSE grade calculator Kenya", "mean grade calculator Kenya", "KNEC grading system"
**Data Source:** KNEC grading rubric (static, public knowledge)
**Status:** ✅ **KEEP** — No dedicated interactive calculator found. Most sites just explain the grading system. High student demand.

```
Grade points: A=12, A-=11, B+=10, B=9, B-=8, C+=7, C=6, C-=5, D+=4, D=3, D-=2, E=1

Mean Grade Calculation:
  Enter up to 8 subjects (English is compulsory)
  KNEC takes best 7 subjects + English compulsory
  Mean = total points / 8
  Round to nearest grade boundary

Mean grade → Letter grade boundaries:
  A   = 11.50 – 12.00
  A-  = 10.50 – 11.49
  B+  = 9.50 – 10.49
  B   = 8.50 – 9.49
  B-  = 7.50 – 8.49
  C+  = 6.50 – 7.49
  C   = 5.50 – 6.49
  C-  = 4.50 – 5.49
  D+  = 3.50 – 4.49
  D   = 2.50 – 3.49
  D-  = 1.50 – 2.49
  E   = 1.00 – 1.49
```

**Extra:** Show required mean grade for common careers (nursing = C+, medicine = A, engineering = B+)

---

#### T19 — Kenya School Term Dates Calendar
**URL:** `/tools/school-terms/`
**Update:** 🔵 Annual (MoE circular, typically December for following year)
**Keywords:** "Kenya school term dates 2025", "MoE school calendar Kenya", "school opening dates Kenya 2025"
**Data Source:** Ministry of Education press releases and annual circular (education.go.ke)
**Status:** ✅ **KEEP** — Available on blogs but no interactive calendar with countdown/printable features.

**Display:** Interactive calendar + printable A4 card for 3 years at a time (current + next 2).
Include: Term start, end, mid-term break, exams period, national holidays within term.

---

#### T20 — Kenya School Finder
**URL:** `/tools/school-finder/`
**Update:** 🔵 Annual
**Keywords:** "primary schools Nairobi", "best secondary schools Kenya", "CBC schools near me"
**Data Source:** Ministry of Education NEMIS dataset (data.education.go.ke — publicly available) + KNEC school codes
**Status:** ❌ **REMOVED** — NEMIS data exists but is not publicly accessible in a clean, machine-readable format. Data access issue.

---

#### T21 — KCSE School Rankings
**URL:** `/tools/kcse-school-rankings/`
**Update:** 🔵 Annual (KNEC releases results ~March)
**Keywords:** "KCSE results 2024 school rankings", "best KCSE schools Kenya", "top 100 KCSE schools"
**Data Source:** KNEC school-level results (published at knec.ac.ke after results announcement) + news aggregation
**Status:** ✅ **KEEP** — Requires manual data entry from news sources but high traffic value.

**Display:** Sortable table — School | County | Candidates | Mean Score | A grades | Previous year comparison

---

#### T22 — TSC Teacher Registration Guide
**URL:** `/tools/tsc-teacher-registration/`
**Update:** 🟢 Static (TSC requirements rarely change)
**Keywords:** "TSC registration Kenya", "how to register as teacher Kenya", "TSC certificate fees"
**Data Source:** Teachers Service Commission (tsc.go.ke) — published fee schedule and requirements
**Status:** ✅ **KEEP** — `tsc.go.ke` has info but no interactive tool. Static guide is fine.

Static reference page: required documents, fees (broken down by level: P1, Diploma, Degree, Masters), online portal link, processing time, renewal guide.

---

#### T23 — Kenya Driving School Finder & Requirements
**URL:** `/tools/driving-school-guide/`
**Update:** 🟢 Static (NTSA requirements rarely change)
**Keywords:** "driving schools Nairobi", "driving test Kenya NTSA", "how to get driving license Kenya"
**Data Source:** NTSA (ntsa.go.ke) + crowd-sourced list of licensed driving schools
**Status:** ✅ **KEEP** — NTSA has a list but it's a PDF, not searchable. Parse once, make searchable.

Static guide: License classes (A, B, C, BCE, DL), required documents, test process, fees per class. Directory of NTSA-licensed schools searchable by town.

---

### 6C. ⚡ Utilities & Energy

> Essential daily information. KPLC outages are among the most-searched topics on Kenyan Twitter. High repeat traffic = strong AdSense impression volume.

---

#### T24 — KPLC Planned Power Outage Tracker
**URL:** `/tools/kplc-outages/`
**Update:** 🔴 Live (KPLC posts new outages 3–5x per week)
**Keywords:** "KPLC power outage today", "Kenya Power blackout schedule", "KPLC planned outage Nairobi"
**Data Source:** Kenya Power website: `kplc.co.ke/category/view/50/planned-outages`
**Status:** ✅ **KEEP — CRITICAL GAP** — KPLC's old "Power Alert" site from 2014 is defunct. No live outage tracker exists in 2026. This is a massive gap.

**Implementation:**
```
Scraper (runs 3× daily via GitHub Actions — 6AM, 12PM, 6PM EAT):
  1. Fetch https://www.kplc.co.ke/category/view/50/planned-outages
  2. Parse each notice:
     - Date of outage
     - Start time / end time
     - Areas/regions affected (KPLC lists town names + street names)
     - Notice title (often contains county/region)
  3. Parse affected areas string into:
     - county (inferred)
     - sub-areas (comma-separated in KPLC text)
  4. Upsert into `power_outages` table (deduplicate by title+date)
  5. Mark expired outages (date < today) as inactive

Tools output:
  - Search by area name or county
  - Filter: upcoming / today / past 7 days
  - Calendar view showing blackout days per region
  - "Is my area affected today?" quick check widget
```

**KPLC notice format (example):**
> *Interruption of Electricity Supply — Nairobi Region*
> *Date: Thursday, 20th June 2025, 9.00 A.M. – 5.00 P.M.*
> *Areas: Part of Kileleshwa, Lavington, Westlands, Lower Kabete Road, Brookside Drive...*

**Push notification feature (mobile):** User subscribes to their area → FCM push when a new outage affects their area.

---

#### T25 — KPLC Prepaid Token Calculator
**URL:** `/tools/kplc-token-calculator/`
**Update:** 🔵 Annual (EPRA approves KPLC tariff revisions ~annually)
**Keywords:** "KPLC units calculator Kenya", "how many units will I get for KES 500", "electricity token calculator Kenya"
**Data Source:** KPLC/EPRA electricity tariff — published at epra.go.ke
**Status:** ✅ **KEEP** — No Kenya-specific prepaid token calculator found.

**KPLC Tariff Bands (Domestic — DC tariff as of 2024):**
```
Fixed charge: KES 150/month (billed in tokens)
Fuel Cost Charge (FCC): variable, applied per unit (update monthly)
Forex Fluctuation Adjustment (FERFA): variable

Energy charges:
  0 – 10 kWh:      KES 2.50/unit (lifeline)
  11 – 50 kWh:     KES 12.75/unit
  51 – 1,500 kWh:  KES 15.80/unit
  > 1,500 kWh:     KES 17.63/unit (+ surcharge)

Plus: VAT 16%, REP levy, REF levy, EPRA levy

Note: Prepaid tokens also deduct fixed charges across purchases
      until the fixed charge is fully paid for the month.
```

**Input:** Amount in KES → Output: Net units receivable (after fixed charge deduction), unit band breakdown, VAT and levy breakdown.

---

#### T26 — Kenya Fuel Prices Tracker
**URL:** `/tools/fuel-prices/`
**Update:** 🟡 Periodic (EPRA announces on the 14th each month)
**Keywords:** "Kenya petrol price today", "diesel price Kenya", "EPRA fuel prices 2025"
**Data Source:** Energy and Petroleum Regulatory Authority — epra.go.ke (monthly PDF gazette notice)
**Status:** ✅ **KEEP** — EPRA publishes PDFs but no clean, interactive tracker with historical charts found.

**Display:** Table of petrol/diesel/kerosene per county/region + month-over-month change chart. "Updated: [date]" badge prominently displayed.

---

#### T27 — Water Bill Estimator
**URL:** `/tools/water-bill-calculator/`
**Update:** 🟡 Periodic (water utilities revise tariffs every 1–2 years, WASREB approves)
**Keywords:** "Nairobi water bill calculator", "NCWSC tariff", "how much water bill Kenya"
**Data Source:** Individual water utilities — NCWSC, Mombasa Water, KIWASCO, Nakuru Water
**Status:** ✅ **KEEP** — Start with Nairobi (NCWSC) only. Other utilities have tariffs but may not be digitally accessible.

Cover at least: Nairobi (NCWSC), Mombasa, Kisumu, Nakuru, Eldoret.
Tariff JSON per utility + step-function billing calculation.

---

#### T28 — Kenya LPG / Cooking Gas Price Reference
**URL:** `/tools/lpg-gas-prices/`
**Update:** 🟡 Periodic (EPRA also regulates LPG prices — monthly announcement)
**Keywords:** "cooking gas price Kenya", "LPG price Kenya today", "gas cylinder refill cost Kenya"
**Data Source:** EPRA monthly LPG price circular
**Status:** ✅ **KEEP** — EPRA publishes monthly but data is in PDF. Scrape PDF monthly.

**Display:** Prices per region for 3kg, 6kg, 13kg, 35kg LPG cylinders (different brands: Total, K-Gas, Rubis, Hashi, OrientalGas).

---

#### T29 — Solar Energy ROI Calculator (Kenya)
**URL:** `/tools/solar-roi-calculator/`
**Update:** 🟢 Static (pure math tool using KPLC tariff — update tariff rate annually)
**Keywords:** "solar panel cost Kenya", "solar ROI calculator Kenya", "should I install solar Kenya"
**Data Source:** KPLC tariff (for comparison) + average Kenya solar irradiance (static — Kenya sits on equator, ~5.5–6.5 kWh/m²/day depending on region)
**Status:** ✅ **KEEP — COMPLETELY UNIQUE** — No Kenya-specific solar calculator found. Only generic South Africa forum discussions.

```
Inputs:
  Current monthly electricity bill (KES)
  Roof size available (m²) OR desired system size (kW)
  Location (county → uses average solar irradiance table)
  System cost estimate (user-provided or use Kenya market average: ~KES 80,000/kW installed)

Outputs:
  Recommended system size (kW)
  Monthly generation (kWh)
  Monthly savings (KES)
  Payback period (years)
  25-year cumulative savings

Solar irradiance by region (static table):
  Nairobi: 5.5 kWh/m²/day
  Coast (Mombasa): 5.8
  Rift Valley: 6.2
  Nyanza: 5.3
  North Eastern: 6.5
```

**This tool is completely unique in Kenya and has zero maintenance after launch.**

---

#### T30 — Kenya ISP Speed Comparison
**URL:** `/tools/isp-comparison/`
**Update:** 🔵 Annual (CA publishes Quality of Service reports biannually)
**Keywords:** "fastest internet Kenya", "Kenya ISP comparison 2025", "Safaricom vs Zuku vs Faiba"
**Data Source:** Communications Authority QoS Monitoring Reports (ca.go.ke) + Ookla/nPerf public data
**Status:** ✅ **KEEP** — CA publishes QoS reports but no clean comparison tool found. Compile from CA reports + speed test data.

**Display:** Table comparing Safaricom, Zuku, Faiba, Airtel, Liquid, Starlink Kenya — average speeds, counties covered, packages available, price range.

---

### 6D. 🏛️ Government & Legal

> Consistently high-traffic searches. Every Kenyan needs government information at some point. High dwell time = good AdSense performance.

---

#### T31 — Kenya Tender Watch
**URL:** `/tools/tender-watch/`
**Update:** 🔴 Live (daily scrape from PPRA)
**Keywords:** "Kenya government tenders 2025", "PPRA tenders", "government procurement Kenya"
**Data Source:** Public Procurement Regulatory Authority (ppra.go.ke) — all public tenders published free
**Status:** ✅ **KEEP** — No good PPRA aggregator exists. PPRA site is basic and not user-friendly. High SME value.

**Scraper:** Daily GitHub Actions job → parse tender notices → store in `tenders` table
**Features:** Filters by ministry, county, sector, value range, deadline; email alerts; keyword search.

---

#### T32 — KPLC Outage Notices ← (see T24 above in Utilities)

---

#### T33 — Kenya Acts of Parliament Search
**URL:** `/tools/kenya-acts-search/`
**Update:** 🟢 Static (update when Parliament amends acts — monitor Kenya Gazette)
**Keywords:** "Kenya laws search", "Kenya acts of parliament", "Kenya legislation online"
**Data Source:** Kenya Law (kenyalaw.org) — all acts are free and searchable
**Status:** ✅ **KEEP** — `kenyalaw.org` exists but is not user-friendly. Build better discovery layer.

**What to build:** A curated, plain-language index of the 200 most relevant acts to everyday Kenyans (Tax, Land, Traffic, Employment, Marriage, Succession, Companies, Public Health, etc.) with:
- Act name, Cap number, year
- 2-sentence plain-English summary
- Key sections Kenyans commonly ask about
- Link to full act on kenyalaw.org

**Not a replacement for kenyalaw.org but a better discovery layer.**

---

#### T34 — Kenya Ward & Constituency Finder
**URL:** `/tools/ward-constituency-finder/`
**Update:** 🟢 Static (boundaries set by IEBC after 2017/2022 elections — next change ~2027)
**Keywords:** "find my ward Kenya", "my constituency Kenya", "who is my MP Kenya"
**Data Source:** IEBC — all wards, constituencies, and counties (static data, downloadable)
**Status:** ✅ **KEEP** — IEBC data exists but is static. No interactive finder found.

**Input:** County + subcounty dropdown (or typed name) → output:
- Constituency name
- MP name (and party)
- Senator
- Governor
- Women Representative
- MCA (Member of County Assembly)
- Ward name

Elected officials info: update after each election (2022 data valid until 2027).

---

#### T35 — Kenya Public Holidays Calendar
**URL:** `/tools/public-holidays/`
**Update:** 🔵 Annual (gazette supplement for transferable holidays when they fall on weekends)
**Keywords:** "Kenya public holidays 2025", "Kenya bank holidays", "Kenya gazetted holidays"
**Data Source:** Kenya Public Holidays Act (Cap 110) + annual gazette notice
**Status:** ✅ **KEEP** — Many calendars exist but no Kenya-specific one with countdown + iCal download + mobile notifications.

**Features:** Year view, countdown timer to next holiday, iCal (.ics) download, mobile notification subscribe.

---

#### T36 — NTSA Traffic Fines Reference
**URL:** `/tools/traffic-fines/`
**Update:** 🟢 Static (Traffic Act — rarely amended)
**Keywords:** "NTSA fines Kenya 2025", "traffic offence fines Kenya", "speeding fine Kenya"
**Data Source:** Traffic Act (Cap 403) + NTSA published fine schedule
**Status:** ✅ **KEEP** — Reference tables exist but no searchable, filterable tool with demerit points found.

**Display:** Searchable + filterable table by category:
- Speed offences
- Documentation (licence, insurance, inspection)
- Vehicle condition
- Parking
- Pedestrian offences
- DUI / drunk driving
- Commercial vehicle violations

Include: fine amount, demerit points (NTSA points system), arrest-worthy vs. on-the-spot.

---

#### T37 — Kenya Visa Requirements Guide
**URL:** `/tools/kenya-visa-requirements/`
**Update:** 🟡 Periodic (Kenya moved to e-Visa in 2023; ETA introduced Dec 2023)
**Keywords:** "Kenya visa requirements", "do I need visa for Kenya", "Kenya ETA cost"
**Data Source:** Kenya Department of Immigration (immigration.go.ke) + evisa.go.ke
**Status:** ✅ **KEEP** — `immigration.go.ke` and `evisa.go.ke` have info but no country lookup tool.

**Important:** Kenya replaced tourist visas with an **ETA (Electronic Travel Authorisation)** for all non-EAC nationals in January 2024.

```
ETA:
  Cost: $30 USD
  Apply: etakenya.go.ke
  Processing: ~72 hours
  Valid: 90 days, single/multiple entry options
  Exempt: EAC citizens (Kenya, Uganda, Tanzania, Rwanda, Burundi, DRC, South Sudan)
```

Build a country lookup tool: enter nationality → output: ETA required / EAC exempt / Other arrangement.

---

#### T38 — Kenya Passport & National ID Fees Guide
**URL:** `/tools/passport-id-fees/`
**Update:** 🟢 Static (fees rarely change without budget announcement)
**Keywords:** "Kenya passport fee 2025", "national ID replacement cost Kenya", "alien ID Kenya"
**Data Source:** Department of Immigration fee schedule + National Registration Bureau (NRB)
**Status:** ✅ **KEEP** — Available on immigration site but not as a clean reference.

```
Passport (adult):
  New application: KES 4,550 (ordinary, 5 years)
  New application: KES 6,550 (ordinary, 10 years)
  Jumbo passport: additional fee
  Emergency passport: KES 8,000 (24hr processing)
  East African passport: KES 3,000

National ID:
  First application: Free
  Replacement (lost): KES 300
  Replacement (damaged): KES 100

Alien Certificate: KES 1,000

Processing times, required documents, Huduma Centre locations.
```

---

#### T39 — Police Station Directory
**URL:** `/tools/police-station-finder/`
**Update:** 🟢 Static (update when new stations open — infrequent)
**Keywords:** "police station near me Kenya", "Kenya police contacts", "nearest police station Nairobi"
**Data Source:** National Police Service — nps.go.ke publishes station directory; supplement with manual research
**Status:** ✅ **KEEP** — `nps.go.ke` has directory but not searchable by county.

**Data:** Station name, county, subcounty, phone number, GPS coordinates (from OpenStreetMap). Make searchable by county/subcounty.

---

#### T40 — County Revenue & Budget Tracker
**URL:** `/tools/county-budget-tracker/`
**Update:** 🔵 Annual (Controller of Budget annual report, published ~October)
**Keywords:** "county government budget Kenya", "Nairobi county budget 2025", "Controller of Budget report"
**Data Source:** Controller of Budget (cob.go.ke) — annual county budget implementation reports (free PDFs)
**Status:** ✅ **KEEP** — Requires significant scraping effort but high value for researchers/journalists.

Parse and visualize for all 47 counties: revenue collected, expenditure, absorption rate, own-source revenue vs national allocation.

---

#### T41 — Kenya Election Results Archive
**URL:** `/tools/election-results-archive/`
**Update:** 🟢 Static until 2027 (next general election)
**Keywords:** "Kenya election results 2022", "presidential results county by county", "Kenya constituency results"
**Data Source:** IEBC — post-election gazette notices (all results gazetted and public)
**Status:** ✅ **KEEP** — IEBC gazettes exist. Data is public but not in clean format.

Build a queryable archive of 2022 results: presidential (by constituency), gubernatorial (by county), parliamentary (by constituency), Senate (by county).

---

#### T42 — NEMA Environmental Impact Assessment Guide
**URL:** `/tools/nema-eia-guide/`
**Update:** 🟢 Static (EMCA Act — rarely amended)
**Keywords:** "NEMA EIA Kenya", "environmental impact assessment Kenya", "when do you need EIA Kenya"
**Data Source:** Environmental Management and Coordination Act (EMCA) + NEMA (nema.go.ke)
**Status:** ✅ **KEEP** — `nema.go.ke` has info but not well-organized.

Static guide: which projects require EIA, EIA vs ESIA vs audit, NEMA fees schedule, timelines, licensed EIA experts directory link.

---

### 6E. 🚌 Transport & Travel

> Every Kenyan uses transport. Matatu info is evergreen. Very high mobile traffic category.

---

#### T43 — Kenya Number Plate Decoder
**URL:** `/tools/number-plate-decoder/`
**Update:** 🟢 Static (county codes assigned at independence + NTSA extensions)
**Keywords:** "Kenya number plate meaning", "KDA number plate county", "Kenya car registration decoder"
**Data Source:** NTSA publication + Traffic Act — all county prefix codes are public record
**Status:** ✅ **KEEP** — No dedicated decoder found. Only scattered forum posts.

```
Examples:
KDA, KDB, KDC → Nairobi (older sequences)
KCC, KBZ       → Nairobi
KAZ            → Nairobi government
KBZ            → Nairobi
KME, KMF       → Mombasa
KAF, KAG       → Kisumu
KAK, KAL       → Nakuru
...

Decoder features:
- Plate prefix → County of registration
- Plate sequence → approximate registration year range
- Government plate decoder (GK = central government, GA = administration police, etc.)
- Private plates (personalized) — note: not decodable

Private taxi: white plates
Government: white GK plates
Diplomatic: CD plates (decoding by series)
```

---

#### T44 — Kenya Mobile Number Prefix & Network Guide
**URL:** `/tools/mobile-number-prefix/`
**Update:** 🟢 Static (CA allocates number ranges — rarely changes)
**Keywords:** "Kenya phone number prefix", "which network is 0722", "Safaricom Airtel Telkom prefixes"
**Data Source:** Communications Authority (ca.go.ke) — number allocation plans published
**Status:** ✅ **KEEP** — No comprehensive, up-to-date guide found.

```
Safaricom: 0700-0729, 0740-0743, 0745, 0757-0759, 0790-0799, 0110-0119
Airtel:    0730-0739, 0750-0756, 0780-0789, 0100-0109
Telkom:    0770-0779, 0120-0129
Fadhili:   0760-0769

Shortcodes guide:
  *100# → Safaricom balance
  *334# → Airtel balance
  etc.

Also: International dialing from Kenya:
  Kenya country code: +254
  Drop the leading 0: 0722... → +254 722...
```

**100% static. Build once, never update until CA reallocates.**

---

#### T45 — Kenya Long-Distance Bus Routes Guide
**URL:** `/tools/long-distance-bus-routes/`
**Update:** 🟢 Static (scraped once per year from bus company websites)
**Keywords:** "Nairobi to Mombasa bus", "Easy Coach routes Kenya", "bus timetable Kenya"
**Data Source:** Scrape once from: Easy Coach, Modern Coast, Guardian Angel, Dreamline Express, Mash, Tahmeed Coach websites
**Status:** ✅ **KEEP** — Bus company websites exist but no aggregator found.

**Data:** Company, Route, Departure times, Duration, Approx fare (range), Booking link, Ratings.
Build once, verify annually. Supplement with user reports.

---

#### T46 — Kenya Distance Between Towns Calculator
**URL:** `/tools/distance-between-towns/`
**Update:** 🟢 Static (road network distances rarely change)
**Keywords:** "distance Nairobi Mombasa", "how far is Kisumu from Nairobi", "Kenya road distance"
**Data Source:** Kenya Roads Board (krb.go.ke) + known road distances compiled once
**Status:** ❌ **REMOVED** — `distancecalculator.globefeed.com`, `distancecalculator.himmera.com`, `distancefromto.net` — multiple mature calculators exist.

---

#### T47 — Matatu SACCO Directory
**URL:** `/tools/matatu-saccos/`
**Update:** 🔵 Annual (NTSA re-publishes licensed SACCO list)
**Keywords:** "matatu SACCO Kenya", "licensed matatu SACCOs", "NTSA registered transport SACCOs"
**Data Source:** NTSA (ntsa.go.ke) — licensed PSV SACCOs (downloadable, free)
**Status:** ✅ **KEEP** — NTSA publishes list but it's a PDF, not searchable.

---

#### T48 — Kenya National Parks & Wildlife Conservancies
**URL:** `/tools/national-parks-directory/`
**Update:** 🟢 Static (KWS fees update occasionally; park existence is permanent)
**Keywords:** "Kenya national parks fees", "KWS park fees 2025", "Kenya safari parks"
**Data Source:** Kenya Wildlife Service (kws.go.ke) — fee schedule + park directory
**Status:** ✅ **KEEP** — `kws.go.ke` has fee schedule but no comprehensive directory with all parks.

```
For each park/conservancy:
  Name, type (National Park / National Reserve / Conservancy)
  County/region
  Size (km²)
  Main wildlife
  Entry fees (citizen/resident/non-resident, adult/child)
  Best season to visit
  Accommodation nearby
  Contact / booking link (KWS eCitizen)
```

**Content-rich pages per park = multiple AdSense impressions per visit.**

---

#### T49 — Kenya Domestic Flights Guide
**URL:** `/tools/domestic-flights/`
**Update:** 🔵 Annual (routes rarely change; fares change frequently — show ranges only)
**Keywords:** "Nairobi to Mombasa flight", "domestic flights Kenya", "Kenya airways routes"
**Data Source:** Kenya Airports Authority (kaa.go.ke) + airline route maps (Kenya Airways, JamboJet, Fly540, AirKenya)
**Status:** ✅ **KEEP** — Airline websites have routes but no clean guide found.

**Static guide:** Which airlines fly which routes, approximate fares, airport information (JKIA, MIA, Kisumu, Eldoret, Malindi, Lamu, Ukunda, Nanyuki).

---

#### T50 — Kenya Driving License Classes & Process
**URL:** `/tools/driving-license-guide/`
**Update:** 🟢 Static (NTSA classification rarely changes)
**Keywords:** "driving license classes Kenya", "how to get driving license Kenya", "NTSA driving test"
**Data Source:** NTSA (ntsa.go.ke) + Traffic Act
**Status:** ✅ **KEEP** — NTSA site has info but scattered.

```
License Classes:
  Class A: Motorcycles & tri-cycles
  Class B: Motor vehicles < 3,500kg (most private cars)
  Class C: Motor vehicles > 3,500kg (lorries, buses)
  Class BCE: Large commercial vehicles
  Class DL: Driving instructors
  Class G: Tractors

Process:
  1. Get D.L. Form 1 (medical examination)
  2. Driving school (min 40 hours)
  3. Theory test at NTSA (computer-based)
  4. Practical test (NTSA testing grounds)
  5. Pay fees (KES ~3,000)
  6. Collect license (Huduma Centre or NTSA offices)
```

---

#### T51 — NTSA Services & Fees Guide
**URL:** `/tools/ntsa-services-fees/`
**Update:** 🟢 Static (NTSA fees rarely change)
**Keywords:** "NTSA fees Kenya", "vehicle inspection cost Kenya", "NTSA logbook transfer fee"
**Data Source:** NTSA fee schedule (ntsa.go.ke)
**Status:** ✅ **KEEP** — Available on NTSA site.

```
Vehicle inspection (PSV): KES 1,000
Vehicle inspection (private): KES 800
Logbook transfer: KES 4,000
Duplicate logbook: KES 3,000
Change of vehicle colour: KES 2,000
Number plate (new): KES 3,000
...
```

---

### 6F. 🏥 Health & Wellness

> Healthcare is one of the highest AdSense CPC categories. Kenyan health tools get traffic from patients, health workers, and caregivers.

---

#### T52 — NHIF Hospital & Clinic Finder
**URL:** `/tools/nhif-hospital-finder/`
**Update:** 🟡 Periodic (NHIF updates accreditation list quarterly)
**Keywords:** "NHIF accredited hospitals Kenya", "NHIF hospital near me", "NHIF clinic Nairobi"
**Data Source:** NHIF accredited providers list (nhif.or.ke — downloadable PDF, free)
**Status:** ✅ **KEEP** — Britam has a hospital locator but it's insurance-focused, not NHIF-accredited specific. The NHIF PDF lists exist but are not searchable.

**Implementation:** Parse quarterly NHIF hospital PDF → store in Appwrite → searchable by county, subcounty, and level (Level 2 dispensary → Level 6 national referral hospital).

---

#### T53 — Kenya Hospital Levels Reference
**URL:** `/tools/kenya-hospital-levels/`
**Update:** 🟢 Static (MOH hospital classification system rarely changes)
**Keywords:** "hospital levels Kenya", "Level 5 hospital Kenya", "what is Level 6 hospital Kenya"
**Data Source:** Ministry of Health Kenya — Kenya Essential Package for Health (KEPH)
**Status:** ✅ **KEEP** — MOH has KEPH document but not as an interactive reference.

```
Level 1: Community (community health workers)
Level 2: Dispensary (outpatient primary care)
Level 3: Health Centre (basic inpatient, maternity)
Level 4: Sub-district/County Hospital (surgery, specialist)
Level 5: County Referral Hospital (full specialist)
Level 6: National Referral Hospital (KNH, Moi Teaching, etc.)
```

Static content page — very searchable and high-dwell-time.

---

#### T54 — Kenya Licensed Pharmacy Finder
**URL:** `/tools/pharmacy-finder/`
**Update:** 🔵 Annual (PPB updates registered pharmacies list)
**Keywords:** "registered pharmacy Kenya", "PPB pharmacies Kenya", "verify pharmacy Kenya"
**Data Source:** Pharmacy and Poisons Board (ppb.go.ke) — publishes list of licensed premises
**Status:** ✅ **KEEP** — PPB publishes list but it's a PDF, not searchable.

Parse once annually, make searchable by county.

---

#### T55 — Kenya Child Growth & Vaccination Schedule
**URL:** `/tools/child-growth-schedule/`
**Update:** 🟢 Static (WHO/MOH growth charts and KEPI vaccination schedule very stable)
**Keywords:** "Kenya vaccination schedule baby", "KEPI immunisation Kenya", "child growth chart Kenya"
**Data Source:** MOH Kenya Expanded Programme on Immunization (KEPI) + WHO child growth standards
**Status:** ✅ **KEEP** — No interactive schedule with growth charts found.

```
KEPI Schedule:
  Birth:           BCG, OPV 0, HBV Birth Dose
  6 weeks:         OPV 1, DPT-HepB-Hib, PCV 1, ROTA 1
  10 weeks:        OPV 2, DPT-HepB-Hib, PCV 2, ROTA 2
  14 weeks:        OPV 3, DPT-HepB-Hib, PCV 3, IPV
  9 months:        Measles/Rubella, Yellow Fever
  18 months:       Measles/Rubella booster
  ...

Age-appropriate growth chart: weight-for-age, height-for-age z-scores
Input DOB → output: current age, expected weight/height range, next vaccines due
```

---

#### T56 — Kenya Blood Banks Directory
**URL:** `/tools/blood-bank-finder/`
**Update:** 🟢 Static (KNBTS centres rarely move)
**Keywords:** "blood donation Kenya", "KNBTS blood bank", "where to donate blood Nairobi"
**Data Source:** Kenya National Blood Transfusion Service (knbts.or.ke)
**Status:** ✅ **KEEP** — `knbts.or.ke` has list.

All KNBTS regional centres + major hospital blood bank contacts. Completely static.

---

#### T57 — Kenya Medical Procedure Cost Reference
**URL:** `/tools/medical-costs-guide/`
**Update:** 🔵 Annual (MOH gazetted health fees; SHA/NHIF benefit schedule)
**Keywords:** "cost of surgery Kenya", "hospital charges Kenya", "medical fees Kenya public hospital"
**Data Source:** Ministry of Health — Legal Notice for public hospital charges + NHIF benefit package
**Status:** ✅ **KEEP** — MOH gazette exists but is not well-distributed.

```
Public Hospital Charges (MOH gazette):
  Outpatient consultation (Level 4): KES 500
  Inpatient per day (general ward): KES 600
  C-section: KES 10,000–25,000
  Normal delivery: KES 2,500 (free in some counties)
  X-ray: KES 500–1,500
  CT scan: KES 8,000–15,000

Private sector: range estimates only (no fixed rates)
NHIF/SHA benefits: what each procedure qualifies for
```

---

#### T58 — Kenya Medical Practitioners Verification
**URL:** `/tools/doctor-verification/`
**Update:** 🟡 Periodic (KMPDC updates register quarterly)
**Keywords:** "verify doctor Kenya", "KMPDC registered doctors", "is my doctor registered Kenya"
**Data Source:** Kenya Medical Practitioners and Dentists Council (kmpdc.go.ke) — online verification portal
**Status:** ✅ **KEEP** — KMPDC portal exists but is clunky. Build better search interface. High trust signal.

**Build:** A user-friendly search interface that queries KMPDC's public register. Frame as "Verify your doctor's registration" — high trust signal for users.

---

### 6G. 📊 Business & Investment

> Entrepreneurs, SMEs, and investors — high AdSense CPC audience. Business tools have strong return visitors.

---

#### T59 — Business Registration Cost Calculator
**URL:** `/tools/business-registration-cost/`
**Update:** 🟢 Static (eCitizen fees rarely change without budget notice)
**Keywords:** "cost of registering business Kenya", "company registration Kenya fees", "eCitizen business registration"
**Data Source:** eCitizen fee schedule (ecitizen.go.ke) + Registrar of Companies
**Status:** ❌ **REMOVED** — `biasharaguide.co.ke/tools/registration-calculator/` already exists.

---

#### T60 — Kenya SACCO Directory
**URL:** `/tools/sacco-directory/`
**Update:** 🔵 Annual (SASRA publishes licensed SACCOs annually)
**Keywords:** "Kenya SACCO directory", "licensed SACCOs Kenya", "best SACCO Kenya"
**Data Source:** SASRA (sasra.go.ke) — annual list of licensed deposit-taking and non-deposit SACCOs
**Status:** ❌ **REMOVED** — `saccolink.com` (357 verified SACCOs), `saccohisa.co.ke` — mature directories exist.

---

#### T61 — Kenya VAT Applicability Guide
**URL:** `/tools/vat-guide-kenya/`
**Update:** 🔵 Annual (Finance Act can add/remove zero-rated or exempt items)
**Keywords:** "VAT exempt goods Kenya", "zero rated VAT Kenya", "KRA VAT guide"
**Data Source:** VAT Act 2013 (Cap 476) + annual Finance Acts amendments
**Status:** ❌ **REMOVED** — `anrok.com` has Kenya VAT guide; KRA site has the information.

---

#### T62 — Kenya IP & Trademark Registration Cost
**URL:** `/tools/trademark-cost-kenya/`
**Update:** 🟢 Static (KIPI fees rarely change)
**Keywords:** "trademark registration Kenya cost", "KIPI Kenya trademark fees", "protect business name Kenya"
**Data Source:** Kenya Industrial Property Institute (kipi.go.ke) — published fee schedule
**Status:** ✅ **KEEP** — `kipi.go.ke` has fee schedule but no interactive calculator.

```
Trademark:
  Application fee (1 class): KES 3,850
  Each additional class: KES 3,080
  Examination fee: KES 5,500
  Registration: KES 7,700
  Renewal (10 years): KES 8,800

Copyright:
  Registration (Kenya Copyright Board): KES 1,000–5,000
  No registration required legally but recommended

Patent:
  Filing: KES 5,500
  Examination: KES 8,250
  Publication: KES 4,400
  Grant: KES 11,000
```

---

#### T63 — NSE Listed Companies Guide
**URL:** `/tools/nse-companies/`
**Update:** 🔵 Annual (new listings rare; profile data stable)
**Keywords:** "NSE listed companies Kenya", "companies on Nairobi Stock Exchange", "Kenya stock market companies"
**Data Source:** Nairobi Securities Exchange (nairobi.securities.exchange or nse.co.ke) — all listed companies are public
**Status:** ✅ **KEEP** — No good browsable directory with sector info found.

**Build:** Browsable/searchable directory of all NSE-listed companies with: sector, market segment (GEMS/MIMS/Main), listing date, brief description, company website, share price data link (link to NSE — don't scrape live prices).

---

#### T64 — Kenya Insurance Products Guide
**URL:** `/tools/insurance-guide-kenya/`
**Update:** 🔵 Annual (IRA publishes premium benchmarks annually)
**Keywords:** "car insurance Kenya 2025", "health insurance Kenya comparison", "life insurance Kenya"
**Data Source:** Insurance Regulatory Authority (ira.go.ke) — publishes licensed insurers + product approvals
**Status:** ✅ **KEEP** — IRA site has info but not well-organized.

**Content:** Types of insurance, regulatory minimum premiums (motor), what NHIF/SHA covers vs needs top-up, how to verify an insurer is licensed.

---

#### T65 — Kenya Real Estate Agent Verification
**URL:** `/tools/real-estate-agent-checker/`
**Update:** 🔵 Annual (EARB updates register annually)
**Keywords:** "verify real estate agent Kenya", "registered estate agent Kenya", "EARB Kenya"
**Data Source:** Estate Agents Registration Board (earb.go.ke) — licensed agents register
**Status:** ✅ **KEEP** — EARB register exists but no good search interface. Critical consumer protection tool.

**Build:** Search by agent name or firm → verify registration status. Critical consumer protection tool. Currently no good standalone search interface exists.

---

#### T66 — Kenya Customs Restricted & Prohibited Items Guide
**URL:** `/tools/kenya-customs-restricted-items/`
**Update:** 🟢 Static (EAC Customs Act + Kenya customs regulations — rarely change)
**Keywords:** "what can I bring into Kenya", "Kenya customs restrictions", "prohibited items Kenya airport"
**Data Source:** Kenya Revenue Authority Customs & Border Control + EAC Customs Management Act
**Status:** ✅ **KEEP** — KRA has info but scattered.

```
Absolutely prohibited: narcotics, counterfeit currency, pornography, illegal firearms, endangered species products (CITES)
Restricted (permit required): firearms, ammunition, medicines > personal supply, agricultural products (phytosanitary), alcohol (limits apply)
Traveller allowances: USD 500 goods duty-free, KES 1,000,000 cash declaration threshold, 1 litre spirits, 200 cigarettes
```

---

#### T67 — Kenya County Demographics Explorer
**URL:** `/tools/county-demographics/`
**Update:** 🟢 Static until 2029 (KNBS 2019 census — next census ~2029)
**Keywords:** "Nairobi population 2025", "Kenya county population", "KNBS census Kenya"
**Data Source:** KNBS 2019 Census results (knbs.or.ke — all data published as free downloads)
**Status:** ✅ **KEEP** — KNBS 2019 census data is available and well-documented.

**For each of 47 counties:** Population, number of households, area (km²), population density, urban/rural split, male/female ratio, largest town, % with piped water, % with electricity. Chart: population comparison bars.

---

#### T68 — Kenya NGO & Charity Registration Guide
**URL:** `/tools/ngo-registration-kenya/`
**Update:** 🟢 Static (NGO Coordination Act rarely changes)
**Keywords:** "how to register NGO Kenya", "NGO registration cost Kenya", "NGO board Kenya"
**Data Source:** NGO Co-ordination Board (ngobureau.go.ke) + Ministry of Interior
**Status:** ✅ **KEEP** — `ngobureau.go.ke` has info but not as a clean guide.

```
NGO Registration:
  Application fee: KES 5,000
  Registration fee: KES 10,000
  Annual returns: KES 3,000/year
  Requirements: 3 founding members, constitution, bank account

Distinguish:
  NGO (NGO Board)
  CBO (Community-Based Org — registered at county level, cheaper)
  Trust (Trust deed — registered at Lands office)
  Society (Societies Act — KES 500)
```

---

### 6H. 📍 Data & Reference

> Static content that indexes forever. Minimal maintenance. Good for long-tail SEO.

---

#### T69 — Kenya Postal Codes Directory
**URL:** `/tools/kenya-postal-codes/`
**Update:** 🟢 Static (Posta Kenya rarely opens new post offices)
**Keywords:** "Kenya postal codes", "Nairobi postal code", "P.O. Box postal code Kenya"
**Data Source:** Posta Kenya (posta.co.ke) — publishes full directory
**Status:** ✅ **KEEP** — No good searchable directory found. Posta Kenya PDF is not user-friendly.

**Search:** By town name or code → returns: code, town name, county, nearest major post office.

---

#### T70 — Kenya Languages & Dialects Map
**URL:** `/tools/kenya-languages/`
**Update:** 🟢 Static (ethnic/linguistic geography is extremely stable)
**Keywords:** "languages spoken in Kenya", "Kenya ethnic groups", "Kenyan tribes and languages"
**Data Source:** KNBS 2019 Census language data + ethnologue.com (open data)
**Status:** ✅ **KEEP** — No interactive Kenya languages map found.

**Build:** Interactive map (Leaflet.js) showing which language/dialect is predominant per county/subcounty. Supplemented by: speaker population, language family (Bantu/Nilotic/Cushitic), official status.

---

#### T71 — Kenya Rainfall & Climate Reference by County
**URL:** `/tools/kenya-rainfall-patterns/`
**Update:** 🟢 Static (historical climate averages change only over decades)
**Keywords:** "Kenya rainfall by county", "when does it rain in Kenya", "Kenya climate zones"
**Data Source:** Kenya Meteorological Department (meteo.go.ke) — publishes historical rainfall normals (1981-2010 climate normals — free)
**Status:** ✅ **KEEP** — No county-level interactive climate tool found. KMD has climate normals data.

**For each county:** Long rains (March–May), Short rains (Oct–Dec), dry season, average annual rainfall (mm), climate zone (Highland/Savanna/Arid/Semi-arid/Coastal).

**Calendar view:** Month-by-month rainfall probability for each region. Useful for farmers, tourists, events.

---

#### T72 — Kenya Heritage Sites & Museums Directory
**URL:** `/tools/kenya-heritage-sites/`
**Update:** 🟢 Static (new UNESCO listings are rare; NMK sites are permanent)
**Keywords:** "Kenya national museums", "UNESCO heritage sites Kenya", "Kenya cultural heritage"
**Data Source:** National Museums of Kenya (museums.or.ke) + UNESCO World Heritage list
**Status:** ✅ **KEEP** — `museums.or.ke` has info but not as a comprehensive directory.

```
UNESCO World Heritage Sites in Kenya:
  - Mount Kenya National Park/Natural Forest (1997)
  - Lake Turkana National Parks (1997)
  - Lamu Old Town (2001)
  - Kenya Lake System in the Great Rift Valley (2011)
  - Mijikenda Kaya Forests (2008)

NMK Museums by county + opening hours + entry fees
```

---

#### T73 — Kenya CBK Live Exchange Rates
**URL:** `/tools/forex-rates/`
**Update:** 🔴 Live (CBK publishes daily at ~1PM)
**Keywords:** "dollar to Kenya shilling today", "CBK exchange rates", "Kenya forex rates"
**Data Source:** Central Bank of Kenya (centralbank.go.ke) — daily rates feed
**Status:** ✅ **KEEP** — CBK site has rates but no clean historical chart tool.

---

#### T74 — Kenya Professional Bodies Directory
**URL:** `/tools/professional-bodies-kenya/`
**Update:** 🟢 Static (new professional bodies are rare; existing ones don't move)
**Keywords:** "Kenya professional bodies", "how to verify professional Kenya", "professional registration Kenya"
**Data Source:** Research and compile once from individual body websites
**Status:** ✅ **KEEP — COMPLETELY UNIQUE** — No comprehensive directory of all ~35 bodies found.

**Comprehensive directory of all ~35 professional regulatory bodies:**

| Body | Abbreviation | Profession | Website |
|------|-------------|------------|---------|
| Law Society of Kenya | LSK | Lawyers | lsk.or.ke |
| Kenya Medical Practitioners & Dentists Council | KMPDC | Doctors, dentists | kmpdc.go.ke |
| Engineers Board of Kenya | EBK | Engineers | ebk.or.ke |
| Nursing Council of Kenya | NCK | Nurses | nckenya.go.ke |
| Institute of Certified Public Accountants | ICPAK | Accountants | icpak.com |
| Architectural Association of Kenya | AAK | Architects | aak.or.ke |
| Kenya Institute of Planners | KIP | Planners | kip.or.ke |
| Pharmacy & Poisons Board | PPB | Pharmacists | ppb.go.ke |
| Clinical Officers Council | COC | Clinical Officers | coc.go.ke |
| Veterinary Board of Kenya | VBK | Vets | vlb.go.ke |
| Kenya Accountants & Secretaries National Examination Board | KASNEB | Accountants/Secretaries | kasneb.or.ke |
| ... (compile all 35+) | | | |

Make searchable: enter profession → get the regulatory body, verification link, registration requirements.

---

#### T75 — Kenya Economic Data Calendar
**URL:** `/tools/economic-calendar/`
**Update:** 🔵 Annual (data release schedules published by agencies at year start)
**Keywords:** "Kenya GDP release date", "KNBS data release calendar", "Kenya CPI announcement"
**Data Source:** KNBS, CBK, and National Treasury release calendars (all publish annually)
**Status:** ✅ **KEEP** — No Kenya-specific economic calendar found.

```
Monthly:
  KNBS CPI announcement: ~20th of following month
  CBK MPC decision: bi-monthly
  KPLC/EPRA fuel prices: 14th

Quarterly:
  KNBS GDP estimate: 6 weeks after quarter end
  CBK Monetary Policy Report
  Kenya Balance of Trade

Annual:
  KNBS Census Economic Survey
  Budget Statement: ~June
  Controller of Budget reports: various months
```

---

#### T76 — Kenya Time Zone & International Calling Guide
**URL:** `/tools/kenya-time-zone/`
**Update:** 🟢 Static (Kenya is permanently at UTC+3, no DST)
**Keywords:** "Kenya time zone", "EAT time zone", "calling Kenya from UK time"
**Status:** ❌ **REMOVED** — Too generic. Generic time zone info available everywhere. Not Kenya-specific enough to justify a dedicated tool.

---

#### T77 — Kenyan Food Nutrition Guide
**URL:** `/tools/kenyan-food-nutrition/`
**Update:** 🟢 Static (nutritional data for traditional foods is very stable)
**Keywords:** "ugali calories", "Kenya food nutrition facts", "nyama choma nutritional value"
**Data Source:** FAO/WHO food composition tables for Sub-Saharan African foods (free) + Kenya-specific data from KARI/Kenya Medical Research Institute (KEMRI)
**Status:** ✅ **KEEP — COMPLETELY UNIQUE** — No traditional Kenyan food nutrition database exists.

**Build a nutrition lookup for 80–100 common Kenyan foods:**
Ugali, sukuma wiki, nyama choma, githeri, irio, mukimo, pilau, mandazi, chapati, mutura, matoke, omena, tilapia, uji, chai, samosa, roasted maize, groundnuts...

For each: calories per 100g, protein, carbs, fat, fibre, key micronutrients. Completely unique in Kenya.

---

#### T78 — Kenya Salary Benchmark Tool
**URL:** `/tools/salary-benchmark/`
**Update:** 🔵 Annual (compile from KNBS Labour Force Survey + KIPPRA reports)
**Keywords:** "average salary Kenya by profession", "Kenya salary guide 2025", "how much do engineers earn Kenya"
**Data Source:** KNBS Labour Force Reports + Kenya Salary Survey (KPMG Kenya publishes annually, partially public)
**Status:** ✅ **KEEP** — Data is sparse but no dedicated tool exists. Mark as "estimates based on available data."

---

### 6I. 🌾 Agriculture & Environment

> Kenya has 8M+ smallholder farmers. Agricultural tools have massive reach in rural Kenya (via mobile). Low competition online.

---

#### T79 — Kenya Crop Planting Calendar
**URL:** `/tools/crop-planting-calendar/`
**Update:** 🟢 Static (seasonal calendar based on long-term rainfall patterns — rarely changes)
**Keywords:** "Kenya crop planting calendar", "when to plant maize Kenya", "Kenya farming seasons"
**Data Source:** Kenya Agricultural and Livestock Research Organization (KALRO) + Ministry of Agriculture seasonal planting guides
**Status:** ✅ **KEEP** — KALRO has guides but not interactive. No county-specific planting calendar found.

```
Long Rains Season (March–May):
  Maize: Plant March/April
  Beans: Plant March/April (with maize — intercropping)
  Potatoes (highlands): Plant Feb/March
  Tomatoes: Plant March (under irrigation from Jan)

Short Rains Season (Oct–Dec):
  Maize: Plant Oct (Nyanza, Coast, Eastern)
  Beans: Oct/Nov (second season)
  Sorghum: Oct (ASALs)

By county/region:
  Different planting windows for Highlands, Rift Valley, Coast, Eastern, Nyanza, Western
```

---

#### T80 — Kenya Soil Types Map & Farming Guide
**URL:** `/tools/kenya-soil-types/`
**Update:** 🟢 Static (soil geography doesn't change)
**Keywords:** "Kenya soil types map", "best soil for farming Kenya county", "Kenya soil suitability"
**Data Source:** Kenya Soil Survey (Kenya Soil and Terrain database — available from FAO free) + KARI soil research
**Status:** ✅ **KEEP** — FAO/KARI data exists but not in user-friendly format. No interactive soil map for Kenya found.

**Display:** Leaflet map with soil type layers per county/region. For each soil type: name, texture, best crops, pH range, common deficiencies, improvement tips.

---

#### T81 — Kenya Livestock Market Prices Reference
**URL:** `/tools/livestock-market-prices/`
**Update:** 🟡 Periodic (NAMC/Ministry of Agriculture publishes weekly market reports)
**Keywords:** "cattle price Kenya today", "sheep price Nairobi market", "goat prices Kenya 2025"
**Data Source:** National Agriculture and Livestock Markets Commission (NALMC) + Ministry of Agriculture weekly market reports (free)
**Status:** ✅ **KEEP** — NALMC has weekly reports but not in clean format. Requires manual data entry or PDF parsing.

**Display:** Table of major livestock markets (Naivasha, Muthurwa, Kiserian, Athi River, etc.) with cattle/sheep/goat price ranges per week.

---

#### T82 — Kenya Fertilizer Price & Subsidy Guide
**URL:** `/tools/fertilizer-prices-kenya/`
**Update:** 🔵 Annual (government fertilizer subsidy program changes each season)
**Keywords:** "subsidized fertilizer Kenya 2025", "eCitizen fertilizer order Kenya", "DAP price Kenya"
**Data Source:** National Cereals and Produce Board (NCPB) + Ministry of Agriculture
**Status:** ✅ **KEEP** — NCPB has info but not well-distributed.

```
Subsidized fertilizer program:
  Who qualifies, how to register (SHAMBA system / eCitizen)
  Price per 50kg bag (subsidized vs market price)
  Collection points per county
  Application deadlines
```

---

#### T83 — Kenya Agrovet & Input Shops Directory
**URL:** `/tools/agrovet-finder/`
**Update:** 🔵 Annual
**Keywords:** "agrovet near me Kenya", "vet shops Kenya", "where to buy seeds Kenya"
**Data Source:** PCPB (Pest Control Products Board) licensed agrovets list + KEPHIS registered seed merchants
**Status:** ✅ **KEEP** — PCPB has list but it's a PDF, not searchable. Currently no good online directory exists — farmers rely on word of mouth.

Searchable directory of licensed agrovets by county. Currently no good online directory exists — farmers rely on word of mouth.

---

#### T84 — Kenya Fish Farming Guide & Market Prices
**URL:** `/tools/fish-farming-kenya/`
**Update:** 🔵 Annual
**Keywords:** "fish farming Kenya guide", "tilapia price Kenya", "fish market prices Nairobi"
**Data Source:** Kenya Fisheries Service (fisheries.go.ke) + State Department of Fisheries reports
**Status:** ✅ **KEEP** — Fisheries department has reports but not as an interactive guide.

Static guide: tilapia vs catfish vs trout, pond construction costs, stocking rates, feed requirements, expected yield. Supplement with fish market price table.

---

#### T85 — Kenya National Forest Reserves Directory
**URL:** `/tools/forest-reserves-kenya/`
**Update:** 🟢 Static (gazetted reserves are permanent; degazettement is rare and controversial)
**Keywords:** "Kenya forests list", "Kenya forest reserve map", "forests in Kenya hiking"
**Data Source:** Kenya Forest Service (kenyaforestservice.go.ke) — gazetted forests list (public)
**Status:** ✅ **KEEP** — KFS has gazetted list but not as a searchable directory.

All ~1,200 gazetted forest reserves with: name, county, size (ha), ecosystem type, biodiversity notes, hiking access (yes/no), contact. Useful for hikers, researchers, and ecotourism.

---

## 7. Module: Matatu Routes

**Separate from Tools.** A full standalone module at `/matatu/`.

### Key Features
- Route search: origin + destination → suggested route(s)
- Town selector: Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, Eldoret, Kitale, Machakos
- Route detail page: all stages, fares, operating hours, SACCO name, map
- "Report incorrect info" user flow
- Crowd-source new routes (moderated)

### Data Strategy
1. Start with Nairobi (highest traffic): import from OpenStreetMap Overpass API + manual research for gaps
2. Supplement with NTSA SACCO licensed routes
3. Community corrections (users flag errors)

### URL Structure
```
/matatu/                             ← Town selector
/matatu/nairobi/                     ← All Nairobi routes A–Z
/matatu/nairobi/route-23/            ← Route 23 detail page
/matatu/nairobi/cbd-to-kangemi/      ← Searchable slug
/matatu/mombasa/                     ← Mombasa routes
```

### SEO for Matatu Pages
Target long-tail: "matatu from CBD to Karen", "matatu 23 nairobi stages", "which matatu goes to Eastleigh"

---

## 8. Module: County Services

**All 47 counties** at `/county/[slug]/` with service sub-pages at `/county/[slug]/[service]/`.

Each county page includes:
- Governor, HQ, website, phone
- Key contacts (County Secretary, CFO, health director, etc.)
- Service categories with requirements and links
- Key county statistics (from KNBS census)
- County budget highlight (from COB data)
- Useful forms + eCitizen links

---

## 9. Module: Blog

**Separate from Tools.** At `/blog/`. Editorial content that earns long-tail traffic and supports AdSense.

### Category Focus

| Category | Content Examples |
|----------|-----------------|
| Guides & How-Tos | "How to apply for NHIF online", "Step-by-step SGR booking guide" |
| Reviews | "Reviewing the 10 best M-Pesa agents in Westlands", "Kenya Power app review" |
| Explainers | "What CBC means for your child", "Understanding your KRA PIN" |
| Lists | "50 things you can pay via Paybill", "All Nairobi county taxes you must know" |
| Comparisons | "Bolt vs Uber Kenya 2025", "Safaricom vs Airtel data bundles" |

### Blog Content = Tool Support
Every tool page links to a related blog post. Example: PAYE Calculator → blog post "Understanding Your Payslip in Kenya (2025)".

---

## 10. Data Sources Master Table

| # | Tool(s) | Source | URL | Format | Update | Cost | Status |
|---|---------|--------|-----|--------|--------|------|--------|
| 1 | PAYE, NSSF, Housing Levy | KRA | kra.go.ke | Web page | Annual | Free | ⚠️ Competition exists |
| 2 | NHIF bands | NHIF / SHA | nhif.or.ke | Web page | Annual | Free | ✅ Verified |
| 3 | M-Pesa tariff | Safaricom | safaricom.co.ke | Web page | Infrequent | Free | ⚠️ Competition exists |
| 4 | Fuel prices | EPRA | epra.go.ke | PDF gazette | Monthly | Free | ✅ Verified |
| 5 | LPG prices | EPRA | epra.go.ke | PDF gazette | Monthly | Free | ✅ Verified |
| 6 | Exchange rates | CBK | centralbank.go.ke | HTML table | Daily | Free | ✅ Verified |
| 7 | KPLC tariff | EPRA | epra.go.ke | PDF/web | Annual | Free | ✅ Verified |
| 8 | KPLC outages | Kenya Power | kplc.co.ke/category/view/50 | HTML scrape | 3×/day | Free | ✅ Verified — critical gap |
| 9 | Water tariffs | NCWSC, others | ncwsc.co.ke | Web page | Periodic | Free | ✅ Verified (Nairobi) |
| 10 | HELB rates | HELB | helb.co.ke | Web page | Annual | Free | ⚠️ Competition exists |
| 11 | Stamp duty | Legislation | kenyalaw.org | Act (static) | Rarely | Free | ✅ Verified |
| 12 | Import duty | KRA / EAC | kra.go.ke | PDF tariff book | Annual | Free | ⚠️ Competition exists |
| 13 | IHF vehicle insurance min | IRA | ira.go.ke | PDF circular | Annual | Free | ⚠️ Competition exists |
| 14 | NHIF hospitals | NHIF | nhif.or.ke | PDF download | Quarterly | Free | ✅ Verified |
| 15 | PPB pharmacies | PPB | ppb.go.ke | PDF list | Annual | Free | ✅ Verified |
| 16 | CBC curriculum | KICD | kicd.ac.ke | PDF documents | Every 3–5 yrs | Free | ✅ Verified |
| 17 | KUCCPS clusters | KUCCPS | kuccps.net | PDF booklet | Annual | Free | ✅ Verified — highest value |
| 18 | School term dates | MoE | education.go.ke | Press release | Annual | Free | ✅ Verified |
| 19 | KCSE rankings | KNEC | knec.ac.ke | Press release | Annual | Free | ✅ Verified |
| 20 | TSC registration | TSC | tsc.go.ke | Web page | Rarely | Free | ✅ Verified |
| 21 | Matatu SACCOs | NTSA | ntsa.go.ke | PDF list | Annual | Free | ✅ Verified |
| 22 | Driving license | NTSA | ntsa.go.ke | Web page | Rarely | Free | ✅ Verified |
| 23 | KWS parks & fees | KWS | kws.go.ke | Web page | Annual | Free | ✅ Verified |
| 24 | IEBC wards | IEBC | iebc.or.ke | Dataset | Every 5 yrs | Free | ✅ Verified |
| 25 | Police stations | NPS | nps.go.ke | Web directory | Rarely | Free | ✅ Verified |
| 26 | PPRA tenders | PPRA | ppra.go.ke | Web scrape | Daily | Free | ✅ Verified |
| 27 | Minimum wage | Ministry of Labour | labourbulletin.go.ke | Gazette order | Annual | Free | ✅ Verified |
| 28 | CPI inflation data | KNBS | knbs.or.ke | Excel/PDF | Monthly | Free | ❌ Removed (competition) |
| 29 | LSK fee schedule | LSK | lsk.or.ke | PDF | Rarely | Free | ✅ Verified |
| 30 | NTSA fees | NTSA | ntsa.go.ke | Web page | Rarely | Free | ✅ Verified |
| 31 | COB county budgets | Controller of Budget | cob.go.ke | PDF reports | Annual | Free | ✅ Verified |
| 32 | IEBC election results | IEBC | iebc.or.ke | Gazette | Per election | Free | ✅ Verified |
| 33 | KIPI IP fees | KIPI | kipi.go.ke | Fee schedule | Rarely | Free | ✅ Verified |
| 34 | eCitizen biz fees | Registrar of Companies | ecitizen.go.ke | Web page | Rarely | Free | ❌ Removed (competition) |
| 35 | SASRA SACCO list | SASRA | sasra.go.ke | PDF annual list | Annual | Free | ❌ Removed (competition) |
| 36 | NSE companies | NSE | nse.co.ke | Web directory | Periodic | Free | ✅ Verified |
| 37 | EARB agents | EARB | earb.go.ke | PDF register | Annual | Free | ✅ Verified |
| 38 | Postal codes | Posta Kenya | posta.co.ke | PDF/spreadsheet | Rarely | Free | ✅ Verified |
| 39 | Mobile prefixes | CA | ca.go.ke | Number plan PDF | Rarely | Free | ✅ Verified |
| 40 | Heritage sites | NMK / UNESCO | museums.or.ke | Web directory | Rarely | Free | ✅ Verified |
| 41 | Rainfall normals | KMD | meteo.go.ke | PDF climate data | Every 10 yrs | Free | ✅ Verified |
| 42 | Census demographics | KNBS | knbs.or.ke | Excel downloads | Every 10 yrs | Free | ✅ Verified |
| 43 | Crop calendar | KALRO | kalro.org | PDF guides | Annual | Free | ✅ Verified |
| 44 | Soil types | FAO/KARI | fao.org | Free GIS data | Very rarely | Free | ✅ Verified |
| 45 | Forest reserves | KFS | kenyaforestservice.go.ke | Web directory | Rarely | Free | ✅ Verified |
| 46 | Fisheries data | KFS | fisheries.go.ke | PDF reports | Annual | Free | ✅ Verified |
| 47 | Livestock prices | NALMC / MoA | agriculture.go.ke | Weekly bulletin | Weekly | Free | ✅ Verified |
| 48 | Fertilizer subsidies | NCPB | ncpb.go.ke | Web page | Per season | Free | ✅ Verified |
| 49 | Agrovets (PCPB) | PCPB | pcpb.or.ke | PDF list | Annual | Free | ✅ Verified |
| 50 | NEMA EIA guide | NEMA | nema.go.ke | Legislation | Rarely | Free | ✅ Verified |
| 51 | Vaccination schedule | MOH | health.go.ke | PDF/web | Annual | Free | ✅ Verified |
| 52 | Public holidays | Kenya Gazette | kenyagazette.go.ke | Gazette notice | Annual | Free | ✅ Verified |
| 53 | Kenya Acts | Kenya Law | kenyalaw.org | Web (legal database) | Per amendment | Free | ✅ Verified |
| 54 | Traffic fines | Traffic Act / NTSA | kenyalaw.org | Act (static) | Rarely | Free | ✅ Verified |
| 55 | Passport/ID fees | Immigration | immigration.go.ke | Web page | Rarely | Free | ✅ Verified |
| 56 | NGO registration | NGO Board | ngobureau.go.ke | Web page | Rarely | Free | ✅ Verified |
| 57 | Food nutrition | FAO / KEMRI | fao.org | Open dataset | Rarely | Free | ✅ Verified |
| 58 | Professional bodies | Individual bodies | various | Research once | Rarely | Free | ✅ Verified |
| 59 | Hospital levels | MOH | health.go.ke | MOH guidelines | Rarely | Free | ✅ Verified |
| 60 | ETA/visa | Immigration | immigration.go.ke | Web page | Periodic | Free | ✅ Verified |
| 61 | ISP speeds | CA QoS reports | ca.go.ke | PDF report | Biannual | Free | ✅ Verified |
| 62 | Number plate codes | NTSA/Traffic Act | ntsa.go.ke | Legislation | Rarely | Free | ✅ Verified |
| 63 | Blood bank | KNBTS | knbts.or.ke | Web directory | Rarely | Free | ✅ Verified |
| 64 | Distance matrix | KRB road data | krb.go.ke | Research once | Rarely | Free | ❌ Removed (competition) |
| 65 | Long distance buses | Bus company sites | various | Annual scrape | Annual | Free | ✅ Verified |
| 66 | Languages | KNBS census | knbs.or.ke | Census dataset | Every 10 yrs | Free | ✅ Verified |
| 67 | Economic calendar | KNBS/CBK | various | Annual release | Annual | Free | ✅ Verified |
| 68 | Solar irradiance | NASA POWER | power.larc.nasa.gov | Free REST API | Never (historical) | Free | ✅ Verified |
| 69 | Medical procedure costs | MOH gazette | kenyalaw.org | Gazette notice | Annual | Free | ✅ Verified |
| 70 | Trademark/IP fees | KIPI | kipi.go.ke | Web page | Rarely | Free | ✅ Verified |

---

## 11. Scraper Architecture

### Cron Job Schedule (GitHub Actions)

```yaml
# .github/workflows/crons.yml
on:
  schedule:
    - cron: '0 3,9,15 * * *'       # KPLC outages — 3 times daily (6AM/12PM/6PM EAT = UTC+3)
    - cron: '0 10 * * *'            # CBK forex — daily at 1PM EAT
    - cron: '0 4 * * *'             # PPRA tenders — daily at 7AM EAT
    - cron: '0 3 14 * *'            # EPRA fuel prices — 14th of month at 6AM EAT
    - cron: '0 3 15 * *'            # EPRA LPG prices — 15th of month
    - cron: '0 3 20 * *'            # KNBS CPI — approx 20th each month
    - cron: '0 3 1 1,7 *'           # Tax bands — Jan and July (before/after budget)
```

### KPLC Outage Scraper (Most Critical)

```typescript
// scripts/scrape-kplc-outages.ts
import * as cheerio from 'cheerio';
import { Client, Databases, ID } from 'node-appwrite';

const KPLC_URL = 'https://www.kplc.co.ke/category/view/50/planned-outages';

interface KPLCOutage {
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  region: string;
  areasAffected: string[];
  rawText: string;
  sourceUrl: string;
}

async function scrapeKPLCOutages(): Promise<KPLCOutage[]> {
  const response = await fetch(KPLC_URL, {
    headers: { 'User-Agent': 'KenyaHub Data Bot (kenyahub.co.ke)' }
  });
  const html = await response.text();
  const $ = cheerio.load(html);
  const outages: KPLCOutage[] = [];

  // KPLC lists each notice as an article/post link
  // Click through to each notice for full area details
  const noticeLinks: string[] = [];
  $('a[href*="/content/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href && href.includes('Interruption')) noticeLinks.push(href);
  });

  for (const link of noticeLinks.slice(0, 20)) { // Top 20 most recent
    const detail = await fetch(`https://www.kplc.co.ke${link}`);
    const detailHtml = await detail.text();
    const $d = cheerio.load(detailHtml);

    const rawText = $d('.content-area, .article-body, .entry-content').text();

    // Parse date: "Thursday, 20th June 2025"
    const dateMatch = rawText.match(/(\w+,\s+\d+(?:st|nd|rd|th)?\s+\w+\s+\d{4})/);

    // Parse times: "9.00 A.M. – 5.00 P.M."
    const timeMatch = rawText.match(/(\d+\.\d+\s*[AP]\.M\.)\s*[–-]\s*(\d+\.\d+\s*[AP]\.M\.)/);

    // Parse affected areas: usually after "Areas:" or a colon
    const areasMatch = rawText.match(/[Aa]reas?:?\s*([^.]+\.)/);
    const areasText = areasMatch ? areasMatch[1] : '';
    const areas = areasText.split(/,|;/).map(a => a.trim()).filter(Boolean);

    // Infer region from title or areas
    const title = $d('h1, h2').first().text().trim();
    const region = inferRegion(title, rawText);

    if (dateMatch) {
      outages.push({
        title,
        date: parseKPLCDate(dateMatch[1]),
        startTime: timeMatch?.[1] ?? '',
        endTime: timeMatch?.[2] ?? '',
        region,
        areasAffected: areas,
        rawText: rawText.substring(0, 2000),
        sourceUrl: `https://www.kplc.co.ke${link}`,
      });
    }
    await sleep(500); // Be polite to KPLC servers
  }
  return outages;
}

function inferRegion(title: string, text: string): string {
  const regions = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Nyeri', 'Meru'];
  for (const r of regions) {
    if (title.includes(r) || text.includes(r + ' Region')) return r;
  }
  return 'Kenya';
}

async function upsertOutages(outages: KPLCOutage[]) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);

  const databases = new Databases(client);

  for (const o of outages) {
    // Note: Use Appwrite's query to check for existence and then create/update
    await databases.createDocument('DATABASE_ID', 'power_outages', ID.unique(), {
      title: o.title,
      outage_date: o.date.toISOString().split('T')[0],
      start_time: o.startTime,
      end_time: o.endTime,
      region: o.region,
      areas_affected: o.areasAffected,
      raw_text: o.rawText,
      source_url: o.sourceUrl,
      is_active: o.date >= new Date(),
    });
  }
}
```

### EPRA Fuel Prices Scraper

```typescript
// scripts/scrape-epra-fuel.ts
import pdfParse from 'pdf-parse';

// EPRA posts PDF gazette notices monthly at epra.go.ke
// URL pattern: https://www.epra.go.ke/fuel-prices/
// Each PDF contains a table: Region | Petrol | Diesel | Kerosene

async function scrapeFuelPrices() {
  // Step 1: Find latest PDF URL on EPRA page
  const indexPage = await fetch('https://www.epra.go.ke/fuel-prices/');
  const html = await indexPage.text();
  const $ = cheerio.load(html);

  let latestPdfUrl = '';
  $('a[href$=".pdf"]').each((_, el) => {
    const href = $(el).attr('href') ?? '';
    if (href.toLowerCase().includes('fuel') || href.toLowerCase().includes('petroleum')) {
      latestPdfUrl = href;
      return false; // Take first (most recent)
    }
  });

  // Step 2: Download and parse PDF
  const pdfBuffer = await fetch(latestPdfUrl).then(r => r.buffer());
  const { text } = await pdfParse(pdfBuffer);

  // Step 3: Parse text to extract county-level prices
  // EPRA format: "Nairobi    XXX.XX    YYY.YY    ZZZ.ZZ"
  const rows = text.split('
').filter(line =>
    /\d+\.\d+/.test(line) && /[A-Z][a-z]/.test(line)
  );

  const prices = rows.map(row => {
    const parts = row.trim().split(/\s{2,}/);
    return {
      county: parts[0],
      petrol: parseFloat(parts[1]),
      diesel: parseFloat(parts[2]),
      kerosene: parseFloat(parts[3]),
      effective_date: new Date(),
      source_url: latestPdfUrl,
    };
  }).filter(p => !isNaN(p.petrol));

  // Step 4: Insert to Appwrite
  // Assuming databases initialized as in kplc scraper
  for (const p of prices) {
    await databases.createDocument('DATABASE_ID', 'fuel_prices', ID.unique(), p);
  }
}
```

---

## 12. Database Schema

```sql
-- POWER OUTAGES (KPLC)
CREATE TABLE power_outages (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title          TEXT NOT NULL,
  outage_date    DATE NOT NULL,
  start_time     TEXT,
  end_time       TEXT,
  region         TEXT,
  areas_affected TEXT[],           -- Array of area names
  raw_text       TEXT,
  source_url     TEXT,
  is_active      BOOLEAN DEFAULT TRUE,
  scraped_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(title, outage_date)
);

-- Index for fast area search
CREATE INDEX idx_outages_areas ON power_outages USING GIN(areas_affected);
CREATE INDEX idx_outages_date ON power_outages(outage_date);

-- FUEL PRICES (EPRA)
CREATE TABLE fuel_prices (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  county         TEXT NOT NULL,
  petrol         DECIMAL(8,2),
  diesel         DECIMAL(8,2),
  kerosene       DECIMAL(8,2),
  effective_date DATE NOT NULL,
  source_url     TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- FOREX RATES (CBK)
CREATE TABLE forex_rates (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  currency   TEXT NOT NULL,
  buy_rate   DECIMAL(12,4),
  sell_rate  DECIMAL(12,4),
  mean_rate  DECIMAL(12,4),
  date       DATE NOT NULL,
  UNIQUE(currency, date)
);

-- TENDERS (PPRA)
CREATE TABLE tenders (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  tender_no     TEXT,
  entity        TEXT,             -- Procuring entity
  county        TEXT,
  category      TEXT,             -- IT, Construction, Supplies, etc.
  deadline      DATE,
  estimated_value TEXT,
  source_url    TEXT,
  is_active     BOOLEAN DEFAULT TRUE,
  scraped_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tender_no, entity)
);

-- MATATU ROUTES
CREATE TABLE matatu_towns (
  id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name  TEXT NOT NULL,
  slug  TEXT UNIQUE NOT NULL
);

CREATE TABLE matatu_routes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_number    TEXT NOT NULL,
  name            TEXT NOT NULL,
  town_id         UUID REFERENCES matatu_towns(id),
  terminus_a      TEXT NOT NULL,
  terminus_b      TEXT NOT NULL,
  fare_min        INTEGER,
  fare_max        INTEGER,
  operating_hours TEXT,
  sacco_name      TEXT,
  verified        BOOLEAN DEFAULT FALSE,
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE route_stages (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id  UUID REFERENCES matatu_routes(id) ON DELETE CASCADE,
  name      TEXT NOT NULL,
  lat       DECIMAL(9,6),
  lng       DECIMAL(9,6),
  note      TEXT,
  order_idx INTEGER NOT NULL
);

-- COUNTY SERVICES
CREATE TABLE counties (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug      TEXT UNIQUE NOT NULL,
  name      TEXT NOT NULL,
  governor  TEXT,
  website   TEXT,
  phone     TEXT,
  email     TEXT,
  hq        TEXT
);

CREATE TABLE county_services (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  county_id       UUID REFERENCES counties(id),
  category        TEXT NOT NULL,
  name            TEXT NOT NULL,
  description     TEXT,
  requirements    JSONB,
  cost            TEXT,
  office_location TEXT,
  online_link     TEXT,
  phone           TEXT
);

-- STATIC REFERENCE TABLES
CREATE TABLE nhif_hospitals (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  county      TEXT NOT NULL,
  subcounty   TEXT,
  level       INTEGER,       -- 2, 3, 4, 5, 6
  type        TEXT,          -- Public, Private, Mission, NGO
  phone       TEXT,
  updated_at  DATE
);

CREATE TABLE postal_codes (
  id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code    TEXT NOT NULL,
  town    TEXT NOT NULL,
  county  TEXT
);

CREATE TABLE police_stations (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  county      TEXT NOT NULL,
  subcounty   TEXT,
  phone       TEXT,
  lat         DECIMAL(9,6),
  lng         DECIMAL(9,6)
);

CREATE TABLE cpi_data (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year        INTEGER NOT NULL,
  month       INTEGER NOT NULL,
  cpi_value   DECIMAL(10,2) NOT NULL,
  UNIQUE(year, month)
);

-- BLOG
CREATE TABLE blog_posts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         TEXT UNIQUE NOT NULL,
  title        TEXT NOT NULL,
  excerpt      TEXT,
  category     TEXT,
  tags         JSONB,
  published    BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  author       TEXT DEFAULT 'KenyaHub Editor',
  image_url    TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 13. AdSense Integration

### Strategy

The site's tool-first, static-data approach is ideal for AdSense because:
- High page count (70+ unique tool/route URLs indexed)
- High dwell time (interactive calculators keep users engaged)
- Relevant audience (Kenyans with financial/consumer intent = premium advertisers)
- No thin content (every page has 300+ words of supporting content)

### Ad Layout Per Page Type

**Calculator / Tool Pages:**
```
Title + description (100–150 words)
[Ad: Responsive Leaderboard — 728×90 or responsive]
Input form + results widget
[Ad: In-content Rectangle — 300×250]
"How this works" section + data source citation
FAQ (5+ questions)
[Ad: Multiplex / Responsive — bottom]
Related tools
```

**Content Pages (Heritage, Legislation, Reference):**
```
H1 + intro paragraph
[Ad: Leaderboard]
Content sections
[Ad: In-article after section 2]
More content
[Ad: In-article after section 4]
Summary / conclusion
[Ad: Multiplex — bottom]
```

**Blog Posts:**
```
Title + author + date + featured image
First 2 paragraphs
[Ad: In-article]
Paragraphs 3–6
[Ad: In-article]
Rest of content
[Ad: Multiplex — bottom of article]
Related posts (internal links)
```

**KPLC Outages Page (High Repeat Traffic):**
```
"Is there an outage today?" quick check
[Ad: Leaderboard — ABOVE FOLD]
Search by area widget
Today's outages (live data)
[Ad: Rectangle — after results]
Upcoming outages list
[Ad: Multiplex — bottom]
```

### AdSense Component

```tsx
// components/ads/AdSenseSlot.tsx
'use client';
import { useEffect, useId } from 'react';

interface Props {
  slot: string;
  format?: 'auto' | 'rectangle' | 'leaderboard' | 'in-article';
  className?: string;
}

export default function AdSenseSlot({ slot, format = 'auto', className }: Props) {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch {}
  }, []);

  return (
    <div className={`my-4 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

---

## 14. Mobile APK (Android)

### Approach: Capacitor + PWA

Capacitor wraps the Next.js PWA into a native Android shell. ~98% code reuse.

### Key Android Additions over Web

```typescript
// Capacitor plugins to install:
@capacitor/push-notifications     // FCM for KPLC outage alerts
@capacitor/local-notifications    // Offline reminders (e.g. tender deadlines)
@capacitor/geolocation            // "Outages near me" feature
@capacitor/share                  // Share tool results via WhatsApp
@capacitor/haptics                // Tactile feedback on calculators
```

### Push Notifications for KPLC

When a new outage is scraped:
1. Scraper upserts to Appwrite
2. Appwrite Function triggers
3. Function queries users subscribed to affected areas
4. Sends FCM notification to their device tokens

```typescript
// appwrite/functions/kplc-notify/src/main.js
// Triggered by Appwrite DB event on documents.create in power_outages

export default async ({ req, res, log, error }) => {
  const record = req.body; // New outage row
  const affectedAreas = record.areas_affected;  // string[]

  // Setup Appwrite client
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);
  const databases = new Databases(client);

  // Query subscribed users
  const subs = await databases.listDocuments('DB_ID', 'area_subscriptions', [
    Query.equal('area', affectedAreas)
  ]);

  // Send FCM notifications
  for (const sub of subs.documents) {
    await sendFCM(sub.user_fcm_token, {
      title: `⚡ KPLC Outage: ${record.region}`,
      body: `Power interruption on ${record.outage_date} from ${record.start_time} to ${record.end_time}. Areas: ${affectedAreas.slice(0, 3).join(', ')}...`,
      data: { outageId: record.$id },
    });
  }

  return res.json({ success: true });
};
```

### APK Build Pipeline (GitHub Actions)

```yaml
# .github/workflows/apk-build.yml
name: Build Android APK
on:
  push:
    tags: ['v*']
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - uses: actions/setup-java@v4
        with: { distribution: 'temurin', java-version: '17' }
      - run: pnpm install
      - run: pnpm --filter web build
      - run: npx cap sync android
        working-directory: apps/web
      - name: Build release APK
        run: ./gradlew bundleRelease
        working-directory: apps/web/android
      - name: Sign bundle
        uses: r0adkll/sign-android-release@v1
        with:
          releaseDirectory: apps/web/android/app/build/outputs/bundle/release
          signingKeyBase64: ${{ secrets.SIGNING_KEY }}
          alias: ${{ secrets.KEY_ALIAS }}
          keyStorePassword: ${{ secrets.KEY_STORE_PASSWORD }}
          keyPassword: ${{ secrets.KEY_PASSWORD }}
      - name: Upload APK artifact
        uses: actions/upload-artifact@v4
        with:
          name: kenyahub-release.aab
          path: apps/web/android/app/build/outputs/bundle/release/
```

---

## 15. SEO Strategy

### On-Page Requirements (Every Tool Page)

1. **Unique `<title>`** — include year: "Kenya PAYE Calculator 2025 | KenyaHub"
2. **Meta description** — 150–160 chars, include primary keyword
3. **H1** — matches primary keyword
4. **300+ words** of supporting text (not just the widget)
5. **Last Updated date** — visible, near the top (trust signal for financial/legal tools)
6. **Data source link** — link to the official government source
7. **FAQ section** — minimum 5 questions in FAQ schema markup
8. **Related tools** — internal links to 3–5 related tools

### Structured Data (Every Tool Page)

```typescript
// Add to tool page <Head>
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": tool.title,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser, Android",
  "description": tool.description,
  "url": `https://kenyahub.co.ke/tools/${tool.slug}/`,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KES" },
  "provider": {
    "@type": "Organization",
    "name": "KenyaHub",
    "url": "https://kenyahub.co.ke"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": tool.faq.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": { "@type": "Answer", "text": q.answer }
  }))
};
```

### Key Keyword Targets by Category

| Category | Primary Keywords |
|----------|-----------------|
| Finance | "Kenya PAYE calculator", "M-Pesa charges", "stamp duty Kenya", "net salary Kenya" |
| Education | "KUCCPS cluster calculator", "CBC curriculum Kenya", "KCSE grade calculator", "school term dates Kenya 2025" |
| Utilities | "KPLC power outage today", "electricity token calculator Kenya", "fuel prices Kenya" |
| Transport | "matatu routes Nairobi", "Kenya number plate decoder", "distance Nairobi Mombasa" |
| Government | "Kenya tenders 2025", "NTSA fines Kenya", "Kenya public holidays" |
| Health | "NHIF hospitals Kenya", "NHIF accredited clinic near me" |
| Agriculture | "crop planting calendar Kenya", "Kenya soil types map" |

---

## 16. Development Phases & Roadmap

### Phase 1 — Foundation + Top Tools (Weeks 1–6) ✅ COMPLETE
Build the highest-traffic static/annual tools first. Target AdSense approval before adding live scrapers.

- [x] Next.js project setup (TypeScript, Tailwind, shadcn/ui)
- [x] Appwrite collections + seed scripts
- [x] Navigation (mega-menu desktop, bottom tab mobile)
- [x] Tools hub page (`/tools/`) with category cards
- [x] **T01** PAYE Calculator
- [x] **T02** M-Pesa Fee Calculator
- [x] **T17** KUCCPS Cluster Calculator ← high-traffic, zero competition
- [x] **T18** KCSE Grade Calculator ← zero competition
- [x] **T15** CBC Curriculum Explorer ← zero competition
- [x] **T16** CBC Grade-Age Checker
- [x] **T35** Public Holidays 2025
- [x] **T43** Number Plate Decoder ← unique, zero competition
- [x] **T44** Mobile Number Prefix Guide ← static, unique
- [x] **T19** School Term Dates
- [x] Privacy Policy + Terms of Service pages
- [x] Submit to Google Search Console + Analytics
- [x] **Apply for AdSense** (need ~20 quality pages)

### Phase 2 — More Tools (Weeks 7–12)
- [ ] **T03** Stamp Duty Calculator
- [ ] **T04** HELB Calculator
- [ ] **T06** Housing Levy Calculator
- [ ] **T10** Vehicle Insurance Calculator
- [ ] **T25** KPLC Token Calculator
- [ ] **T36** NTSA Traffic Fines
- [ ] **T38** Passport & ID Fees Guide
- [ ] **T50** Driving License Guide
- [ ] **T55** Child Growth & Vaccination Schedule
- [ ] **T69** Postal Codes Directory
- [ ] 10 blog posts published

### Phase 3 — County Module + More Tools (Weeks 13–18)
- [ ] County services — all 47 counties (static JSON)
- [ ] **T27** Water Bill Calculator
- [ ] **T29** Solar ROI Calculator
- [ ] **T34** Ward & Constituency Finder
- [ ] **T40** County Budget Tracker
- [ ] **T48** KWS National Parks Directory
- [ ] **T52** NHIF Hospital Finder
- [ ] **T62** Trademark Cost Guide
- [ ] **T65** Real Estate Agent Checker
- [ ] **T66** Customs Restricted Items
- [ ] **T71** Rainfall Patterns by County
- [ ] **T77** Kenyan Food Nutrition Guide

### Phase 4 — Mobile APK (Weeks 19–22)
- [ ] Capacitor setup + Android project
- [ ] PWA manifest + service worker
- [ ] FCM push notification setup
- [ ] KPLC outage notifications
- [ ] Area subscription UI
- [ ] APK build pipeline (GitHub Actions)
- [ ] Direct APK download page on website
- [ ] Google Play Store submission

### Phase 5 — Agriculture + Remaining Tools (Weeks 23–30)
- [ ] **T79** Crop Planting Calendar
- [ ] **T80** Soil Types Map
- [ ] **T81** Livestock Market Prices
- [ ] **T82** Fertilizer Subsidy Guide
- [ ] **T83** Agrovet Finder
- [ ] **T85** Forest Reserves Directory
- [ ] **T74** Professional Bodies Directory ← unique, comprehensive
- [ ] **T70** Languages Map
- [ ] **T67** Economic Calendar
- [ ] **T22** KCSE School Rankings
- [ ] Matatu expansion — Mombasa, Kisumu, Nakuru
- [ ] 50+ blog posts (target 100 before end of year)

---

## 17. Deployment

### Web (Cloudflare Pages)

```bash
# Wrangler CLI is used for deployment
npm run deploy
```

**Cloudflare Pages Settings:**
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Output directory: `out`
- Environment variables: set in Cloudflare dashboard

### DNS (Cloudflare)

Cloudflare automatically manages the DNS for Pages projects within the same account. Just ensure you link the custom domain in the Pages dashboard:

```
Type    Name                   Value
CNAME   kenyahub.me            kenyahub.pages.dev
TXT     kenyahub.me            "google-site-verification=..."
TXT     kenyahub.me            "v=spf1 include:_spf.google.com ~all"
```

Enable Cloudflare proxy (orange cloud) on the CNAME record for full CDN + DDoS protection.

---

## 18. Tool Priority Matrix

| # | Tool | Category | Update | Traffic Potential | Maintenance | Build Priority | Status |
|---|------|----------|--------|-------------------|-------------|----------------|--------|
| T17 | KUCCPS Cluster Calculator | Education | Annual | ⭐⭐⭐⭐⭐ | Low | 🔴 P0 | ✅ Built |
| T18 | KCSE Grade Calculator | Education | Static | ⭐⭐⭐⭐⭐ | None | 🔴 P0 | ✅ Built |
| T01 | PAYE Calculator | Finance | Annual | ⭐⭐⭐⭐⭐ | Low | 🔴 P0 | ✅ Built |
| T15 | CBC Curriculum Explorer | Education | Static | ⭐⭐⭐⭐ | None | 🔴 P0 | ✅ Built |
| T02 | M-Pesa Fee Calculator | Finance | Static | ⭐⭐⭐⭐ | None | 🔴 P0 | ✅ Built |
| T25 | KPLC Token Calculator | Utilities | Annual | ⭐⭐⭐⭐ | None | 🟡 P1 | 🔜 Phase 2 |
| T03 | Stamp Duty Calculator | Finance | Static | ⭐⭐⭐ | None | 🟡 P1 | 🔜 Phase 2 |
| T43 | Number Plate Decoder | Transport | Static | ⭐⭐⭐ | None | 🟡 P1 | ✅ Built |
| T44 | Mobile Prefix Guide | Reference | Static | ⭐⭐⭐ | None | 🟡 P1 | ✅ Built |
| T16 | CBC Grade-Age Checker | Education | Static | ⭐⭐⭐ | None | 🟡 P1 | ✅ Built |
| T04 | HELB Calculator | Finance | Annual | ⭐⭐⭐ | None | 🟡 P1 | 🔜 Phase 2 |
| T19 | School Term Dates | Education | Annual | ⭐⭐⭐ | None | 🟡 P1 | ✅ Built |
| T35 | Public Holidays | Government | Annual | ⭐⭐⭐ | None | 🟡 P1 | ✅ Built |
| T36 | Traffic Fines | Government | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 2 |
| T45 | Long Distance Bus Routes | Transport | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 2 |
| T48 | National Parks | Transport | Annual | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 3 |
| T52 | NHIF Hospital Finder | Health | Periodic | ⭐⭐ | Low | 🟢 P2 | 🔜 Phase 3 |
| T29 | Solar ROI Calculator | Utilities | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 3 |
| T77 | Kenyan Food Nutrition | Reference | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 3 |
| T67 | County Demographics | Reference | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 3 |
| T74 | Professional Bodies | Reference | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 5 |
| T79 | Crop Planting Calendar | Agriculture | Static | ⭐⭐ | None | 🟢 P2 | 🔜 Phase 5 |
| T27 | Water Bill Calculator | Utilities | Periodic | ⭐⭐ | Low | 🟢 P2 | 🔜 Phase 3 |
| T22 | KCSE School Rankings | Education | Annual | ⭐⭐⭐ | Low | 🟢 P2 | 🔜 Phase 5 |
| T70 | Languages Map | Reference | Static | ⭐ | None | 🔵 P3 | 🔜 Phase 5 |
| T80 | Soil Types Map | Agriculture | Static | ⭐ | None | 🔵 P3 | 🔜 Phase 5 |
| T85 | Forest Reserves | Agriculture | Static | ⭐ | None | 🔵 P3 | 🔜 Phase 5 |
| All others | Various | Various | Static | ⭐ | None | 🔵 P3 | Backlog |

**Key insight:** The top 6 P0 tools (KUCCPS, KCSE grader, PAYE, KPLC outages, CBC, M-Pesa) collectively cover the most-searched Kenyan topics online — **education results + electricity + salary + mobile money** — and 4 of them are pure static logic with no scraping needed.

---

## 19. Removed Tools Log

The following tools were removed from the catalogue after competitive analysis and data source verification (June 2026):

| Tool # | Name | Reason for Removal | Replacement/Note |
|--------|------|-------------------|------------------|
| T09 | Land Rates Calculator | Data too fragmented; most counties don't publish digital rate schedules | Replaced with static guide on how to check land rates per county |
| T13 | Inflation Calculator | `yuthufu.com` and `fxtop.com` already exist as Kenya CPI calculators | — |
| T20 | School Finder | NEMIS data not publicly accessible in clean format | — |
| T24 | KPLC Outage Tracker | Requires live scraper (3×/day from kplc.co.ke); cannot maintain without server-side scraping infrastructure | — |
| T26 | Fuel Prices Tracker | Requires monthly EPRA PDF gazette scraper; cannot maintain without automated parsing | — |
| T31 | Tender Watch | Requires daily live scraper from PPRA website; cannot maintain without server-side scraping | — |
| T45 | Long Distance Bus Routes | Data requires scraping 6+ bus company websites; no reliable single data source | — |
| T46 | Distance Between Towns | `distancecalculator.globefeed.com`, `distancefromto.net` exist | — |
| T59 | Business Registration Cost | `biasharaguide.co.ke/tools/registration-calculator/` exists | — |
| T60 | SACCO Directory | `saccolink.com` (357 verified SACCOs) exists | — |
| T61 | VAT Guide | `anrok.com` has Kenya VAT guide; KRA site has info | — |
| T73 | CBK Forex Rates | Requires daily live scraper from centralbank.go.ke; cannot maintain without server-side scraping | — |
| T76 | Time Zone Guide | Too generic; not Kenya-specific enough | — |

**Net reduction:** 13 tools removed from original 85 → **72 tools remaining** (65 active + 7 Matatu/County/Blog modules)

---

*KenyaHub Developer Documentation v2.1 — June 2026*
*This document is the single source of truth for site architecture, tool catalogue, and data sources.*
*Update this doc whenever a new tool is added, a data source changes, or architecture evolves.*
