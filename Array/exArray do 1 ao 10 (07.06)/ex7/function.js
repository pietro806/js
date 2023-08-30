import prompt from 'prompt-sync';
let usuario = prompt();

export function numeros(array, qtd){
    console.log()
    for(let cont = 0; cont < qtd; cont++){
        console.log('Informe o numero de posição ' + (cont+1));
        array[cont] = Number(usuario());
        }

    return array
}