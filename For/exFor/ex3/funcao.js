


export function potenciaN(num, expoente){
    
    let resultado = 1;
    if (num < 0 || expoente < 0 ){
        resultado = "calculo inválido"
    }
    else if (expoente == 0 ) {
        resultado = 1
    }
    for (let contador = 1 ; contador <= expoente ; contador++ ){
        resultado = resultado * num;
    }
    console.log(num + ' elevado a ' + expoente + ' é ' + resultado)
}
