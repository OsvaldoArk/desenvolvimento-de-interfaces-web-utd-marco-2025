
var numeros = []
var temp = 0

for(var indice = 0; indice<10;indice++){
    var numero = Math.round(Math.random()*99)+1 
   
    numeros.push(numero);
}


for(var atual = 0;atual<numeros.length;atual++){

    for(var proximo = atual+1;proximo<numeros.length;proximo++){

        if(numeros[atual] < numeros[proximo]){
            temp = numeros[atual]

            numeros[atual] = numeros[proximo]

            numeros[proximo] = temp
        }
    }
}

console.log(numeros)