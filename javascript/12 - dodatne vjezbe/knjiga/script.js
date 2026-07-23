// Definiraj klasu Knjiga sa svojstvima: naslov, autor, 
// godinaIzdanja.

// U konstruktoru postavi ta tri svojstva.

// Dodaj metodu opis() koja vraća string: 
// "Naslov: ..., autor: ..., godina: ...".

// Kreiraj barem dvije instance i za svaku ispiši opis() u konzolu.

class Knjiga {
    constructor(naslov, autor, godinaIzdanja) {
        this.naslov = naslov;
        this.autor = autor;
        this.godinaIzdanja = godinaIzdanja;
    }

    opis() {
        return `Naslov ${this.naslov}, autor ${this.autor}, godina ${this.godinaIzdanja}`
    }
}

const needfullThings = new Knjiga("Needfull things", "Stephen King", 1991)
const trainspotting = new Knjiga("Trainspotting", "Irvine Welsh", 1993)

console.log(needfullThings.opis())
console.log(trainspotting.opis())