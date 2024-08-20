import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Blog" element={<Blog />} /> */}
          {/* <Route path="/Aboutus" element={<Aboutus />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
