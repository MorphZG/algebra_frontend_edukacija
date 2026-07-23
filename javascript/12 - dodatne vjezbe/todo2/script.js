// Zadatak 5 – Sve zajedno
// Napravi mali “mini‑app” za vođenje zadataka.

// Pretpostavi ovaj HTML:

// HTML
// <input id="noviZadatak" type="text" placeholder="Novi zadatak">
// <button id="dodajZadatak">Dodaj</button>
// <ul id="listaZadataka"></ul>
// Zadatak:

// Napravi klasu Zadatak sa svojstvom opis i metodom render() koja kreira <li> element s tekstom zadatka.

// Na klik dodajZadatak:

// Uzmi tekst iz noviZadatak.

// Napravi novi objekt Zadatak.

// Dodaj rezultat render() u listaZadataka.

// Dodaj funkciju ocistiUnos() koja nakon dodavanja zadatka briše tekst iz input polja.

// Ovaj zadatak povezuje klase, objekte, funkcije i rad s DOM‑om u jednu funkcionalnu cjelinu.


class Zadatak {
	constructor(opis) {
		this.opis = opis;
	}

	render() {
		const li = document.createElement('li');
		li.textContent = this.opis;
		return li;
	}
}

const noviZadatakInput = document.getElementById('noviZadatak');
const dodajZadatakButton = document.getElementById('dodajZadatak');
const listaZadataka = document.getElementById('listaZadataka');

function ocistiUnos() {
	noviZadatakInput.value = '';
	noviZadatakInput.focus();
}

dodajZadatakButton.addEventListener('click', () => {
	const tekst = noviZadatakInput.value.trim();

	if(tekst === '') {
		alert('Vase polje je prazno, kako to da zelite prazni zadatak?')
		return;
	};

	const zadatak = new Zadatak(tekst);
	const liElement = zadatak.render();
	listaZadataka.appendChild(liElement);
	ocistiUnos();
});