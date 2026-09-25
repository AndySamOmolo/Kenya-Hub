import LanguageClientPage from "@/components/learn/LanguageClientPage";

export function generateStaticParams() {
  return [
    { language: "luo" },
    // { language: "kikuyu" },
    // { language: "swahili" },
  ];
}

export default function LanguagePage({
  params,
}: {
  params: { language: string };
}) {
  return <LanguageClientPage languageId={params.language} />;
}
