import { useEffect, useState } from "react";

export default function Brojac() {
    const { broj, setBroj } = useState(0);
    const { test, setTest } = useState(0);

    useEffect(() => {
        console.log("Broj u ovom trenutku je: ", broj);
        console.warn("Test: ", test);
        setTest(test + 1);
    });
    return (
        <button onClick={() => setBroj(broj + 1)}>
            Kliknuto: {broj}, test: {test}
        </button>
    );
}
