import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Visibility</h2>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>This is the hidden text.</p>}
    </div>
  );
}

export default ToggleVisibility;
