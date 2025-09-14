import img1 from "../assets/cat.svg";
import img2 from "../assets/cat-2.svg";
import img3 from "../assets/cat-3.svg";
import img4 from "../assets/cat-4.svg";
import img5 from "../assets/cat-5.svg";

export default function GalleryHashtag(){
  const images = [img1, img2, img3, img4, img5];
  return (
    <section className="gallery-hashtag">
      <div className="container">
        <header className="section-head">
          <p>Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:</p>
          <h2 className="hashtag">#AdoradoresDePapelão</h2>
        </header>
        <div className="gallery__strip">
          {images.map((src, i) => (
            <div key={i} className="gallery__item">
              <img src={src} alt={`Galeria ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
