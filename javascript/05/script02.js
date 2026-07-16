console.log("------script02.js----------")

function promjenaVlasnistva(vlasnik, godina) {
    return;
}

var nekretnina = {
    vlasnistvo: {
        trenutniVlasnik: "Joza Jozic",
        povijestVlasnistva: [
            { ime: "prvi vlasnik", godinaOd: 1986, godinaDo: 2000 },
            { ime: "drugi vlasnik", godinaOd: 2000, godinaDo: 2005 },
            { ime: "treci vlasnik", godinaOd: 2005, godinaDo: null },
        ],
        promjenaVlasnistva(vlasnik, godina) {
            //logika za promjenu trenutniVlasnik
            //postavi godinu do za zadnjeg vlasnika u povijesti ako je bila null
            if (this.povijestVlasnistva.length > 0) {
                let zadnji =
                    this.povijestVlasnistva[this.povijestVlasnistva.length - 1];
                if (zadnji.godinaDo === null) {
                    zadnji.godinaDo = godina;
                }
            }

            this.trenutniVlasnik = vlasnik;

            this.povijestVlasnistva.push({
                ime: vlasnik,
                godinaOd: godina,
                godinaDo: null,
            });

            console.log(`novi vlasnik: ${vlasnik} (${godina}.)`);

            //prilikom izvrsavanja metode u konzoli isprintati novog vlasnika i godinu
        },
        povijesniPrikaz() {
            //ispisati sve vlasnike i trajanje njigovog vlasnistva nekretnine
            console.log("--- povijesni prikaz vlasnistva ---");
            this.povijestVlasnistva.forEach((v) => {
                let trajanje = v.godinaDo
                    ? `${v.godinaDo - v.godinaOd} godina`
                    : "trenutno";
                let doGodine = v.godinaDo ? v.godinaDo : "danas";

                console.log(
                    `vlasnik: ${v.ime} | trajanje: ${v.godinaOd} - ${doGodine} (${trajanje})`,
                );
            });
        },
    },
};
// prikaz pocetnog stanja povijesti
console.log("--- POCETNO STANJE ---");
nekretnina.vlasnistvo.povijesniPrikaz();

console.log("\n--- PROMJENA VLASNISTVA ---");
// poziv metode za promjenu vlasnika (Joza Jozic predaje nekretninu Marici Maric 2021. godine)
nekretnina.vlasnistvo.promjenaVlasnistva("Zoran Topic", 2021);

console.log("\n--- NOVO STANJE ---");
// ponovni prikaz povijesti da se vide promjene
nekretnina.vlasnistvo.povijesniPrikaz();

const nekretnina2 = {
    trenutniVlasnik: "Joza Jozic",
    povijestVlasnistva: [
        { ime: "prvi vlasnik", godinaOd: 1986, godinaDo: 2000 },
        { ime: "drugi vlasnik", godinaOd: 2000, godinaDo: 2005 },
        { ime: "treci vlasnik", godinaOd: 2005, godinaDo: null },
    ],

    promjenaVlasnistva(noviVlasnik, godinaPromjene) {
        //pronadi zadnji unos u povijesti i zatvori mu godinu ako je null
        const zadnjiZapis =
            this.povijestVlasnistva[this.povijestVlasnistva.length - 1];
        if (zadnjiZapis && zadnjiZapis.godinaDo === null) {
            zadnjiZapis.godinaDo = godinaPromjene;
        }

        this.trenutniVlasnik = noviVlasnik;

        //dodaj novi zapis u povijest
        this.povijestVlasnistva.push({
            ime: noviVlasnik,
            godinaOd: godinaPromjene,
            godinaDo: null,
        });

        console.log(`novi vlasnik: ${noviVlasnik} (${godinaPromjene}.)`);
    },

    povijesniPrikaz() {
        console.log("--- prikaz vlasnistva ---");

        this.povijestVlasnistva.forEach(({ ime, godinaOd, godinaDo }) => {
            const trajanje = godinaDo
                ? `${godinaDo - godinaOd} god.`
                : "trenutno";
            const doGodine = godinaDo ? godinaDo : "danas";

            console.log(
                `vlasnik: ${ime} | ${godinaOd} - ${doGodine} (${trajanje})`,
            );
        });
    },
};

// Prikaz povijesti
nekretnina2.povijesniPrikaz();

// Promjena vlasnika
nekretnina2.promjenaVlasnistva("Zoran Topic", 2021);

// Ponovni prikaz
nekretnina2.povijesniPrikaz();
