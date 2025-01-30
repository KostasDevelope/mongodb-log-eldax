const express = require('express');
const router = express.Router();

const hendleError = (res,error) => { res.status(500).json(error); };
/**
 * @swagger
 * /api/zurnalcinnosti/ulozcinnost:
 *    post:
 *      tags:
 *         - Metody
 *      responses:
 *         201:
 *           description: Created new Metody
 */
router.post('/api/zurnalcinnosti/ulozcinnost', (req, res) => {  
    try {
        res.status(200).send('POST request OK!!');;
    } catch(error){
        hendleError(res, error);
    } 
});

module.exports = router;