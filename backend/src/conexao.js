const mysql = require('mysql');
const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'A59#Bsf59%wp',
        database: 'BACK_END'
    })
module.exports = conexao