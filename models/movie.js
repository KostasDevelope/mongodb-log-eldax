const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const movieSchema = new Schema({ 
    title : {
        type: String,
        required: true
    },
    director : {
        type: String,
        required: true
    },
    year : {
        type: Number,
        required: true
    },
    genres : [String],
    rating: Number,
    duration:{
        hours: Number,
        minutes: Number
    },
    reviwes :[{
        name: String,
        text: String
    }]
});

const Movie = mongoos.model('Movie', movieSchema);
module.exports = Movie;