import { useState } from "react";
function AddList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };
  const deleteItem = (index) => {
    const newItems = items?.filter((item, i) => i !== index);
    setItems(newItems);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add List</button>
      <h1 className="mt-4">List of Items</h1>
      <ul style={{ listStyle: "none" }}>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="ms-3" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddList;
