const express = require('express');
const requireDir = require('require-dir');
const app = express();


requireDir('./src/models');


app.get('/', (req, res) => {
  {res.send("<h1>Funcionou</h1>")};
});




app.listen(4567);

/*
const mongoose = require('mongoose');
//
//const cors = require('cors');

app.use(cors());


//mongoose.connect('mongodb://localhost:27017/app',{ useNewUrlParser: true, useUnifiedTopology: true });

*/

