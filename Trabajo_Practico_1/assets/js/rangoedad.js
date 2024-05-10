// Escribe un programa que pida al usuario su edad y luego le diga en qué
// rango de edad se encuentra: niño (0-12), adolescente (13-19), adulto
// (20-59), o adulto mayor (60 o más).

let edad = prompt("Introduce tu edad");
let rango = ""; // variable para guardar el rango de edad

if (edad >= 0 && edad <= 12) {
    rango = "niño";
} else if (edad >= 13 && edad <= 19) {
    rango = "adolescente";
} else if (edad >= 20 && edad <= 59) {
    rango = "adulto";
} else if (edad >= 60) {
    rango = "adulto mayor";
} else {
    rango = "edad inválida";
}

alert("Tu rango de edad es " + rango);