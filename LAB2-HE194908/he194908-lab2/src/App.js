import React, { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import ClassList from "./components/ClassList";
import { initialAttendances } from "./data";
import useLocalStorage from "./hooks/useLocalStorage";

export const ThemeContext = createContext();

const classesReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_RECORD":
      return state.filter((c) => c.id !== action.payload);

    case "TOGGLE_STATUS":
      return state.map((c) =>
        c.id === action.payload
          ? {
              ...c,
              status: c.status === "PRESENT" ? "ABSENT" : "PRESENT",
            }
          : c,
      );

    default:
      return state;
  }
};

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [savedClasses, setSavedClasses] = useLocalStorage(
    "classes",
    initialAttendances,
  );

  const [classes, dispatch] = useReducer(classesReducer, savedClasses);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setSavedClasses(classes);
  }, [classes, setSavedClasses]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme === "light" ? "#ffffff" : "#212529",
          color: theme === "light" ? "#000000" : "#ffffff",
        }}
      >
        <Header />
        <div style={{ marginTop: "30px" }}>
          <ClassList classes={classes} dispatch={dispatch} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
