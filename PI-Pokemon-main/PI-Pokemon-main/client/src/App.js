import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import Nav from './components/Nav/Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addLocation, getPokemonByName } from './redux/actions/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [location, dispatch]);

  function onSearch(name) {
    if (name !== '') {
      return dispatch(getPokemonByName(name));
    }
    
  }

  return (

    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Cards} />
      <Route exact path="/pokemons/:id" component={Detail} />
      <Route exact path="/createpokemon" component={CreatePokemon} />
    </div>
  );
}

export default App;
