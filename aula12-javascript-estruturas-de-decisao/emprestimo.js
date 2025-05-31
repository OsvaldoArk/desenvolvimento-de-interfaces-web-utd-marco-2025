emprestimo = 12000
numero_parcelas = 24
salario = 3000

valor_parcela = emprestimo / numero_parcelas

if(valor_parcela <= salario * 0.3){
    console.log("empréstimo aprovado")
}
else{
    console.log("empréstimo recusado")
}

console.log("salário: ",salario)
console.log("30% = ",salario * 0.3)
console.log("valor da parcela: ",valor_parcela)