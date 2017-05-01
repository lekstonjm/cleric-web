import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import SavingThrowsForm from '../components/saving-throws-form'

import * as actions from '../actions';

class SavingThrowsView extends Component {

  render() {
    const { character
            , onFortitudeRankChange, onReflexRankChange, onWillRankChange
            , onShowFortitudeEffects, onShowReflexEffects, onShowWillEffects } = this.props;

    return (
      <Table condensed>
        <thead><tr><td>Sauvegarde</td><td>Rank</td><td>actual</td></tr></thead>
        <tbody>
          <SavingThrowsForm saving={character.saving_throws.fortitude}
            onRankChange={onFortitudeRankChange}
            onShowEffects={onShowFortitudeEffects}/>
          <SavingThrowsForm saving={character.saving_throws.reflex}
            onRankChange={onReflexRankChange}
            onShowEffects={onShowReflexEffects}/>
          <SavingThrowsForm saving={character.saving_throws.will}
            onRankChange={onWillRankChange}
            onShowEffects={onShowWillEffects}/>
        </tbody>
      </Table>
    );
  }
}

export default connect(
  (state) => ({
    character : state.character
  }),
  (dispatch) => ({
    onFortitudeRankChange : (rank) => dispatch(actions.character.changeSavingThrowRank('fortitude', rank)) ,
    onReflexRankChange : (rank) => dispatch(actions.character.changeReflexRank('reflex', rank)) ,
    onWillRankChange : (rank) => dispatch(actions.character.changeWillRank('will', rank)) ,
    onShowFortitudeEffects : () => dispatch(actions.hmi.showEffectsForm(['saving_throws','fortitude'])),
    onShowReflexEffects : () => dispatch(actions.hmi.showEffectsForm(['saving_throws','reflex'])),
    onShowWillEffects : () => dispatch(actions.hmi.showEffectsForm(['saving_throws','will']))
  })
)(SavingThrowsView);
