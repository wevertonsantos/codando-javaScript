/* Fazer um algorítmo imprimir de 0 a 100 e toda vez que o contador
for múltiplo de 3 imprimir PING, se for múltiplo de 5 imprime PONG e 
toda vez que for múltiplo de 3 e 5 imprime PING PONG */


i = 0

while (i < 100) {
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} - PING PONG`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} - PING`)
    }else if (i % 5 === 0){
        console.log(`${i} - PONG`)
    }
    ++i
}