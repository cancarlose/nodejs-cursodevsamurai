// Requerimento do ExpressJS
import express from "express";
// trazendo as rotas
import routes from "./routes.js";
// Parte de importação acima ^

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
export default new App().server;// Dessa forma, exportamos esse módulo.