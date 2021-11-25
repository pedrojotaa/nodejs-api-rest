//faz o controle das nossas aplicações

module.exports = app =>{
    app.get('/atendimentos', (req, res)=> {
        res.send('Voce esta realizando um GET')
    })

    app.post('/atendimentos', (req, res)=> {
        //imprime no console o corpo da requisição
        console.log(req.body)
        res.send('Voce esta realizando um POST')
    })
}