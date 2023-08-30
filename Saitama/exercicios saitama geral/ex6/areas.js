import prompt from 'prompt-sync';
let ler = prompt();

console.log(' ==== Programa para saber a area de um triagulo e de um retângulo ====');
console.log('Informe a base :');
let base = Number(ler());
console.log('Informe a altura :');
let altura = Number(ler());

let areatriangulo= triagulo(base, altura);
let arearetangulo= retangulo(base, altura);

console.log('A area do triangulo é ' + areatriangulo );
console.log('A area do retângulo é ' + arearetangulo);



function triagulo(base, altura){
    let x = (base * altura ) / 2;
    return x;
}
function retangulo(base, altura){
    let x = base * altura;
    return x; 
}

