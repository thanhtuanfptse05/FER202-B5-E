import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>Color Switcher</h2>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: color,
          marginTop: "20px",
        }}
      >
        Current color: {color}
      </div>
    </div>
  );
}

export default ColorSwitcher;
