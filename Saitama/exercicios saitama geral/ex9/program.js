import prompt from 'prompt-sync';
let ler = prompt();
import {febre} from './febre.js';

console.log(' == Programa da febre ==')
console.log('Informe sua temperatura:')
let temp= Number(ler());

let x= febre(temp)

console.log('Está com febre ? ' + x);
