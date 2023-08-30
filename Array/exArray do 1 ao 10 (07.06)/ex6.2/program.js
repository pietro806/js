import prompt from 'prompt-sync';
import { dobro, numeros } from './function.js';
let usuario = prompt();


console.log('Programa Dinâmico');
console.log('Informe a quantidade');
let qtd = Number(usuario());
let array = [];
let arrayDobro = [];

numeros(qtd, array)

dobro(array, arrayDobro)

console.log();
for(let cont = 0; cont < array.length; cont++){
    console.log('O dobro de ' + array[cont] + ' é ' + arrayDobro[cont])
};

