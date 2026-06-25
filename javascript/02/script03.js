// operatori

var x = "Lorem ispum",
    y = 2345,
    z = "2345",
    q = false;

// 1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);
// dvostruki !! je zamjena za Boolean() koji testira dali je neka vrijednost true ili false
console.log(!!"test");
console.log(!!"test" == true)
console.log(!!"test" == "true")

// 2. Koju će vrijednost ispisati console.log? Zašto?
console.log(x || y || z);

// 3. Koju će vrijednost ispisati console.log? Zašto?
var num = 6;
num--;
console.log(num);

// 4. Koju će vrijednost ispisati console.log? Zašto?
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice.toFixed(2);

console.log("Total:", totalPrice);

// Koja je konacna vrijednost varijable varOne i zasto?
var varOne = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        varOne++;
    }
}
console.log(varOne);
