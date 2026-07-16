const URL = "https://catfact.ninja/breeds";

const breedContainer = document.querySelector(".breeds");

function createBreedElement(elementName, elementClass = "", text = "") {
    const element = document.createElement(elementName);
    element.className = elementClass;

    if (elementName === "img") {
        element.src = text === "Mutation" ? "./alien.jpeg" : "./cat.jpeg";
    } else {
        element.innerHTML = text;
    }

    return element;
}

async function getBreeds() {
    const response = await fetch(URL);
    const jsObject = await response.json();

    const breedArray = jsObject.data;

    breedArray.forEach(element => {
        console.log(element)

        const card = createBreedElement('div', 'card')
        const breed = createBreedElement('h2', '', element.breed)
        const country = createBreedElement('p', '', element.country)
        const image = createBreedElement('img', '', element.origin)

        card.append(breed)
        card.append(country)
        card.append(image)

        breedContainer.appendChild(card)
    });
}

getBreeds()