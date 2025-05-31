var soma = 0
//1+1/2+1/3+1/4+5+6+7...+100
//1 + 1/2 + 1/3 + 1/4 ... 1/100
for(var contador = 1; contador<=100;contador++){
    soma+=1/contador
}

console.log(soma)