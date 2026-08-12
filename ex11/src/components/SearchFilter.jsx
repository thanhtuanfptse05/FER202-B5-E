import { useState } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");

  const items = ["React", "NodeJs", "MongoDB", "Express", "Angular", "VueJs"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Build Search Filter in React</h2>

      <label>
        Search:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
