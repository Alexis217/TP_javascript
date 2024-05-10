// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso
// y calcule la nota promedio. Tener en cuenta que, solo se pueden ingresar números
// del 1 al 10 . El resultado que dará será el siguiente:
// - 'Nota Insuficiente' si la el promedio está entre 1 y 3,
// - 'Nota Regular' si está entre 4 y 5,
// - 'Nota Buena' si está entre 6 y 7,
// - 'Nota Muy Buena' si está entre 8 y 9 y
// - 'Nota Sobresaliente' si es igual a 10. con switch

let nota1 = parseInt(prompt("Ingresa la nota del primer trimestre"));
let nota2 = parseInt(prompt("Ingresa la nota del segundo trimestre"));
let nota3 = parseInt(prompt("Ingresa la nota del tercer trimestre"));
let promedio = (nota1 + nota2 + nota3) / 3;
let resultado = ""; // variable para guardar el resultado

switch (true) {
    case promedio >= 1 && promedio <= 3:
        resultado = "Nota Insuficiente";
        break;
    case promedio >= 4 && promedio <= 5:
        resultado = "Nota Regular";
        break;
    case promedio >= 6 && promedio <= 7:
        resultado = "Nota Buena";
        break;
    case promedio >= 8 && promedio <= 9:
        resultado = "Nota Muy Buena";
        break;
    case promedio == 10:
        resultado = "Nota Sobresaliente";
        break;
    default:
        resultado = "Nota inválida";
        break;
}

alert("La nota promedio es: " + resultado);