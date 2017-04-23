import * as types from '../actions/character-action-types';
import {initialState} from './character-initial-state';


function updateAbility(character, ability_name) {
  var ability = character.abilities[ability_name];
  var bonus = 0;
  for (var effect in ability.effects){
    bonus += parseInt(ability.effects[effect].value,10);
  }
  ability.actual = ability.rank + bonus;
  ability.modifier = Math.floor( (ability.actual - 10) / 2 );
  var selected_skills = character.skills.filter(  (item) => { return item.ability === ability_name} );
  for (var skill_index in selected_skills) {
    var skill = selected_skills[skill_index];
    skill.actual = skill.rank + ability.modifier;
  }
}

export default function character(state = null, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.CHANGE_ABILITY_RANK:
      var rank = parseInt(action.rank, 10);
      new_state.abilities[action.name].rank = parseInt(action.rank, 10);
      updateAbility(new_state, action.name);
      return new_state;
    case types.CHANGE_SKILL_RANK:
      var index = new_state.skills.findIndex((element)=>{ return element.id === action.id});
      new_state.skills[index].rank = parseInt(action.rank, 10);
      var ability = new_state.skills[index].ability;
      new_state.skills[index].actual = new_state.skills[index].rank + new_state.abilities[ability].modifier;
      return new_state;
    case types.NEW_SKILL:
      var max_id = 0;
      for (var skill in new_state.skills) { if (new_state.skills[skill].id > max_id) { max_id = new_state.skills[skill].id; } }
      new_state.skills.push({id:max_id+1, label:{fr:action.label}, rank:0, actual:0, ability:action.ability});
      return new_state;
    case types.ADD_EFFECT:
      var max_id = 0;
      var effects = new_state.abilities[action.ability].effects;
      if (effects !== undefined) {
        for (var effect in effects) { if (effects[effect].id > max_id) { max_id = effects[effect].id; } }
        effects.push({id:max_id+1, description:action.description, value:action.value});
      }
      updateAbility(new_state, action.ability);
      return new_state
    case types.REMOVE_EFFECT:
      var effects = new_state.abilities[action.ability].effects;
      effects.splice(effects.findIndex((item)=>{item.id = action.effect}),1);
      updateAbility(new_state, action.ability);
      return new_state;
    case types.RESET_CHARACTER:
    default:
      return initialState;
  }
}
