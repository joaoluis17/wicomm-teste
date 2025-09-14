export default function NewsletterBlock(){
  return (
    <section className="newsletter-block">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Newsletter</h2>
            <p>Cadastre-se para ficar por dentro das novidades que chegaram aqui!</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Seu E-mail" />
            <button>Cadastrar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
