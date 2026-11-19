// Turkana (Ng'aturkana) Grammar Reference Sections
// Verbally & structurally aligned with the 19-Unit Turkana Course & Dictionary

export interface TurkanaGrammarSection {
  id: string;
  title: string;
  category: 'phonology' | 'morphology' | 'syntax' | 'pronouns' | 'verbs' | 'nouns';
  summary: string;
  content: string;
  examples: Array<{
    turkana: string;
    english: string;
    gloss?: string;
  }>;
}

export type GrammarSection = TurkanaGrammarSection;

export const TURKANA_GRAMMAR_SECTIONS: TurkanaGrammarSection[] = [
  {
    id: 'turkana-noun-gender-prefixes',
    title: '1. Grammatical Gender & Number Prefixes (e-/a-/i-)',
    category: 'nouns',
    summary: 'Every Turkana noun carries an inseparable prefix indicating masculine, feminine, or diminutive/neuter gender and singular vs. plural number.',
    content: `Turkana (Ng'aturkana) is an Eastern Nilotic language of the Ateker cluster (closely related to Karamojong, Teso, Toposa, and Nyangatom). Unlike Bantu languages which use 15+ noun classes, Turkana organizes all nouns into **three grammatical genders** marked by vocalic prefixes in the singular and *ng-* prefixes in the plural:

| Gender | Singular Prefix | Plural Prefix | Example (Singular → Plural) | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Masculine** | **e-** / **ɛ-** | **ngi-** / **nge-** | *ekile* → *ngiliok* | Man / Warrior → Men |
| **Feminine** | **a-** | **nga-** (*ny-* before palatals) | *abero* → *ngabero* | Woman / Wife → Women |
| **Neuter / Diminutive** | **i-** | **ngi-** | *ikoko* → *ngedwi* | Baby / Child → Children |

### Semantic & Morphological Patterns
* **Gender Polarity & Reversal**: Changing the prefix of a root can shift its size or gender: *ekitoi* (tree/medicine, masc.) vs. *akitoi* (firewood/stick, fem.); *ekili* (man) vs. *ikili* (small boy).
* **Mass & Liquid Nouns**: Liquids and mass substances are grammatically plural feminine (*nga-*): **ng'akipi** (water), **ngakile** (milk), **nakot / ngakoot** (blood), **ngakiriyek** (flour), **ngalup** (soil/earth).
* **Plural Suffixation**: In addition to the plural prefix (*ngi- / nga-*), nouns take a plural suffix (*-i, -o, -a, -in, -tin, -ok*): *emoro* → *ngemor* (mountains), *akwara* → *ngakwarath* (spears), *ekasiko* → *ngasikot* (elders).`,
    examples: [
      {
        turkana: 'Ekile (pl. ngiliok) • Abero (pl. ngabero)',
        english: 'Man (pl. men) • Woman (pl. women)',
        gloss: 'Masc. e-/ngi- vs. Fem. a-/nga-'
      },
      {
        turkana: 'Emoro (pl. ngemor) • Angalul (pl. ngangolulio)',
        english: 'Mountain (pl. mountains) • River (pl. rivers)',
        gloss: 'Masc. e- vs. Fem. a- geographical nouns'
      },
      {
        turkana: "Ng'akipi • Ngakile • Ngakoot",
        english: 'Water • Milk • Blood',
        gloss: 'Plural feminine mass/liquid prefix nga-'
      },
      {
        turkana: 'Ikoko (pl. ngedwi) • Edit (pl. ngedithok)',
        english: 'Baby (pl. babies) • Boy/Son (pl. boys)',
        gloss: 'Diminutive i- and masculine e- youth nouns'
      }
    ]
  },
  {
    id: 'turkana-pronouns-demonstratives',
    title: '2. Personal, Reflexive & Demonstrative Pronouns',
    category: 'pronouns',
    summary: 'Independent pronouns, gender-agreeing possessive adjectives, and spatial demonstratives documented in Barton (1921).',
    content: `Turkana distinguishes singular and plural personal pronouns, reflexive suffixes (*-bon* 'by oneself', *-elopi / -ngilipek* 'oneself'), and possessive pronouns that agree in number with the possessed noun:

### Independent & Reflexive Pronouns (Barton 1921)
| Person | Independent | "By Oneself" (*-bon*) | "Oneself" (*-elopi*) | Possessive (Sg. / Pl. Noun) |
| :--- | :--- | :--- | :--- | :--- |
| **1st Sg. (I)** | **ayon / ayong** | *ayon-bon* | *ayon-elopi* | **akan / kang** (pl. *ngulu-kan*) |
| **2nd Sg. (Thou)** | **ion / iyong** | *ion-bon* | *ion-elopi* | **ekon / kon** (pl. *ngulu-kon*) |
| **3rd Sg. (He/She)** | **ngeth / ingesi** | *ngeth-bon* | *ngeth-elopi* | **ekin / keng** (pl. *ngulu-kin*) |
| **1st Pl. (We)** | **thowa / ng'oni / isua** | — | *thowa-ngilipek* | **akothi / ekothi** (pl. *ngulu-kothi*) |
| **2nd Pl. (Ye)** | **eth** | — | *eth-ngilipek* | **ekuth** (pl. *ngulu-kuth*) |
| **3rd Pl. (They)** | **keth / ikesi** | — | *keth-ngilipek* | **ekech** (pl. *ngulu-kech*) |

### Spatial Demonstratives & Interrogatives
* **This / These (Proximal)**: **lo** (masc.), **na / en** (fem.), **ngol** (neut.); plural **lu / elu / ngul**.
* **That / Those (Near Addressee)**: **eya** (pl. **ekwa**).
* **That / Those (Remote/Yonder)**: **yaga** (pl. **kwagwa**).
* **Interrogatives**: **Ngai?** (Who?), **A-ngai lo?** (Whose is this?), **Nyo?** (What?), **Ali? / Ai?** (Where? / Which?), **Wurre?** (When?), **Ikwani?** (Why?), **Eko nyai?** (How? / Of what sort?), **Ngeyai? / Nyeyai?** (How many?).`,
    examples: [
      {
        turkana: 'Ngai akero ekon? — Ekiro kang erai Локор.',
        english: 'What is your name? — My name is Lokor.',
        gloss: 'Who name thy? — Name my is Lokor.'
      },
      {
        turkana: 'A-ngai-lo? — Erai ekicholong akan.',
        english: 'Whose is this? — It is my headrest-stool.',
        gloss: 'Of-who-this(masc.)? — Is stool my.'
      },
      {
        turkana: 'Ngai-eth? — Erai thowa ngiturkana.',
        english: 'Who are you (pl.)? — We are Turkana people.',
        gloss: 'Who-ye? — Are we Turkana-pl.'
      },
      {
        turkana: 'Alothi ayon-bon.',
        english: 'I am going by myself / alone.',
        gloss: '1SG.go I-alone'
      }
    ]
  },
  {
    id: 'turkana-verb-conjugation',
    title: '3. Verbal Conjugation, Tense-Aspect & Imperatives',
    category: 'verbs',
    summary: 'Verb-Subject-Object (VSO) word order, Class 1 (a-) and Class 2 (ki-/e-) verbs, and active/passive paradigms.',
    content: `Turkana is predominantly a **Verb–Subject–Object (VSO)** language, though SVO occurs for topicalization. Verbs fall into two morphological classes: **Class 1 (TO-class, infinitive *a-*)** and **Class 2 (KI-class, infinitive *aki- / e-*)**.

### Active Voice Paradigm: *Arami* ("To Beat / Hit") — Barton (1921)
* **Present Indicative**: *k-arami ayon* (I beat), *k-arami ion* (thou beatest), *k-arami ngeth* (he beats), *k-arami thowa* (we beat), *k-arami eth* (ye beat), *k-arami keth* (they beat).
* **Past Simple**: *k-aram ayon* (I beat [past]), *k-aram ion*, *k-aram ngeth*.
* **Perfect ("Already done")**: *adaun akiram* (I have beaten; using auxiliary *adaun* 'to finish').
* **Future**: *k-arami ayon mui* (I shall beat tomorrow; Present tense + temporal adverb).
* **Negative Present/Past**: Formed with the negative particle **mam** or prefix **nye- / nyi-**: *ny-arami ayon* or *mam arami ayon* (I do not beat); *mam ayeni* (I do not know).

### Imperatives & Passive Voice
* **Imperative Commands**: Prefix **to- / ta-** (Class 1) or **ki-** (Class 2) in the singular, adding **-to / -tu** in the plural:
  * *Tolot!* (Go! sg.) → *Tolotto!* (Go! pl.)
  * *Bwa! / Tobwo!* (Come! sg.) → *Potto!* (Come! pl.)
  * *Topper!* (Sleep!) → *Toperirobo!* (Sleep well!)
  * *Karikakin!* (Beat! sg.) → *Karikakinto!* (Beat! pl.)
* **Passive Voice (*-itai / -tai*)**: *karamitai ayon* (I am beaten), *abu karamitai ayon* (I was beaten), *mam karamitai ayon* (I am not beaten).`,
    examples: [
      {
        turkana: 'Emugi ayon atap ka akirin.',
        english: 'I eat porridge and meat.',
        gloss: 'Eat 1SG porridge and meat (VSO order)'
      },
      {
        turkana: 'Bwa nege atipe! — Tolot! / Tolotto!',
        english: 'Come here quickly! — Go! (sg.) / Go! (pl.)',
        gloss: 'Suppletive & t-prefixed imperatives'
      },
      {
        turkana: 'Mam ayeni. — Nyebuni ngeth.',
        english: 'I do not know. — He does not come.',
        gloss: 'Negative particles mam and nye-'
      },
      {
        turkana: 'Karamitai ngeth. — Towa thik!',
        english: 'He is beaten. — Leave it alone!',
        gloss: 'Passive suffix -itai and prohibitive command'
      }
    ]
  },
  {
    id: 'turkana-numerals-calendar',
    title: '4. Numeral System, Pastoral Herd Counts & 12-Month Calendar',
    category: 'syntax',
    summary: 'Base-5/10 counting from 1 to 1,000, pastoral herd units (Abungi, Ouriman), and the 12 traditional lunar months.',
    content: `Turkana numerals follow a quinary-decimal (base-5 / base-10) structure up to 100 and include specialized pastoral herd-counting units documented by Juxon Barton (1921):

### Cardinal Numerals (1–1000)
* **1–5**: **1** *Epei / Akapei*, **2** *Ng'aarei / Ngari*, **3** *Ng'auni / Ngauni*, **4** *Ng'omwon / Ngomwan*, **5** *Ng'akan / Ngakhan* (from *akan* 'hand').
* **6–9 (5 + n)**: **6** *Ng'akan kapei* (5+1), **7** *Ng'akan kaarei* (5+2), **8** *Ng'akan kauni* (5+3), **9** *Ng'akan komwon* (5+4).
* **10**: **Tomon / Ng'i-tomon**.
* **11–19**: *Tomon ka pei* (11), *Tomon ka ari* (12), *Tomon ka uni* (13), *Tomon ka omwan* (14), *Tomon ka akhan* (15), *Tomon akhan ka pei* (16).
* **Tens (20–100)**: **20** *Tomon ari / Ng'atomon ng'aarei*, **30** *Tomon uni*, **40** *Tomon omwon*, **50** *Tomon akhan*, **60** *Tomon akhan ka pei*, **70** *Tomon akhan ka ari*, **80** *Tomon akhan ka uni*, **90** *Tomon akhan ka omwan*, **100** *Tomon tomon / Amiet / Pokol*.
* **Pastoral Herd Units**: **Abungi** (a small herd of 250–300 livestock); **Ouriman / Alip** (a large herd of 500–1,000 cattle).

### The 12 Traditional Turkana Lunar Months (Barton 1921)
The year (**Ekaru**, divided into **Ageboro** 'rainy season' and **Akamu** 'dry season') begins around late January:
1. **Lodungi** (January) • 2. **Lomoruk** (February) • 3. **Loichoto** (March) • 4. **Titima** (April) • 5. **Yeliyel** (May) • 6. **Lopo** (June) • 7. **Lotiak** (July) • 8. **Lolingachunu** (August) • 9. **Lothaban** (September) • 10. **Lolongu** (October) • 11. **Lorarrar** (November) • 12. **Lugwan** (December).`,
    examples: [
      {
        turkana: "Epei, ng'aarei, ng'auni, ng'omwon, ng'akan",
        english: 'One, two, three, four, five',
        gloss: 'Base-5 foundational numerals'
      },
      {
        turkana: 'Tomon ka pei (11) • Tomon ari (20) • Tomon tomon (100)',
        english: 'Eleven (11) • Twenty (20) • One hundred (100)',
        gloss: 'Decimal compounding with ka (and)'
      },
      {
        turkana: 'Abungi (250–300) • Ouriman (500–1000)',
        english: 'Small herd count • Large herd count',
        gloss: 'Traditional pastoral herd units (Barton 1921)'
      },
      {
        turkana: 'Ageboro (Titima, Yeliyel) • Akamu (Lotiak, Lolingachunu)',
        english: 'Rainy season (April, May) • Dry season (July, August)',
        gloss: 'Pastoral seasonal calendar'
      }
    ]
  },
  {
    id: 'turkana-mata-greetings-syntax',
    title: '5. Liturgical Pastoral Greetings (Mata) & Prepositional Syntax',
    category: 'phonology',
    summary: 'The multi-turn Mata pastoral blessing liturgy, diurnal solar clock, and spatial prepositions.',
    content: `### The *Mata* Pastoral Greeting Liturgy (Barton 1921)
In traditional Turkana society, greetings are not casual single-word exchanges but a structured litany of blessings (**Mata** = "Hail! / Health to...") recited between host and visitor:
1. **Mata!** (Hail!) → Reply: **Mata!**
2. **Mata ng'atuk!** (Health to your cattle!) → Reply: **Mata ouwi!** (Health to your homestead!)
3. **Mata ng'idwi!** (Health to your children!) → Reply: **Mata ariama!** (Health to our meetings!)
4. **Mata ng'ebarin!** (Health to your property!) → Reply: **Mata ng'abero!** (Health to your wives!)
5. Both conclude in unison: **Mata ejik!** (Complete health!)

### The Diurnal Solar Clock (*Akolon*)
Time of day is expressed by the position and motion of the sun (**akolon**):
* **Ataparach** (Dawn / first light)
* **Alomo akolon** (6 a.m. — sunrise)
* **Achou akolon** (7 a.m. — morning sun ascending)
* **Ethimakunyak** (Mid-morning)
* **Naparan / Ewi akolon** (12 p.m. — overhead sun / noon)
* **Athom akolon** (2 p.m. — declining afternoon sun)
* **Ebon / Ebong** (Late afternoon / evening)
* **Aloma akolon** (6 p.m. — sunset; lit. 'the sun enters')
* **Akuari** (Night) • **Akou mutot** (Dark night).`,
    examples: [
      {
        turkana: "Mata ng'atuk! — Mata ouwi! — Mata ejik!",
        english: 'Health to your cattle! — Health to your village! — Complete health!',
        gloss: 'Traditional pastoral greeting liturgy'
      },
      {
        turkana: 'Alomo akolon (6 a.m.) • Ewi akolon (12 p.m.) • Aloma akolon (6 p.m.)',
        english: 'Sunrise • Midday overhead sun • Sunset',
        gloss: 'Solar diurnal timekeeping expressions'
      },
      {
        turkana: 'Toma akie • Kudiama emoro • Kwapa akitoi • Kinga anuk',
        english: 'Inside the house • On top of the mountain • Under the tree • Outside the kraal',
        gloss: 'Spatial prepositions toma, kudiama, kwapa, kinga'
      }
    ]
  },
  {
    id: 'turkana-comparative-corpus',
    title: '6. Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Turkana (Ng\'aturkana))',
    category: 'phonology',
    summary: 'Cross-referenced phonological inventory, historical orthography mappings (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911, Barton 1921), and modern open-access corpus alignments.',
    content: `This reference section synthesizes the historical public-domain documentation (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911, Barton 1921) with contemporary open-access linguistic datasets (CLDF/ASJP, PHOIBLE 2.0, PanLex, Wiktionary, and AI4D/Masakhane/Sunbird repositories).

### Orthographic & Phonological Correspondences
* **Vowel Quality & Length**: 19th- and early 20th-century sources mark length and openness using macrons (*ā, ē, ī, ō, ū*) and breves (*ă, ĕ, ĭ, ŏ, ŭ*), whereas modern orthographies use double vowels (*aa, ee, ii, oo, uu*) or unmarked phonemic vowels with ATR harmony.
* **Velar Nasal (*ṅ / ñ / ng' / ŋ*)**: Written as *ṅ* or *ñ* in Johnston (1902) and Barton (1921), and standardized as *ng'* or *ŋ* in modern Kenya Hub orthography.
* **Dental/Alveolar & Palatal Alternations**: Historical transcriptions preserve regional dialect variants across northern, central, and southern communities.`,
    examples: [
      {
        turkana: "Epei • Ng'aarei",
        english: 'One (1) • Two (2)',
        gloss: 'Verified in Turkana (Ng\'aturkana) Dictionary & Corpus'
      },
      {
        turkana: "Ng'auni • Ng'omwon",
        english: 'Three (3) • Four (4)',
        gloss: 'Verified in Turkana (Ng\'aturkana) Dictionary & Corpus'
      },
      {
        turkana: "Ng'akan • Ng'akan kapei",
        english: 'Five (5) • Six (6)',
        gloss: 'Verified in Turkana (Ng\'aturkana) Dictionary & Corpus'
      }
    ]
  },
  {
    id: 'turkana-eliot-1909-beech-1911-nilotic-comparison',
    title: '7. Sir Charles Eliot (1909) & Mervyn Beech (1911) Comparative Nilotic & Suk–Turkana Grammar',
    category: 'morphology',
    summary: 'Complete grammatical synthesis of Turkana, Karamojo, Suk, Nandi, Bari, Teso, Masai, Dinka, Shilluk & Acholi from Sir Charles Eliot (1909) and Mervyn Beech (1911).',
    content: `### 1. Sir Charles Eliot's Classification of Nilotic & Nandi-Group Languages (1909, pp. xxviii–xxxiv; Beech 1911, pp. 149–151)
In his Introduction to A. C. Hollis's *The Nandi: Their Language and Folk-Lore* (1909) and Mervyn Beech's *The Suk: Their Language and Folklore* (1911), Sir Charles Eliot establishes the structural relationship between **Turkana**, **Karamojo**, **Teso**, **Masai**, **Bari**, **Nandi–Lumbwa**, **Suk (Pokot)**, and the Nile Valley languages (**Dinka**, **Shilluk**, **Acholi / Gang**):

* **Lexical Cognate Ratios with Suk (Beech 1911, pp. xv, xxiii–xxiv, 150–151)**:
  * **Nandi, Kamásia & Dorobo = 1/6 to 1/8** of vocabulary directly identical with Suk, sharing core pronominal, verbal, and negative prefixes (*ma-*).
  * **Turkana & Karamojo = ~1/10** of Suk vocabulary, largely pastoral cultural loans, material culture (*ngicholong / ñgecher* headrest-stool, *edonga / kedoñgo* dance, *ateker* trough, *alakam* neck-ring, *aparparat* nose-plate), and border bilingualism.
  * **Masai = ~1/26** of Suk vocabulary.
* **Absence of Definite Articles in Turkana, Karamojo & Suk**: Unlike **Nandi** (which suffixes *-to/-ta, -iek* in the primary state) and **Masai** (which prefixes *ol- / en-*), **Turkana**, **Karamojo**, and **Suk** use NO definite article. Instead, Turkana and Karamojo preserve **demonstrative/gender noun prefixes** (**e- / a- / i-** in singular; **ngi- / nga-** in plural, e.g. *e-kicholong*, *ngi-muren*, *a-teker*), which correspond to the Masai gender prefixes without the article element *-l- / -n-*.

---

### 2. Comparative Pronoun, Possessive & Demonstrative Paradigms (Eliot 1909, pp. xxix–xxxii)
| Grammatical Feature | Turkana (Eliot 1909 / Beech 1911) | Karamojo | Nandi | Suk (Pokot) | Masai |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1st Sg. Pronoun ('I')** | **Ayoñg / Ayon** | *Aca* | *Ane* | *Ani* | *Nanu* |
| **2nd Sg. Pronoun ('Thou')** | **Iyoñg / Ion** | *Iyo* | *Inye* | *Inyi* | *Iyie* |
| **3rd Sg. Pronoun ('He/She')** | **Nyezi / Ngeth** | *Nyes* | *Inendet* | *Inye / Nyer* | *Ninye* |
| **Possessives ('My / Thy / His')** | **khañg / khon / keny** (*akan / ekon / ekin*) | *kañg / kon / keñg* | *nyuñg / ñguñg / nyin* | *nyan / ñgwan / nyi* | *lai / lino / lenye* |
| **Demonstratives ('This / That')** | **lo, na, en** (pl. **lu, ngul**) | *lo, na, yen* | *ni, chu* | *ni, chichi* | *ele, ena* (pl. *kulo, kuna*) |
| **Relative Particle ('Who/Which')** | **lo / na** (pl. **lu**) | *lo / na* | *ne-* (pl. *che-*) | *nya-* (pl. *cha-*) | *o- / na-* |`,
    examples: [
      {
        turkana: 'Ayoñg (khañg) • Iyoñg (khon) • Nyezi (keny)',
        english: 'I (my) • Thou (thy) • He/She (his/her)',
        gloss: 'Eliot (1909, p. xxx) Turkana & Karamojo pronominal & possessive paradigm'
      },
      {
        turkana: 'e-kicholông (pl. ngicholong) • ateker • ngi-muren',
        english: 'Carved headrest-stool • Wooden watering trough • Warriors',
        gloss: 'Beech (1911, pp. xxiii–xxiv) Turkana gender-prefixed nouns loaned into Suk'
      },
      {
        turkana: 'Adaru • Alakam • Aparparat • Aturpopo • Siolip',
        english: 'Elbow tail ornament • Neck-ring • Nose-plate • Brass ear-ring • Felted hair-bag chignon',
        gloss: 'Beech (1911, pp. 17–19) shared Suk–Turkana pastoral ornaments & regalia'
      }
    ]
  },
  {
    id: 'turkana-dundas-1910-tribes-clans-calendar',
    title: '8. Turkana 16 Territorial Sections, 19 Clans & 12-Month Calendar (Hon. K. R. Dundas 1910)',
    category: 'nouns',
    summary: 'Historical documentation of the 16 Turkana tribes, 19 clans (including Ngaruwo rain-makers), life-stage terminology, dualistic sky/earth theology (Agipie), and the 12-month calendar from Hon. K. R. Dundas (1910, pp. 66–70).',
    content: `### 1. The 16 Turkana Territorial Tribes & 19 Clans (Dundas 1910, pp. 67–68)
Hon. K. R. Dundas (*Journal of the Royal Anthropological Institute*, Vol. 40, 1910, pp. 66–70) recorded the sixteen major territorial divisions (**atela / ngetelai**) of the Turkana from north to south:
1. **Ngissiger** (stretching into Abyssinia/Ethiopia)
2. **Ngirimono**
3. **Ngicuro**
4. **Ngibelai**
5. **Ngikamatak**
6. **Ngissir**
7. **Ngatunyo**
8. **Ngiyapakuno**
9. **Ngissonyoka**
10. **Ngiboicheros**
11. **Ngikajik**
12. **Ngiturkana**
13. **Ngoitunya** (around Lake Sugota)
14. **Ngolio Attegir** (around Lake Sugota)
15. **Ngimasuk** (between the Weiwei/Turkwel and Kerio rivers)
16. **Ngibellai** (east of the Kerio River)

* **The 19 Clans of Ngoitunya & Ngolio Attegir**: *Ngoleroto, Ngigero, Ngiduya, Ngakinyang, Ngimirri, Ngipuco, Ngimedeo, Ngilobal, Ngikatap, Ngirarak, Ngissiger, **Ngaruwo (the rain-makers' clan)**, Ngipongaa, Ngidocha, Ngikaleso, Ngariama, Ngitarapakolong, Ngikadanya, Ngimuya*.

---

### 2. Life-Stage Terminology & Dualistic Theology (Dundas 1910, pp. 68–69)
* **Male Life Stages**: **Nidue** (boy before puberty) → **Egile** (circumcised/initiated warrior; plural *ngiliok*) → **Kasikou** (married elder; addressed respectfully as **Oppa**).
* **Female Life Stages**: **Apesur** (unmarried girl) → **Aberu** (married woman/wife) → **Agemat** (elderly woman).
* **Cosmology**: **Agipie** is the benevolent god of the skies (prayed to with sacrifices of an ox, sheep, or goat during illness), contrasted with the malevolent god dwelling in the nether world, rocks, and rivers. Thunderstorms are explained as the two gods fighting and hurling lightning at each other.

---

### 3. The 12-Month Calendar & Three Seasons (Dundas 1910, p. 70)
Dundas recorded the Turkana year beginning with the March rains, divided into **Nakiborror** (wet season, 6 months), **Nakamou** (dry season, 6 months), and **Nait** (3 months when the grass turns yellow: August–October):
* **Nakiborror (Wet Season)**: 1. **Lomaruk** (March), 2. **Tetimaru** (April), 3. **Eliel** (May), 4. **Loichoto** (June), 5. **Loisoban** (July), 6. **Loitiak** (August — 1st month of *Nait*).
* **Nakamou (Dry Season)**: 7. **Lolongo** (September — 2nd month of *Nait*), 8. **Lopo** (October — 3rd month of *Nait*), 9. **Lorara** (November), 10. **Lomuk** (December), 11. **Logwang** (January), 12. **Lodunge** (February).`,
    examples: [
      {
        turkana: 'Nidue → Egile → Kasikou (Oppa) • Apesur → Aberu → Agemat',
        english: 'Boy → Warrior → Elder • Girl → Wife → Old woman',
        gloss: 'Male and female age-grade terminology (Dundas 1910, p. 68)'
      },
      {
        turkana: 'Nakiborror (Lomaruk–Loitiak) • Nakamou (Lolongo–Lodunge) • Nait',
        english: 'Wet season (March–August) • Dry season (September–February) • Yellow-grass season (August–October)',
        gloss: 'Turkana seasonal and lunar calendar (Dundas 1910, p. 70)'
      }
    ]
  }
];
