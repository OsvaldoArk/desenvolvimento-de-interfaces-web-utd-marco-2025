import { Cliente } from './model/Cliente.js'

const cliente = new Cliente('765432345','Luiz Carlos',28)

console.log(cliente)

console.log('matricula: ',cliente.matricula,' nome: ',cliente.nome,' idade: ',cliente.idade);

console.log(cliente.pedirFinanciamento(401000));