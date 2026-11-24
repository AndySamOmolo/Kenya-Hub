import type { Metadata } from "next";
import { notFound } from "next/navigation";
import countiesData from "@/data/counties.json";
import budgetsData from "@/data/county-budgets.json";
import rainfallData from "@/data/rainfall-patterns.json";
import soilsData from "@/data/soil-types.json";
import hospitalsData from "@/data/nhif-hospitals.json";
import postalData from "@/data/postal-codes.json";
import rankingsData from "@/data/kcse-rankings.json";
import parksData from "@/data/national-parks.json";
import forestsData from "@/data/forest-reserves.json";
import agrovetsData from "@/data/agrovets.json";
import languagesData from "@/data/kenya-languages.json";
import cropCalendarData from "@/data/crop-planting-calendar.json";
import fertilizerData from "@/data/fertilizer-subsidy.json";
import livestockData from "@/data/livestock-prices.json";
import CountyDetailClient from "./CountyDetailClient";

const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const BORDERING_COUNTIES: Record<string, string[]> = {
  "mombasa": ["kilifi", "kwale"],
  "kwale": ["mombasa", "kilifi", "taita-taveta"],
  "kilifi": ["mombasa", "kwale", "taita-taveta", "tana-river"],
  "tana-river": ["kilifi", "lamu", "garissa", "isiolo", "kitui", "taita-taveta"],
  "lamu": ["tana-river", "garissa"],
  "taita-taveta": ["kwale", "kilifi", "tana-river", "kitui", "makueni", "kajiado"],
  "garissa": ["wajir", "isiolo", "tana-river", "lamu"],
  "wajir": ["mandera", "marsabit", "isiolo", "garissa"],
  "mandera": ["wajir"],
  "marsabit": ["turkana", "samburu", "isiolo", "wajir"],
  "isiolo": ["marsabit", "wajir", "garissa", "tana-river", "meru", "laikipia", "samburu"],
  "meru": ["isiolo", "tharaka-nithi", "nyeri", "laikipia"],
  "tharaka-nithi": ["meru", "embu", "kitui"],
  "embu": ["tharaka-nithi", "kitui", "machakos", "kirinyaga"],
  "kitui": ["tharaka-nithi", "embu", "machakos", "makueni", "taita-taveta", "tana-river"],
  "machakos": ["embu", "kitui", "makueni", "kajiado", "nairobi", "kiambu", "muranga", "kirinyaga"],
  "makueni": ["machakos", "kitui", "taita-taveta", "kajiado"],
  "nyandarua": ["laikipia", "nyeri", "muranga", "kiambu", "nakuru"],
  "nyeri": ["laikipia", "meru", "kirinyaga", "muranga", "nyandarua"],
  "kirinyaga": ["nyeri", "embu", "machakos", "muranga"],
  "muranga": ["nyeri", "kirinyaga", "machakos", "kiambu", "nyandarua"],
  "kiambu": ["nyandarua", "muranga", "machakos", "nairobi", "kajiado", "nakuru"],
  "turkana": ["west-pokot", "baringo", "samburu", "marsabit"],
  "west-pokot": ["turkana", "baringo", "elgeyo-marakwet", "trans-nzoia"],
  "samburu": ["turkana", "marsabit", "isiolo", "laikipia", "baringo"],
  "trans-nzoia": ["west-pokot", "elgeyo-marakwet", "uasin-gishu", "kakamega", "bungoma"],
  "uasin-gishu": ["trans-nzoia", "elgeyo-marakwet", "baringo", "kericho", "nandi", "kakamega"],
  "elgeyo-marakwet": ["west-pokot", "baringo", "uasin-gishu", "trans-nzoia"],
  "nandi": ["uasin-gishu", "kericho", "kisumu", "vihiga", "kakamega"],
  "baringo": ["turkana", "samburu", "laikipia", "nakuru", "kericho", "uasin-gishu", "elgeyo-marakwet", "west-pokot"],
  "laikipia": ["samburu", "isiolo", "meru", "nyeri", "nyandarua", "nakuru", "baringo"],
  "nakuru": ["baringo", "laikipia", "nyandarua", "kiambu", "kajiado", "narok", "bomet", "kericho"],
  "narok": ["nakuru", "kajiado", "bomet", "nyamira", "kisii", "migori"],
  "kajiado": ["kiambu", "nairobi", "machakos", "makueni", "taita-taveta", "narok", "nakuru"],
  "kericho": ["baringo", "nakuru", "bomet", "nyamira", "homa-bay", "kisumu", "nandi", "uasin-gishu"],
  "bomet": ["kericho", "nakuru", "narok", "nyamira"],
  "kakamega": ["bungoma", "trans-nzoia", "uasin-gishu", "nandi", "vihiga", "siaya", "busia"],
  "vihiga": ["kakamega", "nandi", "kisumu", "siaya"],
  "bungoma": ["trans-nzoia", "kakamega", "busia"],
  "busia": ["bungoma", "kakamega", "siaya"],
  "siaya": ["busia", "kakamega", "vihiga", "kisumu", "homa-bay"],
  "kisumu": ["siaya", "vihiga", "nandi", "kericho", "homa-bay"],
  "homa-bay": ["siaya", "kisumu", "kericho", "nyamira", "kisii", "migori"],
  "migori": ["homa-bay", "kisii", "narok"],
  "kisii": ["homa-bay", "nyamira", "narok", "migori"],
  "nyamira": ["kisii", "homa-bay", "kericho", "bomet", "narok"],
  "nairobi": ["kiambu", "machakos", "kajiado"],
};

