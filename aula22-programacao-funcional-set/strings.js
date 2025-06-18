const palindromo = 'socorram me subi no onibus em marrocos'

console.log(palindromo.length)

const reverso = palindromo.split(' ').join('').split('').reverse().join('');

const normal = palindromo.split(' ').join('');

console.log(reverso)
console.log(normal)

console.log(reverso===normal ? 'é um palíndromo':'não é um palíndromo')
