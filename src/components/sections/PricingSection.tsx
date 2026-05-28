import { useCallback } from 'react';

const PLANS = [
  {
    id: 'basic',
    name: 'BÁSICO',
    subtitle: 'Apenas +1.000 jogos',
    oldPrice: '97,00',
    price: '9',
    cents: ',97',
    freq: 'PAGAMENTO ÚNICO',
    stockText: 'Restam apenas 6 de 25 licenças',
    stockPercent: '76%',
    stockColor: '#ff4444',
    features: [
      'Apenas +1.000 jogos',
      'Entrega instantânea',
      'Acesso vitalício',
      'Anti-ban e seguro',
      'Suporte WhatsApp',
      'Sem lançamentos VIP',
      'Garantia de 7 dias',
    ],
    btnText: 'Escolher Básico',
    btnClass: 'btn-basic',
  },
  {
    id: 'ultimate',
    name: 'VITALÍCIO',
    tag: 'RECOMENDADO: BIBLIOTECA COMPLETA',
    subtitle: 'Acesso a todos os 40.000 jogos',
    oldPrice: '497,00',
    price: '49',
    cents: ',97',
    freq: 'PAGAMENTO ÚNICO',
    stockText: 'Últimas 2 de 25 licenças restantes',
    stockPercent: '92%',
    stockColor: '#00FF41',
    features: [
      '+40.000 jogos (Catálogo Completo)',
      'Todos os Lançamentos 2025/2026',
      'Atualizações Vitalícias',
      'Anti-ban e seguro',
      'Suporte WhatsApp Prioritário 24h',
      'Acesso a Jogos Rockstar / Ubisoft',
      'Online Desbloqueado',
      'Garantia de 7 dias',
    ],
    btnText: 'GARANTIR BIBLIOTECA COMPLETA',
    btnClass: 'btn-ultimate',
    highlight: true,
  },
];

