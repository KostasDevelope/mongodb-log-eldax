const express = require('express');
const cors = require('cors');
const https = require( 'https');
const fs = require('fs');
const nconf = require('nconf');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie-routes');  


nconf.argv().env().file({ file: 'config.json' });
const port = nconf.get('port');
const serverkey = nconf.get('server-key') || '';
const servercrt = nconf.get('server-crt') || '';
const urlmongodb = nconf.get('url-mongodb');

const app = express();

app.use(cors());
app.use(express.json());

app.use(MovieRoutes);

let swaggerOptions = {
  definition: {
    openapi: '3.0.0',  
    info: {
          title: 'Mongo Db REST API',
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

if( serverkey != '' && servercrt != ''){
      let httpsOptions = {
              key: fs.readFileSync(erverkey),
              cert: fs.readFileSync(servercrt)
            };
 
    https.createServer(httpsOptions, app).listen(port);
} else {
   app.listen(port,(error)=> error ? console.log(error) : console.log(`Listening port: ${port}`));
}

mongoose.connect(urlmongodb)
  .then(()=> console.log(`Connected to MongoDb`))
  .catch((error) => console.log(`Connected error ${error}`));
