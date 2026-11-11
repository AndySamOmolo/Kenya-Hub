"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import airtimeData from "@/data/airtime-drain-data.json";

const tool = TOOLS.find((t) => t.slug === "airtime-drain-guide")!;

export default function AirtimeDrainGuidePage() {
  const [selectedNetwork, setSelectedNetwork] = useState("Safaricom");

  const activeNet = airtimeData.networks.find((n) => n.name === selectedNetwork) || airtimeData.networks[0];

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Airtime Drain, Premium SMS Unsubscribe &amp; SIM Swap Lockout USSD Guide
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Stop unauthorized airtime deductions from premium content providers, check which phone numbers are registered with your National ID to stop SIM-swap fraud, and block promotional SMS spam under Communications Authority (CA) rules.
          </p>

          <div className="flex gap-2 mb-6">
            {airtimeData.networks.map((net) => (
              <button
                key={net.name}
                onClick={() => setSelectedNetwork(net.name)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedNetwork === net.name
                    ? "bg-gold text-kenya-black font-bold shadow-xs"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {net.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-wider">
                1. Cancel Airtime-Eating Subscriptions
              </span>
              <p className="text-2xl font-black text-text-primary font-mono">{activeNet.checkSubscriptionsUSSD}</p>
              <p className="text-xs text-text-secondary">{activeNet.checkSubscriptionsStep}</p>
            </div>

            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2">
              <span className="text-xs font-bold text-kenya-green-light uppercase tracking-wider">
                2. Check All Numbers Registered With Your ID
              </span>
              <p className="text-2xl font-black text-text-primary font-mono">{activeNet.checkLinkedSIMsUSSD}</p>
              <p className="text-xs text-text-secondary">{activeNet.checkLinkedSIMsStep}</p>
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-bg-elevated/20 p-4">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
              Stop Unwanted Marketing / Promotional SMS
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">{activeNet.stopAllPromoSMS}</p>
            <p className="text-xs text-text-muted">Customer Care Hotline: {activeNet.customerCare}</p>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
