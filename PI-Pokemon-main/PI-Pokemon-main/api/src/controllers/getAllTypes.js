const { Type } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_URLTYPE } = process.env;

async function getAllTypes(req, res) {
    try {
        const dbTypes = await Type.findAll();
        if (dbTypes.length>0) {
            res.status(200).send(dbTypes);
        } else {
            const api = await axios.get(`${API_URLTYPE}/type`);
            const apiData = api.data.results;
            const types = apiData.map((type) => type.name);
            const dbTypes = await Type.bulkCreate(types.map((type) => ({ name: type })));
            const allTypes = await Type.findAll();
            res.status(200).send(allTypes);
        }
    } catch (error) {
        res.status(404).send('No se encontraron tipos');
    }
}

module.exports = getAllTypes;