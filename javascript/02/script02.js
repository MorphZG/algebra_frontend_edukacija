// Strings

var text = " Lorem ipsum dolor sit amet";

// spremite duljinu stringa u varijablu
var textLen = text.length;

// izdvojite rijec sit u zasebnu varijablu
var sitIndex = text.indexOf("sit");
var sitIndexAlt = text.search("sit");
console.log(sitIndex);
console.log(sitIndexAlt);
var sit = text.slice(19, 19+3);

// zamjenite rijec amet sa rijeci elit
var novaVarijabla = text.replace("amet", "elit");

// konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var konkat = novaVarijabla + ", consectetur adipiscing elit";
console.log(konkat);

// konvertirajte sve rijeci u originalnom stringu u velika slova
text = text.toUpperCase();

// maknite pocetnu prazninu u stringu
text = text.trimStart();

// nadite slovo na poziciji 12
text.charAt(12);
