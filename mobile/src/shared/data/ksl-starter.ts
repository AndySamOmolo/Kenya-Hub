// ============================================================
// Kenyan Sign Language (KSL · ISO 639-3: xki) Structured Course Data
// Grounded in Constitution of Kenya 2010 Art. 7(3)(b), KSL linguistic
// structure, and Maseno University KSL Pose Dataset (Zenodo 14338329, CC-BY-4.0)
// ============================================================

export type KslSignCategory =
  | "greetings"
  | "politeness"
  | "family"
  | "essentials"
  | "questions"
  | "daily-kenya"
  | "emergency"
  | "time";

export interface KslStarterSign {
  id: string;
  gloss: string;
  swahiliEquivalent: string;
  category: KslSignCategory;
  handshape: string;
  location: string;
  movement: string;
  nonManual: string;
  /** Compact MediaPipe-style upper-body keyframes for instant offline Canvas animation */
  motionType:
    | "wave"
    | "chin-forward"
    | "chest-circle"
    | "forehead-salute"
    | "chin-tap"
    | "hands-together"
    | "mouth-tap"
    | "cup-to-mouth"
    | "palms-up"
    | "head-nod"
    | "head-shake"
    | "point-self";
}

export interface KslNumberEntry {
  number: string;
  swahili: string;
  cue: string;
}

export interface KslLessonPhrase {
  english: string;
  swahili: string;
  kslGloss: string;
  nonManual: string;
}

export interface KslLessonUnit {
  id: string;
  unitNumber: number;
  title: string;
  swahiliTitle: string;
  level: "Beginner" | "Elementary" | "Intermediate";
  summary: string;
  keySignIds: string[];
  phrases: KslLessonPhrase[];
}

export const KSL_CATEGORY_LABELS: Record<KslSignCategory, string> = {
  greetings: "Greetings",
  politeness: "Politeness",
  family: "Family & People",
  essentials: "Essentials",
  questions: "Questions",
  "daily-kenya": "Daily Kenya",
  emergency: "Health & Emergency",
  time: "Time & Days",
};

