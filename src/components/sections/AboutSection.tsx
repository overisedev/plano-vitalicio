const EMO_CARDS = [
  {
    t: 'Acaba a ansiedade da lista de desejos',
    d: 'Sabe aquele jogo que você adiciona, olha o preço, e fecha a aba frustrado? Nunca mais.',
    i: '1245620',
  },
  {
    t: 'Joga com seus amigos de novo',
    d: 'Chega de ficar de fora. Agora quando o grupo combina, você entra junto.',
    i: '271590',
  },
  {
    t: 'Sexta à noite = jogo novo',
    d: 'Em vez de assistir gameplay no YouTube, você instala e joga. Na hora.',
    i: '1091500',
  },
];

export function AboutSection() {
  return (
    <section className="sec-dark">
      <div className="container text-center">
        <div className="reveal">
          <div className="tag g">Além das features</div>
          <h2 className="h2 on-dark">
            O que muda na
            <br />
            <em>sua vida de gamer</em>
          </h2>
          <p className="sub on-dark center">
            Qualquer um lista features. O que importa é o que muda quando a biblioteca inteira está
            nas suas mãos.
          </p>
        </div>

        <div className="emo-grid reveal rd1">
          {EMO_CARDS.map((e) => (
            <div className="emo-card" key={e.i}>
              <img
                className="emo-card-img"
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${e.i}/header.jpg`}
                alt=""
                loading="lazy"
              />
              <div className="emo-title">{e.t}</div>
              <div className="emo-desc">{e.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}