import prompt from 'prompt-sync';
import { areaquadrados, areasiguaias } from './teste.js';
let ler = prompt();



console.log(          '*Programa para saber se a área do quadrado é igual')
console.log('Informe a base')
let quadrado1= ler();
console.log('Informe a base do segundo quadrado')
let quadrado2= ler();
let areaqua1= areaquadrados (quadrado1)

let areaqua2= areaquadrados (quadrado2)

let iguais= areasiguaias (areaqua1, areaqua2)


console.log('a area de quadrado 1 é ' + areaqua1)
console.log('a area de quadrado 2 é ' + areaqua2)
console.log('os quadrados são iguais ' + iguais)



