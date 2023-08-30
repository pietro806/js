import prompt from 'prompt-sync';
import { ganhou, numeroAleatorio } from './function.js';
let usuario = prompt()


console.log('Programa para tentar acertar um número aleatorio');
let numSorteado = numeroAleatorio();
let tentativas = 1;
let n = ganhou(numSorteado, tentativas);
