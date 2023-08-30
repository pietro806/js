import prompt from 'prompt-sync';
import { notas } from './function.js';
let usuario = prompt();

console.log('Programa Dinâmico');
let qtd = Number(usuario('Informe a quantidade de notas que irá digitar: '));
let array = [];
let maior = 0;
let arrayTracejado = []

notas(qtd, array);

for(let item of array){
    if(item > maior ){
        maior = item
    }
}

for(let cont = 0; cont < qtd; cont++){
    if(cont == (qtd - 1)){
        arrayTracejado[cont] = array[cont]
    }
    else {
        arrayTracejado[cont] = array[cont] + '-'
    }
}

console.log();
console.log('As notas digitadas foram: ')
for(let item of arrayTracejado){
    process.stdout.write(String(item))
}

console.log();
console.log('\nA maior nota foi: ');
console.log(maior);
