const input = "Every developer likes to mix kubernetes and javascript";

/*
const resposta = input.split(" ").map(palavra => {

    let quimera = '';

    if(palavra.length >= 4){
        quimera = palavra.charAt(0)+ (palavra.length -2).toString() + palavra.charAt(palavra.length -1);
    }
    else{
        quimera = palavra;
    }

    return quimera;
});
*/

const resposta = input.split(" ").map(palavra => palavra.length >= 4 ? 
       palavra.charAt(0)+ (palavra.length -2).toString() + palavra.charAt(palavra.length -1) :
       palavra
);

console.log(resposta);