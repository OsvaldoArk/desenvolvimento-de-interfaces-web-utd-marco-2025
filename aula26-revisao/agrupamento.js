const alunos = [
    {'nome': 'Luana','idade': 21, 'curso': 'psicologia'},
    {'nome': 'Sara','idade': 23, 'curso':'psicologia'},
    {'nome': 'Paulo','idade': 29, 'curso': 'computacao'},
    {'nome': 'Emilia','idade': 32, 'curso': 'gastronomia'},
    {'nome': 'Antônio','idade': 20, 'curso': 'psicologia'},
    {'nome': 'Lucas','idade': 30, 'curso': 'eng. eletrica'},
    {'nome': 'Helena','idade': 30, 'curso': 'computacao'}
]

const agrupamento = alunos.reduce((grupo, aluno)=>{

    grupo[aluno.curso] = grupo[aluno.curso] || []
    
    grupo[aluno.curso].push(aluno);

    return grupo;

},{});


const teste = 100

const variavel = teste || 37;

console.log(agrupamento);