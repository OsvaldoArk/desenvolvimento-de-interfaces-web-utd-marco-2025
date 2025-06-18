export default class Cliente{

    #codigo
    #nome
    #cartao

    constructor(codigo,nome,cartao){
        this.#codigo = codigo
        this.#nome = nome
        this.#cartao = cartao
    }

    get codigo(){
        return this.#codigo
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get cartao(){
        return this.#cartao
    }

    set cartao(cartao){
        this.#cartao = cartao
    }
}