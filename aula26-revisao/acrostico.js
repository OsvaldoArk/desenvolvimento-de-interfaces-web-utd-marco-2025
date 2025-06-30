const verso = ['colosso de poesia', 'ou a mais terna doçura', 'retrata a realidade', 'do nordeste e da cultura', 'encanta por onde passa', 'liberta pela leitura'];

const palavra = verso.map(verso => verso.charAt(0)).reduce((acrostico, letra)=> acrostico+letra,'');

console.log(palavra);

const input = "George Raymond Richard Martin";

const resposta = input.split(" ").map((nome,indice) => {
    console.log(indice);
    return nome.charAt(0);
}).reduce((resultado, letra)=> resultado.concat(letra),'');

console.log(resposta);