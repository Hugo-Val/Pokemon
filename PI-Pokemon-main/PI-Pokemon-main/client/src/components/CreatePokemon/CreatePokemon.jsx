import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPokemon, getPokemonTypes } from '../../redux/actions/actions';
import Validate from './Validate';
import foxxy from '../../images/newPokemons/foxxy.jpg';
import styles from './CreatePokemon.module.css';

export default function CreatePokemon() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPokemonTypes());
    // }, [dispatch]);



    const [ pokemonData, setPokemonData ] = useState({
        name: '',
        image: '',
        hp : '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });

    const [ errors, setErrors ] = useState({
        name: 'Name is required',
        image: '',
        hp : '',    
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: ''
    });

    const handleInputChange = (e) => {
        setPokemonData({
            ...pokemonData,
            [e.target.name]: e.target.value
        });
        setErrors(Validate({
            ...pokemonData,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div>
            <h1>Create your own Pokemon!</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={pokemonData.name.toLowerCase()}
                        placeholder='Enter the name of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.name}</p>
                    <select name="image" onClick={handleInputChange}>
                        <option value={foxxy}>foxxy</option>
                    </select>
                    <img src={pokemonData.image} alt="foxxy" />
                    {/* <p className={styles.error}>{errors.image}</p> */}
                    <label htmlFor="hp">HP: </label>
                    <input
                        type="number"
                        name="hp"
                        value={pokemonData.hp}
                        placeholder='Enter the HP of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.hp}</p> */}
                    <label htmlFor="attack">Attack: </label>
                    <input
                        type="number"
                        name="attack"
                        value={pokemonData.attack}
                        placeholder='Enter the attack of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.attack}</p> */}
                    <label htmlFor="defense">Defense: </label>
                    <input
                        type="number"
                        name="defense"
                        value={pokemonData.defense}
                        placeholder='Enter the defense of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.defense}</p> */}
                    <label htmlFor="speed">Speed: </label>
                    <input
                        type="number"
                        name="speed"
                        value={pokemonData.speed}
                        placeholder='Enter the speed of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.speed}</p> */}
                    <label htmlFor="height">Height: </label>
                    <input
                        type="number"
                        name="height"
                        value={pokemonData.height}
                        placeholder='Enter the height of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.height}</p> */}
                    <label htmlFor="weight">Weight: </label>
                    <input
                        type="number"
                        name="weight"
                        value={pokemonData.weight}
                        placeholder='Enter the weight of the Pokemon'
                        onChange={handleInputChange}
                    />
                    {/* <p className={styles.error}>{errors.weight}</p> */}
                    <label htmlFor="types">Types: </label>
                    <input
                        type="checkbox"
                        name="normal"
                        value="normal"
                    />
                    <label htmlFor="normal">Types: </label>
                    
                    
                    {/* <p className={styles.error}>{errors.types}</p> */}
                    <button type="submit">Create Pokemon</button>





                </div>
            </form>        

        </div>
    )
}
