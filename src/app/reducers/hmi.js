import * as types from '../actions/hmi-action-types';

const initialState = {
  new_skill_form_visible : false,
  effects_form_visible : false,
  effects_form_ability : ""
};

export default function hmi(state = initialState, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.SHOW_NEW_SKILL_FORM:
      new_state.new_skill_form_visible = true;
      return new_state;
    case types.HIDE_NEW_SKILL_FORM:
      new_state.new_skill_form_visible = false;
      return new_state;
    case types.SHOW_EFFECTS_FORM:
      new_state.effects_form_visible = true;
      new_state.effects_form_ability = action.ability;
      return new_state;
    case types.HIDE_EFFECTS_FORM:
      new_state.effects_form_visible = false;
      return new_state;
    default:
      return new_state;
  }
}
