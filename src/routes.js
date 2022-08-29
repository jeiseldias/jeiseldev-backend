const express = require('express');
const routes = express.Router();

const PortfolioController = require('./controllers/PortfolioController');

routes.get('/', (request, response) => {
    response.json({
        App: "BACKEND - jeisel.dev"
    })
});

routes.get('/portfolio', PortfolioController.index);
routes.post('/portfolio', PortfolioController.create);

module.exports = routes;