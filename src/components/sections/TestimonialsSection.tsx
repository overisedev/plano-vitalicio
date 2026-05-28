import React from 'react';

const columns = [
  {
    dur: '25s',
    images: [
      'https://i.imgur.com/tl8AVVF.png',
      'https://i.imgur.com/FECl9Fm.png',
      'https://i.imgur.com/evcOisC.png',
    ],
  },
  {
    dur: '32s',
    images: [
      'https://i.imgur.com/9d3sBFD.png',
      'https://i.imgur.com/twcnTWc.png',
      'https://i.imgur.com/eetZKMc.png',
    ],
  },
  {
    dur: '28s',
    images: [
      'https://i.imgur.com/XuoRRNP.png',
      'https://i.imgur.com/gjp6ejB.png',
      'https://i.imgur.com/tl8AVVF.png',
    ],
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testemunhos" className="sec-dark" style={{ padding: '80px 0' }}>
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

        <div className="testi-wrap reveal rd1">
          {columns.map((col, colIdx) => (
            <div className="testi-col" key={colIdx}>
              <div
                className="testi-col-inner"
                style={{ '--dur': col.dur } as React.CSSProperties}
              >
                {/* Original cards */}
                {col.images.map((src, imgIdx) => (
                  <div className="testi-card" key={imgIdx}>
                    <img
                      className="testi-card-img"
                      src={src}
                      alt="Feedback cliente"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {col.images.map((src, imgIdx) => (
                  <div className="testi-card" key={`dup-${imgIdx}`}>
                    <img
                      className="testi-card-img"
                      src={src}
                      alt="Feedback cliente"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