export function PricingSection() {
  const handleCheckout = useCallback((e: React.MouseEvent, price: number) => {
    e.preventDefault();
    const url = 'https://www.ggcheckout.com/checkout/v4/BvIb4ex53LM73mU3DJsX';

    try {
      (window as any).ttq?.track('InitiateCheckout', {
        content_type: 'product',
        value: price,
        currency: 'BRL',
      });
    } catch (err) {}

    const utms = new URLSearchParams();
    const keys = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
      'src', 'sck', 'xcod', 'fbclid', 'gclid',
    ];
    const cur = new URLSearchParams(window.location.search);
    keys.forEach((k) => {
      const v = cur.get(k);
      if (v) utms.set(k, v);
    });
    try {
      const ud = localStorage.getItem('__utmify_session_data');
      if (ud) {
        const p = JSON.parse(ud);
        keys.forEach((k) => { if (p[k] && !utms.has(k)) utms.set(k, p[k]); });
      }
    } catch (err) {}
    try {
      const ss = sessionStorage.getItem('__utmify_session_data');
      if (ss) {
        const q = JSON.parse(ss);
        keys.forEach((k) => { if (q[k] && !utms.has(k)) utms.set(k, q[k]); });
      }
    } catch (err) {}
    try {
      const m = document.cookie.match(/utmify_session=([^;]+)/);
      if (m) {
        const c = JSON.parse(decodeURIComponent(m[1]));
        keys.forEach((k) => { if (c[k] && !utms.has(k)) utms.set(k, c[k]); });
      }
    } catch (err) {}

    let finalUrl = url;
    const qs = utms.toString();
    if (qs) finalUrl += (finalUrl.includes('?') ? '&' : '?') + qs;
    setTimeout(() => { window.location.href = finalUrl; }, 800);
  }, []);

  return (
    <section id="pricing" className="sec-dark" style={{ overflow: 'visible', padding: '100px 0' }}>
      <div className="container">
        <div className="pricing-grid reveal">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
            >
              {plan.tag && <div className="pricing-tag">{plan.tag}</div>}
              
              <div className="pricing-header">
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-sub">{plan.subtitle}</div>
                <div className="pricing-old">
                  de <s>R${plan.oldPrice}</s>
                </div>
                <div className="pricing-price">
                  R$ <span>{plan.price}</span>{plan.cents}
                </div>
                <div className="pricing-freq">{plan.freq}</div>
              </div>

              <div className="pricing-stock">
                <div className="stock-info">
                  <span className="stock-dot" style={{ backgroundColor: plan.stockColor, boxShadow: `0 0 10px ${plan.stockColor}` }}></span>
                  <span className="stock-text">{plan.stockText}</span>
                  <span className="stock-percent" style={{ color: plan.stockColor }}>{plan.stockPercent} Vendido</span>
                </div>
                <div className="stock-bar-bg">
                  <div className="stock-bar-fill" style={{ width: plan.stockPercent, backgroundColor: plan.stockColor }}></div>
                </div>
              </div>

              <ul className="pricing-feats">
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00FF41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f.replace('+', '').replace('40.000', '+40.000').replace('1000', '+1000')}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`pricing-btn ${plan.btnClass}`}
                onClick={(e) => handleCheckout(e, parseFloat(plan.price + '.' + plan.cents.replace(',', '')))}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: end;
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .pricing-card {
          background: #111418;
          border: 1px solid rgba(255,255,255,.05);
          border-radius: 20px;
          padding: 40px 32px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
        }

        .pricing-card-highlight {
          border: 2px solid #00FF41;
          box-shadow: 0 0 40px rgba(0,255,65,.1);
          padding-top: 50px;
          background: #15191e;
        }

        .pricing-tag {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #00FF41;
          color: #0b0e11;
          font-family: var(--fh);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .05em;
          padding: 6px 20px;
          border-radius: 50px;
          white-space: nowrap;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .pricing-name {
          font-family: var(--fh);
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
        }

        .pricing-card-highlight .pricing-name {
          font-size: 32px;
        }

        .pricing-sub {
          font-size: 13px;
          color: var(--muted);
          margin-top: 4px;
        }

        .pricing-old {
          font-size: 12px;
          color: var(--dim);
          margin-top: 16px;
        }
        .pricing-old s {
          color: #ff4444;
          opacity: 0.7;
        }

        .pricing-price {
          font-family: var(--fh);
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          line-height: 1;
          margin: 8px 0;
        }

        .pricing-price span {
          font-size: 64px;
        }

        .pricing-card-highlight .pricing-price {
          color: #fff;
        }

        .pricing-freq {
          font-family: var(--fh);
          font-size: 11px;
          color: var(--dim);
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .pricing-stock {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,.05);
        }

        .stock-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .stock-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 6px;
          animation: livep 1.5s infinite;
        }

        .stock-text {
          color: var(--muted);
          flex: 1;
        }

        .stock-percent {
          font-family: var(--fh);
          font-size: 12px;
        }

        .stock-bar-bg {
          height: 4px;
          background: rgba(255,255,255,.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .stock-bar-fill {
          height: 100%;
          border-radius: 4px;
        }

        .pricing-feats {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex: 1;
        }

        .pricing-feats li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
          color: var(--text);
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .pricing-feats svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pricing-btn {
          width: 100%;
          padding: 16px;
          border-radius: 8px;
          font-family: var(--fh);
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
          transition: all 0.2s;
        }

        .btn-basic {
          background: rgba(255,255,255,.05);
          color: #fff;
        }
        .btn-basic:hover {
          background: rgba(255,255,255,.1);
        }

        .btn-advanced {
          background: #238823;
          color: #fff;
        }
        .btn-advanced:hover {
          background: #2ba32b;
        }

        .btn-ultimate {
          background: #00FF41;
          color: #0b0e11;
          box-shadow: 0 0 20px rgba(0,255,65,.2);
        }
        .btn-ultimate:hover {
          background: #4dff33;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  );
}
