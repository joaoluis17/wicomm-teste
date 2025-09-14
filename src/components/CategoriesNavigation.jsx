import React, { useState } from 'react';
import classicIcon from '../assets/classic-icon.svg';
import minimalIcon from '../assets/minimal-icon.svg';
import maximalIcon from '../assets/maximal-icon.svg';
import bohoIcon from '../assets/boho-icon.svg';

const categories = [
  { label: 'CLÁSSICO', icon: classicIcon },
  { label: 'MINIMALISMO', icon: minimalIcon },
  { label: 'MAXIMALISMO', icon: maximalIcon },
  { label: 'BOHO', icon: bohoIcon },
];

export default function CategoriesNavigation() {
  const [activeCategory, setActiveCategory] = useState('MINIMALISMO');
  
  return (
    <section className="categories-nav">
      <div className="container">
        <h2>NAVEGUE PELAS CATEGORIAS</h2>
        <div className="categories-nav__list">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`cat-pill ${activeCategory === cat.label ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.label)}
            >
              <img src={cat.icon} alt={`Ícone ${cat.label}`} className="cat-icon" />
              {cat.label}
            </button>
          ))}
          <a href="#todos" className="cat-pill cat-pill-ghost">
            VER TUDO
          </a>
        </div>
      </div>
    </section>
  );
}