#!/usr/bin/env bash
set -euo pipefail

APP_ID="ke.co.kenyahub.app"
APK_PATH="${APK_PATH:-mobile/android/app/build/outputs/apk/release/app-release.apk}"
OUT_DIR="android-audit-artifacts"
SCREEN_DIR="${OUT_DIR}/screenshots"
UI_DUMP_DIR="${OUT_DIR}/ui-dumps"
SUMMARY_MD="${OUT_DIR}/audit-summary.md"
LOGCAT_ERRORS="${OUT_DIR}/logcat-errors.txt"
LOGCAT_FULL="${OUT_DIR}/logcat-full.txt"

mkdir -p "${SCREEN_DIR}" "${UI_DUMP_DIR}"

if [[ ! -f "${APK_PATH}" ]]; then
  echo "ERROR: APK not found at ${APK_PATH}"
  exit 1
fi

adb wait-for-device
until [[ "$(adb shell getprop sys.boot_completed | tr -d '\r')" == "1" ]]; do
  sleep 2
done
sleep 5

# Clean status bar via Demo Mode for crisp, consistent screenshots
adb shell settings put global sysui_demo_allowed 1 || true
adb shell am broadcast -a com.android.systemui.demo -e command enter || true
adb shell am broadcast -a com.android.systemui.demo -e command clock -e hhmm 1200 || true
adb shell am broadcast -a com.android.systemui.demo -e command battery -e level 100 -e plugged false || true
adb shell am broadcast -a com.android.systemui.demo -e command network -e wifi show -e level 4 || true
adb shell am broadcast -a com.android.systemui.demo -e command notifications -e visible false || true

echo "Installing APK: ${APK_PATH}"
adb install -r "${APK_PATH}"

# Clear logcat before launch
adb logcat -c

# Cold launch
adb shell monkey -p "${APP_ID}" -c android.intent.category.LAUNCHER 1 >/dev/null 2>&1
sleep 8

cat > "${SUMMARY_MD}" <<'EOF'
# KenyaHub Android Comprehensive Visual & Zero-Error Audit

| Theme | Label | Deep Link URI | Status | Process Alive | UI Anomaly Check | Screenshot |
| --- | --- | --- | --- | --- | --- | --- |
EOF

TOTAL_CHECKS=0
FAILED_CHECKS=0

