# KenyaHub

KenyaHub is a Kenya-first web platform and Android application providing practical tools, data, and content tailored to everyday Kenyan needs. From calculating net salary (PAYE) to finding matatu stages, checking school terms, and tracking KPLC outages, KenyaHub consolidates vital public data into fast, SEO-native, and user-friendly web tools.

## 🌟 Key Features

- **Kenya-Specific Tools**: Over 80 curated tools spanning Finance & Tax, Education & CBC, Utilities, Government & Legal, Transport, and more.
- **Static-First & SEO-Native**: Designed for maximum speed, accessibility, and search engine discoverability. Each tool has a dedicated, indexable URL.
- **Always Up-to-Date**: Automated scrapers update dynamic data (like KPLC outages, EPRA fuel prices, CBK exchange rates) while periodic data (tax bands, terms dates) is refreshed annually.
- **Free Open Data**: Built purely on publicly available data, government publications, and legislation.

## 🛠️ Tech Stack

### Web & Frontend
- **Framework**: [Next.js 14+](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & [shadcn/ui](https://ui.shadcn.com/)
- **Search**: Fuse.js (for fast client-side filtering)
- **Maps**: Leaflet.js + OpenStreetMap

### Backend & Infrastructure
- **Database & Auth**: [Appwrite](https://appwrite.io/)
- **Hosting**: Cloudflare Pages
- **Automation**: GitHub Actions (CI/CD + cron jobs for scrapers)

### Mobile App
- **Wrapper**: Capacitor (wraps the Next.js PWA into an Android APK)
- **Push Notifications**: Firebase Cloud Messaging

## 📂 Project Architecture

The codebase is organized as a modern Next.js web application with dedicated static data, markdown-based content, and automated background scrapers.

```text
kenyahub/
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts, and route groups)
│   ├── components/          # Reusable UI components (Navbar, ToolShell, Ads)
│   ├── lib/                 # Appwrite config, Tool Registry, and utilities
│   ├── data/                # Static JSON datasets (PAYE bands, counties, etc.)
│   └── content/             # MDX blog content and static articles
├── scripts/                 # Scrapers & seed scripts (KPLC, EPRA, CBK, etc.)
└── public/                  # Static assets (images, icons)
```

## 🔧 Tool Categories

KenyaHub organizes its vast collection of tools into 9 primary categories:
1. **💰 Finance & Tax** (PAYE calculator, M-Pesa fees, Housing Levy, Stamp Duty)
2. **🎓 Education & CBC** (Curriculum explorer, KUCCPS clusters, Grade checkers)
3. **⚡ Utilities & Energy** (KPLC outages, EPRA fuel prices)
4. **🏛️ Government & Legal** (Traffic fines, NTSA guides, E-Citizen tools)
5. **🚌 Transport & Travel** (Matatu routes, driving schools)
6. **🏥 Health & Wellness** (NHIF/SHA hospitals, BMI)
7. **📊 Business & Investment** (Business registration, tendering)
8. **📍 Data & Reference** (Counties, postal codes, public holidays)
9. **🌾 Agriculture & Environment** (Crop guides, weather, livestock)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and npm installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd kenyahub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site in action. The application auto-updates as you modify files in `src/app`.

### Available Scripts
- `npm run dev`: Starts the local development server.
- `npm run build`: Creates an optimized production build for deployment.
- `npm run lint`: Runs ESLint checks across the codebase.
- `npm run deploy`: Builds and deploys the output using Wrangler.

## 🤝 Contributing

This platform thrives on accurate, up-to-date information. If you notice outdated tool data, broken links, or want to propose a new tool:
1. Check the Central Tools Registry at `src/lib/tools-registry.ts`.
2. Review the data sources in `src/data/` or `scripts/`.
3. Feel free to open an issue or submit a Pull Request!
