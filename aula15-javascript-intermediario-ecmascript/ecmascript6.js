//let variavel = 37

//const gravidade = []

//gravidade.push(9.8)
//gravidade.push(10)

//console.log(gravidade)

const alunos = ['geovani','saulo','andreia','luan','lívia','lícia']

const novosAlunos = ['ana','gerge']

const [ouro,prata,bronze,...medalha] = alunos

console.log(ouro)

console.log(prata)

console.log(bronze)

console.log(medalha)

const finalAlunos = [...alunos,...novosAlunos]


console.log(finalAlunos)
