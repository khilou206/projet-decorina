import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


import UploadPhoto from "./components/UploadPhoto";
import Decoratifs from "./pages/Decoratifs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import CategoryProducts from "./pages/CategoryProducts";
import HowItWorks from "./components/HowItWorks";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
  
    
        <HowItWorks />
   
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* صفحة تفاصيل المنتج */}
        <Route
          path="/plaques"
          element={
            <>
              <Navbar />
              <UploadPhoto />
              <Footer />
            </>
          }
        />

        {/* صفحة عرض المنتجات حسب الفئة المنسدلة من القائمة */}
        <Route
          path="/category/:categoryName"
          element={
            <>
              <Navbar />
              <CategoryProducts />
              <Footer />
            </>
          }
        />
        
        <Route path="/product/:id" element={<>
           <Navbar />
         <Product />
           <Footer />
         </>
         } />

        {/* صفحة الديكورات والخدمات */}
        <Route
          path="/decoratifs"
          element={
            <>
              <Navbar />
              <Decoratifs />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;