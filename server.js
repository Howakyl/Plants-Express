const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));