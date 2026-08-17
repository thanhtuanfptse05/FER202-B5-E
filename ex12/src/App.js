import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragDropList from "./components/DragDropList";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
      <div>
        <ControlledInput />
      </div>
      <div>
        <ToggleVisibility />
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <ColorSwitcher />
      </div>
      <div>
        <SearchFilter />
      </div>
      <div>
        <DragDropList />
      </div>
    </div>
  );
}

export default App;
