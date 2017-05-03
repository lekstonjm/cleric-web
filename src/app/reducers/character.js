import * as types from '../actions/character-action-types';
import {initialState} from './character-initial-state';
import {getEffects, update} from '../domain/character-sheet-rules';

export default function character(state = initialState, action = {}) {
  var max_id = 0;
  var effects = null;
  var new_state = {...state};
  switch (action.type) {
    case types.RESET_CHARACTER:
      return initialState;
    case types.CHANGE_ABILITY_RANK:
      new_state.abilities[action.name].rank = parseInt(action.rank, 10);
      break;
    case types.CHANGE_SKILL_RANK:
      var index = new_state.skills.findIndex((element)=>{ return element.id === action.id});
      new_state.skills[index].rank = parseInt(action.rank, 10);
      var ability = new_state.skills[index].ability;
      new_state.skills[index].actual = new_state.skills[index].rank + new_state.abilities[ability].modifier;
      break;
    case types.NEW_SKILL:
      max_id = 0;
      for (var skill in new_state.skills) { if (new_state.skills[skill].id > max_id) { max_id = new_state.skills[skill].id; } }
      new_state.skills.push({id:max_id+1, label:{fr:action.label}, rank:0, actual:0, ability:action.ability});
      break;
    case types.ADD_EFFECT:
      max_id = 0;
      effects = getEffects(new_state, action.property_path);
      if (effects !== undefined) {
        for (var effect in effects) { if (effects[effect].id > max_id) { max_id = effects[effect].id; } }
        effects.push({id:max_id+1, description:action.description, value: parseInt(action.value,10) });
      }
      break;
    case types.REMOVE_EFFECT:
       effects = getEffects(new_state, action.property_path);
      if (effects !== undefined) {
        effects.splice(effects.findIndex((item)=>{return item.id === action.effect}),1);
      }
      break;
    case types.CHANGE_HIT_POINTS_RANK:
      new_state.hit_points.rank = parseInt(action.rank,10);
      break;
    case types.CHANGE_HIT_POINTS_DAMAGE:
      new_state.hit_points.damage = parseInt(action.damage,10);
      break;
    case types.CHANGE_LEVEL:
      new_state.level.actual = parseInt(action.level,10);
      break;
    case types.CHANGE_SAVING_THROW_RANK:
      var saving_throw = new_state.saving_throws[action.name];
      if (saving_throw !== undefined) {
        saving_throw.rank = parseInt(action.rank,10);
      }
      break;
    case types.CHANGE_BASE_ATTACK_RANK:
      new_state.attack.base.rank = parseInt(action.rank,10);
      break;
    case types.CHANGE_SIZE:
      new_state.size.actual = parseInt(action.size,10);
      break;
    default:
      break;
  }
  update(new_state);
  return new_state;
}
