import prompt from 'prompt-sync';
let usuario = prompt();


export function numeros(qtd, array){
    console.log()
    for(let cont = 0; cont < qtd; cont ++){
        console.log('Informe o número de posição ' + (cont+1) );
        array[cont] = Number(usuario());
    };

    return array;
};


export function dobro(array, arrayDobro){

    for(let cont= 0; cont < array.length; cont++){
        arrayDobro[cont] = array[cont] * 2
    }

    return arrayDobro
}