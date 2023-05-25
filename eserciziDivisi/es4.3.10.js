/*Exercise 4.3.10
Definire una funzione che prenda come unico argomento un array e, 
dopo aver verificato che tutti gli elementi dell’array siano numeri, 
fornisca in output l’array con tutti i numeri raddoppiati. Esempio:

Input: [1, 2, 3, 4]
Output: [2, 4, 6, 8]*/



let arr = [1, 2, 3, 4];
function controllo() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}
controllo() // mettere la funzione in questa maniera fa si che il programma legge e fa passare l'arr per la funzione.  
console.log(arr);

