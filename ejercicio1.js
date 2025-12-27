console.log("¡Hola, mundo!")//Funcionalidad básica de salida en consola


console.log("===Strings (cadenas de texto)===")
let nombre = "Juan" //Variable para almacenar el nombre
let apellido = "Rodriguez" //Variable para almacenar el apellido

let nombrecompleto = nombre + " " + apellido; //Concatenación de cadenas
console.log("Mi nombre completo es: " + nombrecompleto); 



nombre = "María"; //Reasignación de la variable nombre
console.log("Ahora mi nombre es " + nombre);



//Dado estas salidas, crea las variables que se necesitan, (TODOS SON NUMBERS)
let edad = 24
let altura = 1.67
let temperatura = 18
let resultado = edad + 5

console.log("Tengo " + edad + " años.")
console.log("Mi altura es:", altura, "metros")
console.log("Temperatura:", temperatura + "°C")
console.log("En 5 años tendré:", resultado, "años")


console.log("===Boolean (true/false)===")
let esVerdadero = true; //Variable booleana
let esFalso = false; //Variable booleana
let cadenaDevalor = esVerdadero && esFalso; //Operación AND entre booleanos

console.log("Esto es verdadero:", esVerdadero);
console.log("Esto es falso:", esFalso);
console.log("El resultado de la operación AND es:", cadenaDevalor);


let esMayorDeEdad = true
let tieneINE = false
let puedevotar = esMayorDeEdad && tieneINE //Operación AND los dsos deben ser true 
// OR puedevotar = esMayorDeEdad || tieneINE
// NOR puedevotar = !(esMayorDeEdad || tieneINE)

console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Tiene INE?", tieneINE);
console.log("¿Puede votar?", puedevotar);




