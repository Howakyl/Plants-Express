const express = require('express');
const router = express.Router();

const plants = require ('../models/Plant');

//Plant HOME Index
router.get('/' , (req,res) => {
    res.render('plants/indexPlant' , {
        plants:plants
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
            plantIndex: plantIndex,
        });
    } else {
        res.render('plants/showPlantInfo',  {
            plant: {name: 'Does not exist'},
        });
    }
});


//REMOVE plants
router.delete('/:plantIndex' , (req,res) => {
    console.log(plants);

    plants.splice(req.params.plantIndex, 1);

    console.log(plants);

    res.redirect('/plants');
})

//DO THIS FIRST FOR EDITING PLANT
router.get('/:plantIndex/edit' , (req,res) => {
    const plantIndex = req.params.plantIndex;

    res.render('plants/editPlant' , {
        plants: plants[plantIndex],
        plantIndex: plantIndex,
        hasHoles: plants.hasHoles
    });
});


//UPDATE plants
router.put('/:plantIndex/' , (req,res) => {
    const plantIndex = req.params.plantIndex;
    //GET DATA FROM REQUEST BODY
    console.log(req.body);

    const newPlant = {
        name: req.body.name,
        hasHoles: req.body.hasHoles === 'on' ? true : false
    }

    console.log(newPlant);

    plants.splice(plantIndex, 1, newPlant);

    res.redirect(`/plants/${plantIndex}`);
})






module.exports = router;