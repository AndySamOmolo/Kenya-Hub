// ============================================================
// Kenyan Sign Language (KSL · ISO 639-3: xki) Starter Course Data
// Grounded in Constitution of Kenya 2010 Art. 7(3)(b), KSL linguistic
// structure, and Maseno University KSL Pose Dataset (Zenodo 14338329, CC-BY-4.0)
// ============================================================

export interface KslStarterSign {
  id: string;
  gloss: string;
  swahiliEquivalent: string;
  category: "greetings" | "politeness" | "family" | "essentials" | "questions";
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

export const KSL_STARTER_SIGNS: KslStarterSign[] = [
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
];
