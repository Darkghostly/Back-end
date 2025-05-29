import express from 'express'

const app = express()
app.use(express.json())

const user = []

app.post('/users', (req, res) => {

    user.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(user)
})

app.listen(3000)


/*
1 tipo de rota / Método HTTP
2 Endereço
Objetivo: Criar API de usuários
-criar usuário
-listar todos os usuários
editar um usuário
deletar um usuário

HTTP Status
2xx -> Sucesso
4xx -> Erro cliente (front)
5xx -> Erro servidor (Back)
*/