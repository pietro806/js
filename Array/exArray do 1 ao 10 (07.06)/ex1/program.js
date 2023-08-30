import prompt from 'prompt-sync';
import { colocarArray } from './function.js';
let usu = prompt()


console.log('Programa Dinâmico');
console.log('Informe 5 números:');
let contador = 0;
let array = [1];


let num1 = colocarArray(contador,array);
contador ++;
num1 = colocarArray(contador,array);
contador ++;
num1 = colocarArray(contador,array);
contador ++;
num1 = colocarArray(contador,array);
contador ++;
num1 = colocarArray(contador,array);
contador ++;


console.log(array);