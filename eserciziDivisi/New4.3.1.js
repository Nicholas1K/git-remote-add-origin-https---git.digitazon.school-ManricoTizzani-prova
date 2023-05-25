/*Exercise 4.3.1
Scrivere un programma range che dati in input due numeri start e end, 
restituisce un array contenente tutti i numeri da start a end (incluso).*/

let start = 2;
let end = 10;

function range(inizio, fine) {
    let numeriArr = [];
    for (let i = inizio; i <= fine; i++) {
        numeriArr.push(i);
    }
    return numeriArr;
}
let risultato = range(start, end);

console.log(risultato);

/*Exercise 4.3.2
Scrivere poi una funzione sum che, dato in input un array di numeri, 
restituisce la somma di questi. Chiamare la funzione come segue: console.log(sum(range(1, 10)));

Bonus: aggiungere alla funzione range un parametro extra opzionale chiamato step, 
che rappresenta un eventuale salto tra un numero e il successivo nell’array costruito. 
Ad esempio, se viene chiamato range(1,10,3), verrà restituito l’array [1, 4, 7, 10]*/

function sum(risultato) {
    let somma = 0;
    for (let i = 0; i < risultato.length; i++) {
        somma += risultato[i];
    }
    return somma
}

let sommaTot = sum(risultato);

console.log(sommaTot);