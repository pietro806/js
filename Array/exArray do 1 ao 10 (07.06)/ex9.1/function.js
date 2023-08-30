import prompt from 'prompt-sync';
let usuario = prompt();


export function notas(Notas, qtd){
    console.log()

    for(let cont = 0; cont < qtd; cont ++){
        console.log('Informe a nota ' + (cont+1));
        Notas[cont] = Number(usuario());
    }

    return Notas
}

export function media(Notas, Media){
    
    for(let cont = 0; cont < Notas.length; cont++){
        Media = Notas[cont] + Media
    }
    Media = Media / Notas.length

    return Media
}
