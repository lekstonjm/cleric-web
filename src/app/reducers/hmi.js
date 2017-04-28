import * as types from '../actions/hmi-action-types';

const initialState = {
  new_skill_form : { visible : false },
  effects_form : { visible : false, property_path : [] }
};

export default function hmi(state = initialState, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.SHOW_NEW_SKILL_FORM:
      new_state.new_skill_form.visible = true;
      return new_state;
    case types.HIDE_NEW_SKILL_FORM:
      new_state.new_skill_form.visible = false;
      return new_state;
    case types.SHOW_EFFECTS_FORM:
      new_state.effects_form.visible = true;
      new_state.effects_form.property_path = action.property_path;
      return new_state;
    case types.HIDE_EFFECTS_FORM:
      new_state.effects_form.visible = false;
      return new_state;
    default:
      return new_state;
  }
}
