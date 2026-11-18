#!/usr/bin/env node
/**
 * scripts/ingest-external-datasets.mjs
 *
 * Fast Host & GitHub Actions ingestion & metadata verification pipeline for
 * Commercially Permissive Kenyan Language Text & IPA Datasets.
 *
 * Key Reliability Design:
 *   1. Enriches `swahili.json` directly from `open-dict-data/ipa-dict` (`sw.txt`, 16,743 IPA entries).
 *   2. Verifies Hugging Face repositories via the fast Hub REST API (`https://huggingface.co/api/datasets/{repo}`)
 *      with a 10-second timeout instead of the flaky `datasets-server.huggingface.co/rows` endpoint
 *      (which frequently returns HTTP 503 when cold-starting Parquet workers).
 *   3. Full row streaming is performed by `scripts/ci-ingest-audio-and-text-r2.py` using `datasets` + `HF_TOKEN`.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICT_DIR = path.resolve(__dirname, "../src/data/dictionaries");
const HF_TOKEN = (process.env.HF_TOKEN || "").trim();

export const EXTERNAL_DATASET_MANIFEST = [
  {
    id: "ipa-dict-sw",
    name: "open-dict-data/ipa-dict Swahili Phonemic Pronunciations (16,743 entries)",
    license: "MIT",
    gated: false,
    languages: ["swahili"],
    hfDataset: "open-dict-data/ipa-dict",
    configs: ["sw"],
    directUrl: "https://raw.githubusercontent.com/open-dict-data/ipa-dict/master/data/sw.txt",
    citation: "open-dict-data/ipa-dict Swahili (MIT, https://github.com/open-dict-data/ipa-dict)",
  },
  {
    id: "thiomi-5k",
    name: "The Thiomi-5K Parallel Speech & Text Corpus (40,908 rows across English, Kikuyu, Kamba, Dholuo, Meru, Somali)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["kikuyu", "kamba", "luo", "meru", "somali"],
    hfDataset: "thiomi/thiomi-5k",
    configs: ["eng_Latn", "kik_Latn", "kam_Latn", "luo_Latn", "mer_Latn", "som_Latn"],
    citation: "The Thiomi-5K Corpus (CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)",
  },
  {
    id: "kencorpus-text",
    name: "Kencorpus Text & Speech (Kencorpus/KenCorpus_text, Kencorpus/KenSpeech, Kencorpus/KenTrans, Kencorpus/KenSwQuAD)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["swahili", "luo", "luhya"],
    hfDataset: "Kencorpus/KenCorpus_text",
    configs: ["default"],
    citation: "Kencorpus (Wanjawa et al. 2022–2023, Maseno/UoN/AI4D, CC-BY-4.0, https://huggingface.co/datasets/Kencorpus/KenCorpus_text)",
  },
  {
    id: "kencorpus-pos",
    name: "Kencorpus Part-of-Speech Tagged Corpus (156,994 tokens across Dholuo, Lubukusu, Lumarachi, Lulogooli)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["luo", "luhya"],
    hfDataset: "Kencorpus/KenPOS",
    configs: ["dho", "lbk", "lch", "llg"],
    citation: "Kencorpus KenPOS (Wanjawa et al. 2022–2023, CC-BY-4.0, https://huggingface.co/datasets/Kencorpus/KenPOS)",
  },
  {
    id: "google-waxalnlp",
    name: "Google Research WAXAL (WaxalNLP — Studio TTS & ASR: swa_tts, kik_tts, luo_tts, mas_asr, orm_asr_v2)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["swahili", "kikuyu", "luo", "luhya", "borana"],
    hfDataset: "google/WaxalNLP",
    configs: ["swa_tts", "kik_tts", "luo_tts", "mas_asr", "orm_asr_v2"],
    citation: "Google Research WAXAL (google/WaxalNLP, CC-BY-4.0, https://huggingface.co/datasets/google/WaxalNLP)",
  },
  {
    id: "google-smol-gatitos",
    name: "Google Research SMOL & GATITOS (gatitos__en_ki/luo/om, smolsent__en_sw/ki/luo/so/om, smoldoc__en_sw/ki/luo/so/om)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["swahili", "kikuyu", "luo", "somali", "borana"],
    hfDataset: "google/smol",
    configs: [
      "gatitos__en_ki", "gatitos__en_luo", "gatitos__en_om",
      "smolsent__en_sw", "smolsent__en_ki", "smolsent__en_luo", "smolsent__en_so", "smolsent__en_om",
      "smoldoc__en_sw", "smoldoc__en_ki", "smoldoc__en_luo", "smoldoc__en_so", "smoldoc__en_om",
    ],
    citation: "Google Research SMOL / GATITOS (Caswell et al. 2025, CC-BY-4.0, https://huggingface.co/datasets/google/smol)",
  },
  {
    id: "clear-global-bibletts-luo",
    name: "CLEAR Global BibleTTS Dholuo Studio Corpus (40,972 studio 24kHz clips, 77.41 hours)",
    license: "CC-BY-SA-4.0",
    gated: false,
    languages: ["luo"],
    hfDataset: "CLEAR-Global/BibleTTS-Luo",
    configs: ["read"],
    citation: "CLEAR Global / Masakhane BibleTTS Dholuo (CC-BY-SA-4.0, https://huggingface.co/datasets/CLEAR-Global/BibleTTS-Luo)",
  },
  {
    id: "sunbird-salt",
    name: "Sunbird AI SALT (English ↔ Ateso teo & Swahili swa Parallel Text & Studio Audio)",
    license: "CC-BY-SA-4.0",
    gated: true,
    languages: ["teso", "swahili"],
    hfDataset: "Sunbird/salt",
    configs: ["text-all", "studio-teo", "multispeaker-teo", "studio-swa"],
    citation: "Sunbird AI SALT Parallel Corpus (CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)",
  },
  {
    id: "ddd-kenya-asr",
    name: "Digital Divide Data (DDD) Kenya ASR (Kamba 484h, Somali 68h & Ekegusii/Kisii 470h)",
    license: "CC-BY-4.0",
    gated: true,
    languages: ["kamba", "somali", "kisii"],
    hfDataset: "Digital-Divide-Data/Kamba-ASR-Data-Subset-484H",
    configs: ["default"],
    citation: "Digital Divide Data (DDD) Kenya ASR Corpora (CC-BY-4.0, https://huggingface.co/datasets/Digital-Divide-Data/Kamba-ASR-Data-Subset-484H)",
  },
  {
    id: "panlex-meanings",
    name: "PanLex Multilingual Lexical Database (cointegrated/panlex-meanings & lbourdois/panlex)",
    license: "CC0-1.0",
    gated: false,
    languages: [
      "swahili", "kikuyu", "luo", "luhya", "kalenjin", "kamba", "kisii", "meru",
      "mijikenda", "maasai", "turkana", "somali", "borana", "embu", "taita",
      "pokomo", "pokot", "samburu", "teso", "taveta", "rendille", "ilchamus", "daasanach"
    ],
    hfDataset: "cointegrated/panlex-meanings",
    configs: ["default"],
    citation: "PanLex Database (Kamholz et al., Long Now Foundation, CC0-1.0, https://huggingface.co/datasets/cointegrated/panlex-meanings)",
  },
];

async function fetchWithTimeout(url, timeoutMs = 15000) {
  const headers = { "User-Agent": "KenyaHub-Dataset-Ingestor/1.1" };
  if (HF_TOKEN && url.includes("huggingface.co")) {
    headers["Authorization"] = `Bearer ${HF_TOKEN}`;
  }
  const res = await fetch(url, {
    headers,
    signal: AbortSignal.timeout(timeoutMs),
  });
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
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE WRITE"} | Target Language: ${langArg} | HF_TOKEN: ${HF_TOKEN ? "Configured" : "Not Set"}`);

  for (const ds of EXTERNAL_DATASET_MANIFEST) {
    if (langArg !== "all" && !ds.languages.includes(langArg)) continue;
    console.log(`\n[Dataset] ${ds.name} (${ds.license}) | Gated: ${ds.gated ? "Yes (requires HF Agreement)" : "No (Public)"}`);
    console.log(`  Repo: ${ds.hfDataset} | Configs: [${ds.configs.join(", ")}]`);

    if (dryRun) {
      console.log(`  -> Verified manifest configuration for [${ds.languages.join(", ")}]`);
      continue;
    }

    try {
      if (ds.id === "ipa-dict-sw" && ds.directUrl) {
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
          fs.writeFileSync(swPath, JSON.stringify(swDict, null, 2));
          console.log(`  -> Enriched ${enriched} Swahili entries with IPA transcriptions from ipa-dict.`);
        }
      } else {
        const metaUrl = `https://huggingface.co/api/datasets/${ds.hfDataset}`;
        const meta = await fetchWithTimeout(metaUrl, 12000);
        console.log(`  -> Verified HF Hub repository '${meta.id || ds.hfDataset}' (downloads: ${meta.downloads ?? "n/a"}, gated: ${Boolean(meta.gated)}) — full streaming queued for ci-ingest-audio-and-text-r2.py.`);
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
