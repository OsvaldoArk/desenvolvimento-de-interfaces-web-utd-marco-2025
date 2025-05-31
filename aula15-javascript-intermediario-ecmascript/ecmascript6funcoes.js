function nomeDaFuncao(nome='estranho'){

    console.log("olá ",nome)
}

const nomeFlecha = (nome='estranho') => console.log("olá ",nome)

//nomeFlecha('Márcia')

function nomeDaFuncao02(nome){

    if(nome===undefined){
       throw new Error('a função precisa de pelo menos um valor') 
    }

    console.log("olá ",nome)
}

//nomeDaFuncao('Nayara')

//nomeDaFuncao()


function soma(numero01, numero02){
    return numero01 + numero02
}

function soma02(...numeros){

    let soma = 0

    for(let numero of numeros){
        soma+=numero
    }

    return soma
}

//console.log(soma(46,91))

//console.log(soma02(5,9,1,4,21,73,8,10))

const somaFlecha = (n01,n02) => n01+n02

//console.log(somaFlecha(50,37))

const somaFlecha02 = (...numeros) => {
    let soma = 0

    for(let numero of numeros){
        soma+=numero
    }

    return soma
}

console.log(somaFlecha02(5,9,1,4,21,73,8,10))