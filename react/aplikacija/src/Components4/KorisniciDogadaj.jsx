export default function KorisniciDogadaj({ ime, dob, onPromjenaImena }) {
    return (
        <div>
            <h1>Ja sam {ime}</h1>
            <p>Imam {dob} godina</p>
            <input type="text" onChange={onPromjenaImena} value={ime} disabled={!onPromjenaImena} />
        </div>
    );
}
