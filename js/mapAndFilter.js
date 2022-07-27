//Filtrar pelos números pares depois com novo array
//com múltiplos de 2, utilizar o map para dividir por 2

const numeros = [2, 3, 6, 5, 10]

const filterMap = numeros.
filter((num) => (num % 2 === 0))
.map((num) => (num * 2))

console.log(filterMap)
