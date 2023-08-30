
export function calcular(qtdgramas) {
    
    let gramas = " "; 
    if ( qtdgramas >= 0 && qtdgramas < 1000 ){
        gramas = (qtdgramas * 0.035) .toFixed(2);
    }
    else if ( qtdgramas >= 1000 ) {

        gramas = 0.030 * qtdgramas ; 
    }
    else if ( qtdgramas <= 0 ) {
        gramas = "Peso Invalido";
    }

    return gramas
   
}