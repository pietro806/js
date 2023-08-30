import prompt from 'prompt-sync';
import { arrayNum } from './function.js';
let usu = prompt();

console.log('Program Dinâmico')
console.log('Informe qtd de numeros que irá querer :')
let res = Number(usu())

let contador = 0;
let array = [];
let num = 0;
for (let cont = 0; cont < res; cont ++){
    console.log('Informe o numero ' + (cont+1))
    num = arrayNum(contador,array)
    contador++
}

console.log('\nOs números digitados foram:');

for(let item of array){
    console.log(item)
}