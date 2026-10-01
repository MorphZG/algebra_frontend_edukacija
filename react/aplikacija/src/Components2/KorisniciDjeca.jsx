import React from "react";

export default function KorisniciDjeca({ ime, god, children }) {
    return (
        <>
            <h1>KorisniciDjeca</h1>
            <p>
                Pozdrav moje ime je {ime} i imam {god} godina
            </p>
            <p>{children}</p>
        </>
    );
}
