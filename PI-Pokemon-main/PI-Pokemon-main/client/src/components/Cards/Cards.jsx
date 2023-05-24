import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/actions/actions';
import Paginate from '../Paginate/Paginate';

export default function Cards() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const currentPage = useSelector(state => state.currentPage);

    useEffect(() => {
        dispatch(getPokemons());
    }
    , [dispatch]);

    let desde = (currentPage - 1) *  12;
    let hasta = desde + 12;
    let pokemosPage = Math.ceil(pokemons.length / 12);
    let pokemonsToShow = pokemons.slice(desde, hasta);
    
   

    return (
        <div>
            <div className={styles.header}>
                <h1>Henry Pokemons</h1>
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

