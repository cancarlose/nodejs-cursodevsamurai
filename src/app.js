// Requerimento do ExpressJS
const express = require("express");
// trazendo as rotas
const routes = require("./routes.js");
// Parte de importação (require) acima ^

class App {
    constructor() {
        // criação do servidor expressJS
        this.server = express();
        // invocação dos métodos
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // midleware que se permite trabalhar com json
        this.server.use(express.json());
    }

    routes() {
        // trazendo o arquivo das rotas
        this.server.use(routes);
    }
}; // Classe onde vai conter nossa lógica.


// sempre que importar algo com require, tudo no export sera retornado.
module.exports = new App().server;// Dessa forma, exportamos esse módulo.