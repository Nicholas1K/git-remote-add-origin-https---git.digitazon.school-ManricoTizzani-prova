/*Exercise 4.3.11
Definire una funzione che prenda come unico argomento un array e 
restituisca in output un elemento casuale al suo interno.*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
function casual() {
    for (let i = 0; i < parseInt(arr.length); i++) {
        let r = Math.floor(Math.random() * arr[i]);
        arr2.push(r);
    }
}
casual()
console.log(arr2[4]);