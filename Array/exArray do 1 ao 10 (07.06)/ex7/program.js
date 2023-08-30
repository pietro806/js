import prompt from 'prompt-sync';
import { numeros } from './function.js';
let usuario = prompt();


console.log('Programa Dinâmico');
let qtd = Number(usuario('Informe quantos numeros irá querer: '));
let array = [];

numeros(array, qtd);

console.log('\nVocê digitou os números:');
for(let item of array){
    console.log(item)
};

console.log('\nOs numeros pares são: ');
for(let item of array){
    if(item % 2 == 0){
        console.log(item)
    }
}