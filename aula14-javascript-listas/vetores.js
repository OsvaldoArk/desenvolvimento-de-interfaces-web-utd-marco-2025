var lista = ["jessica","ruan","silvia","natália","carlos"]

/*
for(var indice = 0; indice < lista.length;indice++){
    console.log(lista[indice])
}
*/

const [aluno1, aluno2,...resto] = lista;

console.log(aluno1)
console.log(aluno2)
console.log(resto)