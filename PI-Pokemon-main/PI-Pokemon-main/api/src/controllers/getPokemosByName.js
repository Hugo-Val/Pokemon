const { Pokemon } = require('../db.js');
const { Op } = require('sequelize');
require('dotenv').config();
const axios = require('axios');
const { API_URL } = process.env;


async function getPokemonsByName(req, res) {
    const { name } = req.query;
    
    try {
        
        const db = await Pokemon.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            include: {
                all: true,
            },
        });
        const dbData = db.map((e) => {
            const { name, image, id } = e;
            const type = e.types.map((e) => e.name);
            return {
                name,
                type,
                image,
                id,
            };
        });
        if (dbData.length > 0) {
            return res.status(200).json(dbData);
        }
        const api = await axios.get(`${API_URL}/${name.toLowerCase()}`);
        const apiData = api.data;
        const apiData2 = {
            name: apiData.name,
            types: apiData.types.map((e) => e.type.name),
            image: apiData.sprites.other['official-artwork'].front_default,
            id: apiData.id,
        };
            
        
        
        return res.status(200).json(apiData2);
        
    } catch (err) {
        res.status(404).send('Pokemon not found by name');
    }
}

module.exports = getPokemonsByName;