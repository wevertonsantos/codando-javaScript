import { agrupaPorMaiorEMenor } from "./modules/utils"
import PessoasMock from "./mock/pessoas"
import Lista from "./components/list"


// document.querySelector('#idade').innerHTML = agrupaPorMaiorEMenor()
const { maiores, menores } = agrupaPorMaiorEMenor(PessoasMock)

const html = `
<h3> Maiores </h3>
${Lista(maiores)}
<h3> Menores </h3>
${Lista(menores)}
`
document.querySelector('#app').innerHTML = html