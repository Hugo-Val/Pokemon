import * as types from '../actions/types';
const initialState = {
    pokemons: [],
    types: [],
    pokemonDetail: {},
    pokemonCreated: {},
    pokemonTypes: [],
    pokemonSearch: [],
    Filter: [],
    Order: [],
    currentPage: 1,
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
        default:
            return state;
    }
}

export default rootReducer;