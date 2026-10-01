const Osoba = {
    ime: "Petar",
    prezime: "Pan",
};
export function Name() {
    return (
        <p>
            {Osoba.ime} {Osoba.prezime}
        </p>
    );
}
