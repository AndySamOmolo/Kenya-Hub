import type { ToolCategory, Tool } from './types';

export const TOOL_CATEGORIES: { id: ToolCategory; name: string; icon: string; description: string; badgeClass: string }[] = [
  { id: 'language-learning', name: 'Languages, Proverbs & Culture', icon: '🗣️', description: 'Flagship interactive courses for 22 Kenyan languages, bidirectional translator, grammar references & oral wisdom', badgeClass: 'badge-reference' },
  { id: 'finance-tax', name: 'Finance, Tax & SACCOs', icon: '💰', description: '2026 PAYE reverse salary calculator, M-Pesa fees & split savings, SACCO loans, HELB & stamp duty', badgeClass: 'badge-finance' },
  { id: 'education-cbc', name: 'Education & CBC', icon: '🎓', description: 'CBC curriculum & grade-age mapper, KUCCPS degree cluster points & KCSE mean grade calculator', badgeClass: 'badge-education' },
  { id: 'transport-travel', name: 'Transport & Cars', icon: '🚗', description: 'KRA CRSP car import duty calculator, Kenyan number plate decoder & NTSA traffic fines lookup', badgeClass: 'badge-transport' },
  { id: 'business-investment', name: 'Construction & Mjengo', icon: '🏗️', description: 'Kenya Mjengo house construction material & BORAQS Bill of Quantities (BoQ) cost calculator', badgeClass: 'badge-business' },
  { id: 'utilities-energy', name: 'Utilities & Energy', icon: '⚡', description: 'KPLC prepaid electricity token calculator, appliance estimator & airtime protector', badgeClass: 'badge-utilities' },
  { id: 'government-legal', name: 'Government & Legal Rights', icon: '⚖️', description: 'Small claims court fees, tenant rights, domestic worker contracts & public services', badgeClass: 'badge-finance' },
  { id: 'health-wellness', name: 'Healthcare & SHA', icon: '🏥', description: 'Social Health Authority (SHA) benefit packages, hospital levels & co-pay tariffs', badgeClass: 'badge-education' },
];

