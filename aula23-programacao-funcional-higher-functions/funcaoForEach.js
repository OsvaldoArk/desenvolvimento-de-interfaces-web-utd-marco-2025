const precos = [ 10.20, 8.90, 15.15, 5.10, 21.0, 42.80, 100.0, 120.40 ]

const desconto = (preco) => {
    return preco - preco * 0.1
}

//precos.forEach(preco => console.log(preco - preco* 0.5));

const precosComDesconto = precos.map(preco => preco - preco * 0.1);

console.log(precos);

console.log(precosComDesconto);
