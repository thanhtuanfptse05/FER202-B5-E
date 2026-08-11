import React from "react";
import { pizzaData } from "../data";
function ProductList() {
  return (
    <div className="d-flex justify-content-center" style={{ gap: "20px" }}>
      {pizzaData.map((p) => (
        <div
          className="card"
          key={p.id}
          style={{
            width: "18rem",
            backgroundColor: "black",
            border: "1px solid white",
            padding: "10px",
            boxShadow: "0 4px 10px red",
          }}
        >
          <img src={p.image} className="card-img-top" alt="menu" />
          <div className="card-body">
            <h5
              className="card-title d-flex justify-content-center"
              style={{ color: "white" }}
            >
              {p.name}
            </h5>
            <div
              className="d-flex justify-content-center"
              style={{ gap: "10px" }}
            >
              <p
                className="card-title d-flex justify-content-center"
                style={{ color: "white", textDecoration: "line-through" }}
              >
                {p.oldPrice}
              </p>
              <h5
                className="card-title d-flex justify-content-center"
                style={{ color: "yellow" }}
              >
                {p.price}
              </h5>
            </div>
            <div className="d-flex justify-content-center">
              <button class="btn btn-dark" style={{ width: "90%" }}>
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
