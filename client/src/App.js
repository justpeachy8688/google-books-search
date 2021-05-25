import React, { Component } from "react";
import Header from "./components/Header/Header";
import Books from "./components/Books/Books";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Books/>
    </div>
  )
}


export default App;
