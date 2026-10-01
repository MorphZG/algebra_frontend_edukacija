import React from "react";

export default function Komponenta5() {
    const animals = ["slon", "konj", "magarac", "pas"];
    const x = 50;
    const y = 3;
    const korisnik = {
        ime: "Pero",
        prezime: "Djetlic",
    };

    const formatKorisnik = (user) => {
        return `${user.ime} ${user.prezime}`;
    };

    return (
        <>
            <p>Ovo su neke zivotinje: {animals.join(", ")}</p>
            <p>Pozdrav: {formatKorisnik(korisnik)}</p>
            <p>Malo matematike: {x + y}</p>
        </>
    );
}
