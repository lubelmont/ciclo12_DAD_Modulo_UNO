

//Ejercicio 1 Condicionales
console.log("=== EJERCICIO 1: CONDICIONALES ===");
//Puede votar ? 
const edadVotante = 17;

if (edadVotante >= 18) {
    console.log("Puede votar");
} 

else 
{
    console.log("No puede votar");
}

console.log("=== FIN DEL EJERCICIO 1 ===");


//Ejercicio 2 Condicionales
console.log("\n=== EJERCICIO 2: CONDICIONALES ===");
let calificacion = 85;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 80) {
    console.log("Aprobado");
} else if (calificacion <= 70){
    
    console.log("Reprobado");
} else {
    console.log("Calificación inválida");
}

console.log("=== FIN DEL EJERCICIO 2 ===");




//Ejercicio 1 Condicionales
console.log("=== EJERCICIO 1: CONDICIONALES multiples ===");
//Puede puedo hacer servicio militar ? 
const edadCadete = 19;
const esHombre = false;

// Operacion AND (&&) Ambos deben ser verdaderos
// operacion OR (||) Solo uno debe ser verdadero
// operacion NOT (!)

if (edadCadete >= 18 || esHombre) {
    console.log("Puede hacer servicio militar");
} 
else 
{
    console.log("No puede hacer servicio militar");
}

console.log("=== FIN DEL EJERCICIO 1 ===");