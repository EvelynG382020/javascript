// //CICLOS E ITERACIONES CLASE N3
// FOR
for(let i=1;i<4;i++){
  console.log("Coders "+i);
}

//TABLA DE MULTIPLICAR
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

//TURNOS
let ingresarNombre
for (let i = 1; i <= 5; i++) {
  // En cada repetición solicitamos un nombre.
  ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i == 5){
      break;
  }
  console.log(i);
}

//EJERCICIO MESSI
let nombreMessi;
let intentosRestantes;
for(let i=1;i<=3;i++){
  nombreMessi = prompt("Ingresa el nombre de Messi");
  if(nombreMessi == "lionel" || "Lionel"){
    alert("Excelente");
    break;
  }
  intentosRestantes = 3-i;
  alert("Te equivocaste, te quedan "+intentosRestantes+" intentos");
}

//SALTAR UNA ITERACIÓN 
for (let i = 1; i <= 10; i++) {
  //Si la variable i es 5, no se interpreta la repetición
  if(i == 5){
      continue;
  }
  alert(i);
}

//WHILE SOLICITA AL USUARIO UNA ENTRADA HASTA QUE INGRESA ESCAPE
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

//WHILE
console.log("Programa calculador de descuentos 10% en efectivo")
let precio = parseFloat(prompt("Ingresa el precio de tu producto y te diré precio en efectivo"));
let precioConDescuento;
while(precio != 0){    
  precioConDescuento = precio * 0.9;    
  alert("Si abonas en efectivo pagas $"+precioConDescuento);    
  precio=parseFloat(prompt("Ingresa el precio de tu producto (0 para Salir)"));
}
  console.log("Hasta pronto");

//DO WHILE
let num = 0;
do{
  //Repetimos con do...while mientras el usuario ingresa un n°
  num = prompt("Ingresar Número");
  console.log(num);
  //console.log(parseInt(num));
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(num));

//SWITCH
let product = prompt("Ingrese la verdura o fruta para conocer precio en kilo");

switch(product){
  case "manzana":
  case "pera":
    alert("El precio por kilo es $120");
    break;
  case "lechuga":
    alert("El precio por kilo es $150");
    break;
  case "tomate":
    alert("El precio por kilo es $200");
    break;
  case "mandarina":
    alert("El precio por kilo es $90");
    break;
  default:
    alert("Producto sin stock");
    break;
}


