

export function calculadora(num1, num2, operacao){
    let resultado = 0;
    
    if(operacao == '+'){
        resultado = num1 + num2;
    }
    else if (operacao == '-'){
        resultado = num1 - num2;
    }
    else if (operacao == '*'){
        resultado = num1 * num2;
    }
    else if (operacao == '/'){
        resultado = num1 / num2;
    }
    else {
        resultado = 'Operação não suportada.'
    }

    return resultado
}
