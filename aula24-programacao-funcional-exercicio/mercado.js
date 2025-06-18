import Produto from "./model/Produto.js";
import Cliente from "./model/Cliente.js";
import Compra from "./model/Compra.js";
import produtos from "./db/produtos.js";

//produtos.forEach(p => console.log('código: ',p.codigo,' nome: ',p.nome,' preço: ',p.preco,' tipo: ',p.tipo,'\n'))

const c1 = new Cliente('9990','Lúcia Andrade','bronze');

const comp1 = new Compra(c1);

function findByCodigo(codigo){
    return produtos.find(p=> p.codigo === codigo);
}

comp1.adicionarProduto(findByCodigo('1111'),5);
comp1.adicionarProduto(findByCodigo('1112'),4);
comp1.adicionarProduto(findByCodigo('1120'),2);
comp1.adicionarProduto(findByCodigo('1121'),5);

comp1.listarProdutos();
console.log('total: R$', comp1.calculaPrecoTotal());