export const KSL_STARTER_SIGNS: KslStarterSign[] = [
  // ── Greetings ──
  {
    id: "hello",
    gloss: "Hello / Habari",
    swahiliEquivalent: "Habari / Jambo",
    category: "greetings",
    handshape: "Open flat B-hand (fingers together, palm outward)",
    location: "Temple / side of forehead",
    movement: "Move hand smoothly outward from the temple in a warm salute or gentle wave.",
    nonManual: "Warm eye contact and slight welcoming smile.",
    motionType: "wave",
  },
  {
    id: "good-morning",
    gloss: "Good Morning",
    swahiliEquivalent: "Habari ya asubuhi",
    category: "greetings",
    handshape: "Flat B-hand from chin + rising arm arc (sun rising)",
    location: "Chin to upper signing space",
    movement: "Sign GOOD from chin, then raise dominant forearm up from the crook of the non-dominant arm.",
    nonManual: "Bright, welcoming facial expression.",
    motionType: "chin-forward",
  },
  {
    id: "good-night",
    gloss: "Good Night / Sleep",
    swahiliEquivalent: "Usiku mwema / Lala salama",
    category: "greetings",
    handshape: "Flat B-hand from chin, then bent hand lowering over opposite wrist (sunset)",
    location: "Chin to chest-level neutral space",
    movement: "Sign GOOD, then arc dominant hand downward over the non-dominant forearm like the setting sun.",
    nonManual: "Relaxed, gentle smile and soft nod.",
    motionType: "hands-together",
  },
  {
    id: "goodbye",
    gloss: "Goodbye / Kwaheri",
    swahiliEquivalent: "Kwaheri",
    category: "greetings",
    handshape: "Open flat hand, palm facing the other person",
    location: "Shoulder height in neutral space",
    movement: "Open and close fingers smoothly or wave gently side-to-side.",
    nonManual: "Warm smile and maintained eye contact.",
    motionType: "wave",
  },
  {
    id: "welcome",
    gloss: "Welcome / Karibu",
    swahiliEquivalent: "Karibu",
    category: "greetings",
    handshape: "Open flat hand, palm facing upward",
    location: "Front of torso, moving inward",
    movement: "Sweep open palm smoothly from outward space inward toward your chest.",
    nonManual: "Warm inviting smile and slight nod.",
    motionType: "chest-circle",
  },

  // ── Politeness ──
  {
    id: "thank-you",
    gloss: "Thank You",
    swahiliEquivalent: "Asante",
    category: "politeness",
    handshape: "Flat B-hand, fingertips touching chin",
    location: "Chin / lower lip",
    movement: "Move flat hand forward and slightly downward toward the person you are thanking.",
    nonManual: "Gentle nod and appreciative expression.",
    motionType: "chin-forward",
  },
  {
    id: "please",
    gloss: "Please",
    swahiliEquivalent: "Tafadhali",
    category: "politeness",
    handshape: "Open flat hand against center of chest",
    location: "Center of chest",
    movement: "Rub palm in a smooth clockwise circular motion on the chest.",
    nonManual: "Polite, earnest facial expression.",
    motionType: "chest-circle",
  },
  {
    id: "sorry",
    gloss: "Sorry / Pole",
    swahiliEquivalent: "Samahani / Pole",
    category: "politeness",
    handshape: "Closed fist (S-handshape)",
    location: "Center of chest",
    movement: "Move closed fist in a slow circular motion over the heart.",
    nonManual: "Apologetic expression with slightly furrowed brows.",
    motionType: "chest-circle",
  },
  {
    id: "help",
    gloss: "Help",
    swahiliEquivalent: "Saida / Msaada",
    category: "politeness",
    handshape: "Dominant thumbs-up fist resting on non-dominant flat palm",
    location: "Center torso signing space",
    movement: "Lift both hands together upward toward the person needing or giving help.",
    nonManual: "Engaged eye contact.",
    motionType: "hands-together",
  },
  {
    id: "excuse-me",
    gloss: "Excuse Me",
    swahiliEquivalent: "Samahani / Nipishe",
    category: "politeness",
    handshape: "Dominant fingertips brushing across non-dominant open palm",
    location: "Chest height, neutral space",
    movement: "Brush fingertips gently outward across the palm twice.",
    nonManual: "Polite, slightly raised brows.",
    motionType: "hands-together",
  },

  // ── Family & People ──
  {
    id: "mother",
    gloss: "Mother",
    swahiliEquivalent: "Mama",
    category: "family",
    handshape: "Open 5-handshape, thumb touching chin",
    location: "Chin (lower face)",
    movement: "Tap thumb tip gently against the chin twice.",
    nonManual: "Neutral or warm expression.",
    motionType: "chin-tap",
  },
  {
    id: "father",
    gloss: "Father",
    swahiliEquivalent: "Baba",
    category: "family",
    handshape: "Open 5-handshape, thumb touching forehead",
    location: "Forehead (upper face)",
    movement: "Tap thumb tip gently against the forehead twice.",
    nonManual: "Neutral or respectful expression.",
    motionType: "forehead-salute",
  },
  {
    id: "child",
    gloss: "Child / Mtoto",
    swahiliEquivalent: "Mtoto",
    category: "family",
    handshape: "Open flat palm facing downward",
    location: "Waist-to-chest height at your side",
    movement: "Pat downward gently in the air as if patting a child's head.",
    nonManual: "Warm, affectionate expression.",
    motionType: "head-nod",
  },
  {
    id: "friend",
    gloss: "Friend",
    swahiliEquivalent: "Rafiki",
    category: "family",
    handshape: "Both index fingers curved into hooks",
    location: "Chest height, neutral space",
    movement: "Hook index fingers together, then flip and hook them in the opposite orientation.",
    nonManual: "Warm smile.",
    motionType: "hands-together",
  },
  {
    id: "teacher",
    gloss: "Teacher / Mwalimu",
    swahiliEquivalent: "Mwalimu",
    category: "family",
    handshape: "Flattened O-hands near temples, then flat palms moving down sides (PERSON marker)",
    location: "Temples moving forward, then torso sides",
    movement: "Move pinched fingers forward from temples twice (TEACH), then sweep flat hands down torso (PERSON).",
    nonManual: "Clear, respectful gaze.",
    motionType: "forehead-salute",
  },

  // ── Essentials ──
  {
    id: "yes",
    gloss: "Yes",
    swahiliEquivalent: "Ndiyo",
    category: "essentials",
    handshape: "Closed fist (S-handshape)",
    location: "Neutral signing space at chest height",
    movement: "Flex wrist up and down twice like a nodding head.",
    nonManual: "Affirmative head nod.",
    motionType: "head-nod",
  },
  {
    id: "no",
    gloss: "No",
    swahiliEquivalent: "Hapana",
    category: "essentials",
    handshape: "Index and middle fingers closing onto thumb",
    location: "Neutral signing space",
    movement: "Snap index and middle fingers shut against the thumb once or twice.",
    nonManual: "Clear side-to-side head shake.",
    motionType: "head-shake",
  },
  {
    id: "me",
    gloss: "I / Me",
    swahiliEquivalent: "Mimi",
    category: "essentials",
    handshape: "Dominant index finger",
    location: "Center of chest",
    movement: "Point directly to the center of your own chest.",
    nonManual: "Neutral expression.",
    motionType: "point-self",
  },
  {
    id: "name",
    gloss: "Name",
    swahiliEquivalent: "Jina",
    category: "essentials",
    handshape: "Both hands in H-handshape (index and middle fingers extended together)",
    location: "Chest height, neutral space",
    movement: "Tap dominant H-fingers crosswise onto non-dominant H-fingers twice.",
    nonManual: "Neutral expression (or furrowed brows if asking NAME WHAT?).",
    motionType: "hands-together",
  },
  {
    id: "water",
    gloss: "Water",
    swahiliEquivalent: "Maji",
    category: "essentials",
    handshape: "W-handshape (three fingers raised) or cupped C-hand",
    location: "Near mouth / chin",
    movement: "Tap index side of W-hand at the chin or tilt cupped hand gently toward mouth.",
    nonManual: "Neutral expression.",
    motionType: "cup-to-mouth",
  },
  {
    id: "food",
    gloss: "Food / Eat",
    swahiliEquivalent: "Chakula / Kula",
    category: "essentials",
    handshape: "Flattened O-handshape (fingertips pinched together)",
    location: "In front of mouth",
    movement: "Bring fingertips toward the mouth twice (noun) or once (verb).",
    nonManual: "Neutral expression.",
    motionType: "mouth-tap",
  },
  {
    id: "understand",
    gloss: "Understand",
    swahiliEquivalent: "Elewa",
    category: "essentials",
    handshape: "Closed fist flicking index finger upright",
    location: "Right temple / side of forehead",
    movement: "Flick index finger sharply upward next to the forehead (lightbulb cue).",
    nonManual: "Affirmative nod (shake head for DON'T UNDERSTAND).",
    motionType: "forehead-salute",
  },
  {
    id: "good",
    gloss: "Good / Fine",
    swahiliEquivalent: "Nzuri / Sawa",
    category: "essentials",
    handshape: "Flat B-hand, fingertips at chin",
    location: "Chin moving down into non-dominant palm",
    movement: "Move flat hand smoothly from chin forward and down onto open non-dominant palm.",
    nonManual: "Positive smile and nod.",
    motionType: "chin-forward",
  },

  // ── Questions ──
  {
    id: "what",
    gloss: "What?",
    swahiliEquivalent: "Nini?",
    category: "questions",
    handshape: "Both hands open, palms facing upward",
    location: "Chest height, neutral space",
    movement: "Shake both open palms gently side-to-side.",
    nonManual: "Crucial WH-question marker: eyebrows furrowed together, slight head tilt forward.",
    motionType: "palms-up",
  },
  {
    id: "where",
    gloss: "Where?",
    swahiliEquivalent: "Wapi?",
    category: "questions",
    handshape: "Dominant index finger pointing up",
    location: "Shoulder height, neutral space",
    movement: "Wag index finger side-to-side briskly.",
    nonManual: "WH-question marker: furrowed eyebrows and questioning gaze.",
    motionType: "palms-up",
  },
  {
    id: "who",
    gloss: "Who?",
    swahiliEquivalent: "Nani?",
    category: "questions",
    handshape: "Dominant index finger pointing near chin / lips",
    location: "Lower face / chin",
    movement: "Circle or bend index finger slightly in front of the mouth.",
    nonManual: "WH-question marker: furrowed brows and direct eye contact.",
    motionType: "chin-tap",
  },
  {
    id: "when",
    gloss: "When?",
    swahiliEquivalent: "Lini?",
    category: "questions",
    handshape: "Both index fingers extended",
    location: "Chest height, neutral space",
    movement: "Circle dominant index finger around the tip of the stationary non-dominant index finger, then touch tips.",
    nonManual: "WH-question marker: furrowed brows and slight lean forward.",
    motionType: "hands-together",
  },

  // ── Daily Kenya ──
  {
    id: "kenya",
    gloss: "Kenya",
    swahiliEquivalent: "Kenya",
    category: "daily-kenya",
    handshape: "K-handshape (index & middle fingers up with thumb between)",
    location: "Upper chest / shoulder space",
    movement: "Trace a short dignified arc or double-tap with the K-handshape in neutral space.",
    nonManual: "Proud, clear facial expression.",
    motionType: "forehead-salute",
  },
  {
    id: "school",
    gloss: "School / Shule",
    swahiliEquivalent: "Shule",
    category: "daily-kenya",
    handshape: "Both open flat hands, palms facing each other",
    location: "Chest height, center space",
    movement: "Clap palms together softly twice (like a teacher getting class attention).",
    nonManual: "Neutral expression.",
    motionType: "hands-together",
  },
  {
    id: "home",
    gloss: "Home / Nyumbani",
    swahiliEquivalent: "Nyumbani",
    category: "daily-kenya",
    handshape: "Flattened O-handshape touching mouth then cheek",
    location: "Mouth to upper cheek / jaw",
    movement: "Tap fingertips near mouth, then move smoothly to tap the upper cheek (where you eat and sleep).",
    nonManual: "Warm, settled expression.",
    motionType: "mouth-tap",
  },
  {
    id: "work",
    gloss: "Work / Kazi",
    swahiliEquivalent: "Kazi",
    category: "daily-kenya",
    handshape: "Both closed fists (S-handshapes), palms facing down",
    location: "Center torso space",
    movement: "Tap the wrist/base of dominant fist twice onto the back of the non-dominant wrist.",
    nonManual: "Focused, neutral expression.",
    motionType: "hands-together",
  },
  {
    id: "money",
    gloss: "Money / Pesa",
    swahiliEquivalent: "Pesa",
    category: "daily-kenya",
    handshape: "Dominant flattened O-hand tapping non-dominant open palm",
    location: "Chest height, center space",
    movement: "Tap the back of the dominant bunched fingertips twice into the upturned non-dominant palm.",
    nonManual: "Neutral (or furrowed brows if asking HOW MUCH?).",
    motionType: "hands-together",
  },

  // ── Health & Emergency ──
  {
    id: "hospital",
    gloss: "Hospital / Clinic",
    swahiliEquivalent: "Hospitali",
    category: "emergency",
    handshape: "Dominant H-handshape (index and middle fingers extended)",
    location: "Upper non-dominant arm (shoulder sleeve)",
    movement: "Trace a small cross (+): downward line then horizontal line on the upper arm.",
    nonManual: "Clear, calm expression.",
    motionType: "point-self",
  },
  {
    id: "pain",
    gloss: "Pain / Hurt",
    swahiliEquivalent: "Maumivu / Kuumia",
    category: "emergency",
    handshape: "Both index fingers pointing toward each other",
    location: "Near the body part that hurts (or chest space for general pain)",
    movement: "Twist both index fingers in opposite directions slightly while bringing tips close together.",
    nonManual: "Crucial intensity marker: wince or grimace proportionally to pain level.",
    motionType: "hands-together",
  },

  // ── Time & Days ──
  {
    id: "today",
    gloss: "Today / Now",
    swahiliEquivalent: "Leo / Sasa",
    category: "time",
    handshape: "Both Y-handshapes (or bent flat hands), palms facing up",
    location: "Directly in front of torso (present timeline)",
    movement: "Drop both hands gently downward twice in front of your body.",
    nonManual: "Neutral expression.",
    motionType: "palms-up",
  },
  {
    id: "tomorrow",
    gloss: "Tomorrow",
    swahiliEquivalent: "Kesho",
    category: "time",
    handshape: "A-handshape with thumb resting against cheek",
    location: "Side of cheek moving forward (future timeline)",
    movement: "Pivot hand forward in a short arc away from the cheek into the space ahead of you.",
    nonManual: "Neutral expression.",
    motionType: "chin-forward",
  },
];

