/*
Exercise 4.3.1
Scrivere un programma range che dati in input due numeri start e end, 
restituisce un array contenente tutti i numeri da start a end(incluso).

let start = 2;
let end = 10;
function range(inizio, fine, step = 1) {
    let arr = [];
    for (let i = inizio; i <= fine; i = i + step) {
        arr.push(i);
    }
    return arr;
}
let risultato = range(start, end, 3);
console.log(risultato);

function sum(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i]; // con += sommi gli elementi che ci sono all'interno di un arrai
    }
    return somma;
}

let sommaTot = sum(risultato);
console.log(sommaTot);*/

/*Exercise 4.3.2 esercizio 4.3.1 e 4.3.2 sono uniti
Scrivere poi una funzione sum che, dato in input un array di numeri, 
restituisce la somma di questi. Chiamare la funzione come segue: console.log(sum(range(1, 10)));

Bonus: aggiungere alla funzione range un parametro extra opzionale 
chiamato step, che rappresenta un eventuale salto tra un numero e il 
successivo nell’array costruito. Ad esempio, se viene chiamato range(1,10,3), 
verrà restituito l’array [1, 4, 7, 10]
*/


/*Exercise 4.3.5
Scrivere la funzione arrayToLinkedList, che preso un array, 
restituisce un oggetto che rappresenti il primo elemento di una lista linkata con gli stessi elementi. 
Ad esempio, dall’array [1, 2, 3, 4], l’oggetto risultante sarà:

{
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
            next: null
            }
        }
    }
}


let array = [1, 2, 3, 4];

function arrayToList() {
    let list = null;
    for (var i = array.length - 1; i >= 0; i--) 
        list = { valore: array[i], resto: list }; 
    return list;
}
let r = arrayToList(array);
console.log(r);
*/

/*Exercise 4.3.10
Definire una funzione che prenda come unico argomento un array e, 
dopo aver verificato che tutti gli elementi dell’array siano numeri, 
fornisca in output l’array con tutti i numeri raddoppiati. Esempio:

Input: [1, 2, 3, 4]
Output: [2, 4, 6, 8]

let arr = [1, 2, 3, 4];
function controllo() {
    for (let i = 0; i < arr.length; i++) {
        let t = typeof arr[i];
        if (t != "number") {
            return;
        } else {
            arr[i] *= 2;
        }
    }
}
controllo()
console.log(arr);
*/

/*Exercise 4.3.11
Definire una funzione che prenda come unico argomento un array e 
restituisca in output un elemento casuale al suo interno.
*/
