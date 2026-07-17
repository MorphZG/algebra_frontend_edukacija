/*
U ovoj vjezbi koristit cemo se lodash bibliotekom.
Prvi korak je da instalirate lodash paket na lokalnik disk.

Korisnik na nasoj stranici kreira password.
Zelimo osigurati da:
1. Svaki je znak u passwordu razlicti od drugih (jedinstven)
2. Svi su znakovi brojke
3. Password ima maksimalno 10 znakova

Vas zadatak:
1. Napisati funkciju koja provjerava dali su svi znakovi jedinstveni (hint: pogledajte lodash metode nad nizovima)
2. Napisati funkciju koja provjerava dali su svi znakovi brojke
3. Napisti funkciju koja skracuje password na 10 znakova ukoliko je broj znakova veci od 10.

*/

var dobro = "1234567890";
var lose = "1123456";

function jedinstveniZnakovi(password) {

}

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
