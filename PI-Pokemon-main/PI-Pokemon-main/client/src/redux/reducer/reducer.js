import * as types from '../actions/types';
const initialState = {
    pokemons: [],
    types: [],
    pokemonDetail: {},
    pokemonCreated: {},
    pokemonTypes: [],
    pokemonSearch: {},
    Filter: [],
    Order: [],
    currentPage: 1,
    location: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.RESET:
            return {
                ...state,
                pokemonSearch: {},
            }
        case types.GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonSearch: payload
            }
        case types.ADD_LOCATION:
            return {
                ...state,
                location: [...state.location, payload]
            }
        case types.GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        case types.NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case types.PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        case types.GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }
        case types.GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: payload
            }
        default:
            return state;
    }
}

export default rootReducer;