//fazemos as configurações do nosso express

const express = require('express')
const consign = require('consign')


module.exports = ()=> {
    const app = express()
    //configura o app
    consign()
        .include('controller')
            .into(app)
    return app
}