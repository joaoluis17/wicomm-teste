export default function HotspotsShowcase(){
  return (
    <section className="hotspots-showcase">
      <div className="container">
        <div className="hotspots-grid">
          <div className="hotspots-content">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <a href="#" className="btn primary">Ver Seleção</a>
          </div>
          <div className="hotspots-image">
            <div className="hotspot" style={{top: '20%', left: '30%'}}>
              <button className="hotspot-btn">+</button>
              <div className="hotspot-tooltip">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmNWY1ZjUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIi8+PC9zdmc+" alt="produto" />
                <span>Produto destacado</span>
              </div>
            </div>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzhENjE0NCIvPgo8L3N2Zz4=" alt="Ambiente decorado" />
          </div>
        </div>
      </div>
    </section>
  )
}
