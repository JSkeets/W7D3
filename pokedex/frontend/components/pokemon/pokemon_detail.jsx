import React from 'react';
// import { Link } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokeId);


  }

  componentWillReceiveProps(newProps){
      console.log("INSIDE COMPONENT DID MOUNT",this.state);
    if (this.props.match.params.pokeId !== newProps.match.params.pokeId){
      this.props.requestSinglePokemon(newProps.match.params.pokeId);
    }
  }

  render () {
    const {poke, items} = this.props;
    if (!poke) return null;
    console.log("INSIDE OF RENDER", this.props.poke);
    return (
      <section className="pokemon-detail">
        <ul>
          <li>Name: {this.props.poke.name}</li>
          <li>Type: {this.props.poke.poke_type}</li>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Moves: {this.props.poke.moves.join(', ')}</li>
          <img src={this.props.poke.image_url} />
          <li>Items: {this.props.items}</li>
      </ul>
      </section>
    );

  }
}
