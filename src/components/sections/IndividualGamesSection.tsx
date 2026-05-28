import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Info } from 'lucide-react';
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
      value: 7.90,
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
      // Tenta usar a arte vertical da biblioteca Steam (fica idêntico ao design pedido)
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
      result = individualGamesList.slice(0, 4);
    }
    return result;
  }, [searchQuery, individualGamesList, showAll]);

  return (
    <section id="jogos-individuais" className="sec-dark" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className="container">
        
        <div className="reveal text-center" style={{ marginBottom: 48 }}>
          <div className="tag g" style={{ justifyContent: 'center' }}>NOVIDADE • COMPRA AVULSA</div>
          <h2 className="h2 on-dark">
            ESCOLHA SEU<br />
            <em>JOGO</em>
          </h2>
          <p className="sub on-dark center">
            Quer apenas um jogo específico? Selecione o título que você deseja jogar agora e receba o acesso imediato por apenas R$ 7,90.
          </p>
        </div>

        <motion.div 
          className="ind-search-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="ind-search">
            <Search size={18} className="ind-search-icon" />
            <input
              type="text"
              placeholder="Pesquise o jogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="ind-clear-search" onClick={() => setSearchQuery('')}>Limpar</button>
            )}
          </div>
        </motion.div>

        <div className="ind-grid">
          <AnimatePresence mode="popLayout">
            {filteredGames.length > 0 ? (
              filteredGames.map((game, idx) => (
                <motion.div
                  key={`${game.steam_appid}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="ind-poster-card"
                  onClick={() => handleIndividualCheckout(game.name)}
                >
                  <img 
                    src={game.cover} 
                    alt={game.name} 
                    className="ind-poster-img"
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
                  <div className="ind-poster-overlay" />
                  
                  {idx < 3 && <div className="ind-poster-tag">NOVO</div>}

                  <div className="ind-poster-content">
                    <h3 className="ind-poster-title">{game.name}</h3>
                    <span className="ind-poster-status">Funciona Online</span>
                    
                    <div className="ind-poster-bottom">
                      <div className="ind-poster-price-box">
                        <span className="ind-poster-label">A PARTIR DE</span>
                        <span className="ind-poster-price">R$ 7,90</span>
                      </div>
                      
                      <button className="ind-poster-btn">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ind-empty">
                <Info size={40} className="ind-empty-icon" />
                <h3>Jogo não encontrado</h3>
                <p>Nenhum jogo individual encontrado com este nome na lista avulsa.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!showAll && !searchQuery.trim() && individualGamesList.length > 4 && (
          <div className="ind-load-more">
            <button className="ind-load-btn" onClick={() => setShowAll(true)}>
              Ver catálogo completo
            </button>
          </div>
        )}

        <motion.div 
          className="ind-upsell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="ind-upsell-content">
            <h4>Quer acesso a TODOS os +40.000 jogos?</h4>
            <p>Por apenas R$ 49,97 você desbloqueia a biblioteca inteira de uma vez, para sempre.</p>
          </div>
          <a href="#planos" className="ind-upsell-btn">Ver Plano Vitalício</a>
        </motion.div>

      </div>

      <style>{`
        .text-neon { color: var(--neon); }
        .ind-header { text-align: center; margin-bottom: 32px; }
        .ind-badge {
          display: inline-block; padding: 6px 14px; border-radius: 999px;
          background: rgba(0,255,65,.1); border: 1px solid rgba(0,255,65,.2);
          color: var(--neon); font-size: 11px; font-weight: 800; letter-spacing: 1px; margin-bottom: 16px;
        }
        .ind-title { font-size: clamp(28px, 5vw, 42px); font-weight: 950; color: #fff; margin: 0 0 12px; letter-spacing: -1px; }
        .ind-subtitle { font-size: 16px; color: rgba(255,255,255,.75); max-width: 600px; margin: 0 auto; line-height: 1.6; }
        .ind-search-wrapper { display: flex; justify-content: center; margin-bottom: 40px; }
        .ind-search {
          display: flex; align-items: center; background: rgba(0,0,0,.3); border: 1px solid rgba(255,255,255,.1);
          border-radius: 16px; padding: 10px 16px; width: 100%; max-width: 500px; transition: border-color .2s ease;
        }
        .ind-search:focus-within { border-color: rgba(0,255,65,.4); background: rgba(0,0,0,.5); }
        .ind-search-icon { color: rgba(255,255,255,.4); margin-right: 12px; }
        .ind-search input { flex: 1; background: transparent; border: none; color: #fff; font-size: 15px; font-weight: 600; outline: none; width: 100%; }
        .ind-clear-search { background: rgba(255,255,255,.1); border: none; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 10px; border-radius: 8px; cursor: pointer; }
        
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }

        @media (max-width: 1024px) { .ind-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .ind-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 480px) { .ind-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }

        .ind-load-more {
          display: flex;
          justify-content: center;
          margin-top: -30px;
          margin-bottom: 60px;
        }

        .ind-load-btn {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 14px;
          cursor: pointer;
          transition: all .2s ease;
        }

        .ind-load-btn:hover {
          background: rgba(0,255,65,.1);
          border-color: rgba(0,255,65,.3);
          color: var(--neon);
          transform: translateY(-2px);
        }

        /* POSTER CARD DESIGN */
        .ind-poster-card {
          position: relative;
          aspect-ratio: 10/14;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          border: 1px solid rgba(0, 255, 65, 0.15); /* Cor sutil neon */
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .ind-poster-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 255, 65, 0.6);
          box-shadow: 0 10px 30px rgba(0, 255, 65, 0.15);
        }

        .ind-poster-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .ind-poster-card:hover .ind-poster-img {
          transform: scale(1.05);
        }

        .ind-poster-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 65%);
          pointer-events: none;
        }

        .ind-poster-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #3b82f6; /* Azul estilo SoulStore */
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 6px;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          z-index: 2;
        }

        .ind-poster-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        #jogos-individuais * {
          text-transform: none;
        }

        #jogos-individuais {
          font-family: var(--fb);
        }

        .ind-header h2, .ind-poster-title, .ind-upsell-content h4, .ind-empty h3 {
          font-family: var(--fh) !important;
        }

        .ind-header h2 {
          text-transform: uppercase !important;
        }

        .ind-poster-title {
          font-family: var(--fh);
          font-size: 18px;
          text-transform: uppercase;
          font-weight: 800;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.1;
        }

        .ind-poster-status {
          font-size: 12px;
          font-weight: 600;
          color: #3b82f6; /* Azul estilo SoulStore */
          margin-bottom: 12px;
        }

        .ind-poster-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .ind-poster-price-box {
          display: flex;
          flex-direction: column;
        }

        .ind-poster-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .ind-poster-price {
          font-size: 18px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .ind-poster-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ind-poster-card:hover .ind-poster-btn {
          border-color: rgba(0, 255, 65, 0.8);
          color: var(--neon);
          background: rgba(0, 255, 65, 0.1);
        }

        @media (max-width: 480px) {
          .ind-poster-content { padding: 12px; }
          .ind-poster-title { font-size: 13px; }
          .ind-poster-status { font-size: 10px; margin-bottom: 8px; }
          .ind-poster-price { font-size: 16px; }
          .ind-poster-btn { width: 34px; height: 34px; border-radius: 10px; }
          .ind-poster-btn svg { width: 14px; height: 14px; }
          .ind-poster-card { border-radius: 12px; }
        }

        .ind-empty { grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; text-align: center; background: rgba(0,0,0,.2); border: 1px dashed rgba(255,255,255,.1); border-radius: var(--r2); }
        .ind-empty-icon { color: rgba(255,255,255,.2); margin-bottom: 16px; }
        .ind-empty h3 { margin: 0 0 8px; font-size: 18px; font-weight: 800; color: #fff; }
        .ind-empty p { margin: 0; font-size: 14px; color: rgba(255,255,255,.6); }

        .ind-upsell { background: linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%); border: 1px solid rgba(0,255,65,.2); border-radius: var(--r2); padding: 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,.5), inset 0 0 60px rgba(0,255,65,.05); }
        .ind-upsell-content h4 { margin: 0 0 8px; font-size: 20px; font-weight: 900; color: #fff; }
        .ind-upsell-content p { margin: 0; font-size: 14px; color: rgba(255,255,255,.7); }
        .ind-upsell-btn { background: transparent; border: 1px solid rgba(0,255,65,.4); color: var(--neon); padding: 14px 24px; border-radius: 14px; font-weight: 900; font-size: 13px; text-transform: uppercase; text-decoration: none; transition: all .2s ease; }
        .ind-upsell-btn:hover { background: rgba(0,255,65,.1); transform: translateY(-2px); border-color: var(--neon); }
        @media (max-width: 768px) { .ind-upsell { flex-direction: column; text-align: center; padding: 24px; } .ind-upsell-btn { width: 100%; } }
      `}</style>
    </section>
  );
}
