import pawIcon from '../assets/paw-icon.svg';

export default function BenefitsBar() {
  return (
    <div className="benefits-bar">
      <div className="container benefits-bar__inner benefits-bar__grid">
        {/* Bloco principal */}
        <div className="benefit-main">
          <span className="benefit-main__number">10</span>
          <div>
            <div className="benefit-main__title">Benefício Principal</div>
            <div className="benefit-main__desc">Lorem ipsum dolor sit amet, consectetur.</div>
          </div>
        </div>
        {/* Blocos secundários */}
        <div className="benefit-secondary-list">
          {[1, 2, 3].map((i) => (
            <div className="benefit-secondary" key={i}>
              <span className="benefit-secondary__icon">
                {/* SVG engrenagem arredondada */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8c1.2-2.5 5.8-2.5 7 0 .5 1 1.7 1.3 2.6.7 2.2-1.4 5.2 1.6 3.8 3.8-.6.9-.3 2.1.7 2.6 2.5 1.2 2.5 5.8 0 7-1 .5-1.3 1.7-.7 2.6 1.4 2.2-1.6 5.2-3.8 3.8-.9-.6-2.1-.3-2.6.7-1.2 2.5-5.8 2.5-7 0-.5-1-1.7-1.3-2.6-.7-2.2 1.4-5.2-1.6-3.8-3.8.6-.9.3-2.1-.7-2.6-2.5-1.2-2.5-5.8 0-7 1-.5 1.3-1.7.7-2.6-1.4-2.2 1.6-5.2 3.8-3.8.9.6 2.1.3 2.6-.7Z" stroke="#fff" strokeWidth="2"/>
                </svg>
              </span>
              <div className="benefit-secondary__title">Benefício Secundário</div>
              <div className="benefit-secondary__desc">Lorem ipsum dolor sit amet, consectetur al muud’ib.</div>
            </div>
          ))}
        </div>
      </div>
      {/* Linha de benefícios terciários */}
      <div className="benefit-tertiary-bar">
        {['Benefício Terciário', 'Benefício Terciário', 'Lisan Al Gatb', 'Benefício Terciário', 'Benefício Terciário'].map((txt, idx) => (
          <span className="benefit-tertiary" key={idx}>
            <span className="benefit-tertiary__icon">
              <img src={pawIcon} alt="Ícone de patinha" />
            </span> {txt}
          </span>
        ))}
      </div>
    </div>
  );
}
