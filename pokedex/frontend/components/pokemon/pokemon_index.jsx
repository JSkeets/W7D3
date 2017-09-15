import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';

 export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={`PokemonItem${poke.id}`} pokemon={poke} />);
    return (
      <section className="pokedex">
      <ul>
        {pokemonItems}
      </ul>
      </section>
    );
  }
}
