import './style.css'

const platos = [
  ['cafe-con-leche.jpg', 'Café con leche', 'Cafetería'],
  ['empanadas.jpg', 'Empanadas', 'Clásicos'],
  ['milanesa-fritas.jpg', 'Milanesa con fritas', 'Platos principales'],
  ['sandwich-milanesa.jpg', 'Sándwich de milanesa', 'Sándwiches'],
  ['hamburguesa.jpg', 'Hamburguesa', 'Sándwiches'],
  ['omelette-jq.jpg', 'Omelette de jamón y queso', 'Platos principales'],
  ['tortilla-de-papa.jpg', 'Tortilla de papa', 'Clásicos'],
  ['pastel-papa.jpg', 'Pastel de papa', 'Platos principales'],
  ['arroz-con-pollo.jpg', 'Arroz con pollo', 'Platos principales'],
  ['mondongo.jpg', 'Mondongo', 'Platos principales'],
  ['lentejas.jpg', 'Lentejas', 'Platos principales'],
  ['sorrentinos.jpg', 'Sorrentinos', 'Pastas'],
  ['ravioles.jpeg', 'Ravioles', 'Pastas'],
  ['spaghettis.jpg', 'Spaghettis', 'Pastas'],
  ['pastas.jpg', 'Pastas caseras', 'Pastas'],
]

const menuHTML = platos.map(([imagen, nombre, categoria]) => `
  <article class="food-card" data-image="/images/${imagen}">
    <div class="food-image">
      <img src="/images/${imagen}" alt="${nombre}" loading="lazy">
      <span>${categoria}</span>
    </div>
    <div class="food-info">
      <h3>${nombre}</h3>
      <button class="view-photo" type="button">Ver foto</button>
    </div>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <div class="nav-container">
      <a class="brand" href="#inicio">
        <img src="/images/logo.jpg" alt="Café Bar El Capi">
        <div>
          <strong>EL CAPI</strong>
          <small>CAFÉ BAR</small>
        </div>
      </a>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#menu">Menú</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a class="nav-whatsapp" href="https://wa.me/5491128991457" target="_blank" rel="noopener">
        WhatsApp
      </a>
    </div>
  </header>

  <main>
    <section id="inicio" class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">☕ CAFÉ · BAR · RESTAURANTE</div>
        <h1>El sabor de siempre,<br><em>en un solo lugar.</em></h1>
        <p>
          Un espacio para disfrutar un buen café, comer rico
          y compartir los clásicos que nunca fallan.
        </p>

        <div class="hero-actions">
          <a href="#menu" class="btn btn-primary">Ver nuestro menú</a>
          <a href="#contacto" class="btn btn-outline">Cómo llegar</a>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="section-heading">
        <span>BIENVENIDOS</span>
        <h2>Bienvenidos a <strong>El Capi</strong></h2>
        <p>
          Café, comidas caseras y ese ambiente de bar de barrio
          donde siempre dan ganas de quedarse un rato más.
        </p>
      </div>

      <div class="features">
        <div class="feature">
          <div class="feature-icon">☕</div>
          <h3>Café & cafetería</h3>
          <p>Para arrancar el día o disfrutar una pausa.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🍽️</div>
          <h3>Comida casera</h3>
          <p>Platos abundantes y sabores bien conocidos.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🍔</div>
          <h3>Clásicos</h3>
          <p>Milanesas, pastas, hamburguesas y mucho más.</p>
        </div>
      </div>
    </section>

    <section id="menu" class="menu-section">
      <div class="section-heading light">
        <span>NUESTRA CARTA</span>
        <h2>Algo rico para <strong>cada momento</strong></h2>
        <p>Descubrí algunos de los platos que podés disfrutar en El Capi.</p>
      </div>

      <div class="menu-grid">
        ${menuHTML}
      </div>
    </section>

    <section id="nosotros" class="story">
      <div class="story-content">
        <span>EL CAPI</span>
        <h2>Un lugar para volver.</h2>
        <p>
          Hay lugares donde uno simplemente va a comer. Y hay otros
          donde se siente como si ya los conociera de toda la vida.
        </p>
        <p>
          En El Capi buscamos eso: buena comida, café, atención cercana
          y un ambiente donde puedas sentarte tranquilo, disfrutar
          y compartir.
        </p>
        <a href="#contacto" class="text-link">Conocé dónde estamos →</a>
      </div>
      <div class="story-image">
        <img src="/images/milanesa-fritas.jpg" alt="Milanesa con papas fritas">
      </div>
    </section>

    <section class="cta">
      <div>
        <span>¿TENÉS GANAS DE COMER ALGO RICO?</span>
        <h2>Te esperamos en El Capi.</h2>
      </div>
      <a href="#contacto" class="btn btn-light">Encontranos</a>
    </section>

    <section id="contacto" class="contact">
      <div class="section-heading">
        <span>CONTACTO</span>
        <h2>Vení a <strong>conocernos</strong></h2>
      </div>

      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">📍</div>
          <h3>Ubicación</h3>
          <p>Ventana 3886 · Pompeya · CABA</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Ventana+3886%2C+Pompeya%2C+CABA"
             target="_blank" rel="noopener">Abrir Google Maps →</a>
        </div>

        <div class="contact-card">
          <div class="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Consultanos directamente por WhatsApp.</p>
          <a href="https://wa.me/5491128991457" target="_blank" rel="noopener">Escribir por WhatsApp →</a>
        </div>

        <div class="contact-card">
          <div class="contact-icon">☕</div>
          <h3>Te esperamos</h3>
          <p>Pasá por El Capi y disfrutá un momento diferente.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-brand">
      <img src="/images/logo.jpg" alt="El Capi">
      <div>
        <strong>EL CAPI</strong>
        <small>CAFÉ BAR</small>
      </div>
    </div>
    <p>© ${new Date().getFullYear()} Café Bar El Capi · Todos los derechos reservados.</p>
  </footer>

  <div class="modal" id="imageModal" aria-hidden="true">
    <button class="modal-close" type="button" aria-label="Cerrar">×</button>
    <img id="modalImage" src="" alt="">
  </div>
`

const modal = document.querySelector<HTMLDivElement>('#imageModal')!
const modalImage = document.querySelector<HTMLImageElement>('#modalImage')!

document.querySelectorAll<HTMLElement>('.food-card').forEach(card => {
  card.addEventListener('click', () => {
    const image = card.dataset.image
    if (!image) return
    modalImage.src = image
    modalImage.alt = card.querySelector('h3')?.textContent || 'Plato'
    modal.classList.add('active')
    modal.setAttribute('aria-hidden', 'false')
  })
})

const closeModal = () => {
  modal.classList.remove('active')
  modal.setAttribute('aria-hidden', 'true')
  modalImage.src = ''
}

document.querySelector('.modal-close')?.addEventListener('click', closeModal)

modal.addEventListener('click', event => {
  if (event.target === modal) closeModal()
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal()
})
