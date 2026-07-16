const breeds = "https://catfact.ninja/breeds";

const breedsContainer = document.querySelector(".breeds");

function createBreedElement(elementName, elementClass = "", text = '') {
	const element = document.createElement(elementName);
	element.className = elementClass;

	if (elementName === 'img') {
		element.src = (text === "Mutation") ? './alien.jpeg' : './cat.jpeg';
	} else element.innerHTML = text;

	return element;
}

// function createCard() {
// 	const wrapper = document.createElement("div");
// 	wrapper.className = 'card';
// 	return wrapper;
// }

// function createBreed(text) {
// 	const breed = document.createElement("h2");
// 	breed.innerHTML = text;
// 	return breed;
// }

// function createCountry(countryText) {
// 	const country = document.createElement("p");
// 	country.innerHTML = countryText;
// 	return country;
// }

// function createImage(originText) {
// 	const img = document.createElement("img");
// 	img.src = (originText === "Mutation") ? './alien.jpeg' : './cat.jpeg';
// 	return img;
// }

async function getBreeds() {
  const response = await fetch(breeds);
  const jsObject = await response.json();

  const breedArray = jsObject.data;

  breedArray.forEach(element => {
	
	const card = createBreedElement('div', 'card');
	// const card = createCard();
    // const card = document.createElement('div');
    // card.className = 'card';

	const breed = createBreedElement('h2', 'pero', element.breed);
	// const breed = createBreed(element.breed);

	const country = createBreedElement('p', 'ivica', element.country);
	// const country = createCountry(element.country);

    const coat = createBreedElement('p', 'marica', element.coat);

	const image = createBreedElement('img', '', element.origin);
	// const image = createImage(element.origin);
	
	card.append(breed);
	card.append(country);
    card.append(coat);
	card.append(image);

	breedsContainer.appendChild(card);
  });
}

getBreeds();