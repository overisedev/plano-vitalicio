import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart } from 'lucide-react';
import type { Game } from '@/types/game';

interface IndividualGamesSectionProps {
  games: Game[];
}

const INDIVIDUAL_APP_IDS = [
  313690, 2483190, 3764200, 2050650, 883710, 418370, 3357650, 2358720, 1174180, 570940,
  335300, 374320, 814380, 1118520, 271590, 3404260, 1790600, 1850570, 3280350, 2215430,
  1091500, 1817070, 1817190, 1593500, 2322010
];

const FALLBACK_NAMES: Record<number, string> = {
  313690: "LEGO Batman 3",
  2483190: "Forza Horizon 6",
  3764200: "Resident Evil Requiem",
  2050650: "Resident Evil 4",
  883710: "Resident Evil 2",
  418370: "Resident Evil 7",
  3357650: "PRAGMATA",
  2358720: "Black Myth Wukong",
  1174180: "Red Dead Redemption 2",
  570940: "Dark Souls Remastered",
  335300: "Dark Souls II",
  374320: "Dark Souls III",
  814380: "Sekiro",
  1118520: "Paralives",
  271590: "GTA V Legacy",
  3404260: "Dead as Disco",
  1790600: "Dragon Ball Sparking Zero",
  1850570: "Death Stranding DC",
  3280350: "Death Stranding 2",
  2215430: "Ghost of Tsushima",
  1091500: "Cyberpunk 2077",
  1817070: "Spider-Man Remastered",
  1817190: "Spider-Man Miles Morales",
  1593500: "God of War",
  2322010: "God of War Ragnarok",
};

const INDIVIDUAL_CHECKOUT_URL = "INDIVIDUAL_CHECKOUT_URL";

function getUTMParams(): string {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  const utmKeys = [
    "utm_source", "utm_medium", "utm_campaign", "utm_term",
    "utm_content", "utm_id", "fbclid", "gclid", "ttclid", "sck", "src",
  ];
  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) utmParams.append(key, value);
  });
  try {
    const storedUtms = localStorage.getItem("__utmify_session_data");
    if (storedUtms) {
      const parsed = JSON.parse(storedUtms);
      if (parsed.utm_source && !utmParams.has("utm_source")) utmParams.append("utm_source", parsed.utm_source);
      if (parsed.utm_medium && !utmParams.has("utm_medium")) utmParams.append("utm_medium", parsed.utm_medium);
      if (parsed.utm_campaign && !utmParams.has("utm_campaign")) utmParams.append("utm_campaign", parsed.utm_campaign);
    }
  } catch (e) {}
  return utmParams.toString();
}

function handleIndividualCheckout(gameName: string) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", {
      content_name: `Jogo Individual: ${gameName}`,
      value: 67.00,
      currency: "BRL",
    });
  }

  const utmString = getUTMParams();
  const gameParam = `game=${encodeURIComponent(gameName)}`;

  let finalUrl = INDIVIDUAL_CHECKOUT_URL;
  if (finalUrl.includes('?')) {
    finalUrl += `&${gameParam}`;
  } else {
    finalUrl += `?${gameParam}`;
  }

  if (utmString) {
    finalUrl += `&${utmString}`;
  }

  window.open(finalUrl, "_blank", "noopener,noreferrer");
}

