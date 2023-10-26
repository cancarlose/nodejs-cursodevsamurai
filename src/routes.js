// Importação
const { Router } = require("express"); // sistema de rotas do express.
const routes = new Router(); // possibilidade de ter as rotas

// Requirindo o controller
const customers = require("./app/controller/CustomersController");

// Agora, controller responsável pelos métodos
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

module.exports = routes; // exportação