export interface StaticBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  tags: string[];
  readTime: number;
  content: string;
}

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    slug: "how-paye-tax-works-in-kenya",
    title: "How PAYE Tax Works in Kenya — A Complete 2026 Guide",
    excerpt:
      "Understanding Kenya's Pay As You Earn tax system: current tax bands, deductions, personal relief, and how to calculate your net salary after PAYE, NHIF, NSSF, and Housing Levy.",
    author: "KenyaHub",
    publishedAt: "2026-07-15T10:00:00.000Z",
    updatedAt: "2026-09-01T08:00:00.000Z",
    tags: ["Finance", "Tax", "PAYE", "KRA"],
    readTime: 8,
    content: `## What Is PAYE?

**Pay As You Earn (PAYE)** is Kenya's system for collecting income tax from employees. Under this system, your employer deducts tax from your gross salary every month and remits it directly to the **Kenya Revenue Authority (KRA)**.

PAYE applies to all employment income — including basic salary, allowances, bonuses, overtime pay, and non-cash benefits. The legal basis is the **Income Tax Act, Cap 470** and the annual Finance Acts that adjust rates.

## Current PAYE Tax Bands (FY 2024/25)

Kenya uses a **progressive tax system**, meaning higher portions of your income are taxed at higher rates:

| Monthly Income Band | Tax Rate |
|---|---|
| First KES 24,000 | 10% |
| KES 24,001 – 32,333 | 25% |
| KES 32,334 – 500,000 | 30% |
| KES 500,001 – 800,000 | 32.5% |
| Above KES 800,000 | 35% |

A **personal relief of KES 2,400 per month** (KES 28,800 annually) is deducted from your calculated PAYE, reducing the final tax you pay.

## Other Mandatory Deductions

Beyond PAYE, several other statutory deductions are taken from your salary:

### NHIF (National Hospital Insurance Fund)

NHIF contributions are based on income bands with fixed monthly amounts. For example:
- Salary KES 6,000 – 7,999: KES 300/month
- Salary KES 12,000 – 14,999: KES 500/month
- Salary above KES 100,000: KES 1,700/month

### NSSF (National Social Security Fund)

Under the NSSF Act 2013, contributions are calculated at **6% of pensionable pay**:
- **Tier I**: Up to KES 7,000 (max contribution KES 420)
- **Tier II**: KES 7,001 – 36,000 (max contribution KES 1,740)

Your employer matches these contributions.

### Affordable Housing Levy

Since the Finance Act 2023, all employed persons contribute **1.5% of gross salary** to the Affordable Housing Levy. The employer also contributes 1.5%. The employee's portion qualifies as a tax relief, effectively reducing your PAYE.

## How to Calculate Your Net Salary

Here is a simplified step-by-step process:

1. Start with your **gross monthly salary**
2. Calculate **NSSF** (6% of gross, capped at Tier I + II limits)
3. Calculate **Housing Levy** (1.5% of gross)
4. Subtract NSSF and Housing Levy from gross to get **taxable income**
5. Apply **PAYE tax bands** to taxable income
6. Subtract **personal relief** (KES 2,400) from calculated tax
7. Calculate **NHIF** based on your income band
8. **Net Pay** = Gross − PAYE − NHIF − NSSF − Housing Levy

For a quick calculation, use the [KenyaHub PAYE Calculator](/tools/paye-calculator/) which handles all of these automatically.

## Important Notes

- **Tax returns**: Even though PAYE is deducted monthly, you must file annual returns on [iTax](https://itax.kra.go.ke) by June 30th each year.
- **Tax relief**: Besides personal relief, you may qualify for **insurance relief** (15% of premiums, max KES 5,000/month) and **disability exemption** if applicable.
- **Non-residents**: Are taxed at a flat rate of 30% on all employment income from Kenya.

## Disclaimer

This guide is for informational purposes only. For official tax compliance, consult a certified public accountant (CPA-K) or visit [KRA's website](https://www.kra.go.ke).`,
  },
  {
    slug: "understanding-mpesa-transaction-fees",
    title: "Understanding M-Pesa Transaction Fees in Kenya",
    excerpt:
      "A breakdown of Safaricom M-Pesa charges for sending, withdrawing, and transferring money. Learn how fees are structured and discover tips to minimise transaction costs.",
    author: "KenyaHub",
    publishedAt: "2026-08-02T09:00:00.000Z",
    updatedAt: null,
    tags: ["Finance", "M-Pesa", "Safaricom"],
    readTime: 6,
    content: `## How M-Pesa Fees Work

M-Pesa, operated by Safaricom, is the most widely used mobile money platform in Kenya with over 30 million active users. Understanding the fee structure helps you make smarter financial decisions.

M-Pesa charges vary based on three factors:
1. **Transaction type** — sending to registered users, unregistered users, or withdrawing
2. **Transaction amount** — fees increase with larger amounts
3. **Destination** — M-Pesa to M-Pesa is cheaper than M-Pesa to bank

## Fee Categories

### Sending Money (M-Pesa to M-Pesa — Registered Users)

Sending to registered M-Pesa users is generally the cheapest transaction type. Key thresholds:

- **KES 1 – 100**: Free (since 2020 policy updates)
- **KES 101 – 500**: KES 7
- **KES 501 – 1,000**: KES 13
- **KES 1,001 – 1,500**: KES 23
- **KES 1,501 – 2,500**: KES 33
- **KES 10,001 – 15,000**: KES 56
- **KES 35,001 – 50,000**: KES 61

### Withdrawing from M-Pesa Agent

Withdrawal fees are the highest cost category:

- **KES 50 – 100**: KES 11
- **KES 101 – 500**: KES 29
- **KES 501 – 1,000**: KES 29
- **KES 2,501 – 3,500**: KES 52
- **KES 10,001 – 20,000**: KES 110
- **KES 35,001 – 50,000**: KES 197

### Paybill and Buy Goods (Till Numbers)

Payments to Paybill numbers and Buy Goods (Till) are typically **free** for amounts under KES 100, with small fees above that threshold. This is why businesses increasingly prefer M-Pesa payments over cash.

## Money-Saving Tips

### 1. Split Large Transactions

Here is a practical example: sending KES 2,000 as one transaction costs **KES 33**. But sending two transactions of KES 1,000 costs **KES 13 × 2 = KES 26** — saving you KES 7.

The [KenyaHub M-Pesa Fee Calculator](/tools/mpesa-fee-calculator/) has a built-in "cheapest threshold" feature that automatically shows when splitting saves money.

### 2. Use Buy Goods Instead of Sending

When paying a merchant, always ask for their **Till Number** rather than sending to their personal M-Pesa number. Buy Goods transactions have significantly lower fees (or are free).

### 3. Use M-Pesa App for Bank Transfers

M-Pesa to bank transfer fees through the app are often lower than withdrawing cash from an agent and depositing at a bank.

## Transaction Limits

Be aware of M-Pesa's daily and per-transaction limits:

- **Maximum per transaction**: KES 150,000
- **Daily transaction limit**: KES 300,000
- **Maximum M-Pesa balance**: KES 300,000

## Stay Updated

Safaricom occasionally adjusts M-Pesa tariffs. Our [M-Pesa Fee Calculator](/tools/mpesa-fee-calculator/) is updated whenever official tariff changes are published by Safaricom.`,
  },
  {
    slug: "cbc-curriculum-explained-for-parents",
    title: "CBC Curriculum Explained: What Every Kenyan Parent Needs to Know",
    excerpt:
      "A parent-friendly guide to Kenya's Competency-Based Curriculum (CBC) — from PP1 to Senior Secondary. Understand the structure, learning areas, assessment methods, and key differences from the 8-4-4 system.",
    author: "KenyaHub",
    publishedAt: "2026-08-20T08:00:00.000Z",
    updatedAt: null,
    tags: ["Education", "CBC", "Parenting"],
    readTime: 7,
    content: `## What Is CBC?

The **Competency-Based Curriculum (CBC)** is Kenya's education system that replaced the 8-4-4 system. Developed by the **Kenya Institute of Curriculum Development (KICD)**, CBC focuses on developing each learner's unique talents and abilities rather than memorisation and exams.

The transition began in 2017 with the pioneer class starting PP1 (Pre-Primary 1).

## CBC Structure

CBC divides education into three main levels:

### 1. Basic Education (14 years)

| Level | Duration | Grades |
|---|---|---|
| Pre-Primary | 2 years | PP1 – PP2 |
| Lower Primary | 3 years | Grade 1 – 3 |
| Upper Primary | 3 years | Grade 4 – 6 |
| Junior Secondary | 3 years | Grade 7 – 9 |
| Senior Secondary | 3 years | Grade 10 – 12 |

### 2. Senior Secondary Pathways

At Senior Secondary level, students choose one of three pathways based on their interests and aptitudes:

- **STEM** — Science, Technology, Engineering, Mathematics
- **Arts and Sports Science** — Creative arts, performing arts, sports
- **Social Sciences** — History, geography, business, languages

This is a major departure from 8-4-4, where all students followed essentially the same curriculum.

## Learning Areas by Level

### Pre-Primary (PP1 & PP2)
- Language Activities
- Mathematical Activities
- Environmental Activities
- Creative Activities
- Psychomotor Activities
- Religious Education

### Lower Primary (Grade 1 – 3)
- Literacy (English / Kiswahili)
- Mathematics
- Environmental Activities
- Hygiene and Nutrition
- Creative Arts
- Religious Education
- Indigenous Languages

### Upper Primary (Grade 4 – 6)
- English
- Kiswahili
- Mathematics
- Science and Technology
- Social Studies
- Creative Arts
- Agriculture and Nutrition
- Religious Education
- Pre-Technical Studies
- Foreign Languages (optional)

### Junior Secondary (Grade 7 – 9)
This level introduces more subject specialisation. Core subjects include English, Kiswahili, Mathematics, Integrated Science, and Social Studies. Students also choose from electives like Business Studies, Computer Science, Agriculture, and Creative Arts.

## Assessment in CBC

CBC uses **formative assessment** throughout the learning process, not just end-of-term exams:

- **School-Based Assessment (SBA)**: Continuous assessment by teachers during learning
- **National Assessment**: Standardised assessments at the end of Grade 6 and Grade 9
- **Portfolio**: Students build portfolios of their work demonstrating competencies

## Key Differences from 8-4-4

| Aspect | 8-4-4 | CBC |
|---|---|---|
| Focus | Content-driven (memorisation) | Competency-driven (skills) |
| Assessment | Heavy exam focus (KCPE, KCSE) | Continuous + formative assessment |
| Duration | 8 + 4 + 4 = 16 years | 2 + 6 + 3 + 3 = 14 years (basic) |
| Specialisation | Starts at university | Starts at Senior Secondary |
| Talents | Not formally nurtured | Identified and developed from PP1 |

## Resources for Parents

- Use the [KenyaHub CBC Curriculum Explorer](/tools/cbc-curriculum/) to browse every learning area, strand, and sub-strand for each grade
- Check your child's correct grade level with the [Grade-Age Checker](/tools/cbc-grade-age/)
- View the [School Term Calendar](/tools/school-terms/) for current term dates

## Concerns and Ongoing Changes

CBC implementation has faced challenges including teacher preparedness, resource availability, and infrastructure gaps — particularly in rural areas. The government continues to refine the curriculum based on feedback from educators and parents.

For the latest official updates, refer to the [KICD website](https://kicd.ac.ke) or the Ministry of Education.`,
  },
  {
    slug: "guide-to-kenyan-public-holidays-2026",
    title: "Complete Guide to Kenyan Public Holidays in 2026",
    excerpt:
      "All gazetted public holidays in Kenya for 2026, including historical significance, whether they fall on weekdays, and how holiday pay works under Kenyan labour law.",
    author: "KenyaHub",
    publishedAt: "2026-06-10T08:00:00.000Z",
    updatedAt: "2026-09-05T10:00:00.000Z",
    tags: ["Government", "Holidays", "Labour Law"],
    readTime: 5,
    content: `## 2026 Public Holidays Calendar

Kenya observes public holidays as gazetted under the **Public Holidays Act, Chapter 110** of the Laws of Kenya. Here is the complete list for 2026:

| Date | Day | Holiday |
|---|---|---|
| January 1 | Thursday | New Year's Day |
| April 3 | Friday | Good Friday |
| April 6 | Monday | Easter Monday |
| May 1 | Friday | Labour Day |
| June 1 | Monday | Madaraka Day |
| October 10 | Saturday | Huduma Day |
| October 20 | Tuesday | Mashujaa Day |
| December 12 | Saturday | Jamhuri Day |
| December 25 | Friday | Christmas Day |
| December 26 | Saturday | Boxing Day |

**Note**: Islamic holidays such as Eid ul-Fitr and Eid ul-Adha are also observed but their exact dates depend on the lunar calendar and are gazetted separately each year.

## Understanding Each Holiday

### Madaraka Day (June 1)
Marks the day Kenya attained internal self-rule from Britain on June 1, 1963 — six months before full independence. "Madaraka" means "responsibility" or "self-governance" in Swahili.

### Huduma Day (October 10)
Formerly known as Moi Day, it was renamed Huduma Day in 2020 to honour all Kenyans who have contributed to nation-building. "Huduma" means "service" in Swahili.

### Mashujaa Day (October 20)
Previously Kenyatta Day, renamed in 2010 to honour all heroes of Kenya's independence struggle and beyond. "Mashujaa" means "heroes" in Swahili.

### Jamhuri Day (December 12)
Kenya's Independence Day — commemorating December 12, 1963, when Kenya became a republic. "Jamhuri" means "republic" in Swahili.

## Holiday Pay Rules

Under the **Employment Act 2007**:

- Employees who work on a public holiday are entitled to **at least one day's wages in addition** to their regular pay — effectively double pay.
- If a public holiday falls on a Sunday, the following Monday is observed as the holiday.
- Employers cannot compel employees to work on public holidays unless the employment contract specifically provides for it.

## Planning Around Holidays

2026 offers several opportunities for long weekends:
- **Easter**: Good Friday (April 3) + Easter Monday (April 6) creates a 4-day weekend
- **Labour Day + Weekend**: May 1 falls on a Friday — 3-day weekend
- **Madaraka Day**: June 1 falls on a Monday — 3-day weekend

For the interactive version with countdown timers and calendar integration, visit the [KenyaHub Public Holidays Tool](/tools/public-holidays/).`,
  },
  {
    slug: "understanding-kuccps-cluster-points",
    title: "How KUCCPS Cluster Points Work: University Placement Explained",
    excerpt:
      "A comprehensive guide to how KUCCPS calculates cluster points for university course placement in Kenya. Understand cluster subjects, weighting, and minimum requirements for different degree programmes.",
    author: "KenyaHub",
    publishedAt: "2026-09-01T09:00:00.000Z",
    updatedAt: null,
    tags: ["Education", "KUCCPS", "University"],
    readTime: 7,
    content: `## What Are Cluster Points?

**Cluster points** are the scores used by the **Kenya Universities and Colleges Central Placement Service (KUCCPS)** to determine which university courses a KCSE candidate qualifies for. Unlike your mean grade (which is a simple average), cluster points are **weighted scores** that prioritise subjects relevant to your chosen course.

Each university degree programme has a specific **cluster** — a defined set of 4 subjects that are most relevant to that course. Your performance in those specific subjects determines your cluster points.

## How Cluster Points Are Calculated

### Step 1: Grade-to-Points Conversion

Each KCSE grade is converted to points:

| Grade | Points |
|---|---|
| A | 12 |
| A- | 11 |
| B+ | 10 |
| B | 9 |
| B- | 8 |
| C+ | 7 |
| C | 6 |
| C- | 5 |
| D+ | 4 |
| D | 3 |
| D- | 2 |
| E | 1 |

### Step 2: Cluster Subject Selection

Each cluster requires **4 subjects**:
1. **Three mandatory subjects** — typically Mathematics, English, and Kiswahili
2. **One relevant elective** — varies by course (e.g., Biology for Medicine, Physics for Engineering)

Some clusters replace one mandatory subject with a more relevant one. For example, engineering clusters may weight Physics and Mathematics more heavily.

### Step 3: Weighted Calculation

The 4 cluster subjects are then weighted. In most clusters:
- **Subjects 1 and 2**: Multiplied by their raw points (weight × 1)
- **Subjects 3 and 4**: May have different weights depending on the cluster

The **maximum cluster points is 48** (4 subjects × 12 points each).

## Popular Course Clusters

### Medicine and Health Sciences
- Cluster subjects: Biology, Chemistry, Mathematics/Physics, English
- Minimum: Usually 40+ cluster points
- Required mean grade: A- or above

### Engineering
- Cluster subjects: Mathematics, Physics, Chemistry, English
- Minimum: Usually 36+ cluster points
- Required mean grade: B+ or above

### Law
- Cluster subjects: English, Kiswahili, Mathematics, History/Government/CRE
- Minimum: Usually 40+ cluster points
- Required mean grade: B+ or above

### Education (Arts)
- Cluster subjects: English/Kiswahili, two teaching subjects, one elective
- Minimum: Usually 30+ cluster points
- Required mean grade: C+ or above

### Business and Commerce
- Cluster subjects: Mathematics, English, Kiswahili, Business Studies/Economics
- Minimum: Usually 33+ cluster points
- Required mean grade: B- or above

## Tips for Students

1. **Check multiple clusters**: You may qualify for different courses. Each course has its own cluster, so your points will vary.
2. **Your strongest subjects matter**: Identify courses whose cluster subjects align with your best KCSE grades.
3. **Minimum requirements vary by university**: A course at University of Nairobi may require higher cluster points than the same course at a newer university.
4. **Revision of choices**: KUCCPS allows students to revise course choices during a specified window — use this to optimise your placement.

## Calculate Your Cluster Points

Use the [KenyaHub KUCCPS Cluster Calculator](/tools/kuccps-cluster-calculator/) to:
- Enter your KCSE grades
- See cluster points for all major course categories
- Find which courses and universities you qualify for

For the official placement portal and application deadlines, visit [KUCCPS](https://www.kuccps.ac.ke).`,
  },
  {
    slug: "kenya-number-plates-explained",
    title: "Kenya Number Plates Explained: What the Letters and Numbers Mean",
    excerpt:
      "Decode any Kenyan vehicle registration plate — understand the prefix letters, series codes, county of registration, and the different plate types including government, diplomatic, and military vehicles.",
    author: "KenyaHub",
    publishedAt: "2026-07-28T11:00:00.000Z",
    updatedAt: null,
    tags: ["Transport", "NTSA", "Vehicles"],
    readTime: 5,
    content: `## Kenyan Number Plate Format

Standard Kenyan vehicle registration plates follow the format **KXX 000X** — where K stands for Kenya, followed by two letters, three numbers, and a final letter. For example: **KDG 456A**.

The system is administered by the **National Transport and Safety Authority (NTSA)** and has been in use since 2004 (the "K" series).

## Understanding the Prefix

### The "K" Prefix
All civilian vehicles registered in Kenya start with the letter **K**. The second and third letters indicate the **registration series**:

- **KA** through **KZ**: The earliest series (2004 onwards)
- **KAA** through **KAZ**: Extended series
- **KBA**, **KBB**, etc.: Further extensions as earlier series were exhausted

As of 2026, registrations have reached the **KD** extended series.

### The Number Sequence
The three digits (001 – 999) are assigned sequentially within each letter series.

### The Final Letter
The trailing letter (A – Z) further extends each numeric sequence, giving each series up to 25,974 possible combinations.

## Special Plate Types

### Government Vehicles (GK)
Plates beginning with **GK** (Government of Kenya) are assigned to national government vehicles. These are white plates with red text.

### Diplomatic Vehicles
- **Blue plates with white text**: Diplomatic corps
- Format: **XX CD XXXX** where CD = Corps Diplomatique
- Specific country codes identify the embassy

### Military Vehicles
Kenya Defence Forces vehicles use plates starting with **KA** (Kenya Army), **KN** (Kenya Navy), or **KAF** (Kenya Air Force) on military-green plates.

### Parastatals
Government parastatals and state corporations may use specific series assigned to their organisation.

## County Registration Codes

While the number plate itself does not directly encode the county of registration, the NTSA records which office processed the registration. Major registration offices include:

- **Nairobi** — Processes the majority of registrations
- **Mombasa** — Second largest registration centre
- **Kisumu, Nakuru, Eldoret** — Regional centres

## Decoding a Number Plate

Want to know what a plate tells you about a vehicle? Try the [KenyaHub Number Plate Decoder](/tools/number-plate-decoder/) which:
- Identifies the registration series and approximate year
- Shows the type of vehicle (private, commercial, government)
- Explains the prefix meaning

## Rules and Regulations

Under the **Traffic Act (Cap 403)** and NTSA regulations:
- All motor vehicles must display number plates at the front and rear
- Plates must be clearly legible and properly illuminated at night
- Defaced, altered, or obscured plates are a traffic offence
- Personalised/vanity plates are not available in Kenya

For a complete list of traffic offences and fines, see the [KenyaHub Traffic Fines Guide](/tools/traffic-fines/).`,
  },
];

/** Get a static blog post by slug */
export function getStaticBlogPost(slug: string): StaticBlogPost | undefined {
  return STATIC_BLOG_POSTS.find((p) => p.slug === slug);
}

/** Get all static blog post slugs */
export function getStaticBlogSlugs(): string[] {
  return STATIC_BLOG_POSTS.map((p) => p.slug);
}
