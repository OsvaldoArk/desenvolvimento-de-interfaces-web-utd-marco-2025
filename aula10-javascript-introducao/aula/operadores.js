//operadore unários =
var gravidade = 9.8

// operadores aritméticos. + - * / % ()
var media = (10 + 5 + 6) / 3

//console.log(media)

var restoDivisao = 10 % 4 

//console.log(restoDivisao)

//operadores relacionais >, >=, <, <=, ==, !=, ===, !==
var r1 = 10 >= 10
var r2 = 10 === "10"

var r3 = 10+"10"

//console.log(r1)
//console.log(r3)

//operadores lógicos

r4 = true && false
r5 = true || false

//console.log(r4)
//console.log(r5)

//Operador Ternário se()?[verdade]:[falso]

var produto = 350

var promocao = false

var cupom = false

valor_final = (promocao === true) ? produto - (produto*0.35) : (cupom === true) ? produto - (produto*0.20) : produto

console.log(valor_final)


