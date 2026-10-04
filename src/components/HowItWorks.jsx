import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
const steps = [
  {
    number: "01",
    title: "Envoyez votre photo",
    text: "Choisissez une photo que vous aimez et envoyez-la-nous.",
  },
  {
    number: "02",
    title: "Choisissez votre format",
    text: "Sélectionnez le format qui correspond à votre espace.",
  },
  {
    number: "03",
    title: "Nous créons votre modèle",
    text: "Nous préparons votre modèle Paint by Numbers avec les couleurs adaptées.",
  },
  {
    number: "04",
    title: "Recevez votre tableau",
    text: "Votre kit est préparé avec la toile, les couleurs et les pinceaux.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">

      <div className="how-header">

        <div>

          <p className="section-label">
            COMMENT ÇA MARCHE ?
          </p>

          <h2>
            De votre photo
            <br />
            <em>à votre œuvre.</em>
          </h2>

        </div>

        <p>
          Une expérience simple pour transformer
          votre souvenir en une création artistique
          unique.
        </p>

      </div>


      <div className="how-grid">

        {steps.map((step) => (

          <article
            className="how-card"
            key={step.number}
          >

            <div className="how-top">

              <span className="how-number">
                {step.number}
              </span>

              <ArrowUpRight
                className="how-arrow"
                size={20}
              />

            </div>

            <div className="how-content">

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;