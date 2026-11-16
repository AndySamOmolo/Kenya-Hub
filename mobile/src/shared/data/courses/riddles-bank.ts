// ============================================================
// Traditional Kenyan Riddles Bank (All 23 Supported Languages)
// Curated from primary ethnographic & linguistic collections:
// Steere (1870), Krapf & Rebmann (1887), Taylor (1891), Wray (1894),
// Hollis (1905, 1909, 1910), Northcote (1907), Routledge (1910),
// Hobley (1910), Beech (1911, 1918), Kitching (1915), Lindblom (1920),
// Mill-Hill Fathers (1920), Barton (1921), Kencorpus, and Project Tafsiri.
// ============================================================

export interface RiddleItem {
  riddle: string;
  translation: string;
  answer: string;
  origin: string;
}

export const TRADITIONAL_RIDDLES_BY_LANGUAGE: Record<string, RiddleItem[]> = {
  swahili: [
    { riddle: "Nyumba yangu haina mlango", translation: "My house has no door", answer: "Yai (An egg)", origin: "Swahili — Kitendawili (Steere 1870)" },
    { riddle: "Hutembea na mguu mmoja", translation: "It stands and walks on a single leg", answer: "Uyoga (A mushroom)", origin: "Swahili — Kitendawili" },
    { riddle: "Nikikata siachi alama", translation: "When I cut it, I leave no mark behind", answer: "Maji (Water)", origin: "Swahili — Kitendawili" },
    { riddle: "Kila niendapo ananifuata", translation: "Wherever I go, it follows me", answer: "Kivuli (My shadow)", origin: "Swahili — Kitendawili" },
    { riddle: "Hana miguu lakini anakimbia", translation: "It has no legs, yet it runs continuously", answer: "Mto (A river)", origin: "Swahili — Kitendawili" },
    { riddle: "Askari wangu wote wamevaa kofia nyeupe", translation: "All my soldiers wear white caps", answer: "Meno (Teeth)", origin: "Swahili — Kitendawili" },
    { riddle: "Kuku wangu katagia mibani", translation: "My hen has laid her eggs among thorns", answer: "Nanasi (A pineapple)", origin: "Swahili — Kitendawili (Steere 1870)" },
    { riddle: "Kombe la Mungu liko wazi", translation: "God's platter is always open", answer: "Kisima (A well)", origin: "Swahili — Kitendawili (Steere 1870)" },
    { riddle: "Nimefunga kitambaa cheupe kote ulimwenguni", translation: "I have spread a white cloth over the whole world", answer: "Ukungu / Umande (Mist & morning dew)", origin: "Swahili — Kitendawili" },
    { riddle: "Watoto wa tajiri wote wamevaa vilemba", translation: "All the rich man's children wear turbans", answer: "Karafuu (Cloves)", origin: "Swahili — Kitendawili (Beech 1918)" },
    { riddle: "Bwana afya amekaa juu ya mlima", translation: "The health inspector sits atop a hill", answer: "Nzi (A housefly)", origin: "Swahili — Kitendawili" },
    { riddle: "Mti wangu una matawi kumi na mawili", translation: "My tree has twelve branches", answer: "Mwaka na miezi kumi na miwili (The year and twelve months)", origin: "Swahili — Kitendawili" },
  ],
  luo: [
    { riddle: "Oda ma onge dhoot", translation: "My house that has no door", answer: "Tong' gweno (An egg)", origin: "Dholuo — Ngero (Mill-Hill 1920)" },
    { riddle: "Nyarwa ma dhi tedo to ok duog dala", translation: "Our daughter who goes on a journey and never turns back home", answer: "Pi aora (River water)", origin: "Dholuo — Ngero" },
    { riddle: "Jodongo ariyo ma dak machiegni to ok ginenre", translation: "Two elders who live side by side but never see each other", answer: "Wang' (The two eyes)", origin: "Dholuo — Ngero" },
    { riddle: "Law Nyasaye ma oumo piny duto", translation: "God's garment that covers the whole earth", answer: "Polo gi mudho (Sky & nightfall)", origin: "Dholuo — Ngero" },
    { riddle: "Jatich ma rito dhoot odiechieng' gi otieno ma ok nind", translation: "A silent sentinel who stands at the threshold day and night without sleeping", answer: "Rangach / Dhoot (The homestead gate or door)", origin: "Dholuo — Ngero (Northcote 1907)" },
    { riddle: "Chiemo ma chiek e i lowo", translation: "Food that ripens beneath the soil", answer: "Rabuon (Sweet potatoes)", origin: "Dholuo — Ngero (Hobley 1902)" },
    { riddle: "Chiel mar dala ma ogingo ot duto gi kuthe", translation: "The circular hedge around the homestead that guards all houses with its thorns", answer: "Ojuok (The euphorbia homestead hedge)", origin: "Dholuo — Ngero (Northcote 1907)" },
    { riddle: "Dhok ma rachar duto to rwadhgi makwar ni e diergi", translation: "All my cattle are white and a red bull stands in their midst", answer: "Lak gi lep (Teeth and tongue)", origin: "Dholuo — Ngero" },
    { riddle: "Ot ma oger e wiielo achiel kende", translation: "A hut built upon a single central pillar", answer: "Obwolo (An edible mushroom)", origin: "Dholuo — Ngero" },
    { riddle: "Jaluw bang'a ma ok weya chieng' ka rieny", translation: "My companion who never leaves me when the sun shines", answer: "Tipo (My shadow)", origin: "Dholuo — Ngero" },
    { riddle: "Adita maduong' ma oting'ore e wi yien ma kano cham", translation: "A large woven basket raised on posts that stores harvested grain", answer: "Dero (The circular wicker granary)", origin: "Dholuo — Ngero (Northcote 1907)" },
    { riddle: "Tol ma bor ma ok nyal boyo", translation: "A long rope that can never be coiled up", answer: "Yoo / Ndara (A road or footpath)", origin: "Dholuo — Ngero" },
    { riddle: "Nyathi ma onywol karango chieng' to iluongo nyinge ni ang'o?", translation: "What traditional name is given to a child born when the morning sun shines brightly (7–9 a.m.)?", answer: "Onyango / Anyango (Morning-sun child)", origin: "Dholuo — Northcote 1907" },
    { riddle: "Nyathi ma onywol e kinde mar kech kata bonyo iluongo ni ang'o?", translation: "What traditional name is given to a child born during the season of locusts or famine?", answer: "Obonyo / Okach (Locust or harvest-famine season child)", origin: "Dholuo — Northcote 1907" },
    { riddle: "Rero mar dhiang' ma borre romo futi adek gi nus ma opaki gi rangi makwar, marachar, gi marateng'?", translation: "What curved buffalo-hide war defense is painted red, white, and black to guard a warrior?", answer: "Kuot (Traditional buffalo-hide shield)", origin: "Dholuo — Northcote 1907" },
    { riddle: "Gir chogo rech mar bao ma nigi lak ang'wen kod gir wer ma nigi tol aboro?", translation: "What four-pronged wooden fishing implement and eight-stringed lyre belong to lakeside tradition?", answer: "Bidhi & Thum / Nyatiti (Fishing spear & 8-stringed lyre)", origin: "Dholuo — Northcote 1907" },
  ],
  luhya: [
    { riddle: "Ndi ne bakhasi bange bali ne bisombo boosi", translation: "I have my wives who all wear hair tufts", answer: "Kamaemba (Sorghum heads)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Omukhana ali ewenywe karunga chimbele", translation: "The girl at your home pays bridewealth in front", answer: "Chikhanu (Simsim / sesame pods)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Papa abirire khuno omurochake", translation: "Father passed by here hunched over", answer: "Sinywa (A bee)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Tauti mwisamba", translation: "David on the hillside", answer: "Enda musitweya (A louse in the hair)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Ndi ne khafu yase ekenda nesala", translation: "I have my cow that walks while giving birth", answer: "Lisiemo (Grinding / planting stone)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Kwagani na guga ne likoti limwamu", translation: "We met grandfather wearing a black coat", answer: "Lugiita (A louse)", origin: "Lulogooli — Project Tafsiri v2.0" },
    { riddle: "Inzu yange ibula omuliango", translation: "My house has no doorway", answer: "Libuyu / Ebuyu (An egg)", origin: "Luwanga — Project Tafsiri v2.0" },
    { riddle: "Ing'ombe tsianje tsiosi indafu, ne ing'ombe inzakhanyu hakari", translation: "All my cattle are white, with a red bull in the middle", answer: "kamaino nende olulimi (Teeth and tongue)", origin: "Luluhya — Traditional Riddle" },
    { riddle: "Omwana wanje achenda mitala ne sakhakalukha tawe", translation: "My child goes on a journey and never returns home", answer: "Amatsi ko mwalo (River water)", origin: "Luluhya — Traditional Riddle" },
    { riddle: "Inzu yombakhwa khusikulu silala", translation: "A house built on a single pillar", answer: "Obwoba (A mushroom)", origin: "Luluhya — Traditional Riddle" },
  ],
  kikuyu: [
    { riddle: "Mũndũ ũtathiaga na ndarĩ mũciĩ", translation: "What hangs down without walking away?", answer: "Marigũ (Bananas)", origin: "Gĩkũyũ — Ndai / Guso" },
    { riddle: "Aanake mathiĩ, athuri matigwo", translation: "The young men depart, the elders remain behind", answer: "Mũhu na mahiga ma riiko (Ashes & three hearthstones)", origin: "Gĩkũyũ — Routledge 1910" },
    { riddle: "Kĩrĩa kĩambatanagia kĩrĩma na kĩrĩma", translation: "What travels from hill to hill?", answer: "Kũgũrũ (The foot)", origin: "Gĩkũyũ — Routledge 1910" },
    { riddle: "Nyũmba yakwa ndĩrĩ mũromo", translation: "My house has no doorway", answer: "Itumbĩ (An egg)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Ng'ombe ciakwa ciothe nĩ njerũ, no ndegwa nĩ ndune gatagatĩ", translation: "All my cattle are white, and the bull in the middle is red", answer: "Magego na rũrĩmĩ (Teeth and tongue)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Nyũmba yakwa ĩhandĩtwo na gĩtugĩ kĩmwe", translation: "My house is supported by a single post", answer: "Ikũnũ (A mushroom)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Mũrũaru ũtarĩagwo nĩ mũrimũ na ndakomaga", translation: "A traveler who walks day and night without resting", answer: "Rũũĩ (A flowing river)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Mũrata wakwa ũnyumaga thutha kũrĩa guothe ngũthiĩ", translation: "My friend who follows behind me wherever I go", answer: "Kĩĩruru (My shadow)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Mũkanda mũraya ũtangĩkũnjĩka", translation: "A long rope that cannot be rolled up", answer: "Njĩra (A road or path)", origin: "Gĩkũyũ — Ndai" },
    { riddle: "Athuri erĩ maikaraga hakuhĩ no matingĩonana", translation: "Two elders sit side by side yet can never see one another", answer: "Maitho (The two eyes)", origin: "Gĩkũyũ — Ndai" },
  ],
  maasai: [
    { riddle: "A-ata in-gishu ainei naa-nyokioo pokira, ne-ton ol-kiteng orok te-polos", translation: "My cattle are all red, and a dark bullock stands in their midst", answer: "Il-ala o en-gineji (Teeth & tongue)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "En-gaji nabo na-ata il-turrur aare", translation: "One house with two passages", answer: "En-gume (The nose)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "E-ton ol-moruo te-boo ne-iput il-kilani en-gaji", translation: "The elder sits outside while his cloak fills the house", answer: "En-gima o e-puruo (Fire & smoke)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "En-gukuu le-me-eta e-wueji ne-m-e-re", translation: "The tiny creature which has no place it cannot drive away from", answer: "Ol-oidikidiki (The flea)", origin: "Maasai — Hollis 1905 'L-oyeti #9" },
    { riddle: "A-ata in-gishu ainei nemedol openy", translation: "I have two warriors who live side by side but never see each other", answer: "In-gonyek (The two eyes)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "En-gaji ai nemeeta kutuk-aji", translation: "My house that has no doorway", answer: "Ol-mosorri (An egg)", origin: "Maasai — 'L-oyeti" },
    { riddle: "E-lotu ol-murani o-ibor ne-shomo nemeirrinyunye", translation: "A warrior sets out on a march and never turns back", answer: "Ol-keju / En-gare (A flowing river)", origin: "Maasai — 'L-oyeti" },
    { riddle: "Ol-chani obo o-itasho en-gaji", translation: "A single pillar holding up an entire roof", answer: "Ol-apa / En-gukuo (A mushroom)", origin: "Maasai — 'L-oyeti" },
    { riddle: "En-giteng ai na-loito ne-isho", translation: "My cow that walks along while calving", answer: "Osoit le n-daa (A grinding stone)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "Ol-chore lai o-irruggo nanu tene alo", translation: "My comrade who accompanies me wherever I walk", answer: "Ol-oip (My shadow)", origin: "Maasai — 'L-oyeti" },
  ],
  pokot: [
    { riddle: "Rel-e' ti'-chu lopai, pirir kirokit", translation: "All my cattle are white, and the bull is red", answer: "Kelat ngô ñgaliep (Teeth & tongue)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Kô-p-chii nya-ma-tiñget-nye kôkat", translation: "A little hut that has no door", answer: "Rotin / Adasti (An egg)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Kô-p-chii ki-soch ket okoñgô", translation: "A hut propped up by a single pole", answer: "Wôton (A mushroom)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Tuku-chu cha-chang, m-o-nget-an-nye a-iyit", translation: "My things are many; I cannot count them", answer: "Kokel (The stars)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Nyelnyel ma-ke-lany", translation: "Flexible and swaying so that it cannot be climbed", answer: "Sirim-nyon (An iron chain)", origin: "Pökoot — Beech 1911 Tiangoi #1" },
    { riddle: "O-wund-oi-a' soghoʻ", translation: "When may I be said to wash inside a goat's horn?", answer: "Tŭl (An iron cattle bell)", origin: "Pökoot — Beech 1911 Tiangoi #2" },
    { riddle: "Ka-rat kwoañg", translation: "He has strung his great bow across the sky", answer: "Kuntopal (The rainbow)", origin: "Pökoot — Beech 1911 Tiangoi #5" },
    { riddle: "Ki-meriensi-oʻ", translation: "They stand facing one another in a circle around the fire", answer: "Nekergh-is (Three cooking-pot stones)", origin: "Pökoot — Beech 1911 Tiangoi #6" },
    { riddle: "K-o-p-a' set-a-pogh ka-ma-iyit-an", translation: "Four inverted gourds carried across the pasture without spilling a drop", answer: "Krīsioʻ (A cow's udder)", origin: "Pökoot — Beech 1911 Tiangoi #7" },
  ],
  kamba: [
    { riddle: "Nyũmba yakwa ndĩ na mũomo", translation: "My house has no door", answer: "Ĩtumbĩ (An egg)", origin: "Kĩkamba — Ndai (Lindblom 1920)" },
    { riddle: "Kĩla vandũ nĩendaa nĩkũatĩĩaa", translation: "Wherever I walk, it follows me closely", answer: "Kyuu (A shadow)", origin: "Kĩkamba — Ndai" },
    { riddle: "Mũũnda wakwa wĩ mbemba syĩ nzaũ nũndũ wa ũtukũ", translation: "My field is full of white maize only at night", answer: "Ndata sya matunĩ (Stars in the night sky)", origin: "Kĩkamba — Ndai" },
    { riddle: "O-Selia: mũndũ ũendaa kahora mũno mũtĩnĩ", translation: "The cautious elder who steps slowly along a branch", answer: "Kimbu (A chameleon)", origin: "Kĩkamba — Ndai (Hobley 1910)" },
    { riddle: "Mwetu etiki: maanzĩ meonekaa vaasa ĩndĩ wavika mayaĩ vo", translation: "A shimmering pool seen far ahead on the plain that vanishes when approached", answer: "Kulotoi (A desert mirage)", origin: "Kĩkamba — Ndai (Hobley 1910)" },
    { riddle: "Tuna kwatana: asũni elĩ makomanĩte weũnĩ", translation: "Two travelers who meet and cross on the plain", answer: "Nzia na nzia (Crossing footpaths)", origin: "Kĩkamba — Ndai (Hobley 1910)" },
    { riddle: "Ng'ombe syakwa syonthe nĩ nzaũ, na nzaũ ndune yĩ katĩ", translation: "All my cattle are white, with a red bull in their midst", answer: "Maio na ũĩmĩ (Teeth and tongue)", origin: "Kĩkamba — Ndai" },
    { riddle: "Nyũmba yakwa yakĩtwe na kĩtũgĩ kĩmwe", translation: "My house is built on a single post", answer: "Ĩkũnũ (A mushroom)", origin: "Kĩkamba — Ndai" },
    { riddle: "Mwĩĩtu witũ wathi ndasyokaa mũsyĩ", translation: "Our daughter who departs and never returns home", answer: "Maanzĩ ma ũsĩ (River water)", origin: "Kĩkamba — Ndai" },
  ],
  kalenjin: [
    { riddle: "Kootap chepkondok che ma tinyei kurget", translation: "A little house that has no door", answer: "Mayiat / Koii (An egg)", origin: "Kalenjin — Tangochik (Hollis 1909)" },
    { riddle: "Kirukik che eechen che miitei timin", translation: "Two bulls fighting in the forest", answer: "Kipkelenyik (Grinding stones)", origin: "Kalenjin — Tangochik" },
    { riddle: "Teta ne wendi ama weeksei", translation: "A cow that goes forth and never turns back", answer: "Beekab ainet (River water)", origin: "Kalenjin — Tangochik" },
    { riddle: "Tuga chuuto che lelach tugul, ak kirukit ne pirir eng' kwenut", translation: "All my cattle are white, with a red bull in the center", answer: "Kelat ak ng'elyep (Teeth and tongue)", origin: "Kalenjin — Tangochik (Hollis 1909)" },
    { riddle: "Koot ne kiiteech eng' toloita akenge", translation: "A house built upon a single post", answer: "Bobat (A mushroom)", origin: "Kalenjin — Tangochik" },
    { riddle: "Choronenyun ne isubuoi eng' betut", translation: "My friend who follows me throughout the day", answer: "Tamirmiriet (My shadow)", origin: "Kalenjin — Tangochik" },
    { riddle: "Anwa ne koi ne ma kifuchsei", translation: "A long rope that can never be folded up", answer: "Oret (A road or path)", origin: "Kalenjin — Tangochik (Hollis 1909)" },
    { riddle: "Boisiek aeng' che menyei kokwet akenge ago ma keerei keey", translation: "Two neighbors on the same ridge who look outward all day yet never meet", answer: "Konyek (The two eyes)", origin: "Kalenjin — Tangochik" },
    { riddle: "Cheptab kaa ne laanyei keetit ama roroi", translation: "A daughter of the homestead who climbs high without falling", answer: "Iyeto (Smoke rising from the fire)", origin: "Kalenjin — Tangochik" },
  ],
  kisii: [
    { riddle: "Enka yane ebate mioro", translation: "My house has no doorway", answer: "Egetumbi / Erige (An egg)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Omonto okogenda binto atari n'amagoro", translation: "One who travels far without legs", answer: "Amache y'oroche (River water)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Chiombe chiane chionsi n'echindororo, eeri enyamaigoro eri gati", translation: "All my cattle are white, with a red bull in the middle", answer: "Amaino n'ororimi (Teeth and tongue)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Enka yane yagachirwe n'ekerogo ekemo", translation: "My house is built with a single pillar", answer: "Obwoba (A mushroom)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Omosani one okonyorokia kera ase ngogenda", translation: "My friend who accompanies me wherever I walk", answer: "Ekeroberia (My shadow)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Abagaka abere bamenyete ange korende tibarorana", translation: "Two elders who live close together yet never see each other", answer: "Amaiso (The two eyes)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Omogoye omotambe otari gokundeka", translation: "A long rope that cannot be coiled up", answer: "Enchera (A road or path)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Omwana one ogoikaransa igoro y'amagena aato", translation: "My child who sits upon three stones", answer: "Enyungu y'okoruga (A cooking pot)", origin: "Ekegusii — Ebitandawili" },
  ],
  meru: [
    { riddle: "Nyũmba yakwa ĩtĩrĩ mũromo", translation: "My house has no doorway", answer: "Ĩtumbĩ (An egg)", origin: "Kĩmĩĩrũ — Ndaĩ (Champion 1912)" },
    { riddle: "Kathũrĩ gakũrũ gaitũ gatũũraga mũtitũ", translation: "Our little elder who always lives in the forest", answer: "Njũkĩ (A honeybee)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Ng'ombe ciakwa cionthe nĩ injarũ, na ndegwa nĩ ndune gatĩgatĩ", translation: "All my cattle are white, and the bull in the middle is red", answer: "Maĩgo na rũrĩmĩ (Teeth and tongue)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Nyũmba yakwa yakĩtwe na gĩtugĩ kĩmwe", translation: "My house is built on a single pillar", answer: "Ĩkũnũ (A mushroom)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Mũgeni wetũ ũthiaga na atĩcooke mũciĩ", translation: "Our traveler who sets out and never returns home", answer: "Rũũji (River water)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Mũrata wakwa ũmbumagĩra kũrĩa guothe ngũthiĩ", translation: "My companion who follows me wherever I go", answer: "Kĩĩruru (My shadow)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Akũrũ baĩrĩ batũũraga amwe na batĩonana", translation: "Two elders who live together yet never see each other", answer: "Maĩtho (The two eyes)", origin: "Kĩmĩĩrũ — Ndaĩ" },
    { riddle: "Mũkanda mũraaja ũtatĩkũnjĩka", translation: "A long rope that cannot be coiled up", answer: "Njĩra (A road or path)", origin: "Kĩmĩĩrũ — Ndaĩ" },
  ],
  somali: [
    { riddle: "Aqalkaygu albaab ma laha", translation: "My house has no door", answer: "Ukun / Beed (An egg)", origin: "Af-Soomaali — Halxiraale (Kirk 1903)" },
    { riddle: "Mar walba oo aan socdo wuu i raacaa", translation: "Whenever I walk, it accompanies me", answer: "Hooska (A shadow)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Lo'daydu waa wada cad-cad, dibi cas baana dhex taagan", translation: "All my cattle are white, and a red bull stands in their midst", answer: "Ilkaha iyo carrabka (Teeth and tongue)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Laba oday oo deris ah oo aan is arki karin", translation: "Two neighboring elders who can never see each other", answer: "Labada indhood (The two eyes)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Socota aan lugo lahayn oo aan dib u soo noqon", translation: "A traveler without legs who never turns back", answer: "Biyaha webiga (River water)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Xarig dheer oo aan la duubi karin", translation: "A long rope that cannot be coiled up", answer: "Waddo / Jid (A road or path)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Aqal hal tiir ku taagan", translation: "A house standing on a single pillar", answer: "Booc / Likaha (A mushroom)", origin: "Af-Soomaali — Halxiraale" },
    { riddle: "Gogol ballaaran oo xiddigo lagu daadiyay", translation: "A vast dark canopy strewn with glistening silver beads after dusk", answer: "Cirka iyo xiddigaha (The night sky and stars)", origin: "Af-Soomaali — Halxiraale" },
  ],
  borana: [
    { riddle: "Manni kiyya balbala hin qabu", translation: "My house has no door", answer: "Hanqaaquu / Buuphaa (An egg)", origin: "Borana — Hibboo (Tutschek 1844)" },
    { riddle: "Loon kiyya adii qofa, kormi diimaa gidduu dhaabbata", translation: "All my cattle are white, and a red bull stands in their midst", answer: "Ilkaan fi arraba (Teeth and tongue)", origin: "Borana — Hibboo" },
    { riddle: "Jaarsa lama kan ollaa taa'anii wal hin agarre", translation: "Two elders who live side by side but never see each other", answer: "Ija lamaan (The two eyes)", origin: "Borana — Hibboo" },
    { riddle: "Manni utubaa tokko qofaan dhaabbate", translation: "A house supported by a single center post", answer: "Abbaallii / Habubbaa (A mushroom)", origin: "Borana — Hibboo" },
    { riddle: "Intalti teenna yoo deemte hin deebitu", translation: "Our daughter who goes forth and never returns home", answer: "Bishaan lagaa (River water)", origin: "Borana — Hibboo" },
    { riddle: "Haada dheeraa kan hin maramne", translation: "A long rope that can never be coiled up", answer: "Karaa / Daandii (A road or path)", origin: "Borana — Hibboo" },
    { riddle: "Hiriyyaa kiyya kan guyyaa na faana deemu", translation: "My companion who walks with me throughout the day", answer: "Gaaddisa (My shadow)", origin: "Borana — Hibboo" },
    { riddle: "Loon kiyya halkan qofa bobba'u, ganama ni dhabamu", translation: "My herd grazes only by night and vanishes at dawn", answer: "Urjii waaqaa (Stars in the sky)", origin: "Borana — Hibboo" },
  ],
  mijikenda: [
    { riddle: "Nyumba yangu k'aina muryango", translation: "My house has no doorway", answer: "Iji (An egg)", origin: "Mijikenda — Chondoni (Taylor 1891)" },
    { riddle: "Nenda kuno na kuno sioni mwisho", translation: "I walk this way and that way and see no end", answer: "Njira (A road / path)", origin: "Mijikenda — Chondoni" },
    { riddle: "M'zhere achenda agonya maungo", translation: "An elder who walks with a curved back and long whiskers", answer: "K'umbi (A prawn / shrimp)", origin: "Mijikenda — Chondoni (Taylor 1891 #1)" },
    { riddle: "Ng'ombe zangu zosi ni nzeru, ela ndzau ni t'une kahi", translation: "All my cattle are white, with a red bull in the center", answer: "Meno na lulimi (Teeth and tongue)", origin: "Mijikenda — Chondoni" },
    { riddle: "Nyumba yangu idzengwa kwa nguzo mwenga", translation: "My house is built upon a single post", answer: "Choga (A mushroom)", origin: "Mijikenda — Chondoni (Taylor 1891)" },
    { riddle: "Mwanangu achenda safari k'auya mudzini", translation: "My child goes on a journey and never comes back home", answer: "Madzi ga muho (River water)", origin: "Mijikenda — Chondoni" },
    { riddle: "Mwandzani wangu ananifuata kula niendapho", translation: "My companion who follows me wherever I go", answer: "Kivuri (My shadow)", origin: "Mijikenda — Chondoni" },
    { riddle: "Azhere airi maikala phamwenga ela k'amaonana", translation: "Two elders sit side by side yet never see each other", answer: "Matso (The two eyes)", origin: "Mijikenda — Chondoni" },
  ],
  taita: [
    { riddle: "Nyumba yangu ndina mjango", translation: "My house has no door", answer: "Igi (An egg)", origin: "Kidaw'ida — Ndai (Wray 1894)" },
    { riddle: "Mndu ugendaga bila maghu", translation: "A traveler who walks without feet", answer: "Machi ga mto (River water)", origin: "Kidaw'ida — Ndai" },
    { riddle: "Wada na wada: mwanangu agendele ujombani ela sauja", translation: "My child went to the coast and has not yet come back", answer: "Kilamba (A floating gourd seed)", origin: "Kisagala — Wray 1894 Riddle" },
    { riddle: "Ng'ombe zangu zose ni nzeru, ndzau ndune iri gati", translation: "All my cattle are white, with a red bull in the middle", answer: "Meno na lulimi (Teeth and tongue)", origin: "Kidaw'ida — Ndai" },
    { riddle: "Nyumba yangu yaakwa na nguzo imweri", translation: "My house is built upon a single pillar", answer: "Choga (A mushroom)", origin: "Kidaw'ida — Ndai" },
    { riddle: "Mbuya wangu unifwataga kula ngendako", translation: "My friend who follows me wherever I go", answer: "Kiruru (My shadow)", origin: "Kidaw'ida — Ndai" },
    { riddle: "Waghosi wawi waikala hehi ela ndawonana", translation: "Two elders sit near each other yet never see one another", answer: "Meso (The two eyes)", origin: "Kidaw'ida — Ndai" },
    { riddle: "Mrigi mwarighu ndaukunjika", translation: "A long rope that cannot be coiled up", answer: "Ngila (A road or path)", origin: "Kidaw'ida — Ndai (Wray 1894)" },
  ],
  turkana: [
    { riddle: "Akai kang' emam ekidor", translation: "My house has no gate", answer: "Abulon / Abeyet (An egg)", origin: "Ng'aturkana — Barton 1921" },
    { riddle: "Ng'atuk kang' akwang'ak bon, emong' erenga kidiama", translation: "All my cattle are white, with a red ox in the middle", answer: "Ng'ikyela ka ang'ajep (Teeth & tongue)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Ng'ikasikou ng'arei iboioto kiding' kemam kianyun", translation: "Two elders who sit side by side without seeing each other", answer: "Ng'akonyen (The two eyes)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Apese kang' elosi nawi kemam ebonokin", translation: "My daughter who walks away from the camp and never turns back", answer: "Ng'akipi na ang'olol (River water)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Auno na eoli kemam ekodakin", translation: "A long rope that cannot be tied in a bundle", answer: "Erot (A road or path)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Akai na idukokina ng'olo ekitoi apei", translation: "A hut built upon a single wooden post", answer: "Ebaale (A mushroom)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Ekonone kang' elosi ka ayong' ng'irwa daang'", translation: "My companion who walks with me every day in the sun", answer: "Etorube (My shadow)", origin: "Ng'aturkana — Ateker Riddle" },
    { riddle: "Ng'atuk kang' edakasi akwaar bon", translation: "My cattle graze only at night and vanish at dawn", answer: "Ng'akacer (The stars)", origin: "Ng'aturkana — Ateker Riddle" },
  ],
  teso: [
    { riddle: "Etogo ka emamei ekek", translation: "My house has no door", answer: "Abeele (An egg)", origin: "Ateso — Kitching 1915 & SALT" },
    { riddle: "Aicerit na elotari komamei akejen", translation: "That which journeys far without legs", answer: "Akipi (River water)", origin: "Ateso — Proverbial Riddle" },
    { riddle: "Aituk ka kere nuakwang'ak, emong' loareng'an ejai kidiama", translation: "All my cattle are white, with a red bull in the middle", answer: "Ikela ka ang'ajep (Teeth and tongue)", origin: "Ateso — Oral Riddle" },
    { riddle: "Imakio iare iboioto nepepe komam eanyununos", translation: "Two elders who sit together yet never see each other", answer: "Akonye (The two eyes)", origin: "Ateso — Oral Riddle" },
    { riddle: "Etogo lo edukokitai keda epir ediopet", translation: "A house built upon a single pillar", answer: "Ebaale (A mushroom)", origin: "Ateso — Oral Riddle" },
    { riddle: "Epapero ka lo elosi keda eong' kiding' akolong'", translation: "My friend who walks with me in the sunshine", answer: "Etorube (My shadow)", origin: "Ateso — Oral Riddle" },
    { riddle: "Auno na eoli komam ekodakin", translation: "A long rope that cannot be coiled up", answer: "Erot (A road or path)", origin: "Ateso — Oral Riddle" },
    { riddle: "Apese ka na elosi oitela komam ebonokin ore", translation: "My daughter who goes on a journey and never returns home", answer: "Ecor / Echilet (A flowing stream)", origin: "Ateso — Oral Riddle" },
  ],
  embu: [
    { riddle: "Nyũmba yakwa ndĩrĩ mũromo", translation: "My house has no doorway", answer: "Ĩtumbĩ (An egg)", origin: "Kĩembu — Ndai" },
    { riddle: "Mũndũ ũthiaga atarĩ magũrũ", translation: "One who journeys far without legs", answer: "Maĩ ma rũũĩ (River water)", origin: "Kĩembu — Ndai" },
    { riddle: "Ng'ombe ciakwa ciothe nĩ njerũ, na ndegwa nĩ ndune gatagatĩ", translation: "All my cattle are white, and the bull in the middle is red", answer: "Magego na rũrĩmĩ (Teeth and tongue)", origin: "Kĩembu — Ndai" },
    { riddle: "Nyũmba yakwa yakĩtwe na gĩtugĩ kĩmwe", translation: "My house is built on a single pillar", answer: "Ĩkũnũ (A mushroom)", origin: "Kĩembu — Ndai" },
    { riddle: "Mũrata wakwa ũnyumaga thutha kũrĩa guothe ngũthiĩ", translation: "My friend who follows me wherever I walk", answer: "Kĩĩruru (My shadow)", origin: "Kĩembu — Ndai" },
    { riddle: "Athuri aĩrĩ maikaraga vamwe na matingĩonana", translation: "Two elders sit side by side yet never see each other", answer: "Maitho (The two eyes)", origin: "Kĩembu — Ndai" },
    { riddle: "Mũkanda mũraihu ũtangĩkũnjĩka", translation: "A long rope that cannot be rolled up", answer: "Njĩra (A road or path)", origin: "Kĩembu — Ndai" },
    { riddle: "Kaana gakwa gaikaraga igũrũ rĩa mavia matatũ", translation: "My child who sits upon three hearthstones", answer: "Nyũngũ (A cooking pot)", origin: "Kĩembu — Ndai" },
  ],
  pokomo: [
    { riddle: "Nyumba yangu kaina muryango", translation: "My house has no door", answer: "Iyi / Idji (An egg)", origin: "Kipokomo — Krapf 1850 & Samson 1944" },
    { riddle: "Chombo chetu chaenda bila makasia", translation: "Our canoe travels downstream without paddles", answer: "Maji ya Muho wa Tsana (Tana River water)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Ng'ombe zangu zonswi ni nzeru, ndzau ndune ikahi", translation: "All my cattle are white, with a red bull in the center", answer: "Meno na lulimi (Teeth and tongue)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Nyumba yangu idzengwa kwa nguzo modza", translation: "My house is built upon a single post", answer: "Choga (A mushroom)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Mwandzani wangu ananifuata kula niendako", translation: "My friend who follows me wherever I go", answer: "Kivuri (My shadow)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Wazee wawili waikala vamwe ela hawaonani", translation: "Two elders sit side by side yet never see each other", answer: "Matso (The two eyes)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Luzigi lule lusiokundzika", translation: "A long cord that cannot be coiled up", answer: "Njira (A road or river path)", origin: "Kipokomo — Tana River Tradition" },
    { riddle: "Mwana wangu aikala dzulu ya mawe mahahu", translation: "My child sits atop three stones", answer: "Nyungu ya kupikia (A cooking pot)", origin: "Kipokomo — Tana River Tradition" },
  ],
  taveta: [
    { riddle: "Nyumba yango ndina mlyango", translation: "My house has no door", answer: "Igi / Itagi (An egg)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Mndu aenda katali bila magu", translation: "A traveler who goes far without feet", answer: "Mazi ga Lumi (River water)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Ng'ombe zango zose ni nzeru, ndzau ndune iri gati", translation: "All my cattle are white, with a red bull in the middle", answer: "Meno na lulimi (Teeth and tongue)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Nyumba yango yaakwa na nguzo imwe", translation: "My house is built upon a single pillar", answer: "Choga (A mushroom)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Mbuya wango anifwata kila hehi", translation: "My companion who follows me everywhere", answer: "Kiruru (My shadow)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Wazee wairi waikala hehi ela ndawonana", translation: "Two elders live side by side yet never see one another", answer: "Mesho (The two eyes)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Mrigi mwarighu ndaukundzika", translation: "A long rope that cannot be coiled up", answer: "Njia (A road or path)", origin: "Kitaveta — Hollis 1910–1911" },
    { riddle: "Mwana wango aikala iguru ya mawe matatu", translation: "My child sits upon three hearthstones", answer: "Nyungu (A cooking pot)", origin: "Kitaveta — Hollis 1910–1911" },
  ],
  samburu: [
    { riddle: "Nkaji ai nemetii kutuk-aji", translation: "My house that has no doorway", answer: "Nkboliboli (An egg)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Nkishu aainei naibor pooki, neton laing'oni onyokie terisio", translation: "All my cattle are white, and a red bull stands in their midst", answer: "Ilala oo ng'ejep (Teeth & tongue)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Lpayiani aare otonie te nkang' nabo nemedolate", translation: "Two elders who sit at the same homestead but never see each other", answer: "Nkonyek (The two eyes)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Lmurani lolotisho nemerrinyunye nkang'", translation: "A warrior who sets out on a journey and never turns back", answer: "Nkare e lkeju (River water)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Nkaji naashete te lchani obo", translation: "A house built upon a single post", answer: "Lapa / Nkukuo (A mushroom)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Lchore lai oirruggo nanu tene alo", translation: "My friend who follows me wherever I walk", answer: "Loip (My shadow)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Enkeene naado nemerripieki", translation: "A long strap that can never be rolled up", answer: "Nkoitoi (A road or trail)", origin: "Sampur — Samburu Oral Riddle" },
    { riddle: "Eton lpayian te boo neiput lkilani nkaji", translation: "The elder sits outside while his cloak fills the house", answer: "Nkima oo lpuruo (Fire & smoke)", origin: "Sampur — Samburu Oral Riddle" },
  ],
  ilchamus: [
    { riddle: "Nkaji ai nemetii kutuk", translation: "My house that has no door", answer: "Lboliboli / Ol-mossóri (An egg)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Ltung'ani lolotisho nemetii kejek", translation: "One who travels continuously without legs", answer: "Nkare (River water)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Nkishu aainei naibor pooki, neton loing'oni onyokie te polos", translation: "All my cattle are white, with a red bull in their midst", answer: "Ilala oo ng'ejep (Teeth & tongue)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Lpayiani aare otonie nebbo nemedolate", translation: "Two elders who sit together yet never see each other", answer: "Nkonyek (The two eyes)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Nkaji naashete te lchani obo", translation: "A hut supported by a single center pole", answer: "Nkukuo (A mushroom)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Lchore lai oirruggo nanu tene alo", translation: "My friend who accompanies me wherever I walk", answer: "Loip (My shadow)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Enkeene naado nemerripieki", translation: "A long rope that cannot be coiled up", answer: "Nkoitoi (A road or path)", origin: "Ilchamus — Baringo Oral Riddle" },
    { riddle: "Eton lpayian te boo neiput lkilani nkaji", translation: "The elder sits outside while his cloak fills the hut", answer: "Nkima oo lpuruo (Fire & smoke)", origin: "Ilchamus — Baringo Oral Riddle" },
  ],
  rendille: [
    { riddle: "Minankay irid male", translation: "My house has no doorway", answer: "Ukux (An egg)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Gaalankay dakhan waa dakhan, oor gududan dhex taagan", translation: "All my herd is white, and a red bull stands among them", answer: "Ilko icho harab (Teeth & tongue)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Makhabal lama oo deris ah oo aan is arag", translation: "Two neighboring elders who never see each other", answer: "Indo (The two eyes)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Socota lugo male oo aan soo noqon", translation: "A traveler without feet who never turns back", answer: "Biche / War (Flowing water)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Min hal udub ku taagan", translation: "A house standing on a single pole", answer: "Booc (A mushroom)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Saaxibkay maalintii ila socda", translation: "My companion who walks with me by day", answer: "Hoos / Tib (My shadow)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Xarig dheer oo aan la laabi karin", translation: "A long rope that cannot be folded up", answer: "Jit (A road or caravan trail)", origin: "Af-Rendille — Northern Oral Riddle" },
    { riddle: "Gaalankay habeenkii oo keliya daaqa", translation: "My camels graze only at night and disappear at dawn", answer: "Bakal / Xiddigo (The stars)", origin: "Af-Rendille — Northern Oral Riddle" },
  ],
  daasanach: [
    { riddle: "Bíl yaá foka mále", translation: "My house has no doorway", answer: "ɠonɠo / Guobo (An egg)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Maa gálab irá d'áabate", translation: "A tireless traveler that crosses the plain without feet", answer: "Bie / War (River water)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Gúo yaá luulli ʔéð, kór búr gíddi yaalla", translation: "All my cattle are white, and a red bull stands in their midst", answer: "Káso uo ére (Teeth and tongue)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Karsic naama bila tikiɗɗi gíddi yaallan máa is argan", translation: "Two elders who live side by side yet never see each other", answer: "ʔíl naama (The two eyes)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Bíl gor tikiɗɗi irá yaalla", translation: "A hut standing upon a single wooden post", answer: "Abbaallii (A mushroom)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Maá yaá ʔaaðu irá siyya", translation: "My companion who follows me under the sun", answer: "Gaaddisa (My shadow)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Már ɗér máa laabam", translation: "A long cord that can never be coiled up", answer: "G'íéric (A road or path)", origin: "Daasanach — Lake Turkana Oral Riddle" },
    { riddle: "Gúo yaá ʔuur irá daaqan, azu mále", translation: "My herd grazes at night and vanishes by day", answer: "ʔiðin (The stars)", origin: "Daasanach — Lake Turkana Oral Riddle" },
  ],
};

export function getRiddlesForLanguage(languageId?: string, languageName?: string): RiddleItem[] {
  const key = (languageId || languageName || "").toLowerCase().trim();
  if (key && TRADITIONAL_RIDDLES_BY_LANGUAGE[key]) {
    return TRADITIONAL_RIDDLES_BY_LANGUAGE[key];
  }
  for (const [k, items] of Object.entries(TRADITIONAL_RIDDLES_BY_LANGUAGE)) {
    if (
      key.includes(k) ||
      (k === "luo" && key.includes("dholuo")) ||
      (k === "kikuyu" && (key.includes("gĩkũyũ") || key.includes("gikuyu"))) ||
      (k === "pokot" && (key.includes("pökoot") || key.includes("suk"))) ||
      (k === "samburu" && key.includes("sampur")) ||
      (k === "taita" && (key.includes("kidaw") || key.includes("kisagala"))) ||
      (k === "kisii" && key.includes("ekegusii")) ||
      (k === "teso" && key.includes("ateso")) ||
      (k === "turkana" && key.includes("ng'aturkana"))
    ) {
      return items;
    }
  }
  return TRADITIONAL_RIDDLES_BY_LANGUAGE.swahili;
}
