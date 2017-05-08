import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import AttackForm from '../components/attack-form';

class AttackView extends Component {

  render() {
    const { character, onChangeBaseAttackRank, onShowEffectsForm } = this.props;
    return (
      <AttackForm attack={character.attack}
        onRankChange={onChangeBaseAttackRank}
        onShowBaseEffects={() => onShowEffectsForm(['attack','base'])}
        onShowContactEffects={() => onShowEffectsForm(['attack','contact'])}
        onShowDistantEffects={() => onShowEffectsForm(['attack','distant'])}/>
    );
  }
}

export default connect(
    state => ({
      character:state.character
    })
  , (dispatch) => ({
      onChangeBaseAttackRank : (new_rank) => dispatch(actions.character.changeBaseAttackRank(new_rank))
    , onShowEffectsForm : (property_path) => dispatch(actions.hmi.showEffectsForm(property_path))
  })
)(AttackView);