export function IndividualGamesSection({ games }: IndividualGamesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const individualGamesList = useMemo(() => {
    return INDIVIDUAL_APP_IDS.map(appId => {
      const matchedGame = games.find(g => g.steam_appid === appId);
      const name = matchedGame ? matchedGame.name : FALLBACK_NAMES[appId];
      const coverUrl = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`;
      const fallbackUrl1 = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;
      const fallbackUrl2 = matchedGame?.cover || fallbackUrl1;

      return {
        name,
        steam_appid: appId,
        cover: coverUrl,
        fallbacks: [fallbackUrl1, fallbackUrl2],
        categories: ['Avulso']
      } as Game & { fallbacks: string[] };
    });
  }, [games]);

  const filteredGames = useMemo(() => {
    let result = individualGamesList;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = individualGamesList.filter(g => g.name.toLowerCase().includes(q));
    } else if (!showAll) {
      result = individualGamesList.slice(0, 10);
    }
    return result;
  }, [searchQuery, individualGamesList, showAll]);

  return (
    <section id="jogos-individuais" className="sec-dark ind-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className="container">

        {/* Header */}
        <div className="reveal text-center" style={{ marginBottom: 40 }}>
          <div className="tag g" style={{ justifyContent: 'center' }}>🚀 PRÉ-VENDA</div>
          <h2 className="h2 on-dark">
            ESCOLHA SEU <em>JOGO</em>
          </h2>
          <p className="sub on-dark center">
            Compre apenas o jogo que você quer. Chave Steam global, entrega imediata.
          </p>
        </div>

        {/* Search */}
        <motion.div
          className="ind-search-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="ind-search">
            <Search size={16} className="ind-search-icon" />
            <input
              type="text"
              placeholder="Pesquise o jogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Pesquisar jogo"
            />
            {searchQuery && (
              <button className="ind-clear-search" onClick={() => setSearchQuery('')} aria-label="Limpar pesquisa">✕</button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="ind-store-grid">
          <AnimatePresence mode="popLayout">
            {filteredGames.length > 0 ? (
              filteredGames.map((game, idx) => (
                <motion.div
                  key={`${game.steam_appid}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="ind-store-card"
                >
                  {/* Cover */}
                  <div className="ind-store-cover">
                    <img
                      src={game.cover}
                      alt={game.name}
                      className="ind-store-img"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallbacks = game.fallbacks || [];
                        const currentIndex = Number(target.dataset.fallbackIndex || 0);
                        if (currentIndex < fallbacks.length) {
                          target.src = fallbacks[currentIndex];
                          target.dataset.fallbackIndex = String(currentIndex + 1);
                        }
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="ind-store-info">
                    <div className="ind-store-region">GLOBAL</div>
                    <h3 className="ind-store-name">{game.name} Steam Key GLOBAL</h3>
                    <div className="ind-store-price-row">
                      <span className="ind-store-price">R$ 67,00</span>
                      <span className="ind-store-pix">À vista no Pix</span>
                    </div>
                    <button
                      className="ind-store-btn"
                      onClick={() => handleIndividualCheckout(game.name)}
                      aria-label={`Comprar ${game.name}`}
                    >
                      <ShoppingCart size={15} />
                      Comprar agora
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ind-empty">
                <Search size={36} className="ind-empty-icon" />
                <h3>Jogo não encontrado</h3>
                <p>Nenhum jogo encontrado com esse nome.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {!showAll && !searchQuery.trim() && individualGamesList.length > 10 && (
          <div className="ind-load-more">
            <button className="ind-load-btn" onClick={() => setShowAll(true)}>
              Ver catálogo completo ({individualGamesList.length} jogos)
            </button>
          </div>
        )}

        {/* Upsell banner */}
        <motion.div
          className="ind-upsell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ind-upsell-content">
            <h4>Quer acesso a TODOS os +40.000 jogos?</h4>
            <p>Por apenas R$ 49,97 você desbloqueia a biblioteca inteira de uma vez, para sempre.</p>
          </div>
          <a href="#planos" className="ind-upsell-btn">Ver Plano Vitalício</a>
        </motion.div>

      </div>

      <style>{`
        .ind-section {
          position: relative;
          background: #0d1117;
        }
        .ind-search-wrapper { display: flex; justify-content: center; margin-bottom: 36px; }
        .ind-search {
          display: flex; align-items: center;
          background: rgba(255,255,255,.05);
          border: 1px solid var(--border2);
          border-radius: 10px; padding: 10px 16px;
          width: 100%; max-width: 480px; gap: 10px;
          transition: border-color .2s;
        }
        .ind-search:focus-within { border-color: var(--accent); }
        .ind-search-icon { color: var(--muted); flex-shrink: 0; }
        .ind-search input {
          flex: 1; background: transparent; border: none;
          color: #fff; font-size: 14px; outline: none;
          font-family: var(--fb);
        }
        .ind-search input::placeholder { color: var(--dim); }
        .ind-clear-search {
          background: rgba(255,255,255,.08); border: none;
          color: var(--muted); font-size: 12px; font-weight: 700;
          width: 22px; height: 22px; border-radius: 50%;
          cursor: pointer; display: grid; place-items: center;
          flex-shrink: 0;
        }

        /* STORE GRID */
        .ind-store-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }
        @media (max-width: 1100px) { .ind-store-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 860px)  { .ind-store-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px)  { .ind-store-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }

        /* STORE CARD */
        .ind-store-card {
          background: #161a20;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .25s, border-color .25s, box-shadow .25s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .ind-store-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }

        /* Cover */
        .ind-store-cover {
          position: relative;
          aspect-ratio: 2/3;
          overflow: hidden;
          background: #0a0d12;
        }
        .ind-store-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
          display: block;
        }
        .ind-store-card:hover .ind-store-img { transform: scale(1.04); }



        /* Info */
        .ind-store-info {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .ind-store-region {
          font-size: 10px; font-weight: 800;
          color: rgba(255,255,255,0.4); letter-spacing: .08em;
          text-transform: uppercase;
        }
        .ind-store-name {
          font-family: var(--fb);
          font-size: 14px; font-weight: 700;
          color: #fff; line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ind-store-price-row {
          display: flex; flex-direction: column; gap: 2px;
          margin-top: auto; padding-top: 10px;
        }
        .ind-store-price {
          font-family: var(--fh);
          font-size: 24px; font-weight: 950;
          color: #fff; letter-spacing: -.5px;
        }
        .ind-store-pix {
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.5);
        }

        /* Buy button */
        .ind-store-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%;
          background: #39ff14;
          color: #000;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-family: var(--fb);
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          margin-top: 14px;
          transition: filter .2s, transform .2s;
        }
        .ind-store-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        /* Load more */
        .ind-load-more { display: flex; justify-content: center; margin-bottom: 48px; }
        .ind-load-btn {
          background: rgba(255,255,255,.05);
          border: 1px solid var(--border2);
          color: var(--muted);
          font-size: 13px; font-weight: 700;
          padding: 12px 28px; border-radius: 8px;
          cursor: pointer; transition: all .2s;
          font-family: var(--fb);
        }
        .ind-load-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Empty */
        .ind-empty {
          grid-column: 1 / -1;
          display: flex; flex-direction: column; align-items: center;
          padding: 60px 20px; text-align: center;
          color: var(--muted);
        }
        .ind-empty-icon { color: var(--dim); margin-bottom: 14px; }
        .ind-empty h3 { margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #fff; font-family: var(--fh); }
        .ind-empty p { margin: 0; font-size: 14px; }

        /* Upsell */
        .ind-upsell {
          background: var(--card);
          border: 1px solid rgba(57,255,20,.15);
          border-radius: 14px; padding: 28px 32px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          box-shadow: 0 0 40px rgba(57,255,20,.04);
        }
        .ind-upsell-content h4 {
          margin: 0 0 6px;
          font-family: var(--fh);
          font-size: 22px; font-weight: 900; color: #fff;
          text-transform: uppercase;
        }
        .ind-upsell-content p { margin: 0; font-size: 14px; color: var(--muted); }
        .ind-upsell-btn {
          background: transparent;
          border: 1px solid rgba(57,255,20,.4);
          color: var(--accent);
          padding: 12px 24px; border-radius: 8px;
          font-weight: 700; font-size: 13px;
          text-transform: uppercase; white-space: nowrap;
          transition: all .2s;
          font-family: var(--fh);
        }
        .ind-upsell-btn:hover {
          background: rgba(57,255,20,.08);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .ind-upsell { flex-direction: column; text-align: center; padding: 24px; }
          .ind-upsell-btn { width: 100%; text-align: center; }
        }

        @media (max-width: 600px) {
          .ind-store-name { font-size: 12px; }
          .ind-store-price { font-size: 17px; }
          .ind-store-btn { font-size: 12px; padding: 9px; }
        }
      `}</style>
    </section>
  );
}
