export default function Home() {
	return (
		<div className="home-page">
			{/* Hero Section */}
			<section className="hero" id="colecao">
				<div className="container hero__grid">
					<div className="hero__content">
						<span className="pill">Nova Coleção</span>
						<h1>Design em madeira que transforma ambientes.</h1>
						<p>Peças minimalistas, sustentáveis e atemporais feitas para durar.</p>
						<div className="hero__cta-group">
							<a href="#produtos" className="btn primary">Ver produtos</a>
							<a href="#sobre" className="btn ghost">Saiba mais</a>
						</div>
					</div>
					<div className="hero__image placeholder" aria-label="Imagem destaque" />
				</div>
			</section>

			{/* Banner Duo */}
			<section className="banners" aria-label="Destaques">
				<div className="container banners__grid">
					<div className="banner-card highlight">
						<h3>Madeira Nobre</h3>
						<p>Acabamento premium com origem sustentável certificada.</p>
						<a href="#" className="text-link">Descobrir →</a>
					</div>
					<div className="banner-card neutral">
						<h3>Organização e Estilo</h3>
						<p>Peças funcionais que elevam seu espaço.</p>
						<a href="#" className="text-link">Ver mais →</a>
					</div>
				</div>
			</section>

			{/* Produtos */}
			<section className="products" id="produtos" aria-label="Lista de produtos">
				<div className="container">
					<header className="section-head">
						<h2>Queridinhos deles</h2>
						<p>Os mais desejados da coleção</p>
					</header>
					<div className="product-grid">
						{Array.from({ length: 5 }).map((_, i) => (
							<article key={i} className="product-card">
								<div className="product-card__image placeholder" />
								<h3 className="product-card__name">Produto {i + 1}</h3>
								<p className="product-card__price">R$ {(199 + i * 20).toFixed(2)}</p>
								<button className="btn small secondary" aria-label={`Adicionar Produto ${i + 1} ao carrinho`}>Adicionar</button>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Editorial / Decor Section */}
			<section className="editorial" id="decor" aria-label="Inspiração de decoração">
				<div className="container editorial__grid">
					<div className="editorial__image placeholder" />
					<div className="editorial__content">
						<h2>Decor, Arrumar & Relaxar</h2>
						<p>Cada peça foi desenvolvida pensando em ergonomia, estética e durabilidade. Criamos objetos que acompanham a rotina com leveza.</p>
						<a href="#" className="btn primary">Explorar ideias</a>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="gallery" aria-label="Galeria social">
				<div className="container">
					<header className="section-head">
						<h2>Momentos Reais</h2>
						<p>Clientes usando nossos produtos</p>
					</header>
					<div className="gallery__strip">
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className="gallery__item placeholder" aria-label={`Foto cliente ${i + 1}`}></div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
