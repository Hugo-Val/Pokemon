const express = require('express');
const router = express.Router();
const getAllPokemons = require('../controllers/getAllPokemos');

router.get('/pokemons', getAllPokemons);

module.exports = router;