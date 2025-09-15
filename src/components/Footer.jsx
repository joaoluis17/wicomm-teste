import logoWhite from '../assets/logo-white-icon.svg';
import paymentsImage from '../assets/payments-icon.svg'; 
import seloEmpresa from '../assets/enterprise-icon.svg';
import seloCertificado from '../assets/certificate-icon.svg';
import seloSeguranca from '../assets/secure-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import youtubeIcon from '../assets/youtube-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';

export default function Footer() {
  return (
    <footer className="site-footer-extended">
      <div className="container">
        <div className="footer-grid">
          {/* Coluna da Logo */}
          <div className="footer-col footer-col-logo">
            <div className="footer-logo">
              <a href="#">
                <img src={logoWhite} alt="Logo GAT" />
              </a>
            </div>
          </div>

          {/* Coluna com Menu, Pagamentos e Certificados */}
          <div className="footer-col footer-col-main">
            {/* Menu de navegação */}
            <div className="footer-nav-menu">
              <ul className="footer-nav-links">
                <li><a href="#">PRODUTOS</a></li>
                <li><a href="#">COLEÇÕES</a></li>
                <li><a href="#">LOOKBOOK</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">WISHLIST</a></li>
                <li><a href="#">BLOG</a></li>
              </ul>
            </div>
            
            {/* Formas de pagamento e certificados */}
            <div className="footer-payment-section">
              <div className="footer-block">
                <h4>Formas de Pagamento</h4>
                <div className="footer-payments">
                  <img src={paymentsImage} alt="Pagamentos" />
                </div>
              </div>
              <div className="footer-block">
                <h4>Certificados e Segurança</h4>
                <div className="footer-certificados">
                  <img src={seloEmpresa} alt="Empresa" />
                  <img src={seloCertificado} alt="Certificado" />
                  <img src={seloSeguranca} alt="Segurança" />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Ajuda */}
          <div className="footer-col footer-col-ajuda">
            <h4>Ajuda</h4>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Sobre nossos produtos</a></li>
              <li><a href="#">Trocas e devoluções</a></li>
              <li><a href="#">Entregas</a></li>
              <li><a href="#">Indique e ganhe</a></li>
              <li><a href="#">Garantias</a></li>
            </ul>
          </div>

          {/* Coluna de Contato */}
          <div className="footer-col footer-col-contato">
            <h4>Contato</h4>
            <p>WhatsApp – (51) 9999-9999</p>
            <a href='mailto:ajuda@gat.com.br' className='footer-email'>E-mail – ajuda@gat.com.br</a>
            <h4 className='footer-social-title'>Redes Sociais</h4>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#" aria-label="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
              <a href="#" aria-label="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025, GAT. TODOS OS DIREITOS RESERVADOS.</span>
          <span>GAT LTDA | R. Ondina Carvalho Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</span>
        </div>
      </div>
    </footer>
  );
}