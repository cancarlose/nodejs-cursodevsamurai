// Importação
const { Router } = require("express"); // sistema de rotas do express.
const routes = new Router(); // possibilidade de ter as rotas

routes.get("/hello", (req, res) => {
    return res.json({ message: "Hello World"});
});

module.exports = routes; // exportação