import { ToolCategory, Tool } from './types';

export const TOOL_CATEGORIES: { id: ToolCategory; name: string; icon: string; description: string; badgeClass: string }[] = [
  { id: 'finance-tax', name: 'Finance & Tax', icon: '💰', description: 'Salary calculators, tax tools, and financial guides', badgeClass: 'badge-finance' },
  { id: 'education-cbc', name: 'Education & CBC', icon: '🎓', description: 'CBC curriculum, KUCCPS clusters, exam calculators', badgeClass: 'badge-education' },
  { id: 'utilities-energy', name: 'Utilities & Energy', icon: '⚡', description: 'Power outages, token calculators, fuel prices', badgeClass: 'badge-utilities' },
  { id: 'government-legal', name: 'Government & Legal', icon: '🏛️', description: 'Tenders, public holidays, government services', badgeClass: 'badge-government' },
  { id: 'transport-travel', name: 'Transport & Travel', icon: '🚌', description: 'Number plates, matatu routes, distances', badgeClass: 'badge-transport' },
  { id: 'health-wellness', name: 'Health & Wellness', icon: '🏥', description: 'NHIF hospitals, vaccination schedules', badgeClass: 'badge-health' },
  { id: 'business-investment', name: 'Business & Investment', icon: '📊', description: 'Registration costs, SACCO directory', badgeClass: 'badge-business' },
  { id: 'data-reference', name: 'Data & Reference', icon: '📍', description: 'Postal codes, phone prefixes, demographics', badgeClass: 'badge-reference' },
  { id: 'agriculture-environment', name: 'Agriculture & Environment', icon: '🌾', description: 'Crop calendars, soil types, livestock prices', badgeClass: 'badge-agriculture' },
];

