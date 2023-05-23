const { Pokemon } = require('../db.js');
const { Op } = require('sequelize');
require('dotenv').config();
const axios = require('axios');
const { API_URL } = process.env;


async function getPokemonsByName(req, res) {
    const { name } = req.query;
    
    try {
        
        const api = await axios.get(`${API_URL}/${name.toLowerCase()}`);
        const apiData = api.data;
        const apiData2 = {
            name: apiData.name,
            types: apiData.types.map((e) => e.type.name),
            image: apiData.sprites.other['official-artwork'].front_default,
            id: apiData.id,
        };
        const db = await Pokemon.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });
        const dbData = db.map((e) => {
            const { name, types, sprites, id } = e;
            return {
                name,
                types,
                image: sprites,
                id,
            };
        }
        );
        const totalData = [apiData2].concat(dbData);
        res.status(200).json(totalData);
    } catch (err) {
        res.status(404).send('Pokemon not found by name');
    }
}

module.exports = getPokemonsByName;