export const KSL_NUMBERS: KslNumberEntry[] = [
  { number: "0", swahili: "Sifuri", cue: "All fingertips touch the thumb to form a clear O-circle, palm facing outward." },
  { number: "1", swahili: "Moja", cue: "Index finger raised straight up, palm facing inward toward you (or outward when counting items)." },
  { number: "2", swahili: "Mbili", cue: "Index and middle fingers raised in a V, thumb holding ring and pinky down." },
  { number: "3", swahili: "Tatu", cue: "Thumb, index, and middle fingers extended upward (note: NOT the W-shape used for 6!)." },
  { number: "4", swahili: "Nne", cue: "Four fingers (index through pinky) extended upright and spread; thumb tucked across palm." },
  { number: "5", swahili: "Tano", cue: "All five fingers open and spread cleanly." },
  { number: "6", swahili: "Sita", cue: "Palm facing outward: pinky tip touches thumb tip; index, middle, and ring fingers stay raised." },
  { number: "7", swahili: "Saba", cue: "Palm facing outward: ring finger tip touches thumb tip; other three fingers stay raised." },
  { number: "8", swahili: "Nane", cue: "Palm facing outward: middle finger tip touches thumb tip; other three fingers stay raised." },
  { number: "9", swahili: "Tisa", cue: "Palm facing outward: index finger tip touches thumb tip; other three fingers stay raised." },
  { number: "10", swahili: "Kumi", cue: "Thumbs-up A-handshape shaken briskly side-to-side at the wrist." },
  { number: "20", swahili: "Ishirini", cue: "Index finger and thumb pinch together twice like a bird's beak (palm sideways)." },
  { number: "50", swahili: "Hamsini", cue: "Sign 5 clearly, then transition immediately into 0 (O-handshape)." },
  { number: "100", swahili: "Mia moja", cue: "Sign 1, then curve fingers smoothly into a C-handshape (Roman numeral C = 100)." },
  { number: "1,000", swahili: "Elfu moja", cue: "Sign 1, then tap bent M-fingers into the upturned non-dominant palm (M = 1,000)." },
];

