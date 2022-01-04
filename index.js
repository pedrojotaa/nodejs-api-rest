const customExpress = require('./config/customExpress')
const conexao = require('./database/connection')
const Tabelas = require('./database/tables')

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