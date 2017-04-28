import React, {Component} from 'react';
import { connect } from 'react-redux';
import ArmorClassForm from '../components/armor-class-form'

import * as actions from '../actions';

class ArmorClassView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { character, onShowEffects } = this.props;
    return (
      <ArmorClassForm armorClass={character.armor_class}
        onShowEffects={onShowEffects}/>
    )
  }
}

export default connect(
  (state) => ({
    character : state.character
  }),
  (dispatch) => ({
    onShowEffects : () => dispatch(actions.hmi.showEffectsForm(['armor_class']))
  })
)(ArmorClassView);
