const express = require('express');
const mongoose = require('mongoose');
//const requireDir = require('require-dir');
//const cors = require('cors');

/*app.use(cors());


//mongoose.connect('mongodb://localhost:27017/app',{ useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');*/

const app = express();

app.get('/', (req, res) => {
  {res.send("<h1>Funcionou</h1>")};
});

app.listen(4567);

