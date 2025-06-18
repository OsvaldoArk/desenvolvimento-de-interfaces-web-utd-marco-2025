import { Consulta }from "./model/Consulta.js"
import peter  from "./model/Pessoa.js";
import Paciente from "./model/Paciente.js"

const p1 = new peter('1234567','Victor','1987-08-22');

const c1 = new Consulta('2025-06-06','Reginaldo Rossi','Dor de cotovelo');

const pa1 = new Paciente('9876543','Marcos Paulo','1999-03-20',c1);

console.log(`cpf: ${pa1.cpf} nome: ${pa1.nome} idade: ${pa1.idade} especialidade ${pa1.consulta.especialidade} médico: ${pa1.consulta.medico} data: ${pa1.consulta.data}`);

