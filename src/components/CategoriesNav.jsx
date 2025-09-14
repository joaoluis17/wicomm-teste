export default function CategoriesNav(){
  const cats = ["Clássico","Minimalismo","Maximalismo","Boho","Moderno","Ver Tudo"]
  return (
    <nav className="categories-nav" aria-label="Navegue pelas categorias">
      <div className="container categories-nav__list">
        {cats.map(c => <button key={c} className="cat-pill" type="button">{c}</button>)}
      </div>
    </nav>
  )
}
