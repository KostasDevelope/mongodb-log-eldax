const express = require('express');
const { getMovies, getMovie, deleteMovie, postMovie, patchMovie, searchMovies } = require('../controllers/movie-controller');
const router = express.Router();

/**
 * @swagger
 * /movies:
 *   get:
 *     description: All movies
 *     responses:
 *       200:
 *         description: Returns all the /movies
 */
router.get('/movies', getMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The movie ID.
 *     description: Get a movie by id
 *     responses:
 *       200:
 *         description: Returns the requested movie
 */
router.get('/movies/:id',getMovie);   

/**
 * @swagger
 * /movies/{page}/{limit}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: page
 *        required: true
 *        type: int
 *        description: The page of movies.
 *      - in: path
 *        name: limit
 *        required: true
 *        type: int
 *        description: The limit of movies.
 *     description: Get a movies
 *     responses:
 *       200:
 *         description: Returns the requested movies
 */
router.get('/movies/:page/:limit',searchMovies);  

/**
 * @swagger
 * /movies/{search}/{page}/{limit}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: search
 *        required: true
 *        type: string
 *        description: The search of movies.
 *      - in: path
 *        name: page
 *        required: true
 *        type: int
 *        description: The page of movies.
 *      - in: path
 *        name: limit
 *        required: true
 *        type: int
 *        description: The limit of movies.
 *     description: Get a movies
 *     responses:
 *       200:
 *         description: Returns the requested movies
 */
router.get('/movies/:search/:page/:limit',searchMovies);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The movie ID.
 *     description: Delete a movie by id
 *     responses:
 *       200:
 *         description: Returns the requested 
 */
router.delete('/movies/:id',deleteMovie);


router.post('/movies',postMovie);

/**
 * @swagger
 * /movies/{id}:
 *   patch:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The movie ID.
 *     description: Patch a movie by id
 *     responses:
 *       200:
 *         description: Returns the requested 
 */
router.patch('/movies/:id',patchMovie);

module.exports = router;