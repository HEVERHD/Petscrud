import React from "react";
import "./App.css";
import { Pets } from "./components/Pets";
import { Routes, Route } from "react-router-dom";

//Styles
// eslint-disable-next-line
import "./css/bootstrap.min.css";
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/petslist" element={<Pets />} />
        <Route exact path="/create" element={<Form />} />
        {/* <Route exact path="/detalle" element={<Detalle />} />
        <Route exact path="/resultado" element={<Resultado />} /> */}
      </Routes>
    </div>
  );
}

export default App;
