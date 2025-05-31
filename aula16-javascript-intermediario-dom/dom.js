const root = document.getElementById('root');

console.log(root)

const linguagem = 'Javascript'

root.innerHTML = `<h1>Manipulando o HTML usando ${linguagem}</h1>`

document.getElementById("executar").addEventListener('dblclick',()=>{
    const musica = document.getElementsByName('musica')[0].value
    
    const lista = document.getElementById('lista');

    const item = document.createElement('li');

    item.innerText = musica;

    lista.appendChild(item);
})

document.getElementById('excluir').addEventListener('click',()=>{
    const lista = document.getElementById('lista');

    const filhos = lista.children

    const li = []

    for(let i of filhos){
        li.push(i)
    }

    console.log(li)

    li.forEach(i=> lista.removeChild(i))
});

document.getElementById("limpar").addEventListener('click',()=>{
    const lista = document.getElementById('lista');

    lista.innerHTML = '';
})



