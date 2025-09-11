export default function Header() {
    return (
        <header className="header" role="banner">
            <div className="header__main container">
                <div className="header__logo">
                    <span className="logo-gat" aria-label="gat home">gat</span>
                </div>
                <nav className="header__nav" aria-label="Menu principal">
                    <a href="#produtos">produtos</a>
                    <a href="#colecoes">coleções</a>
                    <a href="#blog">blog</a>
                    <a href="#lookbook">lookbook</a>
                    <a href="#sobre">sobre a Gat</a>
                    <a href="#wishlist">wishlist</a>
                </nav>
                <div className="header__actions">
                    <form className="header__search" role="search" onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="digite aqui o que procura" aria-label="Buscar" />
                        <button type="submit" aria-label="Buscar"><label><img src="../assets/search.svg" alt="Buscar" /></label></button>
                    </form>
                    <button aria-label="Carrinho" className="icon-btn header__cart">
                        <span role="img" aria-label="carrinho">🛒</span>
                        <span className="badge" aria-label="Itens no carrinho">0</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
