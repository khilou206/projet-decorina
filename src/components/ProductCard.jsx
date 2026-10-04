import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;

  // دعم الاحتمالين معا واش الكود مستعمل title ولا name و image ولا img
  const id = product.id;
  const image = product.image || product.img;
  const title = product.title || product.name;
  const description = product.description || product.desc || "";
  
  const minPrice = product.sizes && product.sizes.length > 0 
    ? Math.min(...product.sizes.map(s => s.price)) 
    : (product.price || 99);

  return (
    <article className="product-card">
      <Link to={`/product/${id}`} className="product-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <div className="product-overlay">
          <span>Découvrir</span>
          <ArrowUpRight size5={18} />
        </div>
      </Link>

      <div className="product-info">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="product-price">
          À partir de {minPrice} DH
        </span>
      </div>
    </article>
  );
}

export default ProductCard;