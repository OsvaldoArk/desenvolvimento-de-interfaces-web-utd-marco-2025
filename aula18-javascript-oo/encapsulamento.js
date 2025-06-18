class Aluno{
    #matricula
    #nome
    #dataNascimento
    #senha
    #curso

    constructor(matricula,nome,dataNascimento,senha,curso){
        this.#matricula = matricula
        this.#nome = nome
        this.#dataNascimento = dataNascimento
        this.#senha = senha
        this.#curso = curso
    }

    get matricula(){
        return this.#matricula
    }

    set matricula(matricula){
        this.#matricula = matricula
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

    set senha(senha){
        this.#senha = senha
    }

    get curso(){
        return this.#curso
    }

    set curso(curso){
        this.#curso = curso
    }
}

class Curso{
    id
    nome
    turno

    constructor(id,nome,turno){
        this.id = id
        this.nome = nome
        this.turno = turno
    }
}

const a1 = new Aluno(12345678,'Helena','1994-07-16',88559911,new Curso(1,'Web Design', 'noite'));

a1.matricula = '00712345'
a1.nome = 'Helena Campos'
a1.dataNascimento = '1994-07-16'
a1.curso = new Curso(4,'Fullstack PHP','tarde')

console.log(a1.matricula," ",a1.nome," ",a1.dataNascimento," ",a1.idade," ",a1.curso)