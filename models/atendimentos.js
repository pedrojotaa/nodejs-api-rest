const moment = require('moment')

const conexao = require('../database/connection')

class Atendimentos {
    adiciona(atendimentos, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimentos.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimentos.cliente.length >= 5
        
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                descricao: 'Data precisa ser maior ou igual a atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                descricao: 'Nome precisa ser maior ou igual a 5 caracteres'
            }
        ]

        const errors = validacoes.filter(campo => !campo.valido)
       
        let existemErrors = errors.length
       
        if(existemErrors){
            res.status(400).json(errors)
        }else{
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
}

module.exports = new Atendimentos