import { useState } from "react";
function Caculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleComputer = () => {
    const a = parseFloat(first);
    const b = parseFloat(second);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) {
          return setResult("cannot chia cho 0");
        } else {
          setResult(a / b);
        }
        break;
    }
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "inline-block", width: "80px" }}>First:</label>
        <input
          type="number"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "inline-block", width: "80px" }}>
          Second:
        </label>
        <input
          type="number"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "inline-block", width: "80px" }}>
          Operator:
        </label>
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleComputer}>Compute</button>
      </div>

      <div>
        <label style={{ display: "inline-block", width: "80px" }}>
          Result:
        </label>
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
}
export default Caculator;
