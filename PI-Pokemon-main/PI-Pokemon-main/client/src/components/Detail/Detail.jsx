import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function Detail() {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id));
    }, [dispatch, id]);

    return (
        <div>
            <h1>Pokemon Details</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Types</h3>
            {pokemon.types?.map((t) => (
                <p>{t}</p>
            ))}
            <label>{`Hp = ${pokemon.hp}`}</label>
            <br/>
            <label>{`Attack = ${pokemon.attack}`}</label>
            <br/>
            <label>{`Defense = ${pokemon.defense}`}</label>
            <br/>
            <label>{`Speed = ${pokemon.speed}`}</label>
            <br/>
            <label>{`Height = ${pokemon.height}`}</label>
            <br/>
            <label>{`Weight = ${pokemon.weight}`}</label>
            
        </div>
    );
}
