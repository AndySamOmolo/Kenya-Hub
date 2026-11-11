"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import prefixesData from "@/data/mobile-prefixes.json";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { Phone, Search, Radio, ShieldAlert, Globe, Copy, Check, Info } from "lucide-react";

const tool = TOOLS.find((t) => t.slug === "mobile-number-prefix")!;

const SAMPLE_NUMBERS = [
  { label: "0722 (Safaricom)", value: "0722 123 456" },
  { label: "0733 (Airtel)", value: "0733 987 654" },
  { label: "0770 (Telkom)", value: "0770 112 233" },
  { label: "0763 (Equitel)", value: "0763 445 566" },
  { label: "0747 (Faiba)", value: "0747 778 899" },
  { label: "0110 (Safaricom 011x)", value: "0110 556 677" },
  { label: "0100 (Airtel 010x)", value: "0100 223 344" },
];

const faqs = [
  {
    question: "How do I tell which network a Kenyan phone number belongs to?",
    answer:
      "Kenyan phone numbers are allocated by prefix under the Communications Authority of Kenya (CA) National Numbering Plan. Standard 10-digit mobile numbers start with 07 or 01. Safaricom uses 070x, 071x, 072x, 074x (except 0747), 079x, and 011x. Airtel uses 073x, 075x (0750–0756), 078x, and 010x. Telkom uses 077x, Equitel uses 0763–0766, and Faiba 4G uses 0747.",
  },
  {
    question: "Can a phone number belong to a different network because of Mobile Number Portability (MNP)?",
    answer:
      "Yes. Under Kenyan telecom regulations, subscribers have the right to port their number to a different network via Mobile Number Portability (MNP) while keeping their original prefix. This tool identifies the original CA allocation. If a number was ported, it operates on the new network.",
  },
  {
    question: "Why did Kenya introduce 011x and 010x prefixes?",
    answer:
      "The Communications Authority introduced the 01 series (011x for Safaricom, 010x for Airtel) to prevent prefix exhaustion after the 07 series neared full allocation due to Kenya's rapid mobile phone and IoT adoption.",
  },
  {
    question: "How do I call a Kenyan number from outside Kenya?",
    answer:
      "When calling from abroad, dial the international exit code (or '+'), followed by Kenya's country code 254, drop the initial 0, and dial the remaining 9 digits. For example, 0722 123 456 becomes +254 722 123 456.",
  },
];

