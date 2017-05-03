import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import AttackForm from '../components/attack-form';

class AttackView extends Component {

  render() {
    const { character, onRankChange, onShowBaseEffects, onShowContactEffects, onShowDistantEffects } = this.props;
    return (
      <AttackForm attack={character.attack}
        onRankChange={onRankChange}
        onShowBaseEffects={onShowBaseEffects}
        onShowContactEffects={onShowContactEffects}
        onShowDistantEffects={onShowDistantEffects}/>
    );
  }
}

export default connect(
    state => ({
      character:state.character
    })
  , (dispatch) => ({
      onRankChange : (new_rank) => dispatch(actions.character.changeBaseAttackRank(new_rank))
    , onShowBaseEffects : () => dispatch(actions.hmi.onShowEffects(['attack']))
    , onShowDistantEffects : () => dispatch(actions.hmi.onShowEffects(['attack', 'base']))
    , onShowContactEffects : () => dispatch(actions.hmi.onShowEffects(['attack', 'contact']))
  })
)(AttackView);
