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
              key: fs.readFileSync(serverkey,'utf8'),
              cert: fs.readFileSync(servercrt,'utf8')
            };
 
     const apphttps = https.createServer(httpsOptions, app);
     apphttps.listen(port,(error)=> error ? console.log(error) : console.log(`Listening port: ${port}`));
} else {
   app.listen(port,(error)=> error ? console.log(error) : console.log(`Listening port: ${port}`));
}

mongoose.connect(urlmongodb)
  .then(()=> console.log(`Connected to MongoDb`))
  .catch((error) => console.log(`Connected error ${error}`));


  //https://stepansuvorov.com/blog/2012/09/%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC-https-%D0%BD%D0%B0-node-js-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-express/
  //https://ru.stackoverflow.com/questions/1416128/%D0%BA%D0%B0%D0%BA-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D1%82%D1%8C-https-node-express-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80-%D0%B1%D0%B5%D0%B7-%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%B0
//https://stackoverflow.com/questions/11744975/enabling-https-on-express-js