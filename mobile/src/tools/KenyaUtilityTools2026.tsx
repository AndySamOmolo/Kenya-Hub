import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, triggerHaptic, type ThemeColors } from "../theme";
import utilData from "../shared/data/kenya-utility-tools-2026.json";
import { getContrastInk } from "../theme";

const EXEMPT_CATS = new Set(["Emoluments", "Imports", "Airline Tickets", "Investment Allowances", "Interest / Bank Fees"]);

// 1. eTIMS & M-Pesa Disallowed-Expense Shield
export function EtimsMpesaReconcilerTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [rows, setRows] = useState(() =>
    utilData.etims.sampleMpesaRows.map((r, i) => ({
      ...r,
      id: `m-${i}`,
      exempt: EXEMPT_CATS.has(r.category),
      matched: utilData.etims.sampleEtimsRows.some(
        (e) => Math.abs(e.amount - r.amount) <= 10 && e.date === r.date
      ),
    }))
  );
  const [name, setName] = useState("");
  const [amt, setAmt] = useState("");

  const summary = useMemo(() => {
    let matched = 0;
    let exempt = 0;
    let unreceipted = 0;
    for (const r of rows) {
      if (r.matched) matched += r.amount;
      else if (r.exempt) exempt += r.amount;
      else unreceipted += r.amount;
    }
    return { matched, exempt, unreceipted, penalty: Math.round(unreceipted * utilData.etims.corporateTaxPenaltyRate) };
  }, [rows]);

  const addLine = () => {
    const val = Number(amt.replace(/[^0-9]/g, ""));
    if (!name.trim() || !val) return;
    triggerHaptic(8);
    setRows((prev) => [
      { id: `m-${Date.now()}`, date: new Date().toISOString().slice(0, 10), ref: `MP${Math.floor(100000 + Math.random() * 899999)}`, counterparty: name.trim(), phone: "0700000000", amount: val, category: "Supplies", exempt: false, matched: false },
      ...prev,
    ]);
    setName("");
    setAmt("");
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.kpiRow}>
        <View style={[styles.kpiCard, { borderColor: `${theme.kenyaRedLight}66`, backgroundColor: `${theme.kenyaRedLight}18` }]}>
          <Text style={styles.kpiLabel}>30% TAX EXPOSURE</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaRedLight }]}>KES {summary.penalty.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>Unreceipted: KES {summary.unreceipted.toLocaleString()}</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>MATCHED + EXEMPT</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>KES {(summary.matched + summary.exempt).toLocaleString()}</Text>
          <Text style={styles.kpiSub}>Protected from 30% penalty</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Supplier name"
          placeholderTextColor={theme.textMuted}
          style={[styles.input, { flex: 1.5 }]}
        />
        <TextInput
          value={amt}
          onChangeText={(t) => setAmt(t.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
          placeholder="KES"
          placeholderTextColor={theme.textMuted}
          style={[styles.input, { flex: 1 }]}
        />
        <Pressable onPress={addLine} style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Add</Text>
        </Pressable>
      </View>

      {rows.map((r) => (
        <View key={r.id} style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 150 }}>
              <Text style={styles.cardTitle}>{r.counterparty}</Text>
              <Text style={styles.cardSub}>{r.date} • {r.ref} • {r.category}</Text>
            </View>
            <Text style={styles.amountText}>KES {r.amount.toLocaleString()}</Text>
          </View>
          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <Text style={{ fontSize: 11.5, fontWeight: "700", color: r.matched ? theme.kenyaGreenLight : r.exempt ? theme.sky : theme.kenyaRedLight }}>
              {r.matched ? "eTIMS Matched" : r.exempt ? "Statutory Exempt" : `+KES ${Math.round(r.amount * 0.3).toLocaleString()} Risk`}
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
              <Pressable
                onPress={() => { triggerHaptic(6); setRows((p) => p.map((x) => (x.id === r.id ? { ...x, matched: !x.matched } : x))); }}
                style={styles.chipBtn}
              >
                <Text style={styles.chipBtnText}>{r.matched ? "Unmatch" : "Mark eTIMS"}</Text>
              </Pressable>
              {!r.matched && (
                <Pressable
                  onPress={() => { triggerHaptic(6); setRows((p) => p.map((x) => (x.id === r.id ? { ...x, exempt: !x.exempt } : x))); }}
                  style={styles.chipBtn}
                >
                  <Text style={styles.chipBtnText}>{r.exempt ? "Unexempt" : "Exempt"}</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

// 2. ODPC Employer Compliance & Dual-Law Retention Engine
export function OdpcHrRetentionVaultTool() {
  const { theme, isDark, styles } = useDynamicStyles(createStyles);
  const [staff, setStaff] = useState("18");
  const [turnover, setTurnover] = useState("12000000");

  const audit = useMemo(() => {
    const s = Math.max(1, Number(staff) || 0);
    const t = Math.max(0, Number(turnover.replace(/[^0-9]/g, "")) || 0);
    const mandatory = s >= utilData.odpc.staffThreshold || t >= utilData.odpc.turnoverThresholdKes;
    // Data Protection Act 2019 s.63: lesser of KES 5,000,000 or 1% of annual turnover
    const maxFine = Math.min(5_000_000, Math.round(t * 0.01));
    return { mandatory, maxFine };
  }, [staff, turnover]);

  const warningColor = isDark ? "#FBBF24" : "#92400E";

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Staff Count</Text>
          <TextInput value={staff} onChangeText={(v) => setStaff(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1.4 }}>
          <Text style={styles.label}>Annual Turnover (KES)</Text>
          <TextInput value={turnover} onChangeText={(v) => setTurnover(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
      </View>

      <View style={styles.kpiRow}>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>ODPC REGISTRATION</Text>
          <Text style={styles.kpiValue}>{audit.mandatory ? "Mandatory" : "Below Threshold"}</Text>
          <Text style={styles.kpiSub}>10+ staff or &gt;KES 5M</Text>
        </View>
        <View style={[styles.kpiCard, { borderColor: `${theme.kenyaRedLight}66`, backgroundColor: `${theme.kenyaRedLight}18` }]}>
          <Text style={styles.kpiLabel}>MAX DPA s.63 FINE</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaRedLight }]}>KES {audit.maxFine.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>min(KES 5M, 1% turnover)</Text>
        </View>
      </View>

      {utilData.odpc.retentionRules.map((rule, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardTitle, { flexGrow: 1, flexShrink: 1, minWidth: 160 }]}>{rule.record}</Text>
            <Text style={{ fontSize: 11, fontWeight: "800", color: rule.action === "LOCK" ? theme.kenyaGreenLight : rule.action === "AUTO-PURGE" ? theme.kenyaRedLight : warningColor }}>
              {rule.action}
            </Text>
          </View>
          <Text style={styles.cardSub}>{rule.duration} • {rule.statute}</Text>
        </View>
      ))}
    </View>
  );
}

// 3. Offline EUDR Cooperative Polygon & GeoJSON Packager
export function EudrCoopGeojsonPackagerTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [ha, setHa] = useState("7.08");
  const [acc, setAcc] = useState("6.5");
  const [coordText, setCoordText] = useState(
    utilData.eudr.samplePolygonCoords.map(([lat, lon]) => `${lat}, ${lon}`).join("\n")
  );

  const check = useMemo(() => {
    const pts = coordText
      .split("\n")
      .map((l) => l.trim().split(/[,\s]+/).filter(Boolean).map(Number))
      .filter((p) => p.length >= 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]) && p[0] >= -90 && p[0] <= 90 && p[1] >= -180 && p[1] <= 180);
    const reqPoly = (Number(ha) || 0) >= utilData.eudr.polygonThresholdHa;
    const closed = pts.length >= 4 && Math.abs(pts[0][0] - pts[pts.length - 1][0]) < 1e-6 && Math.abs(pts[0][1] - pts[pts.length - 1][1]) < 1e-6;
    const gnssOk = (Number(acc) || 0) > 0 && (Number(acc) || 0) <= utilData.eudr.maxGnssAccuracyMeters;
    const ready = gnssOk && (reqPoly ? closed : pts.length >= 1);
    return { ptsCount: pts.length, reqPoly, closed, gnssOk, ready };
  }, [ha, acc, coordText]);

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Plot Size (Hectares)</Text>
          <TextInput value={ha} onChangeText={setHa} keyboardType="decimal-pad" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>GNSS Accuracy (m)</Text>
          <TextInput value={acc} onChangeText={setAcc} keyboardType="decimal-pad" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
      </View>
      <Text style={styles.label}>WGS84 Vertices (lat, lon per line)</Text>
      <TextInput
        value={coordText}
        onChangeText={setCoordText}
        multiline
        numberOfLines={5}
        style={[styles.input, { minHeight: 100, textAlignVertical: "top", fontFamily: "monospace" }]}
      />
      <View style={[styles.card, { borderColor: check.ready ? `${theme.kenyaGreenLight}66` : `${theme.kenyaRedLight}66` }]}>
        <Text style={[styles.cardTitle, { color: check.ready ? theme.kenyaGreenLight : theme.kenyaRedLight }]}>
          {check.ready ? "EU TRACES GeoJSON Ready" : "Validation Action Required"}
        </Text>
        <Text style={styles.cardSub}>
          Mode: {check.reqPoly ? "Closed Polygon (≥ 4 ha)" : "Single GPS Point (< 4 ha)"} • {check.ptsCount} vertices • GNSS: {check.gnssOk ? "OK (<10m)" : "Exceeds 10m"} • Ring: {check.closed ? "Closed" : "Open"}
        </Text>
      </View>
    </View>
  );
}

