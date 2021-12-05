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

    lista(res){
        const sql = 'select * from atendimentos'

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(404).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listaPorId(id, res){
        const sql = `select * from atendimentos where id=${id}`

        conexao.query(sql, (erro, resultado) => {
            const atendimento = resultado[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res){

        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        const sql = 'update atendimentos set ? where id=?'

        conexao.query(sql, [valores, id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from atendimentos where id=?'

        conexao.query(sql, id, (erro, resposta) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new Atendimentos