// Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName
// sa razmakom (" ") između imena i prezimena.
var firstName = "Zoran",
    lastName = "Topic";

var fullName = firstName.concat(" ", lastName);
console.log(fullName);

// Razlomite ovu ternarnu operaciju na 3 različite operacije!
// var x = z === 2? y : 5;
var x, z, y;
x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
} else {
    x = 5;
}
console.log(x);

// Napišite petlju koja će prolaziti kroz brojeve od 1 do 7581.
// Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").
for (i = 1; i <= 7581; i++) {
    if (i % 2 > 0) {
        console.log("Broj", i, "nije paran");
    } else {
        console.log(`Broj ${i} je paran`);
    }
}
