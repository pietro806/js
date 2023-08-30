

export function separar(texto) {


    let caractere = texto.length;
    for(let position = 0; position < caractere; position++){
        let letra = texto.charAt(position);
        process.stdout.write(letra +'-')
    }
    
}