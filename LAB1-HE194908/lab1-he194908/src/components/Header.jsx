import React from "react";
import { LuShoppingCart } from "react-icons/lu";
function Header({ cartCount = 0 }) {
  return (
    <div>
      <nav className="navbar bg-light border-bottom border-body">
        <div className="container-fluid  d-flex">
          <img
            src="/Images/logo.jpg"
            style={{ width: "100px", paddingLeft: "20px" }}
          />

          <div className="d-flex justify-space-between">
            <div style={{ marginRight: "30px" }}>
              <ul className="navbar-nav flex-row">
                <li className="nav-item me-3">
                  <a className="nav-link active text-black" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item me-3">
                  <a className="nav-link text-black" href="#">
                    Products
                  </a>
                </li>

                <li className="nav-item me-3">
                  <a className="nav-link text-black" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-black" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-black" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ paddingRight: "20px", display: "flex", alignItems: "center" }}>
              <span className="position-relative" style={{ cursor: "pointer" }}>
                <LuShoppingCart size={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65rem" }}>
                  {cartCount}
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
