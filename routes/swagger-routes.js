const express = require('express');
const swaggerUi = require('swagger-ui-express')
const fs = require('fs');

const swaggerDocument =  JSON.parse(fs.readFileSync('./swagger/output.json'));
const SwaggerRoutes = express.Router();
SwaggerRoutes.use('/api-doc', swaggerUi.serve);
SwaggerRoutes.get('/api-doc', swaggerUi.setup(swaggerDocument));
module.exports = SwaggerRoutes;
