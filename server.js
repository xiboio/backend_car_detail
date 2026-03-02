const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend funcionando")
})

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001")
})

