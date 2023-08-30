import prompt from 'prompt-sync';
import { separar } from './function.js';
let ler = prompt();

console.log('====Programa para exibir seu texto com hífen ao lado');
let texto = ler('Informe o texto: ');

separar(texto);