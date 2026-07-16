// 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

// 2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

// 3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.


// 1.

"use strict"

var a = 78;
var b = 34;
a = null
//delete window.b;
var myObject = {property1:1, property2:2, property1:1};

// 2.
// Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const novaVarijabla = [...users, user]

console.log(novaVarijabla)


// 3.
for (let i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

//console.log(i);
