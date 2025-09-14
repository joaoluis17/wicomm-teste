import React, { useState, useEffect } from 'react';
import bgBanner from '../assets/bg-banner-coletion.svg';

const slides = [
  {
    id: 1,
    img: bgBanner,
    alt: 'Nova Coleção Slide 1',
  },
  {
    id: 2,
    img: bgBanner,
    alt: 'Nova Coleção Slide 2',
  },
  {
    id: 3,
    img: bgBanner,
    alt: 'Nova Coleção Slide 3',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{
        background: `url(${slides[current].img}) center center/cover no-repeat`,
        minHeight: '400px',
        maxHeight: '800px',
        width: '100%',
        height: '100vh',
        position: 'relative',
        transition: 'background 0.6s',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div className="hero-slider__viewport">
          <div className="hero-slide">
            <div className="hero__grid">
              {/* Conteúdo do slide pode ser customizado aqui se desejar */}
            </div>
          </div>
        </div>
        {/* Indicadores do carrossel */}
        <div className="hero-slider__indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-slider__dot${current === idx ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
