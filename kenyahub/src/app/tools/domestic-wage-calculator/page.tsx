"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Printer, FileText } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import domesticWageData from "@/data/domestic-wage-data.json";

const tool = TOOLS.find((t) => t.slug === "domestic-wage-calculator")!;

const JOB_TITLES = [
  "Househelp",
  "Nanny",
  "Cook",
  "Gardener",
  "Night Guard",
] as const;

type JobTitle = (typeof JOB_TITLES)[number];

export default function DomesticWageCalculatorPage() {
  const [selectedZone, setSelectedZone] = useState(domesticWageData.zones[0].id);
  const [isLiveIn, setIsLiveIn] = useState(false);

  // Employment Act (Cap 226) Section 9 Contract Generator State
  const [employerName, setEmployerName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeIdNumber, setEmployeeIdNumber] = useState("");
  const [jobTitle, setJobTitle] = useState<JobTitle>("Househelp");
  const [agreedSalaryInput, setAgreedSalaryInput] = useState("");
  const [workingHours, setWorkingHours] = useState(
    "8:00 AM – 5:00 PM (Mon–Sat, max 52 hrs/week, 1 Paid Rest Day/Week)"
  );
  const [copiedContract, setCopiedContract] = useState(false);

  const activeZone =
    domesticWageData.zones.find((z) => z.id === selectedZone) ||
    domesticWageData.zones[0];

  const calc = useMemo(() => {
    const minWage = activeZone.monthlyMinimum;
    const customGross = Number(agreedSalaryInput.replace(/,/g, "")) || 0;
    const grossWage = customGross > 0 ? Math.max(minWage, customGross) : minWage;
    const isBelowMinimum = customGross > 0 && customGross < minWage;

    const housingAllowanceIncluded = Math.round(grossWage * 0.15);
    const shaDeduction = Math.max(
      300,
      Math.round(grossWage * domesticWageData.statutoryDeductions.shaEmployeePercent)
    );
    // NSSF Act Cap 128 6% calculation matching mobile/src/tools/CivicLegalTools.tsx:862
    const nssf = Math.min(Math.round(grossWage * 0.06), 4320);
    const nssfEmployee = nssf;
    const nssfEmployer = nssf;
    const netTakeHome = grossWage - shaDeduction - nssfEmployee;
    const totalEmployerCost = grossWage + nssfEmployer;

    return {
      minWage,
      grossWage,
      isBelowMinimum,
      housingAllowanceIncluded,
      shaDeduction,
      nssf,
      nssfEmployee,
      nssfEmployer,
      netTakeHome,
      totalEmployerCost,
    };
  }, [activeZone, agreedSalaryInput]);

  const contractText = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    const employer = employerName.trim() || "[EMPLOYER FULL NAME]";
    const employee = employeeName.trim() || "[EMPLOYEE FULL NAME]";
    const idNo = employeeIdNumber.trim() || "[NATIONAL ID NUMBER]";

    return [
      "REPUBLIC OF KENYA",
      "WRITTEN CONTRACT OF DOMESTIC EMPLOYMENT",
      "(Pursuant to Section 9 & Section 10 of the Employment Act, Cap 226 Laws of Kenya & Legal Notice 108)",
      "================================================================================",
      `Date of Agreement: ${today}`,
      "",
      "1. PARTIES TO THE CONTRACT",
      `   Employer Name: ${employer}`,
      `   Employee Name: ${employee}`,
      `   Employee National ID No.: ${idNo}`,
      "",
      "2. JOB DESCRIPTION & WORKPLACE LOCATION",
      `   Job Title / Role: ${jobTitle}`,
      `   Workplace Location Zone: ${activeZone.name}`,
      `    Gazetted Minimum Monthly Wage for Zone: KES ${calc.minWage.toLocaleString()} (Daily: KES ${activeZone.dailyRate} · Hourly: KES ${activeZone.hourlyRate})`,
      "",
      "3. REMUNERATION & HOUSING PROVISION (SECTION 31, EMPLOYMENT ACT)",
      `   Agreed Monthly Gross Salary: KES ${calc.grossWage.toLocaleString()}`,
      `   Housing Arrangement: ${
        isLiveIn
          ? `Live-In — Employer provides free, adequate accommodation at the workplace (equivalent housing value: KES ${calc.housingAllowanceIncluded.toLocaleString()}/month).`
          : `Live-Out — Consolidated gross wage includes statutory 15% housing allowance (KES ${calc.housingAllowanceIncluded.toLocaleString()}/month).`
      }`,
      "",
      "4. STATUTORY DEDUCTIONS & NET TAKE-HOME PAY",
      `   - Social Health Authority (SHA — 2.75%, min KES 300): −KES ${calc.shaDeduction.toLocaleString()}`,
      `   - NSSF Act Cap 128 Contribution (6% of Gross, max KES 4,320): −KES ${calc.nssfEmployee.toLocaleString()}`,
      `   - Employer NSSF Matching Contribution (6%): KES ${calc.nssfEmployer.toLocaleString()} (paid by Employer)`,
      `   - NET MONTHLY TAKE-HOME PAY TO EMPLOYEE: KES ${calc.netTakeHome.toLocaleString()}`,
      `   - Total Monthly Statutory Cost to Employer: KES ${calc.totalEmployerCost.toLocaleString()}`,
      "",
      "5. WORKING HOURS, WEEKLY REST & STATUTORY LEAVE (SECTIONS 27–30, CAP 226)",
      `   - Normal Working Hours: ${workingHours}`,
      `   - Annual Leave: ${domesticWageData.statutoryDeductions.leaveDaysAnnual} working days with full pay per completed year of service.`,
      `   - Maternity / Paternity Leave: ${domesticWageData.statutoryDeductions.paidMaternityMonths} months paid maternity leave / ${domesticWageData.statutoryDeductions.paidPaternityDays} days paid paternity leave.`,
      "   - Sick Leave: Minimum 7 days with full pay and 7 days at half pay after 2 months of continuous service upon production of a medical certificate.",
      "   - Public Holidays: Full pay or double overtime rate if required to work on a gazetted Kenyan public holiday.",
      "",
      "6. TERMINATION NOTICE (SECTION 35, EMPLOYMENT ACT CAP 226)",
      "   Either party may terminate this contract by giving 1 (one) month written notice, or by paying 1 (one) month gross wages in lieu of notice.",
      "",
      "SIGNATURES:",
      `Employer Signature: ___________________________   Date: _______________`,
      `(${employer})`,
      "",
      `Employee Signature / Thumbprint: ______________   Date: _______________`,
      `(${employee} — ID No: ${idNo})`,
    ].join("\n");
  }, [
    employerName,
    employeeName,
    employeeIdNumber,
    jobTitle,
    activeZone,
    calc,
    isLiveIn,
    workingHours,
  ]);

  const handleCopyContract = async () => {
    try {
      await navigator.clipboard.writeText(contractText);
      setCopiedContract(true);
      setTimeout(() => setCopiedContract(false), 2500);
    } catch {
      /* ignore */
    }
  };

  const handlePrintContract = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          <div className="flex flex-wrap gap-2 mb-4">
            {domesticWageData.zones.map((z) => (
              <button
                key={z.id}
                type="button"
                aria-pressed={selectedZone === z.id}
                onClick={() => setSelectedZone(z.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedZone === z.id
                    ? "bg-gold text-kenya-black font-bold shadow-xs"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {z.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              aria-pressed={!isLiveIn}
              onClick={() => setIsLiveIn(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                !isLiveIn
                  ? "bg-gold/15 border-gold text-gold"
                  : "bg-bg-elevated border-border text-text-secondary"
              }`}
            >
              Live-Out (Consolidated Wage Includes 15% Housing)
            </button>
            <button
              type="button"
              aria-pressed={isLiveIn}
              onClick={() => setIsLiveIn(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                isLiveIn
                  ? "bg-gold/15 border-gold text-gold"
                  : "bg-bg-elevated border-border text-text-secondary"
              }`}
            >
              Live-In (Employer Provides Free Accommodation)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">
                {agreedSalaryInput ? "Agreed Monthly Gross Wage" : "Gazetted Legal Minimum Wage"}
              </span>
              <p className="text-2xl font-black text-gold mt-1">
                KES {calc.grossWage.toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                Daily: KES {activeZone.dailyRate} ({activeZone.hourlyRate}/hr)
                {isLiveIn
                  ? ` · Free housing provided (equiv. KES ${calc.housingAllowanceIncluded.toLocaleString()})`
                  : ""}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">
                Employee Net Take-Home
              </span>
              <p className="text-xl font-bold text-text-primary mt-1">
                KES {Math.round(calc.netTakeHome).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                After SHA KES {Math.round(calc.shaDeduction).toLocaleString()} &amp; NSSF (6%) KES{" "}
                {calc.nssfEmployee.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">
                Total Cost to Employer
              </span>
              <p className="text-xl font-bold text-text-primary mt-1">
                KES {Math.round(calc.totalEmployerCost).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                Includes employer 6% NSSF match KES {calc.nssfEmployer.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Employment Act (Cap 226) Section 9 Written Domestic Employment Contract Generator */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold shrink-0" />
                <span>
                  Employment Act (Cap 226) Section 9 Written Domestic Employment Contract Generator
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Section 9 of the Employment Act requires every employment relationship lasting 3 months or more to be backed by a written contract signed by both Employer and Employee.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyContract}
                className="px-3.5 py-2 rounded-xl bg-gold text-kenya-black font-bold text-xs flex items-center gap-1.5 hover:bg-gold-light transition-colors cursor-pointer"
              >
                {copiedContract ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Contract</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handlePrintContract}
                className="px-3.5 py-2 rounded-xl bg-bg-elevated border border-border text-text-primary font-semibold text-xs flex items-center gap-1.5 hover:border-gold transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-gold" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="employer-name"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Employer Full Name
              </label>
              <input
                id="employer-name"
                type="text"
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
                placeholder="e.g. Wanjiku Mwangi"
                className="input-field text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="employee-name"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Employee Full Name
              </label>
              <input
                id="employee-name"
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                placeholder="e.g. Nekesa Wafula"
                className="input-field text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="employee-id"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Employee National ID Number
              </label>
              <input
                id="employee-id"
                type="text"
                inputMode="numeric"
                value={employeeIdNumber}
                onChange={(e) => setEmployeeIdNumber(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="e.g. 34567890"
                className="input-field text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="job-title"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Job Title / Domestic Role
              </label>
              <CustomSelect
                id="job-title"
                value={jobTitle}
                onValueChange={(val) => setJobTitle(val as JobTitle)}
                options={JOB_TITLES.map((role) => ({
                  value: role,
                  label: role,
                }))}
                className="w-full text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="contract-zone"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Work Location Zone
              </label>
              <CustomSelect
                id="contract-zone"
                value={selectedZone}
                onValueChange={(val) => setSelectedZone(val)}
                options={domesticWageData.zones.map((z) => ({
                  value: z.id,
                  label: z.name,
                }))}
                className="w-full text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="agreed-salary"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Agreed Monthly Gross Salary (KES)
              </label>
              <input
                id="agreed-salary"
                type="text"
                inputMode="numeric"
                value={agreedSalaryInput}
                onChange={(e) =>
                  setAgreedSalaryInput(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder={`Min KES ${activeZone.monthlyMinimum.toLocaleString()}`}
                className="input-field text-sm"
              />
              {calc.isBelowMinimum && (
                <p className="text-[0.6875rem] text-kenya-red-light mt-1">
                  Auto-floored to statutory minimum KES {calc.minWage.toLocaleString()} for {activeZone.name.split("(")[0].trim()}.
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="working-hours"
                className="block text-xs font-semibold text-text-secondary mb-1"
              >
                Working Hours &amp; Weekly Rest Schedule
              </label>
              <input
                id="working-hours"
                type="text"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
                className="input-field text-sm"
              />
            </div>

            <div>
              <span className="block text-xs font-semibold text-text-secondary mb-1">
                Housing Allowance / Accommodation
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-pressed={!isLiveIn}
                  onClick={() => setIsLiveIn(false)}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    !isLiveIn
                      ? "bg-gold/15 border-gold text-gold"
                      : "bg-bg-elevated border-border text-text-secondary"
                  }`}
                >
                  Live-Out (+15%)
                </button>
                <button
                  type="button"
                  aria-pressed={isLiveIn}
                  onClick={() => setIsLiveIn(true)}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    isLiveIn
                      ? "bg-gold/15 border-gold text-gold"
                      : "bg-bg-elevated border-border text-text-secondary"
                  }`}
                >
                  Live-In (Housed)
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated/70 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                Employment Act Sec. 9 Compliant Contract Preview
              </span>
              <span className="text-[0.6875rem] text-text-muted">
                Ready to copy, print, or sign in duplicate
              </span>
            </div>
            <pre className="text-xs font-mono text-text-primary whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-96 select-all">
              {contractText}
            </pre>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
