// Pretpostavi da u HTML‑u imaš sljedeće elemente:

// HTML
// <p id="poruka">Pozdrav!</p>
// <button id="buttonPromijeni">Promijeni tekst</button>
// <input id="unosImena" type="text" placeholder="Unesi ime">
// <button id="buttonPozdravi">Pozdravi</button>
// Napiši JavaScript koji:

// Na klik buttonPromijeni promijeni tekst 
// <p> elementa na "Tekst je promijenjen!".

// Na klik buttonPozdravi uzme vrijednost iz unosImena i u <p> ispiše "Pozdrav, IME!".

const poruka = document.getElementById('poruka');
const buttonPromijeni = document.getElementById('buttonPromijeni');
const unosImena = document.getElementById('unosImena');
const buttonPozdravi = document.getElementById('buttonPozdravi');

buttonPromijeni.addEventListener('click', () => {
	poruka.textContent = "Tekst je promijenjen!";
});

buttonPozdravi.addEventListener('click', () => {
	const ime = unosImena.value.trim();

	if(ime === '') {
		poruka.textContent = "Unei prvo svoje ime!";
	} else {
		poruka.textContent = `Pozdrav, ${ime}`;
	}
});