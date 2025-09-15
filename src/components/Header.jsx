import logoBlack from '../assets/logo-black-icon.svg';
import catIcon from '../assets/cat-icon.svg';
import CartIcon from './icons/CartIcon';
import SearchIcon from './icons/SearchIcon';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__main container">
        <div className="header__logo-area">
          <div className="header__logo-bg">
            <a href="#">
              <img src={logoBlack} alt="Logo GAT" className="header__logo-img" />
            </a>
          </div>
          <nav className="header__nav header__nav--left" aria-label="Menu principal">
            <a href="#produtos">produtos</a>
            <a href="#colecoes">coleções</a>
          </nav>
        </div>
        <div className="header__center">
          <div className="header__search" role="search">
            <input type="text" placeholder="digite aqui o que procura" aria-label="Buscar" />
            <button type="button" aria-label="Buscar">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="header__right">
          <nav className="header__nav header__nav--right" aria-label="Menu secundário">
            <a href="#blog">blog</a>
            <a href="#lookbook">lookbook</a>
            <a href="#sobre">sobre a Gat</a>
            <a href="#wishlist">wishlist</a>
          </nav>
          <button className="icon-btn header__fav" aria-label="Favoritos">
            <img src={catIcon} alt="Favoritos" className="cat-fav" />
          </button>
          <button className="icon-btn header__cart" aria-label="Carrinho">
            <CartIcon />
            <span className="badge" aria-label="Itens no carrinho">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

