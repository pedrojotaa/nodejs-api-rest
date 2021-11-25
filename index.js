const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')

conexao.connect(erro=> {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso!')

        const app = customExpress()
        app.listen(3000, ()=> console.log('Voce esta logado na porta 3000'))
    }
})