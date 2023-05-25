


export default function Validate(pokemonData) {
    let errors = {};
    if (!pokemonData.name || pokemonData.name === '') {
        errors.name = 'Name is required';
    }
    return errors;
};

