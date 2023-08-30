import { arrayNomes } from "./function.js"


console.log('Informe 5 nomes')

let contador = 0;
let array = [];
let nome = arrayNomes(contador,array);
contador++
nome = arrayNomes(contador,array);
contador++
nome = arrayNomes(contador,array);
contador++
nome = arrayNomes(contador,array);
contador++
nome = arrayNomes(contador,array)
contador++

console.log('\nOs nomes digitados foram:');

for (let item of array){
    console.log(item)
}
