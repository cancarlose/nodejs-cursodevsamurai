// Criando e Manipulando CRUD Básico

// Criando servidor ExpressJS
const express = require("express");
const server = express();

server.use(express.json());

// Array Customers
let customers = [
    { id: 1, name: "Facebook", site: "http://facebook.com"},
    { id: 2, name: "Google", site: "http://google.com"},
    { id: 3, name: "UOL", site: "http://uol.com.br"}
];

// Método de captura dos customers
server.get("/customers", (req, res) => {
    return res.json(customers);
});

// Método de captura de forma mais especifica
server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id); 
    const status = customer ? 200 : 404;

    console.log("GET :: /customers/id ", JSON.stringify(customer));

    return res.status(status).json(customer);
});


// Criação de novo custormer
server.post("/customers", (req, res) => {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});


// Método de atualização de customers
server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: parseInt(id), name, site };
    };

    return res.status(status).json(customers[index]);
});


// Método de exclusão de customer
server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

server.listen(3173);