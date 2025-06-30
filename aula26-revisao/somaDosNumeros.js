
let soma = 0;
const input = [1, -4, 12, 0, -3, 29, -150];

input.forEach(numero => { if(numero>0) soma+=numero; });

console.log(soma);

const somaQ = input.filter(numero => numero > 0).reduce((soma,numero)=> soma+=numero,0);

console.log('soma questão: ',somaQ);