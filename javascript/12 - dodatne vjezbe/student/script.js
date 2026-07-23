// Kreiraj objekt student sa sljedećim svojstvima: 
// ime, prezime, godina i metodom predstaviSe() koja vraća 
// string: "Ja sam IME PREZIME i imam GODINA godina.".

// Postavi vrijednosti za jednog konkretog studenta.

// Pozovi metodu predstaviSe() i ispiši rezultat u konzolu.

const student = {
	ime: 'Nikola',
	prezime: 'Markotic',
	godina: 33,
	predstaviSe() {
		const datum = new Date();
		const godina = datum.getFullYear();

		return `Ja sam ${this.ime} ${this.prezime} i imam ${this.godina} godina. Studiram u akademskoj ${godina} godini`
	}
}

console.log(student.predstaviSe());