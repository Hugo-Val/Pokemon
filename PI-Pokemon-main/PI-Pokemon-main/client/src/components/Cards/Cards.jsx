import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons, order, filter } from '../../redux/actions/actions';
import Paginate from '../Paginate/Paginate';

export default function Cards() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const currentPage = useSelector(state => state.currentPage);
    const pokemonSearch = useSelector(state => state.pokemonSearch);
    
    
    
    useEffect(() => {
        dispatch(getPokemons());      
    }
    , [dispatch]);
    
    

    
    

    let desde = (currentPage - 1) *  12;
    let hasta = desde + 12;
    let pokemosPage = Math.ceil(pokemons.length / 12);
    let pokemonsToShow = pokemons.slice(desde, hasta);
    if (Object.keys(pokemonSearch).length > 0) {
        pokemosPage = 1;
        desde = 0;
        hasta = 1;
        pokemonsToShow = [pokemonSearch].slice(desde, hasta);
    }

    const handleOrder = (e) => {
        dispatch(order(e.target.value));
    }

    const handleFilter = (e) => {
        dispatch(filter(e.target.value));
    }
        
    return (
        <div>
            <div className={styles.header}>
                <h1>Henry Pokemons</h1>
                <div className={styles.filters}>
                    <select onChange={handleOrder}>
                        <option value="default">Order by</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                        <option value="attack">Attack</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option value="default">Filter by</option>
                        <option value="created">Created</option>
                        <option value="api">Api</option>
                    </select>
                </div>
            </div>
            <Paginate qtyPages={pokemosPage}/>
            <div className={styles.pokemons}>
                {pokemonsToShow?.map((pokemon, index) => {
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

