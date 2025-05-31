var nota01=8, nota02=8

var media = (nota01 + nota02) / 2

var presenca = 80

if(presenca >= 75){
    
    if(media >= 7 && media <=10){
        console.log("parabéns você foi aprovado(a) com média 1ª nota ",nota01," 2ª nota ",nota02," média ",media)
    }
    else if(media >= 3 && media < 7){
        console.log("recuperação")
        
        var recuperacao = 6
        
        var media_final = (media + recuperacao) /2 
        
        if(media_final >= 5){
            console.log("parabéns você foi aprovado(a) com conceito B e média ",media_final)
        }else{
            console.log("reprovado")
        }
    }
    else if(media < 3 && nota >= 0){
        console.log("você foi reprovado com média ",media)
    }
    else{
        console.log("nota inválida")
    }
}
else{
    console.log("você foi reprovado por falta");
}

