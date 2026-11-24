import { OPEN_CORPUS_INDEX } from "@/lib/open-corpus";
import KenyanTranslatorClient from "./KenyanTranslatorClient";

export default function KenyanTranslatorPage() {
  const r2AudioCounts: Record<string, number> = Object.fromEntries(
    Object.entries(OPEN_CORPUS_INDEX.languages).map(([langId, data]) => [
      langId,
      data?.r2AudioClips ?? 0,
    ])
  );

  return <KenyanTranslatorClient r2AudioCounts={r2AudioCounts} />;
}
