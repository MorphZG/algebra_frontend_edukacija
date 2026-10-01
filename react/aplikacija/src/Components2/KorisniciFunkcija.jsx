import React from "react";

export default function KorisniciFunkcija({ ime, god }) {
    return (
        <>
            <h1>KorisniciFunkcija</h1>
            <p>
                Pozdrav moje ime je {ime} i imam {god} godina
            </p>
        </>
    );
}
