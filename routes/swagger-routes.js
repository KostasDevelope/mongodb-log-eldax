const express = require('express');
const swaggerUi = require('swagger-ui-express')
const fs = require('fs');

const swaggerDocument =  JSON.parse(fs.readFileSync('./swagger/output.json'));
const routerSwagger = express.Router();
routerSwagger.use('/api-doc', swaggerUi.serve);
routerSwagger.get('/api-doc', swaggerUi.setup(swaggerDocument));
module.exports = routerSwagger;
