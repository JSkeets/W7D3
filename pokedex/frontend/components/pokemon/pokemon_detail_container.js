import { connect } from 'react-redux';
import {selectSinglePokemon} from '../../reducers/selectors';
import {selectSinglePokemonItems} from '../../reducers/selectors';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';



const mapStateToProps = (state, ownProps) => {
  return {
    poke: selectSinglePokemon(state, ownProps.match.params.pokeId),
    // items: selectSinglePokemonItems(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
