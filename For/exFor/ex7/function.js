import prompt from 'prompt-sync'
let res = prompt();



export function pediNota(n) {
    console.log('Informe um numéro')
    let nota = Number(res());
    while(nota > 10 || nota < 0){
            console.log('Nota Inválida')
            console.log('Informe um número entre 0 e 10');
            nota = Number(res())
    }
    return nota
}

export function mediaNotas(n1,n2,n3){

    let m = (n1 + n2 + n3) / 3 

    return m 
}