export default function DualMediaSection(){
  return (
    <section className="dual-media">
      <div className="container">
        <div className="dual-media-grid">
          <div className="dual-media-content">
            <div className="decorative-circle"></div>
            <h2>Decorar<br />Arranjar &<br />Relaxar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <a href="#" className="text-link">Mais sobre a GAT</a>
          </div>
          <div className="dual-media-image">
            <div className="play-button">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                <path d="M25 20L40 30L25 40V20Z" fill="#000"/>
              </svg>
            </div>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNTAiIGZpbGw9IiM4RDYxNDQiLz4KPC9zdmc+" alt="Vídeo decoração" />
          </div>
        </div>
      </div>
    </section>
  )
}
