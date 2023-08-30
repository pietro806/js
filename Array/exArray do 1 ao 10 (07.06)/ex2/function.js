import prompt from 'prompt-sync';
let usu = prompt();


export function arrayNomes(contador,array){

    for(let cont = 0; cont < 1; cont++){
        array[contador] = usu()
    }
    
    return array
}