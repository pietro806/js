import prompt from 'prompt-sync';
import { calculadora } from './function.js';
let usu = prompt();

console.log('Programa da calculadora');
console.log('Informe o primeiro número que vai fazer a operação com o segundo');
let n1 = Number(usu());
console.log('Informe o segundo número');
let n2 = Number(usu());
console.log('Informe a operação que deseja fazer entre esses números');
let opera = usu();


let x = calculadora(n1, n2, opera);

console.log(x)