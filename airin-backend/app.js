'use strick'

require('dotenv').config();
const express = require ('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//Routing 

const { router } = require('./router/router');


//CORS

let originOptionCors = {
    URL : 'http://localhost:${PORT}'
};

app.use('/', router); 


//listen to PORT

app.listen(PORT, () => console.log (`server connected on ${PORT}`));
