const express = require('express')

const app = express()

app.listen(3000, ()=> console.log('Voce esta logado na porta 3000'))

app.get('/musica', (req, res)=> {
    res.send('Voce esta logado')
})