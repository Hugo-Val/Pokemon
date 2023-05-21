const { Pokemon } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;

async function getPokemonById(req, res) {
    const { idPokemon } = req.params;
    try {
        const api = await axios.get(`${API_URL}/${idPokemon}`);
        const apiData = api.data;
        const { name, types, sprites, id, height, weight, stats } = apiData;
        const pokemon = {
            name,
            types: types.map((type) => type.type.name),
            image: sprites.other.dream_world.front_default,
            id,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            height,
            weight
        }
        res.status(200).send(pokemon);
        
    } catch (error) {
        res.status(404).send('No se encontró el pokemon');
    }
}

module.exports = getPokemonById;