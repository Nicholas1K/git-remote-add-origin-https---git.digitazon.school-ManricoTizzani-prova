/*Exercise 4.3.15
Definire una funzione che riceve come parametro una stringa. Il valore di 
ritorno deve essere una stringa con uno spazio dopo ogni carattere della stringa input.*/

let str = "sono una stringa";

function space() {
    let split = str.split("");
    for (let i = 0; i < split.length; i++) {
        return split.join(" ")

    }
}

console.log(space(str));

