import prompt from 'prompt-sync';
let ler = prompt();
import {total} from './totalCompra.js'

console.log('== Programa para saber o total da compra ==');
console.log('Informe o total da compra:')
let compra= Number(ler());
console.log('informe o valor do desconto')
let desconto= Number(ler());

let x = total(compra, desconto);

console.log('O valor da compra com desconto foi ' + x )