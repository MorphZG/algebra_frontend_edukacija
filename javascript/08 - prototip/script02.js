// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri
// kreiranju objekta i označava ime psa. Defaultna vrijednost
// imena psa je "Rex".

// 2. Kreirajte objekt iz Dog funkcije.

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

function Dog(name) {
    this.ime = name || "Rex";
}

var cucak = new Dog();

console.log(cucak);

function Dog(name = "Rex") {
    this.ime = name;
    this.glasanje = "Vau!! Vau!!";
    this.getIme = function () {
        return this.ime;
    };
}

Dog.prototype.glasanje = "Vau!! Vau!!";
Dog.prototype.laje = function () {
    return this.glasanje;
};

var fido = new Dog("Fido");
var snoopy = new Dog("Snoopy");

console.log(fido.getIme);
console.log(snoopy.getIme);

console.warn("==========")

console.log(fido);
console.log(fido.laje());
console.log(snoopy);
console.log(snoopy.laje());

console.warn("==========")

console.log(Dog.prototype);
console.log(Dog)