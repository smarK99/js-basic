
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

// //DOM
// //Ejercicio 1(agregar onclick="cambiarColorParrafos()")

// function cambiarColorParrafos() {
  
//   var parrafos = document.querySelectorAll("p");

//   parrafos.forEach(function(parrafo) {
//     parrafo.style.color = 'blue';
//   });

// }

// //Otra forma
// const boton = document.getElementById("btn");
// const parrafos = document.querySelectorAll("p");

// boton.addEventListener("click", function() {
//     parrafos.forEach(p => {
//       p.style.color = "blue"; 
//     });
// });

// //Ejercicio 2

// const botoncito = document.getElementById("btn2")
// const entrada = document.getElementById("txt")

// botoncito.addEventListener("click", function(){
//     alert(entrada.value)
// });

//Eventos en DOM
//Ejercicio 1
  var lista = document.getElementById('lista');
  var elementosLi = lista.getElementsByTagName('li');

  // Itera sobre cada elemento <li> y agrega un evento click
  for (var i = 0; i < elementosLi.length; i++) {
    elementosLi[i].addEventListener('click', function() {
    // Muestra el texto del elemento <li> en la consola
    console.log(this.textContent);
    });
  }

// //Ejercicio 2
// const campo = document.getElementById("campo")
// const hab = document.getElementById("on")
// const deshab = document.getElementById("off")

// hab.addEventListener('click', function() {
//   campo.disabled = false;
// });

// deshab.addEventListener('click', function() {
//   campo.disabled = true;
// });

//LocalStorage
//Ejercicio 1 
// Función para mostrar el correo guardado en el DOM
function mostrarCorreoGuardado() {
  var correoGuardado = localStorage.getItem('correo');
  var correoGuardadoDiv = document.getElementById('correoGuardado');
  var eliminarBtn = document.getElementById('eliminarBtn');

  if (correoGuardado) {
      correoGuardadoDiv.textContent = 'Correo guardado: ' + correoGuardado;
      eliminarBtn.style.display = 'block';
  } else {
      correoGuardadoDiv.textContent = '';
      eliminarBtn.style.display = 'none';
  }
}

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);

// Manejar el envío del formulario
document.getElementById('correoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var correoInput = document.getElementById('correo');
  var correo = correoInput.value;

  // Guardar el correo en localStorage
  localStorage.setItem('correo', correo);

  // Mostrar el correo guardado en el DOM
  mostrarCorreoGuardado();

  // Limpiar el campo de entrada
  correoInput.value = '';
});

// Manejar el botón de eliminar
document.getElementById('eliminarBtn').addEventListener('click', function() {
  // Eliminar el correo de localStorage
  localStorage.removeItem('correo');

  // Mostrar el correo guardado en el DOM
  mostrarCorreoGuardado();
});












