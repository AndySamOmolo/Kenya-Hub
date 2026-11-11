"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import tenantData from "@/data/tenant-rights-data.json";

const tool = TOOLS.find((t) => t.slug === "landlord-tenant-rights")!;

export default function LandlordTenantRightsPage() {
  const [depositAmount, setDepositAmount] = useState("35000");
  const [daysDelayed, setDaysDelayed] = useState("45");
  const [landlordName, setLandlordName] = useState("");
  const [premisesLocation, setPremisesLocation] = useState("");

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
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider">
              Statutory Demand Notice Generator (Deposit Refund)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Withheld Deposit Amount (KES)</label>
                <input
                  type="text"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Days Elapsed Since Vacating</label>
                <input
                  type="text"
                  value={daysDelayed}
                  onChange={(e) => setDaysDelayed(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-bg-elevated text-xs font-bold text-text-primary"
                />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-bg-card p-4 text-xs font-mono text-text-secondary leading-relaxed whitespace-pre-line">
              {`DEMAND FOR IMMEDIATE REFUND OF SECURITY DEPOSIT UNDER SECTION 30 PRECEDENTS
Date: ${new Date().toLocaleDateString('en-KE')}
To: Landlord / Property Agent

RE: FORMAL DEMAND FOR REFUND OF TENANCY SECURITY DEPOSIT (KES ${Number(depositAmount || 0).toLocaleString()})

I write to formally demand the immediate and unconditional refund of my tenancy deposit amounting to KES ${Number(depositAmount || 0).toLocaleString()}, which has now remained unpaid for ${daysDelayed || 30} days following the lawful handover of the premises.

Take notice that normal wear and tear is an ordinary consequence of residential tenancy and cannot lawfully be deducted from a tenant's deposit without proof of malicious structural damage.

TAKE NOTICE that failure to transfer the full sum within seven (7) days from the date of this notice will result in immediate institution of proceedings at the Small Claims Court under the Small Claims Court Act 2016 for recovery of held monies together with court filing costs and interest.`}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
