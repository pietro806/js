import prompt from 'prompt-sync';
let usu = prompt();

export function colocarArray(contador,array) {
    for (let cont = 0; cont < 1; cont++){
        array[contador] = Number(usu());
    }
   
    return array;
}