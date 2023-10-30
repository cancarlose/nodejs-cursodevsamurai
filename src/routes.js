// Importação
import { Router } from "express" // sistema de rotas do express.
// Requirindo o controller
import customers from "./app/controller/CustomersController"

const routes = new Router() // possibilidade de ter as rotas

// Agora, controller responsável pelos métodos
routes.get("/customers", customers.index)
routes.get("/customers/:id", customers.show)
routes.post("/customers", customers.create)
routes.put("/customers/:id", customers.update)
routes.delete("/customers/:id", customers.destroy)

export default routes // exportação
