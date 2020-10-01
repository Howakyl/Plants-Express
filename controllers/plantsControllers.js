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

//NEW plant
router.get('/new' , (req,res) => {
    res.render('plants/newPlant');
})

//CREATE plant
router.post('/' , (req,res) => {
    console.log(req.body);
    if ( req.body.hasHoles === 'on') {
        req.body.hasHoles = true;
    } else {
        req.body.hasHoles = false;
    }

    plants.push(req.body);
    res.redirect(`/plants/${plants.length - 1}`);
})

//Plant INFO - SHOW
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


//
module.exports = router;