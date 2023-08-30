import prompt from 'prompt-sync';
let ler = prompt ();
import {media} from './media.js'


console.log('== Programa da média ==');
console.log('Informe a primeira nota');
let n1 = Number(ler());
console.log('Informe a segunda nota');
let n2 = Number(ler());
console.log('Informe a terceira nota');
let n3 = Number(ler());

let x = media(n1, n2, n3)

console.log('A media é ' + x )