import Image from "./Image";
function Header() {
  return (
    <div style={{ backgroundColor: "#F2CA81" }}>
      <div
        style={{
          backgroundColor: "#E58D2B",
          padding: "20px",
        }}
      >
        <div className="d-flex justify-content-center m-4">
          <Image />
        </div>
        <div className="d-flex justify-content-center">
          <p className="m-3">
            <span style={{ color: "white" }}>Home</span>
          </p>
          <p className="m-3">
            <span style={{ color: "white" }}>About</span>
          </p>
          <p className="m-3">
            <span style={{ color: "white" }}>Contact</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
