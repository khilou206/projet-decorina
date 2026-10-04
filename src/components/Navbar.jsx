import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import  "../style/navbar.css";
import products from "../data/products"; // مسار صحيح نحو مجلد data

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // استخراج الفئات الفريدة (Categories) من ملف products.js لمنع التكرار
  const categories = [...new Set(products.map((item) => item.category))];

  // دالة لتنقل المستخدم فور اختيار الفئة من القائمة المنسدلة
  const handleSelectChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/category/${encodeURIComponent(selectedCategory)}`);
    }
  };

  return (
    <>
      {/* =========================
          TOP PROMO BAR
      ========================= */}
      <div className="promo-bar">
        <div className="promo-track">
          <div className="promo-item">
            ⚡ VENTES FLASH ⚡ Jusqu'à -50% !!
          </div>
          <span className="promo-dot">•</span>
          <div className="promo-item">
            Livraison gratuite à partir de 200dh
          </div>
          <span className="promo-dot">•</span>
          <div className="promo-item">
            Profitez de -10% avec le code promo :
            <strong> SYART10</strong>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN NAVBAR
      ========================= */}
      <header className="main-navbar">
        <div className="navbar-container">

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* LEFT NAVIGATION WITH SELECT */}
          <nav className="navbar-left">
            
            {/* قائمة منسدلة بـ select و option */}
            <div className="dropdown-container">
              <select 
                className="navbar-select" 
                defaultValue="" 
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  TABLEAUX IMPRIMÉS
                </option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <Link to="/plaques">
          
             PAINT BY NUMBERS
            
            </Link>
          </nav>

          {/* LOGO */}
          <Link to="/" className="navbar-logo">
            <span className="logo-symbol">CW</span>
          </Link>

          {/* RIGHT NAVIGATION */}
          <nav className="navbar-right">
            <Link to="/decoratifs">
              PAR ESPACE
              <FiChevronDown />
            </Link>

            <Link to="/custom">
              PERSONNALISATION
            </Link>

            <Link to="/flash-sale" className="flash-link">
              ⚡ VENTES FLASH ⚡
            </Link>

            <button className="search-button">
              <FiSearch />
            </button>


            <Link to="/account" className="account-link">
              <FiUser />
            </Link>
          </nav>

          {/* MOBILE ICONS */}
          <div className="mobile-actions">
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
            <Link to="/account">
              <FiUser />
            </Link>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={
            menuOpen
              ? "mobile-navigation open"
              : "mobile-navigation"
          }
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            ACCUEIL
          </Link>
          <Link to="/decoratifs" onClick={() => setMenuOpen(false)}>
            TABLEAUX IMPRIMÉS
          </Link>
          
          {/* إظهار الفئات حتى في قائمة الهاتف المحمول */}
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/category/${encodeURIComponent(cat)}`}
              onClick={() => setMenuOpen(false)}
              style={{ paddingRight: "1.5rem", fontSize: "0.9rem" }}
            >
              - {cat}
            </Link>
          ))}

          <Link to="/paint-by-numbers" onClick={() => setMenuOpen(false)}>
            PEINTURE PAR NUMÉROS
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            GALERIE
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;