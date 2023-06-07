import * as types from '../actions/types.js';
const initialState = {
    pokemons: [],
    pokemonsOriginal: [],
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
        case types.FILTER:
            if (payload === 'api') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.id < 120)
                }
            }
            if (payload === 'created') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.id.length > 4)
                }
            }
            if (payload === 'normal') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('normal'))
                }
            }
            if (payload === 'fighting') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('fighting'))
                }
            }
            if (payload === 'flying') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('flying'))
                }
            }
            if (payload === 'poison') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('poison'))
                }
            }
            if (payload === 'ground') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('ground'))
                }
            }
            if (payload === 'rock') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('rock'))
                }
            }
            if (payload === 'bug') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('bug'))
                }
            }
            if (payload === 'ghost') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('ghost'))
                }
            }
            if (payload === 'steel') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('steel'))
                }
            }
            if (payload === 'fire') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('fire'))
                }
            }
            if (payload === 'water') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('water'))
                }
            }
            if (payload === 'grass') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('grass'))
                }
            }
            if (payload === 'electric') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('electric'))
                }
            }
            if (payload === 'psychic') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('psychic'))
                }
            }
            if (payload === 'ice') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('ice'))
                }
            }
            if (payload === 'dragon') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('dragon'))
                }
            }
            if (payload === 'dark') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('dark'))
                }
            }
            if (payload === 'fairy') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('fairy'))
                }
            }
            if (payload === 'unknown') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('unknown'))
                }
            }
            if (payload === 'shadow') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.filter(p => p.types.includes('shadow'))
                }
            }
        case types.ORDER:
            if (payload === 'asc') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.sort((a, b) => {   
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
            if (payload === 'desc') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (a.name < b.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            if (payload === 'attack') {
                return {
                    ...state,
                    pokemons: state.pokemonsOriginal.sort((a, b) => {
                        if (a.attack > b.attack) {
                            return -1;
                        }
                        if (a.attack < b.attack) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
           
        case types.RESET:
            return {
                ...state,
                pokemons: state.pokemonsOriginal 
            }
        case types.GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons:[payload]
            }
        case types.ADD_LOCATION:
            return {
                ...state,
                location: [...state.location, payload]
            }
        case types.GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsOriginal: payload
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