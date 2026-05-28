export function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '36px 0 18px' }}>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              OVER<span>ISE</span>
            </div>
            <p className="footer-desc">
              Acesso ao catálogo Steam com +40.000 jogos. R$49,97 taxa única.
            </p>
          </div>
          <div className="footer-col">
            <h5>Produto</h5>
            <a href="#how">Como Funciona</a>
            <a href="#games">Catálogo</a>
            <a href="#pricing">Planos</a>
          </div>
          <div className="footer-col">
            <h5>Suporte</h5>
            <a href="#">WhatsApp</a>
            <a href="#">Reembolso</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Overise. Todos os direitos reservados.</p>
          <div className="footer-pay">
            <div className="pay-chip">PIX</div>
            <div className="pay-chip">CARTÃO</div>
            <div className="pay-chip">BOLETO</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
