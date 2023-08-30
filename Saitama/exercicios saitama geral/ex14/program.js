import prompt from 'prompt-sync';
let ler = prompt ();
import {orcamento} from './orcamentoFamiliar.js'

console.log(' === Programa para saber a situação de orçamento =====');
console.log(' Informe o total de gastos:');
let gastos = Number(ler());
console.log(' Informe o total de ganhos:');
let ganhos = Number(ler());

let x = orcamento(gastos, ganhos);

console.log(x);