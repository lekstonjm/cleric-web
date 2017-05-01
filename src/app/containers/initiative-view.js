import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import InitiativeForm from '../components/initiative-form';

class InitiativeView extends Component {

  render() {
    const { character, onShowEffects } = this.props;
    return (
      <InitiativeForm initiative={character.initiative} onShowEffects={onShowEffects}/>
    );
  }
}

export default connect(
  state => ({
    character : state.character
  }),
  (dispatch) => ({
    onShowEffects : () => dispatch(actions.hmi.showEffectsForm(['initiative']))
  })
)(InitiativeView);
