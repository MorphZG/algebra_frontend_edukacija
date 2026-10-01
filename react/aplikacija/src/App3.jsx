import "./App.css";
import React from "react";
import logo from "./logo.svg";
import { Component, useState } from "react";
import { Dog, DogFunction } from "./Components3";

export default function App() {
    const [dogs, setDogs] = useState([
        { name: "Rex", age: 5, breed: "German shepard" },
        { name: "Lessi", age: 3, breed: "Rough Collie" },
        { name: "Aaron", age: 2, breed: "Cavallier" },
        { name: "Hachiko", age: 5, breed: "Akita" },
        { name: "Fido", age: 3, breed: "Hungarian Viszla" },
        { name: "Kira", age: 6, breed: "Dalmatian dog" },
        { name: "Snoopy", age: 6, breed: "Beagle" },
    ]);
    const [play, setPlay] = useState("This doggo like to play with ball");

    const handleButtonPress = () => {
        const newDogs = dogs.map((dog) => {
            return { ...dog, age: dog.age + 1 };
        });
        setDogs(newDogs);
    };

    const handleNameChange = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        const newDogs = [...dogs];
        newDogs[0].name = event.target.value;
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Ponavljanje</h1>
                <button onClick={handleButtonPress}>Promjena</button>

                <Dog dogName={dogs[0].name} dogAge={dogs[0].age} onNameChange={handleNameChange} />
            </header>
        </div>
    );
}