capture_and_check() {
  local mode="$1"
  local label="$2"
  local uri="$3"
  local do_scroll="${4:-no}"
  local check_ui="${5:-yes}"

  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  echo ">>> [${mode}] ${label} (${uri})"

  # Clear per-step logcat marker
  adb logcat -c || true

  adb shell am start -W -a android.intent.action.VIEW -d "${uri}" "${APP_ID}" >/dev/null 2>&1 || true
  sleep 3

  # 1. Process alive check
  local pid
  pid="$(adb shell pidof "${APP_ID}" | tr -d '\r' || true)"
  local alive_status="OK (${pid})"
  local step_failed=0

  if [[ -z "${pid}" ]]; then
    alive_status="CRASHED"
    step_failed=1
    echo "  [FAIL] Process crashed on ${uri}"
  fi

  # 2. Capture screenshot (top)
  local top_png="${mode}_${label}_top.png"
  adb exec-out screencap -p > "${SCREEN_DIR}/${top_png}"

  # 3. Inspect UI accessibility hierarchy for ErrorBoundary / NaN / Unhandled Error text
  local ui_status="OK"
  if [[ "${check_ui}" == "yes" && -n "${pid}" ]]; then
    local dump_xml="${UI_DUMP_DIR}/${mode}_${label}.xml"
    if adb shell uiautomator dump /sdcard/window_dump.xml >/dev/null 2>&1; then
      adb pull /sdcard/window_dump.xml "${dump_xml}" >/dev/null 2>&1 || true
      if [[ -f "${dump_xml}" ]]; then
        if grep -Eiq "Something went wrong|Rendered more hooks|TypeError:|ReferenceError:|Unhandled JS Exception|Application error|Error Boundary" "${dump_xml}"; then
          ui_status="ERROR_TEXT_DETECTED"
          step_failed=1
          echo "  [FAIL] Error boundary/JS error text detected on screen for ${uri}"
        elif grep -Eq 'text="[^"]*\bNaN\b[^"]*"' "${dump_xml}"; then
          ui_status="NAN_DETECTED"
          step_failed=1
          echo "  [FAIL] NaN text detected on screen for ${uri}"
        fi
        rm -f "${dump_xml}"
      fi
    fi
  fi

  # 4. Check per-step logcat for JS/Native crashes
  local step_log
  step_log="$(adb logcat -d -s ReactNativeJS:E AndroidRuntime:E 2>/dev/null || true)"
  if echo "${step_log}" | grep -Eq "FATAL EXCEPTION|ReactNativeJS.*Error|Rendered more hooks|Uncaught"; then
    echo "=== [${mode}] ${label} (${uri}) ===" >> "${LOGCAT_ERRORS}"
    echo "${step_log}" >> "${LOGCAT_ERRORS}"
    echo "" >> "${LOGCAT_ERRORS}"
    ui_status="${ui_status}+LOGCAT_ERR"
    step_failed=1
    echo "  [FAIL] Logcat error recorded for ${uri}"
  fi

  # Append full step log for debugging
  echo "=== [${mode}] ${label} (${uri}) ===" >> "${LOGCAT_FULL}"
  adb logcat -d -s ReactNativeJS:I ReactNativeJS:W ReactNativeJS:E AndroidRuntime:E 2>/dev/null >> "${LOGCAT_FULL}" || true

  # 5. Optional scrolled screenshot for tall screens
  if [[ "${do_scroll}" == "yes" && -n "${pid}" ]]; then
    adb shell input swipe 540 1750 540 500 350 || true
    sleep 2
    adb exec-out screencap -p > "${SCREEN_DIR}/${mode}_${label}_scrolled.png"
  fi

  # Recover if crashed so remaining routes still get audited
  if [[ -z "${pid}" ]]; then
    adb shell monkey -p "${APP_ID}" -c android.intent.category.LAUNCHER 1 >/dev/null 2>&1 || true
    sleep 5
  fi

  local row_status="PASS"
  if [[ "${step_failed}" -ne 0 ]]; then
    row_status="FAIL"
    FAILED_CHECKS=$((FAILED_CHECKS + 1))
  fi

  echo "| ${mode} | ${label} | \`${uri}\` | ${row_status} | ${alive_status} | ${ui_status} | \`${top_png}\` |" >> "${SUMMARY_MD}"
}

: > "${LOGCAT_ERRORS}"
: > "${LOGCAT_FULL}"

