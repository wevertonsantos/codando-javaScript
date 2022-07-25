// Passar um array como parâmetro utilizando uma função 
// Essa função vai retornar a soma de todos os valores desse array.

function somaTudo(numeros) {
    total = 0
    for (let num of numeros){
        total = total + num
    }
    return total
}

let resultado = somaTudo([3,5,7,10,9,12])
console.log(resultado)
