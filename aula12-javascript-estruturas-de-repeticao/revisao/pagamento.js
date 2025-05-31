var precoProduto = 200

var condicaoDePagamento = 9

var modificador = 0

var condicao = ""

if(condicaoDePagamento ===1){
    modificador = -0.15
    condicao = "dinheiro à vista"
}
else if(condicaoDePagamento === 2){
    modificador = -0.1
    condicao = "cartão à vista"
}
else if(condicaoDePagamento === 3){
    modificador = 0
    condicao = "parcelado em 2x"
}
else if(condicaoDePagamento === 4){
    modificador = 0.15
    condicao = "parcelado em 4x"
}
else{
    console.log("condição inválida")
}
var precoFinal = precoProduto +(precoProduto*modificador);

console.log(condicao)
console.log("preço final: ",precoFinal)