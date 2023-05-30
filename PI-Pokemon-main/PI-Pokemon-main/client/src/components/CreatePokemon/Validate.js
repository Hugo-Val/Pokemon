


export default function Validate(pokemonData) {
    let errors = {};
    if (!pokemonData.name || pokemonData.name === '') {
        errors.name = 'Name is required';
    }
    if (!pokemonData.image || pokemonData.image === '') {
        errors.image = 'Image is required';
    }
    if (!pokemonData.hp || pokemonData.hp === '') {
        errors.hp = 'Hp is required';
    } else if (!/^[0-9]+$/.test(pokemonData.hp)) {
        errors.hp = 'Hp must be an integer';
    }
    if (!pokemonData.attack || pokemonData.attack === '') {
        errors.attack = 'Attack is required';
    } else if (!/^[0-9]+$/.test(pokemonData.attack)) {
        errors.attack = 'Attack must be an integer';
    }
    if (!pokemonData.defense || pokemonData.defense === '') {
        errors.defense = 'Defense is required';
    } else if (!/^[0-9]+$/.test(pokemonData.defense)) {
        errors.defense = 'Defense must be an integer';
    }
    if (!pokemonData.speed || pokemonData.speed === '') {
        errors.speed = 'Speed is required';
    } else if (!/^[0-9]+$/.test(pokemonData.speed)) {
        errors.speed = 'Speed must be an integer';
    }
    if (!pokemonData.height || pokemonData.height === '') {
        errors.height = 'Height is required';
    } else if (!/^[0-9.]+$/.test(pokemonData.height)) {
        errors.height = 'Height must be a decimal number';
    }
    if (!pokemonData.weight || pokemonData.weight === '') {
        errors.weight = 'Weight is required';
    } else if (!/^[0-9]+$/.test(pokemonData.weight)) {
        errors.weight = 'Weight must be an integer';
    }
    if (!pokemonData.types || pokemonData.types.length === 0) {
        errors.types = 'At least one type is required';
    }
    return errors;
};

