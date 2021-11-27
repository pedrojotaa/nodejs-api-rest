const moment = require('moment')

const conexao = require('../infra/conexao')

class Atendimentos {
    adiciona(atendimentos, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH-MM-SS')
        const data = moment(atendimentos.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH-MM-SS')        
        const atendimentoDatado = {...atendimentos, dataCriacao, data}

        const sql = 'insert into atendimentos set ?'
            
        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
        
    }
}

module.exports = new Atendimentos