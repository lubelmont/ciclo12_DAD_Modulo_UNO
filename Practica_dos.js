console.log("\n=== RETO FINAL ===");
/* TODO: Crea un programa que calcule el promedio de las calicaciones dada un arreglo de
calificaciones y muestre el resultado en consola donde
A = 90 - 100
B = 80 - 89
C = 70 - 79
D = 60 - 69
F = 0 - 59

Arreglos:
calificacionesUno = [85, 90, 78, 92, 88];
calificacionesDos = [85, 90, 78];
calificacionesTres = [65, 70, 72, 68, 60];

*/

let calificacionesTres = [85, 90, 78];

console.log("Calificaciones:", calificacionesTres);


let resultado = 0;
let promedio;
let calificacion;

for (let i = 0; i < calificacionesTres.length; i++) {
    
    resultado = resultado + calificacionesTres[i]; 
    
}

console.log("Suma de calificaciones:", resultado);

promedio = Math.round(resultado / calificacionesTres.length);

if (promedio >= 90) {
    calificacion = 'A';
}
else if (promedio >= 80 && promedio < 90) {
    calificacion = 'B';
}
else if (promedio >= 70 && promedio < 80) {
    calificacion = 'C';
}
else if (promedio >= 60 && promedio < 70) {
    calificacion = 'D';
}
else if (promedio >= 0 && promedio < 60) {
    calificacion = 'F';
}
else { 
    calificacion = 'Calificación inválida';
}


// TODO: Muestra un mensaje: "Mi promedio es: [resultado]"
console.log(`Mi calificación es: ${calificacion}, con un promedio de: ${promedio}`);



