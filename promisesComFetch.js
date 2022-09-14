
// Exercício de Promises, utilizando fetch.
// Colhendo CEP e mostrando o endereço com uso de Promise

function realizada (){
    return Promise.resolve('01001000')
}

realizada().then(function(cep){
    return fetch('https://viacep.com.br/ws/'+cep+'/json/')
})
.then(function(data){
    return data.json()
})

.then(function(endereco){
    return new Promise (function(){
        console.log('Aguarde, o CEP irá ser mostrado em alguns segundos')
        setTimeout(function(){
            console.log(endereco)}, 5000)
    }) 
})
.catch(function(){
    return new Promise(function(){
    console.log('Aguarde, o CEP irá ser mostrado em alguns segundos')
        setTimeout(function(){
            console.log('Verifique os dados, aconteceu algo de errado')
        }, 5000)
    })
})