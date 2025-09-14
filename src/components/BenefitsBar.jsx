import React, { useState } from "react";

export default function BenefitsBar(){
  return (
    <div className="benefits-bar">
      <div className="container benefits-bar__inner">
        <div className="benefit-main">
          <span className="benefit-main__number">10</span>
          <div>
            <div className="benefit-main__title">Benefício Principal</div>
            <div className="benefit-main__desc">Descrição detalhada do benefício oferecido.</div>
          </div>
        </div>
        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Entrega Rápida
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Qualidade Premium
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Garantia Estendida
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Suporte 24h
          </div>
        </div>
      </div>
    </div>
  )
}
