const services = [
  {
    number: "01",
    title: "Tableaux personnalisés",
    text: "Transformez votre photo préférée en une œuvre unique à peindre.",
  },
  {
    number: "02",
    title: "Paint by Numbers",
    text: "Recevez votre toile avec les numéros, les couleurs et les pinceaux.",
  },
  {
    number: "03",
    title: "Décoration",
    text: "Des créations pensées pour donner du caractère à votre intérieur.",
  },
];

function Decoratifs() {
  return (
    <section className="decoratifs-section" id="decoratifs">

      {/* HEADER */}

      <div className="decoratifs-header">

        <div>
          <p className="section-label">
            COLORING WORLD
          </p>

          <h2>
            L'art de créer
            <br />
            <em>autrement.</em>
          </h2>
        </div>

        <p className="decoratifs-intro">
          Une expérience créative pensée pour transformer
          vos souvenirs et vos idées en véritables œuvres
          d'art.
        </p>

      </div>


      {/* IMAGE + TEXT */}

      <div className="decoratifs-main">

        <div className="decoratifs-image">
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1400&q=85"
            alt="Art et décoration"
          />

          <div className="decoratifs-image-text">
            <span>COLORING WORLD</span>
            <span>FÈS · MAROC</span>
          </div>
        </div>


        <div className="decoratifs-content">

          <p className="decoratifs-number">
            03
          </p>

          <h3>
            Une création
            <br />
            <em>qui vous ressemble.</em>
          </h3>

          <p>
            Chez Coloring World, nous croyons que chaque
            souvenir mérite d'être transformé en quelque
            chose de spécial.
          </p>

          <p>
            Photo de famille, voyage, portrait ou simplement
            une image que vous aimez : nous la transformons
            en tableau Paint by Numbers prêt à créer.
          </p>

          <a href="#create" className="dark-outline-button">
            Commencer une création
          </a>

        </div>

      </div>


      {/* SERVICES */}

      <div className="services">

        {services.map((service) => (
          <div className="service" key={service.number}>

            <span className="service-number">
              {service.number}
            </span>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Decoratifs;