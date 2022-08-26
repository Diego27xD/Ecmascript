//Object.entries --> regresa un arreglo o matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//Object.values --> Devuelve una arreglo de string con los valores
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data2);
console.log(values)
console.log(values.length)

//padStart(numerod e espacios, valor) --> agrega al inicio, un valor
//padEnd(numerod e espacios, valor) --> agrega al final, un valor
const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ----'))
console.log('foot'.padEnd(12,' ----'))

//PROMESAS Y ASYNC AWAIT

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello world'),3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello)
    } catch (error){
        console.log(error)
    }
}
anotherFunction();