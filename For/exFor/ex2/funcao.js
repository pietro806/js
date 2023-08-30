


export function fatorial(numero) {
    
    let multi = 1;
    for(let contador = numero; contador >= 1 ; contador--){
        multi = multi * contador 
    }
    console.log(`o fatorial de ${numero} é ${multi}`)
}