const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const storageeSchema = new Schema({ 
   
});

const Storage = mongoos.model('Storage', storageSchema);
module.exports = Storage;