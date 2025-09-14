export default function GalleryHashtag(){
  return (
    <section className="gallery-hashtag">
      <div className="container">
        <header className="section-head">
          <p>Fica por conta da comunidade do gatinhos que adoram os nossos designs and pordutos com a hashtag:</p>
          <h2>#AdoradoresDePanelaio</h2>
        </header>
        <div className="gallery__strip">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="gallery__item">
              <img src={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI2NyIgdmlld0JveD0iMCAwIDIwMCAyNjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjY3IiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEzMyIgcj0iMzAiIGZpbGw9IiM4RDYxNDQiLz4KPC9zdmc+`} alt={`Galeria ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