function computeAnnualRainfall(rain: any): number {
  if (!rain) return 0;
  if (rain.monthly && typeof rain.monthly === "object") {
    return MONTH_KEYS.reduce((sum, mk) => sum + Number(rain.monthly[mk] || 0), 0);
  }
  if (Array.isArray(rain.monthlyAvg)) {
    return rain.monthlyAvg.reduce((sum: number, v: number) => sum + Number(v || 0), 0);
  }
  return Number(rain.annualRainfall || 0);
}

function normalizeCountyName(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/['’\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function generateStaticParams() {
  return countiesData.counties.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const county = countiesData.counties.find((c) => c.slug === slug);
  if (!county) {
    return {
      title: "County Not Found",
      robots: { index: false, follow: true },
    };
  }
  const codeStr = county.code.toString().padStart(3, "0");
  const canonicalUrl = `https://kenyahub.me/county/${county.slug}/`;
  const title = `${county.name} County (#${codeStr}) — Governor, Constituencies & Budget`;
  const description = `Complete profile for ${county.name} County (#${codeStr}), Kenya. Capital: ${county.capital}. Governor: ${county.governor}. Senator: ${county.senator}. Population: ${county.population.toLocaleString()}, ${county.constituencies.length} constituencies, FY 2025/26 budget, climate, SHA hospitals & postal codes.`;

  return {
    title,
    description,
    keywords: [
      `${county.name} County`,
      `County ${codeStr} Kenya`,
      `Governor of ${county.name} County`,
      `${county.name} County constituencies`,
      `${county.name} County budget FY 2025/26`,
      `${county.capital} postal code`,
      `SHA hospitals in ${county.name} County`,
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-KE": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | KenyaHub`,
      description,
      url: canonicalUrl,
      siteName: "KenyaHub",
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${county.name} County (#${codeStr}) Profile — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CountyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const county = countiesData.counties.find((c) => c.slug === slug);
  if (!county) {
    notFound();
  }

  const normCounty = normalizeCountyName(county.name);

  const budget =
    ((budgetsData as any).budgets || []).find(
      (b: any) =>
        b.code === county.code || normalizeCountyName(b.county) === normCounty
    ) || null;
  const budgetFiscalYear: string = (budgetsData as any).fiscalYear || "2025/26";

  const foundRainfall = ((rainfallData as any).counties || []).find(
    (r: any) =>
      r.code === county.code || normalizeCountyName(r.name) === normCounty
  );
  const rainfall = foundRainfall
    ? { ...foundRainfall, annualRainfall: computeAnnualRainfall(foundRainfall) }
    : null;

  const countySoils = ((soilsData as any).soilTypes || []).filter((s: any) =>
    (s.counties || s.whereFound || []).some((w: string) =>
      normalizeCountyName(w).includes(normCounty)
    )
  );

  const countyHospitals = ((hospitalsData as any).hospitals || []).filter(
    (h: any) => normalizeCountyName(h.county) === normCounty
  );

  const countyPostalCodes = ((postalData as any).codes || []).filter(
    (p: any) => normalizeCountyName(p.county) === normCounty
  );

  const countySchools = ((rankingsData as any).schools || []).filter(
    (s: any) => normalizeCountyName(s.county) === normCounty
  );

  const countyParks = ((parksData as any).parks || []).filter((p: any) =>
    normalizeCountyName(p.county).includes(normCounty)
  );

  const countyForests = ((forestsData as any).forests || []).filter((f: any) =>
    normalizeCountyName(f.county).includes(normCounty)
  );

  const countyAgrovets = ((agrovetsData as any).agrovets || []).filter(
    (a: any) => normalizeCountyName(a.county) === normCounty
  );

  const countyLanguages = ((languagesData as any).languages || []).filter((l: any) =>
    (l.counties || []).some((cn: string) =>
      normalizeCountyName(cn).includes(normCounty)
    )
  );

  const neighborSlugs = BORDERING_COUNTIES[county.slug] || [];
  const neighbors = neighborSlugs
    .map((s) => countiesData.counties.find((c) => c.slug === s))
    .filter((c): c is (typeof countiesData.counties)[number] => Boolean(c));
  const otherCounties =
    neighbors.length > 0
      ? neighbors.slice(0, 6)
      : (() => {
          const idx = countiesData.counties.findIndex((c) => c.code === county.code);
          return [1, 2, 3, 4].map(
            (offset) =>
              countiesData.counties[(idx + offset) % countiesData.counties.length]
          );
        })();

  const agriBenchmarks = {
    cropSource: cropCalendarData.source,
    fertilizerRegSystem: fertilizerData.subsidyProgram.registrationSystem,
    crops: cropCalendarData.crops.slice(0, 5),
    fertilizers: fertilizerData.fertilizers.slice(0, 5),
    livestock: livestockData.livestock,
  };

  return (
    <CountyDetailClient
      county={county}
      budget={budget}
      budgetFiscalYear={budgetFiscalYear}
      rainfall={rainfall}
      countySoils={countySoils}
      countyHospitals={countyHospitals}
      countyPostalCodes={countyPostalCodes}
      countySchools={countySchools}
      countyParks={countyParks}
      countyForests={countyForests}
      countyAgrovets={countyAgrovets}
      countyLanguages={countyLanguages}
      otherCounties={otherCounties}
      agriBenchmarks={agriBenchmarks}
    />
  );
}
