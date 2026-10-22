"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import mpesaData from "@/data/mpesa-tariffs.json";
import CustomSelect from "@/components/ui/CustomSelect";

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

function findOptimalSplit(amount: number, type: TransactionType) {
  const singleFee = calculateFee(amount, type);
  if (singleFee === null || singleFee === 0 || amount <= 100) return null;

  let bestTotalFee = singleFee;
  let bestSplitDesc: string | null = null;

  // Test splitting into 2 parts at band upper limits
  const bands = mpesaData.transactionTypes[type].bands;
  for (const b of bands) {
    if (b.max >= amount) break;
    const part1 = b.max;
    const part2 = amount - part1;
    const fee1 = calculateFee(part1, type);
    const fee2 = calculateFee(part2, type);
    if (fee1 !== null && fee2 !== null && fee1 + fee2 < bestTotalFee) {
      bestTotalFee = fee1 + fee2;
      const saved = singleFee - bestTotalFee;
      bestSplitDesc = `Split into KES ${part1.toLocaleString()} (fee KES ${fee1}) + KES ${part2.toLocaleString()} (fee KES ${fee2}) = KES ${bestTotalFee} total fee — saving you KES ${saved.toLocaleString()}!`;
    }
  }

  return bestSplitDesc;
}

const faq = [
  {
    question: "How does the Include Agent Withdrawal Fee option work?",
    answer:
      "When you want a recipient to withdraw an exact cash amount (e.g. KES 5,000) from an M-Pesa Agent, you must send KES 5,000 plus the agent withdrawal fee for that bracket so they aren't short. Enabling the Agent Withdrawal Fee option computes the exact amount to send, the recipient's withdrawal fee, and your sending fee.",
  },
  {
    question: "Are M-Pesa Buy Goods (Lipa Na M-Pesa) transactions free?",
    answer:
      "Yes, Safaricom does not charge customers any fee for Buy Goods (till number) transactions. Always ask merchants for their Till Number instead of sending to a personal number.",
  },
  {
    question: "What is the M-Pesa maximum transaction limit in 2026?",
    answer:
      "The maximum single M-Pesa transaction is KES 250,000, the maximum daily transaction limit is KES 500,000, and the maximum M-Pesa wallet balance is KES 500,000.",
  },
];

export default function MpesaFeeCalculatorPage() {
  const [amount, setAmount] = useState<number>(5000);
  const [txType, setTxType] = useState<TransactionType>("sendRegistered");
  const [includeWithdrawal, setIncludeWithdrawal] = useState<boolean>(false);

  const results = useMemo(() => {
    const withdrawalFeeForTarget =
      calculateFee(amount, "withdrawAgent") ?? 0;
    const amountToSend = includeWithdrawal
      ? amount + withdrawalFeeForTarget
      : amount;

    // Check if adding withdrawal fee pushed recipient into next withdrawal band!
    const actualAgentWithdrawFee =
      calculateFee(amountToSend, "withdrawAgent") ?? withdrawalFeeForTarget;
    const adjustedAmountToSend =
      includeWithdrawal && actualAgentWithdrawFee > withdrawalFeeForTarget
        ? amount + actualAgentWithdrawFee
        : amountToSend;

    const fee = calculateFee(adjustedAmountToSend, txType);
    const splitTip = findOptimalSplit(adjustedAmountToSend, txType);
    const totalSenderWalletNeeded =
      fee !== null ? adjustedAmountToSend + fee : null;

    const allFees = Object.entries(mpesaData.transactionTypes).map(
      ([key, value]) => {
        const f = calculateFee(adjustedAmountToSend, key as TransactionType);
        return { key: key as TransactionType, label: value.label, fee: f };
      }
    );

    return {
      amountToSend: adjustedAmountToSend,
      agentWithdrawalFee: includeWithdrawal ? actualAgentWithdrawFee : 0,
      fee,
      splitTip,
      totalSenderWalletNeeded,
      allFees,
    };
  }, [amount, txType, includeWithdrawal]);

  const txTypeOptions = Object.entries(mpesaData.transactionTypes).map(
    ([key, value]) => ({
      key: key as TransactionType,
      label: value.label,
    })
  );

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Inputs */}
        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              {includeWithdrawal
                ? "Net Cash Recipient Must Withdraw at Agent (KES)"
                : "Transaction Amount (KES)"}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)]"
              min={0}
              max={250000}
              id="mpesa-amount-input"
            />
          </div>

          <ExpandablePillRow>
            {[500, 1000, 2500, 5000, 10000, 20000, 50000].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                  amount === preset
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                KES {preset.toLocaleString()}
              </button>
            ))}
          </ExpandablePillRow>

          {/* Tuma na ya Kutoa Toggle */}
          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-gold/10 border border-gold/30 cursor-pointer">
            <input
              type="checkbox"
              checked={includeWithdrawal}
              onChange={(e) => setIncludeWithdrawal(e.target.checked)}
              className="rounded accent-gold"
            />
            <span className="text-xs sm:text-sm font-semibold text-text-primary">
              Include Agent Withdrawal Fee (Add M-Pesa Agent Withdrawal Fee so recipient withdraws exact KES {amount.toLocaleString()})
            </span>
          </label>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Transaction Type
            </label>
            <CustomSelect
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
            </CustomSelect>
          </div>
        </div>

        {/* Result */}
        <div className="result-box">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-text-muted mb-1">
                {includeWithdrawal ? "Amount to Send (+Withdrawal Fee)" : "Amount"}
              </p>
              <p className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                KES {results.amountToSend.toLocaleString()}
              </p>
              {includeWithdrawal && (
                <p className="text-[0.65rem] text-gold mt-0.5">
                  Includes KES {results.agentWithdrawalFee} agent withdrawal fee
                </p>
              )}
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Sending / Tx Fee</p>
              <p className="text-xl font-bold text-kenya-red-light font-[family-name:var(--font-outfit)]">
                {results.fee !== null
                  ? `KES ${results.fee.toLocaleString()}`
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">
                Total Needed in Your M-Pesa
              </p>
              <p className="text-xl font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">
                {results.totalSenderWalletNeeded !== null
                  ? `KES ${results.totalSenderWalletNeeded.toLocaleString()}`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Smart Split Saving Tip */}
        {results.splitTip && (
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <DynamicIcon
                emoji="💡"
                className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
              />
              <p className="text-sm text-gold-light">{results.splitTip}</p>
            </div>
          </div>
        )}

        {/* Fee Comparison Across Types */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Fee Comparison for KES {results.amountToSend.toLocaleString()}
            </h3>
          </div>
          <div className="overflow-x-auto">
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
                      className={`text-text-secondary ${
                        item.key === txType ? "font-semibold text-gold" : ""
                      }`}
                    >
                      {item.label}
                      {item.key === txType && " ←"}
                    </td>
                    <td className="text-right">
                      {item.fee !== null ? (
                        <span
                          className={
                            item.fee === 0
                              ? "text-kenya-green-light font-semibold"
                              : "text-text-primary"
                          }
                        >
                          {item.fee === 0
                            ? "FREE"
                            : `KES ${item.fee.toLocaleString()}`}
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
        </div>
      </div>
    </ToolShell>
  );
}
