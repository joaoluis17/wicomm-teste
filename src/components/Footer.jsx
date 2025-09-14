import logoWhite from '../assets/logo-white-icon.svg';

export default function Footer(){
  return (
    <footer className="site-footer-extended">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logoWhite} alt="Logo GAT" />
            </div>
            <p>Design em madeira que transforma ambientes com peças sustentáveis e atemporais.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Produtos</h4>
            <ul className="footer-links">
              <li><a href="#">Coleções</a></li>
              <li><a href="#">Minimalismo</a></li>
              <li><a href="#">Maximalismo</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Sobre</h4>
            <ul className="footer-links">
              <li><a href="#">Nossa História</a></li>
              <li><a href="#">Sustentabilidade</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Suporte</h4>
            <ul className="footer-links">
              <li><a href="#">Atendimento</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Entrega</a></li>
              <li><a href="#">Garantia</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 GAT. Todos os direitos reservados.</p>
          </div>
          <div className="footer-badges">
            <span className="badge-ssl">🔒 SSL</span>
            <span className="badge-payment">💳 Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
