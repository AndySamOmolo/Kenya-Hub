import type { Metadata } from "next";
import countiesData from "@/data/counties.json";
import budgetsData from "@/data/county-budgets.json";

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
      description: "This county could not be found on KenyaHub.",
    };
  }

  const codeStr = String(county.code).padStart(3, "0");
  const budget = ((budgetsData as any).budgets || []).find(
    (b: any) => b.code === county.code
  );
  const budgetStr = budget ? `, KES ${budget.allocation.toLocaleString()}M FY 2025/26 budget` : "";

  const title = `${county.name} County (#${codeStr}) — Governor, Constituencies, Budget & Services`;
  const description = `Complete guide to ${county.name} County (#${codeStr}, HQ: ${county.capital}). Governor ${county.governor}, Senator ${county.senator}, ${county.constituencies.length} constituencies${budgetStr}, rainfall climate, SHA hospitals, and postal codes.`;

  return {
    title,
    description,
    keywords: [
      `${county.name} County`,
      `County ${codeStr} Kenya`,
      `Governor of ${county.name} ${county.governor}`,
      `${county.name} constituencies`,
      `${county.name} county budget`,
      `${county.capital} postal code`,
      `hospitals in ${county.name} County`,
    ],
    openGraph: {
      title: `${title} | KenyaHub`,
      description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: `https://kenyahub.me/county/${county.slug}/`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${county.name} County Guide — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://kenyahub.me/county/${county.slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return countiesData.counties.map((county) => ({
    slug: county.slug,
  }));
}

export default function CountyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
