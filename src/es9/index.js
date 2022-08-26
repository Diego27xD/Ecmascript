/* const obj = {
    name: 'Oscar',
    age: 32,
    country:'MK'
} */
//LET ACUMULA NAME Y LO DEMÀS EN ALL
let {name,...all} = obj
console.log(name,all)
console.log(all);

//DENTRO DE OBJ1 AÑADIMOS TODO OBJ
const obj = {
    name: 'Oscar',
}

const obj1 = {
    ...obj,
    country:'MX'
}
console.log(obj1)

//SE AÑADIO FINALLY
const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(()=>resolve('Hello World'),3000) //resolve('Hello World')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo'))

//fECHAS--> [DEL 0 AL 9]{nª de valores}
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
//Se da una fecha
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day)


