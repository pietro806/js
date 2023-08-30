import prompt from 'prompt-sync'
import {mediaNotas, pediNota } from './function.js';
let res = prompt();

let n1 = pediNota();
let n2 = pediNota();
let n3 = pediNota();



let media = mediaNotas(n1,n2,n3);

console.log('a media é ' + media)