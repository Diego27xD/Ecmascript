const string = "JavaScript es maravillos, con JavaScript puedo crear el futuro de la web";
//REPLACE --> REEMPLAZA AL PRIMERO JAVASCRIPT QUE ENCUENTRA POR PYTHON
const replacedString = string.replace("JavaScript","Python")
console.log(replacedString)
//REPLACEALL--> REMPLAZA TODAS LAS PALABRAS JAVASCRIPT POR PYTHON
const replacedString2 = string.replaceAll("JavaScript","Python");
console.log(replacedString2)


//PARA HACERLO PRIVADO DEBEMOS USAR #
class Message {
    #show(val){
        console.log(val)
    };

    /* get #add(val){
      ... 
    } */
}

const message = new Message();
message.show("Hola")


const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> resolve("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));
//ANY --> RETORNA EL PRIMERO QUE SE RESULEVA
/* Promise.any() es otra forma de manejar 
varias promesas, que retornará la primera p
romesa que sea resuelta y se rechazará si todas las promesas son rechazadas. */
Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
    
}
/* Nuevos operadores de asignación
En ES2021 se agregaron tres operadores de asignación:

Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable. */
/* let isTrue = true;
let isFalse = false;
console.log(isTrue &&=isFalse)

let isTrue = true;
let isFalse = false;
console.log(isTrue ||=isFalse)

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??=isFalse) */