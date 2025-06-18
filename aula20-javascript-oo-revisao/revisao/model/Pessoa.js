export default class Pessoa{

    #nome
    #idade

    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get idade(){
        return this.#idade
    }

    set idade(idade){
        this.#idade = idade
    }
}