import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Korisnici, KorisniciSaDjecom, KorisniciDogadaj } from "./Components4";

export default function App() {
    const [korisnici, setKorisnici] = useState([
        { name: "Nikola", age: 33 },
        { name: "Mirela", age: 45 },
        { name: "Mia", age: 25 },
    ]);

    const handlePromjenaImena = (event) => {
        console.warn(event.target.value);
        const noviKorisnici = [...korisnici];
        noviKorisnici[0].name = event.target.value;

        setKorisnici(noviKorisnici);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <div className="zadatak">
                    <Korisnici ime={korisnici[1].name} dob={korisnici[1].age} />
                </div>

                <div className="zadatak">
                    <KorisniciSaDjecom ime={korisnici[2].name} dob={korisnici[2].age}>
                        <h1>children elementi</h1>
                        <h2>pogledaj komponentu</h2>
                    </KorisniciSaDjecom>
                </div>

                <div className="zadatak">
                    <KorisniciDogadaj
                        ime={korisnici[0].name}
                        dob={korisnici[0].age}
                        onPromjenaImena={handlePromjenaImena}
                    />
                </div>

                <br />
                <br />
                <br />
            </header>
        </div>
    );
}
