const mysql = require('mysql2')

//criando a conexão do banco de dados com a api
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda_petshop'
})

module.exports = conexao