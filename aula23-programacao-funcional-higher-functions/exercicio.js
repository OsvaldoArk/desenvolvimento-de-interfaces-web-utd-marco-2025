const filmes = [
    {protagonista: 'Alladin', filme: 'Alladin e a Lâmpada Mágica',genero: ['aventura']},
    {protagonista: 'Soluço',filme: 'Como treinar seu dragão', genero: ['comédia','aventura']},
    {protagonista: 'Neo',filme: 'Matrix', genero: ['ação','ficção científica']},
    {protagonista: 'Sarah Connors',filme: 'Exterminador do Futuro', genero: ['ação','terror','ficção científica']},
    {protagonista: 'Jack Skellington',filme: 'O estranho mundo de Jack',genero:['comédia','aventura']},
]
/*
const acao = filmes.filter(filme => {
    const genero = filme.genero;

    for(let g of genero){
        if(g.includes('comédia')){
            return filme;
        }
    }
})

console.log(acao);
*/
filmes.filter(({genero})=> genero.includes('aventura')).forEach(filme=>console.log(filme));
