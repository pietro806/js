import prompt from 'prompt-sync';
let ler = prompt();
import {corPrimaria1} from './coresPrimarias.js';
import {corPrimaria2} from './coresPrimarias.js'

console.log(' == Programa para saber se duas cores são primárias');
console.log('Informe a primeira cor:');
let cor1= ler();
console.log('Informe a segunda cor:');
let cor2= ler();

let x = corPrimaria1(cor1);
let y = corPrimaria2(cor2);

console.log(' A primeira cor é uma cor primária ? ' + x)
console.log(' A segunda cor é uma cor primária ? ' + y)