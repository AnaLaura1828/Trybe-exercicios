const express = require('express');
const app = express();
const valitedName = require('../middlewars/valitedName');
const valitedPrice = require('../middlewars/valitedPrice');
const valitedDescription = require('../middlewars/valitedDescription')
const valitedCreatedAt = require('../middlewars/valitedCreatedAt');
const valitedRating = require('../middlewars/valitedRating');
const valitedDifficulty = require('../middlewars/valitedDifficulty');

app.use(express.json());

app.post('/activities', 
valitedPrice,
valitedName, 
valitedDescription, 
valitedCreatedAt,
valitedRating,
valitedDifficulty,
(_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;