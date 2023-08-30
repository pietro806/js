

export function fibonacci(posicao){
    let numero1 = 1;
    let numero2 = 0;
    let numeroNovo = 0;
    for(let contador = 1; contador <= posicao; contador ++ ){
        numeroNovo = numero1 + numero2;
        numero1 = numero2;
        numero2 = numeroNovo;
    }
    return numeroNovo
}
