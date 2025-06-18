import Pessoa from './Pessoa.js'

export class Cliente extends Pessoa{

    #matricula
    #financiamento

    constructor(matricula,nome,idade){
        super(nome,idade)
        this.#matricula = matricula
    }

    get matricula(){
        return this.#matricula
    }

    set matricula(matricula){
        this.#matricula = matricula
    }

    get financiamento(){
        return this.#financiamento
    }

    pedirFinanciamento(valor){

        let juros = 0
        let numParcelas = 0
        let entrada = 0

        if(this.idade > 40){
            numParcelas = 240
            juros = 18
            entrada = valor * 0.3
        }
        else{
            numParcelas = 420
            juros = 9.5
            entrada = valor * 0.15
        }

        let total = valor - entrada;
        let tempo = numParcelas / 12

        let montante = total * juros * tempo /100

        let valorParcela = montante/numParcelas

        this.#financiamento = {'valor':valor,'entrada':entrada,'numeroParcelas': numParcelas,'tempo':tempo,'taxa':juros,'montante':montante,'valorParcela':valorParcela}

        return this.#financiamento
    }
}