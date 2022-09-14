export default dado => (`
    <ul>
    ${dado.map(pessoa => `<li> ${pessoa.nome} - ${pessoa.idade} <li>`).join('')}
    <ul>
`)