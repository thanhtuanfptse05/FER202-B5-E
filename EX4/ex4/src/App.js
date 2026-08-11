import React, { useState } from "react";
import reactLogo from "./logo.svg";
import "./App.css";

import {
  firstTeenager,
  allTeenagers,
  everyoneIsTeenager,
  anyTeenager,
  street,
} from "./models/personModel";

import {
  companies,
  companiesAfter1987,
  retailCompanies,
  companiesSortedByEnd,
  companyObject,
} from "./models/companyModel";

import {
  sumNumbers,
  productNumbers,
  agesDescending,
  agesSum,
  sumAllNumbers,
  collectArguments,
  counter,
  parseQueryParams,
} from "./models/mathAndUtilsModel";

import {
  rectangle,
  triangle,
} from "./models/shapeModel";

import { randomNumberPromise } from "./models/promiseModel";

/* =========================================================
   JSX COMPONENTS
========================================================= */

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-link active" href="#home">
        Home
      </a>
      <a className="nav-link" href="#search">
        Search
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
      <a className="nav-link login" href="#login">
        Login
      </a>
    </nav>
  );
}

function HeroExamples() {
  return (
    <section id="home" className="section">
      <h2>1–2. JSX Website Designs</h2>

      <div className="example-grid">
        <div className="card">
          <h3>Hello React</h3>
          <p className="hello-react">
            Hello <strong>React</strong>
          </p>
        </div>

        <div className="card react-card">
          <img src={reactLogo} alt="React logo" />
          <p className="react-caption">This is the React logo!</p>
          <p className="react-subcaption">
            (I don't know why it is here either)
          </p>
          <p className="react-description">
            The library for web and native user interfaces
          </p>
        </div>
      </div>
    </section>
  );
}

function NavbarExercise() {
  return (
    <section id="search" className="section">
      <h2>3. Navbar with JSX</h2>
      <Navbar />
    </section>
  );
}

function TextAndCourses() {
  const courses = ["React", "ReactNative", "NodeJs"];

  return (
    <section id="contact" className="section">
      <h2>4–5. JSX Text and Course List</h2>

      <div className="card">
        <h1 className="jsx-title">This is JSX</h1>
      </div>

      <div className="card">
        <h2>Course names</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PeopleExercise() {
  return (
    <section className="section">
      <h2>1. People</h2>
      <p>First teenager: {firstTeenager ? `${firstTeenager.name} (${firstTeenager.age})` : "None"}</p>
      <p>All teenagers: {allTeenagers.map((p) => `${p.name} (${p.age})`).join(", ")}</p>
      <p>Every person is teenager: {String(everyoneIsTeenager)}</p>
      <p>Any person is teenager: {String(anyTeenager)}</p>
    </section>
  );
}

function ReduceExercise() {
  return (
    <section className="section">
      <h2>2. Reduce</h2>
      <p>Sum using reduce: {sumNumbers}</p>
      <p>Product using reduce: {productNumbers}</p>
    </section>
  );
}

function CompaniesExercise() {
  return (
    <section className="section">
      <h2>3. Companies / Ages / Person</h2>

      <h3>forEach Company Name</h3>
      {companies.map(c => <p key={c.name}>{c.name}</p>)}

      <h3>Started after 1987</h3>
      {companiesAfter1987.map(c => <p key={c.name}>{c.name}</p>)}

      <h3>Retail Companies (+1 start)</h3>
      <div>
        {retailCompanies.map(c => (
          <div key={c.name}>
            <p>{c.name}</p>
            <p>{c.category}</p>
            <p>{c.start}</p>
            <p>{c.end}</p>
          </div>
        ))}
      </div>

      <h3>Companies sorted by end date ascending</h3>
      {companiesSortedByEnd.map(c => <p key={c.name}>{c.name} - {c.end}</p>)}

      <h3>Ages descending</h3>
      <p>{agesDescending.join(", ")}</p>

      <h3>Sum of ages</h3>
      <p>{agesSum}</p>

      <h3>Object restructuring print</h3>
      <p>{companyObject.print()} (Category: {companyObject.category})</p>

      <h3>Sum unknown numbers (1, 2, 3, 4, 5)</h3>
      <p>{sumAllNumbers(1, 2, 3, 4, 5)}</p>

      <h3>Array flattening</h3>
      <p>{JSON.stringify(collectArguments(1, "React", [2, 3], true))}</p>

      <h3>Destructuring street</h3>
      <p>{street}</p>

      <h3>Counter</h3>
      <p>{counter()}, {counter()}, {counter()}</p>

      <h3>URL Query Params</h3>
      <p>{JSON.stringify(parseQueryParams("https://example.com/search?name=Costas&age=20&course=React"))}</p>
    </section>
  );
}



function ClassesExercise() {
  return (
    <section className="section">
      <h2>4. ES6 Classes — Shape, Rectangle, Triangle</h2>
      <p>Rectangle: {rectangle.toString()} — Area = {rectangle.getArea()}</p>
      <p>Triangle: {triangle.toString()} — Area = {triangle.getArea()}</p>
    </section>
  );
}

function PromiseExercise() {
  const [status, setStatus] = useState("");

  const runPromise = () => {
    randomNumberPromise()
      .then((number) => {
        setStatus(String(number));
      })
      .catch((error) => {
        setStatus("Error");
      });
  };

  return (
    <section className="section">
      <h2>5. Promise — Random Number Larger Than 5</h2>
      <button onClick={runPromise}>Run Promise</button>
      <p>{status}</p>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Exercise 4: JSX and ES6</h1>
        <p>React / JSX / ES6 complete implementation</p>
      </header>



      <main>
        <HeroExamples />
        <NavbarExercise />
        <TextAndCourses />
        <PeopleExercise />
        <ReduceExercise />
        <CompaniesExercise />
        <ClassesExercise />
        <PromiseExercise />
      </main>


    </div>
  );
}

export default App;
