const map = new Map(
    [
        ['aluna','lara'],
        ['aluno','nicolas'],
        ['aluna','ingrid'],
        ['professor','jonathan']
    ]
)

map.set('representante','marina')
//console.log(map)

for(let [chave,valor] of map){
    console.log(chave,' ',valor)
}