import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import SizeForm from '../components/size-form';

class SizeView extends Component {

  render() {
    const { character, onSizeChange } = this.props;
    return (
      <SizeForm size={character.size} onChange={onSizeChange}/>
    );
  }
}

export default connect(
  state => ({
    character : state.character
  }),
  (dispatch) => ({
    onSizeChange : (size) => dispatch(actions.character.changeSize(size))
  })
)(SizeView);
