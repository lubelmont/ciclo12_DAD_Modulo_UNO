/* TODO: Crea un programa que recorra un arreglo de números y determine
cuántos valores son:
- Positivos
- Negativos
- Ceros

Además, debe mostrar en consola:
1. La cantidad de positivos
2. La cantidad de negativos
3. La cantidad de ceros

Arreglos:
numerosUno = [5, -3, 0, 12, -7, 0, 9];
numerosDos = [0, 0, 0, 4, 8];
numerosTres = [-1, -5, -10, 3, 6];

TIP: Usa un bucle para recorrer el arreglo y condicionales para clasificar los números.

Ejemplo de salida esperada:
Positivos: 3
Negativos: 2
Ceros: 2
*/



function contarNumeros(arregloNumeros) {
    console.log('iniciando el conteo de números en el arreglo:', arregloNumeros);

    let cero = 0;
    let pos = 0;
    let neg = 0;

    for (i = 0; i < arregloNumeros.length; i++) {
        // console.log(numerosDos[i]);
        if (arregloNumeros[i] == 0)
            cero = cero + 1;
        else if (arregloNumeros[i] > 0)
            pos = pos + 1;
        else if (arregloNumeros[i] < 0)
            neg = neg + 1;
    }

    console.log('Ceros: ', cero);
    console.log('Positivos: ', pos);
    console.log('Negativos: ', neg);
    console.log('Total de numeros en el arreglo: ', arregloNumeros.length);

}


let numerosUno = [5, -3, 0, 12, -7, 8, 0, 9];
let numerosDos = [0, 0, 0, 4, 8];
let numerosTres = [-1, -5, -10, 3, 6];
let numerosCuatro = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 0];


contarNumeros(numerosUno);
contarNumeros(numerosDos);
contarNumeros(numerosTres);
contarNumeros(numerosCuatro);


console.log('--- Fin del programa ---');
