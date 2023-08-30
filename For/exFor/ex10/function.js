import prompt from 'prompt-sync';
let usu = prompt();
export function numeroAleatorio() {
    let sorteado = Math.random() * 100 ;
    sorteado = parseInt(sorteado);
    return sorteado
}

export function ganhou(sorteado, tentativas){
    let numUsuario = Number(usu())
    while(tentativas <= 5){
        if ( numUsuario > sorteado) {
            console.log('Menor')
            numUsuario= Number(usu())
        }
        else if ( numUsuario < sorteado) {
            console.log('Maior')
            numUsuario= Number(usu())
        }
        if(numUsuario == sorteado){
            console.log('acertouuuuu')
            break
        }
        tentativas ++
    }
    if( tentativas >= 5 && numUsuario != sorteado){
        console.log('GAME OVER')
    }
}