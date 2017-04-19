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

export function changeSkillRank(skill_name, new_rank) {
  return {
    type: types.CHANGE_SKILL_RANK,
    name : skill_name,
    rank: new_rank
  }
}

export function newSkill(skill_name, label, ability) {
  return {
    type: types.NEW_SKILL,
    name : skill_name,
    label: label,
    ability: ability
  }
}
