import prompt from 'prompt-sync';
let ler = prompt();

console.log('== Programa para saber o dobro de 3 numeros ==');
console.log('Informe o primeiro número:');
let n1 = Number(ler());
console.log('Informe o segundo número:');
let n2 = Number(ler());
console.log('Informe o terceiro número:');
let n3 = Number(ler());

let d1= dobro(n1);
let d2= dobro(n2);
let d3= dobro(n3);

console.log(`O dobro de ${n1} é ${d1}`);
console.log(`O dobro de ${n2} é ${d2}`);
console.log(`O dobro de ${n3} é ${d3}`);



function dobro(num){
    let x = num * 2;
    return x;
}