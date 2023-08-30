import prompt from 'prompt-sync';
let ler = prompt();

console.log('====== Programa para saber se esta com febre ======');
console.log('Informe sua temperatura :')

let temp = Number(ler());
let febre = temp >= 37.5;

console.log('Está com febre ? ' + febre)
