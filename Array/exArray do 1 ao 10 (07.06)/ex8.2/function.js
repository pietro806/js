import prompt from 'prompt-sync';
let usuario = prompt();

export function nomes(array, qtd){
    console.log();

    for(let cont = 0; cont < qtd; cont++){
        console.log('Informe o nome de posição ' + (cont+1))
        array[cont] = usuario();
    };

    return array
}
