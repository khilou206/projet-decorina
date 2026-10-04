function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-label">
          COLORING WORLD · FÈS, MAROC
        </p>

        <h1>
          Votre photo.
          <br />
          <em>Votre œuvre.</em>
        </h1>

        <p className="hero-description">
          Transformez vos souvenirs en tableaux
          Paint by Numbers uniques, créés spécialement
          pour vous.
        </p>

        <div className="hero-actions">

          <a href="#create" className="hero-primary">
            Créer mon tableau
          </a>

          <a href="#gallery" className="hero-secondary">
            Découvrir nos créations
          </a>

        </div>

      </div>


      <div className="hero-image-wrapper">

        <img
          src="/images/hero.jpg"
          alt="Coloring World"
          className="hero-image"
        />

        <div className="hero-image-info">
          <span>PAINT BY NUMBERS</span>
          <span>01 / 01</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;