export default function MobileNumberPrefixPage() {
  const [inputNumber, setInputNumber] = useState("0722 123 456");
  const [selectedNetworkTab, setSelectedNetworkTab] = useState("All");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const cleanDigits = useMemo(() => {
    return inputNumber.trim().replace(/[^0-9]/g, "");
  }, [inputNumber]);

  const prefix = useMemo(() => {
    if (!cleanDigits) return "";
    let p = cleanDigits;
    if (p.startsWith("254")) {
      p = "0" + p.substring(3);
    }
    return p.substring(0, 4);
  }, [cleanDigits]);

  const matchedNetwork = useMemo(() => {
    if (prefix.length < 4 || !prefix.startsWith("0")) return null;
    for (const net of prefixesData.networks) {
      if (net.prefixes.includes(prefix)) {
        return { ...net, matchedPrefix: prefix };
      }
    }
    return {
      name: "Unknown / Unallocated Prefix",
      color: "#888888",
      matchedPrefix: prefix,
      prefixes: [],
      ussdCodes: [],
    };
  }, [prefix]);

  const copyToClipboard = (code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const filteredNetworks = useMemo(() => {
    if (selectedNetworkTab === "All") return prefixesData.networks;
    return prefixesData.networks.filter((n) => n.name === selectedNetworkTab);
  }, [selectedNetworkTab]);

  return (
    <ToolShell tool={tool} faqs={faqs}>
      <div className="space-y-6">
        {/* Main Checker Card */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-gold/15 text-gold">
              <Phone className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                Kenyan Mobile Prefix &amp; Network Checker
              </h2>
              <p className="text-xs text-text-muted">
                Official Communications Authority (CA) National Numbering Plan
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Enter any Kenyan mobile number or 4-digit prefix (e.g. <strong className="text-text-primary">0722</strong>, <strong className="text-text-primary">0733</strong>, <strong className="text-text-primary">0770</strong>, <strong className="text-text-primary">0110</strong>, or <strong className="text-text-primary">+254 790...</strong>) to instantly identify the telecommunications provider.
          </p>

          {/* Quick-tap sample numbers */}
          <div className="flex items-center gap-1.5 flex-wrap mb-4">
            <span className="text-[0.6875rem] font-bold text-text-muted uppercase tracking-wider mr-1">
              Quick Test:
            </span>
            {SAMPLE_NUMBERS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setInputNumber(s.value)}
                className="text-xs px-2.5 py-1 rounded-lg border border-border bg-bg-elevated/70 text-text-secondary hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
              placeholder="e.g. 0722 123 456, 0110 556 677, or +254 733 123 456"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-bg-surface text-text-primary text-sm font-mono placeholder:text-text-muted focus:outline-hidden focus:border-gold transition-colors"
            />
          </div>

          {/* Live Result Display */}
          {matchedNetwork ? (
            <div
              className="rounded-xl border p-4 sm:p-5 transition-all mb-4"
              style={{
                borderColor: `${matchedNetwork.color}50`,
                backgroundColor: `${matchedNetwork.color}08`,
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/50">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: matchedNetwork.color }}
                  />
                  <div>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider block">
                      Assigned Network
                    </span>
                    <span
                      className="text-lg sm:text-xl font-extrabold font-[family-name:var(--font-outfit)]"
                      style={{ color: matchedNetwork.color }}
                    >
                      {matchedNetwork.name}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[0.6875rem] font-bold text-text-muted uppercase tracking-wider block">
                    Detected Prefix
                  </span>
                  <span className="inline-block px-2.5 py-0.5 rounded-lg text-sm font-black font-mono bg-bg-elevated border border-border text-text-primary">
                    {matchedNetwork.matchedPrefix}
                  </span>
                </div>
              </div>

              <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                The prefix <strong className="text-text-primary font-mono">{matchedNetwork.matchedPrefix}</strong> is officially allocated to <strong className="text-text-primary">{matchedNetwork.name}</strong> under the Communications Authority of Kenya National Numbering Plan.
              </p>

              {matchedNetwork.ussdCodes && matchedNetwork.ussdCodes.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border/40">
                  <span className="text-xs font-bold text-text-primary block mb-2">
                    Useful {matchedNetwork.name} USSD Service Codes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedNetwork.ussdCodes.map((u) => (
                      <div
                        key={u.code}
                        className="flex items-center justify-between p-2 rounded-lg bg-bg-surface/80 border border-border/60 text-xs"
                      >
                        <div className="min-w-0 flex-1 pr-2">
                          <code className="font-bold text-gold font-mono mr-2">{u.code}</code>
                          <span className="text-text-secondary text-[0.7rem]">{u.description}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(u.code)}
                          title="Copy USSD Code"
                          className="p-1 rounded text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer shrink-0"
                        >
                          {copiedCode === u.code ? (
                            <Check className="w-3.5 h-3.5 text-kenya-green-light" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-bg-elevated/30 p-4 text-center text-xs text-text-secondary">
              Enter at least 4 digits starting with <strong className="text-text-primary">07</strong>, <strong className="text-text-primary">01</strong>, or <strong className="text-text-primary">+254</strong> to identify the carrier network.
            </div>
          )}

          {/* MNP Disclaimer */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-bg-elevated/50 border border-border text-[0.7rem] text-text-muted mt-2">
            <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>
              <strong>Note on Mobile Number Portability (MNP):</strong> This tool reflects original statutory allocations. If a subscriber ported their line to another telecom operator, the number will be serviced by their current carrier.
            </span>
          </div>
        </div>

        {/* Network Directory Explorer */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                Kenya Telecom Network Prefix Directory
              </h2>
              <p className="text-xs text-text-muted">
                Complete list of allocated 07xx and 01xx prefixes by provider
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 flex-wrap">
              {["All", ...prefixesData.networks.map((n) => n.name)].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedNetworkTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedNetworkTab === tab
                      ? "bg-gold text-black font-bold"
                      : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredNetworks.map((net) => (
              <div
                key={net.name}
                className="rounded-xl border border-border bg-bg-elevated/40 p-4"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: net.color }}
                    />
                    <h3 className="text-sm font-bold text-text-primary">
                      {net.name}
                    </h3>
                  </div>
                  <span className="text-xs text-text-muted font-medium">
                    {net.prefixes.length} allocated prefixes
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {net.prefixes.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setInputNumber(`${p} 000 000`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      title={`Test prefix ${p}`}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-bg-surface border border-border text-text-primary hover:border-gold hover:text-gold transition-colors cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Numbers & International Dialing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-4 h-4 text-kenya-red-light" />
              <h3 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                Kenya Emergency Short Codes
              </h3>
            </div>
            <div className="space-y-2">
              {prefixesData.emergencyNumbers.map((em) => (
                <div
                  key={em.number}
                  className="flex items-center justify-between p-2 rounded-lg bg-bg-elevated/50 border border-border/50 text-xs"
                >
                  <span className="font-black font-mono text-kenya-red-light text-sm">
                    {em.number}
                  </span>
                  <span className="text-text-secondary text-right text-[0.7rem] max-w-[65%]">
                    {em.service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-gold" />
              <h3 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                International Dialing Guide (+254)
              </h3>
            </div>
            <div className="space-y-3 text-xs text-text-secondary leading-relaxed">
              <div className="p-2.5 rounded-lg bg-bg-elevated/50 border border-border/50">
                <span className="font-bold text-gold block mb-1">
                  Calling Outside Kenya:
                </span>
                <span>{prefixesData.internationalDialing.fromKenya}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-bg-elevated/50 border border-border/50">
                <span className="font-bold text-kenya-green-light block mb-1">
                  Calling Kenya From Abroad:
                </span>
                <span>{prefixesData.internationalDialing.fromAbroad}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
