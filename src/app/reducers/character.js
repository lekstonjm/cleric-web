import * as types from '../actions/character-action-types';
import {initialState} from './character-initial-state';

export default function character(state = null, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.CHANGE_ABILITY_RANK:
      var rank = parseInt(action.rank, 10);
      var bonus = parseInt(new_state.abilities[action.name].bonus, 10);
      var actual = rank + bonus;
      var modifier = Math.floor( (actual - 10) / 2 );
      new_state.abilities[action.name].rank = parseInt(action.rank, 10);
      new_state.abilities[action.name].actual = new_state.abilities[action.name].rank + new_state.abilities[action.name].bonus;
      new_state.abilities[action.name].modifier = Math.floor( (new_state.abilities[action.name].actual - 10) / 2 );
      for (var skill in new_state.skills) {
        if (new_state.skills[skill].ability === action.name) {
            new_state.skills[skill].actual = new_state.skills[skill].rank + new_state.abilities[action.name].modifier;
        }
      }
      return new_state;
    case types.CHANGE_SKILL_RANK:
      var index = new_state.skills.findIndex((element)=>{ return element.id === action.id});
      new_state.skills[index].rank = parseInt(action.rank, 10);
      var ability = new_state.skills[index].ability;
      new_state.skills[index].actual = new_state.skills[index].rank + new_state.abilities[ability].modifier;
      return new_state;
    case types.NEW_SKILL:
      var max_id = 0;
      for (skill in new_state.skills) { if (new_state.skills[skill].id > max_id) { max_id = new_state.skills[skill].id; } }
      new_state.skills.push({id:max_id+1, label:{fr:action.label}, rank:0, actual:0, ability:action.ability});
      return new_state;
    case types.RESET_CHARACTER:
    default:
      return initialState;
  }
}
