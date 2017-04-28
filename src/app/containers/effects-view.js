import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getEffects} from '../domain/character-sheet-rules';
import EffectsForm from '../components/effects-form';
import * as actions from '../actions';

class EffectsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hmi, character, addEffect, removeEffect, hideEffectsForm } = this.props;
    var effects=[];
    if (hmi.effects_form.visible) {
      effects = getEffects(character, hmi.effects_form.property_path);
    }
    return (
      <EffectsForm effects={effects}
        visible={hmi.effects_form.visible}
        onHide={hideEffectsForm}
        onAdd={ (description, value) => { addEffect(hmi.effects_form.property_path, description, value); }}
        onRemove = { (effect_id) => { removeEffect(hmi.effects_form.property_path, effect_id); }} />
    );
  }
}

export default connect(state => ({
    hmi : state.hmi,
    character : state.character
  }),
  (dispatch) => ({
    addEffect: (property_path, description, value) => dispatch(actions.character.addEffect(property_path, description, value)),
    removeEffect: (property_path, effect_id) => dispatch(actions.character.removeEffect(property_path, effect_id)),
    hideEffectsForm: () => dispatch(actions.hmi.hideEffectsForm())
  })
)(EffectsView);
