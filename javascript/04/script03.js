var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

// Napišite JavaScript funkciju koja prihvaća zadani niz kao
// parametar i pronalazi najdužu riječ unutar niza.

// Vratite tu riječ iz funkcije i spremite u varijablu.

// Ispišite varijablu u konzoli.

// prvo rjesenje
function vrati_najdulji_element(arr) {
    var current = 0;
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > current) {
            current = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}

console.log(vrati_najdulji_element(words));

// drugo rjesenje
function findWord(arr) {
    var first;
    var i = arr.length - 1;

    while (i > -1) {
        if (!first) {
            first = arr[i];
        }

        if (first.length < arr[i].length) {
            first = arr[i];
        }
        i--;
    }

    return first;
}

console.log(findWord(words));

// trece rjesenje
function findLongest(array) {
    var longest = "";

    for (let element of array) {
        if (element.length > longest.length) {
            longest = element;
        }
    }

    return longest;
}

console.log(findLongest(words));

// cetvrto rjesenje
function findLongest2(array) {
    return array.reduce((longest, currentValue) =>
        currentValue.length > longest.length ? currentValue : longest,
    );
}

console.log(findLongest2(words));

// peto rjesenje
function vratiNajdulji(rijeci) {
    return rijeci.sort(function (a, b) {
        console.warn(b, b.length);
        console.error(a, a.length);
        return b.length - a.length;
    });
}

var najduljiElement = vratiNajdulji(words);

console.log(najduljiElement);
