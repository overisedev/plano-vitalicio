import { useState, useEffect, useRef, useCallback } from 'react';

const FEATURED_GAMES = [
  {
    n: 'Elden Ring',
    d: 'Ação, RPG · FromSoftware',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
  },
  {
    n: 'God of War',
    d: 'Ação, Aventura · Santa Monica',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
  },
  {
    n: 'Red Dead Redemption 2',
    d: 'Ação, Aventura · Rockstar',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
  },
  {
    n: 'Cyberpunk 2077',
    d: 'RPG, Mundo Aberto · CD Projekt',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
  },
  {
    n: "Baldur's Gate 3",
    d: 'RPG · Larian Studios',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
  },
];

type SimPhase = 'waiting' | 'pressed' | 'activating' | 'unlocked';

export function HeroSection() {
  const [gameIndex, setGameIndex] = useState(0);
  const [phase, setPhase] = useState<SimPhase>('waiting');
  const [noTransition, setNoTransition] = useState(false);
  const cancelledRef = useRef(false);

  // Preload images on mount
  useEffect(() => {
    FEATURED_GAMES.forEach((g) => {
      const img = new Image();
      img.src = g.img;
    });
  }, []);

  const wait = useCallback(
    (ms: number) =>
      new Promise<void>((resolve, reject) => {
        const id = setTimeout(() => {
          if (cancelledRef.current) {
            reject(new Error('cancelled'));
          } else {
            resolve();
          }
        }, ms);
        // Store timeout id for potential cleanup — not strictly necessary
        // since we use the cancelledRef flag
        void id;
      }),
    [],
  );

  useEffect(() => {
    cancelledRef.current = false;
    let running = true;

    async function loop() {
      let idx = 0;

      while (running) {
        try {
          // Reset to waiting
          setNoTransition(false);
          setPhase('waiting');
          await wait(2500);

          // Button pressed
          setPhase('pressed');
          await wait(600);

          // Progress / activating
          setPhase('activating');
          await wait(2200);

          // Unlocked
          setPhase('unlocked');
          await wait(4000);

          // Quick transition to next game
          setNoTransition(true);
          setPhase('waiting');
          idx = (idx + 1) % FEATURED_GAMES.length;
          setGameIndex(idx);
          await wait(80);
        } catch {
          // cancelled
          break;
        }
      }
    }

    loop();

    return () => {
      running = false;
      cancelledRef.current = true;
    };
  }, [wait]);

  const game = FEATURED_GAMES[gameIndex];

  const simClasses = [
    'sim-wrap',
    phase === 'unlocked' ? 'sim-unlocked' : '',
    noTransition ? 'sim-notransition' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const statusText = phase === 'unlocked' ? '● DISPONÍVEL' : '○ AGUARDANDO';
  const statusClass = phase === 'unlocked' ? 'sim-status on' : 'sim-status';

  let actionContent: React.ReactNode;
  switch (phase) {
    case 'waiting':
      actionContent = <div className="sim-btn">Ativar Acesso</div>;
      break;
    case 'pressed':
      actionContent = <div className="sim-btn sim-btn-pressed">Ativar Acesso</div>;
      break;
    case 'activating':
      actionContent = (
        <div className="sim-progress">
          <div className="sim-progress-fill"></div>
          <span className="sim-progress-text">Ativando acesso...</span>
        </div>
      );
      break;
    case 'unlocked':
      actionContent = <div className="sim-btn sim-btn-go">Instalar Agora</div>;
      break;
  }

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-left">
          <h1 className="hero-h1 reveal rd1">
            Sua biblioteca Steam.
            <br />
            <em>+40.000 jogos por R$49,97.</em>
          </h1>
          <p className="hero-sub reveal rd1">
            Acesse o catálogo completo com o Overise. Escolha o jogo, baixe direto pela Steam e
            jogue. <strong>Instalação limpa, rápida e segura.</strong> Pague uma vez, use pra
            sempre.
          </p>
          <div className="hero-btns reveal rd1">
            <a href="#pricing" className="btn btn-accent btn-xl">
              Garantir Meu Acesso
            </a>
            <a href="#how" className="btn btn-ghost btn-xl">
              Ver como funciona
            </a>
          </div>
          <div className="hero-trust reveal rd1">
            <div className="trust-pill">
              <span className="chk">✔</span> 7 dias de garantia
            </div>
            <div className="trust-pill">
              <span className="chk">✔</span> Jogando em 5 min
            </div>
            <div className="trust-pill">
              <span className="chk">✔</span> +5.000 clientes
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className={simClasses} id="sim">
            <div className="sim-header">
              <div className="sim-logo">OVERISE</div>
              <div className={statusClass} id="sim-status">
                {statusText}
              </div>
            </div>
            <div className="sim-body">
              <div
                className="sim-img"
                id="sim-img"
                style={{ backgroundImage: `url(${game.img})` }}
              ></div>
              <div className="sim-overlay"></div>
              <div className="sim-info">
                <div className="sim-name" id="sim-name">
                  {game.n}
                </div>
                <div className="sim-dev" id="sim-dev">
                  {game.d}
                </div>
                <div id="sim-action">{actionContent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
