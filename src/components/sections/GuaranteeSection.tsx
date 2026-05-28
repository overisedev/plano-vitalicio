import { useCallback } from 'react';

export function GuaranteeSection() {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const url = 'https://www.ggcheckout.com/checkout/v4/BvIb4ex53LM73mU3DJsX';
    const val = 19.97;

    try {
      (window as any).ttq?.track('InitiateCheckout', {
        content_type: 'product',
        value: val,
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
    <section style={{ padding: '88px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
      <div style={{ position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse,rgba(57,255,20,.03) 0%,transparent 65%)', pointerEvents: 'none' }}></div>
      <div className="reveal" style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}>
        <div className="tag g">Pronto pra jogar?</div>
        <h2 className="h2 on-dark" style={{ fontSize: 'clamp(34px,6vw,72px)', marginBottom: '16px' }}>
          Sua lista de desejos pode<br />
          <em>acabar hoje.</em>
        </h2>
        <p className="sub on-dark center" style={{ marginBottom: '32px' }}>
          Elden Ring, GTA, God of War, Cyberpunk â€” acessÃ­veis em 5 minutos. R$49,97, taxa Ãºnica, licenÃ§a vitalÃ­cia.
        </p>
        <a href="#" onClick={handleClick} className="btn btn-accent btn-xl">
          Garantir Meu Acesso â€” R$49,97
        </a>
        <div style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, color: 'var(--dim)', marginTop: '16px', letterSpacing: '.08em' }}>
          7 DIAS DE GARANTIA Â· LICENÃ‡A VITALÃCIA Â· ACESSO IMEDIATO
        </div>
      </div>
    </section>
  );
}
