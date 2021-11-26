const customExpress = require('./config/customExpress')
//referente a conexao no DB
const conexao = require('./infra/conexao')
//referente a criação da nossa tabela no DB
const Tabelas = require('./infra/tabelas')

conexao.connect(erro=> {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso!')

        Tabelas.init(conexao)

        const app = customExpress()
        app.listen(3000, ()=> console.log('Voce esta logado na porta 3000'))
    }
})