import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import helbData from "../../shared/data/helb-rates.json";

const HELB_DEFAULT_PENALTY_MONTHLY = 5000; // Statutory KES 5,000/month default penalty
const HELB_ANNUAL_LEDGER_FEE = 1000; // Statutory KES 1,000/year ledger maintenance fee

interface AmortizationYearRow {
  year: number;
  openingBalance: number;
  interestAndLedger: number;
  principalPaid: number;
  closingBalance: number;
}

/** 4. HELB Loan Calculator (mirrors kenyahub/src/app/tools/helb-calculator/page.tsx) */
export function HelbCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const currentYear = new Date().getFullYear();
  const [loanText, setLoanText] = useState("240000");
  const [yearBorrowed, setYearBorrowed] = useState<number>(2018);
  const [salaryText, setSalaryText] = useState("50000");
  const [defaultMonths, setDefaultMonths] = useState<number>(0);

  const loanAmount = Math.max(0, Number(loanText.replace(/,/g, "")) || 0);
  const grossSalary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const results = useMemo(() => {
    const annualRate = (helbData.interestRate || 4) / 100;
    const annualLedger = helbData.annualLedgerFee ?? HELB_ANNUAL_LEDGER_FEE;
    const monthlyPenalty = helbData.monthlyDefaultPenalty ?? HELB_DEFAULT_PENALTY_MONTHLY;
    const yearsSinceBorrow = loanAmount > 0 ? Math.max(0, currentYear - yearBorrowed) : 0;
    const accruedInterest = loanAmount > 0 ? Math.round(loanAmount * annualRate * yearsSinceBorrow) : 0;
    const accruedLedgerFees = loanAmount > 0 ? yearsSinceBorrow * annualLedger : 0;
    const defaultPenaltyTotal = loanAmount > 0 ? defaultMonths * monthlyPenalty : 0;
    const currentBalance = loanAmount > 0 ? loanAmount + accruedInterest + accruedLedgerFees + defaultPenaltyTotal : 0;

    const monthlyBySalary = Math.round(
      grossSalary * ((helbData.minimumSalaryPercent || 10) / 100)
    );
    const monthlyObligation = Math.max(
      helbData.minimumMonthly || 1500,
      monthlyBySalary
    );

    // Reducing-balance 4% p.a. + KES 1,000/yr ledger fee during repayment
    const monthlyRate = annualRate / 12;
    const monthlyLedger = HELB_ANNUAL_LEDGER_FEE / 12;
    let balance = currentBalance;
    let monthsToRepay = 0;
    let repaymentInterestTotal = 0;
    let repaymentLedgerTotal = 0;
    const schedule: AmortizationYearRow[] = [];
    const maxMonths = 360;
    const coversMonthlyCharges =
      monthlyObligation > balance * monthlyRate + monthlyLedger;

    if (balance > 0 && coversMonthlyCharges) {
      let yearOpening = balance;
      let yearIntLedger = 0;
      let yearPrincipal = 0;
      let yearIdx = 1;

      while (balance > 0.5 && monthsToRepay < maxMonths) {
        const monthInt = balance * monthlyRate;
        const monthFee = monthlyLedger;
        const payment = Math.min(monthlyObligation, balance + monthInt + monthFee);
        const principalPart = Math.max(0, payment - monthInt - monthFee);
        balance = Math.max(0, balance - principalPart);
        repaymentInterestTotal += monthInt;
        repaymentLedgerTotal += monthFee;
        yearIntLedger += monthInt + monthFee;
        yearPrincipal += principalPart;
        monthsToRepay++;

        if (monthsToRepay % 12 === 0 || balance <= 0.5) {
          schedule.push({
            year: currentYear + yearIdx - 1,
            openingBalance: Math.round(yearOpening),
            interestAndLedger: Math.round(yearIntLedger),
            principalPaid: Math.round(yearPrincipal),
            closingBalance: Math.round(balance),
          });
          yearOpening = balance;
          yearIntLedger = 0;
          yearPrincipal = 0;
          yearIdx++;
        }
      }
    }

    const yearsToRepay = Math.round((monthsToRepay / 12) * 10) / 10;
    const completionYear =
      monthsToRepay > 0 ? currentYear + Math.max(0, Math.ceil(monthsToRepay / 12) - 1) : currentYear;
    const totalPayable =
      currentBalance + Math.round(repaymentInterestTotal + repaymentLedgerTotal);

    return {
      loanAmount,
      yearsSinceBorrow,
      accruedInterest,
      accruedLedgerFees,
      defaultPenaltyTotal,
      currentBalance,
      monthlyObligation,
      monthsToRepay,
      yearsToRepay,
      completionYear,
      repaymentInterestTotal: Math.round(repaymentInterestTotal),
      repaymentLedgerTotal: Math.round(repaymentLedgerTotal),
      totalPayable,
      coversMonthlyCharges,
      schedule,
    };
  }, [loanAmount, yearBorrowed, grossSalary, defaultMonths]);

  const yearsList = useMemo(
    () => Array.from({ length: 20 }, (_, i) => currentYear - i),
    []
  );

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Total Loan Amount Borrowed (KES)"
        value={loanText}
        onChangeText={setLoanText}
        subtext="Sum of all HELB disbursements over your study period"
      />

      <Text style={styles.inputLabel}>Year First Borrowed ({yearBorrowed})</Text>
      <ExpandablePillRow contentContainerStyle={{ gap: 6, paddingBottom: 4 }}>
        {yearsList.map((yr) => (
          <Pressable
            key={yr}
            onPress={() => setYearBorrowed(yr)}
            style={[
              styles.pillBtn,
              yearBorrowed === yr && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                yearBorrowed === yr && styles.pillBtnTextActive,
              ]}
            >
              {yr}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput
        label="Monthly Gross Salary (KES)"
        value={salaryText}
        onChangeText={setSalaryText}
        subtext={`Statutory deduction is ${helbData.minimumSalaryPercent || 10}% of gross salary or min KES ${(helbData.minimumMonthly || 1500).toLocaleString()}`}
      />

      <Text style={styles.inputLabel}>
        Months in Default (Statutory KES 5,000 / mo penalty)
      </Text>
      <ExpandablePillRow contentContainerStyle={{ gap: 6, paddingBottom: 4 }}>
        {[0, 3, 6, 12, 24].map((m) => (
          <Pressable
            key={m}
            onPress={() => setDefaultMonths(m)}
            style={[
              styles.pillBtn,
              defaultMonths === m && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                defaultMonths === m && styles.pillBtnTextActive,
              ]}
            >
              {m === 0 ? "0 mos (Compliant)" : `${m} mos`}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <StatCard
        label="MONTHLY HELB REPAYMENT OBLIGATION"
        value={`KES ${results.monthlyObligation.toLocaleString()} / mo`}
        highlight
        subtext={
          results.coversMonthlyCharges
            ? `Payoff: ~${results.yearsToRepay} yrs (${results.monthsToRepay} mos) · Completion: ${results.completionYear}`
            : "Monthly repayment is too low to cover 4% interest + KES 1,000/yr ledger fee"
        }
      />

      <Text style={styles.subHeading}>Statutory Balance & Repayment Breakdown</Text>
      <View style={styles.card}>
        <Row
          label="Original Loan Principal"
          value={`KES ${results.loanAmount.toLocaleString()}`}
        />
        <Row
          label={`Accrued Interest (${helbData.interestRate || 4}% × ${results.yearsSinceBorrow} yrs)`}
          value={`+ KES ${results.accruedInterest.toLocaleString()}`}
          isDeduction
        />
        <Row
          label={`Annual Ledger Fee (KES 1,000/yr × ${results.yearsSinceBorrow} yrs)`}
          value={`+ KES ${results.accruedLedgerFees.toLocaleString()}`}
          isDeduction
        />
        <Row
          label={`Default Penalty (KES 5,000/mo × ${defaultMonths} mos)`}
          value={
            results.defaultPenaltyTotal > 0
              ? `+ KES ${results.defaultPenaltyTotal.toLocaleString()}`
              : "KES 0 (KES 5,000/mo if defaulted)"
          }
          isDeduction={results.defaultPenaltyTotal > 0}
        />
        <Row
          label="Estimated Current Balance"
          value={`KES ${results.currentBalance.toLocaleString()}`}
          isTotal
        />
        <Row
          label="Ongoing 4% Reducing-Balance Interest"
          value={`+ KES ${results.repaymentInterestTotal.toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Ongoing Ledger Fees (KES 1,000/yr)"
          value={`+ KES ${results.repaymentLedgerTotal.toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Total Amount Payable to Clear Loan"
          value={`KES ${results.totalPayable.toLocaleString()}`}
          isTotal
        />
        <Row
          label="Projected Completion Year"
          value={results.coversMonthlyCharges ? `${results.completionYear}` : "Increase repayment"}
          isPositive={results.coversMonthlyCharges}
        />
      </View>

      {results.schedule.length > 0 && (
        <>
          <Text style={styles.subHeading}>
            Annual Amortization Schedule (4% Reducing Balance + KES 1,000/yr Ledger)
          </Text>
          <View style={styles.card}>
            {results.schedule.slice(0, 10).map((row) => (
              <View
                key={row.year}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 7,
                  borderBottomWidth: 1,
                  borderBottomColor: theme.border,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12.5, fontWeight: "800", color: theme.gold }}>
                    {row.year}
                  </Text>
                  <Text style={{ fontSize: 10.5, color: theme.textMuted }}>
                    Int+Fee: KES {row.interestAndLedger.toLocaleString()} · Principal: KES {row.principalPaid.toLocaleString()}
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 10, color: theme.textMuted }}>Closing Bal</Text>
                  <Text style={{ fontSize: 12.5, fontWeight: "700", color: theme.textPrimary }}>
                    KES {row.closingBalance.toLocaleString()}
                  </Text>
                </View>
              </View>
            ))}
            {results.schedule.length > 10 && (
              <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 6 }}>
                Showing first 10 of {results.schedule.length} repayment years.
              </Text>
            )}
          </View>
        </>
      )}
    </View>
  );
}
