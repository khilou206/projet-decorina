function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-wrapper">

        <div className="contact-left">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Parlons de
            <br />
            <em>votre projet.</em>
          </h2>

          <p className="contact-description">
            Vous avez une photo, une idée ou simplement
            une question ? Nous sommes là pour vous aider
            à créer votre prochaine œuvre.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >
            Nous contacter sur WhatsApp
          </a>

        </div>


        <div className="contact-right">

          <div className="contact-item">
            <span>01</span>

            <div>
              <p>WHATSAPP</p>
              <a href="https://wa.me/">
                +212 6 73-288926
              </a>
            </div>
          </div>


          <div className="contact-item">
            <span>02</span>

            <div>
              <p>INSTAGRAM</p>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                @coloring_world
              </a>
            </div>
          </div>


          <div className="contact-item">
            <span>03</span>

            <div>
              <p>LOCALISATION</p>

              <strong>
                Fès · Maroc
              </strong>
            </div>
          </div>


          <div className="contact-item">
            <span>04</span>

            <div>
              <p>HORAIRES</p>

              <strong>
                Lun — Sam · 09:00 — 19:00
              </strong>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;