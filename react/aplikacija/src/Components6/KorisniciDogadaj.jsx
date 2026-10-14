export function KorisniciDogadaj({ ime, dob, onPromjenaIme }) {
    return (
        <div>
            <h1>Ja sam {ime}</h1>
            <p>Imam {dob} godina.</p>
            <input type="text" onChange={onPromjenaIme} value={ime} disabled={!onPromjenaIme} />
        </div>
    );
}
