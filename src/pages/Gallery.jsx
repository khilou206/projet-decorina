import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image: "/images/painting-1.jpg",
    title: "Portrait personnalisé",
    category: "PAINT BY NUMBERS",
  },
  {
    id: 2,
    image: "/images/painting-2.jpg",
    title: "Souvenir en couleurs",
    category: "PERSONNALISÉ",
  },
  {
    id: 3,
    image: "/images/painting-3.jpg",
    title: "Art & Décoration",
    category: "DÉCORATIF",
  },
  {
    id: 4,
    image: "/images/painting-4.jpg",
    title: "Une œuvre unique",
    category: "PAINT BY NUMBERS",
  },
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [selectedIndex]);

  return (
    <section className="gallery-section" id="gallery">

      {/* HEADER */}

      <div className="gallery-header">

        <div>

          <p className="section-label">
            NOS CRÉATIONS
          </p>

          <h2>
            Quelques
            <br />
            <em>œuvres.</em>
          </h2>

        </div>

        <p>
          Découvrez quelques créations réalisées
          avec passion par Coloring World.
        </p>

      </div>


      {/* GRID */}

      <div className="gallery-grid">

        {galleryImages.map((item, index) => (

          <button
            type="button"
            className={`gallery-item gallery-item-${index + 1}`}
            key={item.id}
            onClick={() => openImage(index)}
          >

           <img
  src={item.image}
  alt={item.title}
  loading="lazy"
  decoding="async"
/>

            <div className="gallery-overlay">

              <div>

                <span>
                  {item.category}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

              <span className="gallery-number">
                0{index + 1}
              </span>

            </div>

          </button>

        ))}

      </div>


      {/* LIGHTBOX */}

      {selectedIndex !== null && (

        <div
          className="lightbox"
          onClick={closeImage}
        >

          <button
            type="button"
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Fermer"
          >
            <X size={25} />
          </button>


          <button
            type="button"
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Image précédente"
          >
            <ChevronLeft size={28} />
          </button>


          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={
                galleryImages[selectedIndex].image
              }
              alt={
                galleryImages[selectedIndex].title
              }
            />

            <div className="lightbox-info">

              <div>

                <span>
                  {galleryImages[selectedIndex].category}
                </span>

                <h3>
                  {galleryImages[selectedIndex].title}
                </h3>

              </div>

              <p>
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(galleryImages.length).padStart(2, "0")}
              </p>

            </div>

          </div>


          <button
            type="button"
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Image suivante"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      )}

    </section>
  );
}

export default Gallery;