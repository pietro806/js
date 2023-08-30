import prompt from 'prompt-sync';
import { fatorial } from './funcao.js';
let ler = prompt();


console.log('==== Programa para descobrir o fatorial de um número');
let num = Number(ler('Informe um numero : '));

fatorial(num);