import { useState, useEffect, useMemo } from 'react';
import type { Game } from '@/types/game';
import { AAA_GAME_NAMES, SEARCH_ALIASES } from '@/types/game';

// Jogos preferidos por franquia (estes serão priorizados)
const PREFERRED_GAMES: Record<string, string[]> = {
  'Forza': ['horizon 6'],
  'Resident Evil': ['requiem'],
  'PRAGMATA': ['pragmata'],
  'Black Myth': ['wukong'],
  'Spider-Man': ['remastered', 'spider-man remastered'],
  'The Last of Us': ['part i', 'part 1'],
  'Red Dead': ['redemption 2', 'rdr2'],
  'Dark Souls': ['dark souls iii', 'dark souls 3'],
  'Monster Hunter': ['world'],
  'Horizon': ['zero dawn'],
  'The Witcher': ['witcher 3', 'wild hunt'],
  'Death Stranding': ["director's cut", 'directors cut'],
  'Elden Ring': ['elden ring'],
  'Cyberpunk': ['2077'],
  'Baldurs Gate': ['gate 3', 'bg3'],
  'GTA': ['enhanced', 'grand theft auto v enhanced'],
};

// Palavras-chave de franquias para agrupar
const FRANCHISE_KEYWORDS = [
  { key: 'forza horizon', franchise: 'Forza' },
  { key: 'forza', franchise: 'Forza' },
  { key: 'pragmata', franchise: 'PRAGMATA' },
  { key: 'black myth', franchise: 'Black Myth' },
  { key: 'resident evil', franchise: 'Resident Evil' },
  { key: 'spider-man', franchise: 'Spider-Man' },
  { key: 'spiderman', franchise: 'Spider-Man' },
  { key: 'last of us', franchise: 'The Last of Us' },
  { key: 'red dead', franchise: 'Red Dead' },
  { key: 'dark souls', franchise: 'Dark Souls' },
  { key: 'monster hunter', franchise: 'Monster Hunter' },
  { key: 'horizon', franchise: 'Horizon' },
  { key: 'witcher', franchise: 'The Witcher' },
  { key: 'death stranding', franchise: 'Death Stranding' },
  { key: 'elden ring', franchise: 'Elden Ring' },
  { key: 'cyberpunk', franchise: 'Cyberpunk' },
  { key: 'baldur', franchise: 'Baldurs Gate' },
  { key: 'gta', franchise: 'GTA' },
  { key: 'grand theft auto', franchise: 'GTA' },
  { key: 'sekiro', franchise: 'Sekiro' },
  { key: 'hogwarts', franchise: 'Hogwarts' },
  { key: 'hollow knight', franchise: 'Hollow Knight' },
];

// Função para identificar a franquia de um jogo
function getFranchise(gameName: string): string | null {
  const lower = gameName.toLowerCase();
  for (const { key, franchise } of FRANCHISE_KEYWORDS) {
    if (lower.includes(key)) {
      return franchise;
    }
  }
  return null;
}

// Verificar se é o jogo preferido da franquia
function isPreferredGame(gameName: string, franchise: string): boolean {
  const preferred = PREFERRED_GAMES[franchise];
  if (!preferred) return true;
  
  const lower = gameName.toLowerCase();
  return preferred.some(pref => lower.includes(pref));
}

// Função para filtrar apenas 1 jogo por franquia (priorizando os preferidos)
function filterOnlyOnePerFranchise(games: Game[]): Game[] {
  const franchiseGames = new Map<string, Game>();
  const noFranchiseGames: Game[] = [];
  
  for (const game of games) {
    // Ignorar jogos sem cover ou steam_appid válido
    if (!game.cover || !game.steam_appid) continue;
    
    const franchise = getFranchise(game.name);
    
    if (franchise) {
      const existing = franchiseGames.get(franchise);
      
      // Se é o jogo preferido E tem cover, sempre usar
      if (isPreferredGame(game.name, franchise)) {
        franchiseGames.set(franchise, game);
      } else if (!existing) {
        // Se não há nenhum ainda, usar este como fallback
        franchiseGames.set(franchise, game);
      }
    } else {
      noFranchiseGames.push(game);
    }
  }
  
  return [...franchiseGames.values(), ...noFranchiseGames];
}

// Verificar se a URL de capa é válida (não é placeholder ou vazia)
function hasValidCover(game: Game): boolean {
  if (!game.cover) return false;
  const cover = game.cover.toLowerCase();
  // Filtrar URLs inválidas ou placeholders
  if (cover.includes('placeholder') || 
      cover.includes('default') ||
      cover === '' ||
      cover.includes('missing')) {
    return false;
  }
  return true;
}

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/games.json`)
      .then((res) => res.json())
      .then((data: Game[]) => {
        // Filtrar jogos sem capa válida
        const gamesWithCovers = data.filter(hasValidCover);
        setGames(gamesWithCovers);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading games:', err);
        setLoading(false);
      });
  }, []);

  // Filtrar jogos AAA seguindo exatamente a ordem de AAA_GAME_NAMES
  const aaaGames = useMemo(() => {
    const matchedGames: Game[] = [];
    
    for (const aaa of AAA_GAME_NAMES) {
      const game = games.find(g => 
        g.cover && g.steam_appid &&
        (g.name.toLowerCase().includes(aaa.toLowerCase()) || aaa.toLowerCase().includes(g.name.toLowerCase()))
      );
      if (game) {
        matchedGames.push(game);
      }
    }
    
    // Depois, filtrar para manter apenas 1 por franquia (preserva a ordem)
    return filterOnlyOnePerFranchise(matchedGames);
  }, [games]);

  const searchGames = (query: string): Game[] => {
    if (!query.trim()) return games;
    
    const q = query.toLowerCase().trim();
    
    // Check aliases
    for (const [alias, names] of Object.entries(SEARCH_ALIASES)) {
      if (q.includes(alias)) {
        return games.filter(g => 
          names.some(name => g.name.toLowerCase().includes(name.toLowerCase()))
        );
      }
    }
    
    return games.filter(g => g.name.toLowerCase().includes(q));
  };

  const getGamesByCategory = (category: string): Game[] => {
    if (!category || category === 'ALL') return games;
    return games.filter(g => 
      g.categories.some(c => c.toUpperCase() === category.toUpperCase())
    );
  };

  return {
    games,
    aaaGames,
    loading,
    totalGames: games.length,
    searchGames,
    getGamesByCategory,
  };
}
