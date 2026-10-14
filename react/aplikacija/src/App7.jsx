import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
import Form from "./Components7/Form";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Forme u Reactu</h1>

                <Form name={"formaaa"}/>

              
            </header>
        </div>
    );
}
/*
export default class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Forme u Reactu</h1>
        <Form/>
      </div>
    )
  }
}
  */