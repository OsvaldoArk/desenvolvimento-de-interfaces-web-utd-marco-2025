class Produto{
    #codigo
    #nome
    #tipo
    #preco

    constructor(codigo,nome,tipo,preco){
        this.#codigo = codigo
        this.#nome = nome
        this.#tipo = tipo
        this.#preco = preco
    }

    get codigo(){
        return this.#codigo
    }

    set codigo(codigo){
        this.#codigo = codigo
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(tipo){
        this.#tipo = tipo
    }

    get preco(){
        return this.#preco
    }

    set preco(preco){
        this.#preco = preco
    }
}

const p1 = new Produto(65432,'pão','consumível',8.00)

console.log(p1.codigo," ",p1.nome," ",p1.tipo," ",p1.preco)