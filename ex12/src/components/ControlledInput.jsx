import React, { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter something..."
      />

      <p>Input text: {text}</p>
    </div>
  );
}

export default ControlledInput;
