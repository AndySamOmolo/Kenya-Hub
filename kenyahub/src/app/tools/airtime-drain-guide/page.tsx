"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import airtimeData from "@/data/airtime-drain-data.json";

const tool = TOOLS.find((t) => t.slug === "airtime-drain-guide")!;

function toTelHref(ussd: string): string {
  return `tel:${encodeURIComponent(ussd)}`;
}

export default function AirtimeDrainGuidePage() {
  const [selectedNetwork, setSelectedNetwork] = useState("Safaricom");

  const activeNet =
    airtimeData.networks.find((n) => n.name === selectedNetwork) ||
    airtimeData.networks[0];

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="flex flex-wrap gap-2 mb-6">
            {airtimeData.networks.map((net) => (
              <button
                key={net.name}
                type="button"
                aria-pressed={selectedNetwork === net.name}
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

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5">
                <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                  1. Cancel Airtime-Eating Subscriptions
                </span>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <p className="text-2xl font-black text-text-primary font-mono">
                    {activeNet.checkSubscriptionsUSSD}
                  </p>
                  <a
                    href={toTelHref(activeNet.checkSubscriptionsUSSD)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-kenya-black text-xs font-bold hover:bg-gold-light transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Dial Now
                  </a>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeNet.checkSubscriptionsStep}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5">
                <span className="text-xs font-bold text-kenya-green-light uppercase tracking-wider block">
                  2. Check All Numbers Registered With Your ID
                </span>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <p className="text-2xl font-black text-text-primary font-mono">
                    {activeNet.checkLinkedSIMsUSSD}
                  </p>
                  <a
                    href={toTelHref(activeNet.checkLinkedSIMsUSSD)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-kenya-green text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Dial Now
                  </a>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeNet.checkLinkedSIMsStep}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-bg-elevated/20 p-4 space-y-2">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                  Stop Unwanted Marketing / Promotional SMS
                </h2>
                {activeNet.stopPromoUSSD && (
                  <a
                    href={toTelHref(activeNet.stopPromoUSSD)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-elevated border border-border text-gold text-xs font-semibold hover:border-gold transition-colors"
                  >
                    <PhoneCall className="w-3 h-3" />
                    Dial {activeNet.stopPromoUSSD}
                  </a>
                )}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {activeNet.stopAllPromoSMS}
              </p>
              <p className="text-xs text-text-muted">
                Customer Care Hotline: {activeNet.customerCare}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
