export interface EditorialTopic {
  title: string;
  angle: string;
  relatedLanguages: string[];
  caution: string;
}

/** Editorial planning material derived from all 34 public-domain historical sources (1842–1929), not a single dictionary. */
export const BANTU_BELIEFS_EDITORIAL_BRIEF = {
  sourceId: 'bantu-beliefs',
  sourceTitle: 'Kenya Historical Linguistic & Ethnographic Corpus (34 Primary Sources, 1842–1929)',
  scope: 'Historical comparative material across all 22 Kenyan languages in Bantu, Nilotic, and Cushitic families.',
  topics: [
    {
      title: 'Sacred landscapes and environmental memory',
      angle: 'Explore how sacred trees (Mũgumo, Mũmo, Odaa, Kaya forests), mountains (Kĩrĩnyaga, Ol-doinyo Mara), and groves appear in historical descriptions alongside living conservation practice.',
      relatedLanguages: ['kikuyu', 'kamba', 'mijikenda', 'borana', 'samburu'],
      caution: 'Do not imply one belief applied uniformly to every community or survives unchanged today.',
    },
    {
      title: 'Customary councils and restorative justice',
      angle: 'Compare historical descriptions of the Kiama, Nzama, K\'ambi, Kokwet, and Il-payiani le-nkare with modern Kenyan conversations about Article 159 community dispute resolution.',
      relatedLanguages: ['kikuyu', 'kamba', 'mijikenda', 'kalenjin', 'pokot', 'ilchamus'],
      caution: 'Keep historical custom, constitutional law, and modern practice clearly separated.',
    },
    {
      title: 'Blacksmiths, potters, and craft guilds',
      angle: 'Use Routledge (1910), Hobley (1910, 1922), Beech (1911), and Lindblom (1920) to frame a history of ironworking (aturi, ki-tong-u), wire-inlaid stools (kĩvila), and pottery (koko-ter).',
      relatedLanguages: ['kikuyu', 'kamba', 'pokot'],
      caution: 'Treat colonial-era ethnographers as historical observers with period limitations, not as the final authority on community meaning.',
    },
    {
      title: 'Words, names, and cultural translation',
      angle: 'Pair carefully checked terms—including Dholuo time-of-day birth names (Northcote 1907), Kamba nthoni/kwiūa avoidance vocabulary (Lindblom 1920), and Maa place-name etymologies (Hinde 1901)—with cultural context.',
      relatedLanguages: ['luo', 'kamba', 'maasai', 'kikuyu'],
      caution: 'Have fluent speakers review spelling, pronunciation, and contemporary usage before publication.',
    },
    {
      title: 'First fruits, planting, and indigenous ecological calendars',
      angle: 'Compare the 12-month ecological calendars of the Nandi (Hollis 1909), Ilchamus/Pokot/Turkana (Dundas 1910, Barton 1921), Mijikenda (Krapf 1882), Kamba (Hobley 1910, Lindblom 1920), and Somali 4-season cycle (Kirk 1905).',
      relatedLanguages: ['kalenjin', 'pokot', 'ilchamus', 'turkana', 'mijikenda', 'kamba', 'somali'],
      caution: 'Keep the source period visible and do not generalize one ecological calendar to all regions.',
    },
    {
      title: 'Thahu, Makwa, purification, and restoration',
      angle: 'Explain the source distinction between ritual defilement (thahu / makwa in Routledge 1910, Hobley 1910/1922, Lindblom 1920), deliberate cursing (kĩrumi), and social restoration (kũtahĩkia / kũhoria thahu).',
      relatedLanguages: ['kikuyu', 'kamba'],
      caution: 'Do not present historical ritual descriptions as medical advice, moral judgment, or a universal contemporary belief.',
    },
    {
      title: 'Circumcision cycles, age-sets (Riika, Ipinda, Marika), and generational transfer',
      angle: 'Compare the Kikuyu Itwika & 10 generation ages (Routledge 1910), Nandi/Pokot Ipinda & Saket-ap-eito (Hollis 1909, Beech 1911), Giriama 13 Marika (Taylor 1891), and Borana Gadaa (Tutschek 1844).',
      relatedLanguages: ['kikuyu', 'kalenjin', 'pokot', 'mijikenda', 'borana'],
      caution: 'Invite community review and distinguish historical description from present-day rites and identities.',
    },
    {
      title: 'Death, royal shrines, and ancestral remembrance',
      angle: 'Examine historical accounts of Wanga royal burial at Matungu and khatsu khe misango shrines (Stam 1929), Kikuyu/Kamba Ngoma & Aimũ (Hobley 1922), and Luo memorial rites (Northcote 1907).',
      relatedLanguages: ['luhya', 'kikuyu', 'kamba', 'luo'],
      caution: 'Use respectful language and avoid treating one colonial-era account as representative of every family or community.',
    },
    {
      title: 'Classical oral poetry, epics, and pictographic riddles',
      angle: 'Highlight Swahili Hadithi ya Liongo, Utumbuizo wa Gungu, and Bwana Muyaka verses (Steere 1870, Taylor 1891), Kikuyu Gĩcandĩ gourd-rattle pictographs (Routledge 1910), Kamba mũsai sticks (Hobley 1910), and Somali Gabay/Geeraar/Hees (Kirk 1905).',
      relatedLanguages: ['swahili', 'kikuyu', 'kamba', 'somali'],
      caution: 'Attribute named poets and oral narrators wherever recorded in the primary texts.',
    },
    {
      title: 'Comparative Bantu, Nilotic, and Cushitic grammar',
      angle: 'Use Johnston (1902, 1919–1922), Krapf (1842, 1850, 1882, 1887), Tutschek (1844–1845), Last (1885), Wray (1894), Hémery (1903), Madan (1903), and Hollis (1905, 1909) to teach noun classes, ATR vowel harmony, suffixed articles, and verbal extensions.',
      relatedLanguages: ['swahili', 'kikuyu', 'kamba', 'luhya', 'kisii', 'meru', 'embu', 'mijikenda', 'taita', 'taveta', 'pokomo', 'maasai', 'kalenjin', 'pokot', 'luo', 'turkana', 'teso', 'somali', 'borana', 'rendille'],
      caution: 'Pair 19th-century missionary/colonial orthographies with modern standard spellings so learners can bridge historical and contemporary forms.',
    },
  ] satisfies EditorialTopic[],
  editorialRules: [
    'Attribute historical claims to the specific primary author and publication year (1842–1929).',
    'Distinguish documented observation from colonial-era interpretation and present-day community knowledge.',
    'Avoid sensationalising the word “magic” or “witchcraft” in historical titles.',
    'Invite community review for sacred, ceremonial, or living cultural material.',
  ],
} as const;