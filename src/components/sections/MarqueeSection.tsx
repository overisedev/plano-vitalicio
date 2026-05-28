import { useEffect, useRef } from 'react';

export const MARQUEE_GAMES = [
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

export function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let raf: number;

    const tick = () => {
      pos -= 0.5;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const allGames = [...MARQUEE_GAMES, ...MARQUEE_GAMES, ...MARQUEE_GAMES, ...MARQUEE_GAMES];

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={trackRef}>
        {allGames.map((g, i) => (
          <div className="mi" key={g.i + '-' + i}>
            <img
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${g.i}/header.jpg`}
              alt={g.n}
              loading="lazy"
            />
            <div className="mi-name">{g.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
