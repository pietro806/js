import prompt from 'prompt-sync';
import { Tabuada } from './function.js';
let usuario = prompt();

console.log('Programa Dinâmico');
console.log('Informe um número para eu fazer a tabuada dele')
let num = Number(usuario())
let array = []

Tabuada(num, array)


console.log('\nA tabuada ficou assim:');
for(let item of array){
    console.log(item)
}