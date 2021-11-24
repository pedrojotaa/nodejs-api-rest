//faz o controle das nossas aplicações

module.exports = app =>{
    app.get('/atendimentos', (req, res)=> {
        res.send('Voce esta realizando um GET')
    })

    app.post('/atendimentos', (req, res)=> {
        res.send('Voce esta realizando um POST')
    })
}