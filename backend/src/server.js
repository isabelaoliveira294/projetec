const port = 5000
const express = require('express')
const bd = require('./bancodedados')
const app = express()
const conexao = require('./conexao')

conexao.connect(
    erro => {
        if(erro){
            console.log('Erro de conexão com o BD.')
            console.log(erro)
        }else{
            const app = express()

            app.use(express.json())

            app.listen(port, () => {
                console.log(`Servidor iniciado!Porta:z ${port}`)
            })

            app.get('/items', (req, res, next) => {
                 res.status(200).json(bd.listitems())
            })

            app.get('/items/:id', (req, res, next) => {
                if(req.params.id){
                    res.send(bd.getItem(id))
                }else{
                    console.log("Usuário não encontrado!")
                }   
            })

            app.post('/usuario', (req, res, next) => {
                const item = bd.createItem({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    telefone: req.body.telefone,
                    endereco: req.body.endereco,
                    email: req.body.email,
                    senha: req.body.senha,
                    confirmar_senha: req.body.confirmar_senha
                });
                res.send(item)
                /*
                if(senha==confirmar_senha){
                    res.send(item)
                }
                else{
                    const resultado = bd.senhaincorreta(cpf)
                    res.send (resultado);
                }
                */
            })

            app.put('/items/:id', (req, res, next) =>{
                if(req.params.id){
                    const items = bd.edititems(req.params.id, {
                        nome: req.body.nome,
                        email: req.body.email,
                        endereco: req.body.endereco
                    });
                    res.send(items);
                }else{ 
                    console.log("Usuário não encontrado!")
                }
            })
            app.delete('/items/:id', (req, res, next)=>{
                const id = parseInt(req.params.id)
               const resultado =  bd.deleteitems(id) 
                res.send(resultado);
            }
        )
    }
});
