import prompt from 'prompt-sync';
import { inverter } from './function.js';
let ler = prompt ();

console.log('====Programa para inverter textos====');
let text= ler('Informe um texto : ');

inverter(text);