import prompt from 'prompt-sync';
import { somarAte } from './funcao.js';
let ler = prompt();

console.log('=== Programa para saber a soma dos numeros anteriores ao numero que voçê me der');
let num = Number(ler('Informe um número : '));

somarAte(num);