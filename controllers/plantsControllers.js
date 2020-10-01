const express = require('express');
const router = express.Router();

const plants = require ('../models/Plant');

//Plant HOME Index
router.get('/' , (req,res) => {
    res.render('plants/indexPlant' , {
        plants: plants
    });
    // res.send('is it working??');
});

//Plant INFO 
router.get('/:plantIndex' , (req,res) => {
    const plantIndex = req.params.plantIndex;
    const plant = plants[plantIndex];

    if(plants[plantIndex]) {
        res.render('plants/showPlantInfo' , {
            plants: plant,
        });
    } else {
        res.render('plants/showPlantInfo',  {
            plant: {name: 'Does not exist'},
        });
    }
});

module.exports = router;