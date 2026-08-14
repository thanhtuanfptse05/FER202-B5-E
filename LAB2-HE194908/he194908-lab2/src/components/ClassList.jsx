import React, {
  useState,
  useContext,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { ThemeContext } from "../App";
function ClassList({ classes, dispatch }) {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [selectStatus, setSelectStatus] = useState("all");
  const nameRef = useRef(null);
  const statusRef = useRef(null);

  const filtered = classes.filter((p) => {
    const filterName = p.name.toLowerCase().includes(searchKey.toLowerCase());
    const filterStatus = selectStatus === "all" || p.status === selectStatus;
    return filterName && filterStatus;
  });

  const handleReset = () => {
    setSearchKey("");
    setSelectStatus("all");
  };
  const uniqueStatus = useMemo(() => {
    return [...new Set(classes.map((i) => i.status))];
  }, [classes]);

  const handleDelete = useCallback(
    (id) => {
      const confirmDelete = window.confirm("Ban co chac chan muon xoa khong?");
      if (confirmDelete) {
        dispatch({ type: "DELETE_RECORD", payload: id });
      }
    },
    [dispatch],
  );

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
        {/* tìm kiếm theo tên */}
        <div style={{ flex: 1 }}>
          <input
            className="form-control"
            type="text"
            placeholder="Tìm kiếm theo tên sinh viên"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>

        {/* trạng thái */}
        <div style={{ flex: 1 }}>
          <select
            className="form-select"
            value={selectStatus}
            onChange={(e) => setSelectStatus(e.target.value)}
          >
            <option value="all">Tất cả trạng thái</option>
            {uniqueStatus.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "#9e4f05",
              color: "white",
              fontWeight: "bold",
              padding: "8px 20px",
            }}
            onClick={handleReset}
          >
            Reset Bộ lọc
          </button>
        </div>
      </div>
      <div className="m-3">
        <p>
          <span>Tổng số bản ghi: </span>
          <span style={{ fontWeight: "bold" }}>{classes.length}</span>
          <span>Có mặt: </span>
          <span>Tỷ lệ đi học:</span>
        </p>
      </div>
      <div className="m-3">
        <table
          className={`table table-bordered ${theme === "dark" ? "table-dark" : ""}`}
        >
          <thead>
            <tr>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                STT
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                MÃ LỚP
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                TÊN SINH VIÊN
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                NGÀY
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                TRẠNG THÁI
              </th>
              <th style={{ color: "white", backgroundColor: "#9e4f05" }}>
                THAO TÁC
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.classId}</td>
                <td>{i.name}</td>
                <td>
                  {new Date(i.date).toLocaleString("vi-VN", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td>
                  <button>{i.status}</button>
                </td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(i.id)}
                  >
                    Xoá
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
