import { useState, useRef } from 'react';

export function HeroSection() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setMuted(false);
  };

  const pulseStyle = `
    @keyframes vsl-pulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(40,196,12,0.2), 0 0 0 0 rgba(40,196,12,0.4); }
      50% { box-shadow: 0 4px 20px rgba(40,196,12,0.3), 0 0 0 14px rgba(40,196,12,0); }
    }
    .vsl-unmute-btn {
      animation: vsl-pulse 2s ease-in-out infinite;
    }
    .vsl-unmute-btn:hover {
      transform: scale(1.06) !important;
    }
    @media (max-width: 600px) {
      .vsl-unmute-btn { font-size: 13px !important; padding: 11px 20px !important; }
      .vsl-unmute-btn svg { width: 16px !important; height: 16px !important; }
    }
  `;

  return (
    <section id="hero" className="hero-section">
      <style>{pulseStyle}</style>
      <div className="container hero-layout">
        <div className="hero-left">
          <h1 className="hero-h1 reveal rd1" style={{ fontSize: 'clamp(54px, 10vw, 120px)', lineHeight: 0.85, marginBottom: '24px' }}>
            SUA STEAM,
            <br />
            <span style={{ color: 'var(--accent)' }}>LIBERADA.</span>
            <div style={{ fontSize: 'clamp(20px, 4vw, 32px)', marginTop: '16px', color: '#fff', letterSpacing: '0' }}>
              A partir de R$ 7,90.
            </div>
          </h1>
          <p className="hero-sub reveal rd1">
            Acesse o catálogo completo com o Overise. Escolha o jogo, baixe direto pela Steam e
            jogue. <strong>Instalação limpa, rápida e segura.</strong> Pague uma vez, use pra
            sempre.
          </p>
          <div className="hero-btns reveal rd1">
            <a
              href="#jogos-individuais"
              className="btn btn-accent"
              style={{
                fontSize: '18px',
                padding: '20px 40px',
                boxShadow: '0 0 40px rgba(40,196,12,.4), 0 0 80px rgba(40,196,12,.15)',
                fontWeight: 900,
                letterSpacing: '.04em',
              }}
            >
              🎮 Escolher um jogo — R$ 7,90
            </a>
            <a
              href="#pricing"
              style={{
                fontSize: '13px',
                color: 'var(--dim)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontFamily: 'var(--fb)',
                fontWeight: 500,
                letterSpacing: '0',
                textTransform: 'none',
                padding: '4px 0',
                display: 'inline-block',
              }}
            >
              ou ver todos os planos →
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
          <div
            className="vsl-wrap"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0c0e12',
              boxShadow: '0 0 60px rgba(40,196,12,0.03), 0 24px 56px rgba(0,0,0,0.5)',
            }}
          >
            <video
              ref={videoRef}
              src="https://i.imgur.com/9Q5h4Ev.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: muted ? 'blur(8px) brightness(0.4)' : 'none',
                transition: 'filter 0.5s ease',
              }}
            />
            {muted && (
              <div
                className="vsl-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  cursor: 'pointer',
                }}
                onClick={handleUnmute}
              >
                <button
                  className="vsl-unmute-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '50px',
                    fontFamily: 'var(--fh)',
                    fontWeight: 900,
                    fontSize: '18px',
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    textTransform: 'uppercase',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" />
                    <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.07 4.93005C20.9447 6.80528 21.9979 9.34836 21.9979 12.0001C21.9979 14.6517 20.9447 17.1948 19.07 19.0701" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  TOQUE PARA ATIVAR O ÁUDIO
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
