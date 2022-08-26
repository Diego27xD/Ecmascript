//PARÀMETROS POR DEFECTO
//Antes
function newFunction(name,age,country){
    //oscar es el valor por defecto
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country)
}

//EMCScript 6

function newFunction2(name='Oscar', age=32, country = 'MX'){
    console.log(name,age,country)
}

newFunction2();
newFunction2('Ricardo','23','CO')

//
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' '+world;
console.log(epicPhrase);
c
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//MULTILINEAS
let lorem = "Quiero escribir una frase epica \n"
+ "otra frase epica que necesitamos"
//EMCScript 6
let lorem2 = `Quiero escribir una frase epica
ahora es una frase epica`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion
let person = {
    'name':'oscar',
    'age':32,
    'country':'MX'
}
console.log(person.name,person.age)
//EMCScript 6
//let { name, age, country } = person;
console.log(name,age)

let team1 = ['Oscar','Julian','Ricardo']
let team2 = ['Valeria','Yesica','Camila']
//...team1 hace referencia a todo el array antes declarado
let education = ['David',...team1,...team2]

console.log(education)

{
    var global = "Global var";
}
{
    //SOLO ESTÀ DISPONIBLE EN EL BLOQUE DEFINIDO
    let globallet = "Global let"
    console.log(globallet)
}

console.log(global)
console.log(globallet)

const a = 'b';
a = 'a';
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos

let name = 'Oscar';
let age = 32;
//ANTES
obj = {name:name,age:age};
//EMCScript 6
obj2 = {name,age};
console.log(obj2)

const names = [
    {name:'Oscar',age:32},
    {name:'Yesica',age:27}
]
//ANTES
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//EMCScript 6
let listOfNames2 = names.map(item => console.log(item.name));
//varios parametros
const listOfNames3 = (name,age,country) => {
    /* ... */
}

//un solo elemento
const listOfNames4 = name =>{
    /* ... */
}
//un parametro y ya retorna
const square = num => num *  num;

//PROMESAS
const helloPromise = () => {
    //Promesa --> algo va a pasar
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey')
        }else{
            reject('Ups!!');
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))


//
//Clases, Módulos y Generadores
//
//CLASES
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
//SE CREA UN OBJETO
const calc = new calculator();
console.log(calc.sum(23,3))

//MODULOS
import myHello from './modules.js'

console.log(myHello())

//GENERADORES

function* helloWorld(){
    if(true){
        //retorna y guarda ese estado
        yield 'Hello';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

