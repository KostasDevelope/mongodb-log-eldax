const express = require('express');
const { getMovies, getMovie, deleteMovie, postMovie, patchMovie, searchMovies } = require('../controllers/movie-controller');
const router = express.Router();
//https://swagger.io/docs/specification/v3_0/describing-parameters/?sbsearch=parameters
//https://swagger.io/docs/specification/v3_0/describing-request-body/describing-request-body/
/**
 * @swagger
 * /movies:
 *   get:
 *     tags:
 *       - Movies
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
 *     tags:
 *       - Movies
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
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
 *     tags:
 *       - Movies
 *     parameters:
 *      - in: path
 *        name: page
 *        required: true
 *        schema:
 *          type: integer
 *        description: The page of movies.
 *      - in: path
 *        name: limit
 *        required: true
 *        schema:
 *          type: integer
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
 *     tags:
 *       - Movies
 *     parameters:
 *      - in: path
 *        name: search
 *        required: true
 *        schema:
 *          type: string
 *        description: The search of movies.
 *      - in: path
 *        name: page
 *        required: true
 *        schema:
 *          type: integer
 *        description: The page of movies.
 *      - in: path
 *        name: limit
 *        required: true
 *        schema:
 *          type: integer
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
 *     tags:
 *       - Movies
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The movie ID.
 *     description: Delete a movie by id
 *     responses:
 *       200:
 *         description: Returns the requested 
 */
router.delete('/movies/:id',deleteMovie);

/**
 * @swagger
 * /movies:
 *   post:
 *     tags:
 *       - Movies
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   director:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   genres:
 *                      type: array
 *                      items:
 *                        type: string
 *                   duration:
 *                       type: object
 *                       properties:
 *                          hours:
 *                            type: integer
 *                          minutes:
 *                            type: integer
 *                   reviews:
 *                       type: array
 *                       items: 
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           text:
 *                             type: string
 *     responses:
 *       201:
 *         description: Created new movie
 */
router.post('/movies',postMovie);

/**
 * @swagger
 * /movies/{id}:
 *   patch:
 *     tags:
 *       - Movies
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The movie ID.
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   director:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   genres:
 *                      type: array
 *                      items:
 *                        type: string
 *                   duration:
 *                       type: object
 *                       properties:
 *                          hours:
 *                            type: integer
 *                          minutes:
 *                            type: integer
 *                   reviews:
 *                       type: array
 *                       items: 
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           text:
 *                             type: string
 *        description: Patch a movie by id
 *     responses:
 *       200:
 *         description: Returns the requested 
 */
router.patch('/movies/:id',patchMovie);

module.exports = router;