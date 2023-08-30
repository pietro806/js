

export function total(compra, desconto){
    let x = (desconto * compra ) / 100;
    let y = compra - x ; 
    return y;
}