// requerindo o express
const express = require("express");
// criando o servidor
const server = express();

// criando uma rota
server.get("/hello", (req, res) => {
    return res.send("Hello World"); 
});


// localhost, endereço especial 127.0.0.1
server.listen(3000);

// portas comuns, 3000, 4000, 5000, 8000