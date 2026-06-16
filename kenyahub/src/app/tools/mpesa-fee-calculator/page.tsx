"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import mpesaData from "@/data/mpesa-tariffs.json";

const tool = TOOLS.find((t) => t.slug === "mpesa-fee-calculator")!;

type TransactionType = keyof typeof mpesaData.transactionTypes;

function calculateFee(amount: number, type: TransactionType): number | null {
  const bands = mpesaData.transactionTypes[type].bands;
  for (const band of bands) {
    if (amount >= band.min && amount <= band.max) {
      return band.fee;
    }
  }
  return null;
}

function findSavingTip(amount: number, type: TransactionType): string | null {
  const bands = mpesaData.transactionTypes[type].bands;
  for (let i = 0; i < bands.length - 1; i++) {
    const currentBand = bands[i];
    const nextBand = bands[i + 1];
    // If the amount falls in the start of a higher-fee band
    if (amount >= nextBand.min && amount <= nextBand.min + 100) {
      if (currentBand.fee < nextBand.fee) {
        return `💡 Sending KES ${currentBand.max.toLocaleString()} instead of KES ${amount.toLocaleString()} would save you KES ${(nextBand.fee - currentBand.fee).toLocaleString()} in fees (same band boundary).`;
      }
    }
  }
  return null;
}

const faq = [
  {
    question: "Are M-Pesa Buy Goods (Lipa Na M-Pesa) transactions free?",
    answer: "Yes, Safaricom does not charge customers any fee for Buy Goods (till number) transactions. This makes Lipa Na M-Pesa the cheapest way to pay for goods and services.",
  },
  {
    question: "How much does M-Pesa charge to send money?",
    answer: "M-Pesa charges vary by amount and whether the recipient is registered. Sending to a registered user ranges from KES 0 (for amounts under KES 100) to KES 108 (for amounts over KES 25,000). Sending to unregistered users costs more.",
  },
  {
    question: "What is the M-Pesa maximum transaction limit?",
    answer: "The maximum single transaction is KES 150,000. The maximum daily transaction total is KES 300,000. The maximum M-Pesa balance is KES 300,000.",
  },
  {
    question: "Is receiving money on M-Pesa free?",
    answer: "Yes, receiving money on M-Pesa is always free regardless of the amount. You only pay fees when sending money or withdrawing.",
  },
  {
    question: "How can I save on M-Pesa fees?",
    answer: "Use Buy Goods (Lipa Na M-Pesa) whenever possible as it's free. When sending money, check the fee boundaries — sometimes sending KES 500 instead of KES 501 can save you fees because of tariff band transitions.",
  },
];

export default function MpesaFeeCalculatorPage() {
  const [amount, setAmount] = useState<number>(1000);
  const [txType, setTxType] = useState<TransactionType>("sendRegistered");

  const results = useMemo(() => {
    const fee = calculateFee(amount, txType);
    const savingTip = findSavingTip(amount, txType);
    const totalCost = fee !== null ? amount + fee : null;

    // Calculate fees for all transaction types for comparison
    const allFees = Object.entries(mpesaData.transactionTypes).map(([key, value]) => {
      const f = calculateFee(amount, key as TransactionType);
      return { key: key as TransactionType, label: value.label, fee: f };
    });

    return { fee, savingTip, totalCost, allFees };
  }, [amount, txType]);

  const txTypeOptions = Object.entries(mpesaData.transactionTypes).map(([key, value]) => ({
    key: key as TransactionType,
    label: value.label,
  }));

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Inputs */}
        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Transaction Amount (KES)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]"
              min={0}
              max={150000}
              id="mpesa-amount-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Transaction Type
            </label>
            <select
              value={txType}
              onChange={(e) => setTxType(e.target.value as TransactionType)}
              className="select-field"
              id="mpesa-type-select"
            >
              {txTypeOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="result-box">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-text-muted mb-1">Amount</p>
              <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                KES {amount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Fee</p>
              <p className="text-lg font-bold text-kenya-red-light font-[family-name:var(--font-outfit)]">
                {results.fee !== null ? `KES ${results.fee.toLocaleString()}` : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Total Cost</p>
              <p className="text-lg font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">
                {results.totalCost !== null
                  ? `KES ${results.totalCost.toLocaleString()}`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Saving Tip */}
        {results.savingTip && (
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <p className="text-sm text-gold-light">{results.savingTip}</p>
          </div>
        )}

        {/* Fee Comparison Across Types */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Fee Comparison for KES {amount.toLocaleString()}
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th className="text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              {results.allFees.map((item) => (
                <tr
                  key={item.key}
                  className={item.key === txType ? "bg-gold/5" : ""}
                >
                  <td
                    className={`text-text-secondary ${item.key === txType ? "font-semibold text-gold" : ""}`}
                  >
                    {item.label}
                    {item.key === txType && " ←"}
                  </td>
                  <td className="text-right">
                    {item.fee !== null ? (
                      <span className={item.fee === 0 ? "text-kenya-green-light font-semibold" : "text-text-primary"}>
                        {item.fee === 0 ? "FREE" : `KES ${item.fee.toLocaleString()}`}
                      </span>
                    ) : (
                      <span className="text-text-muted">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full Tariff Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Full M-Pesa Tariff — {mpesaData.transactionTypes[txType].label}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Amount Range</th>
                  <th className="text-right">Fee</th>
                </tr>
              </thead>
              <tbody>
                {mpesaData.transactionTypes[txType].bands.map((band, i) => {
                  const isActive = amount >= band.min && amount <= band.max;
                  return (
                    <tr key={i} className={isActive ? "bg-gold/5" : ""}>
                      <td className={isActive ? "font-semibold text-gold" : "text-text-secondary"}>
                        KES {band.min.toLocaleString()} – KES {band.max.toLocaleString()}
                        {isActive && " ← Your amount"}
                      </td>
                      <td className={`text-right ${isActive ? "font-semibold text-gold" : ""}`}>
                        {band.fee === 0 ? (
                          <span className="text-kenya-green-light">FREE</span>
                        ) : (
                          `KES ${band.fee}`
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction Limits */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            M-Pesa Transaction Limits
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-text-muted text-xs">Max Balance</p>
              <p className="font-semibold text-text-primary">KES {mpesaData.limits.maxBalance.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Max Per Day</p>
              <p className="font-semibold text-text-primary">KES {mpesaData.limits.maxTransactionPerDay.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Max Single Tx</p>
              <p className="font-semibold text-text-primary">KES {mpesaData.limits.maxSingleTransaction.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Receive Money</p>
              <p className="font-semibold text-kenya-green-light">Always FREE</p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
