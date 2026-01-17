
//funcion 1 sin entradas ni salidas
function saludo() {
    console.log("Hola, bienvenido a la práctica desde funcion saludo()");
}
// fin de funcion

//funcion 2 con salida
function saludoEspanol() {
    return "Hola, bienvenido a la práctica dos de DAD!";
}
// fin de funcion

//function 3 con entradas y salidas
function saludoIdioma(idioma) {

    if (idioma === "es") {
        return "Hola, bienvenido a la práctica dos de DAD!";
    } else if (idioma === "en") {
        return "Hello, welcome to DAD practice two!";
    } else if (idioma === "fr") {
        return "Bonjour, bienvenue à la pratique deux de DAD!";
    } else {
        return "Idioma no soportado.";
    }

}
// fin de funcion

saludo(); //llamada a la funcion 1

let mensaje = saludoEspanol(); //llamada a la funcion 2
console.log(mensaje);


let mensajeIngles = saludoIdioma("po"); //llamada a la funcion 3
console.log(mensajeIngles);


