var numeros = []
var contador = 1
var soma = 0

while(contador <= 10){

    var aleatorio = Math.round(Math.random()*49)+1

    numeros.push(aleatorio)

    contador++
}

var contador = 1

while(contador<=10){

    soma += numeros[contador-1]

    contador++
}

console.log(soma)

