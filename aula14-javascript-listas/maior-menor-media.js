var numeros = []
var maior = 0
var menor = 0
var soma = 0

for(var indice = 0; indice<10;indice++){
    var numero = Math.round(Math.random()*99)+1 
   
    numeros.push(numero);
}

for(var indice = 0;indice < numeros.length;indice++){
    if(indice === 0){
        menor = numeros[indice]
    }

    if(numeros[indice] < menor){
        menor = numeros[indice]
    }

    if(numeros[indice] > maior){
        maior = numeros[indice]
    }

    soma+=numeros[indice]
}
//soma = soma / numeros.length
soma/=numeros.length

console.log(numeros)
console.log("maior: ",maior," menor: ",menor," média: ",soma)