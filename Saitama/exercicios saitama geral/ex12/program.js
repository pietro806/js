
import prompt from 'prompt-sync';
let ler = prompt();
import { media } from './situacao.js';
import { situacaoAluno } from './situacao.js';


console.log(' ====Programa para saber se passou de ano e a média=====');
console.log('Informe a primeira nota :');
let n1= Number(ler());
console.log('Informe a segunda nota :');
let n2= Number(ler());
console.log('Informe a terceira nota :');
let n3= Number(ler());


let x = media(n1,n2,n3);
let y = situacaoAluno(x);

console.log(x);
console.log(y);
