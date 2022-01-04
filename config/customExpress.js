//body-parser faz o parse das requisições para que possamos ler

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    //aplicação ja pode receber dados json e urlencoded
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    consign()
        .include('controller')
            .into(app)
    return app
}