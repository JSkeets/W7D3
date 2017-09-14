import React from 'react';

 export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <ul>
      { pokemon.map((poke,idx) => {
        return <li key={idx}>
              {poke.name}
              <img src={poke.image_url} />
            </li>;
        }
      )}
      </ul>
    );
  }
}
