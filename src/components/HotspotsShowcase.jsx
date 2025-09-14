

import bannerCat from '../assets/banner-cat.svg';

export default function HotspotsShowcase() {
  return (
    <section className="hotspots-showcase-full">
      <div className="hotspots-bg-full">
        <img src={bannerCat} alt="Ambiente decorado com gatos" className="hotspots-bg-img" />
        <span className="hotspot-btn hotspot-1">1</span>
        <span className="hotspot-btn hotspot-2">2</span>
        <span className="hotspot-btn hotspot-3">3</span>
        <span className="hotspot-btn hotspot-4">4</span>
        <span className="hotspot-btn hotspot-5">5</span>
        <div className="hotspots-content-box-full">
          <h2>Lorem Ipsum Dolor Sit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Clasa aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <a href="#" className="btn primary">Ver Seleção</a>
        </div>
      </div>
    </section>
  );
}
