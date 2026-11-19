import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, triggerHaptic, type ThemeColors } from "../theme";
import utilData from "../shared/data/kenya-utility-tools-2026.json";

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
      { id: `m-${Date.now()}`, date: "2026-11-19", ref: `MP${Math.floor(100000 + Math.random() * 899999)}`, counterparty: name.trim(), phone: "0700000000", amount: val, category: "Supplies", exempt: false, matched: false },
      ...prev,
    ]);
    setName("");
    setAmt("");
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Reconcile M-Pesa Paybill/Till outflows locally against KRA eTIMS invoices to prevent the 30% corporate tax disallowed-expense penalty.
      </Text>
      <View style={styles.kpiRow}>
        <View style={[styles.kpiCard, { borderColor: "#EF444466", backgroundColor: "#EF444418" }]}>
          <Text style={styles.kpiLabel}>30% TAX EXPOSURE</Text>
          <Text style={[styles.kpiValue, { color: "#F87171" }]}>KES {summary.penalty.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>Unreceipted: KES {summary.unreceipted.toLocaleString()}</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>MATCHED + EXEMPT</Text>
          <Text style={[styles.kpiValue, { color: "#34D399" }]}>KES {(summary.matched + summary.exempt).toLocaleString()}</Text>
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
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{r.counterparty}</Text>
              <Text style={styles.cardSub}>{r.date} • {r.ref} • {r.category}</Text>
            </View>
            <Text style={styles.amountText}>KES {r.amount.toLocaleString()}</Text>
          </View>
          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <Text style={{ fontSize: 11.5, fontWeight: "700", color: r.matched ? "#34D399" : r.exempt ? "#38BDF8" : "#F87171" }}>
              {r.matched ? "eTIMS Matched" : r.exempt ? "Statutory Exempt" : `+KES ${Math.round(r.amount * 0.3).toLocaleString()} Risk`}
            </Text>
            <View style={{ flexDirection: "row", gap: 6 }}>
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
  const { theme, styles } = useDynamicStyles(createStyles);
  const [staff, setStaff] = useState("18");
  const [turnover, setTurnover] = useState("12000000");

  const audit = useMemo(() => {
    const s = Math.max(1, Number(staff) || 0);
    const t = Math.max(0, Number(turnover.replace(/[^0-9]/g, "")) || 0);
    const mandatory = s >= utilData.odpc.staffThreshold || t >= utilData.odpc.turnoverThresholdKes;
    const maxFine = Math.min(utilData.odpc.maxFineKes, Math.max(500000, Math.round(t * utilData.odpc.maxFineTurnoverPct)));
    return { mandatory, maxFine };
  }, [staff, turnover]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Balance Employment Act 2007 s.10(6) (5-year retention lock) against Data Protection Act 2019 deletion rules.
      </Text>
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
        <View style={[styles.kpiCard, { borderColor: "#EF444466", backgroundColor: "#EF444418" }]}>
          <Text style={styles.kpiLabel}>MAX STATUTORY FINE</Text>
          <Text style={[styles.kpiValue, { color: "#F87171" }]}>KES {audit.maxFine.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>+ KES 10,000/day default</Text>
        </View>
      </View>

      {utilData.odpc.retentionRules.map((rule, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardTitle, { flex: 1 }]}>{rule.record}</Text>
            <Text style={{ fontSize: 11, fontWeight: "800", color: rule.action === "LOCK" ? "#34D399" : rule.action === "AUTO-PURGE" ? "#F87171" : "#FBBF24" }}>
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
  const [ha, setHa] = useState("4.6");
  const [acc, setAcc] = useState("6.5");
  const [coordText, setCoordText] = useState(
    utilData.eudr.samplePolygonCoords.map(([lat, lon]) => `${lat}, ${lon}`).join("\n")
  );

  const check = useMemo(() => {
    const pts = coordText
      .split("\n")
      .map((l) => l.trim().split(/[,\s]+/).map(Number))
      .filter((p) => p.length >= 2 && !Number.isNaN(p[0]) && !Number.isNaN(p[1]));
    const reqPoly = (Number(ha) || 0) >= utilData.eudr.polygonThresholdHa;
    const closed = pts.length >= 4 && Math.abs(pts[0][0] - pts[pts.length - 1][0]) < 1e-6 && Math.abs(pts[0][1] - pts[pts.length - 1][1]) < 1e-6;
    const gnssOk = (Number(acc) || 0) > 0 && (Number(acc) || 0) <= utilData.eudr.maxGnssAccuracyMeters;
    const ready = gnssOk && (reqPoly ? closed : pts.length >= 1);
    return { ptsCount: pts.length, reqPoly, closed, gnssOk, ready };
  }, [ha, acc, coordText]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Validate coffee cooperative WGS84 geolocation polygons ahead of EUDR deadlines (Dec 30, 2026 large / Jun 30, 2027 small co-ops).
      </Text>
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
      <View style={[styles.card, { borderColor: check.ready ? "#34D39966" : "#EF444466" }]}>
        <Text style={[styles.cardTitle, { color: check.ready ? "#34D399" : "#F87171" }]}>
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
    return { indep, cons, spread: indep - cons, duty, vat, idf, rdl };
  }, [fob, freight, cbm, dutyIdx]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Compare cascading KRA iCMS customs taxes against all-in China-to-Kenya sea consolidator rates (KES 65,000/CBM).
      </Text>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>FOB Value (KES)</Text>
          <TextInput value={fob} onChangeText={(v) => setFob(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Volume (CBM)</Text>
          <TextInput value={cbm} onChangeText={setCbm} keyboardType="decimal-pad" style={styles.input} placeholderTextColor={theme.textMuted} />
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
        <View style={[styles.kpiCard, { borderColor: "#34D39966", backgroundColor: "#34D39918" }]}>
          <Text style={styles.kpiLabel}>CONSOLIDATOR</Text>
          <Text style={[styles.kpiValue, { color: "#34D399" }]}>KES {calc.cons.toLocaleString()}</Text>
          <Text style={styles.kpiSub}>{calc.spread >= 0 ? `Saves KES ${calc.spread.toLocaleString()}` : `Direct saves KES ${Math.abs(calc.spread).toLocaleString()}`}</Text>
        </View>
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
  const { theme, styles } = useDynamicStyles(createStyles);
  const [checked, setChecked] = useState<Record<string, boolean>>({ tier: true, keml: true, mpesa: false, preauth: true, docs: false, window: true });
  const score = useMemo(() => SHA_TRIGGERS.reduce((s, t) => s + (checked[t.id] ? t.weight : 0), 0), [checked]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Scrub Level 3–5 clinic SHA claims across 6 pre-discharge triggers to eliminate the ~20% rejection rate.
      </Text>
      <View style={[styles.card, { borderColor: score >= 90 ? "#34D39966" : "#F59E0B66" }]}>
        <Text style={styles.kpiLabel}>CLAIM READINESS SCORE</Text>
        <Text style={[styles.kpiValue, { color: score >= 90 ? "#34D399" : "#FBBF24" }]}>{score}/100</Text>
        <Text style={styles.kpiSub}>{score >= 90 ? "Low Rejection Risk — Ready to Submit" : "Resolve unchecked triggers before SHA submission"}</Text>
      </View>
      {SHA_TRIGGERS.map((t) => (
        <Pressable
          key={t.id}
          onPress={() => { triggerHaptic(6); setChecked((p) => ({ ...p, [t.id]: !p[t.id] })); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Ionicons name={checked[t.id] ? "checkbox" : "square-outline"} size={18} color={checked[t.id] ? "#34D399" : theme.textMuted} />
            <Text style={[styles.cardTitle, { flex: 1, marginLeft: 10 }]}>{t.label}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

// 6. PPRA & e-GP Tender Mandatory Requirements Compiler
export function PpraEgpTenderSerializerTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [docs, setDocs] = useState(() =>
    utilData.ppra.mandatoryDocs.map((d) => ({ ...d, pages: d.defaultPages, included: true }))
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
      <Text style={styles.desc}>
        Verify Preliminary Mandatory Stage (MR1–MR11) documents and compute continuous ITT 20.3 Bates page ranges for e-gp.go.ke.
      </Text>
      <View style={styles.card}>
        <Text style={styles.kpiLabel}>TOTAL CONTINUOUS BATES RANGE</Text>
        <Text style={[styles.kpiValue, { color: theme.gold }]}>0001 – {String(Math.max(1, plan.total)).padStart(4, "0")} ({plan.total} pages)</Text>
      </View>
      {plan.rows.map((r, idx) => (
        <Pressable
          key={r.code}
          onPress={() => { triggerHaptic(6); setDocs((p) => p.map((d, i) => (i === idx ? { ...d, included: !d.included } : d))); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Text style={{ fontWeight: "800", color: theme.gold, fontSize: 12 }}>{r.code}</Text>
            <Text style={{ fontWeight: "700", color: r.included ? "#34D399" : "#F87171", fontSize: 12 }}>{r.range}</Text>
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
    utilData.kjsea.rubricTiers.find((t) => composite >= t.min && composite <= t.max) ||
    utilData.kjsea.rubricTiers[utilData.kjsea.rubricTiers.length - 1];
  const pathway = utilData.kjsea.pathways[pathwayIdx];

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Calculate KNEC Grade 9 composite placement scores (20% KPSEA + 20% SBA + 60% KJSEA) and match Senior School pathways &amp; KUCCPS degree clusters.
      </Text>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>KPSEA (20%)</Text>
          <TextInput value={kpsea} onChangeText={setKpsea} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>SBA (20%)</Text>
          <TextInput value={sba} onChangeText={setSba} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>KJSEA (60%)</Text>
          <TextInput value={kjsea} onChangeText={setKjsea} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
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
  const { theme, styles } = useDynamicStyles(createStyles);
  const [declaredSqm, setDeclaredSqm] = useState("2000");
  const [checks, setChecks] = useState<boolean[]>([true, true, false, true, false]);
  const passed = checks.filter(Boolean).length;

  return (
    <View style={styles.wrap}>
      <Text style={styles.desc}>
        Audit parcel area tolerance, GIS datum alignment, Root-of-Title succession chain, and NCA/EBK/BORAQS/ISK compliance before Ardhisasa upload.
      </Text>
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Declared Title Area (m²)</Text>
          <TextInput value={declaredSqm} onChangeText={(v) => setDeclaredSqm(v.replace(/[^0-9]/g, ""))} keyboardType="numeric" style={styles.input} placeholderTextColor={theme.textMuted} />
        </View>
        <View style={[styles.kpiCard, { flex: 1 }]}>
          <Text style={styles.kpiLabel}>DOSSIER SCORE</Text>
          <Text style={[styles.kpiValue, { color: passed === TITLE_CHECKS.length ? "#34D399" : "#FBBF24" }]}>{passed}/{TITLE_CHECKS.length}</Text>
        </View>
      </View>
      {TITLE_CHECKS.map((label, idx) => (
        <Pressable
          key={idx}
          onPress={() => { triggerHaptic(6); setChecks((p) => p.map((v, i) => (i === idx ? !v : v))); }}
          style={styles.card}
        >
          <View style={styles.rowBetween}>
            <Ionicons name={checks[idx] ? "checkbox" : "square-outline"} size={18} color={checks[idx] ? "#34D399" : theme.textMuted} />
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
    desc: { fontSize: 13, color: theme.textSecondary, lineHeight: 19 },
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
    primaryBtnText: { color: "#000", fontWeight: "800", fontSize: 12.5 },
    kpiRow: { flexDirection: "row", gap: 10 },
    kpiCard: { flex: 1, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgCard, borderRadius: 14, padding: 12 },
    kpiLabel: { fontSize: 10, fontWeight: "800", color: theme.textMuted, letterSpacing: 0.4 },
    kpiValue: { fontSize: 16, fontWeight: "900", color: theme.text, marginTop: 4 },
    kpiSub: { fontSize: 11, color: theme.textSecondary, marginTop: 2 },
    card: { borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgCard, borderRadius: 14, padding: 12 },
    rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    cardTitle: { fontSize: 13, fontWeight: "700", color: theme.text },
    cardSub: { fontSize: 11.5, color: theme.textSecondary, marginTop: 3 },
    amountText: { fontSize: 13.5, fontWeight: "800", color: theme.gold },
    chipBtn: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.bgElevated },
    chipBtnText: { fontSize: 11, fontWeight: "700", color: theme.textSecondary },
  });
}
