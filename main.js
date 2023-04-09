// 1. Crear una función que reciba un número por
// parámetro e indique en consola si el número es par
// o impar
console.log(`-------1. Crear una función que reciba un número por
parámetro e indique en consola si el número es par
o impar.-------`);

let numeroIngresado = prompt("Ingresa un numero");
let numeroUsuario = +numeroIngresado;

if (isNaN(numeroUsuario)) {
  console.log("Introduzca un numero, por favor!");
} else {
  numeroUsuario % 2
    ? console.log(`El numero ingresado (${numeroIngresado}) es impar`)
    : console.log(`"El numero ingresado (${numeroIngresado}) es par"`);
}
console.log(`-------Fin de ejercicio (1)-------`);

// 2- Crear una función que reciba dos números por parámetro e indique
// en consola que número es mayor, y si ninguno lo es, indicar
// por consola que son iguales.
console.log(`------- 2- Crear una función que reciba dos números por parámetro e indique
en consola que número es mayor, y si ninguno lo es, indicar
por consola que son iguales. -------`);

let numero1 = prompt("Ingrese numero 1");
let numero2 = prompt("Ingrese numero 2");

let numeroa = +numero1;
let numerob = +numero2;

switch (true) {
  case numeroa > numerob:
    console.log(
      `El primer número ingresado "${numeroa}" es mayor al segundo numero ingresado "${numerob}"`
    );
    break;
  case numeroa === numerob:
    console.log(
      `El primer número ingresado "${numeroa}" es igual al segundo numero ingresado "${numerob}"`
    );
    break;
  case numeroa < numerob:
    console.log(
      `El segundo número ingresado "${numerob}" es mayor al primer numero ingresado "${numeroa}"`
    );
    break;
  default:
    console.log("Ingresa solo numeros, por favor!");
    break;
}
console.log(`-------Fin de ejercicio (2)-------`);

// 3- Crear una función que reciba un número por parámetro e indique en consola si
// ese número es múltiplo de 5.
console.log(`------- 3- Crear una función que reciba un número por parámetro e indique en consola si
ese número es múltiplo de 5. -------`);

let multiplo = prompt(`Ingrese un numero, por favor: `);

if (multiplo % 5 == 0) {
  console.log(`Si, El número ingresado "${multiplo}" es multiplo de 5`);
} else {
  console.log(`No, El número ingresado "${multiplo}" no es multiplo de 5`);
}
console.log(`-------Fin de ejercicio (3)-------`);

// 4- Crear una función que reciba un número por parámetro e imprima por consola
// todos los números desde el 0 hasta llegar a ese número.
console.log(`------- 4- Crear una función que reciba un número por parámetro e imprima por consola
todos los números desde el 0 hasta llegar a ese número. -------`);

let numerolimite = prompt("Ingrese un numero, por favor: ");

for (let i = 0; i < numerolimite; i++) {
  console.log(` Numero ingresado (${numerolimite}) - Cuenta progresiva "${i}"`);
}
console.log(`-------Fin de ejercicio (4)-------`);

// 5 - Crear una función que reciba una palabra y un número por parámetro e
// imprima por consola esa palabra la cantidad correspondiente al número indicado.
console.log(`------- 5 - Crear una función que reciba una palabra y un número por parámetro e
imprima por consola esa palabra la cantidad correspondiente al número indicado. -------`);

let palabra = prompt("Ingrese una palabra");
let cantidad = prompt(
  "Cuantas veces quieres repetir la palabra anterior (*ingresa un numero*)"
);

for (let i = 0; i < cantidad; i++) {
  console.log(
    ` Palabra ingresada (${palabra}), cantidad (${cantidad}) -"${i}"`
  );
}
console.log(`-------Fin de ejercicio (5)-------`);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos
// los valores de ese array.
console.log(`------- 6 - Crear una función que reciba un array por parámetro e imprima por consola todos
los valores de ese array. -------`);

let diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabados",
  "Domingos",
];
for (let i = 0; i < diasDeLaSemana.length; i++) {
  console.log(diasDeLaSemana[i]);
}
console.log(`-------Fin de ejercicio (6)-------`);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos
//  los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
//  Ayuda: Recuerden que el primer índice de un array es "0".
console.log(`------- 7 - Crear una función que reciba un array con 10 números e imprima por consola todos
 los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
 Ayuda: Recuerden que el primer índice de un array es "0". -------`);

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numeros.length; i++) {
  if (i === 4) {
    continue;
  }
  console.log(`Numero en la lista ${i}`);
}
console.log(`-------Fin de ejercicio (7)-------`);

// 8 - Crea una función que reciba un array de números y un número por parámetro e
// imprima por consola cada número del array multiplicado por el número pasado por parámetro.
console.log(`------- 8 - Crea una función que reciba un array de números y un número por parámetro e
imprima por consola cada número del array multiplicado por el número pasado por parámetro. -------`);

let num = prompt("Ingrese un numero para multiplicar este array");

let listaDeNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaDeNumeros.length; i++) {
  console.log(
    ` Numero Lista-(${i}) * Numero ingresado-(${num})  = Resultado ${
      listaDeNumeros[i] * num
    }`
  );
}
console.log(`-------Fin de ejercicio (8)-------`);
