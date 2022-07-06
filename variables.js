
/* 
            Variables
*/

// Formas alternas
// let myVariable = 123
let myVariable;
myVariable = 123;
myVariable = 321
console.log("Variable let = " + myVariable);
const PI = 3;
console.log("constante conts = " + PI);

// PI = 4 esto no se puede

const myObjeto = { a: 3 };

// myObjeto = { b:5 } esto no se puede

myObjeto.a = 5;

let palabra = "Hola";
let palabra2 = "Mundo"

console.log(`${palabra} ${palabra2}`)

let myBoolTrue = true;
let myBoolFalse = false;

/* 
            Funciones
*/


function mostrarMensaje(){
    console.log("Hola mundo dentro de una función");
}

//Parametros y parametros default
function mostrarMensaje2(nombre = "Petrol"){
    const mensaje = `Hola ${nombre}`
    console.log(mensaje);
}

mostrarMensaje();
mostrarMensaje2();

function suma(numero1, numero2){
    let operacion = numero1 + numero2;
    return operacion;  
}


/* 
            Decisiones
*/

let myTrueBool = true;
let myFalseBool = false;

let num1 = 1;
let num2 = 2;

if (num1 >= num2){
    console.log("Solo if");
}

if (num1 == num2){
    console.log("If else =  if");
}else{
    console.log("If else = else");
}

// AND =  &&  -  ! = not  -  || = or 

//if ternario

let numeroMenor = (num1 < num2 ) ? num1: num2; 

/* 
            Matrices y ciclos
*/

//ciclos while, for, for of

const nombres = ["Josue", "Maria", "Rita"];

let indice = 0;

//Esto mismo se puede hacer con for y for of
while (indice < nombres.length) {
    const nombre = nombres[indice];
    console.log(nombre);
    indice++; 
}