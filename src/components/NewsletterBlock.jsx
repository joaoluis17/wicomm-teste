
import catNewsletter from '../assets/cat-newsletter.svg';

export default function NewsletterBlock() {
  return (
    <section className="newsletter-block">
      <div className="container">
        <div className="newsletter-content">
          <img src={catNewsletter} alt="Gato caramelo recebendo carinho" />
          <div className="newsletter-text">
            <h2 className="newsletter-title">NEWSLETTER</h2>
            <div className="newsletter-divider">
              <div className="newsletter-description">
                <strong>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</strong>
                <span>Seja a primeira a receber lançamentos, novidades e promoções.</span>
              </div>
              <form className="newsletter-form" autoComplete="off">
                <label htmlFor="pet-name" className="sr-only">Nome do seu pet</label>
                <input id="pet-name" type="text" placeholder="NOME DO SEU PET" name="pet" autoComplete="off" />
                <label htmlFor="email" className="sr-only">Seu e-mail</label>
                <input id="email" type="email" placeholder="SEU E-MAIL" name="email" autoComplete="off" />
                <button type="submit">CADASTRAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
