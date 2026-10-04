import { useState } from "react";
import { Upload, X, Check } from "lucide-react";

const sizes = [
  { name: "30 × 40 cm", price: 99 },
  { name: "30 × 50 cm", price: 119 },
  { name: "40 × 60 cm", price: 139 },
  { name: "50 × 70 cm", price: 189 },
  { name: "70 × 90 cm", price: 249 },
];

function UploadPhoto() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Veuillez choisir une image JPG, PNG ou WEBP.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("La taille maximale de l'image est de 10 MB.");
      return;
    }

    if (image) {
      URL.revokeObjectURL(image);
    }

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setFileName(file.name);
  };

  const removeImage = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }

    setImage(null);
    setFileName("");
  };

  const handleOrder = () => {
    if (!image) {
      alert("Veuillez d'abord choisir votre photo.");
      return;
    }

    const phoneNumber = "212673288926";

    const message = `Bonjour Coloring World 👋

Je souhaite commander un tableau Paint by Numbers.

📐 Format : ${selectedSize.name}
💰 Prix : ${selectedSize.price} DH
🖼️ Photo : ${fileName}

Je vous envoie ma photo ici après ce message.

Merci !`;

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="create-section" id="create">

      <div className="create-header">

        <p className="section-label">
          CRÉEZ VOTRE TABLEAU
        </p>

        <h2>
          Votre photo.
          <br />
          <em>Votre œuvre.</em>
        </h2>

        <p>
          Envoyez votre photo, choisissez votre format
          et découvrez immédiatement le prix de votre création.
        </p>

      </div>


      <div className="creator">

        {/* UPLOAD */}

        <div className="upload-box">

          {image ? (
            <div className="preview">

              <img
                src={image}
                alt="Aperçu de votre photo"
              />

              <div className="preview-actions">

                <span>
                  <Check size={14} />
                  {fileName}
                </span>

                <button
                  type="button"
                  onClick={removeImage}
                  aria-label="Supprimer la photo"
                >
                  <X size={18} />
                </button>

              </div>

            </div>
          ) : (
            <label
              htmlFor="photo-upload"
              className="upload-content"
            >

              <div className="upload-icon">
                <Upload
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <h3>
                Envoyez votre photo
              </h3>

              <p>
                JPG, PNG ou WEBP · 10 MB maximum
              </p>

              <span>
                Choisir une photo
              </span>

            </label>
          )}

          <input
            id="photo-upload"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImage}
          />

        </div>


        {/* OPTIONS */}

        <div className="creator-options">

          <div className="option-title">

            <span>01</span>

            <div>
              <p>VOTRE PHOTO</p>

              <strong>
                {image
                  ? "Photo sélectionnée ✓"
                  : "Choisissez une photo"}
              </strong>
            </div>

          </div>


          <div className="option-title">

            <span>02</span>

            <div>
              <p>CHOISISSEZ LE FORMAT</p>

              <strong>
                {selectedSize.name}
              </strong>
            </div>

          </div>


          <div className="size-list">

            {sizes.map((size) => (
              <button
                type="button"
                key={size.name}
                className={
                  selectedSize.name === size.name
                    ? "size-option active"
                    : "size-option"
                }
                onClick={() => setSelectedSize(size)}
              >

                <span>
                  {size.name}
                </span>

                <strong>
                  {size.price} DH
                </strong>

              </button>
            ))}

          </div>


          {/* TOTAL */}

          <div className="total">

            <div>
              <p>PRIX TOTAL</p>

              <strong>
                {selectedSize.price} DH
              </strong>
            </div>

            {image && (
              <Check
                size={25}
                strokeWidth={1.5}
              />
            )}

          </div>


          {/* ORDER */}

          <button
            type="button"
            className={
              image
                ? "whatsapp-button"
                : "whatsapp-button disabled"
            }
            onClick={handleOrder}
            disabled={!image}
          >
            {image
              ? "Commander sur WhatsApp"
              : "Ajoutez votre photo"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default UploadPhoto;