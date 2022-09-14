// Criar um programa para mostrar a posição do usuário,
// ir para o próximo usuário e anterior, quando eu definir uma posição
// retorna o usuário da sua devida posição

let usuarios = [{
    nome: 'Ayrton',
    idade: 23
    },
    {
    nome: 'Maria',
    idade: 18
    },
    {
    nome: 'João',
    idade: 21
    }
]

let usuario = {
    posicao: 0,
    get atual (){
        return usuarios[this.posicao]
    },
    set atual (posicao){
        this.posicao = posicao
    },
    proximo(){
        ++this.posicao
    },
    anterior(){
        --this.posicao
    }
}

console.log(usuario.atual)
usuario.proximo()

console.log(usuario.atual)
usuario.proximo()

console.log(usuario.atual)
usuario.anterior()

console.log(usuario.atual)

usuario.atual = 0
console.log(usuario.atual)
usuario.atual = 2
console.log(usuario.atual)

