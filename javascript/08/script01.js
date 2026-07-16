// 1. Pratite kod u scripts.js.

// 2. Nadite prototip objekta "character" (naputak: koristite metode 
// globalnog Object objekta). 
// Nadite prototip tog prototipa. Ispisite ih.

// 3. Dodajte prototipu objekta "character" funkciju koja vraća jedan 
// (slucajno odabran) citat iz niz "quotes".


var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

console.log(character);
console.log(Object.getPrototypeOf(character));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(character)));

Object.getPrototypeOf(character).slucajno = function() {
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

// console.warn(Math.random());

console.warn(character.slucajno());