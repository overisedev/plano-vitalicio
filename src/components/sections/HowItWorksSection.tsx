export function HowItWorksSection() {
  return (
    <section id="how" className="sec-dark section-grid">
      <div className="container text-center">
        <div className="reveal">
          <div className="tag g">Simples assim</div>
          <h2 className="h2 on-dark">
            3 passos. 5 minutos.<br />
            <em>Jogando hoje.</em>
          </h2>
        </div>

        <div className="steps reveal rd1">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-title">Garanta sua licença</div>
            <div className="step-desc">
              Pague R,97 uma vez. Receba o software por e-mail em minutos.
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-title">Ative no seu PC</div>
            <div className="step-desc">
              Instale, insira a chave. O sistema é 100% limpo e seguro.
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-title">Escolha e jogue</div>
            <div className="step-desc">
              +1000 jogos disponíveis. Baixe pela Steam, em velocidade máxima.
            </div>
          </div>
        </div>

        <div className="step-result reveal rd2">
          <div className="step-result-left">
            <div className="step-result-ico">
              <svg viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 3c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </div>
            <div>
              <div className="step-result-txt">Biblioteca pronta em 5 minutos</div>
              <div className="step-result-sub">
                Licença vitalícia · +1000 jogos · R,97 taxa única
              </div>
            </div>
          </div>
          <a
            href="#pricing"
            className="btn btn-accent btn-lg"
            style={{ background: '#000', color: 'var(--accent)', boxShadow: 'none' }}
          >
            Garantir ?
          </a>
        </div>
      </div>
    </section>
  );
}
