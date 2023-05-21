const express = require('express');
const router = express.Router();
const getPokemonById = require('../controllers/getPokemonById.js');


router.get('/pokemons/:idPokemon', getPokemonById);

module.exports = router;