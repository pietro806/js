import prompt from 'prompt-sync';
let ler = prompt();
import {par} from './teste12.js'


console.log(          '*Programa para saber se o número é par');
console.log('Informe um número:')
let n= Number(ler());
let n_par= par(n);

console.log('Seu número é par? ' + n_par);

