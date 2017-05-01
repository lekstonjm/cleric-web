import React, {Component} from 'react';
import { connect } from 'react-redux';
import HitPointsForm from '../components/hit-points-form'

import * as actions from '../actions';

class HitPointsView extends Component {
  constructor(props) {
    super(props);
    this.refRank = null;
    this.refDamage = null;
  }

  render() {
    const { character, onRankChange, onDamageChange, onShowEffects } = this.props;
    return (
      <HitPointsForm hitPoints={character.hit_points}
        onRankChange={onRankChange}
        onDamageChange={onDamageChange}
        onShowEffects={onShowEffects}/>
    )
  }
}

export default connect(
  (state) => ({
    character : state.character
  }),
  (dispatch) => ({
    onRankChange : (rank) => dispatch(actions.character.changeHitPointsRank(rank)) ,
    onDamageChange : (damage) => dispatch(actions.character.changeHitPointsDamage(damage)) ,
    onShowEffects : () => dispatch(actions.hmi.showEffectsForm('hit_points'))
  })
)(HitPointsView);
