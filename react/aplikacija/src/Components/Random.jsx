import random from "random-string-generator";

export default function Vjezba() {
    let random_string = random(12);
    console.log(`Ovo je random string: \n${random_string}`);

    return (<h1>Ovo je random string {random_string}</h1>);
}
