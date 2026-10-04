import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../style/CategoryProducts.css";

function CategoryProducts() {
  const { categoryName } = useParams();

  const decodedCategory = decodeURIComponent(categoryName);

  const filteredProducts = products.filter(
    (item) =>
      item.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <main className="category-page">

      {/* HERO */}
      <section className="category-header">
        <div className="category-header-content">

          <span className="category-kicker">
            COLORING WORLD
          </span>

          <h1>{decodedCategory}</h1>

          <div className="category-line"></div>

          <p>
            Découvrez notre sélection de tableaux décoratifs
            soigneusement choisis pour embellir votre intérieur.
          </p>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="category-products">

        <div className="category-top">
          <span>
            {filteredProducts.length} produit
            {filteredProducts.length > 1 ? "s" : ""}
          </span>

          <span className="category-small-line"></span>

          <span>
            TABLEAUX DÉCORATIFS
          </span>
        </div>

        {filteredProducts.length > 0 ? (

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        ) : (

          <div className="empty-category">
            <h2>Aucun produit trouvé</h2>

            <p>
              Aucun tableau n'est disponible dans cette
              catégorie pour le moment.
            </p>
          </div>

        )}

      </section>

    </main>
  );
}

export default CategoryProducts;