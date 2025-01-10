const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie-routes');  
const SwaggerRoutes = require('./routes/swagger-routes');  

const port = 3000;
const url = 'mongodb://srvnt68-isrtsql:27017/moviebox';
const app = express();

app.use(cors());
app.use(express.json());

app.use(SwaggerRoutes);
app.use(MovieRoutes);

app.listen(port,(error)=> error ? console.log(error) : console.log(`Listening port: ${port}`));

mongoose.connect(url)
  .then(()=> console.log(`Connected to MongoDb`))
  .catch((error) => console.log(`Connected error ${error}`));