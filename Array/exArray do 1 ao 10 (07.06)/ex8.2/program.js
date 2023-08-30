import prompt from 'prompt-sync';
import { nomes } from './function.js';
let usuario = prompt();

console.log('Programa Dinâmico');
let qtd = Number(usuario('Informe quantos nomes irá querer: '));
let array = []

nomes(array, qtd)


console.log('\nOs nomes que você digitou que iniciam com L ou com H são: ')
for(let item of array){
    if(item.charAt(0) == 'L' || item.charAt(0) == 'H'){
        console.log(item)
    }
}
