import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Badge from "./Components11/Badge";

// react stiliziranje: react-bootstrap
export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Badge/>

            </header>
        </div>
    );
}
