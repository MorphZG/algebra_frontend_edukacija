import { useEffect, useState } from "react";
import "./App.css";
import CatFact from "./Components13/Facts";
import CatBreed from "./Components13/Breeds";

// API calls

/*
-----------------------------------------
<h1>Chuck Norris</h1>
<button>Joke</button>

<p>There is no joke that Chuck Norris didn't hear</p>
-----------------------------------------

On button press:
  - fetch(api.chucknorris.io)
  - re-render the paragraph with api response
*/

export default function App() {
    return (
        <div className="App-header">
        <CatBreed/>
        </div>
    );
}
