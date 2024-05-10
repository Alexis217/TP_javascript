// Escriba un programa que pida al usuario un número y luego muestre si es
// par o impar.

let num = prompt("Introduce un número");
let par = ""; // variable para guardar si es par o impar

if (num % 2 == 0) {
    par = "par";
} else {
    par = "impar";
}

alert("El número introducido es " + par);