const express = require("express");
const server = express();

// http://localhost:5173/hello?nome=Carlos&idade=21 
// Query params = ?nome=Carlos&idade=21 -> consulta, são opcionais

// Criando a Rota 1
server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;
  
  return res.json({
    title: "Hello World" ,
    message: `Olá, ${nome} tudo bem com você?`,
    idade: idade 
  });
}); // FORMA DE PEGAR TODOS

// http://localhost:5173/hello/Carlos
// Parâmetros integrados a rota: Route params = /hello/:nome -> são obrigatórios

// Criando a Rota 2
server.get("/hello/:nome", (req, res) => {
  const { nome } = req.params.nome;

  return res.json({
    title: "Hello World" ,
    message: `Olá, ${nome} tudo bem?`
  });
}); // FORMA DE PEGAR UM EM ESPECIFICO

// Local Host 127.0.0.1
server.listen(5173);
// Portas comuns, 3000, 4000, 5000, 8000