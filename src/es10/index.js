//sae agrego FLAT QUE MUESTRA LOS ARRAY DENTRO DE OTROS FLAT(PROFUNDIDAD)
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2))

let arreglo = [1,2,3,4,5,6];
//FLATMAP--> RECORRE EL ARREGLO Y EJECUTA UNA FUNCIÒN
console.log(arreglo.flatMap(value => [value,value*2]));


//TRIMSTART --> ELIMINA LOS ESPACIOS AL COMIENZO DEL STRING
//TRIMSEND --> '' AL FINAL
let hello = '        hello world'
console.log(hello)
console.log(hello.trimStart());

let hello2 = 'hello world         '
console.log(hello2)
console.log(hello2.trimEnd());

//SE PEUDO COLOCAR DEFRENTE EL ERROR
try {

}catch {
    error
}

// Object.fromEntries --> CONVIERTE DE ARREGLO A OBJETO
let entries = [["name",'oscar'],["age",32]];
console.log(Object.fromEntries(entries))

//Se añadiò SYMBOL PARA ACCEDER A LA INFORMACIÒN
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol)
console.log(symbol.description)

