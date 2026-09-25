import LanguageClientPage from "@/components/learn/LanguageClientPage";

export function generateStaticParams() {
  return [
    { language: "luo" },
    // { language: "kikuyu" },
    // { language: "swahili" },
  ];
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  return <LanguageClientPage languageId={language} />;
}
