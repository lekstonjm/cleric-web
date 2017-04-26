import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

import * as actions from '../actions';

class HitPointsView extends Component {
  constructor(props) {
    super(props);
    this.refRank = null;
    this.refDamage = null;
  }

  render() {
    const { character, onRankChange, onDamageChange } = this.props;
    return (
      <div>
        <h2>Hit points</h2>
        <Table>
          <thead>
            <tr>
              <td>Rank</td><td>damage</td><td>actual</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input
                    type="number"
                    value={character.hit_points.rank}
                    ref={ (input) => { this.refRank = input; } }
                    onClick={ () => { this.refRank.select();} }
                    onChange={ () => { onRankChange(this.refRank.value); } }/>
              </td>
              <td><input
                    type="number"
                    value={character.hit_points.damage}
                    ref={ (input) => { this.refDamage = input; } }
                    onClick={ () => { this.refDamage.select();} }
                    onChange={ () => { onDamageChange(this.refDamage.value); } }/></td>
              <td>{character.hit_points.actual}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    character : state.character
  }),
  (dispatch) => ({
    onRankChange : (rank) => dispatch(actions.character.changeHitPointsRank(rank)) ,
    onDamageChange : (damage) => dispatch(actions.character.changeHitPointsDamage(damage))
  })
)(HitPointsView);
