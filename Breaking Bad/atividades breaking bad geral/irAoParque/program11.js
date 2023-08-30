import prompt from 'prompt-sync'
let ler = prompt();
import {ir} from './teste11.js'

console.log (      '*Programa para saber se deve ir ao parque*')
console.log('Informe a temperatura:')
let temp= Number(ler());
let ir_ou_nao= ir (temp)

console.log('Devo ir ao parque ? ' + ir_ou_nao)