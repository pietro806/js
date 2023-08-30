
export function orcamento(gastos, ganhos){

    let situacao = " ";

    if (ganhos >= gastos) 
    {
        situacao= "Você está dentro do orçamento";
    }
    else 
    {
        situacao= "Você está fora do orçamento! NÂO gaste mais!!!"
    }

    return situacao;
}