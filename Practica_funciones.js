// Obejetivo: Calcular descuentos en compras

/*

Función para calcular el precio final después del descuento

Parámetros:
- precioOriginal: número que representa el precio inicial del producto
- descuento: número que representa el porcentaje de descuento a aplicar (entre 0 y 100)

Retorna:
- precioFinal: número que representa el precio después de aplicar el descuento

Reglas:
- no se debe de usar console.log dentro de la función

*/

console.log("=== EJERCICIO: Cálculo de Descuentos ===");

function fncGranTotal(precioOriginal, porcentajeDescuentoAplicar) {
    
    montoDescuento = precioOriginal * (porcentajeDescuentoAplicar / 100);
    subtotal = precioOriginal - montoDescuento;

    total = subtotal * 1.10; // Aplicando IVA del 10%

    return total;
}



let precioOriginal = process.argv[2];
let descuento = process.argv[3];
let precioFinal = 0;


console.log(precioOriginal);
console.log(descuento);
precioFinal = fncGranTotal(precioOriginal, descuento);

console.log("El precio final con descuento e IVA es:", precioFinal);

console.log("=== FIN DEL EJERCICIO ===");