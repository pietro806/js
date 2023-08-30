import prompt from 'prompt-sync';
import { potenciaN } from './funcao.js';
let ler = prompt();

console.log('==== Programa para calcular potenciação');
let num = Number(ler('Informe a base da potência : '));
let expoente = Number(ler('Informe o expoente : '));


potenciaN(num, expoente)