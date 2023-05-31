import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemonCreated, getPokemonTypes } from '../../redux/actions/actions';
import Validate from './Validate';
import foxxy from '../../images/newPokemons/foxxy.jpg';
import lionly from '../../images/newPokemons/lionly.jpg';
import piggy from '../../images/newPokemons/piggy.jpg';
import porcupine from '../../images/newPokemons/porcupine.jpg';
import rabbit from '../../images/newPokemons/rabbit.jpg';
import skunky from '../../images/newPokemons/skunky.jpg';
import squirrel from '../../images/newPokemons/squirrel.jpg';
import styles from './CreatePokemon.module.css';

export default function CreatePokemon() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonTypes());
    }, [dispatch]);

    const types  = useSelector(state => state.pokemonTypes);
    
    
    
    const [ pokemonData, setPokemonData ] = useState({
        name: '',
        image: '',
        hp : '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type: []
    });
    
    const [ errors, setErrors ] = useState({
        name: 'Name is required',
        image: 'Image is required',
        hp : 'Hp is required',    
        attack: 'Attack is required',
        defense: 'Defense is required',
        speed: 'Speed is required',
        height: 'Height is required',
        weight: 'Weight is required',
        type: 'you must select at least one type'
    });
    console.log(pokemonData);
    
    
    const handleCheckboxChange = (e) => {
        if(e.target.checked) {
            
            setPokemonData({
                ...pokemonData,
                type: [...pokemonData.type, {name: e.target.value}]
            });
            
            setErrors(Validate({
                ...pokemonData,
                [e.target.name]: e.target.value
            }));
        } else {
            
            setPokemonData({
                ...pokemonData,
                type: pokemonData.type.filter(type => type !== e.target.value)
            })
            setErrors(Validate({
                ...pokemonData,
                [e.target.name]: e.target.value
            }));
        }
       
    };
    const handleInputChange = (e) => {
        console.log(e.target.value);
        if(e.target.name === 'image' || e.target.name === 'name') {
            setPokemonData({
                ...pokemonData,
                [e.target.name]: e.target.value
            });
            setErrors(Validate({
                ...pokemonData,
                [e.target.name]: e.target.value
            }));
            return;
        }
        if (e.target.name === 'height' ) {
            setPokemonData({
                ...pokemonData,
                [e.target.name]: parseFloat(e.target.value)
            });
            setErrors(Validate({
                ...pokemonData,
                [e.target.name]: e.target.value
            }));
            return;
        }
        setPokemonData({
            ...pokemonData,
            [e.target.name]:parseInt(e.target.value) 
        });
        setErrors(Validate({
            ...pokemonData,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSumit = (e) => {
        try {
            e.preventDefault();
            dispatch(postPokemonCreated(pokemonData));
            alert('Pokemon created successfully!');
            setPokemonData({
                name: '',
                image: '',
                hp : '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                type: []
            });
        } catch (error) {
            alert(error);   
        }
        
    };

    

    return (
        <div>
            <h1>Create your own Pokemon!</h1>
            <form className={styles.form} onSubmit={handleSumit}>
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
                        <option value={lionly}>lionly</option>
                        <option value={piggy}>piggy</option>
                        <option value={porcupine}>porcupine</option>
                        <option value={rabbit}>rabbit</option>
                        <option value={skunky}>skunky</option>
                        <option value={squirrel}>squirrel</option>
                    </select>
                    <div>
                        <img className={styles.img} src={pokemonData.image} alt={pokemonData.name} />
                    </div>
                    
                    <p className={styles.error}>{errors.image}</p>
                    <label htmlFor="hp">HP: </label>
                    <input
                        type="number" 
                        name="hp"
                        value={pokemonData.hp}
                        placeholder='Enter the HP of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.hp}</p>
                    <label htmlFor="attack">Attack: </label>
                    <input
                        type="number"
                        name="attack"
                        value={pokemonData.attack}
                        placeholder='Enter the attack of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.attack}</p>
                    <label htmlFor="defense">Defense: </label>
                    <input
                        type="number"
                        name="defense"
                        value={pokemonData.defense}
                        placeholder='Enter the defense of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.defense}</p>
                    <label htmlFor="speed">Speed: </label>
                    <input
                        type="number"
                        name="speed"
                        value={pokemonData.speed}
                        placeholder='Enter the speed of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.speed}</p>
                    <label htmlFor="height">Height: </label>
                    <input
                        type="number"
                        name="height"
                        value={pokemonData.height}
                        placeholder='Enter the height of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.height}</p>
                    <label htmlFor="weight">Weight: </label>
                    <input
                        type="number"
                        name="weight"
                        value={pokemonData.weight}
                        placeholder='Enter the weight of the Pokemon'
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>{errors.weight}</p>
                    <label htmlFor="types">Types: </label>
                    <div className={styles.types}> 
                        {types.map((type, index) => (
                            <div  key={index}>
                                <input
                                    type="checkbox"
                                    name={type.name}
                                    value={type.name}
                                    onInput={handleCheckboxChange} 
                                       
                                />
                                <label htmlFor={type.name}>{type.name}</label>
                            </div>
                        ))}


                    </div>
                    
                    
                    
                    <p className={styles.error}>{errors.types}</p>

                    {
                        Object.keys(errors).length === 0 ? (
                            <button type="submit">Create a Pokemon</button>
                                
                        ) : null

                    } 






                </div>
            </form>        

        </div>
    )
}