export const TOOLS: Tool[] = [
  {
    slug: 'paye-calculator',
    title: 'Kenya PAYE Salary Calculator 2025/2026',
    shortTitle: 'PAYE Calculator',
    description: 'Calculate your net salary after PAYE tax, NHIF, NSSF, and Housing Levy deductions. Uses the latest KRA FY 2024/25 tax bands with itemized breakdown.',
    category: 'finance-tax',
    keywords: ['PAYE calculator Kenya 2025', 'net salary Kenya', 'Kenya salary after tax', 'KRA tax calculator'],
    updateFrequency: 'annual',
    dataSource: 'Kenya Revenue Authority (KRA)',
    isLive: true,
    icon: '🧮',
  },
  {
    slug: 'mpesa-fee-calculator',
    title: 'M-Pesa Transaction Fee Calculator',
    shortTitle: 'M-Pesa Fees',
    description: 'Calculate exact M-Pesa fees for any transaction type. Includes smart "cheapest threshold" analysis showing when splitting transactions saves money.',
    category: 'finance-tax',
    keywords: ['mpesa charges calculator', 'mpesa tariff Kenya', 'how much does mpesa charge', 'safaricom charges'],
    updateFrequency: 'static',
    dataSource: 'Safaricom M-Pesa Tariff Schedule',
    isLive: true,
    icon: '📱',
  },
  {
    slug: 'cbc-curriculum',
    title: 'CBC Curriculum Explorer — Grades PP1 to 12',
    shortTitle: 'CBC Curriculum',
    description: 'Explore the complete Competency-Based Curriculum (CBC) structure. Find learning areas, strands, and sub-strands for every grade level from PP1 through Senior Secondary.',
    category: 'education-cbc',
    keywords: ['CBC curriculum Kenya', 'CBC learning areas', 'CBC subjects per grade', 'KICD curriculum'],
    updateFrequency: 'static',
    dataSource: 'Kenya Institute of Curriculum Development (KICD)',
    isLive: true,
    icon: '📚',
  },
  {
    slug: 'cbc-grade-age',
    title: 'CBC Grade & Age Checker',
    shortTitle: 'Grade-Age Checker',
    description: 'Enter your child\'s date of birth to find their correct CBC grade level, the 8-4-4 equivalent, expected learning areas, and upcoming milestones.',
    category: 'education-cbc',
    keywords: ['CBC grade age Kenya', 'what grade is my child CBC', 'PP1 PP2 age Kenya'],
    updateFrequency: 'static',
    dataSource: 'Ministry of Education / KICD',
    isLive: true,
    icon: '👶',
  },
  {
    slug: 'kuccps-cluster-calculator',
    title: 'KUCCPS Cluster Points Calculator 2025',
    shortTitle: 'KUCCPS Calculator',
    description: 'Enter your KCSE grades and instantly calculate cluster points for all university course clusters. Find which courses and universities you qualify for.',
    category: 'education-cbc',
    keywords: ['KUCCPS cluster calculator', 'cluster points Kenya', 'how to calculate cluster points KUCCPS', 'university admission Kenya'],
    updateFrequency: 'annual',
    dataSource: 'Kenya Universities and Colleges Central Placement Service (KUCCPS)',
    isLive: true,
    icon: '🎯',
  },
  {
    slug: 'kcse-grade-calculator',
    title: 'KCSE Mean Grade Calculator',
    shortTitle: 'KCSE Calculator',
    description: 'Calculate your KCSE mean grade from individual subject grades. See grade boundaries, career requirements, and university admission eligibility.',
    category: 'education-cbc',
    keywords: ['KCSE grade calculator', 'mean grade calculator Kenya', 'KNEC grading system'],
    updateFrequency: 'static',
    dataSource: 'Kenya National Examinations Council (KNEC)',
    isLive: true,
    icon: '📝',
  },
  {
    slug: 'public-holidays',
    title: 'Kenya Public Holidays 2025 & 2026',
    shortTitle: 'Public Holidays',
    description: 'Complete calendar of Kenya\'s gazetted public holidays with countdown timers, downloadable .ics calendar file, and historical context for each holiday.',
    category: 'government-legal',
    keywords: ['Kenya public holidays 2025', 'Kenya bank holidays', 'gazetted holidays Kenya 2026'],
    updateFrequency: 'annual',
    dataSource: 'Public Holidays Act (Cap 110)',
    isLive: true,
    icon: '📅',
  },
  {
    slug: 'number-plate-decoder',
    title: 'Kenya Number Plate Decoder',
    shortTitle: 'Plate Decoder',
    description: 'Decode any Kenya vehicle registration plate. Find the county of registration, approximate year, and plate type (private, government, diplomatic).',
    category: 'transport-travel',
    keywords: ['Kenya number plate meaning', 'KDA number plate county', 'Kenya car registration decoder'],
    updateFrequency: 'static',
    dataSource: 'National Transport and Safety Authority (NTSA)',
    isLive: true,
    icon: '🚗',
  },
  {
    slug: 'mobile-number-prefix',
    title: 'Kenya Mobile Number & Network Prefix Guide',
    shortTitle: 'Mobile Prefixes',
    description: 'Instantly identify which network a Kenya phone number belongs to. Complete prefix guide for Safaricom, Airtel, Telkom, and Fadhili with USSD codes.',
    category: 'data-reference',
    keywords: ['Kenya phone number prefix', 'which network is 0722', 'Safaricom Airtel Telkom prefixes'],
    updateFrequency: 'static',
    dataSource: 'Communications Authority of Kenya (CA)',
    isLive: true,
    icon: '📞',
  },
  {
    slug: 'school-terms',
    title: 'Kenya School Term Dates 2025 & 2026',
    shortTitle: 'School Terms',
    description: 'Official Ministry of Education school calendar with term dates, mid-term breaks, and exam periods for 2025 and 2026. Includes printable view.',
    category: 'education-cbc',
    keywords: ['Kenya school term dates 2025', 'MoE school calendar Kenya', 'school opening dates Kenya 2026'],
    updateFrequency: 'annual',
    dataSource: 'Ministry of Education',
    isLive: true,
    icon: '🏫',
  },
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter(t => t.category === category);
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
