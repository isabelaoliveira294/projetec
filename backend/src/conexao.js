const mysql = require('mysql');
const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: "root",
        password: 'Casa39447677',
        database: 'PIXBUS'
    }
)
module.exports = conexao