#!/usr/bin/env node
/**
 * scripts/ingest-external-datasets.mjs
 *
 * Fast Host & GitHub Actions ingestion & metadata verification pipeline for
 * Commercially Permissive Kenyan Language Text & IPA Datasets.
 *
 * Key Reliability & License Compliance Design:
 *   1. Hard-blocks all 31 Exclusion Watchlist identifiers before any network request.
 *   2. Enriches `swahili.json` directly from `open-dict-data/ipa-dict` (`sw.txt`, 16,743 IPA entries).
 *   3. Verifies Hugging Face repositories via the fast Hub REST API (`https://huggingface.co/api/datasets/{repo}`).
 *   4. Full row streaming is performed by `scripts/ingest-permissive-text-datasets.py`,
 *      `scripts/ingest-cldf-wikimedia-civic.py`, and `scripts/ci-ingest-audio-and-text-r2.py`.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICT_DIR = path.resolve(__dirname, "../src/data/dictionaries");
const HF_TOKEN = (process.env.HF_TOKEN || "").trim();

export const BLOCKED_NON_COMMERCIAL_REPOS = new Set([
  "neulab/africanvoices",
  "intronhealth/afrispeech-200",
  "intronhealth/afro-tts",
  "facebook/mms-1b-all",
  "mcaa1-msu/twb_luo_ke",
  "clear-global/kenyan-swahili-speech",
  "clear-global/luo-synthetic-asr-dataset",
  "clear-global/twb-voice-1.0",
  "chrisjay/crowd-speech-africa",
  "silencionetwork/swahili-speech",
  "speedykom-group/turkana-speech-dataset",
  "ekitabu/kenyan-sign-language-videos",
  "intron-innovation/afrimed-qa",
  "intronhealth/afrimedqa_v2",
  "masakhane/masakhaner2",
  "masakhane/masakhanews",
  "masakhane/masakhapos",
  "masakhane/afriqa",
  "masakhane/afriqa-gold-passages",
  "masakhane/mafand",
  "masakhane/afridocmt",
  "masakhane/afrifact",
  "masakhane/afrisenti",
  "hausanlp/afrisenti-twitter",
  "afrisenti-semeval/afrisent-semeval-2023",
  "jacaranda/ulizallama3",
  "lelapa/inkuba-instruct",
  "regnant-io/swahili-instruction-22k",
  "blakhasan/sheng-augmented-collection",
  "mbzuai/bactrian-x",
  "csebuetnlp/xlsum",
  "unimorph/orm",
  "lexibank/grollemundbantu",
  "lexibank/tls",
  "prota.prota4u.org",
  "prota4u.org",
  "tropical.theferns.info",
  "clearglobal.org/resources/dholuo-speech-dataset",
  "cmkh2stj6004mmj0751rn8vq6",
  "mozilladatacollective.com/datasets/cmkh2stj6004mmj0751rn8vq6",
  "davidrumsey.com",
  "archive.org/details/dr_",
  "dr_east-africa-philips-regional-wall-map-of-7119000",
  "ke.building.2009",
  "journals.flvc.org/sal",
  "afrikanistik-aegyptologie-online.de",
  "nflrc.hawaii.edu/ldc",
  "openbookpublishers.com/books/10.11647/obp.0405",
  "njas-pre-2023",
  "iris.who.int",
  "who.int/iris",
  "who.int/publications/i/item",
  "knbs-mini-dhs-2025",
  "openknowledge.fao.org",
  "fao.org/documents",
  "inaturalist.org",
  "gbif-inaturalist-unfiltered",
  "opus.nlpl.eu/datasets/qed",
  "opus.nlpl.eu/datasets/ted2020",
  "opus-qed",
  "opus-ted2020",
  "mamakobe/luhya-multilingual-dataset",
  "michsethowusu/swahili-words",
  "lughagen",
  "elar",
  "elarspeech",
  "elararchive.org",
  "pangloss.cnrs.fr",
  "cocoon.huma-num.fr",
  "paradisec.org.au",
  "africamuseum.be/en/research/discover/human_sciences/culture_society/blr",
  "blr3",
  "aporee_31294",
  "aporee_31294_35978",
  "periscopefilm",
]);

export const EXTERNAL_DATASET_MANIFEST = [
  {
    id: "ipa-dict-sw",
    name: "open-dict-data/ipa-dict Swahili Phonemic Pronunciations (16,743 entries)",
    license: "MIT",
    gated: false,
    pipeline: "ingest-external-datasets.mjs",
    languages: ["swahili"],
    hfDataset: "open-dict-data/ipa-dict",
    configs: ["sw"],
    directUrl: "https://raw.githubusercontent.com/open-dict-data/ipa-dict/master/data/sw.txt",
    citation: "open-dict-data/ipa-dict Swahili (MIT, https://github.com/open-dict-data/ipa-dict)",
  },
  {
    id: "panlex-meanings",
    name: "PanLex Multilingual Lexical Database (CC0-1.0, 21+ Kenyan varieties)",
    license: "CC0-1.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: [
      "swahili", "kikuyu", "luo", "luhya", "kalenjin", "kamba", "kisii", "meru",
      "mijikenda", "maasai", "turkana", "somali", "borana", "embu", "taita",
      "pokomo", "pokot", "samburu", "teso", "taveta", "rendille", "ilchamus", "daasanach",
    ],
    hfDataset: "cointegrated/panlex-meanings",
    configs: ["default"],
    citation: "PanLex CC0 Database (CC0-1.0, https://huggingface.co/datasets/cointegrated/panlex-meanings)",
  },
  {
    id: "thiomi-5k",
    name: "The Thiomi-5K Parallel Speech & Text Corpus (61.3h live audio, 40,908 rows)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["kikuyu", "kamba", "luo", "meru", "somali"],
    hfDataset: "thiomi/thiomi-5k",
    configs: ["eng_Latn", "kik_Latn", "kam_Latn", "luo_Latn", "mer_Latn", "som_Latn"],
    citation: "The Thiomi-5K Corpus (CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)",
  },
  {
    id: "anv-data-ke",
    name: "African Next Voices — Kenya (3,005h across Kikuyu, Dholuo, Kalenjin, Maasai/Samburu, Somali)",
    license: "CC-BY-4.0",
    gated: true,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["kikuyu", "luo", "kalenjin", "maasai", "samburu", "somali"],
    hfDataset: "MCAA1-MSU/anv_data_ke",
    configs: ["kikuyu", "luo", "kalenjin", "maasai", "somali"],
    citation: "African Next Voices Kenya (CC-BY-4.0, https://huggingface.co/datasets/MCAA1-MSU/anv_data_ke)",
  },
  {
    id: "kencorpus-text",
    name: "Kencorpus Text, Audio & KenSpeech (KenCorpus_text, KenCorpus_audio 204h, KenSpeech 27.5h)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["swahili", "luo", "luhya"],
    hfDataset: "Kencorpus/KenCorpus_text",
    configs: ["default"],
    citation: "Kencorpus (CC-BY-4.0, https://huggingface.co/datasets/Kencorpus/KenCorpus_text)",
  },
  {
    id: "kencorpus-pos",
    name: "Kencorpus Part-of-Speech Tagged Corpus (156,994 tokens across Dholuo & Luhya)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["luo", "luhya"],
    hfDataset: "Kencorpus/KenPOS",
    configs: ["dho", "lbk", "lch", "llg"],
    citation: "Kencorpus KenPOS (CC-BY-4.0, https://huggingface.co/datasets/Kencorpus/KenPOS)",
  },
  {
    id: "google-waxalnlp",
    name: "Google Research WAXAL v2.0.0 (swa_tts, kik_tts, luo_tts, mas_asr=Masaaba/Luhya, orm_asr_v2)",
    license: "CC-BY-SA-4.0",
    gated: false,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["swahili", "kikuyu", "luo", "luhya", "borana"],
    hfDataset: "google/WaxalNLP",
    configs: ["swa_tts", "kik_tts", "luo_tts", "mas_asr", "orm_asr_v2"],
    citation: "Google Research WAXAL v2.0.0 (CC-BY-SA-4.0, https://huggingface.co/datasets/google/WaxalNLP)",
  },
  {
    id: "google-smol-gatitos",
    name: "Google Research SMOL & GATITOS (gatitos, smolsent, smoldoc)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["swahili", "kikuyu", "luo", "somali", "borana"],
    hfDataset: "google/smol",
    configs: ["gatitos__en_ki", "gatitos__en_luo", "gatitos__en_om", "smolsent__en_sw", "smolsent__en_ki", "smolsent__en_luo", "smolsent__en_so", "smolsent__en_om"],
    citation: "Google Research SMOL / GATITOS (CC-BY-4.0, https://huggingface.co/datasets/google/smol)",
  },
  {
    id: "clear-global-bibletts-luo",
    name: "CLEAR Global BibleTTS Dholuo Studio Corpus (77.41h)",
    license: "CC-BY-SA-4.0",
    gated: false,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["luo"],
    hfDataset: "CLEAR-Global/BibleTTS-Luo",
    configs: ["read"],
    citation: "CLEAR Global BibleTTS Dholuo (CC-BY-SA-4.0, https://huggingface.co/datasets/CLEAR-Global/BibleTTS-Luo)",
  },
  {
    id: "sunbird-salt",
    name: "Sunbird AI SALT (Ateso teo & Swahili swa Parallel Text & Studio Audio)",
    license: "CC-BY-SA-4.0",
    gated: true,
    pipeline: "ci-ingest-audio-and-text-r2.py",
    languages: ["teso", "swahili"],
    hfDataset: "Sunbird/salt",
    configs: ["text-all", "studio-teo", "multispeaker-teo", "studio-swa"],
    citation: "Sunbird AI SALT (CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)",
  },
  {
    id: "ai4agric-mt-eng-swa",
    name: "AI4Agric MT-Eng-Swa Agronomy Parallel Corpus (52,170 pairs + Kik/Kln siblings)",
    license: "CC-BY-4.0",
    gated: true,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["swahili", "kikuyu", "kalenjin"],
    hfDataset: "AI4Agric/MT-Eng-Swa",
    configs: ["default"],
    citation: "AI4Agric MT-Eng-Swa (CC-BY-4.0, https://huggingface.co/datasets/AI4Agric/MT-Eng-Swa)",
  },
  {
    id: "tufaax-en-so-8k",
    name: "en-so Parallel Clean 8k (8,900 Somali-English pairs)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["somali"],
    hfDataset: "tufaax/en-so-parallel-clean-8k",
    configs: ["default"],
    citation: "tufaax en-so Parallel Clean 8k (CC-BY-4.0, https://huggingface.co/datasets/tufaax/en-so-parallel-clean-8k)",
  },
  {
    id: "glotstorybook",
    name: "GlotStoryBook (CC-BY/CC0 filtered; NC/ND/nalibali stripped)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["swahili", "kikuyu", "luo", "kamba", "kalenjin", "kisii", "luhya", "somali"],
    hfDataset: "cis-lmu/GlotStoryBook",
    configs: ["default"],
    citation: "GlotStoryBook (filtered CC-BY, https://huggingface.co/datasets/cis-lmu/GlotStoryBook)",
  },
  {
    id: "sil-ai-bloom-lm",
    name: "SIL-AI Bloom Library (CC-BY/CC-BY-SA/CC0 filtered; NC/ND/nalibali stripped)",
    license: "CC-BY-4.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["swahili", "kikuyu", "luo", "kamba", "kalenjin", "kisii", "luhya"],
    hfDataset: "sil-ai/bloom-lm",
    configs: ["default"],
    citation: "SIL-AI Bloom Library (filtered CC-BY/CC0, https://huggingface.co/datasets/sil-ai/bloom-lm)",
  },
  {
    id: "masakhane-clean-suite",
    name: "Masakhane Clean Commercial 6 (AfriMMLU, AfriMGSM, AfriXNLI, InjongoIntent, Uhura-TruthfulQA, Uhura-ARC-Easy)",
    license: "Apache-2.0 / CC-BY-4.0",
    gated: false,
    pipeline: "ingest-permissive-text-datasets.py",
    languages: ["swahili", "borana"],
    hfDataset: "masakhane/afrixnli",
    configs: ["swa", "orm"],
    citation: "Masakhane Clean Commercial Benchmarks (Apache-2.0 / CC-BY-4.0, https://huggingface.co/datasets/masakhane/afrixnli)",
  },
];

async function fetchWithTimeout(url, timeoutMs = 15000) {
  const headers = { "User-Agent": "KenyaHub-Dataset-Ingestor/2.0" };
  if (HF_TOKEN && url.includes("huggingface.co")) {
    headers["Authorization"] = `Bearer ${HF_TOKEN}`;
  }
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return await res.json();
  return await res.text();
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const langArg = args.find((a) => a.startsWith("--lang="))?.split("=")[1] || "all";

  console.log("=== KenyaHub Commercially Permissive External Dataset Ingestor ===");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE WRITE"} | Target: ${langArg} | Blocked Watchlist: ${BLOCKED_NON_COMMERCIAL_REPOS.size}`);

  for (const ds of EXTERNAL_DATASET_MANIFEST) {
    if (BLOCKED_NON_COMMERCIAL_REPOS.has(ds.hfDataset.toLowerCase())) {
      throw new Error(`BLOCKED non-commercial repo in manifest: ${ds.hfDataset}`);
    }
    if (langArg !== "all" && !ds.languages.includes(langArg)) continue;
    console.log(`\n[Dataset] ${ds.name} (${ds.license}) | Pipeline: ${ds.pipeline}`);
    if (dryRun) {
      console.log(`  -> Verified manifest configuration for [${ds.languages.join(", ")}]`);
      continue;
    }
    try {
      if (ds.id === "ipa-dict-sw" && ds.directUrl) {
        const forceReingest = /^(1|true|yes)$/i.test(process.env.FORCE_REINGEST || "");
        const retryPendingOnly = !/^(0|false|no)$/i.test(process.env.RETRY_PENDING_ONLY || "true");
        const lockPath = path.resolve(__dirname, "../public/.text-ingested-lock.json");
        let textLock = {};
        if (fs.existsSync(lockPath)) {
          try { textLock = JSON.parse(fs.readFileSync(lockPath, "utf8")); } catch {}
        }
        if (!forceReingest && retryPendingOnly && textLock?.external?.["ipa-dict-sw"]?.status === "completed") {
          console.log("  -> [skip-done] ipa-dict-sw already enriched in prior run.");
          continue;
        }
        const payload = await fetchWithTimeout(ds.directUrl, 20000);
        if (typeof payload === "string") {
          const swPath = path.join(DICT_DIR, "swahili.json");
          const swDict = JSON.parse(fs.readFileSync(swPath, "utf8"));
          const ipaMap = new Map();
          for (const line of payload.split(/\r?\n/)) {
            const [word, ipa] = line.split("\t");
            if (word && ipa) ipaMap.set(word.trim().toLowerCase(), ipa.trim().replace(/^\/|\/$/g, ""));
          }
          let enriched = 0;
          for (const cat of swDict.categories) {
            for (const entry of cat.entries) {
              const head = entry.translation.split(/[\/,;()]/)[0].trim().toLowerCase();
              if (!entry.pronunciation && ipaMap.has(head)) {
                entry.pronunciation = ipaMap.get(head);
                enriched++;
              }
            }
          }
          fs.writeFileSync(swPath, JSON.stringify(swDict, null, 2) + "\n");
          textLock.external = textLock.external || {};
          textLock.external["ipa-dict-sw"] = { status: "completed", enriched, updatedAt: new Date().toISOString() };
          fs.writeFileSync(lockPath, JSON.stringify(textLock, null, 2) + "\n");
          console.log(`  -> Enriched ${enriched} Swahili entries with IPA transcriptions from ipa-dict.`);
        }
      } else {
        const metaUrl = `https://huggingface.co/api/datasets/${ds.hfDataset}`;
        const meta = await fetchWithTimeout(metaUrl, 12000);
        console.log(`  -> Verified HF Hub repository '${meta.id || ds.hfDataset}' (gated: ${Boolean(meta.gated)}) — streaming handled by ${ds.pipeline}.`);
      }
    } catch (err) {
      console.warn(`  -> Notice (${err.message}); continuing to Python streaming stage.`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
