//faz o controle das nossas aplicações
const Atendimentos = require('../models/atendimentos')

module.exports = app =>{
    app.get('/atendimentos', (req, res)=> {
        res.send('Voce esta realizando um GET')
    })

    app.post('/atendimentos', (req, res)=> {
        const atendimentos = req.body

        Atendimentos.adiciona(atendimentos, res)
    })
}