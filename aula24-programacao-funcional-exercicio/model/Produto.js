export default class Produto{

    #codigo
    #nome
    #preco
    #tipo

    constructor(codigo,nome,preco,tipo){
        this.#codigo = codigo
        this.#nome = nome
        this.#preco = Number.parseFloat(preco)
        this.#tipo = tipo
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
    
    get preco(){
        return this.#preco
    }

    set preco(preco){
        this.#preco = preco
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(tipo){
        this.#tipo = tipo
    }
}