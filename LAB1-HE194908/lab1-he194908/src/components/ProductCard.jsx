import React, { useState } from "react";
import { productList as initialProductList } from "./ProductList";

function ProductCard({ onAddToCart }) {
  const [products, setProducts] = useState(initialProductList);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCartClick = (productId) => {
    // Decrease quantity
    setProducts(products.map(p => {
      if (p.id === productId && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    }));

    if (onAddToCart) {
      onAddToCart();
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container position-relative">
      {showAlert && (
        <div 
          className="alert alert-success position-fixed top-0 end-0 m-3 shadow" 
          role="alert" 
          style={{ zIndex: 1050, transition: "opacity 0.3s" }}
        >
          Thêm vào giỏ hàng thành công!
        </div>
      )}
      <div className="row">
        {products.map((p) => (
          <div className="col col-md-3 ">
            <div
              className="card "
              key={p.id}
              style={{
                width: "18rem",
                border: "1px solid white",
                padding: "10px",
                boxShadow: "0 4px 10px red",
                marginBottom: "20px",
              }}
            >
              <img
                src={p.image}
                className="card-img-top"
                alt="menu"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5
                  className="card-title d-flex justify-content-center"
                  style={{ color: "black" }}
                >
                  {p.name}
                </h5>
                <div
                  className="d-flex justify-content-center"
                  style={{ gap: "10px" }}
                >
                  <p
                    className="card-title d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "line-through" }}
                  >
                    {p.oldPrice}
                  </p>
                  <h5
                    className="card-title d-flex justify-content-center"
                    style={{ color: "red" }}
                  >
                    {p.price}
                  </h5>
                </div>
                <p
                  className="d-flex justify-content-center"
                  style={{
                    backgroundColor: p.quantity === 0 ? "gray" : "green",
                    color: "white",
                    border: "0px",
                    padding: "2px",
                  }}
                >
                  {p.quantity === 0 ? "Out of stock" : `${p.status} (Còn ${p.quantity})`}
                </p>
                <div
                  className="d-flex justify-content-center"
                  style={{ width: "90%" }}
                >
                  <button 
                    className="btn btn-primary" 
                    style={{ width: "90%" }}
                    onClick={() => handleAddToCartClick(p.id)}
                    disabled={p.quantity === 0}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
