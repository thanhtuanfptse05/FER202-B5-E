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

  useEffect(() => {
    document.title = `Tổng số lớp học: ${classes.length}`;
  }, [classes]);

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
