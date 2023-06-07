import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons, order, filter, getPokemonTypes, reset } from '../../redux/actions/actions';
import Paginate from '../Paginate/Paginate';

export default function Cards() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());  
        dispatch(getPokemonTypes());
    }
    , []);
    const pokemons = useSelector(state => state.pokemons);
    const currentPage = useSelector(state => state.currentPage);
    const types = useSelector(state => state.pokemonTypes);

    let desde = (currentPage - 1) *  12;
    let hasta = currentPage * 12;
    let pokemosPage = Math.ceil(pokemons.length / 12);
    let pokemonsToShow = pokemons?.slice(desde, hasta);

    
    const handleOrder = (e) => {
        e.preventDefault();
        return dispatch(order(e.target.value)); 
        
    }

    const handleFilter = (e) => {
        e.preventDefault();
       return dispatch(filter(e.target.value));
       
    }
    
    const handleReset = (e) => {
        e.preventDefault();
        return dispatch(reset());
    }
        
    return (
        <div>
            <div className={styles.header}>
                
                <select onClick={handleOrder} >
                    <option value="order" disabled  >Select Order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    <option value="attack">Attack</option>
                </select>
                
                <h1>Henry Pokemons</h1>
                <div>
                <select onClick={handleFilter}>
                    <option value="filter" disabled>Filter by</option>
                    <option value="created">Created</option>
                    <option value="api">Api</option>
                    { types?.map((type, index) => {
                        return (
                            <option key={index} value={type.name}>{type.name}</option>
                        )
                      })
                    }
                </select>
                <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <Paginate qtyPages={pokemosPage}/>
            <div className={styles.pokemons}>
                { pokemonsToShow.map((pokemon, index) => {
                    return (
                        <Card
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                        />
                    )
                })}
            </div>
        </div>
    )
}

