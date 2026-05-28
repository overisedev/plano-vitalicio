const GAMES = [
  { n: 'Elden Ring', i: '1245620' },
  { n: 'GTA V', i: '271590' },
  { n: 'God of War', i: '1593500' },
  { n: 'Cyberpunk 2077', i: '1091500' },
  { n: 'RDR2', i: '1174180' },
  { n: 'Hogwarts Legacy', i: '990080' },
  { n: "Baldur's Gate 3", i: '1086940' },
  { n: 'Spider-Man', i: '1817070' },
  { n: 'Forza Horizon 5', i: '1551360' },
  { n: 'RE4', i: '2050650' },
  { n: 'Starfield', i: '1716740' },
  { n: 'The Witcher 3', i: '292030' },
  { n: 'Sekiro', i: '814380' },
  { n: 'Ghost of Tsushima', i: '2215430' },
  { n: 'It Takes Two', i: '1426210' },
];

export function GamesPreviewSection() {
  return (
    <section id="games" className="sec-dark">
      <div className="container text-center">
        <div className="reveal">
          <div className="tag g">Catálogo disponível</div>
          <h2 className="h2 on-dark">
            Alguns dos <em>+40.000 jogos</em>
            <br />
            disponíveis
          </h2>
        </div>

        <div className="games-grid reveal rd1">
          {GAMES.map((g) => (
            <div className="game-tile" key={g.i}>
              <img
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${g.i}/header.jpg`}
                alt={g.n}
                loading="lazy"
              />
              <div className="game-tile-ov" />
              <div className="game-tile-info">
                <div className="game-tile-name">{g.n}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px' }} className="reveal rd2">
          <a href="#pricing" className="btn btn-accent btn-lg">
            Ver Todos os Jogos →
          </a>
          <p
            style={{
              fontFamily: 'var(--fh)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--dim)',
              marginTop: '10px',
              letterSpacing: '.08em',
            }}
          >
            +40.000 TÍTULOS · NOVOS JOGOS TODA SEMANA
          </p>
        </div>
      </div>
    </section>
  );
}
