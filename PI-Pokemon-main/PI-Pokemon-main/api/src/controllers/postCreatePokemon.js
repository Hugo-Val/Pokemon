const { Pokemon, Type } = require('../db.js');
const { v4: uuidv4 } = require('uuid');



const postCreatePokemon = async (req, res) => {   
    const { name, life, attack, defense, speed, height, weight, image, type } = req.body;

    const id = uuidv4();
        
    try {
        const newPokemon = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            image
        });
        for (let i = 0; i < type.length; i++) {
            const typeDB = await Type.findAll({
                where: {
                    name: type[i].name
                }
            });
            if(typeDB.length === 0){
                res.status(404).json({ message: 'Type not found' });
            }else{
                await newPokemon.addType(typeDB[0].id);
            }
            
        }      
        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(500).json({ message: 'Error creating pokemon' });
    }
}

module.exports = postCreatePokemon;