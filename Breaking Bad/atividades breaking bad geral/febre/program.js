import {febre} from './teste10.js';

import prompt from 'prompt-sync'
let ler = prompt();

console.log('   *programa da febre*')
console.log('Informe sua temperatura :')
let temp = Number(ler());

let estaComFebre= febre (temp)

console.log('esta com febre ? ' +  estaComFebre)


