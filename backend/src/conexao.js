const mysql = require('mysql');
const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: "root",
        password: '34327660',
        database: 'web2'
    }
)
module.exports = conexao