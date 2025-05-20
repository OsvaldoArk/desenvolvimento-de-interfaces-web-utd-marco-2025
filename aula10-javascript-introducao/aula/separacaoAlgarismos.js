var numero = 371

var unidade = numero % 10

var dezena = (numero % 100 - unidade) / 10

var centena = Math.floor(numero / 100)

console.log("unidade: ",unidade)

console.log("dezena: ",dezena)

console.log("centena: ",centena)