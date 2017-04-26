import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LevelView extends Component {
  constructor(props) {
    super(props);
    this.refLevel = null;
  }

  render() {
    const { character, onLevelChange } = this.props;
    return (
        <input
          type="number"
          value={character.level}
          ref={ (input) => { this.refLevel = input; } }
          onClick={ () => { this.refLevel.select();} }
          onChange={ () => { onLevelChange(this.refLevel.value); } }/>
    )
  }
}

export default connect(
  (state) => ({
    character : state.character
  }),
  (dispatch) => ({
    onLevelChange : (level) => dispatch(actions.character.changeLevel(level))
  })
)(LevelView);