export const TOOLS: Tool[] = [
  // ── 1. Languages, Proverbs & Culture (Flagship Main Feature — 2 tools) ──
  {
    slug: 'learn',
    title: 'Learn Kenyan Languages, Proverbs & Oral Wisdom Hub',
    shortTitle: 'Learn Kenyan Languages',
    description: 'Master 22 Kenyan languages through guided interactive lessons, flashcards, mini-games, grammar references, and historical oral wisdom (1842–1929).',
    category: 'language-learning',
    keywords: ['learn Kenyan languages', 'Kikuyu proverbs Thimo cia Gikuyu', 'Dholuo proverbs and riddles', 'Swahili Kikuyu Luo Luhya Kamba Kisii Maasai Kalenjin lessons'],
    updateFrequency: 'periodic',
    dataSource: 'Verified East African Linguistic Corpus & Unicode CLDR',
    isLive: true,
    icon: '🗣️',
  },
  {
    slug: 'kenyan-translator',
    title: 'Kenyan Languages Translator & Dictionary (22 Languages)',
    shortTitle: '22-Language Translator',
    description: 'Translate words and phrases across 22 Kenyan languages — Swahili, Kikuyu, Dholuo, Kalenjin, Luhya, Kamba, Meru, Maasai, Kisii, Somali, Turkana, Mijikenda, Ateso, Embu, Taita, Samburu, Borana, Rendille, Pokomo, Ilchamus, Pokot, and Taveta.',
    category: 'language-learning',
    keywords: ['Kenya language translator', 'Swahili Kikuyu Luo translator', 'Kenyan language dictionary', 'Kalenjin Kamba Maasai words'],
    updateFrequency: 'static',
    dataSource: 'Verified East African Lexicons & Community Dictionaries',
    isLive: true,
    icon: '🌍',
  },

  // ── 2. Finance, Tax & SACCOs (5 interactive calculators) ──
  {
    slug: 'paye-calculator',
    title: 'Kenya PAYE Salary Calculator 2026 (Gross ↔ Net, SHA, NSSF, Housing Levy & Pension)',
    shortTitle: 'PAYE & Net-to-Gross',
    description: 'Calculate 2026 net salary or reverse-negotiate gross salary from target net pay after KRA PAYE, SHA (2.75%), NSSF Year 4, Housing Levy (1.5%), pension & mortgage relief.',
    category: 'finance-tax',
    keywords: ['PAYE calculator Kenya 2026', 'net to gross calculator Kenya', 'Kenya salary after tax', 'KRA tax calculator', 'SHA NSSF housing levy calculator'],
    updateFrequency: 'annual',
    dataSource: 'Kenya Revenue Authority (KRA)',
    isLive: true,
    icon: '🧮',
  },
  {
    slug: 'mpesa-fee-calculator',
    title: 'M-Pesa Transaction & Withdrawal Fee Calculator 2026',
    shortTitle: 'M-Pesa Fee Calculator',
    description: 'Calculate exact 2026 M-Pesa charges for Send Money, Agent Withdrawal, PayBill, and Buy Goods — with built-in agent withdrawal fee adder and smart split savings.',
    category: 'finance-tax',
    keywords: ['mpesa charges calculator 2026', 'mpesa withdrawal fee calculator', 'mpesa tariff Kenya', 'safaricom mpesa withdrawal charges'],
    updateFrequency: 'annual',
    dataSource: 'Safaricom M-Pesa Tariff Schedule',
    isLive: true,
    icon: '📱',
  },
  {
    slug: 'sacco-chama-calculator',
    title: 'Kenya SACCO Loan (3x/4x Multiplier), Dividend & Chama Calculator',
    shortTitle: 'SACCO & Chama Loans',
    description: 'Calculate your 3x/4x BOSA deposit loan limit, 12% reducing-balance monthly repayments vs bank loans, net annual dividends after 5% WHT, and SASRA Tier-1 SACCO benchmarks.',
    category: 'finance-tax',
    keywords: ['SACCO loan calculator Kenya', 'Stima Mwalimu Police SACCO dividends', '12% reducing balance SACCO loan', 'Chama table banking calculator Kenya'],
    updateFrequency: 'annual',
    dataSource: 'SACCO Societies Regulatory Authority (SASRA)',
    isLive: true,
    icon: '🏦',
  },
  {
    slug: 'helb-calculator',
    title: 'HELB Loan Repayment Calculator Kenya',
    shortTitle: 'HELB Calculator',
    description: 'Calculate your HELB student loan balance, monthly repayment obligation, 4% annual interest, and projected completion date with full amortization breakdown.',
    category: 'finance-tax',
    keywords: ['HELB loan repayment calculator', 'HELB interest calculator Kenya', 'how much HELB do I owe', 'HELB balance check'],
    updateFrequency: 'annual',
    dataSource: 'HELB Act & Higher Education Loans Board',
    isLive: true,
    icon: '🎓',
  },
  {
    slug: 'stamp-duty-calculator',
    title: 'Kenya Stamp Duty & Property Transfer Cost Calculator',
    shortTitle: 'Stamp Duty Calculator',
    description: 'Calculate the total cost of buying or transferring land and property in Kenya — including 4% urban / 2% rural stamp duty, LSK conveyancing fees, and AHF exemptions.',
    category: 'finance-tax',
    keywords: ['stamp duty Kenya', 'property transfer cost Kenya', 'how much to transfer land Kenya', 'conveyancing fees Kenya'],
    updateFrequency: 'static',
    dataSource: 'Stamp Duty Act (Cap 480) & LSK Remuneration Order',
    isLive: true,
    icon: '🏠',
  },

  // ── 3. Education & CBC (3 interactive tools) ──
  {
    slug: 'cbc-curriculum',
    title: 'CBC Curriculum & Grade-Age Explorer — Grades PP1 to Grade 12 & Pathways',
    shortTitle: 'CBC & Grade-Age',
    description: 'Explore Kenya\'s Competency-Based Curriculum (CBC / CBE) from PP1 to Grade 12 with an integrated birth-year Grade-Age checker, KPSEA/KJSEA stages, Senior School pathways, and 8-4-4 equivalents.',
    category: 'education-cbc',
    keywords: ['CBC curriculum Kenya', 'CBC grade age Kenya', 'CBC subjects per grade', 'KICD curriculum', 'Grade 10 pathways Kenya'],
    updateFrequency: 'annual',
    dataSource: 'KICD & Ministry of Education',
    isLive: true,
    icon: '📚',
  },
  {
    slug: 'kuccps-cluster-calculator',
    title: 'KUCCPS Cluster Points Calculator 2026 — All 20 Degree Clusters',
    shortTitle: 'KUCCPS Calculator',
    description: 'Enter your KCSE subject grades and calculate weighted cluster points across all 20 KUCCPS degree clusters. Compare against university cutoff points and eligible courses.',
    category: 'education-cbc',
    keywords: ['KUCCPS cluster calculator', 'cluster points Kenya', 'how to calculate cluster points KUCCPS', 'university admission Kenya'],
    updateFrequency: 'annual',
    dataSource: 'KUCCPS Placement Service',
    isLive: true,
    icon: '🎯',
  },
  {
    slug: 'kcse-grade-calculator',
    title: 'KCSE Mean Grade & Career Eligibility Calculator',
    shortTitle: 'KCSE Calculator',
    description: 'Calculate your KCSE overall mean grade from 8 subjects (Best 7 + compulsory English). View KNEC point boundaries, KUCCPS degree eligibility, and career minimum requirements.',
    category: 'education-cbc',
    keywords: ['KCSE grade calculator', 'mean grade calculator Kenya', 'KNEC grading system', 'KCSE points calculator'],
    updateFrequency: 'static',
    dataSource: 'Kenya National Examinations Council (KNEC)',
    isLive: true,
    icon: '📝',
  },

  // ── 4. Transport & Cars (3 interactive tools) ──
  {
    slug: 'kra-car-import-calculator',
    title: 'KRA Car Import Duty & CRSP Calculator 2026 (Mombasa Port Clearing)',
    shortTitle: 'Car Import Duty (CRSP)',
    description: 'Calculate exact KRA motor vehicle import taxes from the official CRSP schedule — including up to 65% age depreciation (KEBS 8-year rule), Import Duty (35%), Excise, VAT (16%), IDF, RDL, and NTSA registration.',
    category: 'transport-travel',
    keywords: ['KRA car import duty calculator 2026', 'CRSP calculator Kenya', 'cost of importing a car from Japan to Kenya', 'KEBS 8 year rule Kenya'],
    updateFrequency: 'annual',
    dataSource: 'KRA CRSP Schedule & KEBS',
    isLive: true,
    icon: '🚢',
  },
  {
    slug: 'number-plate-decoder',
    title: 'Kenya Number Plate Decoder (KAA to KDU + Special Plates)',
    shortTitle: 'Plate Decoder',
    description: 'Decode any Kenyan vehicle registration number plate (KAA to KDU, plus GK, CG County Government, Diplomatic, EV green plates, and KM motorcycles) by year and series.',
    category: 'transport-travel',
    keywords: ['Kenya number plate meaning', 'KDU KDT KDS number plate year', 'Kenya car registration decoder', 'NTSA number plates'],
    updateFrequency: 'annual',
    dataSource: 'National Transport and Safety Authority (NTSA)',
    isLive: true,
    icon: '🚗',
  },
  {
    slug: 'traffic-fines',
    title: 'Kenya NTSA Traffic Fines & Demerit Points Reference',
    shortTitle: 'Traffic Fines',
    description: 'Searchable schedule of Kenyan traffic offences, instant minor traffic fines, court penalties, and NTSA demerit points under the Traffic Act (Cap 403).',
    category: 'transport-travel',
    keywords: ['NTSA fines Kenya 2026', 'traffic offence fines Kenya', 'speeding fine Kenya', 'demerit points Kenya'],
    updateFrequency: 'static',
    dataSource: 'Traffic Act (Cap 403) & NTSA',
    isLive: true,
    icon: '🚦',
  },

  // ── 5. Construction & Mjengo (1 flagship calculator) ──
  {
    slug: 'mjengo-construction-calculator',
    title: 'Kenya Mjengo (House Construction) Material & BoQ Cost Calculator 2026',
    shortTitle: 'Mjengo Cost Calculator',
    description: 'Estimate exact quantities of machine-cut stones (mawe), 50kg cement bags, river sand, ballast, Y12/Y16 steel bars, mabati roofing sheets, and BORAQS regional building costs per m².',
    category: 'business-investment',
    keywords: ['cost of building a 3 bedroom house in Kenya 2026', 'mjengo calculator Kenya', 'how many stones to build a 3 bedroom house', 'BORAQS construction cost per square metre Kenya'],
    updateFrequency: 'annual',
    dataSource: 'BORAQS, KNBS & National Construction Authority (NCA)',
    isLive: true,
    icon: '🧱',
  },

  // ── 6. Utilities & Energy (2 interactive calculators) ──
  {
    slug: 'kplc-token-calculator',
    title: 'KPLC Prepaid Electricity Token Calculator 2026 (EPRA Tariffs)',
    shortTitle: 'Token Calculator',
    description: 'Calculate exact KPLC prepaid electricity units (kWh) for any KES amount across Lifeline (0–30 kWh), Domestic Ordinary, and Small Commercial tariffs after EPRA levies and 16% VAT.',
    category: 'utilities-energy',
    keywords: ['KPLC units calculator Kenya', 'how many tokens for 1000 bob', 'electricity token calculator Kenya 2026', 'EPRA KPLC tariff'],
    updateFrequency: 'annual',
    dataSource: 'EPRA & Kenya Power (KPLC) Tariff Schedule',
    isLive: true,
    icon: '⚡',
  },
  {
    slug: 'water-bill-calculator',
    title: 'Kenya County Water Bill & Sewerage Estimator (WASREB Tariffs)',
    shortTitle: 'Water Bill Calculator',
    description: 'Estimate monthly water and sewerage charges across Nairobi (NCWSC), Mombasa (MAWASCO), Kisumu (KIWASCO), Nakuru (NAWASSCO), and Eldoret (ELDOWAS) using tiered block tariffs.',
    category: 'utilities-energy',
    keywords: ['Nairobi water bill calculator', 'NCWSC tariff rates', 'how much water bill Kenya', 'WASREB water charges'],
    updateFrequency: 'periodic',
    dataSource: 'WASREB & County Water Utilities',
    isLive: true,
    icon: '💧',
  },

  // ── 7. Social Health Authority, Legal Rights & Consumer Utilities (8 New Additions) ──
  {
    slug: 'sha-benefit-estimator',
    title: 'Social Health Authority (SHA / Taifa Care) Benefit & Hospital Explorer',
    shortTitle: 'SHA Health Benefits',
    description: 'Explore Level 2 to Level 6 hospital coverage, co-pay requirements, maternal Linda Mama replacements, and chronic illness packages under the Social Health Insurance Act 2024.',
    category: 'health-wellness',
    keywords: ['SHA hospital levels', 'SHIF benefit package', 'Linda Mama replacement', 'Level 4 5 6 hospital copay Kenya', 'Taifa care cancer dialysis coverage'],
    updateFrequency: 'annual',
    dataSource: 'Social Health Authority (SHA) Gazetted Tariffs & Benefit Packages 2024/2026',
    isLive: true,
    icon: '🏥',
  },
  {
    slug: 'small-claims-calculator',
    title: 'Small Claims Court (SCC) Jurisdiction & Filing Fee Assessment',
    shortTitle: 'Small Claims Court',
    description: 'Assess whether your civil, debt or deposit dispute qualifies for fast-track 60-day Small Claims Court under KES 1M, compute statutory filing fees, and view procedural guidelines.',
    category: 'government-legal',
    keywords: ['Small Claims Court filing fee Kenya', 'commercial debt recovery under 1M', 'unpaid rent deposit court Kenya', 'SCC civil claim fees'],
    updateFrequency: 'annual',
    dataSource: 'Judiciary of Kenya Small Claims Court Act (2016) & Court Fees Rules',
    isLive: true,
    icon: '⚖️',
  },
  {
    slug: 'ntsa-transfer-calculator',
    title: 'NTSA Motor Vehicle Transfer & Ownership Change Fee Calculator',
    shortTitle: 'NTSA Logbook Transfer',
    description: 'Calculate exact eCitizen NTSA transfer fees, motor vehicle purchase tax by engine capacity (cc), duplicate logbook, and reflective plate fees under the Traffic Act.',
    category: 'transport-travel',
    keywords: ['NTSA logbook transfer fee', 'motor vehicle purchase tax Kenya', 'car ownership change cost eCitizen', 'NTSA transfer charges by cc'],
    updateFrequency: 'annual',
    dataSource: 'National Transport and Safety Authority (NTSA) & Traffic Act Cap 403',
    isLive: true,
    icon: '🚘',
  },
  {
    slug: 'boma-yangu-calculator',
    title: 'Boma Yangu (AHP) Tenant Purchase & Housing Tax Relief Calculator',
    shortTitle: 'Boma Yangu Housing',
    description: 'Calculate monthly tenant purchase scheme repayments for Social, Affordable, and Mortgage units, plus the 15% Affordable Housing Tax Relief deductible on PAYE.',
    category: 'business-investment',
    keywords: ['Boma Yangu monthly repayment', 'Affordable Housing Programme calculator Kenya', 'Housing levy tax relief 15 percent', 'AHP tenant purchase scheme rates'],
    updateFrequency: 'annual',
    dataSource: 'Affordable Housing Act 2024 & Boma Yangu Statutory Portal',
    isLive: true,
    icon: '🏠',
  },
  {
    slug: 'rental-tax-calculator',
    title: 'Residential Rental Income Tax (7.5% MRI) vs Turnover Tax Calculator',
    shortTitle: 'Rental Income Tax',
    description: 'Compute monthly 7.5% gross rental tax (MRI), filing due dates (20th), late penalties, and compare with individual income tax brackets.',
    category: 'finance-tax',
    keywords: ['KRA monthly rental income tax 7.5', 'MRI tax calculator Kenya', 'landlord rental tax return', 'turnover tax vs rental tax'],
    updateFrequency: 'annual',
    dataSource: 'KRA Income Tax Act (Cap 470) & Finance Act 2023/2024',
    isLive: true,
    icon: '🏢',
  },
  {
    slug: 'landlord-tenant-rights',
    title: 'Kenyan Landlord-Tenant Rent Deposit Dispute & Statutory Demand Notice Generator',
    shortTitle: 'Rent Deposit & Rights',
    description: 'Evaluate unlawful lock-outs, deposit withholding, fair wear-and-tear deductions, and generate a formal statutory demand notice citing Kenyan tenancy law.',
    category: 'government-legal',
    keywords: ['landlord lock house illegal Kenya', 'rent deposit refund 30 days Kenya', 'Distress for Rent Act Kenya', 'tenant eviction notice rights'],
    updateFrequency: 'annual',
    dataSource: 'Rent Restriction Act (Cap 296), Distress for Rent Act (Cap 293) & Small Claims Court Precedents',
    isLive: true,
    icon: '🔑',
  },
  {
    slug: 'domestic-wage-calculator',
    title: 'Domestic Worker (Househelp) Gazetted Minimum Wage & Contract Generator',
    shortTitle: 'Househelp Wage & Contract',
    description: 'Calculate gazetted legal minimum wage by municipality (cities vs towns vs rural), SHA and NSSF deductions, and generate a compliant standard employment contract.',
    category: 'finance-tax',
    keywords: ['househelp minimum wage Kenya 2026', 'domestic worker salary Nairobi', 'househelp contract template Kenya', 'domestic worker NSSF SHA deductions'],
    updateFrequency: 'annual',
    dataSource: 'Ministry of Labour Regulation of Wages (General) (Amendment) Order (Legal Notice 108)',
    isLive: true,
    icon: '🧹',
  },
  {
    slug: 'airtime-drain-guide',
    title: 'Safaricom & Airtel Airtime Drain, Premium SMS & SIM Swap Lockout USSD Guide',
    shortTitle: 'Airtime Drain & SIM USSD',
    description: 'Instantly generate USSD dial codes to cancel hidden premium SMS billing, block promotional spam, and check all phone numbers linked to your National ID.',
    category: 'utilities-energy',
    keywords: ['stop Safaricom airtime deduction', 'unsubscribe premium SMS Kenya *100*5#', 'check registered numbers with my ID *106#', 'block SIM swap fraud Kenya'],
    updateFrequency: 'annual',
    dataSource: 'Communications Authority of Kenya (CA) Consumer Guidelines & MNO USSD Protocols',
    isLive: true,
    icon: '📱',
  },
  {
    slug: 'mobile-number-prefix',
    title: 'Kenya Mobile Number Prefix & Network Identifier (Safaricom, Airtel, Telkom, Equitel, Faiba)',
    shortTitle: 'Network Prefix Identifier',
    description: 'Instantly identify the mobile telecommunications network (Safaricom, Airtel, Telkom, Equitel, Faiba) for any Kenyan phone number or prefix (07xx, 01xx) under the CA National Numbering Plan.',
    category: 'utilities-energy',
    keywords: ['which network is 0799 Kenya', '0722 network Kenya', '0733 network Safaricom or Airtel', 'Kenya phone number prefix checker', '0110 Safaricom Airtel', 'Kenya mobile networks prefixes'],
    updateFrequency: 'annual',
    dataSource: 'Communications Authority of Kenya (CA) — National Numbering Plan',
    isLive: true,
    icon: '📞',
  },
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter(t => t.category === category);
}

