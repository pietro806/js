import prompt from 'prompt-sync';
let ler = prompt ();

console.log ( '*Programa do juros simples*');
console.log ( 'Informe o valor da capital' );
let valorcapital = Number(ler());
console.log ( 'Informe o valor da taxa' );
let taxa = Number(ler());
console.log ( 'Informe quantos meses' );
let meses = Number(ler());

let juros= (valorcapital*taxa*meses)/100;
let montante = valorcapital+juros;
console.log( `O montante pago pelo emprestimo de R$ ${valorcapital
} é R$ ${montante} `);