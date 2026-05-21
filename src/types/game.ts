export interface Game {
  name: string;
  categories: string[];
  steam_appid: number;
  cover: string;
}

export const CATEGORIES = [
  'AÇÃO', 'RPG', 'AVENTURA', 'MUNDO ABERTO', 'TERROR', 
  'SIMULADOR', 'SOBREVIVÊNCIA', 'CORRIDA', 'ESPORTES', 
  'FPS', 'INDIE', 'VR', 'COOP', 'OUTROS'
];

// Jogos principais das franquias (sem sequências)
export const AAA_GAME_NAMES = [
  'Forza Horizon 6',            // 🔥 ATIVO PRINCIPAL (lançou 19/05/2026) — AppID 2483190
  'Resident Evil Requiem',       // RE9 (lançou 27/02/2026) — AppID 3764200
  'PRAGMATA',                    // Capcom (lançou 17/04/2026) — AppID 3357650
  'Black Myth',                  // Black Myth: Wukong — AppID 2358720
  'Grand Theft Auto V',          // GTA 5
  'Red Dead Redemption 2',       // RDR2
  'Baldur\'s Gate 3',
  'Cyberpunk 2077',
  'ELDEN RING',
  'Hogwarts Legacy',
];

// Atalhos de busca
export const SEARCH_ALIASES: Record<string, string[]> = {
  'gta': ['Grand Theft Auto'],
  'rdr': ['Red Dead Redemption'],
  'rdr2': ['Red Dead Redemption 2'],
  'tlou': ['The Last of Us'],
  'cod': ['Call of Duty'],
  'gow': ['God of War'],
  'mhw': ['Monster Hunter: World'],
  'ds3': ['Dark Souls III'],
  'hzd': ['Horizon Zero Dawn'],
  'got': ['Ghost of Tsushima'],
  'bg3': ['Baldur\'s Gate 3'],
};