// 4. KRA iCMS Landed-Cost & Consolidator Arbitrage Engine
export function IcmsLandedCostArbitrageTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [fob, setFob] = useState("260000");
  const [freight, setFreight] = useState("55000");
  const [cbm, setCbm] = useState("1.5");
  const [dutyIdx, setDutyIdx] = useState(1);

  const calc = useMemo(() => {
    const f = Number(fob.replace(/[^0-9]/g, "")) || 0;
    const fr = Number(freight.replace(/[^0-9]/g, "")) || 0;
    const vol = Math.max(0.1, Number(cbm) || 0.1);
    const dutyRate = utilData.icms.hsPresets[dutyIdx]?.dutyRate ?? 0.25;
    const ins = Math.round((f + fr) * 0.015);
    const cif = f + fr + ins;
    const duty = Math.round(cif * dutyRate);
    const vat = Math.round((cif + duty) * utilData.icms.vatRate);
    const idf = Math.round(cif * utilData.icms.idfRate);
    const rdl = Math.round(cif * utilData.icms.rdlRate);
    const indep = cif + duty + vat + idf + rdl + utilData.icms.defaultClearingFeeKes;
    const cons = f + Math.round(vol * utilData.icms.seaConsolidatorRatePerCbmKes);
    return { indep, cons, spread: indep - cons, duty, vat, idf, rdl, vol };
  }, [fob, freight, cbm, dutyIdx]);

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>FOB Value (KES)</Text>
          <TextInput value={fob} onChangeText={(v) => setFob(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Freight (KES)</Text>
          <TextInput value={freight} onChangeText={(v) => setFreight(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 0.7 }}>
          <Text style={styles.label}>CBM</Text>
          <TextInput value={cbm} onChangeText={(v) => setCbm(v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))} keyboardType="decimal-pad" maxLength={8} style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {utilData.icms.hsPresets.map((p, i) => (
          <Pressable
            key={p.hs}
            onPress={() => { triggerHaptic(6); setDutyIdx(i); }}
            style={[styles.chipBtn, dutyIdx === i && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` }]}
          >
            <Text style={[styles.chipBtnText, dutyIdx === i && { color: theme.gold }]}>{Math.round(p.dutyRate * 100)}% ({p.hs})</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.kpiRow}>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>INDEPENDENT iCMS</Text>
          <Text style={styles.kpiValue}>KES {calc.indep.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>Duty+VAT+IDF+RDL+Clearing</Text>
        </View>
        <View style={[styles.kpiCard, { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}18` }]}>
          <Text style={styles.kpiLabel}>CONSOLIDATOR</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>KES {calc.cons.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>{calc.spread >= 0 ? `Saves KES ${calc.spread.toLocaleString()}` : `Direct saves KES ${Math.abs(calc.spread).toLocaleString()}`}</Text>
        </View>
      </View>

      {/* Live Practical Tip synced dynamically to formula (F-043) */}
      <View style={[styles.card, { borderColor: `${theme.gold}55` }]}>
        <Text style={[styles.kpiLabel, { color: theme.gold }]}>PRACTICAL TIP (LIVE ARBITRAGE)</Text>
        <Text style={styles.cardSub}>
          For {calc.vol} CBM at KES {Number(fob || 0).toLocaleString()} FOB, independent iCMS totals KES{" "}
          {calc.indep.toLocaleString()} vs KES {calc.cons.toLocaleString()} via sea consolidator — a{" "}
          KES {Math.abs(calc.spread).toLocaleString()}{" "}
          {calc.spread >= 0 ? "saving with consolidation" : "saving clearing directly under iCMS"}.
        </Text>
      </View>
    </View>
  );
}

// 5. SHA Provider Pre-Submission Claim Scrubber
const SHA_TRIGGERS = [
  { id: "tier", label: "Facility contract tier verified (sha.go.ke/contracted-facilities)", weight: 25 },
  { id: "keml", label: "Medicines verified on Kenya Essential Medicines List (KEML)", weight: 20 },
  { id: "mpesa", label: "Active status checked via *147# (no Paybill 200222 lag)", weight: 20 },
  { id: "preauth", label: "Pre-authorization code attached for procedures", weight: 15 },
  { id: "docs", label: "Discharge summary, itemized bill & biometric/OTP attached", weight: 15 },
  { id: "window", label: "Submitted within 30-day SHA statutory window", weight: 5 },
];

export function ShaClaimScrubberTool() {
  const { theme, isDark, styles } = useDynamicStyles(createStyles);
  const [checked, setChecked] = useState<Record<string, boolean>>({ tier: true, keml: true, mpesa: false, preauth: true, docs: false, window: true });
  const score = useMemo(() => SHA_TRIGGERS.reduce((s, t) => s + (checked[t.id] ? t.weight : 0), 0), [checked]);
  const uncheckedCount = useMemo(() => SHA_TRIGGERS.filter((t) => !checked[t.id]).length, [checked]);

  // WCAG AA light-mode amber warning contrast (#92400E on light, #FBBF24 on dark — F-044)
  const warningTextColor = isDark ? "#FBBF24" : "#92400E";
  const warningBorderColor = isDark ? "#F59E0B66" : "#92400E66";

  return (
    <View style={styles.wrap}>
      <View style={[styles.card, { borderColor: uncheckedCount === 0 ? `${theme.kenyaGreenLight}66` : score < 60 ? `${theme.kenyaRedLight}66` : warningBorderColor }]}>
        <Text style={styles.kpiLabel}>CLAIM READINESS SCORE</Text>
        <Text style={[styles.kpiValue, { color: uncheckedCount === 0 ? theme.kenyaGreenLight : score < 60 ? theme.kenyaRedLight : warningTextColor }]}>{score}/100</Text>
        <Text style={[styles.kpiSub, { color: uncheckedCount === 0 ? theme.textSecondary : score < 60 ? theme.kenyaRedLight : warningTextColor, fontWeight: uncheckedCount === 0 ? "400" : "700" }]}>
          {uncheckedCount === 0
            ? "Low Rejection Risk — Ready to Submit"
            : `⚠ Fix ${uncheckedCount} trigger(s) before submitting to SHA.`}
        </Text>
      </View>
      {SHA_TRIGGERS.map((t) => (
        <Pressable
          key={t.id}
          onPress={() => { triggerHaptic(6); setChecked((p) => ({ ...p, [t.id]: !p[t.id] })); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Ionicons name={checked[t.id] ? "checkbox" : "square-outline"} size={18} color={checked[t.id] ? theme.kenyaGreenLight : theme.textMuted} />
            <Text style={[styles.cardTitle, { flex: 1, marginLeft: 10 }]}>{t.label}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

// 6. PPRA & e-GP Tender Mandatory Requirements Compiler (MR1–MR11)
export function PpraEgpTenderSerializerTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [docs, setDocs] = useState(() =>
    utilData.ppra.mandatoryDocs.slice(0, 11).map((d) => ({ ...d, pages: d.defaultPages, included: true }))
  );

  const plan = useMemo(() => {
    let cursor = 1;
    const rows = docs.map((d) => {
      if (!d.included || d.pages <= 0) return { ...d, range: "Excluded" };
      const start = String(cursor).padStart(4, "0");
      const end = String(cursor + d.pages - 1).padStart(4, "0");
      cursor += d.pages;
      return { ...d, range: `${start}–${end}` };
    });
    return { rows, total: cursor - 1 };
  }, [docs]);

  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        <Text style={styles.kpiLabel}>TOTAL CONTINUOUS BATES RANGE (MR1–MR11)</Text>
        <Text style={[styles.kpiValue, { color: theme.gold }]}>{plan.total > 0 ? `0001 – ${String(plan.total).padStart(4, "0")} (${plan.total} pages)` : "No pages included (0 pages)"}</Text>
      </View>
      {plan.rows.map((r, idx) => (
        <Pressable
          key={r.code}
          onPress={() => { triggerHaptic(6); setDocs((p) => p.map((d, i) => (i === idx ? { ...d, included: !d.included } : d))); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Text style={{ fontWeight: "800", color: theme.gold, fontSize: 12 }}>{r.code}</Text>
            <Text style={{ fontWeight: "700", color: r.included ? theme.kenyaGreenLight : theme.kenyaRedLight, fontSize: 12 }}>{r.range}</Text>
          </View>
          <Text style={[styles.cardTitle, { marginTop: 4 }]}>{r.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

// 7. CBE Senior School Pathway & KJSEA 20-20-60 Diagnostic Simulator
export function KjseaPathwayEngineTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [kpsea, setKpsea] = useState("78");
  const [sba, setSba] = useState("82");
  const [kjsea, setKjsea] = useState("74");
  const [pathwayIdx, setPathwayIdx] = useState(0);

  const composite = useMemo(() => {
    const k6 = Math.min(100, Math.max(0, Number(kpsea) || 0));
    const s78 = Math.min(100, Math.max(0, Number(sba) || 0));
    const g9 = Math.min(100, Math.max(0, Number(kjsea) || 0));
    return Number((k6 * 0.2 + s78 * 0.2 + g9 * 0.6).toFixed(1));
  }, [kpsea, sba, kjsea]);

  const tier =
    utilData.kjsea.rubricTiers.find((t) => composite >= t.min) ||
    utilData.kjsea.rubricTiers[utilData.kjsea.rubricTiers.length - 1];
  const pathway = utilData.kjsea.pathways[pathwayIdx];

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>KPSEA (20%)</Text>
          <TextInput value={kpsea} onChangeText={(v) => setKpsea(v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))} keyboardType="decimal-pad" maxLength={6} style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>SBA (20%)</Text>
          <TextInput value={sba} onChangeText={(v) => setSba(v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))} keyboardType="decimal-pad" maxLength={6} style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>KJSEA (60%)</Text>
          <TextInput value={kjsea} onChangeText={(v) => setKjsea(v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))} keyboardType="decimal-pad" maxLength={6} style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.kpiLabel}>KNEC 20-20-60 COMPOSITE SCORE</Text>
        <Text style={[styles.kpiValue, { color: theme.gold }]}>{composite}% — {tier.code} ({tier.points}/8 pts)</Text>
        <Text style={styles.kpiSub}>{tier.label}</Text>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {utilData.kjsea.pathways.map((p, idx) => (
          <Pressable
            key={p.id}
            onPress={() => { triggerHaptic(6); setPathwayIdx(idx); }}
            style={[styles.chipBtn, pathwayIdx === idx && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` }]}
          >
            <Text style={[styles.chipBtnText, pathwayIdx === idx && { color: theme.gold }]}>{p.name} ({p.sharePct}%)</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Aligned KUCCPS Degree Clusters</Text>
        <Text style={styles.cardSub}>{pathway.kuccps.join(" • ")}</Text>
      </View>
    </View>
  );
}

// 8. Ardhisasa Root-of-Title Due Diligence & Sectional CAD Pre-Validator
const TITLE_CHECKS = [
  "Official Ardhisasa Title Search matches registered proprietor",
  "Green Card / Root-of-Title succession chain verified",
  "Kenya Gazette succession notices & Ndung'u Report checked",
  "Cassini-Soldner / ARC1960 to UTM Zone 37S datum verified",
  "NCA, EBK, BORAQS & ISK structural stage approvals verified",
];

export function ArdhisasaCadTitleAuditorTool() {
  const { theme, isDark, styles } = useDynamicStyles(createStyles);
  const [declaredSqm, setDeclaredSqm] = useState("2000");
  const [utmCoords, setUtmCoords] = useState("255410, 9857210\n255460, 9857210\n255460, 9857170\n255410, 9857170");
  const [checks, setChecks] = useState<boolean[]>([true, true, false, true, false]);
  const passed = checks.filter(Boolean).length;
  const warningTextColor = isDark ? "#FBBF24" : "#92400E";
  const areaAudit = useMemo(() => {
    const pts = utmCoords
      .split("\n")
      .map((l) => l.trim().split(/[,\s]+/).filter(Boolean).map(Number))
      .filter((p) => p.length >= 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]));
    let twiceArea = 0;
    if (pts.length >= 3) {
      for (let i = 0; i < pts.length; i++) {
        const j = (i + 1) % pts.length;
        twiceArea += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
      }
    }
    const computedSqm = Math.round(Math.abs(twiceArea) / 2);
    const decl = Math.max(0, Number(declaredSqm) || 0);
    const diffPct = decl > 0 && computedSqm > 0 ? Math.abs(computedSqm - decl) / decl * 100 : 0;
    return { ptsCount: pts.length, computedSqm, decl, diffPct };
  }, [utmCoords, declaredSqm]);

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Declared Title Area (m²)</Text>
          <TextInput value={declaredSqm} onChangeText={(v) => setDeclaredSqm(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={[styles.kpiCard, { flex: 1 }]}>
          <Text style={styles.kpiLabel}>DOSSIER SCORE</Text>
          <Text style={[styles.kpiValue, { color: passed === TITLE_CHECKS.length ? theme.kenyaGreenLight : warningTextColor }]}>{passed}/{TITLE_CHECKS.length}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.label}>UTM Zone 37S Coordinates (EASTING, NORTHING)</Text>
        <TextInput
          value={utmCoords}
          onChangeText={setUtmCoords}
          multiline
          numberOfLines={4}
          placeholder="255410, 9857210"
          placeholderTextColor={theme.textMuted}
          style={[styles.input, { minHeight: 84, textAlignVertical: "top", fontFamily: "monospace" }]}
        />
        {areaAudit.ptsCount >= 3 && (
          <Text style={{ fontSize: 12, marginTop: 6, color: areaAudit.diffPct <= 2 ? theme.kenyaGreenLight : warningTextColor }}>
            Computed UTM Polygon: {areaAudit.computedSqm.toLocaleString()} m² ({areaAudit.ptsCount} vertices) · Variance vs Declared: {areaAudit.diffPct.toFixed(1)}%
          </Text>
        )}
      </View>
      {TITLE_CHECKS.map((label, idx) => (
        <Pressable
          key={idx}
          onPress={() => { triggerHaptic(6); setChecks((p) => p.map((v, i) => (i === idx ? !v : v))); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Ionicons name={checks[idx] ? "checkbox" : "square-outline"} size={18} color={checks[idx] ? theme.kenyaGreenLight : theme.textMuted} />
            <Text style={[styles.cardTitle, { flex: 1, marginLeft: 10 }]}>{label}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

function createStyles(theme: ThemeColors) {
  return StyleSheet.create({
    wrap: { gap: 12 },
    label: { fontSize: 11, fontWeight: "700", color: theme.textMuted, marginBottom: 4, textTransform: "uppercase" },
    inputRow: { flexDirection: "row", gap: 8, alignItems: "flex-end" },
    input: {
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.bgCard,
      color: theme.text,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 13,
      fontWeight: "600",
    },
    primaryBtn: { backgroundColor: theme.gold, paddingHorizontal: 14, paddingVertical: 11, borderRadius: 12 },
    primaryBtnText: { color: getContrastInk(theme.gold), fontWeight: "800", fontSize: 12.5 },
    kpiRow: { flexDirection: "row", gap: 10 },
    kpiCard: { flex: 1, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgCard, borderRadius: 14, padding: 12 },
    kpiLabel: { fontSize: 10, fontWeight: "800", color: theme.textMuted, letterSpacing: 0.4 },
    kpiValue: { fontSize: 16, fontWeight: "900", color: theme.text, marginTop: 4 },
    kpiSub: { fontSize: 11, color: theme.textSecondary, marginTop: 2 },
    card: { borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgCard, borderRadius: 14, padding: 12 },
    rowBetween: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 },
    cardTitle: { fontSize: 13, fontWeight: "700", color: theme.text },
    cardSub: { fontSize: 11.5, color: theme.textSecondary, marginTop: 3 },
    amountText: { fontSize: 13.5, fontWeight: "800", color: theme.gold },
    chipBtn: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgElevated },
    chipBtnText: { fontSize: 11, fontWeight: "700", color: theme.textSecondary },
  });
}
