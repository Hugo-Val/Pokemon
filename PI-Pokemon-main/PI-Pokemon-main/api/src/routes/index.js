const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPokemons = require('./GetAllPokemons.js');
const getPokemonById = require('./GetPokemonsById.js');
const getAllTypes = require('./GetAllTypes.js');
const postCreatePokemon = require('./PostCreatePokemon.js');
const getPokemonsByName = require('./GetPokemonsByName.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(getPokemonsByName);
router.use(getAllPokemons);
router.use(getPokemonById);
router.use(getAllTypes);
router.use(postCreatePokemon);


module.exports = router;
