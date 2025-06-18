const produtos = [
    {'codigo':'1111','nome':'arroz','preco':'4.1','tipo':'cereal'},
    {'codigo':'1112','nome':'feijão','preco':'5.0','tipo':'leguminosa'},
    {'codigo':'1113','nome':'abacaxi','preco':'3.8','tipo':'fruta'},
    {'codigo':'1114','nome':'abacate','preco':'7.0','tipo':'fruta'},
    {'codigo':'1115','nome':'banana','preco':'3.6','tipo':'fruta'},
    {'codigo':'1116','nome':'aveia','preco':'6.0','tipo':'cereal'},
    {'codigo':'1117','nome':'milho','preco':'3.0','tipo':'cereal'},
    {'codigo':'1118','nome':'castanha','preco':'8.5','tipo':'semente'},
    {'codigo':'1119','nome':'grão-de-bico','preco':'9.3','tipo':'leguminosas'},
    {'codigo':'1120','nome':'creme dental','preco':'5.3','tipo':'higiene'},
    {'codigo':'1121','nome':'sabonete','preco':'4.0','tipo':'higiene'},
    {'codigo':'1122','nome':'shampoo','preco':'14.2','tipo':'higiene'},
    {'codigo':'1123','nome':'desodorante','preco':'6.1','tipo':'higiene'}
]

const produtosNomeTipo = produtos.map(({nome, tipo}) => [nome, tipo]);

const filtro = 'higiene'

produtos.filter(({tipo}) => tipo === filtro).forEach(obj => console.log(obj));


const total = produtos.reduce((total,produto)=> total+=Number.parseFloat(produto.preco),0);

console.log(total);