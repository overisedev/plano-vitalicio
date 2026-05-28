import React from 'react';

const ALL_IMAGES = [
  'https://i.imgur.com/tl8AVVF.png',
  'https://i.imgur.com/FECl9Fm.png',
  'https://i.imgur.com/evcOisC.png',
  'https://i.imgur.com/9d3sBFD.png',
  'https://i.imgur.com/twcnTWc.png',
  'https://i.imgur.com/eetZKMc.png',
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testemunhos" className="sec-dark hide-on-mobile" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: 48 }}>
          <div className="tag g">Feedback real de clientes</div>
          <h2 className="h2 on-dark">
            Quem ativou,
            <br />
            <em>aprovou.</em>
          </h2>
          <p className="sub on-dark center">
            Depoimentos reais no WhatsApp, Instagram, YouTube e vdeo. Sem ediuo, sem filtro.
          </p>
        </div>

        {/* Desktop Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginTop: '40px',
          maxWidth: '760px',
          margin: '40px auto 0',
        }} className="reveal rd1 desktop-only">
          {ALL_IMAGES.map((src, i) => (
            <div
              key={i}
              style={{
                background: '#161b22',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src={src}
                alt={`Feedback cliente ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: '12px' }}
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
};
