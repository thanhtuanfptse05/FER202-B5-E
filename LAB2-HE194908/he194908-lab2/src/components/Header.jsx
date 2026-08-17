import React, { useContext } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../App";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex justify-content-between">
      <div className="m-3">
        <h2>Hệ Thống Quản Lý Điểm Danh Lớp Học Cao Thanh Tuấn</h2>
      </div>

      <div
        className="m-3 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: theme === "light" ? "#e0e0e0" : "#444",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <FaRegMoon size={20} />
        ) : (
          <FaSun size={20} color="white" />
        )}
      </div>
    </div>
  );
}

export default Header;
