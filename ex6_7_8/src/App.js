import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import products from "./products";
import cars from "./cars";
function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="row bg-light p-3">
        {/* Logo */}
        <div className="col-md-2">Navbar</div>
        {/* Menu */}
        <div className="col-md-6 d-flex gap-4">
          <span>Home</span>
          <span>Link</span>
          <span>Dropdown</span>
        </div>

        {/* Search */}
        <div className="search col-md-4">
          <input type="text" placeholder="Search" />
          <button className="btnSearch">Search</button>
        </div>
      </div>

      {/* Banner */}
      <div className="row">
        <div className="col-md-12">
          <img src="./banner.png" alt="Banner" />
        </div>
      </div>

      {/* Products */}

      <h2>NEW PRODUCT</h2>
      <p>List product descriptions</p>

      <div className="row products">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card shadow p-2 mb-5 bg-body-tertiary rounded">
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <h5>{product.name}</h5>
                <div className="d-flex justify-content-between">
                  <del>{product.oldPrice}</del>
                  <span className="text-warning">{product.newPrice}</span>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary btn-sm me-2">🛒</button>
                  <button className="btn btn-outline-secondary btn-sm">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bai 2 */}
      {/* Cards Column */}

      <h3>Cards Columns</h3>
      <div className="row cars">
        {cars.map((car) => {
          const colors = ["car-blue", "car-yellow", "car-red"];
          return (
            <div className="col-md-4" key={car.id}>
              <div className={`card ${colors[car.id - 1]}`}>
                <img src={car.image} alt="" />
                <div className="card-body text-center">
                  <p className="card-text">Some text inside the card.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bai 3 */}
      <div className="form ticket p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center bg-warning p-2 mb-3">
          <h4 className="mb-0">Form đặt vé máy bay</h4>
        </div>

        {/* Họ tên */}
        <div className="row mb-2 ">
          <label className="col-md-12 col-form-label">Họ tên</label>

          <div className="col-md-12">
            <div className="input-group">
              <div className="input-group-text">0</div>
              <input
                type="text"
                className="form-control"
                placeholder="Họ tên"
              />
              <div className="input-group-text">vnd</div>
            </div>
            <p className="text-muted">Phải nhập 5 ký tự, in hoa...</p>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="row mb-2 align-items-center">
          <label className="col-md-12 col-form-label">Địa chỉ</label>

          <div className="col-md-12">
            <input className="form-control" />
            <p className="text-muted">Phải nhập 5 ký tự, in hoa...</p>
          </div>
        </div>

        {/* Đi từ - Đến */}
        <div className="row mb-2">
          <div className="col-md-6">
            <label>Đi từ</label>
            <select className="form-select">
              <option>Hà Nội</option>
              <option>TP HCM</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Đến</label>
            <select className="form-select">
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <label className="form-label">Chọn chiều đi (Khứ hồi)</label>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Đi</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Về</label>
          </div>
        </div>

        {/* Button */}
        <button className="myButton">Đặt vé</button>
      </div>
    </div>
  );
}

export default App;
