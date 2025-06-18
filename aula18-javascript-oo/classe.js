class Pessoa{
    cpf
    nome
    idade
    cartao

    constructor(cpf,nome="anônimo",idade="sem limites"){
        this.cpf = cpf
        this.nome = nome
        this.idade = idade
        this.cartao = false
    }

    pedirCartao(){
        this.cartao = true
    }

    fazerCompras(valor){
        if(this.cartao) return valor - valor*0.1

        return valor;
    }
}

const p1 = new Pessoa('54323456','Alice',26)

p1.pedirCartao()

console.log('compras da Alice',p1.fazerCompras(200))

const p2 = new Pessoa('9876543','Luan','36')

console.log('compras do Luan',p2.fazerCompras(200))

const p3 = new Pessoa()

console.log(p1)
console.log(p2)
console.log(p3)
