const input = [12, 46, 32, 64];

input.sort((a,b)=> a - b);


const resposta = {media: 0, mediana: 0}

resposta.media = input.reduce((total,numero)=>total+=numero,0)/4;

resposta.mediana = (input[1] + input[2]) / 2

console.log(resposta);

console.log((input.length) /2);
