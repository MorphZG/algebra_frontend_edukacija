import "./App.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/actions/counter";

export default function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <header className="App-header">
                <h1>Counter: </h1>

                <button onClick={() => {dispatch(increment)}}>+</button>
                <button onClick={() => {dispatch(decrement)}}>+</button>
                <button onClick={() => {dispatch(reset())}}>Reset</button>
            </header>
        </div>
    );
}
