import productImage from '../assets/product.svg';

export default function ProductShowcase(){
    const products = [
    { id: 1, name: 'Toca Túnel Mediano', price: 'R$ 199,00', rating: 4 },
    { id: 2, name: 'Toca Túnel Grande', price: 'R$ 219,00', rating: 5 },
    { id: 3, name: 'Toca Túnel Premium', price: 'R$ 239,00', rating: 5 }
  ];

  return (
    <section className="product-showcase" id="produtos">
      <div className="container">
        <header className="section-head">
          <h2>Queridinho deles</h2>
          <a href="#" className="text-link">Ver Tudo</a>
        </header>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={productImage} alt={product.name} />
              </div>
              <div className="product-card__content">
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? "star active" : "star"}>★</span>
                  ))}
                </div>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
