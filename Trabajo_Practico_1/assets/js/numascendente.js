// Escribe un programa que pida al usuario tres números y luego los muestre
// en orden ascendente.

let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");
let num3 = prompt("Introduce el tercer número");
let asc = ""; // variable para guardar el orden ascendente

if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        asc = num1 + " " + num2 + " " + num3;
    } else {
        asc = num1 + " " + num3 + " " + num2;
    }
} else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        asc = num2 + " " + num1 + " " + num3;
    } else {
        asc = num2 + " " + num3 + " " + num1;
    }
} else if (num3 < num1 && num3 < num2) {
    if (num1 < num2) {
        asc = num3 + " " + num1 + " " + num2;
    } else {
        asc = num3 + " " + num2 + " " + num1;
    }
} else {
    asc = "Los números introducidos son iguales";
}

alert(asc);