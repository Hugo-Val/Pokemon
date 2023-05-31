const { Pokemon } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;

async function getAllPokemons(req, res) {
    try {
        const api = await axios.get(API_URL); // ?offset=0&limit=1281
        const apiData = api.data.results;
        const apiData2 = apiData.map((e) => {
            const { url } = e;
            return axios.get(url);
        });
        const apiData3 = await Promise.all(apiData2);
        const apiData4 = apiData3.map((e) => {
            const { data } = e;
            const { id, name, types, sprites } = data;
            return {
                id,
                name,
                types : types.map((e) => e.type.name),
                image: sprites.other['official-artwork'].front_default,
            };
        }
        );
        const db = await Pokemon.findAll(
            { include: {
                 all: true
                }}
        );
        const dbData = db.map((e) => {
            const { id, name, image} = e;
            const type = e.types.map((e) => e.name);

            return {
                id,
                name,
                image,
                type
            };
        }
        );
            


        const totalData = apiData4.concat(dbData);
        res.status(200).json({totalData});  
    } catch (error) {
        res.status(404).send('No se encontraron pokemons');
    }

}


module.exports = getAllPokemons;

