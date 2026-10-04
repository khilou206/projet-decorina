import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[0]
  );
  useEffect(() => {
  if (product) {
    document.title =
      `${product.title} — Coloring World`;
  }

  return () => {
    document.title =
      "Coloring World — Transformez vos souvenirs en art";
  };
}, [product]);

  if (!product) {
    return (
      <main className="product-not-found">

        <h1>
          Produit introuvable
        </h1>

        <Link to="/">
          Retour à l'accueil
        </Link>

      </main>
    );
  }

  const handleOrder = () => {
    const phoneNumber = "212673288926";

    const message = `Bonjour Coloring World 👋

Je souhaite commander :

🎨 Produit : ${product.title}
📐 Format : ${selectedSize.name}
💰 Prix : ${selectedSize.price} DH

Merci !`;

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  };
  

  return (
    <main className="product-page">

      {/* BACK */}

      <div className="product-back">

        <Link to="/">

          <ArrowLeft size={17} />

          Retour

        </Link>

      </div>


      <div className="product-detail">

        {/* IMAGE */}

        <div className="product-detail-image">

          <img
            src={product.image}
            alt={product.title}
          />

        </div>


        {/* INFO */}

        <div className="product-detail-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.title}
          </h1>

          <p className="product-description">
            {product.description}
          </p>


          {/* SIZES */}

          <div className="detail-section">

            <p className="detail-label">
              CHOISISSEZ LE FORMAT
            </p>

            <div className="detail-sizes">

              {product.sizes.map((size) => (

                <button
                  key={size.name}
                  className={
                    selectedSize.name === size.name
                      ? "detail-size active"
                      : "detail-size"
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
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

          </div>


          {/* PRICE */}

          <div className="detail-price">

            <span>
              Prix
            </span>

            <strong>
              {selectedSize.price} DH
            </strong>

          </div>


          {/* BUTTON */}

          <button
            className="detail-whatsapp"
            onClick={handleOrder}
          >
            Commander sur WhatsApp
          </button>


          {/* FEATURES */}

          <div className="product-features">

            <div>
              <Check size={16} />
              Toile prête à peindre
            </div>

            <div>
              <Check size={16} />
              Guide des couleurs
            </div>

            <div>
              <Check size={16} />
              Pinceaux inclus
            </div>
            

          </div>
          


          {/* DESCRIPTION */}

          <div className="long-description">

            <p className="detail-label">
              À PROPOS
            </p>

            <p>
              {product.longDescription}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Product;