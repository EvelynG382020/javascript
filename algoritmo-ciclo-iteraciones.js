//EJEMPLOS ALGORITMO UTILIZANDO UN CICLO.

// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.
let ingresaNum
let ingresaText
for (let i = 1; i <= 3; i++) {
  ingresaNum = parseInt(prompt("Ingresar un número"));
  ingresaText = prompt("Ingresar un texto");
  console.log(" Mensaje Nº "+i+": " + ingresaNum+", "+ingresaText);
}

//INGRESARS PRODUCTOS Y MOSTRAR EL TOTAL DE PRODUCTOS QUE HA AGREGADO
let users = prompt("Ingrese su nombre");
let welcome = "Bienvenido "+users+" a Minimarket Super10, Ingrese 4 productos";
alert(welcome);
let product1 = prompt("Ingresa un producto o 'salir' para terminar");
let product2 = prompt("Ingresa un producto o 'salir' para terminar");
let product3 = prompt("Ingresa un producto o 'salir' para terminar");
let product4 = prompt("Ingresa un producto o 'salir' para terminar");
if (product1, product2, product3, product4 != "salir" || ""){
  let foods = product1+", "+product2+", "+product3+", "+product4;
  console.log(users+" sus productos son: "+foods);
}else{
  console.log(users);
}
  

// -Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado.
let num = parseInt(prompt("Ingrese un número"));
let result
for(let i=0; i<=4; i++){
  result = num + i
  console.log("Iteración Nº "+i+": + " +num+ " = "+ result);
}