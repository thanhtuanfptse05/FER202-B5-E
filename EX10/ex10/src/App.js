import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductList from "./components/ProductList";
import BookTable from "./components/BookTable";
function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="m-3">
        <Navbar />
      </div>
      <div className="m-3">
        <Banner />
      </div>
      <div className="d-flex justify-content-center m-3 p-3">
        <h1 style={{ color: "white" }}>Our Menu</h1>
      </div>
      <div className="m-3">
        <ProductList />
      </div>
      <div className="d-flex justify-content-center m-3 p-3">
        <h1 style={{ color: "white" }}>Book Your Table</h1>
      </div>
      <div className="m-3">
        <BookTable />
      </div>
    </div>
  );
}

export default App;
