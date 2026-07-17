console.log("------script03.js----------")

// 1. kreiraj objek koji predstavlja neki specificni auto sa bar 8 svojstava, od kojih
// 2. pozovite funkcije svog objekta sa argumentima i ispisite rezultat
// 3. sa petljom pristupi svim brojivim svojstvima auto objekta i ispisi vrijednost u konzoli zajedno sa njihovim imenima (kljucevima)
// 4. ispisi u konzoli razumljivu recenicu koja ukljucuje bar 2 svojstva auto objekta
// 5. pretvori svoj objekt u JSON string.

var auto = {
    brend: {
        marka: "tesla",
        model: "3",
    },
    boja: "crvena",
    pogon: {
        vrsta: "stroja",
        tip: "straznji",
    },
    trenutnaBrzina: 0,
    maxBrzina: 200,

    lakiraj(novaBoja) {
        var staraBoja = this.boja;
        this.boja = novaBoja;
        return `${staraBoja} je promjenjena u ${this.boja}`;
    },

    ubrzaj(ubrzanje) {
        var ukupnaBrzina = this.trenutnaBrzina + ubrzanje;
        if (ukupnaBrzina < this.maxBrzina) {
            this.trenutnaBrzina = ukupnaBrzina;
            return `auto se trenutno krece ${this.trenutnaBrzina} km/h`;
        } else {
            this.trenutnaBrzina = this.maxBrzina;
            return `auto je trenutno postigao svoju maksimalnu brzinu od ${this.trenutnaBrzina} km/h`;
        }
    },
};

console.log(auto);
console.log(auto.lakiraj("siva"))
console.log(auto.ubrzaj(25));
console.log(auto.ubrzaj(25));
console.log(auto.ubrzaj(155));
