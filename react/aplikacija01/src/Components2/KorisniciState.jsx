/*
1. Potrebno je dodati novu komponentu koja u sebi sadrži gumb
	2. Pritiskom na gumb potrebno je promijeniti godine korisnika
	3. Prikazati promjenu na ekranu
	4. Komponenta App smije biti jedina komponenta sa stanjima (statefull), komponenta App mora biti definirana klasom

Početno stanje aplikacije je završno stanje vježbe 5.10 i nalazi se u mapi "Pocetno stanje".
Potrebno je promijeniti komponentu App - komponenta App mora biti definirana funkcijom.
Za čuvanje stanja aplikacije potrebno je koristiti useState hook.
*/
import React from "react";

export default class KorisniciState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            korisnici: [
                { imena: "Petar", godine: 10 },
                { imena: "Jura", godine: 20 },
                { imena: "Stjepan", godine: 30 },
            ],
        };
    }
// funkcija normalno radi ali se unutar app.jsx komponenta ne renderira sa promjenjenom vrjednosti
// provjeri konsolu
    handleClick = () => {
        const { korisnici } = this.state;
        korisnici.map((korisnik) => {
            console.log(korisnik);
            korisnik.godine++;
        });
    };

    render() {
        return (
            <>
                <h1>Stanje umjesto propsa</h1>
                <p>
                    Korisnik: {this.state.korisnici[0].imena} {this.state.korisnici[0].godine}
                </p>
                <button onClick={this.handleClick}>Povecaj godine</button>
            </>
        );
    }
}
