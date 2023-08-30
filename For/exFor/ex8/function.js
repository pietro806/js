

export function ehPrimo(numero) {
    let msg = '';
    if(numero == 0 || numero == 1){
        msg = 'não é primo'
    }
    let primo = 0;
    for(let cont2 = 0 ; cont2 <= numero ; cont2 ++){
        if(numero % cont2 == 0){
            primo ++
        }
    }
    if(primo > 2 ){
        msg = 'não é primo';
    }
    else if(primo == 2) {
        msg = 'é primo';
    }
    return msg
} 