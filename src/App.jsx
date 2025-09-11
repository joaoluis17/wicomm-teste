import './styles/App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <Header />
      {/* Barra de Benefícios */}
      <div className="benefits-bar">
        <div className="container benefits-bar__inner">
          <div className="benefit-main">
            <span className="benefit-main__number">10</span>
            <div>
              <div className="benefit-main__title">Benefício Principal</div>
              <div className="benefit-main__desc">Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
          </div>
          <div className="benefits-list">
            <div className="benefit-item"><span className="benefit-icon">🌟</span> Benefício Secundário</div>
            <div className="benefit-item"><span className="benefit-icon">🌟</span> Benefício Secundário</div>
            <div className="benefit-item"><span className="benefit-icon">🌟</span> Benefício Secundário</div>
            <div className="benefit-item"><span className="benefit-icon">🌟</span> Benefício Secundário</div>
          </div>
        </div>
      </div>
      <main>
        <Home />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Sobre</h4>
            <p>Peças em madeira desenvolvidas com design funcional e acabamento premium.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#colecao">Coleção</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()} aria-label="Inscreva-se para receber novidades">
              <label className="sr-only" htmlFor="news-email">Email</label>
              <input id="news-email" type="email" placeholder="Seu e-mail" required />
              <button type="submit">Assinar</button>
            </form>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Wicomm Teste. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
