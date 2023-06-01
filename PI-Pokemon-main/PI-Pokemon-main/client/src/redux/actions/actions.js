import * as types from '../actions/types';
import axios from 'axios';

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            dispatch({ 
                type: types.GET_POKEMONS,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
            dispatch({ type: types.GET_POKEMON_DETAIL, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getPokemonTypes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/types');
            dispatch({ type: types.GET_POKEMON_TYPES, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export const postPokemonCreated = (pokemon) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', pokemon);
            dispatch({ type: types.POST_POKEMON_CREATED, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/pokemon/name?name=${name}`);
            dispatch({ type: types.GET_POKEMON_BY_NAME, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export const filter = (type) => {
    return { type: types.FILTER, payload: type };
}

export const order = (order) => {
    return { type: types.ORDER, payload: order };
}

export const reset = () => {
    return { type: types.RESET };
}

export const nextPage = (page) => {
    return { type: types.NEXT_PAGE };
}

export const prevPage = (page) => {
    return { type: types.PREV_PAGE };
}

export const handleNumber = (number) => {
    return { type: types.HANDLE_NUMBER, payload: number };
}

export const addLocation = (path) => {
    return { 
        type: types.ADD_LOCATION,
        payload: path
    };
}

export const searchByName = (name) => {
    return { type: types.SEARCH_BY_NAME, payload: name };
}
