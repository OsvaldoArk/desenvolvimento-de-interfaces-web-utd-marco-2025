import { chave } from "./chave.js";
import { criaPainel } from "./painel.js";

document.querySelector('#buscar').addEventListener('click',()=>{

    const titulo = document.querySelector('#titulo').value
    
    const url = `http://www.omdbapi.com/?apikey=${chave}&t=${titulo}`

    const painel = document.querySelector('#painel');

    fetch(url).then(resposta => resposta.json())
            .then(dado => criaPainel(painel,dado))
            .catch(erro => console.log(erro));    

});
