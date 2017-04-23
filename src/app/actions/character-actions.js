import * as types from './character-action-types';

export function resetCharacter() {
  return {
    type : types.RESET_CHARACTER
  }
}

export function changeAbilityRank(ability_name, new_rank) {
  return {
    type: types.CHANGE_ABILITY_RANK,
    name : ability_name,
    rank: new_rank
  }
}

export function changeSkillRank(skill_id, new_rank) {
  return {
    type: types.CHANGE_SKILL_RANK,
    id : skill_id,
    rank: new_rank
  }
}

export function newSkill(label, ability) {
  return {
    type: types.NEW_SKILL,
    label: label,
    ability: ability
  }
}

export function addEffect(ability, description, value) {
  return {
    type: types.ADD_EFFECT,
    ability: ability,
    description: description,
    value: value
  }
}

export function removeEffect(ability, effect) {
  return {
    type: types.REMOVE_EFFECT,
    ability: ability,
    effect: effect
  }
}
