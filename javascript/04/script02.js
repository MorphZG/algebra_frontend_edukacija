/*
 */

var names = ["John", "Jane", "Bob", , "Mike"];

// Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
console.warn("--- 1. zadatak ---");
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Dodajte svoje ime na kraj niza.
console.warn("--- 2. zadatak ---");
names.push("Zoran");
console.log(names);

// Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
console.warn("--- 3. zadatak ---");
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] == "Jane") {
        break;
    }
}

// Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
console.warn("--- 4. zadatak ---");
for (i = 0; i < names.length; i++) {
    if (names[i] == undefined) {
        var removedItem = names.splice(i, 1);
    }
}
console.log(names);
console.log(removedItem);
