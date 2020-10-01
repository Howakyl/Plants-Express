const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

app.set('view engine' , 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
//plants controller
const plantController = require('./controllers/plantsControllers');
const plants = require('./models/Plant');

app.get('/' , (req,res) => {
    res.render('index');
});






app.use('/plants' , plantController);


app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));