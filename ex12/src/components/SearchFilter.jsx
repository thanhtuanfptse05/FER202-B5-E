import React, { useState } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");

  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Search Filter</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
