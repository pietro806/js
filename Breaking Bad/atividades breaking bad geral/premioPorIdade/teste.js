import prompt from 'prompt-sync';
let ler = prompt();

console.log( 'Informe sua idade:')
let idade= ler();


let situacao= '';

if ( idade == 13 || idade ==10) {
    situacao='Você ganhará uma bicleta'
}
else if ( idade == 15 || idade == 16) {
    situacao= 'Você ganhará um PC'
}
else if ( idade == 18) {
    situacao= 'você ganhou um carro'
}
else if ( idade > 18) {
    situacao='você ganhou uma viagem internacional'
}

console.log(situacao)