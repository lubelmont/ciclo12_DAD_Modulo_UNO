# Resumen de Lección de Programación
**Fecha:** 10 de Enero, 2026  
**Módulo:** Uno - Fundamentos de JavaScript

---

## 📚 Archivos Trabajados Hoy

### 1. Practica_uno.js - Tipos de Datos en JavaScript

Archivo principal donde se practicaron los conceptos fundamentales de tipos de datos en JavaScript.

#### ✅ Ejercicio 1: Numbers (Números)
**Conceptos aprendidos:**
- Declaración de constantes con `const`
- Declaración de variables con `let`
- Operaciones aritméticas básicas (suma, multiplicación)

**Ejemplos implementados:**
```javascript
const precioLibro = 250;
const precioLapiz = 15;
let edadEstudiante = 40;
const numero1 = 8;
const numero2 = 3;
// Suma: 11
// Multiplicación: 24
```

#### ✅ Ejercicio 2: Strings (Cadenas de texto)
**Conceptos aprendidos:**
- Declaración de strings
- Concatenación con operador `+`
- Template literals con backticks `` ` `` y `${}`

**Ejemplos implementados:**
```javascript
const tuNombre = "Juan Carlos García";
const materiaFavorita = "Programación";
const nombre = "Ana";
const apellido = "Martínez";
// Concatenación: nombre + " " + apellido
// Template literal: `Hola, soy ${nombre} y tengo ${edad} años`
```

#### ✅ Ejercicio 3: Boolean (Booleanos)
**Conceptos aprendidos:**
- Valores true/false
- Comparaciones lógicas (>=, <=, ==, etc.)
- Evaluación de condiciones

**Ejemplos implementados:**
```javascript
let esFinDeSemana = false;
let tengoTarea = true;
let miEdad = 25;
let soyMayorDeEdad = miEdad >= 18; // true
```

#### ✅ Ejercicio 4: Arrays (Arreglos)
**Conceptos aprendidos:**
- Declaración de arrays con `[]`
- Acceso a elementos por índice `[0], [1]`
- Propiedad `.length` para obtener cantidad de elementos

**Ejemplos implementados:**
```javascript
const materiasEscuela = ["Matemáticas", "Historia", "Ciencias"];
const calificaciones = [85, 90, 78, 92, 88, 77];
// Acceso: materiasEscuela[0] → "Matemáticas"
// Longitud: calificaciones.length → 6
```

#### ✅ Ejercicio 5: Objetos (Objects)
**Conceptos aprendidos:**
- Declaración de objetos con propiedades
- Acceso a propiedades con notación punto `.`
- Objetos con diferentes tipos de datos

**Ejemplos implementados:**
```javascript
const estudiante = {
    nombre: "Carlos",
    edad: 22,
    materias: ["Matemáticas", "Historia", "Ciencias"],
    activo: true
};
// Acceso: estudiante.nombre → "Carlos"
// Acceso anidado: estudiante.materias[0] → "Matemáticas"
```

#### ✅ Reto Final: Cálculo de Promedio
**Conceptos aprendidos:**
- Operaciones matemáticas combinadas
- Uso de template literals para mostrar resultados

**Implementación:**
```javascript
const calificacion1 = 85;
const calificacion2 = 90;
const calificacion3 = 78;
const resultado = (calificacion1 + calificacion2 + calificacion3) / 3;
// Promedio: 84.33
```

---

### 2. EjercicioPractica.js - Clasificación de Números

Ejercicio pendiente que requiere implementar un programa para clasificar números.

#### 🔄 Pendiente: Clasificador de Números
**Objetivo:**
- Recorrer arrays de números
- Clasificar en: positivos, negativos y ceros
- Contar cada categoría

**Conceptos a aplicar:**
- Bucles (for, while)
- Condicionales (if/else)
- Contadores

**Arrays de prueba:**
```javascript
numerosUno = [5, -3, 0, 12, -7, 0, 9];
numerosDos = [0, 0, 0, 4, 8];
numerosTres = [-1, -5, -10, 3, 6];
```

---

## 📖 Conceptos Clave Aprendidos

### Tipos de Datos Primitivos
1. **Number**: Números enteros y decimales
2. **String**: Cadenas de texto
3. **Boolean**: Valores true/false

### Estructuras de Datos
4. **Array**: Colecciones ordenadas de elementos
5. **Object**: Colecciones de pares clave-valor

### Operadores
- **Aritméticos**: `+`, `-`, `*`, `/`
- **Comparación**: `>=`, `<=`, `==`, `===`
- **Concatenación**: `+` para strings

### Sintaxis Moderna
- **Template literals**: `` `${variable}` ``
- **const vs let**: Inmutabilidad vs mutabilidad

---

## 🎯 Próximos Pasos

1. ✅ Completar Practica_uno.js
2. ⏳ Resolver EjercicioPractica.js (clasificación de números)
3. 📝 Practicar bucles y condicionales
4. 🚀 Avanzar a ejercicios más complejos

---

## 💡 Tips Importantes

- Usar `const` por defecto, `let` solo cuando necesites reasignar
- Los arrays empiezan en índice 0
- Template literals (`` ` ``) son más legibles que concatenación con `+`
- Los objetos permiten agrupar datos relacionados
- Siempre usar `console.log()` para verificar resultados

---

**Archivos en el workspace:**
- ✅ Practica_uno.js (completado)
- ⏳ EjercicioPractica.js (pendiente)
- 📄 arrays.js
- 📄 bucles.js
- 📄 condicionales.js
- 📄 ejercicio1.js
- 📄 Practica_dos.js
- 📄 switchCase.js
- 📄 tipoDeVariables.js
