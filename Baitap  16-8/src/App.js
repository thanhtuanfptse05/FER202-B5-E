import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';
import { initialClasses } from './data';
import './App.css';

function App() {
  const [classes, setClasses] = useState(initialClasses);

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Quản lý Lớp học</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/classes" />} />
          <Route path="/classes" element={<ClassList classes={classes} setClasses={setClasses} />} />
          <Route path="/detail/:id" element={<ClassDetail classes={classes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
