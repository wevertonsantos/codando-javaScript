function jaRealizada (){
    return Promise.resolve('08330510')
}

function jaRejeitada (){
    return Promise.reject('Fui rejeitado')
}

function pegaCEP(cep){
    return fetch('https://viacep.com.br/ws/'+cep+'/json/')
}

function extraiCEP(data){
    return data.json()
}

function imprimeCEP(endereco){
    console.log(endereco)
}

function trataErro(erro){
    console.log('Algo deu errado', erro)
}

    function demora200ms(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('demora200ms')
            }, 200)
        }) 
    }

    function demora500ms(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('demora500ms')
            }, 500)
        }) 
    }

jaRealizada()
.then(pegaCEP)
.then(extraiCEP)
.then(imprimeCEP)
.catch(trataErro)
.finally(function(){
    console.log('Sempre executado')
})

Promise.all([
    pegaCEP('08330510'),
    jaRealizada()
]).then(function(valoresResolvido){
    console.log(valoresResolvido)
})

Promise.race([
    demora200ms(),
    demora500ms(),
    jaRejeitada()
]).then(function(promiseRace){
    console.log(promiseRace)
}, function(valorRejeitado){
    console.log(valorRejeitado)
})