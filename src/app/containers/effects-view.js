import React, {Component} from 'react';
import { connect } from 'react-redux';

import EffectsForm from '../components/effects-form';
import * as actions from '../actions';

class EffectsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hmi, character, addEffect, removeEffect, hideEffectsForm } = this.props;
    var effects=[];
    if (hmi.effects_form_visible) {
      var effects = character.abilities[hmi.effects_form_ability].effects;
    }
    return (
      <EffectsForm effects={effects}
        visible={hmi.effects_form_visible}
        onHide={hideEffectsForm}
        onAdd={ (description, value) => { addEffect(hmi.effects_form_ability, description, value); }}
        onRemove = { (effect_id) => {removeEffect(hmi.effects_form_ability, effect_id); }} />
    );
  }
}

export default connect(state => ({
    hmi : state.hmi,
    character : state.character
  }),
  (dispatch) => ({
    addEffect: (ability, description, value) => dispatch(actions.character.addEffect(ability, description, value)),
    removeEffect: (ability, effect) => dispatch(actions.character.removeEffect(ability, effect)),
    hideEffectsForm: () => dispatch(actions.hmi.hideEffectsForm())
  })
)(EffectsView);
