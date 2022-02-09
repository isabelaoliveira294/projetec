const conexao = require("./conexao");

const sequence = {
  _id: 0,
  increaseId() {
      return this._id = this._id + 1;
  }
}
var items = []

/*Funções que precisam ser feitas para usuários:
- Criar usuário; feita
- Editar usuário; feita
- Excluir usuário; feita
- Informar dados do usuário; feita
- Login de usuário;
- Adicionar cartões para usuário;
* Listar usuário: feita, porém desnecessária

Funções que precisam ser feitas para cartões de ônibus:
- Adicionar cartão;
- Remover cartão;
- Adicionar crédito no cartão;
- 



*/ 

function createuser(user){
    const sql = "INSERT INTO Usuario SET ?"
    conexao.query(sql,item, (erro, resultados) =>
      {
         if(erro){
            console.log(erro)
            return erro
        }
         else{
             if(senha==confirmar_senha){
                console.log(resultados)
                return resultados
            }
            else{
                console.log("Senha não foi confirmada.")
                
            }
            
        }}
    )}

function getItem(id){
    const sql = "SELECT * FROM Item WHERE id =" + id.toString()
    conexao.query(sql, (erro,resultados) =>{
        if(err){
            console.log(erro)
            return erro
        }else{
            console.log(resultados)
             return resultados
        }
    })
    return items[id]
}

function listitems(){
    const sql = "SELECT * FROM Item"
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


function edititems(id,item){
    const sql = 'UPDATE Item SET ? Where id =' + id.toString()
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
    return item[id];

}   

function deleteitems(id){
    const sql = " DELETE from Item Where Id =" +id
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

/*function senhaincorreta(cpf){
    const sql = " DELETE from Item Where cpf =" +cpf
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
}*/

/*function login(email,senha,robo){
    const sql = "SELECT * FROM Item Where email =" +email.toString()
    conexao.querry(sql,(erro,resultados)=>
    {
        if(erro){
               console.log(erro)
               return erro
           }
            else{
                if(senha==item[id].senha)

               console.log(resultados)
               return resultados
           }

    }
    )

}*/



module.exports = {createItem, getItem, listitems, edititems, deleteitems/*,senhaincorreta*/}





