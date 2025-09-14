
import productTilted from "../assets/product-tilted.svg";
import productBox from "../assets/product-box.svg";
import bgCircle from "../assets/bg-circle.svg";
import bgSubCircle from "../assets/bg-sub-circle.svg";

export default function CollectionsHighlight() {
  return (
    <section className="collections-highlight highlight-bg-circles">
      <img src={bgCircle} alt="" aria-hidden="true" className="highlight-bg-circle" />
      <img src={bgSubCircle} alt="" aria-hidden="true" className="highlight-bg-subcircle" />
      <div className="container">
        <div className="highlight-bar">
          <span className="highlight-bar-title">COLEÇÕES</span>
          <a href="#" className="highlight-bar-link">VER TODAS</a>
          <div className="highlight-bar-arrows">
            <button className="highlight-arrow left" aria-label="Anterior">
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#232228" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="highlight-arrow right" aria-label="Próximo">
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#232228" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="highlight-grid">
          <div className="highlight-left">
            <div className="highlight-img-title">
              <img src={productTilted} alt="Produto minimalista inclinado" className="highlight-tilted" />
              <h2 className="highlight-main-title">MINIMA<br/>LISMO</h2>
            </div>
            <p className="highlight-desc">
              Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver’s.
            </p>
            <a href="#" className="highlight-btn">EXPLORAR</a>
          </div>
          <div className="highlight-right">
            <div className="highlight-box-wrapper">
              <img src={productBox} alt="Móvel minimalista" className="highlight-box" />
              <button className="highlight-plus" aria-label="Ver mais">
                <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M14 9v10M9 14h10" stroke="#232228" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

