import * as types from '../actions/hmi-action-types';

const initialState = {
    new_skill_form : { visible : false }
  , effects_form : { visible : false, property_path : [] }
  , new_weapon_form : { visible : false}
  , new_armor_form : { visible : false }
};

export default function hmi(state = initialState, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.SHOW_NEW_SKILL_FORM:
      new_state.new_skill_form.visible = true;
      break;
    case types.HIDE_NEW_SKILL_FORM:
      new_state.new_skill_form.visible = false;
      break;
    case types.SHOW_EFFECTS_FORM:
      new_state.effects_form.visible = true;
      new_state.effects_form.property_path = action.property_path;
      break;
    case types.HIDE_EFFECTS_FORM:
      new_state.effects_form.visible = false;
      break;
    case types.SHOW_NEW_WEAPON_FORM:
      new_state.new_weapon_form.visible = true;
      break;
    case types.HIDE_NEW_WEAPON_FORM:
      new_state.new_weapon_form.visible = false;
      break;
    case types.SHOW_NEW_ARMOR_FORM:
      new_state.new_armor_form.visible = true;
      break;
    case types.HIDE_NEW_ARMOR_FORM:
      new_state.new_armor_form.visible = false;
      break;
    default:
      break;
  }
  return new_state;
}
