 

export function analise(cor){
    
    let acao= " ";
    if ( cor == "vermelho"){
        acao= "Espere";
    }
    else if ( cor == "verde"){
        acao= "Atravesse";
    }

    return acao;
}