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
    "english": "I eat from my brown sweetheart's plate, and my sweetheart eats from my brown plate."
  },
  {
    "id": 2,
    "luo": "Ji dhi chamo ng'op omoth omoth, ng'op omoth omoth ogore piny.",
    "english": "People go to eat ripe wild figs, and the ripe wild figs fall down to the ground."
  },
  {
    "id": 3,
    "luo": "Rawo luor liel, liel luor rawo.",
    "english": "The hippo fears the elephant, and the elephant fears the hippo."
  },
  {
    "id": 4,
    "luo": "Atud tond atonga, tond atonga chodi.",
    "english": "I tie the basket's rope, and the basket's rope snaps."
  },
  {
    "id": 5,
    "luo": "Chiw chuururu chuo osuri, osuri chuururu, chuo chiu.",
    "english": "Drizzle drips through the roof pinnacle; the roof pinnacle drips and drenches completely."
  },
  {
    "id": 6,
    "luo": "Ombo matindo moloyo rudo ludhe.",
    "english": "A few small vegetables are better than stirring sticks with nothing."
  },
  {
    "id": 7,
    "luo": "Lew rombo lemo lum, lum lemo lew rombo.",
    "english": "The sheep's tongue licks the grass, and the grass brushes the sheep's tongue."
  },
  {
    "id": 8,
    "luo": "Chiewo chung' chiewo chiege, chi Chiewo chung' chiewo Chiewo gi chiewo.",
    "english": "Chiewo stands and wakes his wife; Chiewo's wife stands and wakes Chiewo at dawn."
  },
  {
    "id": 9,
    "luo": "Aket ng'wen gi ng'wech Kong'weno kogwen, ng'wen be keta gi ng'wech Kong'weno kogwen.",
    "english": "I gather termites in haste at Kong'weno at dawn, and the termites make me run in haste at Kong'weno at dawn."
  },
  {
    "id": 10,
    "luo": "Nyar Okaka okano kuon ko Kaka ma Kokano Kano.",
    "english": "Okaka's daughter kept ugali at Kaka's home which Okano kept at Kano."
  }
];

export function getRandomTongueTwister(): TongueTwisterEntry {
  const index = Math.floor(Math.random() * luoTongueTwisters.length);
  return luoTongueTwisters[index];
}
