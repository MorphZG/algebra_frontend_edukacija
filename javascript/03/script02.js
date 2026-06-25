// napisi petlju koja ce ispisivati brojeve od 3 do 200, osim onih djeljivih sa 9

var counter = 3;
while (counter < 200) {
    if (counter % 9 !== 0) {
        console.log(counter);
        counter++;
    } else {
        counter++;
    }
}

// alternativno rjesenje
var counter = 2;
while (counter < 200) {
    counter++;
    if (counter % 9 == 0) {
        continue;
    } else {
        console.log(counter);
    }
}

counter = 0;
console.log(counter)
for (var a = 0; a < 4; a++) {
    for (var b = 0; b < 4; b++) {
        for (var c = 0; c < 4; c++) {
            counter++;
        }
    }
}
console.log(counter)
