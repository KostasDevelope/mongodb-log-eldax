const express = require('express');
const swaggerUi = require('swagger-ui-express')
const fs = require('fs');

const swaggerDocument = JSON.parse(fs.readFileSync('./output.json'));
const SwaggerRoutes = express.Router();
SwaggerRoutes.use('/', swaggerUi.serve);
SwaggerRoutes.get('/', swaggerUi.setup(swaggerDocument));
module.exports = SwaggerRoutes;
