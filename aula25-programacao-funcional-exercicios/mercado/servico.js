const produtos = [
    {'codigo':'1111','nome':'arroz','preco':'4.1','tipo':'cereal'},
    {'codigo':'1112','nome':'feijão','preco':'5.0','tipo':'leguminosa'},
    {'codigo':'1113','nome':'abacaxi','preco':'3.8','tipo':'fruta'},
]

function exibirProdutos(produtos){
    const lista = document.getElementById('lista');

    lista.innerHTML = '';
    
    produtos.forEach(obj => {

        const tr = document.createElement('tr');

        const codigo = document.createElement('td');
        const nome = document.createElement('td');
        const preco = document.createElement('td');
        const tipo = document.createElement('td');

        codigo.innerText =obj.codigo
        nome.innerText =obj.nome
        preco.innerText =obj.preco
        tipo.innerText =obj.tipo

        tr.appendChild(codigo);
        tr.appendChild(nome);
        tr.appendChild(preco);
        tr.appendChild(tipo);   
        
        lista.appendChild(tr);
    });
}

function limpaFormulario(){
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('tipo').value = '';
}

document.getElementById('cadastro').addEventListener('click',()=>{
    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const tipo = document.getElementById('tipo').value;

    produtos.map(obj => {
        if(obj.codigo === codigo){
            alert('código já cadastrado');
            throw new Error('código já cadastrado')
        }
    })

    produtos.push({'codigo': codigo,'nome':nome,'preco':preco,'tipo':tipo});

    exibirProdutos(produtos);
    limpaFormulario();
})