# All 9 core screens + ALL 33/33 tools
ROUTES=(
  # Core Tabs & Detail Screens
  "00_core_home|kenyahub://|yes|yes"
  "01_core_tools|kenyahub://tools|yes|yes"
  "02_core_learn|kenyahub://learn|yes|yes"
  "03_core_matatu|kenyahub://matatu|yes|yes"
  "04_core_matatu_route|kenyahub://matatu/route-2-cbd-karen|no|yes"
  "05_core_county|kenyahub://county|no|yes"
  "06_core_county_nairobi|kenyahub://county/nairobi|yes|yes"
  "07_core_county_mombasa|kenyahub://county/mombasa|no|yes"
  "08_core_saved|kenyahub://saved|no|yes"

  # All 33 Tools
  "tool_01_airtime-drain-guide|kenyahub://tools/airtime-drain-guide|no|yes"
  "tool_02_ardhisasa-cad-title-auditor|kenyahub://tools/ardhisasa-cad-title-auditor|no|yes"
  "tool_03_boma-yangu-calculator|kenyahub://tools/boma-yangu-calculator|no|yes"
  "tool_04_cbc-curriculum|kenyahub://tools/cbc-curriculum|no|yes"
  "tool_05_domestic-wage-calculator|kenyahub://tools/domestic-wage-calculator|no|yes"
  "tool_06_etims-mpesa-reconciler|kenyahub://tools/etims-mpesa-reconciler|no|yes"
  "tool_07_eudr-coop-geojson-packager|kenyahub://tools/eudr-coop-geojson-packager|no|yes"
  "tool_08_helb-calculator|kenyahub://tools/helb-calculator|no|yes"
  "tool_09_icms-landed-cost-arbitrage|kenyahub://tools/icms-landed-cost-arbitrage|no|yes"
  "tool_10_kcse-grade-calculator|kenyahub://tools/kcse-grade-calculator|no|yes"
  "tool_11_kenyan-translator|kenyahub://tools/kenyan-translator|yes|yes"
  "tool_12_kjsea-pathway-engine|kenyahub://tools/kjsea-pathway-engine|no|yes"
  "tool_13_kplc-token-calculator|kenyahub://tools/kplc-token-calculator|yes|yes"
  "tool_14_kra-car-import-calculator|kenyahub://tools/kra-car-import-calculator|no|yes"
  "tool_15_kuccps-cluster-calculator|kenyahub://tools/kuccps-cluster-calculator|no|yes"
  "tool_16_landlord-tenant-rights|kenyahub://tools/landlord-tenant-rights|no|yes"
  "tool_17_learn|kenyahub://tools/learn|no|yes"
  "tool_18_mjengo-construction-calculator|kenyahub://tools/mjengo-construction-calculator|no|yes"
  "tool_19_mobile-number-prefix|kenyahub://tools/mobile-number-prefix|no|yes"
  "tool_20_mpesa-fee-calculator|kenyahub://tools/mpesa-fee-calculator|yes|yes"
  "tool_21_ntsa-transfer-calculator|kenyahub://tools/ntsa-transfer-calculator|no|yes"
  "tool_22_number-plate-decoder|kenyahub://tools/number-plate-decoder|no|yes"
  "tool_23_odpc-hr-retention-vault|kenyahub://tools/odpc-hr-retention-vault|no|yes"
  "tool_24_paye-calculator|kenyahub://tools/paye-calculator|yes|yes"
  "tool_25_ppra-egp-tender-serializer|kenyahub://tools/ppra-egp-tender-serializer|no|yes"
  "tool_26_rental-tax-calculator|kenyahub://tools/rental-tax-calculator|no|yes"
  "tool_27_sacco-chama-calculator|kenyahub://tools/sacco-chama-calculator|no|yes"
  "tool_28_sha-benefit-estimator|kenyahub://tools/sha-benefit-estimator|no|yes"
  "tool_29_sha-claim-scrubber|kenyahub://tools/sha-claim-scrubber|no|yes"
  "tool_30_small-claims-calculator|kenyahub://tools/small-claims-calculator|no|yes"
  "tool_31_stamp-duty-calculator|kenyahub://tools/stamp-duty-calculator|no|yes"
  "tool_32_traffic-fines|kenyahub://tools/traffic-fines|no|yes"
  "tool_33_water-bill-calculator|kenyahub://tools/water-bill-calculator|no|yes"
)

for mode in light dark; do
  if [[ "${mode}" == "dark" ]]; then
    adb shell cmd uimode night yes || true
  else
    adb shell cmd uimode night no || true
  fi
  sleep 3

  for entry in "${ROUTES[@]}"; do
    IFS="|" read -r label uri do_scroll check_ui <<< "${entry}"
    capture_and_check "${mode}" "${label}" "${uri}" "${do_scroll}" "${check_ui}"
  done
done

# Live Theme Switch Stress Test (Dark -> Light -> Dark on Home)
echo ">>> Live Theme Switch Stress Test"
adb shell am start -W -a android.intent.action.VIEW -d "kenyahub://" "${APP_ID}" >/dev/null 2>&1 || true
sleep 2
adb shell cmd uimode night no || true
sleep 2
adb exec-out screencap -p > "${SCREEN_DIR}/stress_switch_to_light.png"
adb shell cmd uimode night yes || true
sleep 2
adb exec-out screencap -p > "${SCREEN_DIR}/stress_switch_to_dark.png"

SCREEN_COUNT="$(ls -1 "${SCREEN_DIR}"/*.png 2>/dev/null | wc -l)"
cat >> "${SUMMARY_MD}" <<EOF

## Summary
- **Total route checks:** ${TOTAL_CHECKS} (42 routes × Light & Dark)
- **Passed:** $((TOTAL_CHECKS - FAILED_CHECKS))
- **Failed:** ${FAILED_CHECKS}
- **Total screenshots captured:** ${SCREEN_COUNT}
EOF

echo "Finished Android audit: ${TOTAL_CHECKS} checks, ${FAILED_CHECKS} failed, ${SCREEN_COUNT} screenshots."

if [[ "${FAILED_CHECKS}" -gt 0 ]]; then
  echo "Android audit failed with ${FAILED_CHECKS} failing checks. See ${SUMMARY_MD} and ${LOGCAT_ERRORS}."
  exit 1
fi
