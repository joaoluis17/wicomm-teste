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
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI3NSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzhENjE0NCIvPgo8L3N2Zz4=" alt={product.name} />
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
