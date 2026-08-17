import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h5>Current number: {count}</h5>
    </div>
  );
}

export default Counter;
