import logo from "./logo.svg";
import "./App.css";
import { Pozdrav } from "./Components5";

function Niz() {
    const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <ul>
            {niz.map((element, index) => {
                return <li key={index}>Element: {element}, {index}</li>;
            })}
        </ul>
    );
}

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="zadatak">
                    <Pozdrav />
                </div>

                <div className="zadatak">
                    <Niz />
                </div>
            </header>
        </div>
    );
}
