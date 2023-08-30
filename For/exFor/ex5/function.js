


export function inverter(text){


    
    let caractere = text.length;
    for(let position = caractere;position >= 0;position--){
        let letra = text.charAt(position);
        process.stdout.write(letra)
    }
}