import prompt from 'prompt-sync';
let ler = prompt ();

console.log ( '*Programa para calcular o total da venda*' );

console.log('Informe a quantidade de açais pequenos comprados');
let quantipequeno = Number(ler());
console.log('Informe a quantidade de açais medios comprados');
let quantimedio = Number(ler());
console.log('Informe a quantidade de açais grandes comprados');
let quantigrande = Number(ler());


let valorgrande = quantigrande*17.50;
let valormeedios = quantimedio*15.00;
let valorpequeno = quantipequeno *13.50;

let valor = valorpequeno+valormeedios+valorgrande;

console.log ( `O valor de sua compra foi R$${valor} `)


