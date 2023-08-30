import prompt from 'prompt-sync';
import { produto, quadrado,subtracao, quociente, soma, resto } from './function.js';
let usu = prompt ();


console.log('Informe dois números para eu fazer algumas operações');
let n1 = Number(usu());
let n2 = Number(usu());


let a = soma(n1, n2);
let b = produto(n1, n2);
let c = quadrado(n1, n2);
let d = subtracao(n1, n2);
let e = quociente(n1, n2);
let f = resto(n1, n2);

console.log(`a soma dos numeros foi ${a}
o produto foi ${b}
o quadrado foi ${c}
a subtração foi ${d}
o quociente foi ${e}
o resto foi ${f} `)
