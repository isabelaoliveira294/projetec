const conexao = require("./conexao");

const sequence = {
  _id: 0,
  increaseId() {
      return this._id = this._id + 1;
  }
}
var items = []

function createItem(item){
    const sql = "INSERT INTO Item SET ?"
    conexao.query(sql,item, (erro, resultados) =>
      {
         if(erro){
            console.log(erro)
            return erro
        }
         else{
            console.log(resultados)
            return resultados
        }}
    )}

function getItem(id){
    const sql = "SELETC * FROM Item WHERE id =" + id.toString()
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
    item[id].email = item.email = item.email
    item[id].endereco = item.endereco = item.endereco
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

module.exports = {createItem, getItem, listitems, edititems, deleteitems}





