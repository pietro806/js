import prompt from 'prompt-sync';
import { arrayNumeros } from './function.js';
let usu = prompt();

console.log('Programa Dinâmico ');
console.log('Informe a qtd de números que irá querer: ')
let res = Number(usu());

let contador = 0;
let array = [];
let num = 0;
for(let cont = 0; cont < res; cont ++){
    console.log('Informe o número');
    num = arrayNumeros(contador,array)
    contador++
}

console.log('\nOs números ao contrário do que você informou são:');

for(let cont = (res -1); cont >= 0; cont--){
    console.log(array[cont])
}
