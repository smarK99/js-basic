//Ejercicio 2
function suma(a,b){
  let c = a + b
  console.log("La suma de a y b es: " +  c);
}
suma(2,3);

//Ejercicio 3
let nombre = prompt("Ingrese su nombre: ")
console.log("HOLA " + nombre)

//Operadores Logicos y condicionales
//Ejercicio 1
function mayor(a,b){
  if (a > b) {
    console.log("El mayor es : " + a);
  }else if(b > a){
    console.log("El mayor es : " + b);
  }else{
    console.log("Son iguales");
  }
}

mayor(21,21)

// Ejercicio 2
let nro = prompt("Ingrese un numero: ")
if(nro % 2 == 0){
  alert("El numero es PAR")
}else{
  alert("El numero es IMPAR")
}

// Operadores de asignacion y bucles
// Ejercicio 1
let numerin = 10;

while (numerin > 0) {
  console.log(numerin)
  numerin--
}

//Ejercicio 2
let mascien;
do {
  
  mascien = prompt("Ingrese un numero mayor a 100: ");

} while (mascien <= 100);

console.log("Ingresaste un numero mayor a 100!!!! " + mascien)










