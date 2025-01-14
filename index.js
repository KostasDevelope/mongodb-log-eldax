const express = require('express');
const cors = require('cors');
const nconf = require('nconf');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie-routes');  


nconf.argv().env().file({ file: 'config.json' });

const port = nconf.get('port');;
const url = nconf.get('url-mongodb');
const app = express();

app.use(cors());
app.use(express.json());

app.use(MovieRoutes);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',  
    info: {
          title: 'Momgo Db REST API',
          description: "A REST API built with Express and MongoDB. This API provides movie catchphrases and the context of the catchphrase in the movie."
      },
  },
  apis: [ './routes/*.js'] 
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocument);
});

app.listen(port,(error)=> error ? console.log(error) : console.log(`Listening port: ${port}`));

mongoose.connect(url)
  .then(()=> console.log(`Connected to MongoDb`))
  .catch((error) => console.log(`Connected error ${error}`));
