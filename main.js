
// //Ejercicio 2
// function suma(a,b){
//   let c = a + b
//   console.log("La suma de a y b es: " +  c);
// }
// suma(2,3);

// //Ejercicio 3
// let nombre = prompt("Ingrese su nombre: ")
// console.log("HOLA " + nombre)

// //Operadores Logicos y condicionales
// //Ejercicio 1
// function mayor(a,b){
//   if (a > b) {
//     console.log("El mayor es : " + a);
//   }else if(b > a){
//     console.log("El mayor es : " + b);
//   }else{
//     console.log("Son iguales");
//   }
// }

// mayor(21,21)

// // Ejercicio 2
// let nro = prompt("Ingrese un numero: ")
// if(nro % 2 == 0){
//   alert("El numero es PAR")
// }else{
//   alert("El numero es IMPAR")
// }

// // Operadores de asignacion y bucles
// // Ejercicio 1
// let numerin = 10;

// while (numerin > 0) {
//   console.log(numerin)
//   numerin--
// }

// //Ejercicio 2
// let mascien;
// do {
  
//   mascien = prompt("Ingrese un numero mayor a 100: ");

// } while (mascien <= 100);

// console.log("Ingresaste un numero mayor a 100!!!! " + mascien)

// //Funciones 
// //Ejercicio 1
// function esPar(a){
//   if (a % 2 == 0) {
//     return console.log("El numero "+ a + " es par: " + true)
//   }else{
//     return console.log("El numero "+ a + " es par: " + false)
//   }
// }

// esPar(12);

//Ejercicio 2
// function convertCelsiusFarenheit(gc){
//   let gf = gc*1.8 + 32
//   return console.log(gc + "°C son equivalentes a " + gf + " °F")
// }

// convertCelsiusFarenheit(35)

// //Objetos en js
// //Ejercicio 1
// let persona = {
//   nombre: "Ana",
//   edad: 30,
//   ciudad: "Barcelona"
// }
// console.log(persona)
// persona.ciudad = "Madrid"
// console.log(persona)

//Ejercicio 2
// let libro = {
//   titulo: "El quijote",
//   autor: "Cervantes",
//   anio: 1605
// }

// function esViejo(){
//   if(libro.anio < 2014){
//     console.log(libro.titulo + " es antiguo: " + true)
//   }else{
//     console.log(libro.titulo + " es antiguo: " + false)
//   }
// }
// esViejo()

// //Arrays
// //Ejercicio 1
// let numeros = [1,2,3,4,5,6,7,8,9,10]
// let numeros2 = []

// numeros.forEach(element => {
//   numeros2.push(element*2)
// });

// console.log(numeros)
// console.log(numeros2)

//Ejercicio 2
// let pares = []

// for (let index = 0; index < 20; index++) {
//   if (index % 2 == 0) {
//     pares.push(index)
//   }
// }

// console.log(pares)

//DOM
//Ejercicio 1

const parrafo = document.getElementById("p").innerHTML
const button = document.getElementById("change")

button.addEventListener("click", function(){
  parrafo.style.color = "blue";
})








