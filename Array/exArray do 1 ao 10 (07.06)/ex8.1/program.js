import prompt from 'prompt-sync';
import { nomes } from './function.js';
let usuario = prompt();

console.log('Programa Dinâmico');
let qtd = Number(usuario('Informe quantos nomes irá querer: '));
let array = []

nomes(array, qtd)


console.log('\nOs nomes que você digitou que iniciam com L são: ')
for(let item of array){
    if(item.charAt(0) == 'L'){
        console.log(item)
    }
}
