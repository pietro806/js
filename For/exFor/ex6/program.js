import prompt from 'prompt-sync';
import { palindromo } from './function.js';
let ler = prompt ();

console.log('====Programa descobrir se a palavra é palindroma====');
let text= ler('Informe um texto : ');

let x = palindromo(text);

console.log(x)