import prompt from 'prompt-sync';
import { media, notas } from './function.js';
let usuario = prompt();

console.log('Programa Dinâmico');
let qtd = Number(usuario('Informe a quantidade de notas que irá querer: '));
let Notas = [];
let Media = 0;


notas(Notas, qtd);
Media = media(Notas, Media);

let notasTracejado = []
for(let cont = 0; cont < qtd; cont++){
    if(cont == (qtd-1)){
        notasTracejado[cont] = Notas[cont]
    }
    else {
        notasTracejado[cont] = Notas[cont] + ' - '
    }
}
console.log()
console.log('As notas digitadas foram: ');
for(let item of notasTracejado){
    process.stdout.write(String(item))
}
console.log()
console.log('\nA média é ' + Media);

