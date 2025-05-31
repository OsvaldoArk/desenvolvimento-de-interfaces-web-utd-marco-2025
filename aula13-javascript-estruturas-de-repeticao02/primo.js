var n = Math.round(Math.random()*18)+2

quantidade_divisores = 0 
divisor = 1

while(divisor <= n){

    if(n % divisor === 0){
        quantidade_divisores++
    }
    
    console.log(n,"/",divisor,"=",Math.floor(n/divisor)," resto: ",n % divisor,"qtd divisores",quantidade_divisores)

    divisor++
}

if(quantidade_divisores === 2){
    console.log(n," é um número primo")
}
else{
    console.log(n," não é primo")
}