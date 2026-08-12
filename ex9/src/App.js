import SimpleCard from "./components/SimpleCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  return (
    <div className="container-fluid">
      <div
        className="shadow p-3 m-3 shadow-2"
        style={{ border: "1px solid gray" }}
      >
        <SimpleCard />
      </div>

      <div className="row">
        <div className="col-12">
          <Header />
        </div>

        <div className="col-12">
          <Content />
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
