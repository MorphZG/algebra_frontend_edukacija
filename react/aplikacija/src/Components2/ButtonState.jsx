import React from "react";

export default class ButtonState extends React.Component {
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
        const updatedKorisnici = korisnici.map((korisnik) => {
            korisnik.godine++;
            return korisnik;
        });

        this.setState(updatedKorisnici);
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
