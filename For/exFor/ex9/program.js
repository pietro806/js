import prompt from 'prompt-sync';
import { fibonacci } from './function.js';
let usuario = prompt();

console.log('Programa para você descobrir um numéro na sequência de Fibonacci');
let n = Number(usuario('Informe a posição que informaremos o número : ' ))

let x = fibonacci(n);
console.log(x)