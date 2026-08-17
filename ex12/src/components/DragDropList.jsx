import React, { useState } from "react";

function DragDropList() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange", "Mango"]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDrop = (dropIndex) => {
    if (draggingItem === null) return;

    const newItems = [...items];

    const draggedItem = newItems.splice(draggingItem, 1)[0];

    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>

      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;
