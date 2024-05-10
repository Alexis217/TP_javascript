// Una tienda aplica un descuento del 15% para las compras que incluyan 10
// artículos o más iguales cuyo precio total sea superior a 20000 pesos. Tu programa
// debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y
// el precio. Tener en cuenta que, solo se pueden ingresar números mayores a 1, y
// además, si la cantidad y el monto supera lo establecido, el descuento deberá
// aplicarse al precio total para luego mostrar en pantalla un mensaje que lo
// confirme. De lo contrario, indicar que no se superó la cantidad o el precio, según
// corresponda. con if else

let articulos = parseInt(prompt("Ingresa la cantidad de articulos"));
let precio = parseInt(prompt("Ingresa el precio del articulo"));
let descuento = 0; // variable para guardar el descuento
let precioTotal = 0; // variable para guardar el precio total

if (articulos >= 10) {
    descuento = 0.15;
}

if (articulos >= 10 && precio >= 20000) {
    precioTotal = (articulos * precio) * (descuento);
    alert("El precio total es: " + precioTotal);
} else {
    alert("No se supero la cantidad o el precio");
}