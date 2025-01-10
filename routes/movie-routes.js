const express = require('express');
const { getMovies, getMovie, deleteMovie, postMovie, patchMovie } = require('../controllers/movie-controller');
const router = express.Router();

router.get('/movies', getMovies);  
router.get('/movies/:id',getMovie);     
router.delete('/movies/:id',deleteMovie);
router.post('/movies',postMovie);
router.patch('/movies/:id',patchMovie);

module.exports = router;