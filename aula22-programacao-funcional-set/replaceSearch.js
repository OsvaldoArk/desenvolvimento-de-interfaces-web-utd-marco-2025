const palindromo = 'socorram me, subi no ônibus em marrocos';

const r1 = palindromo.replace(',','').replace('ô','o').split(' ').join('').split('').reverse().join('');

console.log(r1);

const pi = '3.1415';

console.log(typeof(Number.parseInt(pi)));

console.log(Number.parseInt(pi)+101)