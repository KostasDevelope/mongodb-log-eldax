const { join } = require('path')
const swaggerAutogen = require('swagger-autogen')

 const doc = {
    info: {
      title: 'MongoDB API',
      description: 'MongoDB API'
    },
    host: 'localhost:3000'
  };

const outputFile = join(__dirname, '../output.json')
const endpointsFiles = [join(__dirname, '../index.js')]

swaggerAutogen(outputFile, endpointsFiles, doc).then(({ success }) => {
 console.log(`Generated: ${success}`)
})

//https://habr.com/ru/companies/timeweb/articles/594081/