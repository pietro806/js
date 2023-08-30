import prompt from 'prompt-sync';
let ler = prompt ();


console.log('Seja bem vindo ao programa da calculadora de somar 2 números');
console.log('informe o primeiro número')
let n1= Number(ler());
console.log('informe o segundo número');
let n2= Number(ler());

let soma= n1 + n2;

console.log('A soma dos dois numeros foi:')
console.log(soma);