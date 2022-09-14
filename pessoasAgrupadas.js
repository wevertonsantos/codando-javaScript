// Passar um array de objetos (pessoas), onde cada objeto vai ter um nome
// e idade da pessoa, e o reduce retorna um objeto onde vai ter a chave maiores
// onde vai ser um array com as pessoas maiores de idade e chave menores
// com pessoas menores de idade

const pessoas = [
    {
        nome: 'Weverton',
        idade: 19
    },
    {
        nome: 'Carlos',
        idade: 50
    },
    {
        nome: 'Maria',
        idade: 14
    },
    {
        nome: 'Lucas',
        idade: 13
    },
    {
        nome: 'Pedro',
        idade: 12
    },
    {
        nome: 'Anderson',
        idade: 12
    }
]

const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray){
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
    valorAcumulador[propMaiorOuMenor].push(valorArray)
    return valorAcumulador
}, {maiores: [], menores:[]})

console.log('Pessoas Agrupadas:', pessoasAgrupadas)

