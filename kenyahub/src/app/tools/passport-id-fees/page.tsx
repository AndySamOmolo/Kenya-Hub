"use client";

import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import feesData from "@/data/passport-id-fees.json";

const tool = TOOLS.find((t) => t.slug === "passport-id-fees")!;

const faq = [
  {
    question: "How much is a new passport in Kenya?",
    answer: "A standard 32-page ordinary passport (valid for 5 years) costs KES 4,550. For a 10-year validity, it costs KES 6,550. The 48-page jumbo passport costs KES 6,050 (5 years) or KES 8,050 (10 years).",
  },
  {
    question: "How long does it take to get a Kenyan passport?",
    answer: "The official processing time is 10–15 working days after biometric capture. However, wait times can sometimes be longer depending on backlog. An expedited/emergency passport takes 1–3 days.",
  },
  {
    question: "How much does it cost to replace a lost National ID?",
    answer: "Replacing a lost National ID card costs KES 300. You will also need a police abstract reporting the loss. Replacing a damaged ID costs KES 100.",
  },
  {
    question: "How do I apply for a passport in Kenya?",
    answer: "The entire process starts online via the eCitizen portal. You fill out the application, pay the fees, and book an appointment. Then you visit the Immigration office or Huduma Centre on your appointment date with original documents for biometrics.",
  },
  {
    question: "Can I get a passport for my child?",
    answer: "Yes, Kenyan citizens under 18 can get a child passport for KES 4,550. The application must be made by a parent or legal guardian.",
  },
];

export default function PassportIdFeesPage() {
  const fmt = (n: number) =>
    n === 0 ? "Free" : `KES ${n.toLocaleString("en-KE")}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Passports */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-bg-elevated flex items-center gap-3">
            <span className="text-2xl">🛂</span>
            <div>
              <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Passport Fees
              </h3>
              <p className="text-xs text-text-muted">Apply via eCitizen (ecitizen.go.ke)</p>
            </div>
          </div>
          <div className="divide-y divide-border">
            {feesData.passport.types.map((type, i) => (
              <div key={i} className="px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{type.type}</p>
                    <p className="text-xs text-text-secondary mt-1">{type.eligibility}</p>
                    <p className="text-[0.625rem] text-text-muted mt-1">Processing: {type.processingTime}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-lg font-bold text-gold font-[family-name:var(--font-outfit)]">
                      {fmt(type.fee)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Passport Process */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Passport Application Process
          </h3>
          <ol className="space-y-3">
            {feesData.passport.applicationProcess.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-xs font-medium text-text-primary mb-2">Required Documents:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {feesData.passport.requiredDocuments.map((doc, i) => (
                <li key={i} className="text-xs text-text-secondary">{doc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* National ID */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-bg-elevated flex items-center gap-3">
            <span className="text-2xl">🪪</span>
            <div>
              <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                National ID Processing Fees
              </h3>
              <p className="text-xs text-text-muted">Apply at NRB offices or Huduma Centres</p>
            </div>
          </div>
          <div className="divide-y divide-border">
            {feesData.nationalId.types.map((type, i) => (
              <div key={i} className="px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{type.type}</p>
                    <p className="text-xs text-text-secondary mt-1">{type.notes}</p>
                    <p className="text-[0.625rem] text-text-muted mt-1">Processing: {type.processingTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">
                      {fmt(type.fee)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 bg-bg-elevated/50 border-t border-border">
            <h4 className="text-xs font-medium text-text-primary mb-2">Required for First-Time Applicants:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {feesData.nationalId.requiredDocuments.map((doc, i) => (
                <li key={i} className="text-xs text-text-secondary">{doc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other Documents */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Other Civil Registry Fees
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Document</th>
                <th className="text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              {feesData.otherDocuments.map((doc, i) => (
                <tr key={i}>
                  <td>
                    <p className="text-sm text-text-primary">{doc.type}</p>
                    <p className="text-xs text-text-muted">{doc.description}</p>
                  </td>
                  <td className="text-right font-medium text-text-primary">{fmt(doc.fee)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Huduma Centres
          </h3>
          <p className="text-xs text-text-secondary mb-3">
            Many civil registration services can be accessed at Huduma Centres nationwide. Key locations include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {feesData.hudumaLocations.map((loc, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                <span className="text-gold">•</span>
                {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
