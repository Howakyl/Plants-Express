const express = require('express');
const router = express.Router();

const plants = require ('../models/Plant');

router.get('/' , (req,res) => {
    res.render('plants/indexPlant' , {
        plants: plants
    });
    // res.send('is it working??');
});

module.exports = router;