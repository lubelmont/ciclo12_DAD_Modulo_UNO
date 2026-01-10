// Ejercicio 1 Switch Case
console.log("=== EJERCICIO 1: SWITCH CASE ===");
const diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log("El día de la semana es:", nombreDia);
console.log("=== FIN DEL EJERCICIO 1 ===");



// Ejercicio 1 Switch Case
console.log("=== EJERCICIO 2: SWITCH CASE ===");
nombreDia;

switch (diaSemana) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        nombreDia = "Dia laborable";
        break;
    case 6:
    case 7:
        nombreDia = "Fin de semana";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log("El día de la semana es:", nombreDia);
console.log("=== FIN DEL EJERCICIO 1 ===");