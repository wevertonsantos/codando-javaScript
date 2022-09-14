const objs = [
    {
        nome: 'Weverton',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profi:{
            profissao: 'Programador',
            empresa: 'Empresa X'
        },
        hobbies: ['Programar']
    },
    {
        nome: 'João',
        idade: 22,
        esta_trabalhando: false,
        detalhes_profi:{
            profissao: null,
            empresa: null
        },
        hobbies: ['Jogar', 'Academia']
    }
]

console.log(objs)

// Convert objeto para JSON
// Garante que o texto vai ser json válido
const jsonData = JSON.stringify(objs)

console.log(jsonData)

// Convert json para objeto

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) =>{
    console.log(pessoa.nome)
})