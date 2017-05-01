import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import LevelForm from '../components/level-form';

class LevelView extends Component {

  render() {
    const { character, onLevelChange } = this.props;
    return (
      <LevelForm level={character.level} onChange={onLevelChange}/>
    );
  }
}

export default connect(
  state => ({
    character : state.character
  }),
  (dispatch) => ({
    onLevelChange : (level) => dispatch(actions.character.changeLevel(level))
  })
)(LevelView);