export const KSL_LESSONS: KslLessonUnit[] = [
  {
    id: "unit-1-greetings",
    unitNumber: 1,
    title: "Greetings & Introductions",
    swahiliTitle: "Salamu na Kujitambulisha",
    level: "Beginner",
    summary: "Master warm Kenyan Deaf greetings, introductions, and how KSL orders questions without linking verbs.",
    keySignIds: ["hello", "good-morning", "welcome", "me", "name", "what"],
    phrases: [
      {
        english: "Hello! How are you?",
        swahili: "Habari! Hujambo?",
        kslGloss: "HELLO · YOU GOOD?",
        nonManual: "Warm smile, then raise eyebrows on GOOD? (Yes/No question).",
      },
      {
        english: "What is your name?",
        swahili: "Jina lako ni nani?",
        kslGloss: "YOUR NAME WHAT?",
        nonManual: "Furrow eyebrows together and tilt head slightly forward on WHAT?.",
      },
      {
        english: "My name is Wanjiku.",
        swahili: "Jina langu ni Wanjiku.",
        kslGloss: "ME NAME W-A-N-J-I-K-U",
        nonManual: "Steady eye contact; fingerspell your name smoothly without bouncing.",
      },
      {
        english: "Welcome, my friend!",
        swahili: "Karibu, rafiki yangu!",
        kslGloss: "WELCOME · MY FRIEND",
        nonManual: "Open, welcoming smile and gentle head nod.",
      },
    ],
  },
  {
    id: "unit-2-politeness",
    unitNumber: 2,
    title: "Politeness & Everyday Courtesy",
    swahiliTitle: "Adabu na Heshima ya Kila Siku",
    level: "Beginner",
    summary: "Use natural KSL courtesy expressions, ask for help respectfully, and confirm understanding.",
    keySignIds: ["thank-you", "please", "sorry", "help", "excuse-me", "understand"],
    phrases: [
      {
        english: "Please help me.",
        swahili: "Tafadhali nisaidie.",
        kslGloss: "PLEASE · HELP-ME",
        nonManual: "Direct the HELP sign inward toward your chest; earnest brows.",
      },
      {
        english: "Thank you very much!",
        swahili: "Asante sana!",
        kslGloss: "THANK-YOU [emphasized]",
        nonManual: "Warm appreciative smile with a fuller forward movement and nod.",
      },
      {
        english: "Sorry, I don't understand.",
        swahili: "Samahani, sielewi.",
        kslGloss: "SORRY · ME UNDERSTAND-NOT",
        nonManual: "Apologetic expression followed by a clear head shake on UNDERSTAND.",
      },
      {
        english: "Excuse me, please sign slowly.",
        swahili: "Samahani, tafadhali tia ishara polepole.",
        kslGloss: "EXCUSE-ME · PLEASE SIGN SLOW",
        nonManual: "Polite raised brows and calm eye contact.",
      },
    ],
  },
  {
    id: "unit-3-family-daily",
    unitNumber: 3,
    title: "Family, Home & Daily Kenya",
    swahiliTitle: "Familia, Nyumbani na Maisha ya Kenya",
    level: "Elementary",
    summary: "Talk about family, school, work, home, food, and everyday Kenyan places using Topic–Comment order.",
    keySignIds: ["mother", "father", "child", "home", "school", "work", "food", "water"],
    phrases: [
      {
        english: "I am going home now.",
        swahili: "Ninaenda nyumbani sasa.",
        kslGloss: "NOW · HOME ME GO",
        nonManual: "Brief eyebrow raise on NOW (time topic), neutral on comment.",
      },
      {
        english: "My mother works at a school.",
        swahili: "Mama yangu anafanya kazi shuleni.",
        kslGloss: "MY MOTHER · SCHOOL WORK",
        nonManual: "Clear gaze; establish topic (MY MOTHER) before comment.",
      },
      {
        english: "Do you want water or food?",
        swahili: "Unataka maji au chakula?",
        kslGloss: "WATER [left] · FOOD [right] · YOU WANT WHICH?",
        nonManual: "Shift shoulders slightly left/right to contrast options, furrow brows on WHICH?.",
      },
      {
        english: "I live in Kenya.",
        swahili: "Ninaishi Kenya.",
        kslGloss: "KENYA · ME LIVE",
        nonManual: "Affirmative nod.",
      },
    ],
  },
  {
    id: "unit-4-questions-time",
    unitNumber: 4,
    title: "Questions, Money & Time",
    swahiliTitle: "Maswali, Pesa na Wakati",
    level: "Elementary",
    summary: "Ask where, when, who, and how much using KSL's spatial timeline (past behind, present here, future ahead).",
    keySignIds: ["where", "who", "when", "today", "tomorrow", "money"],
    phrases: [
      {
        english: "Where is the school?",
        swahili: "Shule iko wapi?",
        kslGloss: "SCHOOL · WHERE?",
        nonManual: "Raise brows briefly on topic SCHOOL, then furrow brows on WHERE?.",
      },
      {
        english: "How much money is this?",
        swahili: "Hii ni pesa ngapi?",
        kslGloss: "THIS · MONEY HOW-MUCH?",
        nonManual: "Point to item, then furrow brows on HOW-MUCH?.",
      },
      {
        english: "We will meet tomorrow.",
        swahili: "Tutakutana kesho.",
        kslGloss: "TOMORROW · WE MEET",
        nonManual: "Time sign TOMORROW always comes first; affirmative nod.",
      },
      {
        english: "Who is your teacher?",
        swahili: "Mwalimu wako ni nani?",
        kslGloss: "YOUR TEACHER · WHO?",
        nonManual: "Furrow eyebrows on WHO? and hold eye contact.",
      },
    ],
  },
  {
    id: "unit-5-health-emergency",
    unitNumber: 5,
    title: "Health, Emergencies & Advocacy",
    swahiliTitle: "Afya, Dharura na Haki",
    level: "Intermediate",
    summary: "Communicate urgent medical needs, locate pain spatially on the body, and support Deaf accessibility.",
    keySignIds: ["hospital", "pain", "help", "water", "yes", "no"],
    phrases: [
      {
        english: "Where is the hospital?",
        swahili: "Hospitali iko wapi?",
        kslGloss: "HOSPITAL · WHERE?",
        nonManual: "Urgent gaze with furrowed brows on WHERE?.",
      },
      {
        english: "I have pain here.",
        swahili: "Nina maumivu hapa.",
        kslGloss: "ME PAIN [point to exact area]",
        nonManual: "Facial expression shows severity (mild frown vs sharp wince).",
      },
      {
        english: "Please call my family.",
        swahili: "Tafadhali pigia familia yangu simu.",
        kslGloss: "PLEASE · MY FAMILY CALL",
        nonManual: "Earnest expression, clear eye contact.",
      },
      {
        english: "I need a KSL interpreter.",
        swahili: "Ninahitaji mkalimani wa KSL.",
        kslGloss: "ME NEED K-S-L INTERPRETER",
        nonManual: "Firm, clear posture and affirmative nod.",
      },
    ],
  },
];

