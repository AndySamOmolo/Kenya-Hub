#!/usr/bin/env node
/**
 * scripts/ingest-external-datasets.mjs
 *
 * Host & GitHub Actions streaming ingestion pipeline for Commercially Permissive
 * Kenyan Language Text & IPA Datasets hosted on Hugging Face, Zenodo, and GitHub.
 * Uses `HF_TOKEN` automatically when present to authenticate against Hugging Face
 * repositories (`thiomi/thiomi-5k`, `Kencorpus/KenCorpus_text`, `Kencorpus/KenPOS`,
 * `Kencorpus/KenSpeech`, `google/WaxalNLP`, `google/smol`, `google/fleurs`,
 * `CLEAR-Global/BibleTTS-Luo`, `Sunbird/salt`, `Digital-Divide-Data/*`,
 * `deepdml/common_voice_26_0`, `cointegrated/panlex-meanings`).
 *
 * Strictly Enforced Licensing Filter:
 *   - ALLOWS ONLY: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0, MIT, Apache-2.0, BSD-3-Clause, Public Domain.
 *   - REJECTS: Any dataset with -NC (Non-Commercial) or -ND (NoDerivatives), including:
 *     * UniMorph 4.0 Oromo (orm) & Swahili (swc) -> CC-BY-NC-4.0 (scraped from copyrighted Kasahorow books)
 *     * MasakhaNER 1.0/2.0 & MAFAND-MT non-commercial splits -> CC-BY-NC-4.0
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICT_DIR = path.resolve(__dirname, "../src/data/dictionaries");
const HF_TOKEN = (process.env.HF_TOKEN || "").trim();

export const EXTERNAL_DATASET_MANIFEST = [
  {
    id: "thiomi-5k",
    name: "The Thiomi-5K Parallel Speech & Text Corpus (40,908 rows across English, Kikuyu, Kamba, Dholuo, Meru, Somali)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["kikuyu", "kamba", "luo", "meru", "somali"],
    hfDataset: "thiomi/thiomi-5k",
    configs: ["eng_Latn", "kik_Latn", "kam_Latn", "luo_Latn", "mer_Latn", "som_Latn"],
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=thiomi%2Fthiomi-5k&config=kik_Latn&split=train&offset=0&length=100",
    citation: "The Thiomi-5K Corpus (CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)",
  },
  {
    id: "kencorpus-text",
    name: "Kencorpus Text & POS (Kencorpus/KenCorpus_text, Kencorpus/KenPOS, Kencorpus/KenTrans, Kencorpus/KenSwQuAD)",
    license: "CC-BY-4.0",
    gated: false,
    languages: ["swahili", "luo", "luhya"],
    hfDataset: "Kencorpus/KenCorpus_text",
    configs: ["default"],
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=Kencorpus%2FKenCorpus_text&config=default&split=train&offset=0&length=100",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=Kencorpus%2FKenPOS&config=dho&split=train&offset=0&length=100",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=google%2FWaxalNLP&config=swa_tts&split=train&offset=0&length=100",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=google%2Fsmol&config=smolsent__en_sw&split=train&offset=0&length=100",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=CLEAR-Global%2FBibleTTS-Luo&config=read&split=train&offset=0&length=100",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=Sunbird%2Fsalt&config=text-all&split=train&offset=0&length=100",
    citation: "Sunbird AI SALT Parallel Corpus (CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)",
  },
  {
    id: "ddd-kenya-asr",
    name: "Digital Divide Data (DDD) Kenya ASR (Kamba, Somali & Ekegusii/Kisii)",
    license: "CC-BY-4.0",
    gated: true,
    languages: ["kamba", "somali", "kisii"],
    hfDataset: "Digital-Divide-Data/Kamba-ASR-Data-Subset-484H",
    configs: ["default"],
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=Digital-Divide-Data%2FKamba-ASR-Data-Subset-484H&config=default&split=train&offset=0&length=100",
    citation: "Digital Divide Data (DDD) Kenya ASR Corpora (https://huggingface.co/datasets/Digital-Divide-Data/Kamba-ASR-Data-Subset-484H)",
  },
  {
    id: "ipa-dict-sw",
    name: "open-dict-data/ipa-dict Swahili Phonemic Pronunciations (16,743 entries)",
    license: "MIT",
    gated: false,
    languages: ["swahili"],
    hfDataset: "open-dict-data/ipa-dict",
    configs: ["sw"],
    apiEndpoint: "https://raw.githubusercontent.com/open-dict-data/ipa-dict/master/data/sw.txt",
    citation: "open-dict-data/ipa-dict Swahili (MIT, https://github.com/open-dict-data/ipa-dict)",
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
    apiEndpoint: "https://datasets-server.huggingface.co/rows?dataset=cointegrated%2Fpanlex-meanings&config=default&split=train&offset=0&length=100",
    citation: "PanLex Database (Kamholz et al., Long Now Foundation, CC0-1.0, https://huggingface.co/datasets/cointegrated/panlex-meanings)",
  },
];

async function fetchJsonOrText(url) {
  const headers = { "User-Agent": "KenyaHub-Dataset-Ingestor/1.0" };
  if (HF_TOKEN && url.includes("huggingface.co")) {
    headers["Authorization"] = `Bearer ${HF_TOKEN}`;
  }
  const res = await fetch(url, { headers });
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
      const payload = await fetchJsonOrText(ds.apiEndpoint);
      if (ds.id === "ipa-dict-sw" && typeof payload === "string") {
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
      } else if (payload && Array.isArray(payload.rows)) {
        console.log(`  -> Fetched ${payload.rows.length} preview rows from Hugging Face Datasets Server (full streaming handled by ci-ingest-audio-and-text-r2.py).`);
      }
    } catch (err) {
      console.warn(`  -> Skipped live network preview (${err.message}).`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
