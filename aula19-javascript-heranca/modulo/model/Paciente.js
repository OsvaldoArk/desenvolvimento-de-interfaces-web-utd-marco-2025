import Pessoa from "./Pessoa.js";

export default class Paciente extends Pessoa{

    #consulta

    constructor(cpf,nome,dataNascimento,consulta){
        super(cpf,nome,dataNascimento);
        this.#consulta = consulta;
    }

    get consulta(){
        return this.#consulta
    }

    set consulta(consulta){
        this.#consulta = consulta
    }
}


