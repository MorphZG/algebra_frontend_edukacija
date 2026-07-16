// 1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!"

function getX() {
    return Math.random() >= 0.5;
}

const obecanje = new Promise((resolve, reject) => {
    const rezultat = getX();

    if (rezultat) {
        resolve(rezultat);
    } else {
        reject("Oh no!");
    }
});

obecanje
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    });

// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.
