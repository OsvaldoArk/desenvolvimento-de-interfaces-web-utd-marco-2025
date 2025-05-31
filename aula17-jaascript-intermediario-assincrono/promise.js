let numero = 39

const prom = new Promise((resolve,reject)=> numero % 2 === 0 ? resolve(numero+" é par") : reject(numero+" é ímpar"));

prom.then(res=>console.log(res),erro=>console.log(erro));