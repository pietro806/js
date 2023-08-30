import prompt from 'prompt-sync';
let ler = prompt ();
import {calcularMedia} from './passouAno.js';
import {passou} from './passouAno.js';


console.log(' Programa para sabeer se passou de ano =====');
console.log('Informe a primeira nota :');
let n1 = Number(ler());
console.log('Informe a segunda nota :');
let n2 = Number(ler());
console.log('Informe a terceira nota :');
let n3 = Number(ler());

let x = calcularMedia(n1, n2, n3);
let y = passou(x);

console.log (x);
console.log(y);