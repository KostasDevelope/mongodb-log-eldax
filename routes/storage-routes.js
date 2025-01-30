const express = require('express');
const router = express.Router();
const hendleError = (res,error) => { res.status(500).json(error); };

/**
 * @swagger
 * /api/zurnalcinnosti/ulozcinnost:
 *    post:
 *      tags:
 *         - Metody
 *      requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   cinnost:
 *                     type: string
 *      responses:
 *         200:
 *           description: OK
 */
router.post('/api/zurnalcinnosti/ulozcinnost', (req, res) => {  
    try {
        res.status(200).send(req.body.cinnost);
    } catch(error){
        hendleError(res, error);
    } 
});

module.exports = router;

//https://swagger.io/docs/specification/v2_0/describing-request-body/