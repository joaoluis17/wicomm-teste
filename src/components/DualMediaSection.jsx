import bgRedCircle from '../assets/bg-red-circle.svg';
import bgCatCaramel from '../assets/bg-cat-caramel.svg';

export default function DualMediaSection() {
  return (
    <section className="dual-media">
      <div className="container">
        <div className="dual-media-grid">
          
          {/* Coluna de texto */}
          <div className="dual-media-content">
            <img src={bgRedCircle} className='decorative-circle' />
            <h2>
              Decorar <br />
              Arranhar & <br />
              Relaxar
            </h2>
          </div>

          {/* Coluna da imagem */}
          <div className="dual-media-image">
            <img src={bgCatCaramel} alt="Vídeo decoração" />
            <div className="play-button">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                <path d="M25 20L40 30L25 40V20Z" fill="#000"/>
              </svg>
            </div>
            <p className='dual-media-paragraph'>
              Hammer can low idea of. Lunch able design items needle here stop
              drive. I or devil pants game close. Prioritize out key view /
              vendor we’ve. 4-blocker gave shift ideal based post.
            </p>
            <a href="#" className="btn-outline">
              MAIS SOBRE A GAT
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
