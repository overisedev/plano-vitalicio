import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'É seguro? Posso confiar?',
    a: 'Sim. Instalação 100% limpa. Sem arquivo suspeito. Mais de 5.000 clientes ativos comprovam.',
  },
  {
    q: 'Como funciona o acesso?',
    a: 'Você recebe o software Overise por e-mail após o pagamento. Instala no PC, insere sua licença, e o catálogo completo fica disponível em minutos.',
  },
  {
    q: 'Precisa de conta na Steam?',
    a: 'Sim. Você usa sua conta normal da Steam. Os jogos ficam acessíveis pela sua biblioteca.',
  },
  {
    q: 'Funciona online?',
    a: 'Sim. Os títulos compatíveis com modo online funcionam normalmente.',
  },
  {
    q: 'A licença expira?',
    a: 'A licença é vitalícia. Uma vez pago, o acesso é seu pra sempre. Inclui atualizações e suporte.',
  },
  {
    q: 'Aceita PIX, cartão e boleto?',
    a: 'Sim, todos. PIX libera o acesso em segundos. Taxa única, sem cobrança recorrente.',
  },
  {
    q: 'Tem suporte?',
    a: 'Sim. WhatsApp com gente real. Não é bot — é uma pessoa que te responde rápido.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="sec-dark">
      <div className="container">
        <div className="reveal text-center">
          <div className="tag g">Dúvidas frequentes</div>
          <h2 className="h2 on-dark">FAQ</h2>
        </div>

        <div className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <div className="faq-item reveal" key={i}>
              <button
                className={`faq-q${openIndex === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className="faq-chev">▼</span>
              </button>
              <div className={`faq-a${openIndex === i ? ' open' : ''}`}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
