import { useState } from "react";
import AddList from "./components/AddList";
import Caculator from "./components/Caculator";
import SearchFilter from "./components/SearchFilter";
function App() {
  return (
    <div className="container">
      <div>
        <AddList />
      </div>
      <div>
        <Caculator />
      </div>
      <div>
        <SearchFilter />
      </div>
    </div>
  );
}

export default App;
