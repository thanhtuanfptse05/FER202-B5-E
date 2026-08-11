import React from "react";

function BookTable() {
  return (
    <div>
      <div
        className="d-flex justify-content-center m-3 p-3 "
        style={{ gap: "20px" }}
      >
        <form>
          <label className="form-label" style={{ color: "white" }}>
            Your Name*
          </label>
          <input
            className="form-control"
            type="text"
            style={{
              backgroundColor: "black",
              border: "2px solid white",
              color: "white",
            }}
            placeholder="Enter your name"
          />
        </form>
        <form>
          <label className="form-label" style={{ color: "white" }}>
            Date*
          </label>
          <input
            className="form-control"
            type="date"
            style={{
              backgroundColor: "black",
              border: "2px solid white",
              color: "white",
            }}
          />
        </form>
        <form>
          <label className="form-label" style={{ color: "white" }}>
            Select a Service*
          </label>
          <input
            className="form-control"
            type="text"
            style={{
              backgroundColor: "black",
              border: "2px solid white",
              color: "white",
            }}
            placeholder="Choose service..."
          />
        </form>
      </div>
      <div className="d-flex justify-content-center m-3 p-3">
        <form>
          <label className="form-label" style={{ color: "white" }}>
            Please share your message
          </label>
          <textarea
            className="form-control"
            rows={5}
            style={{
              backgroundColor: "black",
              border: "2px solid white",
              color: "white",
              width: "600px",
              height: "150px",
            }}
            placeholder="Write your message..."
          />
        </form>
      </div>
      <div className="d-flex justify-content-center m-3 p-3">
        <button className="btn btn-warning">Send Message</button>
      </div>
    </div>
  );
}

export default BookTable;
