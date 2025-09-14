import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import BenefitsBar from './components/BenefitsBar.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import CollectionsHighlight from './components/Highlight.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import CategoriesNavigation from './components/CategoriesNavigation.jsx';
import HotspotsShowcase from './components/HotspotsShowcase.jsx';
import DualMediaSection from './components/DualMediaSection.jsx';
import GalleryHashtag from './components/GalleryHashtag.jsx';
import NewsletterBlock from './components/NewsletterBlock.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <BenefitsBar />
        <CollectionsHighlight />
        <ProductShowcase />
        <CategoriesNavigation />
        <HotspotsShowcase />
        <DualMediaSection />
        <GalleryHashtag />
        <NewsletterBlock />
      </main>
      <Footer />
    </>
  );
}