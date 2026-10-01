import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Random from "./Components/Random";
import { Name } from "./Components/Name";
import { Komponenta1, Komponenta2, Komponenta3, Komponenta4, Komponenta5 } from "./Components";
import {
    Funkcijska,
    Klasna,
    KorisniciFunkcija,
    KorisniciClass,
    KorisniciDjeca,
    ButtonState,
    VjezbaProps,
    VjezbaState,
} from "./Components2";

function ConditionalRendering(props) {
    // jsx does not support if blocks
    // instead use variables and ternary operator or logical &&
    const isParni = props.broj % 2 === 0;

    return (
        <>
            {isParni && props.broj !== 0 && <h1>Broj {props.broj} je Parni!</h1>}
            {!isParni && <h1>Broj {props.broj} je neparni!</h1>}
        </>
    );
}

function WelcomeFunkcija(props) {
    const { name } = props;
    return (
        <>
            <h3>Ja sam funkcija {name}</h3>
            <h2>Ja sam funkcija {props.ime}</h2>
        </>
    );
}

class WelcomeKlasa extends React.Component {
    render() {
        const { ime, prezime } = this.props;
        return (
            <>
                <h3>Ja sam klasa {ime}</h3>
                <h4>Ovo je moj prop: {prezime}</h4>
                <h2>Ja sam klasa {this.props.name}</h2>
                <h4>Ovo je moj prop: {this.props.surname}</h4>
            </>
        );
    }
}

function App() {
    const korisnici = [
        { imena: "Ivan", godine: 10 },
        { imena: "Marko", godine: 20 },
        { imena: "Pero", godine: 30 },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <div className="zadatak">
                    <Random />
                    <Name />
                </div>

                <div className="zadatak">
                    <Komponenta1 />
                    <Komponenta2 />
                    <Komponenta3 />
                    <Komponenta4 />
                    <Komponenta5 />
                </div>

                <div className="zadatak">
                    <ConditionalRendering broj={101} />
                </div>

                <div className="zadatak">
                    <WelcomeFunkcija name={'kolibric'} ime={'djetlic'}/>
                    <WelcomeKlasa ime={"nekakva"} prezime={"nesto"} name={"name"} surname={"surname"} />
                </div>

                <div className="zadatak">
                    <Funkcijska name={"jura"} god={7} />
                    <Klasna name={"pero"} god={23} />
                </div>

                <div className="zadatak">
                    <KorisniciFunkcija ime={korisnici[0].imena} god={korisnici[0].godine} />
                    <KorisniciClass ime={korisnici[1].imena} god={korisnici[1].godine} />
                    <KorisniciDjeca ime={korisnici[2].imena} god={korisnici[2].godine} />
                </div>

                <div className="zadatak">
                    <ButtonState />
                </div>

                <div className="zadatak">
                    <VjezbaProps message={"visitor"}/>
                    <VjezbaState />
                </div>
            </header>
        </div>
    );
}

export default App;
