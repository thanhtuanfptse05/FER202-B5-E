function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body">
        <div className="container-fluid  d-flex">
          <a className="navbar-brand" style={{ color: "white" }}>
            Pizza House
          </a>

          <div className="d-flex justify-space-between">
            <div style={{ marginRight: "30px" }}>
              <ul className="navbar-nav flex-row">
                <li className="nav-item me-3">
                  <a className="nav-link active text-white" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item me-3">
                  <a className="nav-link text-white" href="#">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
