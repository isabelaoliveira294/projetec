const port = 3006
const express = require('express')
const { process_params } = require('express/lib/router')
const bd = require('./bancodedados')
const conexao = require('./conexao')
const cors = require('cors')




conexao.connect(
    erro=> {
    if(erro) {
        console.log('Erro de conexão com o BD.')
        console.log(erro)
    } 
    else {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
        app.use(cors())
        app.listen(port, () => {
            console.log(`Servidor iniciado! Porta:z ${port}`)
        })
 
/*Parte da tabela de cadastro (Preencher informações do Usuário) */

        app.get('/usuario', (req, res, next) => {
            res.send(bd.listenusuario())
        })

        app.get('/usuario/:id', (req, res, next) => {
            const id = pareseInt(req.params.id)
            res.send(bd.getusuario(id))
        })

        app.post('/usuario',(req, res, next) => {
            console.log(req.body)
            const item = bd.createusuario({
                nome: req.body.nome,
                cpf: req.body.cpf,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                email: req.body.email,
                senha: req.body.senha   
            })
            res.send(item)
        })

        app.put('//:id', (req, res, next) =>{
            if(req.params.id){
                const items = bd.editusuario(req.params.id, {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    telefone: req.body.telefone,
                    endereco: req.body.endereco,
                    email: req.body.email,
                    senha: req.body.senha  
                });
                res.send(items);
            }else{ 
                console.log("Usuário não encontrado!")
            }
        })

        app.delete('/usuario/:id', (req, res, next)=>{
           const id = parseInt(req.params.id)
           const resultado =  bd.deleteusuario(id) 
           res.send(resultado);
        }
    )
}
/*Final das consultas para a tabela usuario */
});






