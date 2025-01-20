const Movie = require('../models/movie');
const hendleError = (res,error) => { res.status(500).json(error); };

const getMovies = (req,res) =>
{
    Movie.find().sort({title : -1}).then((movies)=>{
        res.status(200).json(movies);
        })
        .catch((error)=>  hendleError(res, error )); 
};

const getMovies2 = async (req,res) =>
    {
        try {
            let movies = await Movie.find().sort({title : -1});
            res.status(200).json(movies);
        } catch(error){
            hendleError(res, error);
        } 
    };

const searchMovies = (req,res) =>
    {
        let options = {};
        if (req.params.search) {
            options = {
                ...options,
                $or: [
                    { title: new RegExp(req.params.search.toString(), 'i')},
                    { director : new RegExp(req.params.search.toString(), 'i')}
                ]
            }
        }
        Movie.countDocuments(options)
            .then((total) => {
                let page = parseInt(req.params.page) || 1; 
                let limit = parseInt(req.params.limit) || parseInt(total);
                let last_page = Math.ceil(parseInt(total)/limit);
                if (last_page < 1 && total > 0) last_page = 1
                Movie
                    .find(options)
                    .sort({title : -1})
                    .skip((page - 1) * limit)
                    .limit(limit)
                    .then((movies) => {
                        let result = {
                            success: true,
                            data: movies,
                            total: total.toString(),
                            page: page.toString(),
                            last_page: last_page.toString(),
                        };
                        res.status(200).json(result);
                    }).catch((error)=>  hendleError(res, error ));
            }).catch((error)=>  hendleError(res, error ));    
    };

const searchMovies2 = async (req,res) =>
    {
        try {
            let options = {};
            if (req.params.search) {
                options = {
                    ...options,
                    $or: [
                        { title: new RegExp(req.params.search.toString(), 'i')},
                        { director : new RegExp(req.params.search.toString(), 'i')}
                    ]
                }
            }
            
            let total = await Movie.countDocuments(options);
                    
            let page = parseInt(req.params.page) || 1; 
            
            let limit = parseInt(req.params.limit) || parseInt(total);
            
            let last_page = Math.ceil(parseInt(total)/limit);
            
            if (last_page < 1 && total > 0) last_page = 1
            
            let movies = await Movie.find(options)
                .sort({title : -1})
                .skip((page - 1) * limit)
                .limit(limit);
                
            let result = {
                success: true,
                data: movies,
                total: total.toString(),
                page: page.toString(),
                last_page: last_page.toString(),
            };

            res.status(200).json(result);
                        
        } catch(error){    
            hendleError(res, error );    
        }    
    };

const getMovie = (req,res) =>
    {
        Movie.findById(req.params.id)
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
    getMovies2,
    getMovie,
    deleteMovie,
    postMovie,
    patchMovie,
    searchMovies,
    searchMovies2
};
