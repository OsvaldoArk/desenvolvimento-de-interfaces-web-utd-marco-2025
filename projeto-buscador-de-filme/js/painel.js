export function criaPainel(painel, filme){

    const [titulo,ano,lancamento,duracao,poster] = painel.children;

    titulo.innerHTML = `<h1>${filme.Title}</h1>`
    ano.innerHTML = `<p>${filme.Year}</p>`
    lancamento.innerHTML = `<p>${filme.Released}</p>`
    duracao.innerHTML = `<p>${filme.Runtime}</p>`


    poster.innerHTML = `<img id='poster' src=${filme.Poster} />`
}