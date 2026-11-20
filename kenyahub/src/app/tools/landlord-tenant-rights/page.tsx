"use client";

import { useState } from "react";
import { X, Copy, Check, Mail, MessageCircle } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import tenantData from "@/data/tenant-rights-data.json";

const tool = TOOLS.find((t) => t.slug === "landlord-tenant-rights")!;

export default function LandlordTenantRightsPage() {
  const [tenantName, setTenantName] = useState("");
  const [vacatingDate, setVacatingDate] = useState("");
  const [depositAmount, setDepositAmount] = useState("35000");
  const [daysDelayed, setDaysDelayed] = useState("45");
  const [landlordName, setLandlordName] = useState("Sunrise Properties Ltd");
  const [premisesLocation, setPremisesLocation] = useState("House B4, Kilimani, Nairobi");
  const [copied, setCopied] = useState(false);

  const noticeText = `DEMAND FOR IMMEDIATE REFUND OF SECURITY DEPOSIT
Date: ${new Date().toLocaleDateString("en-KE")}
From: ${tenantName.trim() || "[TENANT FULL NAME]"}
To: ${landlordName || "Landlord / Property Managing Agent"}
Premises: ${premisesLocation || "Residential Unit"}${vacatingDate ? `\nDate Vacated: ${vacatingDate}` : ""}

RE: FORMAL DEMAND FOR REFUND OF TENANCY SECURITY DEPOSIT (KES ${Number(depositAmount || 0).toLocaleString("en-KE")})

I write to formally demand the immediate and unconditional refund of my tenancy deposit for ${premisesLocation || "the premises"} amounting to KES ${Number(depositAmount || 0).toLocaleString("en-KE")}, which has now remained unpaid for ${daysDelayed || 30} days following the lawful handover of vacant possession${vacatingDate ? ` on ${vacatingDate}` : ""}.

Take notice that normal wear and tear is an ordinary consequence of residential tenancy and cannot lawfully be deducted from a tenant's deposit without proof of malicious structural damage.

TAKE NOTICE that failure to transfer the full sum within seven (7) days from the date of this notice will result in immediate institution of proceedings at the Small Claims Court under the Small Claims Court Act (No. 2 of 2016) for recovery of held monies together with court filing costs and interest.`;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(noticeText)}`;
  const mailtoHref = `mailto:?subject=${encodeURIComponent(
    `Formal Demand for Refund of Tenancy Security Deposit — ${premisesLocation || "Residential Unit"}`
  )}&body=${encodeURIComponent(noticeText)}`;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
              <h2 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-2">
                ✕ Illegal Landlord Actions in Kenya
              </h2>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {tenantData.illegalActions.map((act, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-red-500 dark:text-red-400 font-bold">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-kenya-green/30 bg-kenya-green/5 p-4">
              <h2 className="text-xs font-bold text-kenya-green-light uppercase tracking-wider mb-2">
                ✓ Permitted Lawful Deductions
              </h2>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {tenantData.lawfulDeductions.map((ded, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-kenya-green-light font-bold">•</span>
                    <span>{ded}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated/40 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-gold uppercase tracking-wider">
                Statutory Demand Notice Generator (Deposit Refund)
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(noticeText);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-kenya-black text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied Notice" : "Copy Demand Notice"}
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border text-text-primary text-xs font-semibold hover:border-gold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-kenya-green-light" />
                  WhatsApp
                </a>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border text-text-primary text-xs font-semibold hover:border-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  Email
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label htmlFor="tenant-name" className="block text-xs font-semibold text-text-muted mb-1">
                  Tenant Full Name
                </label>
                <input
                  id="tenant-name"
                  type="text"
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  placeholder="e.g. Achieng Otieno"
                  className="w-full px-3 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
                />
              </div>
              <div>
                <label htmlFor="vacating-date" className="block text-xs font-semibold text-text-muted mb-1">
                  Vacating Date
                </label>
                <input
                  id="vacating-date"
                  type="date"
                  value={vacatingDate}
                  onChange={(e) => setVacatingDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
                />
              </div>
              <div>
                <label htmlFor="landlord-name" className="block text-xs font-semibold text-text-muted mb-1">
                  Landlord / Agency Name
                </label>
                <div className="relative">
                  <input
                    id="landlord-name"
                    type="text"
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                    placeholder="e.g. Sunrise Properties Ltd"
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
                    style={{ paddingRight: "2.25rem" }}
                  />
                  {landlordName && (
                    <button
                      type="button"
                      onClick={() => setLandlordName("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear landlord name"
                    >
                      <X className="w-3 h-3 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="premises-location" className="block text-xs font-semibold text-text-muted mb-1">
                  Apartment / House &amp; Estate
                </label>
                <div className="relative">
                  <input
                    id="premises-location"
                    type="text"
                    value={premisesLocation}
                    onChange={(e) => setPremisesLocation(e.target.value)}
                    placeholder="e.g. House B4, Kilimani"
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
                    style={{ paddingRight: "2.25rem" }}
                  />
                  {premisesLocation && (
                    <button
                      type="button"
                      onClick={() => setPremisesLocation("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear premises location"
                    >
                      <X className="w-3 h-3 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="deposit-amount" className="block text-xs font-semibold text-text-muted mb-1">
                  Withheld Deposit Amount (KES)
                </label>
                <div className="relative">
                  <input
                    id="deposit-amount"
                    type="text"
                    inputMode="numeric"
                    value={depositAmount}
                    placeholder="e.g. 35000"
                    onChange={(e) => setDepositAmount(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                    style={{ paddingRight: "2.25rem" }}
                  />
                  {depositAmount && (
                    <button
                      type="button"
                      onClick={() => setDepositAmount("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear deposit amount"
                    >
                      <X className="w-3 h-3 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="days-delayed" className="block text-xs font-semibold text-text-muted mb-1">
                  Days Elapsed Since Vacating
                </label>
                <div className="relative">
                  <input
                    id="days-delayed"
                    type="text"
                    inputMode="numeric"
                    value={daysDelayed}
                    placeholder="e.g. 45"
                    onChange={(e) => setDaysDelayed(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                    style={{ paddingRight: "2.25rem" }}
                  />
                  {daysDelayed && (
                    <button
                      type="button"
                      onClick={() => setDaysDelayed("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear days delayed"
                    >
                      <X className="w-3 h-3 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div
              role="status"
              aria-live="polite"
              className="rounded-lg border border-border bg-bg-card p-4 text-xs font-mono text-text-secondary leading-relaxed whitespace-pre-line"
            >
              {noticeText}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
