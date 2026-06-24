"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import licenseData from "@/data/driving-license-guide.json";

const tool = TOOLS.find((t) => t.slug === "driving-license-guide")!;

const faq = [
  {
    question: "How do I get a driving license in Kenya?",
    answer: "The process involves: 1. Getting a medical check (DL Form 1), 2. Enrolling in an NTSA-approved driving school, 3. Getting a provisional license (PDL), 4. Passing a theory test, 5. Passing a practical driving test, and finally 6. Paying for and collecting your license.",
  },
  {
    question: "What is the age limit for a driving license in Kenya?",
    answer: "You must be at least 18 years old for Class A (motorcycles), Class B (cars), and Class G (tractors). For Class C (heavy vehicles) you must be 21, for Class BCE (trailers) you must be 24, and for driving instructors you must be 25.",
  },
  {
    question: "How much does a driving license cost in Kenya?",
    answer: "The final license fee is KES 1,750 for 3 years. However, the total cost including driving school fees, medical checks, provisional licenses, and test fees typically ranges from KES 12,000 to KES 30,000 depending on the class.",
  },
  {
    question: "How long is a Kenyan driving license valid?",
    answer: "A standard Kenyan driving license is valid for 3 years from the date of issue. The renewal fee is KES 1,750.",
  },
  {
    question: "Do I need a new Smart Driving License?",
    answer: "Yes, NTSA is phasing out the old red booklet licenses. All new applications and renewals are issued as the new digital Smart Driving License card, which contains a microchip with your driver profile and demerit points.",
  },
];

export default function DrivingLicenseGuidePage() {
  const [activeTab, setActiveTab] = useState<"classes" | "process">("classes");

  const fmt = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex bg-bg-elevated p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("classes")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === "classes"
                ? "bg-bg-card shadow-sm text-gold"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            License Classes
          </button>
          <button
            onClick={() => setActiveTab("process")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === "process"
                ? "bg-bg-card shadow-sm text-gold"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Application Process
          </button>
        </div>

        {activeTab === "classes" ? (
          <div className="space-y-4">
            {/* Total Cost Estimates */}
            <div className="bg-bg-card border border-border rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                Estimated Total Cost (Including Driving School)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.values(licenseData.totalEstimatedCost).map((cost, i) => (
                  <div key={i} className="bg-bg-elevated rounded-lg p-3 text-center border border-border">
                    <p className="text-xs text-text-muted mb-1">{cost.label}</p>
                    <p className="text-sm font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">
                      {fmt(cost.min)} – {fmt(cost.max)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Classes List */}
            {licenseData.licenseClasses.map((cls, i) => (
              <div key={i} className="bg-bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gold/10 text-gold font-bold font-[family-name:var(--font-outfit)] border border-gold/20">
                        {cls.class}
                      </span>
                      <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                        {cls.name}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary mt-2">{cls.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-text-muted">License Fee</p>
                    <p className="text-lg font-bold text-gold font-[family-name:var(--font-outfit)]">
                      {fmt(cls.fee)}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs font-medium text-text-primary mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      {cls.requirements.map((req, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-text-secondary">
                          <span className="text-gold mt-0.5">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-primary mb-2">Age Limit:</p>
                    <span className="inline-flex px-2 py-1 rounded bg-bg-elevated border border-border text-xs text-text-primary">
                      {cls.minimumAge} years and above
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Step by step process */}
            <div className="relative border-l-2 border-border ml-3 sm:ml-6 space-y-8">
              {licenseData.applicationProcess.map((step, i) => (
                <div key={i} className="relative pl-6 sm:pl-8">
                  {/* Step number dot */}
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-bg-card border-2 border-gold flex items-center justify-center text-gold font-bold font-[family-name:var(--font-outfit)]">
                    {step.step}
                  </div>
                  
                  <div className="bg-bg-card border border-border rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                        {step.title}
                      </h3>
                      <span className="inline-flex px-2 py-1 rounded bg-bg-elevated border border-border text-xs font-medium text-text-primary whitespace-nowrap">
                        {step.cost}
                      </span>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">{step.description}</p>
                    
                    {step.documents.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border border-dashed">
                        <p className="text-xs font-medium text-text-primary mb-2">You will need:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.documents.map((doc, j) => (
                            <span key={j} className="inline-flex px-2 py-1 rounded-md bg-gold/5 border border-gold/20 text-xs text-text-secondary">
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Renewal Info */}
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                License Renewal Info
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-text-muted">Validity</p>
                  <p className="text-sm font-medium text-text-primary">{licenseData.renewalProcess.renewalPeriod}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Renewal Fee</p>
                  <p className="text-sm font-medium text-text-primary">{fmt(licenseData.renewalProcess.renewalFee)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-text-muted">Late Penalty</p>
                  <p className="text-sm font-medium text-kenya-red-light">{licenseData.renewalProcess.lateRenewalPenalty}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-xs font-medium text-text-primary mb-2">Required for Renewal:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {licenseData.renewalProcess.requirements.map((req, i) => (
                    <li key={i} className="text-xs text-text-secondary flex items-center gap-1">
                      <span className="text-gold">•</span> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
