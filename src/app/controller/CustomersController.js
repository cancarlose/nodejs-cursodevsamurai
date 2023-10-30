const customers = [
  { id: 1, name: "Facebook", site: "http://facebook.com" },
  { id: 2, name: "Google", site: "http://google.com" },
  { id: 3, name: "UOL", site: "http://uol.com.br" },
]

class CustomersController {
  // Listagem dos Customers
  index(req, res) {
    return res.json(customers)
  }

  // Recupera um Customer
  show(req, res) {
    const id = parseInt(req.params.id)
    const status = customers ? 200 : 404
    const customer = customers.find((item) => item.id === id)

    console.log('GET :: /customers/id ", JSON.stringify(customer)')

    return res.status(status).json(customer)
  }

  // Cria um novo Customer
  create(req, res) {
    const { name, site } = req.body

    const id = customers[customers.length - 1].id + 1
    const newCustomer = { id, name, site }
    customers.push(newCustomer)

    return res.status(201).json(newCustomer)
  }

  // Atualiza um Customer
  update(req, res) {
    const id = parseInt(req.params.id, 10)
    const { name, site } = req.body

    const index = customers.findIndex((item) => item.id === id)
    const status = index >= 0 ? 200 : 404

    if (index >= 0) {
      customers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(customers[index])
  }

  // Exclui um Customer
  destroy(req, res) {
    const id = parseInt(req.params.id, 10)
    const index = customers.findIndex((item) => item.id === id)
    const status = index >= 0 ? 200 : 404

    if (index >= 0) {
      customers.splice(index, 1)
    }

    return res.status(status).json()
  }
}

export default new CustomersController()
