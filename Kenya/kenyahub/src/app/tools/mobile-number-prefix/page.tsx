"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import prefixData from "@/data/mobile-prefixes.json";

const tool = TOOLS.find((t) => t.slug === "mobile-number-prefix")!;

const faq = [
  { question: "How can I identify which network a Kenyan phone number belongs to?", answer: "Look at the first 4 digits of the number (e.g. 0722). Safaricom uses 0700–0729, 0740–0743, 0790–0799, 0110–0119 among others. Airtel uses 0730–0739, 0750–0756, 0780–0789, 0100–0109. Telkom uses 0770–0779, 0120–0129." },
  { question: "What is Kenya's country code?", answer: "Kenya's country code is +254. When dialing a Kenyan number internationally, drop the leading 0 and add +254. Example: 0722 123 456 becomes +254 722 123 456." },
  { question: "What prefixes does Faiba use?", answer: "Faiba (Jamii Telecoms) uses the prefix 0747. They primarily focus on data services and mobile broadband." },
  { question: "Can a number switch between networks?", answer: "Yes, Kenya supports Mobile Number Portability (MNP), meaning users can switch networks while keeping their number. However, the prefix will still show the original network allocation." },
];

export default function MobilePrefixPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const result = useMemo(() => {
    const cleaned = phoneNumber.replace(/[\s\-\(\)]/g, "");
    let normalized = cleaned;

    // Handle +254 prefix
    if (normalized.startsWith("+254")) {
      normalized = "0" + normalized.slice(4);
    } else if (normalized.startsWith("254")) {
      normalized = "0" + normalized.slice(3);
    }

    if (normalized.length < 4 || !normalized.startsWith("0")) return null;

    const prefix4 = normalized.substring(0, 4);

    for (const network of prefixData.networks) {
      if (network.prefixes.includes(prefix4)) {
        return {
          network: network.name,
          prefix: prefix4,
          color: network.color,
          ussdCodes: network.ussdCodes,
        };
      }
    }

    return { network: "Unknown Network", prefix: prefix4, color: "#666", ussdCodes: [] };
  }, [phoneNumber]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Enter Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. 0722 123 456 or +254 722 123 456"
            className="input-field text-xl font-bold font-[family-name:var(--font-outfit)]"
            id="phone-input"
          />
        </div>

        {/* Result */}
        {result && (
          <div className="result-box text-center">
            <p className="text-xs text-text-muted mb-2">This number belongs to</p>
            <p
              className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] mb-2"
              style={{ color: result.color }}
            >
              {result.network}
            </p>
            <span className="badge" style={{ backgroundColor: result.color + "20", color: result.color }}>
              Prefix: {result.prefix}
            </span>

            {/* USSD Codes */}
            {result.ussdCodes.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-text-secondary mb-2">Useful USSD Codes:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {result.ussdCodes.map((code) => (
                    <div
                      key={code.code}
                      className="bg-bg-card border border-border rounded-lg px-3 py-2 text-left"
                    >
                      <p className="text-sm font-mono font-bold text-gold">{code.code}</p>
                      <p className="text-xs text-text-muted">{code.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* All Networks */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
            Kenya Network Prefix Directory
          </h3>
          {prefixData.networks.map((network) => (
            <div
              key={network.name}
              className="bg-bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: network.color }}
                />
                <h4 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  {network.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {network.prefixes.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-border text-text-secondary"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Numbers */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              🚨 Kenya Emergency Numbers
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {prefixData.emergencyNumbers.map((en) => (
                <tr key={en.number}>
                  <td className="font-bold text-kenya-red-light font-mono">{en.number}</td>
                  <td className="text-text-secondary">{en.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* International Dialing */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            International Dialing Guide
          </h3>
          <div className="space-y-3 text-xs text-text-muted">
            <div>
              <p className="font-semibold text-text-secondary mb-1">From Kenya to international:</p>
              <p>{prefixData.internationalDialing.fromKenya}</p>
            </div>
            <div>
              <p className="font-semibold text-text-secondary mb-1">From abroad to Kenya:</p>
              <p>{prefixData.internationalDialing.toKenya}</p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
