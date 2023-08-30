import prompt from 'prompt-sync';
let ler = prompt();

console.log('===== Programa da divisão =====');
console.log('Informe o primeiro número:')
let n1 = Number(ler());
console.log('Informe o segundo número:')
let n2 = Number(ler());

let dividindo = dividir(n1, n2);

console.log(dividindo);





function dividir(n1, n2) {
    let x = n1 / n2 ;
    return x;
}