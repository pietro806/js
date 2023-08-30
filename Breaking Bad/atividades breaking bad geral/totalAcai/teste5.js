import prompt from 'prompt-sync';
let ler = prompt ();

console.log ( '*Programa para calcular o total da venda*' );

console.log('Informe a quantidade de açais comprados');
let quanti = Number(ler());

let valor= quanti*13.50;

console.log(`o valor de sua compra de açais foi ${valor} `);

