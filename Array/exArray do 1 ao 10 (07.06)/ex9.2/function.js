import prompt from 'prompt-sync';
let usuario = prompt();

export function notas(qtd, array){
    console.log()

    for(let cont= 0; cont < qtd; cont++){
        console.log('Informe a nota ' + (cont+1));
        array[cont] = Number(usuario());
    }

    return array
}