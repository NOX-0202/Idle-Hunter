const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://idlehunter:Idlehunter!12@idlehunter.5gew2.mongodb.net/users?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/Models');
app.use('/', require("./src/routes"));

app.listen(4567);

