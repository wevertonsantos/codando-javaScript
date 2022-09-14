//Retornar um novo array, utilizando o array numeros
//filtrando por números múltiplos de 2

const numeros = [2, 3, 6, 5, 10]

let multp2 = []

for (i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
       multp2.push(numeros[i])
    }
}

console.log(multp2)

// Com filter

const numerosFiltrados = numeros.filter(function(num){
    return num % 2 === 0
})


console.log(numerosFiltrados)

// Arrow Function com Filter

const numerosFiltrados2 = numeros.filter((num) => (num % 2 === 0))
console.log(numerosFiltrados2)