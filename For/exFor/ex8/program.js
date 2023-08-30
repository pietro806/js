import prompt from 'prompt-sync';
import { ehPrimo } from './function.js';
let ler = prompt ();

console.log('Programa para saber se o número é primo ')
let n = Number(ler());
let x = ehPrimo(n);
console.log(x)