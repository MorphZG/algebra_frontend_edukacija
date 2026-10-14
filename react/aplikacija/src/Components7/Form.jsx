import { useState } from "react";

export default function Form() {
    const { name, setName } = useState("Moja prva react forma");
    const [nameList, setNameList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameList([...nameList, name]);
        setName("");
        console.log(e);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Uneseni naziv: {name}</h2>

            <input type="text" onChange={handleChange} value={name} />
            <input type="submit" value="Potvrda" />

            <hr />
            {nameList.map((item, index) => {
                return <p key={index}>Element: {item} </p>;
            })}
        </form>
    );
}
