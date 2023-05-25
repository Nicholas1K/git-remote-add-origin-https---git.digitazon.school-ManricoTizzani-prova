/*Exercise 4.3.5
Scrivere la funzione arrayToLinkedList, che preso un array, 
restituisce un oggetto che rappresenti il primo elemento di una lista 
linkata con gli stessi elementi. Ad esempio, dall’array [1, 2, 3, 4], l’oggetto risultante sarà:

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
}*/

let array = [1, 2, 3, 4];

function arrayToList() {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--)
        list = { valore: array[i], resto: list };
    return list;
}
let r = arrayToList(array);
console.log(r);