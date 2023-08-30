


export function media(n1,n2,n3){
    let x = (n1 + n2 + n3) / 3;

    return x;
}

export function situacaoAluno(x){

    let situacao = '';

    if (x >= 8) {
        situacao = 'aprovado com sucesso';
    }
    else if ( x >= 6 && x < 8) {
        situacao= 'aprovado';
    }
    else if ( x >= 3 && x < 6 ){
        situacao= 'recuperação';
    }
    else if ( x < 3 && x > 0 ) {
        situacao= 'reprovado';
    }
    else {
        situacao = 'desistente';
    }
    return situacao;
}

