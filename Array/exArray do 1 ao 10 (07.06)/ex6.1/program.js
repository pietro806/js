import prompt from 'prompt-sync';
import { Numeros, dobro } from './function.js';
let usuario = prompt();


console.log('Programa Dinâmico');
console.log('Informe a quantidade de números no array que irá querer:');
let qtd = Number(usuario());
let array = []
let arrayDobro = []

Numeros(qtd, array)

dobro(array, arrayDobro)

console.log('\nVocê digitou os números:');
for(let item of array){
    console.log(item);
}

console.log('\nO dobro desses números são:');
for(let item of arrayDobro){
    console.log(item);
}