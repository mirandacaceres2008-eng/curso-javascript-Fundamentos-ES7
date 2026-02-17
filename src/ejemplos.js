
// ejercicio #1

const nombre = "carlos";
let sueldo = 800;
let gastos = 300;

let dinero = sueldo - gastos;

if (dinero < 0) {
    console.log(nombre + " ahorro dinero");
} else {
    console.log("gasto mas de lo que gana");
}

// carlos gana 800 y gasta 300, le quedaron 500 

// ejercicio #2
const estudiante = "Luisa";
let nota1 = 4;
let nota2 = 3;

let promedio = (nota1 + nota2) / 2;

if (promedio >= 3) {
    console.log(estudiante + " aprobo");
} else {
    console.log("Reprobo");
}
//promedio de notas 

// ejercicio #3
const cliente = "pedro";
let plata = 100;
let compra = 70;

let queda = plata - compra;

if (queda > 0) {
    console.log(cliente + " aun tiene plata " );
} else {
    console.log ("se quedo sin dinero");
}
// compra en tienda 

//ejercicio #4
let temperatura = 30;

if (temperatura > 25 ) {
    console.log("Hace calor");
} else {
    console.log("Hace frio");
}
//condicion simple 

//ejercicio #5
const name = "sofia";
let edad = 19;
 
if (edad >= 18) {
    console.log(name + " es adulta");
} else {
    console.log("Es menor");
}
//mayor o menos 

//ejercicio #6
let ahorro = 200;
let gasto = 50;

let total = ahorro - gasto;

if (total > 100) {
    console.log("Buen ahorro");
} else {
    comsole.log("Debes ahorrar mas");
}
// control dinero

// ejercicio #7
let venta = 10;

if (ventas >= 5) {
    console.log ("Buen dia de ventas");
} else {
    console.log (" Pocas ventas");
}
// negocio 

// ejercicio #8
 let gasolina = 40;

if (gasolina > 20) {
    console.log("Puedes viajar");
} else {
    console.log("Debes tanque");
} 
// carro

// ejercicio #9
let salario = 900;
let compro = 950;

let balance = salario - compro;

if (balance > 0) {
    console.log("Saldo positivo");
} else { 
    console.log("Saldo negativo");
}
// gasto mas  

// ejercicio #10
const dispositivo =  "celular";
let cargaInicial = 100;
let usoAplicaciones = 60;

let cargaRestante = caragaInicial - usoAplicaciones;

if (cargaRestante > 20 ) {
    console.log(dispositivo + "tiene suficiente barteria");
} else {
    console.log("Debes cargar el dispositivo");
}
// carga de bateria