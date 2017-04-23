import React, {Component} from 'react';
import { connect } from 'react-redux';

import AbilitiesForm from '../components/abilities-form';
import * as actions from '../actions';

class AbilitiesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { character, changeAbilityRank, showEffectsForm } = this.props;
    return (
      <AbilitiesForm abilities={character.abilities}
        onAbilityRankChange={ (ability_name, new_rank) => changeAbilityRank(ability_name, new_rank) }
        onShowAbilityEffects={ (ability_name) => showEffectsForm(ability_name) } />
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    changeAbilityRank : (ability_name, new_rank) => dispatch(actions.character.changeAbilityRank(ability_name, new_rank)),
    showEffectsForm : (ability_name) => dispatch(actions.hmi.showEffectsForm(ability_name))
  })
)(AbilitiesView);
