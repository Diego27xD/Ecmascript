const button = document.getElementById("btn");

button.addEventListener('click',async function(){
    const module = await import("./file.js");
    module.hello();
})
//ACEPTA NÙMERO DE MAS DE 2 A LA 53
const aBigNumber = 87656567876544667n;
const anotherBigNumber = BigInt(87656567876544667);
console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve,reject)=> reject("reject"));
const promise2 = new Promise((resolve,reject)=> resolve("resolve"));
const promise3 = new Promise((resolve,reject)=> resolve("resolve1"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))

console.log(window);
//SE AÑADIÓ GLOBALTHIS
console.log(globalThis);

//OPERADOR NULO
const fooo = null ?? 'default string'
console.log(fooo)

//AGREGAMOS ? PARA  QUE NO ROMPA LA APLICACIÒN A PESAR DE QUE NO EXISTA ESE VALRO O AÚN NO LO DEFINAMOS
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}