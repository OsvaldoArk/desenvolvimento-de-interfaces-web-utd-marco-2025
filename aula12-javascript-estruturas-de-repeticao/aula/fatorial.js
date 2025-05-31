var numero = 3

var fatorial = 1

while(numero>1){
    //fatorial = fatorial * numero
    console.log(fatorial,"x",numero,"=",(fatorial*numero))
    fatorial*=numero

    numero--
}

console.log("resultado ",fatorial)