export const KSL_ALPHABET: { letter: string; cue: string }[] = [
  { letter: "A", cue: "Closed fist, thumb resting upright along the side of the index finger." },
  { letter: "B", cue: "Four fingers straight up together, thumb tucked across the palm." },
  { letter: "C", cue: "All fingers and thumb curved into a clear C-arc." },
  { letter: "D", cue: "Index finger pointing straight up; remaining fingers touch thumb in an O." },
  { letter: "E", cue: "Fingertips curled down onto the thumb tucked across the palm." },
  { letter: "F", cue: "Index finger and thumb form a circle; middle, ring, and pinky fan upward." },
  { letter: "G", cue: "Index finger and thumb extended horizontally parallel, pointing sideways." },
  { letter: "H", cue: "Index and middle fingers extended together horizontally sideways." },
  { letter: "I", cue: "Closed fist with only the pinky finger pointing straight up." },
  { letter: "J", cue: "Start in I-handshape and trace the letter J downward in the air." },
  { letter: "K", cue: "Index and middle fingers up in a V with the thumb tucked between them." },
  { letter: "L", cue: "Index finger straight up and thumb extended out at 90 degrees." },
  { letter: "M", cue: "Thumb tucked underneath the first three fingers (index, middle, ring)." },
  { letter: "N", cue: "Thumb tucked underneath the first two fingers (index and middle)." },
  { letter: "O", cue: "All fingertips curved forward to touch the thumb tip in an O." },
  { letter: "P", cue: "K-handshape tilted downward so the middle finger points down." },
  { letter: "Q", cue: "G-handshape tilted downward toward the floor." },
  { letter: "R", cue: "Index and middle fingers crossed tightly upright." },
  { letter: "S", cue: "Tight fist with the thumb wrapped across the front of the fingers." },
  { letter: "T", cue: "Fist with the thumb tucked between the index and middle fingers." },
  { letter: "U", cue: "Index and middle fingers pressed together pointing straight up." },
  { letter: "V", cue: "Index and middle fingers separated in a clear V pointing upward." },
  { letter: "W", cue: "Index, middle, and ring fingers spread upward; pinky held by thumb." },
  { letter: "X", cue: "Index finger bent into a tight hook; other fingers closed." },
  { letter: "Y", cue: "Thumb and pinky extended outward; middle three fingers folded down." },
  { letter: "Z", cue: "Use the index finger to trace a sharp Z shape in the air." },
];

