// Napiši funkciju izracunajPopust(cijena, postotak) 
// koja prima početnu cijenu proizvoda i postotak popusta te 
// vraća novu cijenu nakon popusta.

// Pozovi funkciju za cijenu 100 i popust 15.

// Rezultat ispiši u konzolu.

function izracunajPopust(cijena, postotak) {
	const iznosPopusta = cijena * postotak / 100;
	const novaCijena = cijena - iznosPopusta;

	return novaCijena;
}

console.log(izracunajPopust(777, 27.5));