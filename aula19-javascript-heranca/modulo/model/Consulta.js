export class Consulta{

    #data
    #medico
    #especialidade

    constructor(data,medico,especialidade){
        this.#data = data
        this.#medico = medico
        this.#especialidade = especialidade
    }

    get data(){
        return this.#data.split('-').reverse().join('/')
    }

    get medico(){
        return this.#medico
    }

    get especialidade(){
        return this.#especialidade
    }
}   