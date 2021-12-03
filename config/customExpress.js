//fazemos as configurações do nosso express
//body-parser faz o parse das requisições para que possamos ler

//biblioteca externa
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = ()=> {
    const app = express()

    //fazemos o uso da biblioteca
    //aplicação ja pode receber dados json e urlencoded
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    //configura o app
    consign()
        .include('controller')
            .into(app)
    return app
}