const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend funcionando")
})

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001")
})

const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
})

connection.connect((err) =>{
    if (err) {
        console.error("Erro ao conectar", err)
        return
    }
    console.log("Conectado ao MySql")
})

app.post("/atendimentos", (req, res) => {

    console.log("Rota foi chamada")

    const {
        data,
        cpf,
        nome,
        contato,
        email,
        carro,
        placa,
        modelo,
        ano,
        cor,
        interior,
        plano,
        descricao,
        observacoes
    } = req.body

    const sql = 
    "INSERT INTO atendimentos(data, cpf, nome, contato, email, carro, placa, modelo, ano, cor, interior, plano, descricao, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    connection.query(sql, [
        data,
        cpf,
        nome,
        contato,
        email,
        carro,
        placa,
        modelo,
        ano,
        cor,
        interior,
        plano,
        descricao,
        observacoes
    ], (err, result) => {
        if (err) {
            console.error("Erro ao inserir", err)
            res.status(500).send("Erro ao salvar atendimento")
            return
        }

        res.send("Atendimento Salvo")
    })
})


app.get("/atendimentos/placa/:placa", (req, res) => {
     const placa = req.params.placa

     const sql = "SELECT * FROM atendimentos WHERE placa = ?"

     connection.query(sql, [placa], (err, results) =>{
        if (err) {
            console.error("Erro na busca", err)
            res.status(500).send("Erro ao buscar atendimentos")
            return
        }

        res.json(results)
     })
})
