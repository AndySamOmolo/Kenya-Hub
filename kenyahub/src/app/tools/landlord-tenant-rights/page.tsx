"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import tenantData from "@/data/tenant-rights-data.json";

const tool = TOOLS.find((t) => t.slug === "landlord-tenant-rights")!;

export default function LandlordTenantRightsPage() {
  const [depositAmount, setDepositAmount] = useState("35000");
  const [daysDelayed, setDaysDelayed] = useState("45");
  const [landlordName, setLandlordName] = useState("Sunrise Properties Ltd");
  const [premisesLocation, setPremisesLocation] = useState("House B4, Kilimani, Nairobi");
  const [copied, setCopied] = useState(false);

  const noticeText = `DEMAND FOR IMMEDIATE REFUND OF SECURITY DEPOSIT UNDER SECTION 30 PRECEDENTS
Date: ${new Date().toLocaleDateString("en-KE")}
To: ${landlordName || "Landlord / Property Managing Agent"}
Premises: ${premisesLocation || "Residential Unit"}

RE: FORMAL DEMAND FOR REFUND OF TENANCY SECURITY DEPOSIT (KES ${Number(depositAmount || 0).toLocaleString()})

I write to formally demand the immediate and unconditional refund of my tenancy deposit for ${premisesLocation || "the premises"} amounting to KES ${Number(depositAmount || 0).toLocaleString()}, which has now remained unpaid for ${daysDelayed || 30} days following the lawful handover of vacant possession.

Take notice that normal wear and tear is an ordinary consequence of residential tenancy and cannot lawfully be deducted from a tenant's deposit without proof of malicious structural damage.

TAKE NOTICE that failure to transfer the full sum within seven (7) days from the date of this notice will result in immediate institution of proceedings at the Small Claims Court under the Small Claims Court Act 2016 for recovery of held monies together with court filing costs and interest.`;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Kenyan Landlord-Tenant Rent Deposit &amp; Eviction Rights Auditor
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under Kenyan tenancy law and recent High Court &amp; Small Claims Court precedents, security deposits must be accounted for within 30 days of vacating, and lock-outs without court-approved proclamation are illegal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
              <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                ✕ Illegal Landlord Actions in Kenya
              </h3>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {tenantData.illegalActions.map((act, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-kenya-green/30 bg-kenya-green/5 p-4">
              <h3 className="text-xs font-bold text-kenya-green-light uppercase tracking-wider mb-2">
                ✓ Permitted Lawful Deductions
              </h3>
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
              <h3 className="text-sm font-bold text-gold uppercase tracking-wider">
                Statutory Demand Notice Generator (Deposit Refund)
              </h3>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(noticeText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="px-3 py-1.5 rounded-lg bg-gold text-kenya-black text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                {copied ? "✓ Copied Demand Notice" : "Copy Demand Notice"}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Landlord / Agency Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                    placeholder="e.g. Sunrise Properties Ltd"
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
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
                <label className="block text-xs font-semibold text-text-muted mb-1">Apartment / House &amp; Estate</label>
                <div className="relative">
                  <input
                    type="text"
                    value={premisesLocation}
                    onChange={(e) => setPremisesLocation(e.target.value)}
                    placeholder="e.g. House B4, Kilimani"
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
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
                <label className="block text-xs font-semibold text-text-muted mb-1">Withheld Deposit Amount (KES)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={depositAmount}
                    placeholder="0"
                    onChange={(e) => setDepositAmount(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
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
                <label className="block text-xs font-semibold text-text-muted mb-1">Days Elapsed Since Vacating</label>
                <div className="relative">
                  <input
                    type="text"
                    value={daysDelayed}
                    placeholder="0"
                    onChange={(e) => setDaysDelayed(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full pl-3 pr-9 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
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

            <div className="rounded-lg border border-border bg-bg-card p-4 text-xs font-mono text-text-secondary leading-relaxed whitespace-pre-line">
              {noticeText}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
