import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import './App.css';

function App() {
  return (

    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Cards} />
      <Route exact path="/pokemons/:id" component={Detail} />
      <Route exact path="/createpokemon" component={CreatePokemon} />
    </div>
  );
}

export default App;
