const Movie = require('../models/movie');
const hendleError = (res,error) => { res.status(500).json(error); };

const getMovies = (req,res) =>
{
    Movie
        .find()
        .sort({title : -1})
        .then((movies)=>{
        res.status(200).json(movies);
        })
        .catch((error)=>  hendleError(res, error )); 
};

const getMovie = (req,res) =>
    {
        Movie
            .findById(req.params.id)
            .then((movie)=>{
                res.status(200).json(movie);
            })
            .catch((error)=>  hendleError(res, error )); 
    };

const deleteMovie = (req,res) =>
    {
        Movie
            .findByIdAndDelete(req.params.id)
            .then((result)=>{
            res.status(200).json(result);
            })
            .catch((error)=>  hendleError(res, error )); 
    }; 

const postMovie = (req,res) =>
    {
        const movie = new Movie(req.body);
            movie.save()
            .then((result)=>{
            res.status(201).json(result);
            })
            .catch((error)=>  hendleError(res, error )); 
    }; 

    
const patchMovie = (req,res) =>
    {
        Movie
            .findByIdAndUpdate(req.params.id, req.body)
            .then((result)=>{
            res.status(200).json(result);
            })
            .catch((error)=>  hendleError(res, error )); 
    }; 
        

module.exports = {
    getMovies,
    getMovie,
    deleteMovie,
    postMovie,
    patchMovie
};
