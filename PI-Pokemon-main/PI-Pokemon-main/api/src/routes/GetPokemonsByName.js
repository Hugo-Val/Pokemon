const express = require('express');
const router = express.Router();
const getPokemonsByName = require('../controllers/getPokemosByName');

router.get('/pokemon/name', getPokemonsByName);

module.exports = router;