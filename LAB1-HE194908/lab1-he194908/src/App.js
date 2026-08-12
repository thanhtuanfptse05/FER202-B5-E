import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <Header cartCount={cartCount} />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <HeroBanner />
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "30px" }}
      >
        <h1>Featured Products</h1>
      </div>
      <div>
        <ProductCard onAddToCart={handleAddToCart} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