const TOOL_USAGE_SCORES: Record<string, number> = {
  'learn': 105,
  'kenyan-translator': 102,
  'mpesa-fee-calculator': 100,
  'paye-calculator': 98,
  'kra-car-import-calculator': 97,
  'kplc-token-calculator': 96,
  'mjengo-construction-calculator': 95,
  'kcse-grade-calculator': 94,
  'kuccps-cluster-calculator': 93,
  'sacco-chama-calculator': 92,
  'helb-calculator': 90,
  'cbc-curriculum': 88,
  'mobile-number-prefix': 84,
  'number-plate-decoder': 82,
  'traffic-fines': 76,
  'stamp-duty-calculator': 65,
  'water-bill-calculator': 55,
};

export function getToolUsageScore(tool: Tool): number {
  return tool.usageScore ?? TOOL_USAGE_SCORES[tool.slug] ?? 0;
}

export function getPopularTools(count: number): Tool[] {
  return [...TOOLS]
    .sort((a, b) => getToolUsageScore(b) - getToolUsageScore(a) || a.shortTitle.localeCompare(b.shortTitle, undefined, {
      numeric: true,
      sensitivity: 'base',
    }))
    .slice(0, count);
}

export function getRelatedTools(slug: string, count: number = 4): Tool[] {
  const current = TOOLS.find(t => t.slug === slug);
  if (!current) return [];
  const sameCategory = TOOLS.filter(t => t.slug !== slug && t.category === current.category);
  const others = TOOLS.filter(t => t.slug !== slug && t.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}

export function getCategoryInfo(category: ToolCategory) {
  return TOOL_CATEGORIES.find(c => c.id === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
