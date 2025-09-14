export default function CategoriesNavigation () {
  const CategoriesNav = () => {
    const categories = ['Clássico', 'Minimalismo', 'Maximalismo', 'Boho'];
    const [activeCategory, setActiveCategory] = useState('Minimalismo');

    return (
        <section className="categories-nav">
        <div className="container">
            <h2>Navegue pelas categorias</h2>
            <div className="categories-nav__list">
            {categories.map((category) => (
                <button 
                key={category}
                className={`cat-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                >
                {category}
                </button>
            ))}
            <a href="#" className="text-link">Ver Tudo</a>
            </div>
        </div>
        </section>
    );
  }
};