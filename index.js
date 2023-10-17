const express = require("express");
const server = express();

// Criando a Rota
server.get("/hello", (req, res) => {
  return res.send("Hello World")
});


// Local Host 127.0.0.1
server.listen(5173);
// Portas comuns, 3000, 4000, 5000, 8000