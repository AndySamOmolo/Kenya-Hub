// Auto-generated from public/dictionaries/proverbs.json (tongue_twisters section)

export interface TongueTwisterEntry {
  id: number;
  luo: string;
  english: string;
}

export const luoTongueTwisters: TongueTwisterEntry[] = [
  {
    "id": 1,
    "luo": "Acham tap chotna malando, chotna cham tapa ma lando.",
    "english": ""
  },
  {
    "id": 2,
    "luo": "Ji dhi chamo ng'op omoth omoth, ng'op omoth omoth ogore piny.",
    "english": ""
  },
  {
    "id": 3,
    "luo": "Rawo luor liel, liel luor rawo.",
    "english": ""
  },
  {
    "id": 4,
    "luo": "Atud tond atonga, tond atonga chodi.",
    "english": ""
  },
  {
    "id": 5,
    "luo": "Chiw chuururu chuo osuri, osuri chuururu, chuo chiu.",
    "english": ""
  },
  {
    "id": 6,
    "luo": "Ombo matindo moloyo rudo ludhe.",
    "english": ""
  },
  {
    "id": 7,
    "luo": "Lew rombo lemo lum, lum lemo lew rombo.",
    "english": ""
  },
  {
    "id": 8,
    "luo": "Chiewo chung' chiewo chiege, chi Chiewo chung' chiewo Chiewo gi chiewo.",
    "english": ""
  },
  {
    "id": 9,
    "luo": "Aket ng'wen gi ng'wech Kong'weno kogwen, ng'wen be keta gi ng'wech Kong'weno kogwen.",
    "english": ""
  },
  {
    "id": 10,
    "luo": "Nyar Okaka okano kuon ko Kaka ma Kokano Kano.",
    "english": ""
  }
];

export function getRandomTongueTwister(): TongueTwisterEntry {
  const index = Math.floor(Math.random() * luoTongueTwisters.length);
  return luoTongueTwisters[index];
}
