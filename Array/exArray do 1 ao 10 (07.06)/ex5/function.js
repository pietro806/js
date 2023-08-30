

export function Tabuada(num, array) {


    for (let cont= 0; cont <= 10; cont++){
        array[cont] = num * cont 
    }

    return array
}