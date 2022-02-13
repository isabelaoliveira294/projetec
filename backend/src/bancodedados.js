const conexao = require("./conexao")

/*Parte da tabela de cadastro (Preencher informações do Usuário) */

/*Createusuario*/
function createusuario(item){
    const sql = 'INSERT INTO usuario SET?'
   
    conexao.query(sql,item,(erro, resultados) => 
        {
            if(erro){
                console.log(erro)
                return erro
            }else{
                console.log(resultados)
                return resultados
            }
        }
    )
}
/*Getusuario*/
function getusuario(cpf){
    const sql = `SELECT * FROM usuario WHERE id=${cpf}`
    conexao.query(sql,(erro, resultados) => 
    {
        if(erro){
            console.log(erro)
            return erro
        }else{
            const item = resultados(0)
            console.log(resultados)
            
            return item
        }
    }
)}

/*listenusuario*/
function listenusuario(){
    const sql = 'SELECT * FROM usuario'
    conexao.query(sql,(erro, resultados) => 
        {
            if(erro){
                console.log(erro)
                return erro
            }else{
                console.log(resultados)
                return resultados
            }
        }
    )
}

/*editusuario*/
function editusuario(id,item){
    const sql = 'UPDATE usuario SET ? Where id =' + id.toString()
    conexao.query(sql, (erro,resultados) =>
        {
            if(erro){
               console.log(erro)
               return erro
           }
            else{
               console.log(resultados)
               return resultados
           }
        }
    )

    item[id].nome = item.nome
    item[id].cpf =item.cpf
    item[id].telefone =item.telefone
    item[id].endereco = item.endereco = item.endereco
    item[id].email = item.email = item.email
    item[id].senha = item.senha = item.senha

    return item[id];

}   


/*deleteusuario*/
function deleteusuario(id){
    const sql = " DELETE from usuario Where Id =" +id
    conexao.query(sql, (erro,resultados) =>
        {
            if(erro){
               console.log(erro)
               return erro
           }
            else{
               console.log(resultados)
               return resultados
           }
        }
    )
}

module.exports = {createusuario,getusuario,listenusuario,editusuario, deleteusuario}
