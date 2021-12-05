//faz o controle das nossas aplicações
const Atendimentos = require('../models/atendimentos')

module.exports = app =>{
    app.get('/atendimentos', (req, res)=> {

        Atendimentos.lista(res)

    })

    app.get('/atendimentos/:id', (req, res)=> {

        const id = parseInt(req.params.id)

        Atendimentos.listaPorId(id, res)

    })

    app.post('/atendimentos', (req, res)=> {

        const atendimentos = req.body

        Atendimentos.adiciona(atendimentos, res)

    })
    
    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimentos.altera(id, valores, res)

    }) 

    app.delete('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimentos.deleta(id, res)

    })

}