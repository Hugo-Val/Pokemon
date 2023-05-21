const express = require('express');
const router = express.Router();
const postCreatePokemon = require('../controllers/postCreatePokemon');

router.post('/pokemons', postCreatePokemon);

module.exports = router;