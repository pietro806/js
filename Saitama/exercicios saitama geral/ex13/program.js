import prompt from 'prompt-sync';
let ler = prompt();
import {analise} from './semaforoCor.js'


console.log('==== Programa para saber se pode atravessar o farol ====');
console.log('Informe a cor do farol :');
let cor = ler();

let x = analise(cor);

console.log(x);

