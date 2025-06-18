export default class Pessoa{
    #cpf
    #nome
    #dataNascimento

    constructor(cpf,nome="anônimo",dataNascimento="sem limites"){
        this.#cpf = cpf
        this.#nome = nome
        this.#dataNascimento = dataNascimento
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(cpf){
        this.#cpf = cpf
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get dataNascimento(){
        return  this.#dataNascimento.split('-').reverse().join('/')
    }

    set dataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento
    }

    get idade(){
        const nascimento = new Date(this.#dataNascimento)

        const atual = new Date()

        const idade = Math.floor((atual - nascimento) / (1000 * 3600 * 24 * 365))

        return idade
    }
}