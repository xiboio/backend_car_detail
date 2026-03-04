const express = require("express")
const mysql = require("mysql2")


const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend funcionando")
})

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001")
})



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "murilo02",
    database: "oficina"
})

connection.connect((err) =>{
    if (err) {
        console.error("Erro ao conectar", err)
        return
    }
    console.log("Conectado ao MySql")
})

