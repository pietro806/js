


export function palindromo(text) {
    let caractere = text.length;
    let msg = ''
    for( let position = caractere ; position >= 0 ; position--){
        let letra = text.charAt(position)
        msg = msg + letra ;
    }
    if(msg == text) {
        msg= 'é palindromo'
    }
    else {
        msg= 'não é palindromo'
    }
    return msg
}
