// Escriba un programa que pida al usuario un número del 1 al 7 y luego
// muestre el día de la semana correspondiente (1 para "Lunes", 2 para
// "Martes", etc.).

let num = prompt("Introduce un número del 1 al 7");
let dia = ""; // variable para guardar el dia de la semana

if (num == 1) {
    dia = "Lunes";
} else if (num == 2) {
    dia = "Martes";
} else if (num == 3) {
    dia = "Miercoles";
} else if (num == 4) {
    dia = "Jueves";
} else if (num == 5) {
    dia = "Viernes";
} else if (num == 6) {
    dia = "Sabado";
} else if (num == 7) {
    dia = "Domingo";
} else {
    dia = "dia inválido";
}

alert("El día de la semana es " + dia);