# KenyaHub — Free Tools, 23 Kenyan Language Courses & Public Data for Every Kenyan

**KenyaHub** (`https://kenyahub.me` & Android/iOS Mobile App) is a zero-cost, offline-capable digital utility and indigenous language preservation platform built for Kenya.

## Core Platform Pillars

### 1. 23 Kenyan Languages: Interactive Courses, Translator & Oral Wisdom
- **23-Language Bidirectional Translator & Dictionary (`/tools/kenyan-translator/`)**: Search across **204,705+ verified dictionary entries** and **300,000+ corpus phrases** spanning 23 Kenyan languages (Swahili, Kikuyu, Dholuo, Luhya, Kalenjin, Kamba, Kisii, Meru, Maasai, Somali, Turkana, Samburu, Embu, Mijikenda, Pokot, Teso, Borana, Taita, Pokomo, Rendille, Taveta, Ilchamus, and Daasanach) with English-pivot cross-translation (`Any ↔ Any`), 15 semantic categories, and fuzzy Levenshtein suggestions.
- **23 Interactive Language Courses (`/tools/learn/[lang]/`)**: Guided skill trees, 2-stage interactive lessons (Teaching Walkthrough + 15-Exercise Quiz), Spaced Repetition System (SRS) flashcards, **14 interactive vocabulary mini-games**, grammar reference tables, and over 1,000 proverbs, riddles, and tongue twisters.

### 2. 25 Verified Kenyan Calculators & Reference Tools
- **Finance, Tax & Cost of Living (11 Tools)**: 2026 KRA PAYE Salary Calculator (Gross ↔ Net, SHIF 2.75%, NSSF Tier I/II, 1.5% Housing Levy), M-Pesa Fee Calculator (July 2026 tariffs + Kadogo/Pochi), KPLC Token Calculator (EPRA tariff bands), KRA CRSP Car Import Duty Calculator (8-year KEBS rule + cascading taxes), Stamp Duty & Property Transfer Calculator, HELB Loan Calculator, Nairobi Water Bill Calculator, Mjengo Construction Material & BoQ Calculator, SACCO Loan & Chama Dividend Calculator, Boma Yangu Affordable Housing Calculator, and Domestic Worker Minimum Wage Calculator.
- **Civic, Legal & Health (6 Tools)**: SHA / SHIF Benefit Estimator, Small Claims Court Filing Calculator, MRI Rental Tax Calculator, Landlord & Tenant Rights Guide, NTSA Vehicle Transfer Fee Calculator, and Unwanted Airtime Drain / WASPA Guide.
- **Education (3 Tools)**: KCSE Grade Calculator, KUCCPS Cluster Points Calculator, and CBC Curriculum & Grade Age Finder.
- **Transport & Telecom (3 Tools + Matatu Planner)**: Nairobi Matatu Route & Fare Planner (102+ routes with interactive Leaflet/OSM map), NTSA Traffic Fines Guide, Kenya Number Plate Decoder, and Mobile Prefix Finder.

### 3. All 47 Counties Intelligence Hub (`/county/[slug]/`)
- Detailed profiles for all 47 Kenyan counties including Governors, Senators, Constituencies, Wards, FY 2025/26 budgets, SHA hospitals, universities, and postal codes.

## Architecture & Tech Stack
- **Web (`kenyahub/`)**: Next.js 16 (App Router, Static Export `output: "export"`), React 19, TypeScript 5, Tailwind CSS v4, Leaflet, deployed on **Cloudflare Pages**.
- **Mobile (`mobile/`)**: Expo SDK 54, React Native 0.81, Expo Router, Material 3 dynamic theming, AsyncStorage, LRU dictionary loader.
- **CMS & Cloud Services**: Appwrite Cloud (`kenyahub-db` for dynamic blog articles and community language contributions) + Cloudflare R2 zero-egress audio CDN.

## Development & Verification Commands

```bash
# Inside kenyahub/
npm install
npm run dev                  # Start Next.js development server
npm run audit:tools:strict   # Validate all 25 tool routes and 23 modular courses
npm test                     # Run core security, calculator, and gamification verification tests
npm run build                # Build static export to out/

# Inside mobile/
npm install
npm run sync-data            # Sync kenyahub/src/{data,lib} -> mobile/src/shared/{data,lib}
npx expo start               # Start Expo development server
```