export const KSL_GRAMMAR_NOTES = [
  {
    title: "Constitutional Recognition (Kenya 2010)",
    body: "Article 7(3)(b) of the Constitution of Kenya (2010) obligates the State to promote the development and use of Kenyan Sign Language (KSL), Braille, and other accessible communication formats. KSL is an independent natural language with its own grammar—not signed English or signed Swahili.",
  },
  {
    title: "Five Phonological Parameters of Every KSL Sign",
    body: "Every KSL sign is built from five simultaneous parameters: (1) Handshape, (2) Location on or near the body, (3) Movement path, (4) Palm Orientation, and (5) Non-Manual Markers (eyebrows, head tilt, mouthing, and body shift). Changing even one parameter changes the meaning.",
  },
  {
    title: "Topic–Comment & OSV Word Order",
    body: "KSL frequently places the time frame first, followed by the Topic (often Object–Subject–Verb): e.g., YESTERDAY MARKET ME GO ('I went to the market yesterday'). Articles ('a', 'the') and linking 'is/are' are omitted.",
  },
  {
    title: "Facial Grammar for Questions",
    body: "Yes/No questions raise the eyebrows and lean the head slightly forward. WH-questions (WHO, WHAT, WHERE, WHEN, WHY) furrow the eyebrows together—facial expression is grammar, not just emotion.",
  },
  {
    title: "The Spatial Timeline (Tense)",
    body: "Instead of changing verb endings like English or Swahili, KSL sets tense at the start of a sentence using space: behind the shoulder = past (YESTERDAY, BEFORE), directly in front of the torso = present (TODAY, NOW), and forward ahead of the body = future (TOMORROW, NEXT-YEAR).",
  },
  {
    title: "Directional (Agreement) Verbs",
    body: "Many KSL verbs encode both subject and object through movement direction. Moving HELP from you toward another person means 'I help you'; moving HELP from them toward your chest means 'Help me'—no separate pronoun needed.",
  },
  {
    title: "Kenyan Deaf Etiquette & Attention-Getting",
    body: "Maintain steady eye contact with the signer's face (not their hands—peripheral vision catches handshapes). To get a Deaf person's attention politely, wave gently in their line of sight, tap lightly on the shoulder twice, or flicker room lights in a group.",
  },
  {
    title: "Regional KSL Dialects Across Kenya",
    body: "Just like spoken languages, KSL has vibrant regional variation across Kenya's Deaf schools and communities (e.g., Nairobi, Machakos, Mumias, Kisumu, and Mombasa/Kilifi). Always respect local community signs when communicating in different counties.",
  },
];
