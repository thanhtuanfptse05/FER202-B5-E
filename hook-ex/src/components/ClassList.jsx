import React, { useState, useContext, useRef, useMemo, useCallback, useEffect } from "react";
import { ThemeContext } from "../App";

function ClassList({ classes, dispatch }) {
  const { theme } = useContext(ThemeContext);
  const [editingClass, setEditingClass] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  const lecturerRef = useRef(null);

  const uniqueSubjects = useMemo(() => {
    return [...new Set(classes.map((i) => i.subject))];
  }, [classes]);

  useEffect(() => {
    if (editingClass) {
      nameRef.current.value = editingClass.name;
      subjectRef.current.value = editingClass.subject;
      lecturerRef.current.value = editingClass.lecturer;
    } else {
      if (nameRef.current) nameRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (lecturerRef.current) lecturerRef.current.value = "";
    }
  }, [editingClass]);

  const handleUpdate = () => {
    if (!nameRef.current.value || !subjectRef.current.value || !lecturerRef.current.value) {
      setErrorMsg("Vui long khong bo trong");
      return;
    }
    dispatch({
      type: "UPDATE_CLASS",
      payload: {
        id: editingClass.id,
        name: nameRef.current.value,
        subject: subjectRef.current.value,
        lecturer: lecturerRef.current.value,
      },
    });

    setEditingClass(null);
    setErrorMsg("");
  };

  const handleDelete = useCallback((id) => {
    const confirmDelete = window.confirm("Ban co chac chan muon xoa khong?");
    if (confirmDelete) {
      dispatch({ type: "DELETE_CLASS", payload: id });
    }
  }, [dispatch]);

  const handleEdit = useCallback((cls) => {
    setEditingClass(cls);
  }, []);

  const handleAdd = () => {
    if (!nameRef.current.value || !subjectRef.current.value || !lecturerRef.current.value) {
      setErrorMsg("Vui long khong bo trong");
      return;
    }

    setErrorMsg("");
    const newClass = {
      id: Date.now(),
      name: nameRef.current.value,
      subject: subjectRef.current.value,
      lecturer: lecturerRef.current.value,
      enrolled: 0,
      status: "OPEN",
    };

    dispatch({ type: "ADD_CLASS", payload: newClass });
    nameRef.current.value = "";
    subjectRef.current.value = "";
    lecturerRef.current.value = "";
  };

  return (
    <div>
      <div
        className="d-flex align-items-center"
        style={{
          gap: "12px",
          padding: "15px 20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "white",
        }}
      >
        {/* Tên lớp */}
        <div style={{ flex: 1 }}>
          <input
            className="form-control"
            type="text"
            placeholder="Tên lớp (VD: SE1705)..."
            ref={nameRef}
          />
        </div>

        {/* Môn học */}
        <div style={{ flex: 1 }}>
          <select
            className="form-select"
            ref={subjectRef}
            defaultValue=""
          >
            <option value="" disabled>Chọn môn học</option>
            {uniqueSubjects.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Giảng viên */}
        <div style={{ flex: 1 }}>
          <input
            className="form-control"
            type="text"
            placeholder="Giảng viên..."
            ref={lecturerRef}
          />
        </div>

        {/* Button */}
        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "#9e4f05",
              color: "white",
              fontWeight: "bold",
              padding: "8px 20px",
            }}
            onClick={editingClass ? handleUpdate : handleAdd}
          >
            {editingClass ? "Update" : " Thêm lớp"}
          </button>
        </div>
      </div>
      {errorMsg && (
        <div
          style={{
            color: "red",
            margin: "10px 20px",
            fontWeight: "bold",
          }}
        >
          {errorMsg}
        </div>
      )}
      <div className="m-3">
        <h6>
          Tổng số lớp học:{" "}
          <span style={{ fontWeight: "bold" }}>{classes.length}</span>
        </h6>
      </div>

      <div className="m-3">
        <table
          className={`table table-bordered ${theme === "dark" ? "table-dark" : ""}`}
        >
          <thead>
            <tr>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>No</th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                CLASS NAME
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                SUBJECT
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                LECTURER
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                ENROLLED
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                STATUS
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td style={{ fontWeight: "bold" }}>{i.name}</td>
                <td>{i.subject}</td>
                <td>{i.lecturer}</td>
                <td>{i.enrolled}</td>
                <td>
                  <span
                    style={{
                      backgroundColor:
                        i.status === "OPEN" ? "#dff7e8" : "#fde2e2",
                      color: i.status === "OPEN" ? "#198754" : "#dc3545",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                      display: "inline-block",
                    }}
                  >
                    {i.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(i.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassList;
