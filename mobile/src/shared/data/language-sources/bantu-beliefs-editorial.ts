export interface EditorialTopic {
  title: string;
  angle: string;
  relatedLanguages: string[];
  caution: string;
}

/** Editorial planning material derived from the Bantu beliefs source, not a dictionary. */
export const BANTU_BELIEFS_EDITORIAL_BRIEF = {
  sourceId: 'bantu-beliefs',
  sourceTitle: 'Bantu Beliefs and Magic',
  scope: 'Historical comparative material focused primarily on Kikuyu and Kamba communities in colonial-era Kenya.',
  topics: [
    {
      title: 'Sacred landscapes and environmental memory',
      angle: 'Explore how sacred trees, mountains, and groves appear in historical descriptions and how to discuss them alongside living conservation practice.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Do not imply one belief applied uniformly to every Bantu-speaking community or survives unchanged today.',
    },
    {
      title: 'Customary councils and restorative justice',
      angle: 'Compare the source description of councils and reconciliation with modern Kenyan conversations about community dispute resolution.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Keep historical custom, constitutional law, and modern practice clearly separated.',
    },
    {
      title: 'Blacksmiths, craft, and social authority',
      angle: 'Use the source material to frame a history of ironworking, craft knowledge, and the social role of specialists.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Treat Hobley as a historical observer with colonial-era limitations, not as the final authority on community meaning.',
    },
    {
      title: 'Words, names, and cultural translation',
      angle: 'Pair carefully checked Kikuyu and Kamba terms with explanations of context rather than presenting one-to-one English equivalents as complete meanings.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Have fluent speakers review spelling, pronunciation, and contemporary usage before publication.',
    },
    {
      title: 'First fruits, planting, and sacred ecology',
      angle: 'Use the historical account of planting and harvest rites to discuss agriculture, seasonality, and environmental memory without claiming an unchanged modern practice.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Keep the source period and the author’s observational limits visible; do not generalize to all Kenyan farming communities.',
    },
    {
      title: 'Thahu, purification, and restoration',
      angle: 'Explain the source distinction between ritual defilement, deliberate cursing, and social restoration in carefully attributed historical terms.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Do not present historical ritual descriptions as medical advice, moral judgment, or a universal contemporary belief.',
    },
    {
      title: 'Circumcision, age grades, and community membership',
      angle: 'Discuss how the source describes age organization and belonging while avoiding restricted ceremonial detail or sensational language.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Invite community review and distinguish historical description from present-day rites and identities.',
    },
    {
      title: 'Death, burial, and ancestors',
      angle: 'Examine the book’s historical account of death, burial, and relationships with ancestors as a record of belief rather than a complete account of living practice.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Use respectful language and avoid treating one colonial-era account as representative of every family or community.',
    },
    {
      title: 'Councils, oaths, and compensation',
      angle: 'Introduce the source’s account of councils and restorative settlement, then clearly separate customary history from Kenya’s current legal system.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Do not equate historical institutions directly with constitutional or statutory justice today.',
    },
    {
      title: 'Legends, dances, and women’s social roles',
      angle: 'Read the source’s stories and social observations critically, asking whose voice is recorded and what the colonial framing leaves out.',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Avoid turning historical observations about women, dance, or oral tradition into timeless cultural stereotypes.',
    },
  ] satisfies EditorialTopic[],
  editorialRules: [
    'Attribute historical claims to C.W. Hobley and identify the source period.',
    'Distinguish documented observation from interpretation and present-day community knowledge.',
    'Avoid sensationalising the word “magic” in the historical title.',
    'Invite community review for sacred, ceremonial, or living cultural material.',
  ],
} as const;