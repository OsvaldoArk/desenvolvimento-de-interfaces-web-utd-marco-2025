const fila = []

const fila02 = ['carla','ronaldo','ingrid']

fila.push('joaquim')
fila.push('andressa')
fila.push('mariana')
fila.push('graça')
fila.push('andré')
fila.push('carlos')

fila.shift()
fila.shift()
fila.shift()
fila.unshift('osvaldo')

console.log(fila.indexOf('andré'))

console.log(fila.includes('carlos'))

const result = fila.concat(fila02)

const combine = [fila, fila02]

console.log(combine.flat())

const [primeiro,segundo,terceiro,...medalha] = combine.flat();

console.log('1º',primeiro)
console.log('2º',segundo)
console.log('3º',terceiro)
console.log(medalha)

const matriz = [[1,2,3],
                [4,5,6],
                [7,8,9]]

//console.log(matriz.flat())