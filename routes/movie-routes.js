const express = require('express');
const { getMovies, getMovie, deleteMovie, postMovie, patchMovie, searchMovies } = require('../controllers/movie-controller');
const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:page/:limit',searchMovies);  
router.get('/movies/:search/:page/:limit',searchMovies);
router.get('/movies/:id',getMovie);     
router.delete('/movies/:id',deleteMovie);
router.post('/movies',postMovie);
router.patch('/movies/:id',patchMovie);

module.exports = router;