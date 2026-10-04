function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

  <a href="/" className="footer-logo">
  <span>COLORING</span> WORLD
</a>
          <p>
            Transformez vos souvenirs
            <br />
            en œuvres d'art.
          </p>

        </div>


        <div className="footer-links">

          <div>
            <p className="footer-title">
              NAVIGATION
            </p>

            <a href="/">Accueil</a>
            <a href="#paint-by-numbers">
              Paint by Numbers
            </a>
            <a href="#decoratifs">
              Décoratifs
            </a>
            <a href="#gallery">
              Galerie
            </a>
            <a href="#contact">
              Contact
            </a>
          </div>


          <div>
            <p className="footer-title">
              SOCIAL
            </p>

            <a
              href="https://www.instagram.com/coloring_world06/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
             href="https://wa.me/212673288926"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © {year} Coloring World
        </span>

        <span>
          Fès · Maroc
        </span>

        <span>
          Paint by Numbers
        </span>

      </div>

    </footer>
  );
}

export default Footer;