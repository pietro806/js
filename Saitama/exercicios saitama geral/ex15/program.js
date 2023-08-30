import prompt from 'prompt-sync';
let ler = prompt();
import {calcular} from './sorveteria.js'

console.log(' ==== Programa para saber o total da compra na sorveteria');
console.log('Informe o total de gramas comprado:');
let qtdgramas = Number(ler());
 
let x = calcular(qtdgramas);

console.log(x);